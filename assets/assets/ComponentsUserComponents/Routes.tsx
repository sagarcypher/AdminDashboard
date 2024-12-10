import ApprovedCc from "./ApprovedCc";
import Contest from "./Contest";
import Home from "./Home";
import Notifications from "./Notifications";
import Problems from "./Problems";
import Profile from "./Profile";
import Settings from "./Settings";
import './styles.css';

const routes = [
  {
    path: "/home",
    name: "Home",
    icon: "fas fa-home",
    component: <Home />,
    layout: "/user"
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "fas fa-user",
    component: <Profile />,
    layout: "/user"
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "fas fa-cog",
    component: <Settings />,
    layout: "/user"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "fas fa-bell",
    component: <Notifications />,
    layout: "/user"
  },
  {
    path: "/problems",
    name: "Problems",
    icon: "fas fa-code",  // Changed to code icon for better representation
    component: <Problems />,
    layout: "/user"
  },
  {
    path: "/contest",
    name: "Contest",
    icon: "fas fa-trophy",  // Changed to trophy icon for better representation
    component: <Contest />,
    layout: "/user"
  },
  {
    path: "/approvedcc",
    name: "Admin Approved Content Creators",
    icon: "fas fa-trophy",  // Changed to trophy icon for better representation
    component: <ApprovedCc />,
    layout: "/user"
  }
];

export default routes;