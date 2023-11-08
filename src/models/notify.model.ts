import { IProces } from './process.model';

// status, users type: manual auto

export interface INotify {
    message: string;
    process: IProces;
    id: string;
}