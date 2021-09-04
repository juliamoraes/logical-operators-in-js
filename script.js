function myFunction() {
    var idade, beber;
    idade = document.getElementById("idade").value;
    beber = (idade < 18) ? "Muito novo para":"Pode";
    document.getElementById("demo").innerHTML = beber +" beber.";
}
