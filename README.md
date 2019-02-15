Document Search UI
=================
This is a Search interface onto the Search API, and as such is expected to be
incorporated into the docker swarm composition.

# Angular
Obviously the main component of this application is the angular web application and 
this is in the `src/main/angular` folder

# Nginx 
NodeJS&trade; is not required due to fact that the dynamic content is provided 
by the Golang&trade; Server inside the `SearchQueryAPI`. Where the Angular&trade;
code is hosted as static code in the Nginx&trade; and the `/api` requests are 
forward using the `proxy_pass` below.

``` Proxy forwarding 
  location /api/ {
    set $searchApi http://searchQuery:10001;
    proxy_pass $searchApi;
  }
```

# Building and Deploying with Docker
To build the Nginx container containing the Angular code we need to build
the angular code base inside `src/main/angular` and copy it to the `/usr/share/nginx/html`
directory. The aim of the `Dockerfile` definition is to enable the Angular 
code to be built and then dockerized with out the need for the client to 
install NodeJs or Angular. (Although you may wish to, to assist with the 
development)

This is done by the magic of Docker, I have prepare earlier ( in BluePeter&trade; 
style) a docker image `guidof/angular-build` that has the required NodeJS&trade;
and Angular&trade; binarys.

Therefore we use this image first to build the code, and then copy it
across to the new base image, all using a single [Dockerfile](src/main/docker/Dockerfile)
 
