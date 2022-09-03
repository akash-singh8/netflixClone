import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from './axios';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Banner({ fetchUrl }) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results[Math.floor(Math.random() * 20)]);
            return request;
        };
        fetchData();
    }, [fetchUrl]);

    const bannerStyle = {
        background: `no-repeat center center/100% url(${baseUrl + movie.backdrop_path}), #000000`,
    }
    return (
        <header className="banner" style={bannerStyle}>
            <div className="banner_contents">
                {/* title */}
                <h2 className='banner_title'>{movie?.title || movie?.name}</h2>

                {/* div with 2 buttons */}
                <div className="banner_buttons">
                    <button>PLAY</button>
                    <button>Watch Later</button>
                </div>

                {/* description */}
                <p className='banner_description'>{(movie.overview?.length > 180) ? movie.overview.slice(0, 180) + "  ..." : movie.overview}</p>

            </div>
            <div className="banner-fadeBottom"></div>
        </header>
    )
}

export default Banner