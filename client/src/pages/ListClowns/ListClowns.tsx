import React from 'react';
import { Link } from 'react-router-dom';
import { useListClowns } from '../../hooks';
import { ClownRow } from './ClownRow';
import './ListClowns.css';

export function ListClowns() {
    const clowns = useListClowns();

    return (
        <div>
            <h1>List of Registered Clowns</h1>
            <Link to='/clown'>Add a new clown</Link>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {clowns.map(c => <ClownRow key={c.id} clown={c} />)}
                </tbody>
            </table>
        </div>
        
    );
}
