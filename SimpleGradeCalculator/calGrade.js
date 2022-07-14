function calculateGrade()
    {
        var marks = document.getElementById("marks").value;
        if (marks <= 100 && marks >= 80) 
        {
            alert("Your Grade Is A \n\nGood Job !");
        } 
        else if (marks <= 79 && marks>= 60) 
        {
            alert("Your Grade Is B \n\nCan Do Better !");
        } 
        else if (marks <= 59 && marks>= 40) 
        {
            alert("Your Grade Is C \n\nNeed Improvement !");
        } 
        else {
            alert("Your Grade Is F \n\nNeed a Lot Of Improvement !");
        }
    } 

function calMarks(){
        console.log("CalMarks Function");
        eng_marks = Number(document.getElementById("eng").value);
        hindi_marks = Number(document.getElementById("hindi").value);
        marathi_marks = Number(document.getElementById("marathi").value);
        science_marks = Number(document.getElementById("science").value);
        maths_marks = Number(document.getElementById("maths").value);

        var total_marks = eng_marks + hindi_marks + marathi_marks + science_marks + maths_marks;
        alert(total_marks)
        var percentage = total_marks / 5;
        alert(percentage)
        if (percentage <= 100 && percentage >= 80) 
        {
            alert("Your Grade Is A \n\nGood Job !");
        } 
        else if (percentage <= 79 && percentage >= 60) 
        {
            alert("Your Grade Is B \n\nCan Do Better !");
        } 
        else if (percentage <= 59 && percentage >= 40) 
        {
            alert("Your Grade Is C \n\nNeed Improvement !");
        } 
        else {
            alert("Your Grade Is F \n\nNeed a Lot Of Improvement !");
        }
}