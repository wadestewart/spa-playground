import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Login from './Login';

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Login />, div);
    });

    it('calls handleSubmit on click', () => {
        // Arrange
        // eslint-disable-next-line no-native-reassign
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.Resolve({
                user: {}
            })
        }));

        const wrapper = shallow(<Login />);
        console.log(wrapper.debug());

        // Act
        wrapper.find('#button').simulate('click');

        // Assert
        expect(handleSubmit).toHaveBeenCalled();
    });
});
