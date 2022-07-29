patient_id = []
patient_list = []
function generateRandomID(){
    let patientIdSet = new Set(patient_id);
    let id = Math.floor(Math.random() * 5) + 1;
    if(patientIdSet.has(id)){
        alert("ID Already Exits");
    }
    else{
        document.getElementById("details").innerText = "";
        patient_id.push(id);
        let firstname = document.getElementById("fname").value;
        let lastname = document.getElementById("lname").value;
        let gender = document.getElementById("gender").value;
        let age = document.getElementById("age").value;
        document.getElementById("fname").innerText = "";
        document.getElementById("lname").innerText = "";
        document.getElementById("gender").innerText = "";
        document.getElementById("age").innerText = "";
        patient = [id, firstname, lastname, gender, age];
        patient_list.push(patient);
        alert("Patient Number " + id + " Added");
        // patient_list.forEach(displayPatientList);
    }
}
function showPatients()
{
    patient_list.forEach(displayPatientList);
}
let displayPatientList = function(patient){
    var table1body = document.getElementById("table1Body");
    table1body.innerHTML = "";
    document.getElementById("details").innerText += " " + `${patient}`;
    var table = document.getElementById("table1");
        var row = table.insertRow(-1);
        row.insertCell(0).innerHTML = `${patient[0]}`;
        row.insertCell(1).innerHTML = `${patient[1]}`;
        row.insertCell(2).innerHTML = `${patient[2]}`;
        row.insertCell(3).innerHTML = `${patient[3]}`;
        row.insertCell(4).innerHTML = `${patient[4]}`;
    // document.getElementById("p_id").innerText += " " + `${patient[0]}`;
    // document.getElementById("firstname").innerText += " " + `${patient[1]}`;
    // document.getElementById("lastname").innerText += " " + `${patient[2]}`;
    // document.getElementById("p_gender").innerText += " " + `${patient[3]}`;
    // document.getElementById("p_age").innerText += " " + `${patient[4]}`;
};