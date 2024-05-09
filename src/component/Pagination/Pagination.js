import React from "react";
import ReactPaginate from "react-paginate";

const PaginationComponent = ({ pageCount, onPageChange }) => {
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    onPageChange(selectedPage);
  };

  return (
    // <ReactPaginate
    //   pageCount={pageCount}
    //   onPageChange={handlePageClick}
    //   containerClassName={"pagination"}
    //   activeClassName={"active"}
    // />

    <nav
      aria-label="Page navigation"
      className="d-flex justify-content-center mt-4"
    >
      <ul className="pagination">
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
        />
      </ul>
    </nav>
  );
};

export default PaginationComponent;
