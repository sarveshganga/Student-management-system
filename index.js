
function testVariable() {
  debugger
  var strText = document.getElementById("txtName").value;
  var strId = document.getElementById("txtStudentId").value;
  var strClass = document.getElementById("txtclass").value;
  var strRNo = document.getElementById("txtrollno").value;
  var form=document.getElementById("Registation")
 let table = document.getElementById("tableBody");
 let newRow = table.insertRow(table.rows.length);

 // Insert data into cells of the new row
 newRow.insertCell(0).innerHTML = strText;
 newRow.insertCell(1).innerHTML = strId;
 newRow.insertCell(2).innerHTML = strClass;
 newRow.insertCell(3).innerHTML = strRNo;
 newRow.insertCell(4).innerHTML =
     '<button onclick="editData(this)">Edit</button>' +
     '<button onclick="deleteData(this)">Delete</button>';

 // Clear input fields
 clearInputs();
}


function editData(button) {

  // Get the parent row of the clicked button
  let row = button.parentNode.parentNode;

  // Get the cells within the row
  let nameCell = row.cells[0];
  let IdCell = row.cells[1];
  let ClassCell = row.cells[2];
  let RollCell = row.cells[3];

  // Prompt the user to enter updated values
  let strText =
  document.getElementById("txtName").value=
          nameCell.innerHTML;
  let strId =
  document.getElementById("txtStudentId").value=
          IdCell.innerHTML;
  let strClass =
  document.getElementById("txtclass").value=
          ClassCell.innerHTML
      ;
  let strRNo =
  document.getElementById("txtrollno").value=
          RollCell.innerHTML
      ;
      nameCell.innerHTML = strText;
      IdCell.innerHTML = strId;
      ClassCell.innerHTML = strClass;
      RollCell.innerHTML = strRNo;

     

  // Remove the row from the table
  row.parentNode.removeChild(row)
    }


function deleteData(button) {

  // Get the parent row of the clicked button
  let row = button.parentNode.parentNode;

  // Remove the row from the table
  row.parentNode.removeChild(row);
}

function clearInputs() {

  // Clear input fields
  document.getElementById("txtName").value="";
  document.getElementById("txtStudentId").value = "";
  document.getElementById("txtclass").value = "";
  document.getElementById("txtrollno").value = "";
}
 
 




