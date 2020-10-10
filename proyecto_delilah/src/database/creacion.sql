DROP DATABASE IF EXISTS delilahresto;

CREATE DATABASE delilahresto;

USE delilahresto;

CREATE TABLE usuarios (
    id_usuario int(11) AUTO_INCREMENT NOT NULL,
    username varchar(36) NOT NULL,
    nombre_completo varchar(36) NOT NULL,
    email varchar(36) NOT NULL,
    telefono varchar(36) NOT NULL,
    direccion varchar(64) NOT NULL,
    password varchar(36) NOT NULL,
    estado_usuario enum("H", "E") NULL DEFAULT "H", 
    administrador enum("T", "F") NULL DEFAULT "F", 

    primary key(id_usuario)

) ENGINE=InnoDB;

CREATE TABLE pedidos (
    id_pedido int(11) AUTO_INCREMENT NOT NULL,
    id_usuario1 int(11) NOT NULL,
    fecha timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    tipo_pago enum("efectivo", "debito", "credito") NOT NULL,
    total decimal(8,2) unsigned NOT NULL,
    estado_pedido enum("nuevo", "en preparacion", "en camino", "entregado", "cancelado") NULL DEFAULT "nuevo",

    primary key(id_pedido),
    CONSTRAINT FK_UsuarioPedido FOREIGN KEY (id_usuario1)
    REFERENCES usuarios(id_usuario)

) ENGINE=InnoDB;

CREATE TABLE platos (
    id_plato int(11) AUTO_INCREMENT NOT NULL,
    nombre_plato varchar(36) NOT NULL,
    precio decimal(8,2) unsigned NOT NULL,
    estado_plato enum("H", "E") NULL DEFAULT "H",

    primary key(id_plato)

) ENGINE=InnoDB;

CREATE TABLE cantidad_platos (
    id_pedido1 int(11) NOT NULL,
    id_plato1 int(11) NOT NULL,
    cantidad int(11) unsigned NOT NULL,

    primary key(id_pedido1, id_plato1),
    FOREIGN KEY (id_pedido1) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_plato1) REFERENCES platos(id_plato)

) ENGINE=InnoDB;