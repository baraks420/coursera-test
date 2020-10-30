var sayHello = function() {
    var name = document.getElementById("in").value;
    var massege = "hello " + name;
    document.getElementById("output").textContent = massege;
};