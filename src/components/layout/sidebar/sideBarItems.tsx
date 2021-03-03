import React from "react";
import PageviewIcon from '@material-ui/icons/Pageview';
import CloseIcon from "@material-ui/icons/Close";
import DashboardIcon from '@material-ui/icons/Dashboard';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import EmailIcon from '@material-ui/icons/Email';

type SideBarItemI = {
  name: string;
  route: string;
  navKey: string;
  icon: JSX.Element[] | JSX.Element;
}[];

const SideBarItems: SideBarItemI = [
  {
    name: "Dashboard",
    route: "/dashboard",
    navKey: "dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "page 1",
    route: "/page1",
    navKey: "page1",
    icon: <PageviewIcon />,
  },
  {
    name: "page 2",
    route: "/page2",
    navKey: "page2",
    icon: <EqualizerIcon />,
  },
  {
    name: "Not Found",
    route: "/notFound",
    navKey: "notFound",
    icon: <EmailIcon />,
  },
];

export default SideBarItems;
