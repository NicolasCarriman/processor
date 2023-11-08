type processTypes = 'build' | 'charge' | 'message' | 'sell';

export interface IProces {
    type: processTypes;
    duration: number
}