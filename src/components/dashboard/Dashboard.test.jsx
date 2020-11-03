import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Dashboard />, div);
    });

    it('renders a Welcome Message', () => {
        const name = 'Ebenezer';
        const wrapper = shallow(<Dashboard name={name} />);
        const h1 = wrapper.find('h1');

        expect(h1.length).toBe(1);
        expect(h1.text()).toEqual('Welcome Ebenezer!')
    });
});
