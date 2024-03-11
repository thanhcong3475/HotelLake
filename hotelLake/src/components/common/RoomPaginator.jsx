const RoomPaginator = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => {
    return i + 1;
  });

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((pageNumber) => (
          <li
            className={`page-item ${
              currentPage === pageNumber ? "active" : ""
            }`}
            key={pageNumber}
          >
            <button
              className="page-link"
              onClick={() => {
                onPageChange(pageNumber);
              }}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RoomPaginator;
