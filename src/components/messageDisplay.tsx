import './messageDisplay.sass'
import { IQueue } from '../models/queue.model';
import { useContext } from 'react';
import { QueueContext } from '../context/queueContext';
import { AiFillBell } from "react-icons/ai";
import { INotify } from '../models/notify.model';
import NotificationElmement from './notification';


function MessageDisplay() {
	const { store } = useContext<IQueue<INotify>>(QueueContext);

	return (
		<aside className='display-container'>
			<section>
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent:'start', alignItems: 'center', gap: '12px'}}>
					<h2>
						Notifications
					</h2>
					<AiFillBell size='1rem' />
					{
						store.length > 0 && <span style={{color: 'red', fontSize:'1rem', marginLeft: '-12px'}}>*</span>
					}
				</div>
				<ul>
					{
						store.length > 0 ?
							store.map((notification, i) =>
								<li
									key={notification.message + i}
									className={i === 0 ? 'first-message' : 'message'}
								>
									<NotificationElmement id={notification.message} type={notification.process.type} />
								</li>)
							: <p>Messages empty</p>
					}
				</ul>
			</section>
		</aside>
	)
}

export default MessageDisplay