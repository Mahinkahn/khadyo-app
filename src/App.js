import { RouterProvider } from 'react-router-dom';
import Aos from 'aos'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import './App.css';
import router from './Routes/Routes/Routes';
import { useEffect, useState } from 'react';
import Loader from './components/loader/Loader';



function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />) : (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
