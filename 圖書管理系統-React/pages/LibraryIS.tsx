import BookForm from "@/components/BookForm";
import BookTable from "@/components/BookTable";
import { Book } from "@/lib/BookType";
import { useState } from "react"
import styles from "@/styles/app.module.scss"

export default function LibraryIS(){
    const [books, setBooks] = useState<Book[]>([]);
    const [nextId, setNextId] = useState(1);

    const addBooks = (name : string, writer : string, year : number) => {
        setBooks(prev => [...prev,{id : nextId, name, writer, year}]);
        setNextId(id => id + 1)
    };

    const deleteBook = (id : number) => {
        const newList =  books.filter(b => b.id !== id);
        setBooks(newList);
        alert('確定要刪除?')
        if (newList.length === 0){
            setNextId(1);
        };
    };

    // Partial代表可以選擇要的欄位
    const updateBook = (id : number,data : Partial<Book>) => {
        setBooks(prev => 
            prev.map(b => b.id === id ? {...b, ...data} : b)
        );
    };

    return(
        <main className={styles.mainIs}>
            <header className={styles.NameIS}>
                <h1>圖書管理系統</h1>
            </header>
            <div className={styles.bookBody}>
                <BookForm onAdd = {addBooks}/>
                <BookTable books = {books} deleteBook = {deleteBook} updateBook = {updateBook}/>
            </div>
        </main>
    );

};
