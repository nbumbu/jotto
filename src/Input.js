import React, { Component } from "react";
import { connect } from 'react-redux';
import { guessWord } from "./actions"
import { dispatch } from "rxjs/internal/observable/pairs";
import {actionTypes} from "./actions";

class Input extends Component {

    render() {
        let contents = this.props.success ? null : (
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="enter guess" />
                <button
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    type="submit"
                >Submit</button>
            </form>
        )
        return (
            <div data-test="component-input">
                {contents}
            </div>
        )
    }
}

const mapStateToProps = ({ success }) => {
    return { success };
};

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        guessWord: (word) => guessWord(word)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);