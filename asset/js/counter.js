function plusOne() {
    var tmp = document.getElementById("counter").innerText;
    var tmpnum = parseInt(tmp);
    tmpnum += 1;
    var result = document.getElementById("counter").innerHTML = tmpnum;
}
function minusOne() {
    var tmp = document.getElementById("counter").innerText;
    var tmpnum = parseInt(tmp);
    tmpnum -= 1;
    var result = document.getElementById("counter").innerHTML = tmpnum;
}