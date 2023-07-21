# Stage 1 - the build process
FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
# COPY package-lock.json .
RUN npm config set registry http://registry.npmjs.org/
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.21.0-alpine as production

# 将自定义的NGINX配置文件复制到镜像中

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
COPY nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# TEMP Stage 2 - serve 
# CMD [ "npx", "serve", "build" ]