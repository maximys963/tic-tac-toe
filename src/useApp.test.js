import React from 'react';
import { shallow } from 'enzyme';
import { useApp } from './useApp';

function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  return (<div hook={hook} />);
}

describe('useApp', () => {
  it('should initiate state with array of void strings', () => {
    const wrapper = shallow(<HookWrapper hook={useApp} />);
    const { hook } = wrapper.find('div').props();
    const { gameBoard } = hook;
    gameBoard.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.element).toBe('');
      });
    });
  });
});
