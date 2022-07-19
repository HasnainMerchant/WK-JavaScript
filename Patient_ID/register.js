const patient_list = [];
let displayPatientList = function(patient){
    document.getElementById("pList").innerText += " " + `${patient}`;
};

let registerPatient = function() {
    let patient_id = document.getElementById("patient_id").value;
    document.getElementById("patient_id").value = " ";
    patient_list.push(patient_id);
    let patientSet = new Set(patient_list);
    console.log(patientSet);
    document.getElementById("pList").innerText = "";
    patientSet.forEach(displayPatientList);
};

//document.getElementById("regsiter").addEventListener("click", registerPatient);