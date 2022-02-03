import React from "react";
import style from './feedback.module.css';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<div className={style.buttonList}>
		    {options.map((option) => (
				<button key={shortid.generate()} className = {style.button} type="button" name={option} onClick={onLeaveFeedback}>
					{option}
				</button>
			))}
		</div>
	);
};
FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;