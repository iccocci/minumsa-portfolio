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


var $seriesTr = document.querySelectorAll('.sd_bottom table tbody tr'),
    $seriesTbody = document.querySelector('.sd_bottom table tbody'),
    $seriesEp = document.querySelector('.series_episodes');

/* 연재 회차 카운팅 */
$seriesEp.innerText = '총 ' + $seriesTr.length + '화';