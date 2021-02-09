function simpleInterest() {
    let p = document.getElementById("principal").value;
    let t = document.getElementById("years").value;
    let r = document.getElementById("rangeInput").value;
    let d = new Date();
    let n = d.getFullYear();

    let timeparse = parseInt(t);
    let si = parseInt((p * t * r) / 100);
    let ty = n + timeparse;

    document.getElementById("Displayresult").innerHTML =
        "If you deposit " +
        p +
        "<br> at an interest rate of " +
        r +
        "% <br> You will receive an amount of " +
        si +
        "<br> in the year " +
        ty;
}
