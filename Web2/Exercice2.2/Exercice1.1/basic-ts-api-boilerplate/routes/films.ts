import { Router } from "express";

import { films } from "../types";

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
    imagerUrl: "https://m.media-amazon.com/images/I/51b5YG6YxwL._AC_SY445_.jpg",
  },
  {
    id: 2,
    title: "The lady vanishes",
    director: "Alfred Hitchcock",
    duration: 96,
    budget: 500000,
    description:
      "A young woman traveling by train in Europe notices that an elderly lady has disappeared from the compartment.",
    imagerUrl: "https://m.media-amazon.com/images/I/51b5YG6YxwL._AC_SY445_.jpg",
  },
  {
    id: 3,
    title: "Inglourious Basterds",
    director: "Quentin Tarantino",
    duration: 153,
    budget: 70000000,
    description:
      "A group of Jewish-American soldiers plans to destroy German leadership during World War II.",
    imagerUrl: "https://m.media-amazon.com/images/I/51b5YG6YxwL._AC_SY445_.jpg",
  },
];

router.get("/", (_req, res) => {
  return res.json(defaultFilms);
});

export default router;
