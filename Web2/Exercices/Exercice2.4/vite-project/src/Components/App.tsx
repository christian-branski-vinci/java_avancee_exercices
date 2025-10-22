import Cinema from "./Cinema";
import PageTitle from "./PageTitle";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2 = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
    },
  ];


  return (
    <div>
      <Header urlLogo="https://plus.unsplash.com/premium_photo-1710366327112-1c6b77517ff4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1157">
      <h1>Tout les films</h1>
      </Header>
      <main>
      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movies={moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />
      
      </main>

      <Footer urlLogo="https://plus.unsplash.com/premium_photo-1710366327112-1c6b77517ff4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1157">
      <h1>c'était tout les films</h1>
      </Footer>
    </div>
  );
};

export default App;

/*interface CinemaProps {
  name: string;
  movie1: Movie;
  movie2: Movie;
}

interface Movie {
  title: string;
  director: string;
}

interface PageTitleProps {
  title: string;
}



const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const movie1: Movie = {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  };

  const movie2: Movie = {
    title: "Tintin et le secret de la licorne",
    director: "Steven Spielberg"
  }

  const cinema2Name = "UGC Toison d'Or";

  const movie3: Movie = {
    title: "The lady vanishes",
    director: "Alfred Hitchcock"
  }

  const movie4: Movie = {
    title: "MI: Fallout",
    director: "Tom Cruise",
  }


  return (
    <div>
      <PageTitle title={pageTitle} />

      <Cinema
        name={cinema1Name}
        movie1={movie1}
        movie2={movie2}
      />

      <Cinema
        name={cinema2Name}
        movie1={movie3}
        movie2={movie4}
      />
    </div>
  );
};

const PageTitle = (props:PageTitleProps) => {
  return <h1>{props.title}</h1>;
};

const Cinema = (props: CinemaProps) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      <li>
        <strong>{props.movie1.title}</strong> - Réalisateur :{" "}
        {props.movie1.director}
      </li>
      <li>
        <strong>{props.movie2.title}</strong> - Réalisateur :{" "}
        {props.movie2.director}
      </li>
    </ul>
  </div>
);



export default App;*/