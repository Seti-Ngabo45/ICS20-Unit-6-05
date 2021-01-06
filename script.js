function days() {
  const day = document.getElementById("answer").value;
  const age = document.getElementById("input").value;
  if((day != "Saturday" || day != "Sunday") && (age <= "18")) {
    alert("Time for school");
  }
  else if((day == "Saturday" || day == "Sunday") && (age >="18")) {
    alert("Time to relax for weekend");
  }
  if((day != "Saturday" || day != "Sunday") && (age >="18")) {
    alert("Time to work")
  }
}
