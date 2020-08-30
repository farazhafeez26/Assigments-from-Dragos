function myfunction1() {
    var x = confirm("Do you like sports?")
    y = confirm("Do you like pets?")
    z = confirm("Do you like pizza?")
    if (x || y || z) {
        document.getElementById("demo").innerText = "You will have a nice life"
    }

    else {
        document.getElementById("demo").innerText = "Your life is doomed"
    }
}