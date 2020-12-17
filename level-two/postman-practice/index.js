//1) GET a list of planets
// {
//     "count": 60,
//     "next": "http://swapi.dev/api/planets/?page=2",
//     "previous": null,
//     "results": [
//         {
//             "name": "Tatooine",
//             "rotation_period": "23",
//             "orbital_period": "304",
//             "diameter": "10465",
//             "climate": "arid",
//             "gravity": "1 standard",
//             "terrain": "desert",
//             "surface_water": "1",
//             "population": "200000",
//             "residents": [
//                 "http://swapi.dev/api/people/1/",
//                 "http://swapi.dev/api/people/2/",
//                 "http://swapi.dev/api/people/4/",
//                 "http://swapi.dev/api/people/6/",
//                 "http://swapi.dev/api/people/7/",
//                 "http://swapi.dev/api/people/8/",
//                 "http://swapi.dev/api/people/9/",
//                 "http://swapi.dev/api/people/11/",
//                 "http://swapi.dev/api/people/43/",
//                 "http://swapi.dev/api/people/62/"
//             ],
//             "films": [
//                 "http://swapi.dev/api/films/1/",
//                 "http://swapi.dev/api/films/3/",
//                 "http://swapi.dev/api/films/4/",
//                 "http://swapi.dev/api/films/5/",
//                 "http://swapi.dev/api/films/6/"
//             ],
//             "created": "2014-12-09T13:50:49.641000Z",
//             "edited": "2014-12-20T20:58:18.411000Z",
//             "url": "http://swapi.dev/api/planets/1/"
//         },
//         {
//             "name": "Alderaan",
//             "rotation_period": "24",
//             "orbital_period": "364",
//             "diameter": "12500",
//             "climate": "temperate",
//             "gravity": "1 standard",
//             "terrain": "grasslands, mountains",
//             "surface_water": "40",
//             "population": "2000000000",
//             "residents": [
//                 "http://swapi.dev/api/people/5/",
//                 "http://swapi.dev/api/people/68/",
//                 "http://swapi.dev/api/people/81/"
//             ],
//             "films": [
//                 "http://swapi.dev/api/films/1/",
//                 "http://swapi.dev/api/films/6/"
//             ],
//             "created": "2014-12-10T11:35:48.479000Z",
//             "edited": "2014-12-20T20:58:18.420000Z",
//             "url": "http://swapi.dev/api/planets/2/"
//         },
//         {
//             "name": "Yavin IV",
//             "rotation_period": "24",
//             "orbital_period": "4818",
//             "diameter": "10200",
//             "climate": "temperate, tropical",
//             "gravity": "1 standard",
//             "terrain": "jungle, rainforests",
//             "surface_water": "8",
//             "population": "1000",
//             "residents": [],
//             "films": [
//                 "http://swapi.dev/api/films/1/"
//             ],
//             "created": "2014-12-10T11:37:19.144000Z",
//             "edited": "2014-12-20T20:58:18.421000Z",
//             "url": "http://swapi.dev/api/planets/3/"
//         },
//         {
//             "name": "Hoth",
//             "rotation_period": "23",
//             "orbital_period": "549",
//             "diameter": "7200",
//             "climate": "frozen",
//             "gravity": "1.1 standard",
//             "terrain": "tundra, ice caves, mountain ranges",
//             "surface_water": "100",
//             "population": "unknown",
//             "residents": [],
//             "films": [
//                 "http://swapi.dev/api/films/2/"
//             ],
//             "created": "2014-12-10T11:39:13.934000Z",
//             "edited": "2014-12-20T20:58:18.423000Z",
//             "url": "http://swapi.dev/api/planets/4/"
//         },
//         {
//             "name": "Dagobah",
//             "rotation_period": "23",
//             "orbital_period": "341",
//             "diameter": "8900",
//             "climate": "murky",
//             "gravity": "N/A",
//             "terrain": "swamp, jungles",
//             "surface_water": "8",
//             "population": "unknown",
//             "residents": [],
//             "films": [
//                 "http://swapi.dev/api/films/2/",
//                 "http://swapi.dev/api/films/3/",
//                 "http://swapi.dev/api/films/6/"
//             ],
//             "created": "2014-12-10T11:42:22.590000Z",
//             "edited": "2014-12-20T20:58:18.425000Z",
//             "url": "http://swapi.dev/api/planets/5/"
//         },
//         {
//             "name": "Bespin",
//             "rotation_period": "12",
//             "orbital_period": "5110",
//             "diameter": "118000",
//             "climate": "temperate",
//             "gravity": "1.5 (surface), 1 standard (Cloud City)",
//             "terrain": "gas giant",
//             "surface_water": "0",
//             "population": "6000000",
//             "residents": [
//                 "http://swapi.dev/api/people/26/"
//             ],
//             "films": [
//                 "http://swapi.dev/api/films/2/"
//             ],
//             "created": "2014-12-10T11:43:55.240000Z",
//             "edited": "2014-12-20T20:58:18.427000Z",
//             "url": "http://swapi.dev/api/planets/6/"
//         },
//         {
//             "name": "Endor",
//             "rotation_period": "18",
//             "orbital_period": "402",
//             "diameter": "4900",
//             "climate": "temperate",
//             "gravity": "0.85 standard",
//             "terrain": "forests, mountains, lakes",
//             "surface_water": "8",
//             "population": "30000000",
//             "residents": [
//                 "http://swapi.dev/api/people/30/"
//             ],
//             "films": [
//                 "http://swapi.dev/api/films/3/"
//             ],
//             "created": "2014-12-10T11:50:29.349000Z",
//             "edited": "2014-12-20T20:58:18.429000Z",
//             "url": "http://swapi.dev/api/planets/7/"
//         },
//         {
//             "name": "Naboo",
//             "rotation_period": "26",
//             "orbital_period": "312",
//             "diameter": "12120",
//             "climate": "temperate",
//             "gravity": "1 standard",
//             "terrain": "grassy hills, swamps, forests, mountains",
//             "surface_water": "12",
//             "population": "4500000000",
//             "residents": [
//                 "http://swapi.dev/api/people/3/",
//                 "http://swapi.dev/api/people/21/",
//                 "http://swapi.dev/api/people/35/",
//                 "http://swapi.dev/api/people/36/",
//                 "http://swapi.dev/api/people/37/",
//                 "http://swapi.dev/api/people/38/",
//                 "http://swapi.dev/api/people/39/",
//                 "http://swapi.dev/api/people/42/",
//                 "http://swapi.dev/api/people/60/",
//                 "http://swapi.dev/api/people/61/",
//                 "http://swapi.dev/api/people/66/"
//             ],
//             "films": [
//                 "http://swapi.dev/api/films/3/",
//                 "http://swapi.dev/api/films/4/",
//                 "http://swapi.dev/api/films/5/",
//                 "http://swapi.dev/api/films/6/"
//             ],
//             "created": "2014-12-10T11:52:31.066000Z",
//             "edited": "2014-12-20T20:58:18.430000Z",
//             "url": "http://swapi.dev/api/planets/8/"
//         },
//         {
//             "name": "Coruscant",
//             "rotation_period": "24",
//             "orbital_period": "368",
//             "diameter": "12240",
//             "climate": "temperate",
//             "gravity": "1 standard",
//             "terrain": "cityscape, mountains",
//             "surface_water": "unknown",
//             "population": "1000000000000",
//             "residents": [
//                 "http://swapi.dev/api/people/34/",
//                 "http://swapi.dev/api/people/55/",
//                 "http://swapi.dev/api/people/74/"
//             ],
//             "films": [
//                 "http://swapi.dev/api/films/3/",
//                 "http://swapi.dev/api/films/4/",
//                 "http://swapi.dev/api/films/5/",
//                 "http://swapi.dev/api/films/6/"
//             ],
//             "created": "2014-12-10T11:54:13.921000Z",
//             "edited": "2014-12-20T20:58:18.432000Z",
//             "url": "http://swapi.dev/api/planets/9/"
//         },
//         {
//             "name": "Kamino",
//             "rotation_period": "27",
//             "orbital_period": "463",
//             "diameter": "19720",
//             "climate": "temperate",
//             "gravity": "1 standard",
//             "terrain": "ocean",
//             "surface_water": "100",
//             "population": "1000000000",
//             "residents": [
//                 "http://swapi.dev/api/people/22/",
//                 "http://swapi.dev/api/people/72/",
//                 "http://swapi.dev/api/people/73/"
//             ],
//             "films": [
//                 "http://swapi.dev/api/films/5/"
//             ],
//             "created": "2014-12-10T12:45:06.577000Z",
//             "edited": "2014-12-20T20:58:18.434000Z",
//             "url": "http://swapi.dev/api/planets/10/"
//         }
//     ]
// }



//2) GET a single person object.
//
// {
//     "name": "C-3PO",
//     "height": "167",
//     "mass": "75",
//     "hair_color": "n/a",
//     "skin_color": "gold",
//     "eye_color": "yellow",
//     "birth_year": "112BBY",
//     "gender": "n/a",
//     "homeworld": "http://swapi.dev/api/planets/1/",
//     "films": [
//         "http://swapi.dev/api/films/1/",
//         "http://swapi.dev/api/films/2/",
//         "http://swapi.dev/api/films/3/",
//         "http://swapi.dev/api/films/4/",
//         "http://swapi.dev/api/films/5/",
//         "http://swapi.dev/api/films/6/"
//     ],
//     "species": [
//         "http://swapi.dev/api/species/2/"
//     ],
//     "vehicles": [],
//     "starships": [],
//     "created": "2014-12-10T15:10:51.357000Z",
//     "edited": "2014-12-20T21:17:50.309000Z",
//     "url": "http://swapi.dev/api/people/2/"
// } 

//3) Use Postman to POST 3 new todo objects. Run another GET to see them. 
//Use the following template for your JSON body:

// [
//     {
//         "completed": false,
//         "_id": "5fdbe26cee6f8d3fc3feb91a",
//         "title": "Object One",
//         "description": "Description One",
//         "price": 0,
//         "imgUrl": "http://path-to-url.jpg",
//         "sessionId": "garrett_england",
//         "__v": 0
//     },
//     {
//         "completed": false,
//         "_id": "5fdbe28fee6f8d3fc3feb91b",
//         "title": "Object Two",
//         "description": "Description Two",
//         "price": 1,
//         "imgUrl": "http://path-to-url.jpg",
//         "sessionId": "garrett_england",
//         "__v": 0
//     },
//     {
//         "completed": false,
//         "_id": "5fdbe2aeee6f8d3fc3feb91c",
//         "title": "Object Three",
//         "description": "Description Three",
//         "price": 2,
//         "imgUrl": "http://path-to-url.jpg",
//         "sessionId": "garrett_england",
//         "__v": 0
//     }
// ]


//4) GET one single todo using its id property.

// {
//     "completed": false,
//     "_id": "5fdbe2aeee6f8d3fc3feb91c",
//     "title": "Object Three",
//     "description": "Description Three",
//     "price": 2,
//     "imgUrl": "http://path-to-url.jpg",
//     "sessionId": "garrett_england",
//     "__v": 0
// }

//5) DELETE one single todo using its id property.

//6) PUT one single todo using its id property.
// [
//     {
//         "completed": false,
//         "_id": "5fdbe28fee6f8d3fc3feb91b",
//         "title": "Object Two",
//         "description": "EDITED WITH PUT",
//         "price": 1,
//         "imgUrl": "http://path-to-url.jpg",
//         "sessionId": "garrett_england",
//         "__v": 0
//     },
//     {
//         "completed": false,
//         "_id": "5fdbe2aeee6f8d3fc3feb91c",
//         "title": "Object Three",
//         "description": "Description Three",
//         "price": 2,
//         "imgUrl": "http://path-to-url.jpg",
//         "sessionId": "garrett_england",
//         "__v": 0
//     }
// ]