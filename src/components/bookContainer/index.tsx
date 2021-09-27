import React, {
  createRef,
  FC,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Book } from '../../types';
import BookComponent from '../book';
import styles from './index.module.css';

export type BookContainerProps = {
  books: Book[];
};

const BookContainer: FC<BookContainerProps> = (props) => {
  const [page, setPage] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const { books } = props;
  const ref = createRef<HTMLDivElement>();

  const total = useMemo(() => Math.ceil(books.length / 3), [books]);

  const bookWrapperStyle = useMemo(
    () => ({
      transform: `translate(${-translateX}px, 0)`,
    }),
    [translateX],
  );

  const handleMove = useCallback(
    (direction) => {
      const rect = ref.current!.getBoundingClientRect();

      if (direction === 'left') {
        if (page <= 1) return;
        setTranslateX(translateX - rect.width);
        setPage(page - 1);
      } else {
        if (page >= total) return;
        setTranslateX(translateX + rect.width);
        setPage(page + 1);
      }
    },
    [ref, translateX, page, total],
  );

  const handleMoveLeft = useCallback(() => {
    handleMove('left');
  }, [handleMove]);

  const handleMoveRight = useCallback(() => {
    handleMove('right');
  }, [handleMove]);

  return (
    <div className={styles.outer}>
      <div className={styles.icon} onClick={handleMoveLeft}>
        {'<'}
      </div>
      <div className={styles.bookWindow} ref={ref}>
        <div className={styles.bookWrapper} style={bookWrapperStyle}>
          {books.map((book, index) => {
            return <BookComponent book={book} key={book.id || index} />;
          })}
        </div>
      </div>
      <div className={styles.icon} onClick={handleMoveRight}>
        {'>'}
      </div>
    </div>
  );
};

export default memo(BookContainer);
