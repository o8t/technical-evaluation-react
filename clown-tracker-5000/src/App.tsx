import React, { useState, useEffect } from 'react'
import './App.css';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TopBar from './components/TopBar';
import ClownGallery from './components/ClownGallery';
import * as CRUD from "./utils/CRUD";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      alignSelf: 'center',

      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

// For demo purposes, initialize storage with dummy data
CRUD.setupStorageWithDummyClowns();

const App: React.FC = () => {
  const classes = useStyles();

  let [creepyClownData, setCreepyClownData] = useState({ ...localStorage });

  // Listen for custom event which is dispatched by CRUD, indicating localStorage
  // has been modified, and this top level component should update state & pass down
  document.createEvent('Event').initEvent('StorageUpdated', true, true);
  window.addEventListener("StorageUpdated", () => setCreepyClownData({ ...localStorage }), false);

  useEffect(() => {
    document.title = "Clown Tracker";
  }, [])

  return (
    <div className={classes.root}>
      <TopBar />
      <ClownGallery creepyClownData={creepyClownData} />
    </div>
  );
}

export default App;
