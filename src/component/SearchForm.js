import React,{ useState } from 'react';

function SearchForm(props) {

    const [search , setSearch] = useState('');
    
    async function searchMovie() {
        console.log(search);
    }

    return (
        <div className="jumbotron jumbotron-fluid mt-5 text-center">
            <div className="container">
                <h1 className="display-4 mb-3"> 
                    <i className="fa fa-search" /> Search for a movie , TV series ..
                </h1>
                    <input 
                        type="text"
                        className="form-control"
                        name="search"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        placeholder="Search Movies , TV Series ..."
                    />
                    <button type="submit" className="btn btn-primary btn-bg mt-3" onClick={searchMovie}>
                        Search
                    </button>
            </div>
        </div>
    );
}

export default SearchForm;