import { useState, type SyntheticEvent } from 'react';
import './index.css';
import type { Movie } from '../../type.ts';
import MovieMenu from './movieMenu.tsx';




const defaultMovies = [
  {
    id: 1,
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
    duration: 85,
    url: "https://www.imdb.com/fr/title/tt30476486/",
    description: "A high-energy sports anime movie focusing on the intense volleyball rivalry between Karasuno High and their fierce competitors.",
    budget: 1000000
  },
  {
    id: 2,
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
    duration: 120,
    url: "https://www.imdb.com/title/tt27749960/",
    description: "A poignant drama that explores themes of love, loss, and the complex dynamics of human relationships in a deeply emotional narrative.",
    budget: 2000000
  },
  {
    id: 3,
    title: "INCEPTION",
    director: "Christopher Nolan",
    duration: 148,
    url: "https://www.imdb.com/title/tt1375666/",
    description: "A mind-bending sci-fi thriller where a skilled thief, who enters people's dreams to steal secrets, is given a chance to have his criminal record erased if he can implant an idea into a target's subconscious.",
    budget: 160000000
  },
  {
    id: 4,
    title: "PARASITE",
    director: "Bong Joon-ho",
    duration: 132,
    url: "https://www.imdb.com/title/tt6751668/",
    description: "An Oscar-winning dark comedy thriller that examines class disparities through the story of two families — one wealthy, the other destitute — and their increasingly complicated relationship.",
    budget: 11400000
  }
];

const Main = () => {
  const [title, setTitle] = useState("titre du film");
  const [director, setDirector] = useState("directeur du film");
  const [duration, setDuration] = useState(0);
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);
  const [movies, setMovies] = useState(defaultMovies);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("submit:", title, director, duration, url, description, budget);
    if (title != "" && director != "" && duration != 0) {
      const newMovie = {
        id: nextTitleID(movies),
        title: title,
        director: director,
        duration: duration,
        url: url,
        description: description,
        budget: budget,
      };
      setMovies([...movies, newMovie]);
    }
  }

  const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    console.log('change in titleInput', titleInput.value);
    setTitle(titleInput.value);
  }

  const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    console.log('Change in Director', directorInput.value);
    setDirector(directorInput.value);
  }

  const handleDuration = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement
    console.log('Change in duration', durationInput.value)
    setDuration(Number(durationInput.value))
  }

  const handleUrl = (e: SyntheticEvent) => {
    const UrlInput = e.target as HTMLInputElement;
    console.log('Change in URL', UrlInput.value);
    setUrl(UrlInput.value);
  }


  const handleDescription = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log('Change in Description');
    setDescription(descriptionInput.value);
  }


  const handleBudget = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    console.log('Change in Budget');
    setBudget(Number(budgetInput.value))

  }


  return <main>
    <p>Page Film</p>
    <MovieMenu movies={movies} />
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"></label>
        <input
          value={title}
          type="text"
          id="title"
          onChange={handleTitleChange}
        />
        <label htmlFor="director"></label>
        <input value={director} type="text" id="director" onChange={handleDirectorChange} />
        <label htmlFor="duration"></label>
        <input value={duration} type="number" id="duration" onChange={handleDuration} />
        <label htmlFor="url"></label>
        <input value={url} type="text" id="url" onChange={handleUrl} />
        <label htmlFor="description"></label>
        <input value={description} type="text" id="descritpion" onChange={handleDescription} />
        <label htmlFor="budget"></label>
        <input value={budget} type="number" id="budget" onChange={handleBudget} />

        <button type="submit">ajouter</button>
      </form>
    </div>

  </main>;
}



const nextTitleID = (movies: Movie[]) => {
  return movies.reduce((maxId, movie) => Math.max(maxId, movie.id), 0) + 1;
};


export default Main;
