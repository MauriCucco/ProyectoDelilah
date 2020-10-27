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
    password varchar(40) NOT NULL,
    estado_usuario enum("H", "E") NULL DEFAULT "H",
    uuid_correo varchar(100) NULL,
    token_correo varchar(100) NULL,
    habilitado_correo tinyint NULL DEFAULT 0,
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

    PRIMARY KEY(id_pedido),
    CONSTRAINT FK_UsuarioPedido FOREIGN KEY (id_usuario1)
    REFERENCES usuarios(id_usuario)

) ENGINE=InnoDB;

CREATE TABLE platos (
    id_plato int(11) AUTO_INCREMENT NOT NULL,
    nombre_plato varchar(36) NOT NULL,
    precio decimal(8,2) unsigned NOT NULL,
    estado_plato enum("H", "E") NULL DEFAULT "H",

    PRIMARY KEY(id_plato)

) ENGINE=InnoDB;

CREATE TABLE cantidad_platos (
    id_pedido1 int(11) NOT NULL,
    id_plato1 int(11) NOT NULL,
    cantidad int(11) unsigned NOT NULL,

    PRIMARY KEY(id_pedido1, id_plato1),
    CONSTRAINT FK_CantidadPedido FOREIGN KEY (id_pedido1) REFERENCES pedidos(id_pedido),
    CONSTRAINT FK_CantidadPlato FOREIGN KEY (id_plato1) REFERENCES platos(id_plato)

) ENGINE=InnoDB;