

const targetDiv = document.getElementById("frete");
const btn = document.getElementById("btnCalc");

btn.onclick = function () {
  console.log("passouuu")
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
};

