import { RouterProvider } from 'react-router-dom';
import Aos from 'aos'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import './App.css';
import router from './Routes/Routes/Routes';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
