// IPO Calculator

//Event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let Radius = document.getElementById("Radius").value;
  let Height = document.getElementById("Height").value;
  //PROCESS
  let total = Radius ** 2 * 3.1415 * Height;
  //OUTPUT
  document.getElementById("output").innerHTML = total;
}

//Event listener
document.getElementById("btn2").addEventListener("click", btn2Clicked);

function btn2Clicked() {
  //INPUT
  let Radius = document.getElementById("Radius").value;
  let Height = document.getElementById("Height").value;
  //PROCESS
  let total = Radius * 2 * 3.1415 * Height;
  //OUTPUT
  document.getElementById("output").innerHTML = total;
}
