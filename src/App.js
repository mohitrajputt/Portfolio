import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/main/Main";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Nav from "./components/nav/Nav";
import Aside from "./components/aside/Aside";

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Nav />, children: [
        {
          index: true, element: <Main/>
        },
        {
          path: 'resume', element: <Resume />
        },
        {
          path: 'projects', element: <Projects />
        }
      ]
    }
  ])

  return (
    <>
      <>
        <RouterProvider router={router} />
      </>
      <Aside />
    </>
  );
}

export default App;
