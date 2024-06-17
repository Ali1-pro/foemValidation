var userMail = document.getElementById('urEmail');
var userPass = document.getElementById('passwordInput');
var userName = document.getElementById('urName');
var signUpBtn = document.querySelector('#sec-btn');
var divrequier = document.querySelector('#div-requier')
var inPuts = [];

if (JSON.parse(localStorage.getItem('userDates')) != null) {
    inPuts = JSON.parse(localStorage.getItem('userDates'));
}



function signUp() {

    if (userMail.value == '' || userPass.value == '' || userName.value == '') {
        divrequier.innerHTML = `<span class="text-danger">All Inputs Are Required</span>`


    } else {

        for (var i = 0; i < inPuts.length; i++) {
            if (inPuts[i].email.toLowerCase() == userMail.value.toLowerCase()) {
                divrequier.innerHTML = `<span class="text-success text-danger">Email is successed</span>`

            }
        }
        userDates()
        divrequier.innerHTML = `<span class="text-success">success</span>`
    }
}


function userDates() {
    var user = {
        email: userMail.value,
        password: userPass.value,
        name: userName.value
    }
    inPuts.push(user);
    localStorage.setItem('userDates', JSON.stringify(inPuts))
    location.href = "index.html"
}


signUpBtn?.addEventListener('click', function () {
    signUp()
})



function userDatesValideat(element) {

    var regex = {
        urEmail: /^[A-z].{10,}(@yahoo.com||@gmail.com)$/,
        urName: /^[A-z].{3,10}$/,
        passwordInput: /^.{10,12}$/,
    }

    if (regex[element.id].test(element.value) == true) {
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')

    } else {

        element.classList.add('is-invalid')
        element.classList.remove('is-valid')

    }
}






var signinEmail = document.getElementById('signinEmail');
var signinPass = document.getElementById('signinPass');
var loginBtn = document.querySelector('#loginBtn');
var checkIn = document.querySelector('#checkIn');




function signInuser() {

    if (signinEmail.value == '' || signinPass.value == '') {
        checkIn.innerHTML = `<span class="text-danger">All Inputs Are Required</span>`
    } else {
        for (var i = 0; i < inPuts.length; i++) {
            if (signinEmail.value.toLowerCase() == inPuts[i].email.toLowerCase && signinPass.value == inPuts[i].password)
                checkIn.innerHTML = `<span class="text-success text-success">Email is successed</span>`
            localStorage.setItem('users', JSON.stringify(inPuts[i].name))
            location.href = "third.html"
            return
        }
        checkIn.innerHTML = `<span class="text-danger">You have to signup</span>`

    }
}


loginBtn?.addEventListener('click', function () {
    signInuser()
})

var home = document.querySelector('#home')
var loged = localStorage.getItem('users')
var homebtn = document.querySelector('home-btn')
    
homebtn.addEventListener('click',function(){
    go()
})
function go(){


    
}




home.innerHTML = `<h2 class="text-info">welcom${loged}</h2>`
