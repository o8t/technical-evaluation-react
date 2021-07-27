import React, { Component, useState } from 'react';
import { deleteClown, loadClownsFromStorage } from '../actions/clownActions'
import { AppState, Clown } from '../store/reducers';
import { Provider, useSelector } from 'react-redux';
import store from '../store/store';
import { Button } from '@material-ui/core';

function ClownList() {
  /* Initialize clowns from storage if not already loaded */
  if (!store.getState().clownsLoaded) {
    loadClownsFromStorage();
  }

  const clowns = useSelector((state: AppState) => state.clowns);

  return (
    <ul>
      {Object.keys(clowns).map((clownId) => {
        const clown = clowns[clownId];
        return <li key={clown.id}><img src={clown.profilePicture} />{clown.name} <Button variant="contained" color='secondary' onClick={() => deleteClown(clown.id) }>Delete</Button></li>
      })}
    </ul>
  );
}

export default ClownList;