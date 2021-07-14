import React from 'react';
import { Link } from 'react-router-dom';
import { Clown } from '../../types';
import './ClownRow.css';

export function ClownRow(props: { clown: Clown }) {
    const { clown } = props;
    
    return (
        <tr>
            <td>{clown.id}</td>
            <td>{clown.name}</td>
            <td>{clown.description}</td>
            <td><Link to={'/clown/' + clown.id}>Edit</Link></td>
        </tr>
    );
}