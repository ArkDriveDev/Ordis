// src/config/routes.ts
import Maps from "../pages/home.tabs/Maps";
import VoiceCommand from "../components/VoiceCommand";
import About from "../pages/About";
import { Redirect } from "react-router-dom";

const Routes = [
  {
    path: "/Ordis/app/home/maps",
    component: Maps,
    exact: true,
  },
  {
    path: "/Ordis/app/home/voiceCommand",
    component: VoiceCommand,
    exact: true,
  },
  {
    path: "/Ordis/app/about",
    component: About,
    exact: true,
  },
  {
    path: "/Ordis/app",
    exact: true,
    render: () => <Redirect to="/Ordis/app/home" />, // Default route
  },
];

export default Routes;