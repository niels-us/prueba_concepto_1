# version de node
FROM node:14-alpine3.12

# si no existe la carpeta la crea
RUN mkdir -p /app

# se mueve al directorio de trabajo dentro del contenedor
WORKDIR /app

# copia los archivos de configuracion package
COPY package*.json ./

#instala las dependencias y crea el node_modules en el contenedor
RUN npm install

#copia todos los archivos hacia el contenedor
#.dockerignore es para que no copie los archivos que no queremos con node_modules
COPY . .

EXPOSE 3000

# ejecuta el comando para arrancar el programa
CMD [ "npm", "run", "dev" ]