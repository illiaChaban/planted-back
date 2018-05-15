
CREATE TABLE users (
    username text,
    email text,
    passw text,
    avatar text DEFAULT 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlDPRr1xSW0lukY2EmVpAx5Ye1S8H5luUVOK2IqFdcsjCDQxK',
    userid SERIAL PRIMARY KEY   
);

CREATE TABLE plant_data (
    userid integer NOT NULL,    
    temp FLOAT,
    sun FLOAT,
    moist FLOAT,
    humidity FLOAT,
    created timestamp without time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'EDT'),
    dataid SERIAL PRIMARY KEY 
);

INSERT INTO users (
    username, email, passw
) VALUES(
    'test1',
    'test1@gmail.com',
    '$2b$10$4WDy9wvyLYga4fXveTmz.OZGG/EbF6BX1RMbcPnJ7E4WZJuXb0tOK'
);

INSERT INTO users (
    username, email, passw
) VALUES(
    'test2',
    'test2@gmail.com',
    '$2b$10$Z9Ohg.0jzgaB5wGO1fhmY.R.vvYFXIy6elLMBIu/HLXgMsQ2JsbHG'
);

INSERT INTO plant_data (
    userid, temp, sun, moist, humidity
) VALUES(
    1,
    75,
    1050,
    20,
    5
);

INSERT INTO plant_data  (
    userid, temp, sun, moist, humidity
) VALUES(
    1,
    72,
    900,
    22,
    4.8
);

INSERT INTO plant_data (
    userid, temp, sun, moist, humidity
) VALUES(
    1,
    50,
    700,
    23,
    4.7
);

INSERT INTO plant_data (
    userid, temp, sun, moist, humidity
) VALUES(
    2,
    62,
    950,
    15,
    2
);

INSERT INTO plant_data  (
    userid, temp, sun, moist, humidity
) VALUES(
    2,
    70,
    1050,
    15,
    2.3
);

INSERT INTO plant_data (
    userid, temp, sun, moist, humidity
)  VALUES(
    2,
    80,
    1200,
    16,
    2.1
);

INSERT INTO plant_data (
    userid, temp, sun, moist, humidity
)  VALUES(
    2,
    78,
    1100,
    17,
    2.0
);

