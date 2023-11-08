export interface IQueue<T> {
    store: T[];
    enqueue: (element: T) => void;
    dequeue: () => T | undefined;
    empty: () => void;
}