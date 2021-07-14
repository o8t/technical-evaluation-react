import { Clown } from '../types';

// This is an in-memory store of clowns
// TODO: It should be replaced with persistence db
export const clowns: Clown[] = [
    { id: 1, name: 'joker', description: 'Batman\'s enemy' }
];

var lastId: number = clowns.length;

export function getNextId() {
    lastId++;
    return lastId;
}