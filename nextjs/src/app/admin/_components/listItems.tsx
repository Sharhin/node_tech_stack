import Link from 'next/link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

const MenuItem = (props:{
  name: string,
  href: string
})=>{

  const {
    name,
    href
  } = props; 
  
  return <Link href={"/admin"+href}>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
        </ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  </Link>
}

export const mainListItems = (
  <>
    {[
      {
        name:"dashboard",
        href:"/"
      },
      {
        name:"news",
        href:"/news"
      },
      {
        name:"news category",
        href:"/news_category"
      },
    ].map((props,index)=><MenuItem key={index} {...props}/>)}
  </>
);

export const secondaryListItems = (
  <>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
  </>
);