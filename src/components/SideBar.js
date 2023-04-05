import { useSelector } from "react-redux";
import "../App.css"

function Sidebar(){

    const isSideBarOpen = useSelector((store)=> store.app.isSidebarOpen);
    if(!isSideBarOpen) return null;

    return (
        <div className="sidebar m-2 p-2 w-[10rem] shadow-lg">
            <h1>sidebar</h1>
        </div>
    )
};

export default Sidebar;