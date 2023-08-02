import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App component Test', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(App).toBeDefined();
    });

  it("renders a div with the class App-header", () => {
    const app = shallow(<App />);

    expect(app.find(".App-header")).toBeDefined();
  });

  it("renders a div with the class App-body", () => {
    const app = shallow(<App />);

    expect(app.find(".App-body")).toBeDefined();
  });

  it("renders a div with the class App-footer", () => {
    const app = shallow(<App />);

    expect(app.find(".App-footer")).toBeDefined();
  });
});