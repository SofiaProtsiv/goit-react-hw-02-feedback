import React from 'react';
import Statistics from './statistics'
import FeedbackOptions from './controls'
import Section from './section'
import Notification from './notification';
import style from './feedback.module.css';

export default class FeedbackApp extends React.Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		const total = good + neutral + bad;
		return total;
	};

	countPositiveFeedbackPercentage = () => {
		const total = this.countTotalFeedback();
		const { good } = this.state;
		const percentage = (good * 100) / total;
		return Math.round(percentage);
	};

	onLeaveFeedback = (event) => {
		const name = event.target.name;
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
	};
  

	render() {
		const { good, neutral, bad } = this.state;
		const total = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();

		const objKey = Object.keys(this.state);
		return (
			<div className={style.feedback}>
				<Section title="Please leave feedback">
					<FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback} />
				</Section>

				{total === 0 ? (
					<Notification message="No feedback given" />
				) : (
					<Section title="Statistics">
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							positivePercentage={positivePercentage}
						/>
					</Section>
				)}
			</div>
		);
	}
}