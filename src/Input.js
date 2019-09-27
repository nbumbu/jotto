import React, { Component } from "react";
import { connect } from 'react-redux';
import { guessWord } from "./actions"

export class UnconnectedInput extends Component {

    constructor(props) {
        super(props);
        this.state = {currentGuess: ''}

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const guessedWord = this.state.currentGuess;
        if(guessedWord && guessedWord.length > 0 ) {
            this.props.guessWord(guessedWord);
            this.setState({currentGuess: ''})
        }

    }

    render() {
        let contents = this.props.success ? null : (
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="enter guess"
                    value={this.state.currentGuess} 
                    onChange={(event) => this.setState({currentGuess: event.target.value})}/>
                <button
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    type="submit"
                    onClick={(event) => this.onSubmitHandler(event)}
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
        guessWord: (word) =>  dispatch(guessWord(word))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedInput);