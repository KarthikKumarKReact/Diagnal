import 'react-native';
import React from 'react';
import HomeScreen from '../src/screens/HomeScreen/HomeScreen'
import renderer from 'react-test-renderer';
import { render, waitFor } from '@testing-library/react-native';

it('Connection UI Snapshot', () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders without error', () => {
    render(<HomeScreen />);
  });
