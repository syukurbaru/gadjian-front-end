import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "react-bootstrap";

import "./paginationComponent.css";

import Loading from "../asset/img/loading-buffering.gif";
import { fetchUsers } from "../store/actions/userAction";

function PaginationComponent({ RenderComponent, pageLimit, dataLimit }) {
  // Ambil data store
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // set page
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      {data.length > 0 ? (
        <>
          <div className="d-flex flex-wrap justify-content-center data-user">
            {getPaginatedData().map((d, idx) => (
              <RenderComponent key={idx} data={d} />
            ))}
          </div>

          <div className="pagination">
            <button
              onClick={goToPreviousPage}
              className={`prev ${currentPage === 1 ? "disabled" : ""}`}
            >
              &lt; prev
            </button>

            {getPaginationGroup().map((item, index) => (
              <button
                key={index}
                onClick={changePage}
                className={`paginationItem ${
                  currentPage === item ? "active" : null
                }`}
              >
                <span>{item}</span>
              </button>
            ))}
            <button
              onClick={goToNextPage}
              className={`next ${currentPage === pages ? "disabled" : ""}`}
            >
              next &gt;
            </button>
          </div>
        </>
      ) : (
        <div className="loading">
          <Image src={Loading} />
        </div>
      )}
    </div>
  );
}

export default PaginationComponent;
