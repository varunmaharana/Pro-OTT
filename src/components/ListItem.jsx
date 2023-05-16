import React from "react";
import { NavLink, Link } from "react-router-dom";

const ListItem = ({ iconClass, redirectPath, text }) => {
	return (
		<li>
			<NavLink to={redirectPath} >
				{iconClass && <i className={iconClass}></i>}
				<span>{text}</span>
			</NavLink>
		</li>
	);
};

export default ListItem;
