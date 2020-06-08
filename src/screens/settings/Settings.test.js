/**
 * @format
 */

import 'react-native';
import React from 'react';
import Settings from './Settings';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

describe('Settings', () => {
  it('renders correctly', () => {
    renderer.create(<Settings />);
  });

  it('should increment by 1', () => {
    const wrapper = mount(<Settings />);
    const incrementButton = wrapper
      .find('Button')
      .findWhere((w) => w.text() === 'Increment')
      .first();

    incrementButton.props().onPress();

    wrapper.update();

    expect(
      wrapper
        .findWhere((node) => node.prop('testID') === 'counter')
        .at(1)
        .childAt(1)
        .debug(),
    ).toEqual('1');
  });

  it('should increment by 2', () => {
    const wrapper = mount(<Settings />);
    const incrementButton = wrapper
      .find('Button')
      .findWhere((w) => w.text() === 'Increment')
      .first();

    incrementButton.props().onPress();
    incrementButton.props().onPress();

    wrapper.update();

    expect(
      wrapper
        .findWhere((node) => node.prop('testID') === 'counter')
        .at(1)
        .childAt(1)
        .debug(),
    ).toEqual('3');
  });

  it('should decrement by 4', () => {
    const wrapper = mount(<Settings />);
    const decrementButton = wrapper
      .find('Button')
      .findWhere((w) => w.text() === 'Decrement')
      .first();

    decrementButton.props().onPress();
    decrementButton.props().onPress();
    decrementButton.props().onPress();
    decrementButton.props().onPress();

    wrapper.update();

    expect(
      wrapper
        .findWhere((node) => node.prop('testID') === 'counter')
        .at(1)
        .childAt(1)
        .debug(),
    ).toEqual('-1');
  });
});
