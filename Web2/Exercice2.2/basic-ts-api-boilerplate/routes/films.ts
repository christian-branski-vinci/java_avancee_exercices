import { Router } from "express";
import path from "node:path";
import { containsOnlyExpectedKeys }from "../utils/validate";
import { readAllFilms, readOneFilm, creatOneFilm,  deleteFilm, updateFilm } from "../services/films";

import { films, NewFilm } from "../types";

//import { containsOnlyExpectedKeys } from "../utils/validate";

import { serialize, parse } from "../utils/json";

const jsonDbPath = path.join(__dirname, "/../data/films.json");
const expectedKeys = [
  "title",
  "director",
  "duration",
  "budget",
  "description",
  "imageUrl",
];

const router = Router();

const defaultFilms: films[] = [
  {
    id: 1,
    title: "Sami Swoi",
    director: "Sylwester Chęciński",
    duration: 103,
    budget: 1000000,
    description:
      "Two feuding families are forced to live together in a small village after World War II.",
    imageUrl: "https://m.media-amazon.com/images/I/51b5YG6YxwL._AC_SY445_.jpg",
  },
  {
    id: 2,
    title: "The lady vanishes",
    director: "Alfred Hitchcock",
    duration: 96,
    budget: 500000,
    description:
      "A young woman traveling by train in Europe notices that an elderly lady has disappeared from the compartment.",
    imageUrl: "https://m.media-amazon.com/images/I/51b5YG6YxwL._AC_SY445_.jpg",
  },
  {
    id: 3,
    title: "Inglourious Basterds",
    director: "Quentin Tarantino",
    duration: 153,
    budget: 70000000,
    description:
      "A group of Jewish-American soldiers plans to destroy German leadership during World War II.",
    imageUrl: "https://m.media-amazon.com/images/I/51b5YG6YxwL._AC_SY445_.jpg",
  },
];

router.get("/", (req, res) => {
  const minDuration = Number(req.query["minimum-duration"]);
  const response= readAllFilms(minDuration);
  return res.status(200).json(response);
});

// Read a film by id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)){
    return res.status(400).send("id is not a number");
  }
  const film = readOneFilm(id);
  if(film===undefined){
    return res.status(404).send("film not found");
  }
  return res.status(200).json(film);
});

// Create a new film
router.post("/", (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  // Challenge of ex1.4 : To be complete, we should check that the keys of the body object are only the ones we expect
  if (!containsOnlyExpectedKeys(body, expectedKeys)) {
    return res.sendStatus(400);
  }
  // End of challenge

  const newFilm = body as NewFilm;

  const films = parse(jsonDbPath, defaultFilms);

  const existingFilm = films.find(
    (film) =>
      film.title.toLowerCase() === newFilm.title.toLowerCase() &&
      film.director.toLowerCase() === newFilm.director.toLowerCase()
  );

  if (existingFilm) {
    return res.sendStatus(409);
  }

  const addedFilm = creatOneFilm(newFilm);
  return res.status(200).json(addedFilm);
});

router.delete("/:id", (req, res)=>{
  const id = Number(req.params.id);
  if (id ===null || isNaN(id)){
    return res.status(400).send("id not found");
  }
  const deletedFilm = deleteFilm(id);

  if (deleteFilm===undefined){
    return res.status(404).send("id not found");
  }
  return res.status(200).send(deletedFilm);
});

router.patch("/:id", (req, res)=>{
  const id = Number(req.params.id);

  const body : unknown = req.body;

  if (!body || typeof body !== "object" 
    ||("title" in body && (typeof body.title !== "string" || !body.title.trim()))
    ||("director" in body && (typeof body.director !== "string" || !body.director.trim()))
    ||("duration" in body && (typeof body.duration !== "number" || body.duration<0))
    ||("budget" in body && (typeof body.budget !== "number" || body.budget<0))
    ||("description" in body && (typeof body.description !== "string" || !body.description.trim()))
    ||("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ){
    return res.status(200).send('error');
  }


  const film = updateFilm(id, body);

  if (film== undefined) {
    return res.status(400).send("error");
  }
  return res.status(200).send(film);
});

router.put("/:id", (req, res)=>{
  const id = Number(req.params.id);
  const films = parse(jsonDbPath,defaultFilms);
  const index = films.findIndex((film)=> film.id===id);
  // do post
  if (index===-1){
    const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.json("Wrong body format"); // bad practice (will be improved in exercise 1.5)
  }

  // Challenge : To be complete, we should check that the keys of the body object are only the ones we expect
  const expectedKeys = [
    "title",
    "director",
    "duration",
    "budget",
    "description",
    "imageUrl",
  ];
  const bodyKeys = Object.keys(body);
  const extraKeys = bodyKeys.filter((key) => !expectedKeys.includes(key));
  if (extraKeys.length > 0) {
    return res.json("Extra keys in body: " + extraKeys.join(", "));
  }
  return res.status(200).send("new film created");
}
//do patch

  const film = films.find((film)=> film.id===id);
  if (!film){
    return res.status(404).send("film not found");
  }
  const body:unknown= req.body;
  if (!body
    || typeof body !=="object"
    || ("title" in body && (typeof body.title !== "string" || !body.title.trim()))
    || ("director" in body && (typeof body.director !=="string" || !body.director.trim()))
    || ("duration" in body && (typeof body.duration !== "number" || body.duration <= 0))
    || ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0))
    || ("description" in body && (typeof body.description !== "string" || body.description.trim()))
    || ("imageUrl" in body && (typeof body.imageUrl !== "string" || body.imageUrl.trim()))
  ){
    return res.status(400).send("bad body");
  }
  const {title, director, duration, budget, description, imageUrl}: Partial<NewFilm> = body;

  if (title){
    film.title = title;
  }
  if (director){
    film.director= director;
  }
  if (duration){
    film.duration = duration;
  }
  if (budget){
    film.budget= budget;
  }
  if (description){
    film.description= description;
  }
  if (imageUrl){
    film.imageUrl= imageUrl;
  }
  serialize(jsonDbPath,films);
  return res.status(200).send(film);

});


export default router;
