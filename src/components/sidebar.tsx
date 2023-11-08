import { useContext, useState } from 'react';
import './sidebar.sass';
import CreateMessage from './createNotification';
import { QueueContext } from '../context/queueContext';

function Sidebar() {
	const [isPush, setIsPush] = useState<boolean>(false);
	const { dequeue } = useContext(QueueContext);

	const handleClick = (type: string) => {
		switch (type.toLocaleLowerCase()) {
			case 'push':
				setIsPush(true);
				break;
			case 'pull':
				break;
			case 'getmessage':
				const message = dequeue();
				console.log(message);
				if (!message) return;
				break;
			default:
				break;
		}
	};

	return (
		<aside className='navbar-container'>
			<div className='navbar-box'>
				<h2 className='navbar-title'>
					Your Project
				</h2>
				<section>
					<label>overview</label>
					<ul>
						<li id='push' onClick={() => handleClick('Push')}>Push work</li>
						<li onClick={() => handleClick('Pull')}>Pull work</li>
						<li onClick={() => handleClick('getMessage')}>Read first message</li>
						<li>Test</li>
					</ul>
				</section>
				{
					isPush && <CreateMessage onClose={() => setIsPush(false)} />
				}
			</div>
		</aside>
	)
}

export default Sidebar;
