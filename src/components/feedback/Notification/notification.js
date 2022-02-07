import React from 'react';
import PropTypes from 'prop-types';
import style from '../feedback.module.css';

const Notification = ({ message }) => {
	return (
		<>
			<p className={style.title}>{message}</p>
		</>
	);
};
Notification.propTypes = {
	message: PropTypes.string.isRequired
};
export default Notification;