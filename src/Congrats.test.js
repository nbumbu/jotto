import React from "react";
import {shallow} from "enzyme";

import {findByTestAttr, checkProps} from "../test/testUtils";
import Congrats from "./Congrats";


const defaultProps = {success: false};

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    const wrapper = shallow(<Congrats {...setupProps}/>);
    return wrapper;
}

test('renders without errors', () => {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('renders no-empty congrats message when `success` props is true', () => {
    const wrapper = setup({success: true});
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});

test('does not throw an warning with expected props', () => {
    const expectedProps = {success: false};
    checkProps(Congrats, expectedProps);
});