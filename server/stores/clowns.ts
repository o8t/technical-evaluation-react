import { Clown } from '../types';

// In-memory store
// TODO: replace with persistence db
export const clowns: Clown[] = [
    { id: 1, name: 'joker', description: 'Batman\'s enemy' }
];

var lastId: number = clowns.length;

export function getNextId() {
    lastId++;
    return lastId;
}