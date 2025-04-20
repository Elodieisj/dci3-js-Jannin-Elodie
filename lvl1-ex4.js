
    alert ("Please enter two numbers")
let length = prompt("Enter the length of the triangle :");
let height = prompt("Enter the height of the triangle :");

length = parseFloat(length);
height = parseFloat(height);

function askArea() {
    let area = (length * height) /2
    console.log ("Area is :" + area)
}

askArea()
