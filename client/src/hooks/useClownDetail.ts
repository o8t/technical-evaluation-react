import { useState, useEffect } from "react";
import { Clown } from '../types';
import { getAsync, postAsync } from '../utils';
import { apiRoutes } from './api';

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

    async function updateClown(clown: Clown) {
        await postAsync(apiRoutes.addOrUpdateClown, clown);
    }

    return {
        clown,
        updateClown
    };
}