
import {films, NewFilm } from "../types";
import path from "node:path";
import { parse, serialize} from "../utils/json";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const jsonDbPath = path.join(__dirname, "/../data/films.json");

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

function readAllFilms(minDuration: number): films[]{
    const films = parse(jsonDbPath,defaultFilms);
    if (!minDuration){
        return films;
    }
    const minimumDuration= minDuration;
    
    const filteredFilms = films.filter((film) => film.duration >= minimumDuration);

    return filteredFilms;

}

function readOneFilm(id: number): films| undefined{
    const films = parse(jsonDbPath, defaultFilms);
    const film = films.find((film)=> film.id===id);
    if (!film){
        return undefined;
    }
    return film;
}

function creatOneFilm(newFilm: NewFilm): films{
    const films = parse(jsonDbPath,defaultFilms);

    const nextId = films.reduce((maxId, film)=>(film.id>maxId?film.id: maxId),0)+1;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const addedFilm: films = { id: nextId, ...newFilm };
    films.push(addedFilm);
    serialize(jsonDbPath,films);
    return addedFilm;
}

function deleteFilm(id:number):films|undefined{
    const films= parse(jsonDbPath, defaultFilms);
    const index= films.findIndex((film)=> film.id===id);
    if (index===-1){
        return undefined;
    }
    const deletedFilm=films.splice(index,1);
    serialize(jsonDbPath,films);
    return deletedFilm[0];
}

function updateFilm (id: number,newFilm: Partial<NewFilm> ): films | undefined {
    const films= parse(jsonDbPath, defaultFilms);
    const film = films.find((film)=>film.id===id);
    if (!film){
        return undefined;
    }

    if (newFilm.title!==undefined){
        film.title=newFilm.title;
    }

    if (newFilm.description!==undefined){
        film.description=newFilm.description;
    }
    if (newFilm.director!==undefined){
      film.director= newFilm.director;
    }
    if (newFilm.duration!==undefined){
      film.duration=newFilm.duration;
    }
    if (newFilm.budget!==undefined){
      film.budget= newFilm.budget;
    }
    if(newFilm.imageUrl!==undefined){
      film.imageUrl=newFilm.imageUrl;
    }

    serialize(jsonDbPath,films);
    return film;
}

export {
    readAllFilms,
    readOneFilm,
    creatOneFilm,
    deleteFilm,
    updateFilm
};