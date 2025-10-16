interface CinemaProps {
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



export default App;