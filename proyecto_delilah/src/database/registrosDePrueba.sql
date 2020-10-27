INSERT INTO usuarios (id_usuario, username, nombre_completo, email, telefono, direccion, password, administrador) VALUES (1, "mauri88", "Mauricio Cucco", "mscucco@hotmail.com", "02255463728", "Calle 27 nº 678", MD5("p3pit*"), "T"),
(2, "RickyF", "Ricardo Fort", "mamalaloz@hotmail.com", "1134564789", "Paseo 130 entre 5 y 6", MD5("cutucuch^ll0"), "F"),
(3, "romanel10", "Roman Riquelme", "el10@gmail.com", "1134567890", "Alameda 305 nº 202", MD5("gamb3t@"), "F"),
(4, "elpresi", "Alberto Fernandez", "presidencia@yahoo.com", "1109876543", "Av. Buenos Aires y paseo 103", MD5("dylanc1t*"), "F"),
(5, "cleopatra", "Mirta Legrand", "mirtu@gmail.com", "1134567890", "Paseo 135 entre avenidas 6 y 7", MD5("caraj0m|er"), "F");

INSERT INTO platos VALUES (1, "Hamburguesa veggie", 250, "H"),
(2, "Hamburguesa pollo", 230, "H"),
(3, "Hamburguesa cerdo", 235, "H"),
(4, "Hamburguesa clásica", 240, "H"),
(5, "Papas a la provenzal", 250, "H"),
(6, "Papas solas", 200, "H"),
(7, "Papas picantes", 220, "H"),
(8, "Rabas", 350, "H");

INSERT INTO pedidos VALUES (1, 2, current_timestamp, "efectivo", 710, "nuevo"),
(2, 2, current_timestamp, "debito", 700, "nuevo"),
(3, 3, current_timestamp, "credito", 695, "nuevo");

INSERT INTO cantidad_platos VALUES (1, 2, 2),
(1, 5, 1),
(2, 8, 2),
(3, 3, 1),
(3, 4, 1),
(3, 7, 1);


