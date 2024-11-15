---
layout: post
title: Utilizando HTTP2 con Docker y Nginx
date: 2024-10-12
---

# HTTP/2+Docker+Nginx

La idea surgió por la nacesidad de [habilitar HTTP/2 en Openshift](https://docs.openshift.com/container-platform/4.14/networking/ingress-operator.html#nw-http2-haproxy_configuring-ingress) y de contar con una imagen que ya estuviese preparada para desplegar y poder validad que se esta utilizando el protocolo satisfactoriamente. En esta guía utilizaré Docker.

## Pasos

1. Ejecutar los siguientes comandos para preparar los certificados que utilizaremos (estos son autofirmados para los propósitos del tutorial):

   ```
   mkdir certs
   openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./certs/nginx.key -out ./certs/nginx.crt
   ```

1. Crear el docker-compose.yml:

   ```
   services:
     nginx:
       image: lorcopotia/my-http2-app:latest
       ports:
         - "443:443" 
       volumes:
          - ./certs:/etc/nginx/certs:ro
          #- ./html:/usr/share/nginx/html # Descomentar y poner el directorio vuestra web
    restart: always
   ```

1. Ejecutar el siguiente comando para inicializar el contenedor:

   ```
   docker compose up -d
   ```

1. Abrir `https://localhost` el tu navegador favorito e inspecciona con Developer tools. En la pestaña de _Red_ deberias poder ver `h2` en la columna _protocol_.