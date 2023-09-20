
import axios from "axios";
import { useEffect, useState } from "react"

export default function UseEffectHooks() {
  const [counter,setCounter] = useState<number>(0);
  const [visible,setVisible] = useState<boolean>(false);
  let c = 0;
  let interval = setInterval(()=> {
    // setCounter(counter + 1);
  
    console.log('c', c++);
  },1000)  


  // useEffect Hook [] olmadan çalışması ui render açısından sorun teşkil eder. state ile çalışırken dikkatli olalım aşağıdaki şekilde kullanmayalım.
  // useEffect(()=> {
  //   console.log('her durumda çalışır');
  // })
  // componentDidMount -- Component doma girdiğinde
  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      console.log('response', response);
    }).catch(err => {
      console.log('err', err);
    })

    // componentDidMount
    // componentDidUpdate
    // asenkron api data load işlemlerinin yapıldığı blok.
    console.log('component doma yüklendi');
    return () => { // clean up function, componentWillunmount, component domdan ayrılınca tetiklenir
      console.log('component domdan çıkınca');
      clearInterval(interval);
      
    }
  }, []) // [] dependencies, state tanımı, takip edeceğimiz state yapısı
  //componentDidUpdate
  useEffect(()=> {
    console.log('sadece counter değişiminde tetiklenir.')

  }, [counter]);

  useEffect(()=> {
    console.log('sadece visible değişiminde tetiklenir.')

  }, [visible]);

  // useEffect(()=> {
  //   console.log('counter ve visible değişiminde')
  // }, [counter,visible])
  
  return <>
    visible: {visible ? 'true':'false'}
    counter: {counter}
    <button onClick={() => {alert('mesaj')}}>
      Show Message
    </button>
    <button onClick={()=> {
      setVisible(!visible)
    }}>SetVisible</button>

<button onClick={()=> {
      setCounter(counter+1)
    }}>SetCounter</button>
  </>
}


