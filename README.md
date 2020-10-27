DELILAH RESTÓ (Mauricio Cucco)
-------------

1) En Visual Studio Code (VSC) posicionarse DENTRO de la carpeta "proyecto_delilah".

2) Abrir la consola de VSC y escribir:
	npm install  
(Instala todas las dependencias del archivo package.json necesarias para correr todo.)

3) Posicionarse dentro de la carpeta "src" en el VSC y dentro del archivo ".env.example" eligir un password para la propiedad TKS y cambiar el nombre del archivo a ".env".

4) Dentro de la carpeta src se encuentra la carpeta "database" con un archivo llamado "creacion.sql" que contiene el código para la creación de la base de datos y de las tablas(usuarios, pedidos, platos, cantidad_platos).

5) En la misma carpeta, existe otro archivo llamado "registrosDePrueba.sql" que instala los registros de varios usuarios, platos, pedidos y cantidad_platos necesarios para probar los endpoints, incluyendo un administrador (que en este caso, soy yo).

6) Instalar XAMPP. Ir a la carpeta donde se instaló (generalmente C:\) llamada xampp, luego entrar en la carpeta mysql, luego en la carpeta bin y dentro de ella, hacer click en la barra de direcciones y escribir "cmd" para abrir el prompt de Windows. 

7) Activar MySQL desde el panel de XAMPP haciendo click en "start".

8) Dentro del prompt, escribir "mysql -u root" y luego copiar el código de los archivos cracion.sql (primero) y registrosDePrueba.sql (último) y pegarlos en el prompt para crear las tablas y los registros.

9) Para inicializar la base de datos se debe dejar activo MySQL. El puerto utilizado por defecto es el 3306, que es el mismo utilizado en la variable de entorno DB_PORT del archivo .env.

10) En la consola de VSC, verificar que se esté DENTRO de la carpeta "src" y escribir  lo siguiente para inicializar la aplicación:
	node app

11) Si todo sale bien debe aparecer en la consola lo siguiente:

``SERVER UP!!!  
Executing (default): SELECT 1+1 AS result  
Connection has been established successfully.´´  




