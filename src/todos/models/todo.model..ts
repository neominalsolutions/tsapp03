// apidan çekilen verinin karşılığı Dto
export interface Todo {
  userId?:number;
  id?:number;
  completed:boolean;
  title:string;
}