import React from "react";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Star from "./Star";
import "../App.css";

function Stars({count}) {
    const stars = [];
    if (typeof count != 'number' ||  count < 1 || count > 5) return stars;
    for (let i = 0; i < count; i++) {
        stars.push(<Star key={uuidv4()}/>);
    }

    return (
        <ul className={"card-body-stars"}>
            {stars}
        </ul>
    )
};

Stars.defaultProps = {
    count: 0
};

export default Stars;

Stars.propTypes = {
    count: PropTypes.number
};