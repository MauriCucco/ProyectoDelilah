# DELILAH RESTÓ

Ésta aplicación corresponde al tercer proyecto de mi cursada en Acámica, en el cual tuve que construir un **API REST** de una casa de comidas ficticia llamada "Delilah Restó" y su correspondiente documentación creada con _Swagger_.

- La base de datos utilizada fue _MariaDB_.
- Como ORM utilicé _Sequelize_.
- Utilicé _Node.js_ con _Express_ y los siguientes módulos:
  - "body-parser".
  - "cors".
  - "dotenv".
  - "express".
  - "express-jwt".
  - "express-rate-limit".
  - "helmet".
  - "jsonwebtoken".
  - "mariadb".
  - "nodemailer".
  - "sequelize".
  - "uuid".

## Instalación

A continuación se brindarán una serie de pasos para poder instalar las dependencias necesarias e iniciar tanto el servidor como la base de datos para realizar pruebas sobre el backend de la aplicación (se recomienda utilizar _Postman_)

1. En _Visual Studio Code_ (VSC) posicionarse DENTRO de la carpeta "proyecto_delilah".

2. Abrir la consola de VSC (ctrl + ñ) y escribir:

   ```bash
   npm install
   ```

   De esta forma se instalan todas las dependencias del archivo package.json necesarias.

3. Posicionarse dentro de la carpeta "src" en el VSC y abrir el archivo ".env.example". Eligir un password a elección para la propiedad TKS y cambiar el nombre del archivo a ".env".

4. Dentro de la carpeta src se encuentra la carpeta "database" con un archivo llamado "creacion.sql" que contiene el código para la creación de la base de datos y de las tablas necesarias (usuarios, pedidos, platos, cantidad_platos).

5. En la misma carpeta, existe otro archivo llamado "registrosDePrueba.sql" que instala los registros de varios usuarios, platos, pedidos y cantidad_platos que sirven de ejemplos para probar los endpoints, incluyendo un usuario con el rol de administrador.

6. Instalar _XAMPP_ (https://www.apachefriends.org/es/index.html). Ir a la carpeta donde se instaló (generalmente C:\) llamada "xampp", luego entrar en la carpeta mysql, abrir la carpeta bin y dentro de ella, hacer click en la barra de direcciones y escribir "cmd" para abrir el prompt (Símbolo del sistema) de Windows.

7. Activar MySQL desde el panel de XAMPP haciendo click en "start".

8. Dentro del prompt, escribir:

   ```bash
   mysql -u root
   ```

   Luego copiar el código de los archivos cracion.sql (primero) y registrosDePrueba.sql (último) y pegarlos en el prompt para crear las tablas y los registros.

9. Para inicializar la base de datos se debe dejar activo MySQL. El puerto utilizado por defecto es el 3306, que es el mismo utilizado en la variable de entorno DB_PORT del archivo .env.

10. En la consola de VSC, verificar que se esté DENTRO de la carpeta "src" y escribir lo siguiente para inicializar la aplicación:
    ```bash
    node app
    ```
11. Si todo sale bien debe aparecer en la consola lo siguiente:
    ```bash
    SERVER UP!!
    Connection has been stablished succesfully.
    ```

## Nota

Dentro del archivo spec.yaml se encuentra la documentación necesaria con un detalle de todas las operaciones CRUD y endpoints con los que cuenta el proyecto. El mismo se puede visualizar en https://editor.swagger.io/
