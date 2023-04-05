import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import GenereComponent from "./components/GenereComponent";
import Header from "./components/Header";
import VideoCard from "./components/VideoCard";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";


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
