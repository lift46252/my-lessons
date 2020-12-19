const MYCONSTANT = 5;
console.log(MYCONSTANT);

function logScope() {
    var localVar = 2;

    if (localVar) {
        let localVar = "i'mdifferent!";
        console.log("nested localVar: ", localVar);
    }

    console.log("nested localVar: ", localVar);
}

logScope();