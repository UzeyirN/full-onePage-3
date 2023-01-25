import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ROUTES from './routes/route';
const router = createBrowserRouter(ROUTES)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
