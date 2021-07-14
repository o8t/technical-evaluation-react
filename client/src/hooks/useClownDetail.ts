import { useState, useEffect } from "react";
import { Clown } from '../types';
import { getAsync, postAsync } from '../utils';
import { apiRoutes } from './api';

/**
 * Fetch and update the clown detail at the server.
 * @param id the clown's id
 */
export function useClownDetail(id: number) {
    const [clown, setClown] = useState<Clown | undefined>(undefined);

    useEffect(() => {
        async function fetchAsync() {
            const { result } = await getAsync<Clown>(apiRoutes.getClown, id);
            if (result) {
                setClown(result);
            }
        }

        if (id)
            fetchAsync();
    }, [id])

    /**
     * Submit the changes to the server
     * @param clown 
     */
    async function updateClown(clown: Clown) {
        await postAsync(apiRoutes.addOrUpdateClown, clown);
    }

    return {
        clown,
        updateClown
    };
}