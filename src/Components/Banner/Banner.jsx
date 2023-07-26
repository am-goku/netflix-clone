import React, { useEffect, useState } from 'react';
import axios from '../../axios';

import { API_KEY, imageUrl } from '../../constants/constants';

import './Banner.css';  //imported stylesheet

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en&api_key=${API_KEY}`).then(async (response) => {
            setMovie(response.data.results[0])
            // console.log(response.data.results[0]);
            for (const obj of response.data.results) {
                await new Promise((resolve) => {
                    setTimeout(resolve, 8000);
                })
                setMovie(obj);
            }
        })
    }, [])

    return (
        <div className='banner' style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}>
            <div className='content'>
                <div className="innerContent">
                    <h1 className='title'>{movie ? movie.title : ''}</h1>
                    <div className='bannerButton'>
                        <button>Play</button>
                        <button>My List</button>
                    </div>
                    <h1 className='description'>{movie ? movie.overview : ''}</h1>
                </div>
            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner
