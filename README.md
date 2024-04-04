# Taxi 24 Backend

## instalacion

Es necesario contar con la version de node <= a las v18.0.0 de lo contrario puede tener inconvenientes.
En caso de tener una version menor, utilize [nvm](https://github.com/nvm-sh/nvm) como manejador de paquete de nodejs

```bash
$ nvm install v18.17.1

$ nvm use v18.17.1

$ npm install
```

Es importante destacar que la configuracion para exponer el servicio queda de parte de quien aloja.
Recomendados el uso de [pm2](https://pm2.keymetrics.io/) para mantener el servicio activo

## Iniciar el servicio

Todas la variables de entorno estan especificada. Por lo cual, solo necesita correr el servicio en el modo especificado:

```bash
# Dev
$ npm run start:dev

# QA
$ npm run start:stg

# Prod
$ npm run start:prd
```

## Actualizar repositorio

Para poder sincronizar los cambio, es necesario ingresar la siguiente lineas de comando segun el ambiente:

```bash
# Dev
$ git pull origin develop

# Qa
$ git pull origin staging

#Prod
git pull origin master

#EJECUTAR SEEDS
npm run seed
```

## Ejecutar Docker-compose

```bash
docker-compose up -d
```

## Documento Swagger

http://localhost:3000/doc-api

## Variables de entorno

```js
NODE_TLS_REJECT_UNAUTHORIZED=0
PORT=3000
POSTGRESS_DB=taxi24
POSTGRESS_HOST=localhost
POSTGRESS_USER=taxi
POSTGRESS_PASSWORD=PhZO90KL3Dt6fWmo9Y3XVz
POSTGRESS_PORT=5432
```

## License

Nest is [MIT licensed](LICENSE).
