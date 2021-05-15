import React from 'react';

//component
import SearchForm from './SearchForm';
import MovieContainer from './MovieContainer';

function LandingPage(props) {
    return (
        <div className="container">
            <SearchForm />
            <MovieContainer />
        </div>
    );
}

export default LandingPage;