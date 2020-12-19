interface Person{
    name:string
    age:number
}
type PersonKeys = keyof Person
const key:PersonKeys = "name"
type User  = {
    _id:number
    name:string
    email:string
    createdAt: Date
}
/*если нам надо создать похожий тип только без некоторых полей
* Exclude - убрать
* Pick - брать только их*/

type UserKeysNoMeta = Exclude<keyof User, "_id"| "createdAt">
type UserKeysNoMeta2 = Pick<User, "name"|"email">