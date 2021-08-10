import React, { useContext } from "react"
import SiteContext from "../../context"
import clsx from "clsx"
import { Link } from "react-router-dom"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import HomeRounded from "@material-ui/icons/HomeRounded"
import LightIcon from "@material-ui/icons/Brightness7Rounded"
import DarkIcon from "@material-ui/icons/Brightness4Rounded"
import CounterIcon from "@material-ui/icons/ControlPoint"
import HelloIcon from "@material-ui/icons/EmojiPeopleRounded"
import GreetingIcon from "@material-ui/icons/EmojiEmotionsRounded"

const Items = [
  {
    page: "home",
    title: "Home",
    icon: <HomeRounded />,
  },
  {
    page: "hello-world",
    title: "Hello",
    icon: <HelloIcon />,
  },
  {
    page: "greeting",
    title: "Greeting",
    icon: <GreetingIcon />,
  },
  {
    page: "counter",
    title: "Counter",
    icon: <CounterIcon />,
  },
]

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "linear-gradient(45deg, #4F46E5 30%, #EC4899 90%)",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  iconLeftPad: {
    paddingLeft: "8px",
    // color: theme.palette.text.primary,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

export default function MiniDrawer() {
  const classes = useStyles()
  const { state, dispatch } = useContext(SiteContext)
  const theme = useTheme()
  var localTheme = localStorage.getItem("theme")

  const handleDrawerOpen = () => {
    dispatch({ type: "TOGGLE_TOOLBAR", payload: true })
  }

  const handleDrawerClose = () => {
    dispatch({ type: "TOGGLE_TOOLBAR", payload: false })
  }

  const toggleTheme = () => {
    console.log("sidebar", localTheme)
    localStorage.setItem("theme", localTheme === "dark" ? "light" : "dark")
    dispatch({
      type: "UPDATE_THEME",
      payload: localTheme === "light" ? "dark" : "light",
    })
  }
  console.log("sidebar", state)
  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: state.toolbarOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: state.toolbarOpen,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            IC Material
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: state.toolbarOpen,
          [classes.drawerClose]: !state.toolbarOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: state.toolbarOpen,
            [classes.drawerClose]: !state.toolbarOpen,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {Items.map((i) => (
            <ListItem
              button
              component={Link}
              to={i.page === "home" ? "/" : `/app/${i.page}`}
              key={i.page}
            >
              <ListItemIcon className={classes.iconLeftPad}>
                {i.icon}
              </ListItemIcon>
              <ListItemText primary={i.title} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button onClick={toggleTheme}>
            <ListItemIcon className={classes.iconLeftPad}>
              {state.theme === "light" ? <DarkIcon /> : <LightIcon />}
            </ListItemIcon>
            <ListItemText primary={"Theme"} />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
