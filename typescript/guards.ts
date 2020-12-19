/*guards это конструкции помогаюшие работать с типами*/
function strip(x:string|number){
    if (typeof x === "number"){
        return console.log("x is number")
    }
    return console.log("x is string")
}
class MyResponse {
    header = "response header"
    result = "response result"
}
class MyError {
    header = "error header"
    message = "error message"
}
function handle(res:MyResponse|MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}
/*-----------------------------------------*/
type AlertType  = "warning"|"success"|"danger"
function setAlerttype(type:AlertType) {

}
setAlerttype("warning")
/*а так не получится
* setAlerttype("jhkgfhsg")
* */