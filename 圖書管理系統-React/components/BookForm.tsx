import { useState } from "react";
import styles from "@/styles/app.module.scss"

type Props = {
    onAdd : (name : string, writer : string, year : number) => void;
}

export default function BookForm({ onAdd } : Props){
    const [name , setName] = useState('');
    const [writer , setWriter] = useState('');
    const [year , setYear] = useState<number | ''>('');

    const submit = () => {
        if (!name || !writer || !year){
            alert('請先輸入資料!')
            return;
        }

        onAdd(name,writer,year);
        setName('')
        setWriter('')
        setYear('')
    }
    return(
        <div className={styles.addNew}>
            <h2>添加圖書</h2>
            <div>
                <label>書名 : </label>
                <input value={name} onChange={ e => setName(e.target.value)}/>
            </div>
            <div>
                <label>作者 : </label>
                <input value={writer} onChange={ e => setWriter(e.target.value)}/>
            </div>
            <div>
                <label>出版年份 : </label>
                <input 
                    type="number"
                    min={0}
                    value={year} 
                    onChange={ e => setYear(e.target.value === "" ? "" : Number(e.target.value))}
                />
            </div>
            <button onClick={submit}>添加圖書</button>
        </div>
    )
}