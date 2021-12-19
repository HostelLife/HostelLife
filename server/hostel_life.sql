drop table if exists events;
drop table if exists users;
drop table if exists hostels;
drop table if exists bookings;

CREATE TABLE events (
  id        SERIAL PRIMARY KEY,
  title      VARCHAR(30) NOT NULL,
  description     VARCHAR(2000),
  startTime   VARCHAR(120),
  latitude    float, 
  longitude    float,
  imageFileName     VARCHAR(120),
  category  VARCHAR(120) 
);

CREATE TABLE users (
  id        SERIAL primary key,
  user_email VARCHAR (120) not null
);

CREATE TABLE hostels (
  id        SERIAL primary key,
  hostel_name VARCHAR (120) not null
);

CREATE TABLE bookings (
  user_id INT REFERENCES users(id),
  hostel_id INT REFERENCES hostels(id),
  activation_date DATE not null,
  deactivation_date DATE not null
);


INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Sagrada Famililia', 'Make your visit to the Sagrada Familia unforgettable with a 1.5-hour guided tour of Gaudí’s masterpiece. See the Basilica’s dream-like façade and interior in a small-group or private tour setting accompanied by an expert guide. During the tour you will learn about the ongoing construction, the current predicted completion date, and the generations of craftspeople, architects and artists learned how to bring Gaudi’s vision to life.','10:00am', 41.4034522, 2.1742895, 'sagradaFamilia.jpg', 'visit_places');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Casabatallo', 'Casa Batlló is a building in the center of Barcelona. It was designed by Antoni Gaudí, and is considered one of his masterpieces. A remodel of a previously built house, it was redesigned in 1904 by Gaudí and has been refurbished several times after that. Gaudís assistants Domènec Sugrañes i Gras, Josep Canaleta and Joan Rubió also contributed to the renovation project.','12:00pm', 41.391747, 2.165067, 'casabatllo.jpg', 'visit_places');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('La Rambla', 'La Rambla is a street in central Barcelona. A tree-lined pedestrian street, it stretches for 1.2 km connecting the Plaça de Catalunya in its center with the Christopher Columbus Monument at Port Vell. La Rambla forms the boundary between the neighbourhoods of the Barri Gòtic to the east and the El Raval to the west.','3:00pm', 41.3856127, 2.1676279, 'La-Rambla.jpg', 'visit_places');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Parque Guell', 'Parc Güell is a privatized park system composed of gardens and architectural elements located on Carmel Hill, in Barcelona, Catalonia, Spain. Carmel Hill belongs to the mountain range of Collserola, the Parc del Carmel is located on the northern face.','6:00pm', 41.4144988, 2.1505058, 'Park_Guell.jpg', 'visit_places');

INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Barceloneta Beach', 'Barceloneta beach is 422 metres long and is one of the oldest and most traditional in the city. It is a favourite amongst foreign visitors, and also youth groups and schools, who often use it for activities.','10:00am', 41.3792774, 2.1897244, 'barcelonita.jpg', 'beach');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Llevant Beach', 'As its name suggests, this is Barcelonas easternmost beach. It opened in 2006 making it the citys newest beach. Until relatively recently, factories and other facilities almost reached the shoreline but today the beach is another of the seafront recreational spaces used by locals and visitors alike.','12:00pm', 41.4043313, 2.2161436, 'Llevant.jpg', 'beach');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Mar Bella', 'Mar Bella beach belongs to the Sant Martí district and it is mostly used by residents from this area, who go there regularly and in large numbers. The beach has a designated nudist area. Near the Bac de Roda breakwater there is a childrens playground and a volleyball court.','2:00pm', 41.3980783, 2.2101345, 'Mar_Bella.jpg', 'beach');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Nova Mar Bella', 'Nova Mar Bella beach belongs to the Sant Martí district and it is mostly used by residents from this area. It is considered one of quietest in the city. This beach also has a volleyball court located halfway along.','4:00pm', 41.4015821, 2.213375, 'Nova_Mar_Bella.jpg', 'beach');

INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Montserrat National Park', 'Montserrat is one of the greatest symbols of Catalonia, that from being a religious centre has become a bastion of Catalan identity, without ignoring the natural environment and its characteristic morphology and structure of rounded and abrupt rocks and needles.','8:00 am', 41.7972174, 1.4227635, 'Montserrat.jpg', 'hiking');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Parque Natural del Montseny','The Montseny Natural Park (in Catalan Parc Natural del Montseny ) is a Spanish protected natural area located in the province of Barcelona , Catalonia . It is part of the 12 natural spaces managed by the Barcelona Provincial Council and protects an area of ​​the Catalan pre-coastal range , of which the Montseny massif is the highest. It includes territories in the regions of Osona , Vallés Oriental and La Selva .', '10:00am', 41.728594, 2.4369508, 'ParqueNatural.jpg', 'hiking');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Montjuic','The smallest of Barcelona’s surrounding hills, Montjuïc is home to the historic Montjuïc Castle, the Olympic Stadium and the Joan Miró foundation as well as numerous public gardens. There are many ways to enjoy a walk through Montjuïc and plenty of stops to be made along the way. One of the nicest trails starts in Poble-Sec through the Grec Gardens, following the Laribel Stairs up to the level of Miró Foundation. From there walk round the Av. ','6:00pm', 41.3640154, 2.1587383, 'Montjuic.jpg', 'hiking');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Tibidabo Mountain','This is one of the most famous routes for walkers and cyclists in Barcelona, as it offers both great panoramas of the city as well as a nearly 10km trail on mostly flat tracks. Located on the aforementioned mount Tibidabo, the Carretera de les Aigues (or ‘Road of the Waters’) is named after the pipes which once ran along the route delivering water to nearby homes. The route can be accessed to the south just behind the Hospital de Sant Joan de Déu in Esplugues de Llobregat. To the north, walk up the Av. ','12:00pm', 41.4224981, 2.1011014, 'TibidaboMountain.jpg', 'hiking');

INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Coll de Sant Bartomeu','The ascent to Coll de Sant Bartomeu begins at the junction of the C-1415 and BV-5106 roads , the latter being the one through which the port runs.We can divide this climb into two quite different parts . A first part until arriving at the town of Órrius, where the ascent is characterized by quite regular ramps without too hard maximum slopes, finding some small rest after Km 2. ','6:00am', 41.5630583, 2.3415633, 'Coll_de_Orrius.jpg', 'biking');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Forat del Vent','Vent Hole is a small col de Collserola linking Barcelona with Cerdanyola del Vallès . It is located at an altitude of 349 meters above sea level. It is located in what is also known as the Horta road . From the Forat del vent there is a good view; you can even see the Pyrenees . ','6:00pm', 41.4472191, 2.1172683, 'Forat_del_vent.jpg', 'biking');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Rabassada and Tibidabo','Mount Tibidabo Walking Route is a 5.3 mile heavily trafficked out and back trail located near Barcelona, Barcelona, Spain that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is accessible year-round.','6:00pm',41.4225152, 2.1098562, 'Rabassada_Tibidabo.jpg', 'biking');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('La Rierada', 'La Rierada - Valvidriera is a 11.9 kilometer loop trail located near Molins de Rei, Barcelona, Spain that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, running, and mountain biking and is accessible year-round.','6:00pm', 41.4359189, 2.0364786, 'La_Rierada.jpg', 'biking');

INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('La Roca Village','La Roca Village - Barcelona. The best brands at discount prices in the same village! At about forty minutes north of Barcelona is a little paradise for the serial shoppers: La Roca Village.','6:00pm', 41.6112248, 2.3420901, 'la_roca-village.jpg', 'shopping');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('La Rambla','This page will give you detailed information on the famous La Rambla, including its main attractions, sights of interest and links to hotels on the Ramblas. La Rambla is also known as any of the following; Ramblas, or Las Ramblas.','6:00pm', 41.3856127, 2.1676279, 'La-Rambla.jpg', 'shopping');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Camp Nou','Enjoy the more than 2,000 m² of the Barça experience in the Camp Nou store. Here you will find official FC Barcelona articles: Nike shirts, training kits, scarves, hats, coats, shorts and more. There are collections available for men, women and children. We have everything you need to show the world which team you support.','6:00pm', 41.3809, 2.1206311, 'Barca_official_storeCampNou.jpg', 'shopping');

INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('La Antic Bocol Del Gotic','Restautant with Catalan dishes using seasonal, local ingredients in a historic space with stone walls & wood beams. Restaurant where you can find dishes with fresh ingredients of the highest quality, with a simple and careful preparation in order to preserve all your tastes.','6:00pm', 41.3820767, 2.1789816, 'LaAnticGotic.png', 'food');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('La Ovella Negra','La Ovella Negra is a bar in Barcelona where you can have some drinks and some beers, but you can also have something to eat, all for very good prices! It is a typical old bar where people from all around likes to come and spend hours talking and having good moments.','6:00pm', 41.3844542, 2.167379, 'LaOvella.jpg', 'food');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('7 Portes','185 years cooking from Barcelona, ​​watching this beautiful Mediterranean city grow, witnessing great moments with personalities from all over the world and cultural events; and also endearing moments for many families.It is an honor to be one of the most iconic restaurants in the city','6:00pm', 41.3821413, 2.1810843, '7_Portes.jpg', 'food');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Martinez','Rice dishes are always associated with seaside terraces, but at Martínez, paella takes to the air. High up on the slopes of Montjuïc, it has a 300m2 terrace, sheltered by parasols, with views over the port and the city below. By day it’s pretty, by night it’s dazzling. Martínez serves a stratospheric take on paella, classic tapas and deep-fried seafood. ','6:00pm', 41.3695833, 2.1702737, 'Martinez.jpg', 'food');

INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Shoko','At nightfall, Shôko transforms from a restaurant into a nightclub with all the great musical styles represented. It’s very common to see top-level French rappers and Latin music artists.','6:00pm', 41.3855249, 2.1947892, 'shoko.png', 'party');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Otto Zutz',' It’s one of the few places that still retains that clandestine spirit. You’ll be able to see it in Los Altos, the private space of the club. Will you figure out how to find it?','6:00pm', 41.4004038, 2.1478314, 'otto-zutz.png', 'party');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Moog Barcelona','Moog is the heart of electronic music in Barcelona. It offers you a much more intimate atmosphere than that of other great halls such as Razzmatazz or Apolo. The club opened almost 20 years ago in the Old Town of Barcelona,','6:00pm', 41.3783203, 2.1729901, 'moog-barcelona.png', 'party');
INSERT INTO events (title, description, startTime, latitude, longitude, imageFileName, category) VALUES ('Macarena Club','Can you believe a nightclub has a legal capacity of 84 people? Yes, it is a micro-club. There are several in Barcelona, but this is the best of them all: Funktion One sound and open seven days a week.','6:00pm', 41.3794643, 2.1746629, 'macarena-club.png', 'party');


INSERT INTO users (user_email) VALUES ('user1@mail.com');
INSERT INTO users (user_email) VALUES ('user2@mail.com');
INSERT INTO users (user_email) VALUES ('user3@mail.com');
INSERT INTO users (user_email) VALUES ('user4@mail.com');


INSERT INTO hostels (hostel_name) VALUES ('Hostel One');
INSERT INTO hostels (hostel_name) VALUES ('Hostel Two');
INSERT INTO hostels (hostel_name) VALUES ('Hostel Three');
INSERT INTO hostels (hostel_name) VALUES ('Hostel Four');