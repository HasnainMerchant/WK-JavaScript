patient_list = []
function registerPatient(){
    document.getElementById("details").innerText = "";
    let id = Math.floor(Math.random() * 5);
    let firstname = document.getElementById("fname").value;
    let lastname = document.getElementById("lname").value;
    let gender = document.getElementById("gender").value;
    let age = document.getElementById("age").value;
    patient = [id, firstname, lastname, gender, age]
    patient_list.push(patient);
    let patientSet = new Set(patient_list);
    document.getElementById("fname").innerText = "";
    document.getElementById("lname").innerText = "";
    document.getElementById("gender").innerText = "";
    document.getElementById("age").innerText = "";
    if (patientSet.has(id)){
        alert("ID Is Taken");
    }
    patientSet.forEach(displayPatientList);
}
let displayPatientList = function(patient){
    document.getElementById("details").innerText += " " + `${patient}`;
    // var table = document.getElementById("myTable");
    // var row = table.insertRow(1);
    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // var cell3 = rwo.insertCell(2);
    // var cell4 = row.insertCell(3);

    // // Add some text to the new cells:
    // cell1.innerHTML = `${patient[0]}`;
    // cell2.innerHTML = `${patient[1]}`;
    // cell3.innerHTML = `${patient[2]}`;
    // cell4.innerHTML = `${patient[3]}`;
    // cell2.innerHTML = "NEW CELL2";
    // document.getElementById("p_id").innerText += " " + `${patient[0]}`;
    // document.getElementById("firstname").innerText += " " + `${patient[1]}`;
    // document.getElementById("lastname").innerText += " " + `${patient[2]}`;
    // document.getElementById("p_gender").innerText += " " + `${patient[3]}`;
    // document.getElementById("p_age").innerText += " " + `${patient[4]}`;
};