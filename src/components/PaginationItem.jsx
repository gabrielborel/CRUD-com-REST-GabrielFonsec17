import "./PaginationItem.css";

export function PaginationItem({ isCurrent = false, number, onPageChange }) {
  if (isCurrent) {
    return <button className="active-pagination-item">{number}</button>;
  }

  return (
    <button className="pagination-item" onClick={() => onPageChange(number)}>
      {number}
    </button>
  );
}
