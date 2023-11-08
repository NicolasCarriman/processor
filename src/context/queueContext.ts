import { createContext } from "react";
import { IQueue } from "../models/queue.model";
import { INotify } from "../models/notify.model";

const contextDefaultValue: IQueue<INotify> = {
    store: [],
    enqueue: function (_element: INotify): void {},
    dequeue: function() { return undefined },
    empty: function () {}
}

export const QueueContext = createContext(contextDefaultValue);
