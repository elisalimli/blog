FROM node:14

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

COPY ./prisma ./prisma

RUN yarn

COPY . .
COPY .env.production .env

RUN yarn build

RUN npx prisma migrate deploy
RUN npx prisma generate


ENV NODE_ENV production
#DATABASE_URL="postgresql://postgres:postgres@localhost:5432/blog?schema=public"


EXPOSE 8080
CMD [ "node", "dist/index.js" ]
USER node