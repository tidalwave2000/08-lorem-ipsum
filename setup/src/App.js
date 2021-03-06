import React, { useState } from "react";
import data from "./data";
function App() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("hello world");
	};

	return (
		<section className="section-center">
			<h3>tired of boring lorem ipsum?</h3>
			<form className="lorem-form" onSubmit={handleSubmit}>
				<label htmlFor="amount">paragraph:</label>
				<input
					type="number"
					name="amount"
					id="amount"
					value={count}
					onChange={(e) => setCount(e.target.value)}
				/>
				<button type="submit" className="btn">
					generate
				</button>
			</form>
			<article className="lorem-text">
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
					doloribus sed itaque nobis delectus ullam quisquam totam ducimus
					corporis earum repellat, neque corrupti iure consectetur inventore
					repellendus veniam odit ea.
				</p>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
					doloribus sed itaque nobis delectus ullam quisquam totam ducimus
					corporis earum repellat, neque corrupti iure consectetur inventore
					repellendus veniam odit ea.
				</p>
			</article>
		</section>
	);
}

export default App;
