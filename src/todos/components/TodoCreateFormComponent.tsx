import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { todoCreateSchema } from "../validations/todo.validation";
import TodoService from "../services/todo.service";

// yup kullandığımızda ara bir forma dönüşmesi gerek kendi state'imiz ile çalışmadığımızdan kullanımına gerek kalmadı.
// type TodoCreateState = {
//   title:string;
//   completed:boolean;
//   count:number;
// }

type FormData = yup.InferType<typeof todoCreateSchema>;
  

export default function TodoCreateFormComponent() {
  // const s = yup.object({
  //   title: yup.string().trim().required('title boş geçilemez').min(10,'min 10 karakter').max(50,'maks 50 karakter'),
  //   completed: yup.boolean().isTrue('false yapamazsınız'),
  //   count: yup.number().default(0).integer().max(1000,'1000 den büyük olamaz')});

  
// yup form data dönüşümü için yazılan ara kod

  const { register, handleSubmit, watch, reset, formState: { errors }, setValue, getValues } = useForm<FormData>({
    resolver: yupResolver(todoCreateSchema) // adaptasyon kodu.
  });

  const title = watch('title');
  console.log('title', title);


  const onSubmitForm = async (formData:FormData) => {
    console.log('formState', formData);
    reset({
      title:'',
      completed:true
    });

    try {
      let r = await TodoService().create(formData,'todos');
      console.log('r', r);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    console.log('render')
  }, [])

  return <>
  <input placeholder="numeric değer giriniz" onChange={(e)=> {
    setValue('count',Number(e.target.value))
    const title =  getValues('title');
    console.log('tttt', title);
  }} />
  <form onSubmit={handleSubmit(onSubmitForm)}>
    <input type="text" {... register("title")} />

{/* template hata vermemesi için ? ile template check yapılır null değişse message */}
    <span>{errors?.title?.message}</span>
    <br></br>

    <input type="text" {... register("title2")} />
    <span>{errors?.title2?.message}</span>

    <br></br>
    <input {... register("completed")}  type="checkbox" />
    <span>{errors?.completed?.message}</span>
    <input {... register("count")}  type="number" />

    <span>{errors?.count?.message}</span>
    <br></br>
    <input type="submit" value="kaydet" />
    {/* <input {... register("title",
    {
      required:{
      value:true,
      message:'Boş geçilemez'
    }, 
      minLength: {
      value:5,
      message:'min 5'
    }}
    )} /> */}
    
  </form>
  </>

}