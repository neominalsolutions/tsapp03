import * as yup from "yup";

const todoCreateSchema = yup.object({
  title: yup.string().trim().required('title boş geçilemez').min(3,'min 3 karakter').max(50,'maks 50 karakter'),
  completed: yup.boolean().isTrue('false yapamazsınız'),
  count: yup.number().positive().default(0).integer().max(1000,'1000 den büyük olamaz'),
  title2: yup.string().when('title',{is:(title:string) => {
    console.log('t', title)
    return title !== 'abc';
  },then(schema) {
    console.log('s', schema);
      return schema.required('abc olmalıdır');
  } ,})
});

const todoUpdateSchema =  yup.object({
  title: yup.string().trim().required('title boş geçilemez').min(10,'min 10 karakter').max(50,'maks 50 karakter'),
  completed: yup.boolean().isTrue('false yapamazsınız'),
  count: yup.number().default(0).integer().max(1000,'1000 den büyük olamaz')});

// birden fazla const değeri export ederken kullanım
export {todoCreateSchema,todoUpdateSchema};
 