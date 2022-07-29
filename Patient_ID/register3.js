patient_id = []
class Person{
    #firstname;
    #lastname;
    #gender;
    #age;

    set setFNAME(fname){
        this.#firstname = fname;
    }

    set setLNAME(lname){
        this.#lastname = lname;
    }

    set setGENDER(gender){
        this.#gender = gender;
    }

    set setAGE(age){
        this.#age = age;
    }
    
    get getfName(){
        return this.#firstname;
    }
    get getlName(){
        return this.#lastname;
    }
    get getage(){
        return this.#age;
    }
    get getgender(){
        return this.#gender;
    }
    
}

function patientDatabase(){
        let patientIdSet = new Set(patient_id);
        let id = Math.floor(Math.random() * 5) + 1;
        if(patientIdSet.has(id)){
            alert("ID Already Exits");
        }
        else{
            // document.getElementById("details").innerText = "";
            patient_id.push(id);
            // Create A New Person
            var per1 = new Person();
            per1.setFNAME = document.getElementById("fname").value;
            per1.setLNAME = document.getElementById("lname").value;
            per1.setGENDER = document.getElementById("gender").value;
            per1.setAGE = document.getElementById("age").value;
            document.getElementById("fname").innerText = "";
            document.getElementById("lname").innerText = "";
            document.getElementById("gender").innerText = "";
            document.getElementById("age").innerText = "";
            // patient = [id, firstname, lastname, gender, age];
            // patient_list.push(patient);
            alert("Patient Number " + id + " Added");
            var table = document.getElementById("table1");
            var row = table.insertRow(-1);
            row.insertCell(0).innerHTML = id;
            row.insertCell(1).innerHTML = per1.getfName;
            row.insertCell(2).innerHTML = per1.getlName;
            row.insertCell(3).innerHTML = per1.getgender;
            row.insertCell(4).innerHTML = per1.getage;
            // patient_list.forEach(displayPatientList);
        }
}