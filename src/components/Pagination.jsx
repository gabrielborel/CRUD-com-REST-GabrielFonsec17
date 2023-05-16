import { PaginationItem } from "./PaginationItem";
import "./Pagination.css";

const siblingsCount = 1;

const generatePagesArray = (from, to) => {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);
};

export function Pagination({
  registersPerPages = 8,
  totalCountOfRegisters,
  currentPage = 1,
  onPageChange,
}) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPages);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <div className="pagination">
      <div>
        <strong>
          {currentPage === 1 ? 0 : (currentPage - 1) * registersPerPages + 1}
        </strong>{" "}
        -{" "}
        <strong>
          {currentPage === 1
            ? currentPage * registersPerPages
            : (currentPage - 1) * registersPerPages + 10}
        </strong>{" "}
        de <strong>{totalCountOfRegisters}</strong>
      </div>

      <div className="pages-indicator-container">
        {currentPage > siblingsCount + 1 && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && <span>...</span>}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <PaginationItem
              onPageChange={onPageChange}
              number={page}
              key={page}
            />
          ))}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => (
            <PaginationItem
              onPageChange={onPageChange}
              number={page}
              key={page}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && <span>...</span>}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </div>
    </div>
  );
}
