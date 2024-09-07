import BlogDetails from "../pages/BlogDetails/BlogDetails";
import CreateBlog from "../pages/CreateBlog/CreateBlog";
import EditBlog from "../pages/EditBlog/EditBlog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import { MenuRoute } from "../types/MenuRoutes";

export const routes: Array<MenuRoute> = [
  {
    id: 1,
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    name: "Blog Details",
    path: "/blog/details/:id",
    element: <BlogDetails />,
  },
  {
    id: 3,
    name: "Create Blog",
    path: "/blog/create",
    element: <CreateBlog />,
  },
  {
    id: 4,
    name: "Edit Blog",
    path: "/blog/edit/:id",
    element: <EditBlog />,
  },
  {
    id: 5,
    name: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    id: 6,
    name: "Register",
    path: "/register",
    element: <Register />,
  },
  {
    id: 7,
    name: "Profile",
    path: "/profile/:id",
    element: <Profile />,
  },
];
