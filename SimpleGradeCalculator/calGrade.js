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
        eng_marks = Number(document.getElementById("eng").value);
        hindi_marks = Number(document.getElementByI("hindi").value);
        marathi_marks = Number(document.getElementByIr("marathi").value);
        science_marks = Number(document.getElementByI("science").value);
        maths_marks = Number(document.getElementByI("maths").value);
        var total_marks = eng_marks + hindi_marks + marathi_marks + science_marks + maths_marks;
        var percentage = total_marks / 5;
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