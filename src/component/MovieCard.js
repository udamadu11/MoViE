import React from 'react';

function MovieCard(props) {
    console.log(props.data)
    return (
        <div className="row">
            {
            props.data.map((item,i)=>
            <div className="col-md-3 mb-5">
                <div className="card card-body bg-dark text-center h-100">
                    <img className="w-100 mb-2" src={item.Poster} alt="movie Cover" style={{width:'200px',height:'200px'}}/>
                    <h5 className="text-light card-title"> 
                        {item.Title} - {item.Year}
                    </h5>
                    <a className="btn btn-primary" href="#">
                        Movie Details
                    <i className="fa fa-chevron-right" />
                    </a>
                </div>
            </div>)
            }
        </div>      
    )
}

export default MovieCard;