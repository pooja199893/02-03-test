var selectedRow = null;
function onFormSubmit(event){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData)
    }else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrive data

function readFormData(){
    var formData = {};
    formData["name"]=document.getElementById("name").value;
    return formData;
}
// insert data
function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName("tbody")[0]; //select the first row in the table
    var newRow = table.insertRow(0); //add the new row
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    
    selectedRow = null;
}

