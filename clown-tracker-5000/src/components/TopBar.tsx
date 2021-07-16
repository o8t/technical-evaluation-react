import React, { useState } from 'react'
import '../App.css';
import { createStyles, makeStyles, Theme, alpha } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import CreateEditModal from "./CreateEditModal";
import { Clown } from "../types";
import * as CRUD from "../utils/CRUD";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundSize: '200% 200%',
      background: 'linear-gradient(to right, white, red, green, violet, yellow)',
      animation: 'Animation 5s ease infinite',
    },
    registerButton: {
      marginRight: theme.spacing(2),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.35),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.55),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);

// The top bar provides ability to register new clowns
export default function TopBar() {
  const classes = useStyles();
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <IconButton onClick={() => setConfirmOpen(true)} edge="start" className={classes.registerButton} aria-label="menu">
          <AddCircleOutlineOutlinedIcon />
          <Typography variant="h6">
            &nbsp;Register clown
          </Typography>
        </IconButton>
        {confirmOpen &&
          <CreateEditModal
            existingClown={new Clown()}
            submitAction={CRUD.createClown}
            open={confirmOpen}
            setOpen={setConfirmOpen}
            promptTitle={"Register clown"}
          />
        }

        <div className={classes.search}>
           <div className={classes.searchIcon}>
             <SearchIcon />
           </div>
           <InputBase
             placeholder="Search…"
             classes={{
               root: classes.inputRoot,
               input: classes.inputInput,
             }}
             inputProps={{ 'aria-label': 'search' }}
           />
         </div>

      </Toolbar>
    </AppBar>
  );
}
