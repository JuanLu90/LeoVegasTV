// DEPENDENCIES
import React from 'react';
import { useNavigate } from 'react-router-dom';

// STYLED-COMPONENTS
import { FilterSearch, FilterPages, ItemsWrapper } from './filter.styled';

const Filter: React.FC<any> = (props) => {
  const { onChangePage, handleChange, filterInfo } = props;

  const navigate = useNavigate();

  return (
    <div>
      <FilterSearch>
        <input
          type="text"
          name=""
          id=""
          onChange={(e: any) => handleChange(e.target.value)}
          placeholder="search"
        />

        <FilterPages>
          <button
            onClick={() => onChangePage(filterInfo.page - 1)}
            disabled={filterInfo.page <= 1}
          >
            Prev
          </button>
          <span>
            {filterInfo?.page} of {filterInfo?.total_pages}
          </span>
          <button
            onClick={() => onChangePage(filterInfo.page + 1)}
            disabled={filterInfo.page >= filterInfo.total_pages}
          >
            Next
          </button>
        </FilterPages>
      </FilterSearch>
      <ItemsWrapper>
        <div>
          <button onClick={() => navigate('/favorites')}>Favorites</button>
          <button onClick={() => navigate('/watchlater')}>Watch Later</button>
        </div>
        <span>
          Items: {20 * filterInfo.page} of {filterInfo.total_results}
        </span>
      </ItemsWrapper>
    </div>
  );
};

export default Filter;
