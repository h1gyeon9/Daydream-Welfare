const correctID = 'yongj1111';
const correctPW = 'Dydajflgodks!111';
const errorPW = 'dydajflgodks!111';

let enteredIDElement = document.getElementById('userID');
let enteredPWElement = document.getElementById('userPW');
let loginErrorElement = document.getElementById('login-error');

let loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', checkLogin);

enteredPWElement.addEventListener('keydown', enterLogin);

function enterLogin(event){
    if(event.key == 'Enter'){
        checkLogin();
    }
}

function checkLogin(){
    let enteredID = enteredIDElement.value;
    let enteredPW = enteredPWElement.value;

    if(enteredID == correctID && enteredPW == correctPW){
        alert('환영합니다. 이자헌 과장님.');
        location.href = '/mall.html'
    }
    else if(enteredID == correctID && enteredPW == errorPW){
        loginErrorElement.style.display = 'block';
        alert('어디 보자. 회원가입을 누르면 비밀번호 설정 요구사항을 확인할 수 있다.')
    }
    else{
        loginErrorElement.style.display = 'block';
        alert('역시나 포스트잇이 붙어 있었다.');
    }
}

let signInBtn = document.getElementById('sign-in');
signInBtn.addEventListener('click', hintUpperCase);
function hintUpperCase(){
    alert('대문자가 필요했군.')
}