let count = [1,1,1,1];
let angle = [0,0,0,0];
function rotate(i) {
    console.log("click");
    console.log("current angle: " + angle);
    console.log(i);
    angle[i.id]++;
    var elem = document.getElementById(i.id);

    var id = setInterval(frame, 10);
    function frame() {
        if ((angle[i.id]%90) == 0 && angle != 0) {
            clearInterval(id);
        } else {
            angle[i.id]++;
            elem.style.transform = "rotate(" + angle[i.id] + "deg)";
        }
    }
}