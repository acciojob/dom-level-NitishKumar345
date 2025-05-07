//your JS code here. If required.
window.onload = function() {
  const target = document.getElementById("level");
  let count = 0;
  let current = target;

  while (current) {
    count++;
    current = current.parentElement;
  }

  alert("The level of the element is: " + count);
};