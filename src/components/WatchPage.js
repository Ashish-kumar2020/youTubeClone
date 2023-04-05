import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/toggleSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = ()=>{

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeSidebar());
    },[])
    return (
        <div className="flex flex-col w-full">
        <div className="px-2 flex w-full">
            <div className="">
            <iframe
                width="1000"
                height="500"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            </div>
            
      </div>
      </div>
    )
};

export default WatchPage;