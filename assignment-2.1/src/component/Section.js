import style from "./Section.module.css";

function Section({ name, content}) {
    return (
        
         <div className={style.card}>
            <h3>{name}</h3>
            <hr />
            <p>{content}</p>
         </div>
        
    );
}

export default Section;