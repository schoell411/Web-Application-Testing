import React from "react";

const Display = (props) => {
	return (
		<div>
			<h3>Balls</h3>
			<div>{props.balls}</div>

			<h3>Strikes</h3>
			<div>{props.strikes}</div>

			<h3>Outs</h3>
			<div>{props.outs}</div>
		</div>
	);
};

export default Display;
