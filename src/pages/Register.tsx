import { Input, Button, FormLabel } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { registerClown } from '../actions/clownActions';
import { clownReducer, NewClown } from '../store/reducers';

interface RegisterState {
  clownName: string;
  profilePicture: string;
  error: string | null;
}

function Register() {
  const initialState: RegisterState = {
    clownName: "",
    error: null,
    profilePicture: ""
  }
  let [state, setState] = useState(initialState);

  const submit = async () => {
    /* Validate */
    if (!state.clownName) {
      setState({...state, error: "Please enter a name."});
      return;
    } else if (!state.profilePicture) {
      setState({...state, error: "Please add profile photo."});
      return;
    }

    /* Register */
    try {
      await registerClown({ name: state.clownName, profilePicture: state.profilePicture });
    } catch (e) {
      setState({...state, error: (e as Error).message });
      return;
    }

    /* Go back to home */
    window.location.assign("/");
  }

  const handleFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = () => {
        setState({ ...state, profilePicture: reader.result as string });
      }

      reader.onerror = (e) => {
        console.error(e);
      }
    }
  }

  return (
    <div>
      <h1>Register</h1>
      { state.error ? <div className="error">{state.error}</div> : null }

      <Input value={state.clownName} onChange={(event) => { setState({...state, clownName: event.target.value }) }} />
      <FormLabel>Name</FormLabel>
      <Input type="file" onChange={handleFile}></Input>
      <div><img src={state.profilePicture} /></div>

      <div><Button onClick={submit}>Register</Button></div>
    </div>
  )
}

export default Register;