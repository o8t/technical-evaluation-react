import { Clown } from '../types';

// In-memory store
// TODO: replace with persistence db
export const clowns: Clown[] = [
    { id: 'joker', alias: 'Joker', name: 'unknown', description: 'Bathman\'s enemy', isCrazy: true, skills: [ 'Black-ops', 'master of disguise', 'has no fear']}
];
