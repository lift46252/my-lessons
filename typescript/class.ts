class Typescript{
    version:string
    constructor(version:string) {
        this.version = version
    }
    info(name:string){
        return `[${name}]: Typescript version is ${this.version}`
    }
}
/*в typescript class такиеже как в js(es6) но позволяют при обьявлении прописывать readonly и ему подобные*/
class Car{
    readonly model:string
    readonly numberOfWheels:number = 4
    constructor(theModel:string) {
        this.model = theModel
    }
}
/*данную запись можно сделать короче вот так*/
class Car2{
    readonly numberOfWheels:number = 4
    constructor(readonly model:string) {}
}
/*--------------------------------------------------------*/
/*есть три модификатора :
* public(default) - доступны везде
* private - они доступны только в этом классе в наследуемом классе они не доступны
* protected - они доступны в этом классе и во всех классах которые его наследуют*/
class Animal{
    protected voice:string = ""
    public color:string="black"
    private go(){
        console.log("go")
    }
}
class Cat extends Animal{
    public setVoice(voice:string):void{
        this.voice = voice
    }
}
const cat = new Cat()
/*так можно делать с protected*/
cat.setVoice("aaaa")
/*так нельзя делать с protected
* cat.voice
* */
/*-------------------------------------------------*/
/*абстрактные класс нужны для абстрактных методов и чтобы всё это наследовать*/
abstract class Component{
    abstract render():void
    abstract info():string
}
class AppComponent extends Component{
    render():void {
        console.log("component on render")
    }
    info(): string {
        return "This is App";
    }
}