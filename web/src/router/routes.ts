import Home from "../pages/home";
import Users from "../pages/users";
import Blogs from '../pages/blogs'

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/blogs",
    component: Blogs,
  },
];

export default routes;
