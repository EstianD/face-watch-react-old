import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const AddGalleryProgressBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
};

export default AddGalleryProgressBar;
