import React, {useState, useEffect} from 'react';
import DataItem from '../DataItem/DataItem';
import './data-list.scss';

const DataList = () => {
    const [data, setData] = useState([]);
    console.log(data)
    useEffect(() => {
        fetch("https://yts.torrentbay.to/api/v2/list_movies.json")
            .then(res => res.json())
            .then(res => setData(res.data.movies))
    }, [])

    return (
        <div className="data-list">
            <h1 className="data-list__head">Data Binding</h1>
            <div className="data-list__wrapper">
                {
                    !data.length ? 'Loading...' : data.map((movie) => <DataItem title={movie.title} img={movie["background_image"]}/>)
                }
            </div>
        </div>
    );
}

export default DataList;
