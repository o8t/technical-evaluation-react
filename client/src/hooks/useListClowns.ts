import { useState, useEffect } from "react";
import { Clown } from '../types';
import { getAsync } from '../utils';
import { apiRoutes } from './api';

export function useListClowns() {
    const [clowns, setClowns] = useState<Clown[]>([]);

    useEffect(() => {

        async function fetchAsync() {
            const { result } = await getAsync<Clown[]>(apiRoutes.listClowns);
            if (result) {
                setClowns(result);
            }
        }

        fetchAsync();
    }, [] /* run-once-only */)

    return clowns;
}