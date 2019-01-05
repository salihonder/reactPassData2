import React, { Component } from 'react';
import MovieCard from "./MovieCard";

class Dashboard extends Component {
	render() {
      	 const { profiles, usersByMovie, movies, users } = this.props;
          
    	const movieCards = Object.keys(movies).map(id => (
          <MovieCard
            key={id}
            users={users}
            usersWhoLikedMovie={usersByMovie[id]}
            movieInfo={movies[id]}
          />
    	));

      /*
      Return JSX
      */
      return <ul>{movieCards}</ul>;
    }
}

export default Dashboard;