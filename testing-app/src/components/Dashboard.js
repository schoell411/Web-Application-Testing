import React, { useState } from "react";
import Display from "./Display";

const Dashboard = () => {
	const [balls, setBalls] = useState(0);
	const [strikes, setStrikes] = useState(0);
	const [outs, setOuts] = useState(0);

	const ballsCount = () => {
		if (balls < 3) {
			setBalls(balls + 1);
		} else {
			setBalls(0);
		}
	};

	const strikeCount = () => {
		if (strikes < 2) {
			setStrikes(strikes + 1);
		} else {
			setStrikes(0);
			setOuts(outs + 1);
		}
	};

	const outCount = () => {
		if (outs < 2) {
			setOuts(outs + 1);
		} else {
			setOuts(0);
		}
		setStrikes(0);
		setBalls(0);
	};

	const foulCount = () => {
		if (strikes < 2) {
			setStrikes(strikes + 1);
		}
	};

	const hit = () => {
		setStrikes(0);
		setBalls(0);
	};

	return (
		<div>
			<Display balls={balls} strikes={strikes} outs={outs} />
			<button onClick={ballsCount}>Ball</button>
			<button onClick={strikeCount}>Strike</button>
			<button onClick={outCount}>Out</button>
			<button onClick={foulCount}>Foul</button>
			<button onClick={hit}>Hit</button>
		</div>
	);
};

export default Dashboard;
