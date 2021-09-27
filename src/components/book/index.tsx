import React, { FC, memo } from 'react';
import styles from './index.module.css';
import Cover1 from '../../covers/1.jpeg';
import { Book } from '../../types';

export type BookProps = {
  book: Book;
};

const BookComponent: FC<BookProps> = (props) => {
  const { book } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.title}>{book.title}</div>
        <div className={styles.author}>
          {book.author[0]} {book.author.length > 1 ? '等' : ''}
        </div>

        <div className={styles.price}>{book.price}元</div>
      </div>
      <img className={styles.right} src={Cover1} alt='' />
    </div>
  );
};

export default memo(BookComponent);
