import React from 'react';

function MovieCard(props) {
    console.log(props.data)
    return (
            <div className="col-md-3 mb-5">
                <div className="card card-body bg-dark text-center h-100">
                    <img className="w-100 mb-2" src="#" alt="movie Cover" />
                    <h5 className="text-light card-title"> 
                        Movie Title - Movie Year
                    </h5>
                    <a className="btn btn-primary" href="#">
                        Movie Details
                    <i className="fa fa-chevron-right" />
                    </a>
                </div>
            </div>
    )
}

export default MovieCard;