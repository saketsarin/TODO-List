// Create a "close" button and append it to each list item
var tasks = document.getElementsByClassName("task");
var i;
for (i = 0; i < tasks.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  tasks[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    console.log("closed");
  };
}

// Create a new list item when clicking on the "Add" button
function newTask() {
  var tasks = document.getElementById("tasks");
  var task = document.createElement("div");
  task.className = "task";
  var input = document.createElement("input");
  input.type = "checkbox";
  var num = document.getElementById("tasks").childElementCount + 1;
  var labelNum = "label-" + num;
  input.setAttribute("id", labelNum);
  var label = document.createElement("label");
  label.setAttribute("for", labelNum);
  var h2 = document.createElement("h2");
  var desc = document.createElement("span");
  var inputValue = document.getElementById("addInput").value;
  var descValue = document.getElementById("addDesc").value;
  var headT = document.createTextNode(inputValue);
  var descT = document.createTextNode(descValue);
  var span = document.createElement("SPAN");
  var cross = document.createTextNode("\u00D7");
  span.className = "close";

  task.appendChild(input);
  task.appendChild(label);
  label.appendChild(h2);
  h2.appendChild(headT);
  h2.appendChild(desc);
  desc.appendChild(descT);
  task.appendChild(span);
  span.appendChild(cross);

  if (inputValue === "" && descValue === "") {
    alert("You must write something!");
  } else if (inputValue === "") {
    alert("Please write the task name");
  } else if (descValue === "") {
    alert("Please write the task description");
  } else {
    document.getElementById("tasks").appendChild(task);
    document.getElementById("addInput").value = "";
    document.getElementById("addDesc").value = "";
  }

  // close button function
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.remove();
    };
  }
}
