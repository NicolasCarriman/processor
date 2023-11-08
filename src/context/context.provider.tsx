import useQueue from "../hooks/useQueue"
import { INotify } from "../models/notify.model";
import { QueueContext } from "./queueContext"

export const ContextProvider = ({	children }:{ children: React.ReactNode }) => {
	const {	store, enqueue, dequeue, empty } = useQueue<INotify>();
	return (
		<QueueContext.Provider value={{store, enqueue, dequeue, empty}}>
			{children}
		</QueueContext.Provider>
	)
}