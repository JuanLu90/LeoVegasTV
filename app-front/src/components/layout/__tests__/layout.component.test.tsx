// DEPENDENCIES
import { render, screen } from '../../../utils/test-utils';

// COMPONENTS
import Layout from '../layout.component';

// MOCKS
jest.mock('react-router-dom');

describe('Layout component', () => {
  it('should render', () => {
    render(
      <Layout>
        <div>Mock text</div>
      </Layout>,
    );

    expect(screen.getByTestId('layout-component')).toBeTruthy();
    expect(screen.getByTestId('nav-component')).toBeTruthy();
    expect(screen.getByText('TV')).toBeTruthy();
  });
});
