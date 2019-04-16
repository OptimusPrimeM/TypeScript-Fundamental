
doSomething();
doSomethingwithLet();

function doSomething(){
    for (var index = 0; index < 10; index++) {
        console.log(index);   
    }

    console.log("final  = " + index);
}

function doSomethingwithLet(){
    for (let index = 0; index < 10; index++) {
        console.log(index);   
    }
   console.log("final  = " + index);
}

