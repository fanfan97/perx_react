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
  const repoContainer = screen.getByTestId("repo-div-container");
  const orgsContainer = screen.getByTestId("orgs-div-container");
  expect(searchbarComponent).toBeInTheDocument();
  expect(repoContainer).toBeInTheDocument();
  expect(orgsContainer).toBeInTheDocument();
});
