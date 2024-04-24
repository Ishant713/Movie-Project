import React from "react";
import Movie from "./Movie";
import Search from "./Search";
import Navigation from "./Components/Navigationbar" ;


const Home = () => {
  return (
    <>

      <div className="container">
        <div className="tk">
          <h1 className="kj">MOVIESWORLD</h1>
        </div>
        <Search />
        
        <Navigation/>
      
       <Movie />
      </div>
    </>
  );
};

export default Home;
