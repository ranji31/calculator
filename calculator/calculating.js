//show the pressed value at textbox area
function display(value){
    document.getElementById('final').value += value;
}

//calculating process
function equal(){
    
    a = a+b && a-b && a*b && a/b;
    b = a;
    var a = document.getElementById("final").value;
    var b = eval(a);
    document.getElementById("final").value= b;
     
     
}
