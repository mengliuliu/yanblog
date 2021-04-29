// src/components/Home.test.tsx

import * as React from 'react';
import * as enzyme from 'enzyme';
import Home from './index';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Home name='Daniel' />);
  expect(hello.find(".greeting").text()).toEqual('Home Daniel!')
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Home name='Daniel' enthusiasmLevel={1}/>);
  expect(hello.find(".greeting").text()).toEqual('Home Daniel!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Home name='Daniel' enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual('Home Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Home name='Daniel' enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Home name='Daniel' enthusiasmLevel={-1} />);
  }).toThrow();
});