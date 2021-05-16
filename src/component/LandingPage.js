import React,{ useState,useEffect }  from 'react';

//component
import SearchForm from './SearchForm';
import MovieContainer from './MovieContainer';

function LandingPage(props) {

    const [data,setData] = useState([]);
    const [filtered,setFiltered] = useState([]);
    
    useEffect(async ()=>{
        let result = await fetch(`http://localhost:3003/Search`)
        result = await result.json();
        setData(result);        
    },[]);

    function getKeyword(event){
        
        let keyword =event.target.value;
        console.log(keyword)
        let newfiltered = data.filter((item)=>{
            return item.Title.indexOf(keyword) != -1;
        });
        setFiltered(newfiltered)
    }

    console.log('data',data)
    console.log('filter',filtered)

    return (
        <div className="container">
            <SearchForm keyword={getKeyword}/>
            <MovieContainer data={filtered.length === 0 ? data : filtered}/>
        </div>
    );
}

export default LandingPage;