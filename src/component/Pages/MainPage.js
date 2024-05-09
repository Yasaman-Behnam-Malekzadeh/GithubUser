import React, { useState, useEffect } from "react";
import MainPageItems from "./MainPageItems";
import Pagination from "../Pagination/Pagination";

const MainPage = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(6); // Change this value based on your requirement
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    // Calculate the total number of pages based on the total number of items
    const totalItems = props.items.length;
    const calculatedPageCount = Math.ceil(totalItems / itemsPerPage);
    setPageCount(calculatedPageCount);
  }, [props.items, itemsPerPage]);

  // Function to get items for the current page
  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return props.items.slice(startIndex, endIndex);
  };

  // Function to handle page change
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div>
      <div className="row ml-4 pl-5 mr-1">
        {/* Render items for the current page */}
        {getCurrentPageItems().map((item) => (
          <MainPageItems
            key={item.id}
            login={item.login}
            avatar_url={item.avatar_url}
            html_url={item.html_url}
          />
        ))}
      </div>
      {/* Render pagination component */}
      <Pagination
        itemsPerPage={5}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MainPage;
