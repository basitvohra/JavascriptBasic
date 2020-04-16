// TODO
var a = document.getElementById('code');

var abc = 123;


/*function checkVar() { // variable hoisting

    var abc = 123;
    console.log("d: "+d);
    secondFn();
    console.log("thirdFunction"+thirdFunction);
    thirdFunction();
    for(var i=0;i<10;i++){
        let c=10;
        var d= 20;
        console.log(abc);
        c=20;
    }
    console.log("c"+c); // Error
    console.log(d);   
    function secondFn() {
        let m=10;
        console.log("secondFn "+ m);
    }
    function thirdFunction() {
        console.log("thirdFn");
    }
    

}*/
var obj = { 
    test:100 
};
var str = 10;
function checkVar(obj1, str){

    console.log(obj1.test);
    obj1.test = 200;
    console.log(obj1.test);
    console.log("str"+str);// 10
    str = 20;
    console.log("str"+str);//20
}
checkVar(obj, str);
console.log("after called" +obj.test);// 200
console.log("str"+str);// 10


checkVar();


