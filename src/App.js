import React from "react";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";
import { UserProvider } from "./contexts/UseContext";



function App() {
  

  return (
    <div>
      <UserProvider>
        <MovieProvider>
          <Navbar />
          <MovieList />
        </MovieProvider>
      </UserProvider>
    </div>
  );
}

export default App;
