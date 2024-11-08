# Descripción

## Correr en dev

1. Clonar el respositorio
2. Crear una copia de `env.template` y renombrarlo a `.env` y cambiar las variables de entorno
3. Instalar dependencias ` npm install`
4. Levantar la base de datos `docker compose up -d`
5. Correr las migraciones de Prisma `npx prisma migrate dev`
6. ejecutar seed ` npx run seed`
7. Correr el proyecto `npm run dev`

## Correr en prod
