import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';

export interface PaginationProps {
  page: number;
  totalPages: number;
  updatePage: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  updatePage,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className={css.wrapper}>
      <ReactPaginate
        forcePage={page - 1}
        pageCount={totalPages}
        onPageChange={(sel) => updatePage(sel.selected + 1)}
        containerClassName={css.pagination}
        pageClassName={css.page}
        pageLinkClassName={css.link}
        previousClassName={css.page}
        nextClassName={css.page}
        activeClassName={css.active}
        previousLabel="←"
        nextLabel="→"
        breakLabel="…"
      />
    </div>
  );
}
