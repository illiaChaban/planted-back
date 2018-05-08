
CREATE TABLE users (
    username text,
    email text,
    passw text,
    userid SERIAL UNIQUE,
    avatar text DEFAULT 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlDPRr1xSW0lukY2EmVpAx5Ye1S8H5luUVOK2IqFdcsjCDQxK'    
);

CREATE TABLE plant_data (
    userid SERIAL,    
    temp text,
    sun text,
    moist text,
    ph text
);

INSERT INTO users VALUES(
    'test1',
    'test1@gmail.com',
    '$2b$10$4WDy9wvyLYga4fXveTmz.OZGG/EbF6BX1RMbcPnJ7E4WZJuXb0tOK'
);

INSERT INTO users VALUES(
    'test2',
    'test2@gmail.com',
    '$2b$10$Z9Ohg.0jzgaB5wGO1fhmY.R.vvYFXIy6elLMBIu/HLXgMsQ2JsbHG'
);

INSERT INTO plant_data VALUES(
    '1',
    '75 F',
    '1050 W/m2',
    '20%',
    '5'
);

INSERT INTO plant_data VALUES(
    '1',
    '72 F',
    '900 W/m2',
    '22%',
    '4.8'
);

INSERT INTO plant_data VALUES(
    '1',
    '50 F',
    '700 W/m2',
    '23%',
    '4.7'
);

INSERT INTO plant_data VALUES(
    '2',
    '62 F',
    '950 W/m2',
    '15%',
    '2'
);

INSERT INTO plant_data VALUES(
    '2',
    '70 F',
    '1050 W/m2',
    '15%',
    '2.3'
);

INSERT INTO plant_data VALUES(
    '2',
    '80 F',
    '1200 W/m2',
    '16%',
    '2.1'
);


