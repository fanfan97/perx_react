import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

test('Render App Component', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>);
  const dashboardComponent = screen.getByTestId("dashboard-comp");
  expect(dashboardComponent).toBeInTheDocument();
});
