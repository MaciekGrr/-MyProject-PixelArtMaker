// Select color input
const pickColor = $('#colorPicker');
/*
jQueried from
const pickColor = document.getElementById("colorPicker");
*/

// Select size input

const inputHeight = $('#inputHeight'); // jQueried
const inputWidth = $('#inputWidth'); // jQueried
const pickTable = $('#pixelCanvas'); // jQueried
// const newRow = document.createElement('tr');
// const newColumn = document.createElement('td');

function makeGrid() {

for (let i=0; i<inputHeight.val(); i++) {
    pickTable.append("<tr></tr>");
      for (let j=0; j<inputWidth.val(); j++) {
      pickTable.children().last().append("<td></td>");
      }
    }
}

// When size is submitted by the user, call makeGrid()

$("form").submit(function(e){
    pickTable.empty();   //children().remove();
    e.preventDefault();
    makeGrid();
    alert("Submitted");


});

/*
document.getElementById('sizePicker').click(function (e){
e.preventDefault();
makeGrid();
});

function makeGrid() {
    document.getElementById('sizePicker').submit();
 $('form').submit ( makeGrid())
 $('form').submit(function() {
   makeGrid();
 });
*/



// Your code goes here!
