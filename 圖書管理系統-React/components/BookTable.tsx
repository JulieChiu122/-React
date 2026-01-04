import { Book } from "@/lib/BookType"
import BookRow from "./BookRow"
import styles from "@/styles/app.module.scss"

type Props = {
    books : Book[],
    deleteBook : (id : number) => void,
    updateBook : (id : number , data : Partial<Book>) => void,
}

export default function BookTable({books,deleteBook,updateBook} : Props ){

    return(
        <div className={styles.bookList}>
            <h2>圖書列表</h2>
            <div className={styles.bookTable}>
                <table>
                    <thead>
                        <tr>
                            <th className={styles.idh}>ID</th>
                            <th className={styles.nameh}>書名</th>
                            <th className={styles.writerh}>作者</th>
                            <th className={styles.yearh}>出版年份</th>
                            <th className={styles.deleteh}>刪除</th>
                            <th className={styles.edith}>修改</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <BookRow 
                                key = {book.id}
                                book = {book}
                                deleteBook = {deleteBook}
                                updateBook = {updateBook}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}