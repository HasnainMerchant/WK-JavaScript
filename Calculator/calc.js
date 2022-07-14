let expression = "";

function display(clicked_id) {
    expression += document.getElementById(clicked_id).value;
    document.getElementById("result").value = expression;
}
  
function getResult() {
    result = eval(expression);
    document.getElementById("result").value = result;
}

window.onerror = function () {
    alert("Invalid Expression");
  };

  function clearText(){
    expression = "";
    document.getElementById("result").value = expression;
  }