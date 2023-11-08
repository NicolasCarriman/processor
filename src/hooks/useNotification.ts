import { useContext } from "react";
import { QueueContext } from "../context/queueContext";
import { IQueue } from "../models/queue.model";
import { INotify } from '../models/notify.model'

interface IMessageHandler {
	sendNotification(notification: INotify): void;
	getLastMessage(): INotify | null;
}

function useMessage():IMessageHandler {
	const { enqueue, dequeue } = useContext<IQueue<INotify>>(QueueContext);

	const sendNotification = (notification: INotify):void => {
		enqueue(notification);
	}

	const getLastMessage = () => {
		const notification = dequeue();
		return (notification ? notification : null);
	}

	return {
		sendNotification,
		getLastMessage
	};
}

export default useMessage;