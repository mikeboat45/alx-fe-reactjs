import { useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
	<>
	<p>Current score: {count}</p>
	<button style={{backgroundColor:'green'}} onClick={() => setCount(count + 1)}>Increase</button>
	<button style={{backgroundColor:'red'}} onClick={() => setCount(count - 1)}>Decrease</button>
	<button style={{backgroundColor:'gold'}} onClick={() => setCount(0)}>Reset</button>
	</>
	);

}
