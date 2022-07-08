function calculateGrade(){
    var marks = document.getElementById("grade");
    if (marks <= 100 && marks >= 80) {
        alert("Your Grade Is A\nGood Job !");
      } else if (marks <= 79 && marks>= 60) {
       grades = "B";
      } else if (marks <= 59 && marks>= 40) {
        grades = "C";
      } else {
        grades = "F";
      }
}