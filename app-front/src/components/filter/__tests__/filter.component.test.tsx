// DEPENDENCIES
import { render, screen } from '../../../utils/test-utils';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Filter from '../filter.component';

describe('Filter component', () => {
  it('should render', () => {
    const props = {
      onChangePage: jest.fn(),
      handleChange: jest.fn(),
      filterInfo: {
        page: 1,
        search: '',
      },
    };

    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Filter {...props} />} />
        </Routes>
      </BrowserRouter>,
    );

    expect(screen.getByTestId('filter-component')).toBeTruthy();
  });
});
