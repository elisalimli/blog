"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["AUTHOR"] = "AUTHOR";
    Role["ADMIN"] = "ADMIN";
})(Role = exports.Role || (exports.Role = {}));
TypeGraphQL.registerEnumType(Role, {
    name: "Role",
    description: undefined,
});
