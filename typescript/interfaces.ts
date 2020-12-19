/*интерфейс это тип для обьектов или классов где мы пишем что должно быть у этих обьектов или классов*/
interface Rect{
    /*readonly только для чтения */
    readonly id:string
    /*? необезательный параметр*/
    color?:string
    size:{
        width:number
        height:number
    }
}
const rect1:Rect = {
    id:"one",
    size:{
        width:20,
        height:30
    },
    color:"#ffffff",
}
/*чтобы привести к типу пишем вот так*/
const rect2 = {} as Rect
/*--------------------------------------------------------*/
/*наследуется extends*/
interface rectWithArea extends Rect{
    /*тип для функции в обьекте указывается как стрелочная функция
    посде стрелки нужно указать тип данных который должен быть возвращен*/
    getArea: () => number
}
const rect3: rectWithArea = {
    id:"two",
    size:{
        width:40,
        height:50
    },
    getArea():number{
        return this.size.width * this.size.height
    }
}
/*-----------------------------------------------------------*/
interface IClock{
    time: Date,
    setTime(date:Date):void
}
/*implements по сути  тоже указание типа только для классов*/
class Clock implements IClock{
    time: Date = new Date()
    setTime(date: Date):void {
        this.time = date
    }
}
/*------------------------------------------------------------*/
interface Styles{
    [key: string]: string
}
const css: Styles = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: "5px"
}