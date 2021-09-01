import Home from "src/pages/home";
import Users from "src/pages/users";
import Blogs from 'src/pages/blogs'
import AddOrEditForm from "src/pages/blogs/components/AddOrEditForm";

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
  {
    path: "/addArticle",
    component: AddOrEditForm,
  },
];

export default routes;
