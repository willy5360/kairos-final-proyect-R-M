FROM node:14.19.1-alpine3.14 as builder
RUN mkdir /rick-app
WORKDIR /rick-app
COPY . .
RUN npm ci
RUN npm run build -- --output-path=dist

FROM nginx:1.13.3-alpine
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /rick-app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]