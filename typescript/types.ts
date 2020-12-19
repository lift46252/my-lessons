const str: string = "hello",
      msg:string = "typescript",
      isFetching: boolean = true,
      isLoading:boolean = false,
    /*массивы можно прописывать и так и так*/
      numberArray: number[] = [1,1,2,3,5,8,13],
    /*такая запись называется generic types и по сути она указывает в больше меньше  что будет внутри массива*/
      numberArray2: Array<number> = [1,1,3,5,8,13],
    /*этот тип называется tuple и блогадоря ниму можно указывать что будут несколько
     разных типов данных но нужно соблюдать поочерёдность тоесть тут я не могу
     дописать еще что то если в опиделении не добавлю еще number и менять местами тоже нельзя */
      contact: [number,string,number] = [111,"alex",112]
let int:number = 42,
    float:number =4.2,
    num:number = 3e10,
    /*это значит что можноприсваивать любой тип данных*/
    variable :any = 42;
variable = []
/*-------------------------------------------------------*/
/*void озночает что функция ничего не возвращает*/
function sayName(name:string):void{
    console.log(name)
}
sayName("alex")
console.log(str)
/*тип never указываем только если функуия возвращает ощибку
 и не прекращается или если она делает что то бксконечно*/
function throwError(message:string):never {
    throw new Error(message)
}
/*с помощью type можно создовать свой собственные типы*/
type Login = string
const login:Login = "admin"
/*можно указывать несколько типов с помощью |*/
type Id = string | number
let id :Id = 12
id = "one"
/*еще есть null и undefined*/