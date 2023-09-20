import { useEffect, useState } from "react";
import { Todo } from "../models/todo.model.";


// techzaion.com/validation-with-yup

export function TodoItemComponent(props:Todo){
  // her component kendi içindeki stateden sorumlu olmalıdır. kendi state encapsulate edmelidir.
  // checked state TodoComponent.tsx de yaparsak tüm itemların checked durumlarını düşünerek geliştirme yapmalıyız. bu durumda state değişimide tüm itemlar etkilenir.
  const [checked,setChecked] = useState(props.completed);

  // useEffect(()=>{
  //   console.log('render- init')
  // });

  useEffect(()=>{
    console.log('render')
  },[checked]);

  const {title,completed} = props;
  const componentStyle:React.CSSProperties  = {
    padding:'5px',
    border:'1px solid gray',
    backgroundColor:'turquoise',
    color:'white'
  }

  return <>
  <div style={componentStyle}>{title} 
    <span style={checked ? {color:'green'}:{color:'red'}}>{checked ? ' tamamlandı ':' tamamlanmadı '}</span>
    <input type="checkbox" checked={checked} onChange={(e:any) => {
      setChecked(e.target.checked);
    }} />
  </div>
  {/* <div style={{
    color:'red'
  }}></div> */}
  </> 

}