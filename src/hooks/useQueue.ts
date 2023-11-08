import { useState } from 'react'
import { IQueue } from '../models/queue.model';

function useQueue<T>(): IQueue<T> {
  const [ store, setStore ] = useState<T[]>([]); 

	function enqueue(element: T) {
		const storeUpdated = [element, ...store];
		setStore(storeUpdated);
	};

	function empty () {
		setStore([]);
	}

	function dequeue() {
		const storeUpdated = store.slice();
		const deletedEl = storeUpdated.pop();
		console.log(storeUpdated);
		setStore(storeUpdated);
		return deletedEl;
	};

  return {
    store,
    enqueue,
    dequeue,
    empty
  };
}

export default useQueue;