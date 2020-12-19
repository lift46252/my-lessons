function add(a:number, b:number):number {
    return a + b
}
function toUpper(str:string):string {
    return str.toUpperCase()
}
/*-----------------------------*/
interface MyPosition{
    x:number | undefined
    y:number|undefined
}
interface MyPositionWithDefault extends MyPosition{
    default:string
}
/*перегрузка функции это когда мы прописываем для нее разные сценарии вот так*/
function position():MyPosition
function position(a:number): MyPositionWithDefault
function position(a:number,b:number): MyPosition
function position(a?:number,b?:number) {
    if (!a && !b){
        return {x:undefined,y:undefined}
    }
    if (a && !b){
        return { x:a,y:undefined,default:a.toString()}
    }
    return{x:a,y:b}
}

console.log("empty",position())
console.log("One Param",position(42))
console.log("Two params",position(42,15))