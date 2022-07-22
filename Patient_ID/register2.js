patient_list = []
function registerPatient(){
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
        patient_list.forEach(displayPatientList);
    }
}
let displayPatientList = function(patient){
    document.getElementById("details").innerText += " " + `${patient}`;
    // document.getElementById("p_id").innerText += " " + `${patient[0]}`;
    // document.getElementById("firstname").innerText += " " + `${patient[1]}`;
    // document.getElementById("lastname").innerText += " " + `${patient[2]}`;
    // document.getElementById("p_gender").innerText += " " + `${patient[3]}`;
    // document.getElementById("p_age").innerText += " " + `${patient[4]}`;
};