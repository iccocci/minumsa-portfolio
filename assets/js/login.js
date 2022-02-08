/* 폼 입력 확인 */
//변수 설정
var $submitBtn = document.querySelector('.login_btn'),
    $id = document.querySelector('#uid'),
    $pw = document.querySelector('#upw');

//문의하기 버튼 누르면 함수 활성화
$submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    validateId();
    validatePw();
});

//#uid 확인 함수
function validateId () {
    if($id.value == ''){
        $id.nextElementSibling.style.display = 'block';
    } else{
        $id.nextElementSibling.style.display = 'none';
    }
}

//#upw 확인 함수
function validatePw () {
    if($pw.value == ''){
        $pw.nextElementSibling.style.display = 'block';
    } else{
        $pw.nextElementSibling.style.display = 'none';
    }
}