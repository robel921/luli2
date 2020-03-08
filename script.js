function ageInDays(){
    // var birthYear = prompt("what year were you born ?");
// var currentYear = 2020;
// var result = (currentYear-birthYear)*365;
var h1= document.createElement("h1");
var textField = document.createTextNode( "hsssssssssssssssssssssssssssssssssssssss<br>shhhhhhhhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjh" );
h1.setAttribute('id','resultBox');
h1.appendChild(textField);
document.getElementById("result1").appendChild(h1);


}

function reset(){
    document.getElementById("resultBox").remove();
}