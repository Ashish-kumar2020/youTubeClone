import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import VideoCard from "./components/VideoCaed";
import store from './utils/store'


const appRouter = createBrowserRouter([
  {
  path: '/',
  element:  <Body/>,
  children: [
    {
      path: '/',
      element: <VideoCard/>
    }
  ]
}
]) 

function App() {
  return (
    <>
    <Provider store={store}>
      <Header/>
      <RouterProvider router={appRouter} />
      </Provider>
    </>
  );


}

export default App;
