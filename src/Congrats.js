import React from "react";
import propTypes from "prop-types";
/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if `success` pros is set)
 */
const Congrats = (props) => {


    if (props.success) {
        return (
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                    Congratulations! YOu guessed the word!
                </span>
            </div>
        )
    } else {
        return (
            <div data-test="component-congrats" />
        )
    }
};

Congrats.propTypes = {
    success: propTypes.bool.isRequired
}

export default Congrats;