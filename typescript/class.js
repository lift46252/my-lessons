var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]: Typescript version is " + this.version;
    };
    return Typescript;
}());
/*в typescript class такиеже как в js(es6) но позволяют при обьявлении прописывать readonly и ему подобные*/
var Car = /** @class */ (function () {
    function Car(theModel) {
        this.numberOfWheels = 4;
        this.model = theModel;
    }
    return Car;
}());
/*данную запись можно сделать короче вот так*/
var Car2 = /** @class */ (function () {
    function Car2(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car2;
}());
/*--------------------------------------------------------*/
/*есть три модификатора :
* public(default) - доступны везде
* private - они доступны только в этом классе в наследуемом классе они не доступны
* protected - они доступны в этом классе и во всех классах которые его наследуют*/
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = "";
        this.color = "black";
    }
    Animal.prototype.go = function () {
        console.log("go");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
/*так можно делать с protected*/
cat.setVoice("aaaa");
/*так нельзя делать с protected
* cat.voice
* */
/*-------------------------------------------------*/
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log("component on render");
    };
    AppComponent.prototype.info = function () {
        return "This is App";
    };
    return AppComponent;
}(Component));
