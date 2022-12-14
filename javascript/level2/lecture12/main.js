//for (let i = 0; i < $('.tab-button').length;  i++) {
//    $('.tab-button').eq(i).on('click', function () {
//        $('.tab-button').removeClass('orange');
//        $('.tab-button').eq(i).addClass('orange');
//        $('.tab-content').removeClass('show');
//        $('.tab-content').eq(i).addClass('show');
//    });
//}


// 함수로 축약하기
//축약할 코드에 변수가 있으면 변수를 파라미터로 바꿔야 잘 됨.
//for (let i = 0; i < $('.tab-button').length; i++) {
//    $('.tab-button').eq(i).on('click', function () {
//        탭열기(i)
//    })
//}
//function 탭열기(구멍) {
//    $('.tab-button').removeClass('orange');
//    $('.tab-button').eq(구멍).addClass('orange');
//    $('.tab-content').removeClass('show');
//    $('.tab-content').eq(구멍).addClass('show');
//}


// 탭기능 다르게 만들기 -> 이벤트리스너 하나만 쓰기

function 탭열기(구멍) {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(구멍).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(구멍).addClass('show');
}

//$('.list').click(function (e) {
//    //지금 누른게 버튼0이면 탭열기(0)
//    //지금 누른게 버튼1이면 탭열기(1)
//    //지금 누른게 버튼2이면 탭열기(2)
//    if (e.target == document.querySelectorAll('.tab-button')[0]) {
//        탭열기(0)
//    }
//    if (e.target == document.querySelectorAll('.tab-button')[1]) {
//        탭열기(1)
//    }
//    if (e.target == document.querySelectorAll('.tab-button')[2]) {
//        탭열기(2)
//    }
//})

//몰래 심어놓은 데이터로 위의 반복되는 코딩 축약하기
$('.list').click(function (e) {
    //탭열기(지금누른버튼에 숨겨져있는 data-id)
    //탭열기(e.target.dataset.자료이름)
    //console.log(e.target.dataset.id)
    탭열기(e.target.dataset.id)
    //탭열기(0), 탭열기(1), 탭열기(2) 괄호안이 숫자여야하는데 e.target.dataset.id을 쓰면 문자일 수도 있다.
    //숫자로 변환해서 쓰면 더 정확할 듯. - 방법은 스스로 해봐라.
})
//data-id는 하나의 테크닉일 뿐. data-id나 반복문이나 편한거 쓰면 됨
