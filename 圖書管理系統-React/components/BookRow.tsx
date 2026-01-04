import { Book } from "@/lib/BookType";
import { useState } from "react"
import styles from "@/styles/app.module.scss"

type Props = {
    book : Book,
    deleteBook : (id : number) => void,
    updateBook : (id : number , data : Partial<Book>) => void,
}

export default function BookRow({book,deleteBook,updateBook} : Props){
    const [edit , setEdit] = useState(false);
    const [draft , setDraft] = useState(book);

    const save = () => {
        updateBook(book.id, draft);
        setEdit(false);
        alert('已保存!')
    }

    return(
        <tr>
            <td>{book.id}</td>
            <td>
                {edit ?
                    <input 
                        value={draft.name} 
                        onChange={e => setDraft({ ...draft, name: e.target.value })}
                    /> 
                    : book.name
                }
            </td>
            <td>
                {edit ? 
                    <input 
                        value={draft.writer} 
                        onChange={e => setDraft({ ...draft, writer: e.target.value })}
                    /> 
                    : book.writer
                }
            </td>
            <td>
                {edit ? 
                    <input 
                        value={draft.year} 
                        type="number"
                        min={0}
                        onChange={e => setDraft({...draft, year : Number(e.target.value)})}
                    />
                    : book.year
                }
            </td>
            <td>
                <button className={styles.deletebtn} onClick={() => deleteBook(book.id)}>刪除</button>
            </td>
            <td>
                <button className={styles.editbtn} onClick={() => (edit ? save() : setEdit(true))}>{edit ? "保存" : "修改"}</button>
            </td>
        </tr>
    )
}