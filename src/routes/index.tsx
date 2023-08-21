import Home from '../pages/Home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
]);

const Router = () => {
  // let element = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Home />,
  //   },
  // ]);

  return router;
};

export default Router;
