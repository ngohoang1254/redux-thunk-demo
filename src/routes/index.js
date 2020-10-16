import HomePage from "../containers/Home/HomePage";
import AboutPage from "../containers/Home/AboutPage";
import Movies from "../containers/Admin/Movies";
import Users from "../containers/Admin/Users";
import Admin from "../containers/Admin";
const routesHome = [
    {
        path : "/",
        component: HomePage,
        exact : true
    },

    {
        path : "/about",
        component : AboutPage,
        exact  : false
    }
]
const routesAdmin = [
    {
        path : "/admin",
        component : Admin,
        exact : false
    },
    {
      path: "/admin/movies",
      component: Movies,
      exact: false,
    },
    {
      path: "/admin/users",
      component: Users,
      exact: false,
    },
  ];
export {routesHome,routesAdmin} ;