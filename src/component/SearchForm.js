import React,{ useState } from 'react';

function SearchForm({keyword}) {

    const [search , setSearch] = useState('');
    
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
                        onChange={keyword}
                        placeholder="Search Movies , TV Series ..."
                    />
            </div>
        </div>
    );
}

export default SearchForm;