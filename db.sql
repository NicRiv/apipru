CREATE DATABASE if not exists taskmobile;

use taskmobile;

create table if not exists tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,

    PRIMARY KEY (id)
);

insert into tasks(title,description) value
    ('tarea one', 'alguna desc'),
    ('task2', 'esta es una cosa');

select * from tasks;