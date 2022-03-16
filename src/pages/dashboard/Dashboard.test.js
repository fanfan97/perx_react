import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../../App';
import store from '../../store';
import Dashboard from './Dashboard';

test('Render Dashboard Component', () => {
  render(
    <Provider store={store}>
      <Dashboard/>
    </Provider>);
  const searchbarComponent = screen.getByTestId("searchbar-comp");
  const repo_orgs_Container = screen.getByTestId("repo-orgs-container");
  expect(searchbarComponent).toBeInTheDocument();
  expect(repo_orgs_Container).toBeInTheDocument();
});
