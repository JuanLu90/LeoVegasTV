import React from 'react';

const Filters: React.FC<any> = (props) => {
  const { onChangePage, handleChange, filterInfo } = props;

  return (
    <div className="filters">
      <div>
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
      </div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e: any) => handleChange(e.target.value)}
        placeholder="search"
      />
      <span>
        Items: {20 * filterInfo.page} of {filterInfo.total_results}
      </span>
    </div>
  );
};

export default Filters;
