# DELILAH RESTÓ
-------------
Ésta aplicación corresponde al tercer proyecto de mi cursada en Acámica, en el cual tuve que construir una API REST de una casa de comidas ficticia llamada "Delilah Restó" y su correspondiente documentación. 

## Instalación

A continuación se brindarán una serie de pasos para poder instalar las dependencias necesarias e iniciar tanto el servidor como la base de datos para realizar pruebas sobre el backend de la aplicación.

1) En Visual Studio Code (VSC) posicionarse DENTRO de la carpeta "proyecto_delilah".

2) Abrir la consola de VSC (ctrl + ñ) y escribir:
    ```bash
    npm install
    ```
De esta forma se instalan todas las dependencias del archivo package.json necesarias.

3) Posicionarse dentro de la carpeta "src" en el VSC y abrir el archivo ".env.example". Eligir un password para la propiedad TKS y cambiar el nombre del archivo a ".env".

4) Dentro de la carpeta src se encuentra la carpeta "database" con un archivo llamado "creacion.sql" que contiene el código para la creación de la base de datos y de las tablas (usuarios, pedidos, platos, cantidad_platos).

5) En la misma carpeta, existe otro archivo llamado "registrosDePrueba.sql" que instala los registros de varios usuarios, platos, pedidos y cantidad_platos necesarios para probar los endpoints, incluyendo un usuario con el rol de administrador.

6) Instalar XAMPP. Ir a la carpeta donde se instaló (generalmente C:\) llamada xampp, luego entrar en la carpeta mysql, abrir la carpeta bin y dentro de ella, hacer click en la barra de direcciones y escribir "cmd" para abrir el prompt (Símbolo del sisetma) de Windows. 

7) Activar MySQL desde el panel de XAMPP haciendo click en "start".

8) Dentro del prompt, escribir:
    ```bash
    mysql -u root
    ```
Luego copiar el código de los archivos cracion.sql (primero) y registrosDePrueba.sql (último) y pegarlos en el prompt para crear las tablas y los registros.

9) Para inicializar la base de datos se debe dejar activo MySQL. El puerto utilizado por defecto es el 3306, que es el mismo utilizado en la variable de entorno DB_PORT del archivo .env.

10) En la consola de VSC, verificar que se esté DENTRO de la carpeta "src" y escribir  lo siguiente para inicializar la aplicación:
    ```bash
    node app
    ```
11) Si todo sale bien debe aparecer en la consola lo siguiente:

![](/preview.jpg)

## Nota

Dentro del archivo spec.yaml se encuentra la documentación necesaria con un detalle de todas las operaciones CRUD y endpoints con los que cuenta el proyecto.