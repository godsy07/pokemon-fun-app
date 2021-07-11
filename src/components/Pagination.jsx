import React from "react";

const Pagination = ({ visitPrevPage, visitNextPage }) => {
  return (
    <div className='nav-buttons'>
      {visitPrevPage != null && (
        <button onClick={visitPrevPage}>&lt;&lt; PREV</button>
      )}
      {visitNextPage != null && (
        <button onClick={visitNextPage}>NEXT &gt;&gt;</button>
      )}
    </div>
  );
};

export default Pagination;
