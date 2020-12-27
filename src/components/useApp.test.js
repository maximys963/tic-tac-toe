import React from 'react';
import { shallow } from 'enzyme';
import { useApp } from '../useApp';

function HookWrapper(props) {
    const { hook } = props;
    return(<div hook={hook}/>)
}

describe('useApp', () => {
    it('should render', () => {
        let wrapper = shallow(<HookWrapper />);
        expect(wrapper.exists).toBeTruthy()
    })
})
