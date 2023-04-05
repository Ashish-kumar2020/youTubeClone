import { useDispatch } from 'react-redux';

import '../App.css';
import user from "../assets/icons/user.svg"
import { toggleSidebar } from '../utils/toggleSlice';
function Header(){
   
    const dispatch = useDispatch();
    function toggleMenuHandler(){
        dispatch(toggleSidebar());
    }
    
    return (
        <div className="headerContainer flex">
            <div className="leftSideContainer flex">
                <img
                        className="toggleImg cursor-pointer" 
                        alt="menu"
                        onClick={()=>toggleMenuHandler()}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
            />
           <a href="/">

                <img
                className="h-6 mx-2 m-3"
                alt="youtube-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            />

           </a>
            
       
            </div>
                <div className='center-div'>
                    <input type="text" className='searchbox my-2 p-2' placeholder='SearchText....' />
                    <button className="btnborder  px-5 py-2 rounded-r-full bg-gray-100">
                🔍
            </button>
          </div>
            <div className='userDiv'>
                <img src={user} alt="user-icon" className='w-[3.2rem] ' />
            </div>
        </div>
    )
};

export default Header;