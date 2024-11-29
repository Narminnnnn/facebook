let form =document.getElementById("form")
let email = document.getElementById("email")
let password = document.getElementById("password")

form.addEventListener("submit", get)
function get(e) {
    e.preventDefault();
    let person={
        "emial":email.value,
        "password":password.value
    }
    console.log(person);

    form.reset()
}

