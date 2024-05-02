FROM nginx:latest

COPY docker/dev/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
