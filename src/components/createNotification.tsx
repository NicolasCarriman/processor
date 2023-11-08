import React, { useState } from 'react';
import useNotification from '../hooks/useNotification';
import './createNotification.sass';
import { INotify } from '../models/notify.model';
import { IProces } from '../models/process.model';

interface MessageProps {
	onClose: () => void;
}

const notificationTypes = ['build', 'charge', 'message', 'sell'];

function CreateNotification({ onClose }: MessageProps) {
	const [ notification, setNotification ] = useState<Partial<INotify>>({ process: { type: 'build', duration: 3000 } });
	const { sendNotification } = useNotification();


	const handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNotification({
			...notification,
			message: event.currentTarget.value,
		});
	}
	const handleChangeId = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNotification({
			...notification,
			id: event.target.value
		});
	}

	const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.currentTarget.value as IProces['type'];
		const process: IProces = {
			type: value,
			duration: 3000
		}
		setNotification({
			...notification,
			process: process
		})
	}

	const handleClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
		sendNotification(notification as INotify);
		onClose();
	}

	return (
		<div className='message-container'>
			<label>Push Notification</label>
			<input placeholder='message' className='message_input' value={notification.message} onChange={handleChangeMessage} />
			<select className='notification_selector' onChange={handleSelect}>
				{
					notificationTypes.map((n, i) => (
						<option key={n + i} value={n}>{n}</option>
					))
				}
			</select>
			<input className='message_input' placeholder='id' value={notification.id} onChange={handleChangeId} />
			<button className='message_send message_button' onClick={handleClick} >Send Notification</button>
		</div>
	);
}

export default CreateNotification;