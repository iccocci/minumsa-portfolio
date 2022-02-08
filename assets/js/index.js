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

/* 배너 슬라이드 */
var $slideWrap = document.querySelector('.slider'),
    $slideContainer = document.querySelector('.slider_container'),
    $slide = document.querySelectorAll('.slide'),
    $slideCount = $slide.length,
    $currentIndex = 0,
    $timer= undefined,
    $pagerHTML = '',
    $pager = document.querySelector('.pager'),
    $slidePrevBtn = document.querySelector('.slider_prev_btn'),
    $slideNextBtn = document.querySelector('.slider_next_btn');

// 슬라이드 가로 배열
for(let s=0; s < $slideCount; s++){
    $slide[s].style.left = s*100+'%';
    $pagerHTML += '<span data-idx="' + s + '">' + (s+1) + '</span>';
    $pager.innerHTML = $pagerHTML;
}

// pagerBtn 변수 선언 
var $pagerBtn = document.querySelectorAll('.pager span');

// 슬라이드 이동 함수
function goToSlide(idx){
    $slideContainer.classList.add('animated');
    $slideContainer.style.left = idx * -100+'%';
    $currentIndex = idx;

    updateSlideBtn();

    // $pagerBtn에 active 추가 제거
    for(let y = 0; y < $pagerBtn.length; y++){
        $pagerBtn[y].classList.remove('active');
    }
    $pagerBtn[idx].classList.add('active'); 
}

// 슬라이드 버튼 구동
function updateSlideBtn(){
    //슬라이드 첫번째 부분일 때 slidePrevBtn 제거
    if($currentIndex == 0){
        $slidePrevBtn.classList.add('disabled');
    } else {
        $slidePrevBtn.classList.remove('disabled');
    }
    //슬라이드 마지막 부분일 때 slideNextBtn 제거
    if($currentIndex == $slideCount-1){
        $slideNextBtn.classList.add('disabled');
    } else {
        $slideNextBtn.classList.remove('disabled');
    }
}
//버튼 누르면 이동
$slidePrevBtn.addEventListener('click',function(event){
    event.preventDefault();
    goToSlide($currentIndex-1);
});
$slideNextBtn.addEventListener('click',function(event){
    event.preventDefault();
    goToSlide($currentIndex+1);
});

// 첫번째 슬라이드 먼저 보이도록 하기
goToSlide(0);

// 자동 슬라이드 함수 설정
function startAutoSlide(){
    // 자동 슬라이드 타이머 설정
    $timer = setInterval(function(){
        var nextIdx = ($currentIndex + 1) % $slideCount;

        goToSlide(nextIdx);
    },4000);
}

startAutoSlide();

function stopAutoslide(){
    clearInterval($timer);
}

//$slideWrap에 마우스가 들어오면 할 일, 나가면 할 일
$slideWrap.addEventListener('mouseenter',function(){
    stopAutoslide();
});
$slideWrap.addEventListener('mouseleave',function(){
    startAutoSlide();
});

//pager로 슬라이드 이동하기
for(let p = 0; p < $pagerBtn.length; p++){
    $pagerBtn[p].addEventListener('click',function(event){
        var $pagerNum = event.target.innerText - 1;
        goToSlide($pagerNum);
    });
}

/* 이벤트 슬라이드 지정 */
//변수 지정
var $eSlides = document.querySelector('.events_slides'),
    $eSlide = document.querySelectorAll('.event_slider'),
    $eCurrentIdx = 0,
    $eSlideCount = $eSlide.length,
    $eSlideWidth = 380,
    $eSlideMargin = 40,
    $ePrevBtn = document.querySelector('.event_slider_prev'),
    $eNextBtn = document.querySelector('.event_slider_next');

//events_slides의 width값 설정
$eSlides.style.width = ($eSlideWidth + $eSlideMargin) * $eSlideCount - $eSlideMargin + 'px';

makeClone();

//events_slide 복사 함수
function makeClone(){
    for(let m = 0; m < $eSlideCount; m++){
        var cloneSlide = $eSlide[m].cloneNode(true);
        cloneSlide.classList.add('clone');

        $eSlides.appendChild(cloneSlide);
    }

    for(let m = $eSlideCount-1; m >= 0; m--){
        var cloneSlide = $eSlide[m].cloneNode(true);
        cloneSlide.classList.add('clone');

        // $eSlides.prepend(cloneSlide);
        $eSlides.insertBefore(cloneSlide, $eSlides.firstChild);
    }

    updateWidth();
    setInitialPos();

    setTimeout(function(){
        $eSlides.classList.add('animated')
    },100);
}

//복사된 events_slide까지 포함한 width값 계산
function updateWidth(){
    var currentSlides = document.querySelectorAll('.event_slider');
    var newSlideCount = currentSlides.length;
    var newWidth = ($eSlideWidth + $eSlideMargin) * newSlideCount - $eSlideMargin + 'px';

    $eSlides.style.width = newWidth;
}

//events_slide 위치 조정
function setInitialPos(){
    var initialTranslateValue = -($eSlideWidth + $eSlideMargin) * $eSlideCount;

    $eSlides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
}

//버튼 누르면 슬라이드 이동
$ePrevBtn.addEventListener('click',function(){
    moveSlide($eCurrentIdx - 1);
});

$eNextBtn.addEventListener('click',function(){
    moveSlide($eCurrentIdx + 1);
});

//슬라이드 이동 함수
function moveSlide(num){
    $eSlides.style.left = -num * ($eSlideWidth + $eSlideMargin) + 'px';
    $eCurrentIdx = num;

    //console.log($eCurrentIdx, $eSlideCount);
    if($eCurrentIdx == $eSlideCount || $eCurrentIdx == -$eSlideCount){
        setTimeout(function(){
            $eSlides.classList.remove('animated');
            $eSlides.style.left = '0px';
            $eCurrentIdx = 0;
        },500);
        setTimeout(function(){
            $eSlides.classList.add('animated');
            $eCurrentIdx = 0;
        },600);
    }
}