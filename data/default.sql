create table todo (
	id serial primary key,
	title text not null,
	description text,
	users_id int not null
);

create table users (
	id serial primary key,
	first_name text not null,
	last_name text not null,
	email text not null,
	password text not null
);