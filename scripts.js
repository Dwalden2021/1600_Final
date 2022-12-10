function myFunction() {
    let inputBox1 = document.getElementById("input1").value;
    let inputBox2 = document.getElementById("input2").value;
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    let combo = `${inputBox1} + ${inputBox2} = ${inputBox1 + inputBox2}`;
    document.getElementById("result").innerHTML = combo;
}