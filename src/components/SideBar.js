import { useSelector } from 'react-redux';
import '../App.css';


const SideBar = ()=>{


    const isSideBarOpen = useSelector((store)=> store.app.isSideBarOpen);
    if(!isSideBarOpen) return null;

    return (
        <div className="sidebar">
            <h1>Sidebar</h1>
        </div>
    )
}

export default SideBar;