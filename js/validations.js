var email = document.getElementById("email");
var senha = document.getElementById("password");

document.querySelectorAll(".btn-submit").forEach(element => {
    element.addEventListener("click", () => {
        console.log(isEmail(email.value), senha.value.length, email.value, $('#email').val());

        if(isEmail(email.value) == false && senha.value.length < 8) {
            alert("Credênciais inválidas");
        } else {
            if(!isEmail(email.value)) alert('O email informado não é válido');
            if(senha.value.length < 8) alert("Senha inválida");
        }
        
    })
    console.log(element);
});


// var email = $('#email');
// $(email).on('blur', function() {
//     var varificar_email = isEmail(email.val());
//     if(varificar_email == false) {
//         alert('O email informado não é válido');
//     }
//     // console.log(varificar_email)
//     // alert();
// });
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}