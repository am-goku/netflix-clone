import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube';
import './RowPost.css'
import { baseUrl, API_KEY, imageUrl } from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState([]);

    useEffect(()=>{
        console.log('hello world');
        axios.get(baseUrl+props.url).then((response)=>{
            // console.log(response.data);
            setMovies(response.data.results);
        }).catch(err=> alert(err));
    },[props.url]);

    

    useEffect(()=>{
        if(props.active !== props.title){
            setUrlId([]);
        }
    },[props])

    const opts={
        height: '390',
        width: '100%',
        playerVars:{
            autoplay: 1,
        }
    };

    const handleMovie =(id)=>{
        axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
            props.changeStatus(props.title);
            if(response.data.results.length!==0){
                if(urlId.key === response.data.results[0].key){
                    setUrlId([])
                } else {
                    setUrlId(response.data.results[0])
                }
            } else {
                console.log('No Video Found');
            }
        }).catch((err)=>{
            console.log('Error getting api', err);
        })
    }
    
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                    <img onClick={()=>{handleMovie(obj.id)}} className={props.isSmall? 'smallPoster': 'poster'} src={`${imageUrl+obj.poster_path}`} alt="POSTER" />
                )}
            </div>
            {
                urlId && urlId.key ? <Youtube opts={opts} videoId={urlId.key} /> : null
            }
        </div>
    )
}

export default RowPost
