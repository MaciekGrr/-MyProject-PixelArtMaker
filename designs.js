// STEP 1 Select color and size input

const pickColor = $('#colorPicker');
const colVal = document.getElementById('colorPicker').value;
/*
jQueried from
const pickColor = document.getElementById("colorPicker");
const newRow = document.createElement('tr');
const newColumn = document.createElement('td');
*/
const inputHeight = $('#inputHeight'); // jQueried
const inputWidth = $('#inputWidth'); // jQueried
const pickTable = $('#pixelCanvas'); // jQueried

/* STEP 2 Create makeGrid tr - how many rows = how big height,
inside every row/tr we need td elements = for inside for */
function makeGrid() {

for (let i=0; i<inputHeight.val(); i++) {
    pickTable.append("<tr></tr>");
      for (let j=0; j<inputWidth.val(); j++) {
      pickTable.children().last().append("<td></td>");
      }
    }
}

// STEP 3 When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(e){
    pickTable.empty();   //children().remove();
    e.preventDefault();
    makeGrid();
});

//STEP 4

pickTable.on("click", "td", function() {
    $(this).css("background-color", pickColor.val());
  });
