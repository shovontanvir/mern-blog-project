import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/route";
import { MenuRoute } from "./types/MenuRoutes";

const App = () => {
  return (
    <>
      <Routes>
        {routes.map((route: MenuRoute) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

export default App;
