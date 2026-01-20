function openWorker(name, job, wage, days, ot, total){
  document.getElementById("wname").innerText = name;
  document.getElementById("wjob").innerText = job;
  document.getElementById("wage").innerText = wage;
  document.getElementById("wday").innerText = days;
  document.getElementById("wot").innerText = ot;
  document.getElementById("total").innerText = total;
  document.getElementById("popup").classList.add("show");
}

function closeWorker(){
  document.getElementById("popup").classList.remove("show");
}
