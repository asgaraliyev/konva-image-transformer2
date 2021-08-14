import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import * as help from "../helper";
import UploadImage from "./UploadImage";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    color: "white",
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const dialogReducer = useSelector((state) => state.DialogReducer);
  const { active } = dialogReducer;
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({
      type: "TOGGLE_DIALOG",
      currentComponentName: null,
      active: false
    });
  };
  const components = [
    {
      name: "ADD",
      title: "Add component",
      rightButton() {
        return (
          <Button autoFocus color="inherit" onClick={handleClose}>
            Add
          </Button>
        );
      },
      main() {
        return (
          <>
            <ListItem button>
              <ListItemText
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_DIALOG",
                    active: true,
                    currentComponentName: "ADD_IMAGE"
                  });
                }}
                primary="Image"
                secondary="Add a image"
              />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Text" secondary="Add a text" />
            </ListItem>
            <Divider />
          </>
        );
      }
    },
    {
      name: "ADD_IMAGE",
      title: "Add new image",
      main() {
        return <UploadImage />;
      },
      rightButton() {
        return (
          <Button
            autoFocus
            color="inherit"
            onClick={() => {
              help.saveNewItem();
            }}
          >
            Add Image
          </Button>
        );
      }
    }
  ];
  const [element, setElement] = useState(null);
  useEffect(() => {
    const element = components.find(
      (element) => element.name === dialogReducer.currentComponentName
    );
    if (element) setElement(element);
  }, [dialogReducer.currentComponentName]);
  return (
    <>
      {element && (
        <Dialog
          fullScreen
          open={active}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {element.title}
              </Typography>
              {element.rightButton()}
            </Toolbar>
          </AppBar>
          <List>{element.main()}</List>
        </Dialog>
      )}
    </>
  );
}
