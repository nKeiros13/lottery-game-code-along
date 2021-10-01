import React, { Component } from "react";
import "./Lottery.css";
import LotteryBall from "./LotteryBall";

class Lottery extends Component {
	static defaultProps = {
		header: "Lotto",
		maxRange: 40,
		balls: 8,
	};
	constructor(props) {
		super(props);
		this.state = { nums: Array.from({ length: this.props.balls }) };
		this.handleClick = this.handleClick.bind(this);
	}
	generateNums() {
		this.setState((currState) => ({
			nums: currState.nums.map(
				(n) => Math.floor(Math.random() * this.props.maxRange) + 1
			),
		}));
		console.log(this.state.nums);
	}
	handleClick() {
		this.generateNums();
	}
	render() {
		return (
			<div className="Lottery">
				<div className="Lottery-balls">
					{this.state.nums.map((n) => (
						<LotteryBall num={n} />
					))}
				</div>
				<button onClick={this.handleClick} className="Lottery-button">
					<i class="far fa-smile-wink"></i>
				</button>
			</div>
		);
	}
}

export default Lottery;
