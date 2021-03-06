import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessedWords from "./GueesedWords";

const defaultProps = {
    guessedWords: [
        { guessedWord: 'train', letterMatchCount: 3 }
    ]
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWord component
 * @function setup
 * @param {} props - COmponent props specific for this setup 
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<GuessedWords {...setupProps} />)
};


test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps)
});

describe('If there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    })

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('renders instructions to guess a word', () => {
        const instruction = findByTestAttr(wrapper, 'guess-instructions');
        expect(instruction.text().length).not.toBe(0)
    });
});

describe('If there are words guessed', () => {
    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 2 },
        { guessedWord: 'party', letterMatchCount: 5 },
    ];
    let wrapper;

    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('renders "guessed" word section', () => {
        const guessedWordsDiv = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsDiv.length).toBe(1);
    });

    test('displays the correct number of the guesses words', () => {
        const guessedWordNodes =findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes.length).toBe(guessedWords.length);

    });
});