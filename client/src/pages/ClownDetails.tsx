import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useClownDetail  } from '../hooks';
import { Clown } from '../types';

export function ClownDetails() {
    const params: any = useParams();
    const { clown, updateClown } = useClownDetail(Number(params.id));
    const [state, setState ] = useState<Clown>(clown || { id: undefined, name: '', description: ''});

    useEffect(() => {
        if (clown)
            setState(clown);
    }, [clown])


    // TODO combine these property changed events
    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setState({...state, name: event.target.value });
    }

    function handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
        setState({...state, description: event.target.value });
    }
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        updateClown(state);
        event.preventDefault();
        return <Redirect to="/clowns/" />
    }

    return (
        <div>
            <h1>Clown Info</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>id: {state ? state.id : ''}</div>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={state.name} onChange={e => handleNameChange(e)} />
                    </label>
                </div>
                <div>
                    <label>
                        Description:
                        <input type="text" name="description" value={state.description} onChange={e => handleDescriptionChange(e)} />
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
