FROM guidof/angular-build:latest as builder
COPY maven/angular /angular


RUN cd /angular/ && \
    npm install && \
    ng build --prod=false	

FROM nginx:alpine
COPY --from=builder /angular/dist/DocumentSearchUI /usr/share/nginx/html
COPY maven/nginx/conf /etc/nginx/conf.d/
CMD ["nginx","-g","daemon off;"]
