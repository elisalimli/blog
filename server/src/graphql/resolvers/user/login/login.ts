import * as argon2 from "argon2";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import * as yup from "yup";
import { formatYupError } from "../../../../utils/formatYupError";
import { MyContext } from "../../../../utils/MyContext";
import { User } from "../../../../../generated";
import { LoginInput } from "../../../inputs/user/LoginInput";
import { RegistrationResponse } from "../../../responses/user/RegistrationResponse";
import { FieldError } from "../../../shared/FieldError";

const schema = yup.object().shape({
  usernameOrEmail: yup.string().min(2, "shortUsername"),
  password: yup.string().min(3, "shortPassword"),
});

@Resolver(User)
export class LoginResolver {
  @Mutation(() => RegistrationResponse)
  async login(
    @Arg("input") input: LoginInput,
    @Ctx() { req, prisma }: MyContext
  ): Promise<RegistrationResponse> {
    try {
      await schema.validate(input, { abortEarly: false });
    } catch (err) {
      return {
        ok: false,
        errors: formatYupError(err),
      };
    }

    const errors: Array<FieldError> = [];

    let valid = false;
    const user = (await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: input.usernameOrEmail,
          },
          { username: input.usernameOrEmail },
        ],
      },
    })) as User;

    if (user) valid = await argon2.verify(user.password!, input.password);

    if (!valid)
      errors.push({ field: "password", message: "Password is incorrect" });
    if (!user)
      errors.push({
        field: "usernameOrEmail",
        message: "Username or email doesn't exist",
      });

    if (errors.length)
      return {
        ok: false,
        errors,
      };

    req.session.userId = user.id;

    return {
      ok: true,
      user,
    };
  }
}
