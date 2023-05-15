FROM stefanwin/node-alpine-pnpm AS Builder

WORKDIR /usr/src/app

COPY . .

RUN pnpm install
RUN pnpm build

# 指定Node版本
FROM nginx:1.21.6-alpine as Deploy

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' > /etc/timezone

WORKDIR /usr/share/nginx/html

# 复制 package.json
COPY --from=Builder /usr/src/app/dist .
COPY --from=Builder /usr/src/app/default.conf /etc/nginx/nginx.conf

EXPOSE 8080
