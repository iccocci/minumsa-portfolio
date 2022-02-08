/* 헤더메뉴 */
var $nav = document.querySelectorAll('.nav > ul > li'),
    $navBg = document.querySelector('.nav_bg');

for(let x = 1; x < $nav.length; x++){
    $nav[x].addEventListener('mouseover',function(){
        $navBg.style.display = 'block';
    });
    $nav[x].addEventListener('mouseout',function(){
        $navBg.style.display = 'none';
    });
}

/* 폼 입력 확인 */
//변수 설정
var $submitBtn = document.querySelector('.contact_btn'),
    $name = document.querySelector('#user_name'),
    $email = document.querySelector('#user_email'),
    $check = document.querySelector('#privacy_agree'),
    $select = document.querySelector('#contact_type'),
    $textarea = document.querySelector('#contact_content');

//문의하기 버튼 누르면 함수 활성화
$submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    validateName();
    validateEmail();
    validateCheck();
    validateSelect();
    validateTextarea();
});

//#user_name 확인 함수
function validateName () {
    if($name.value == ''){
        $name.nextElementSibling.style.display = 'inline-block';
    } else{
        $name.nextElementSibling.style.display = 'none';
    }
}

//#user_email 확인 함수
function validateEmail (){
    const $mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if($email.value == ''){
        $email.nextElementSibling.style.display = 'inline-block';
    } else if ($email.value.match($mailformat)) {
        $email.nextElementSibling.style.display = 'none';
        return true;
    } else {
        $email.nextElementSibling.innerText = '형식이 올바르지 않습니다.';
        return false;
    }
}
//checkbox(#privacy_agree) 확인 함수
function validateCheck () {
    if($check.checked == false){
        $check.nextElementSibling.nextElementSibling.style.display = 'inline-block';
    } else{
        $check.nextElementSibling.nextElementSibling.style.display = 'none';
    }
}
//select(#contact_type) 확인 함수
function validateSelect () {
    if($select.value == '#'){
        $select.nextElementSibling.style.display = 'inline-block';
    } else{
        $select.nextElementSibling.style.display = 'none';
    }
}
//textarea(#contact_content) 확인 함수
function validateTextarea () {
    if($textarea.value == ''){
        $textarea.nextElementSibling.nextElementSibling.style.display = 'inline-block';
    } else{
        $textarea.nextElementSibling.nextElementSibling.style.display = 'none';
    }
}