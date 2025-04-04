function submit() {
    let input = document.getElementsByTagName("input");
    console.log(input[0].value);
    let name = document.getElementById("name");
    console.log(name.value);
    let radio = document.getElementById("radio");
    console.log(radio.value);
    let checkbox = document.getElementById("checkbox");
    console.log(checkbox.value);
    let date = document.getElementById("date");
    console.log(date.value);
    let email = document.getElementById("email");
    console.log(email.value);
    let file = document.getElementById("file");
    console.log(file.value);
    let datetime = document.getElementById("datetime");
    console.log(datetime.value);
}