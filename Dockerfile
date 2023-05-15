FROM stefanwin/node-alpine-pnpm
RUN pnpm install
RUN pnpm build

# 指定Node版本
FROM nginx:1.21.6-alpine

# 复制 package.json
COPY ./dist /usr/share/nginx/html/
COPY default.conf /etc/nginx/nginx.conf

EXPOSE 8080
