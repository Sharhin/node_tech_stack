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

create table news (
	id serial primary key,
	name text not null,
	description text not null
)

INSERT INTO news (name,description) VALUES 
	("Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non lorem pretium, blandit augue sit amet, pellentesque ante. Duis elementum orci sed justo finibus, varius porta dui dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean quis tristique erat."),
	("Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non lorem pretium, blandit augue sit amet, pellentesque ante. Duis elementum orci sed justo finibus, varius porta dui dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean quis tristique erat."),
	("Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non lorem pretium, blandit augue sit amet, pellentesque ante. Duis elementum orci sed justo finibus, varius porta dui dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean quis tristique erat."),
	("Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non lorem pretium, blandit augue sit amet, pellentesque ante. Duis elementum orci sed justo finibus, varius porta dui dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean quis tristique erat."),
	("Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non lorem pretium, blandit augue sit amet, pellentesque ante. Duis elementum orci sed justo finibus, varius porta dui dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean quis tristique erat."),
	("Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non lorem pretium, blandit augue sit amet, pellentesque ante. Duis elementum orci sed justo finibus, varius porta dui dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean quis tristique erat."),
	("Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non lorem pretium, blandit augue sit amet, pellentesque ante. Duis elementum orci sed justo finibus, varius porta dui dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean quis tristique erat."),
	("Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non lorem pretium, blandit augue sit amet, pellentesque ante. Duis elementum orci sed justo finibus, varius porta dui dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean quis tristique erat.");