import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import GenereComponent from "./GenereComponent";
import VideoContainer, {AdVideoCard} from "./VideoContainer";

const VideoCard = ()=>{

    const [videos,setVideos] = useState([]);

    useEffect(() => {
        getVideos();

        
      }, []);

   const getVideos = async()=>{
        console.log("before",videos);
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyArCkjlh6T8xrRmAHHUVnZT5ZIl0KwP4ew");
        const json = await data.json();
        setVideos(json?.items);
        console.log(videos);
    }
    if(!videos) return null;
    return (
        <div className="flex flex-wrap">
            <GenereComponent/>
            {videos[0] && <AdVideoCard info={videos[0]}/>}
           {videos.map((video)=>(
             <Link key={video.id} to={"/watch?v=" + video.id}>
                 <VideoContainer info={video}/>
            </Link>
           ))}
        </div>
    )
};

export default VideoCard;


// AIzaSyArCkjlh6T8xrRmAHHUVnZT5ZIl0KwP4ew