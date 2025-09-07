import { useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);

	return(
		<>
		<p>Current Count: {count}</p>
		<button onClick={() => setCount(count + 1)}>Increase</button>
		<button onClick={() => setCount(count - 1)}>Decrease</button>
		<button onClick={() => setCount(0)}>Reset</button>

		</>
	);

}
