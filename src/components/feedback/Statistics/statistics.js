import React from "react";
import style from '../feedback.module.css';
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (

    <ul className={style.list}>

        <li className={style.item}>
            <span className={style.label}>Good</span>
            <span className={style.number}>{good}</span>
        </li>

        <li className={style.item}>
            <span className={style.label}>Neutral</span>
            <span className={style.number}>{neutral}</span>
        </li>

        <li className={style.item}>
            <span className={style.label}>Bad</span>
            <span className={style.number}>{bad}</span>
        </li>

        <li className={style.item}>
            <span className={style.label}>Total</span>
            <span className={style.number}>{total}</span>
        </li>

        <li className={style.item}>
            <span className={style.label}>Positive feedback</span>
            <span className={style.number}>{positivePercentage}%</span>
        </li>

  </ul>
)
Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired
};

export default Statistics;