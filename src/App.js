import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import GenereComponent from "./components/GenereComponent";
import Header from "./components/Header";
import VideoCard from "./components/VideoCard";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";


const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <VideoCard/>
      },
      {
        path: "/watch",
        element: <WatchPage/>
      },
      {
        path: "/",
        element:  <GenereComponent/>
      },
      {
        path: "demo",
        element:<><Demo/> <Demo2></Demo2></> 
      }
    ]
  }
]);

function App() {
  return (
    <>
    <Provider store={store}>
      <Header/>
     
      <RouterProvider router={appRouter}/>
    </Provider>
    </>
  );


}

export default App;
