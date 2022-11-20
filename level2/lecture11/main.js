document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.querySelector('.list-group').classList.toggle('show');
})

document.querySelector('.black-bg').addEventListener('click', function (e) {

    //참고1
    //e.currentTarget 출력하면 검은 배경나오므로 e.target == e.currentTarget 써도됨
    //e.target == this 써도됨
    //참고2
    //jQuery 셀렉터로 찾은 결과와 querySelector 셀렉터로 찾은 결과는 다름
    //출력해보면 전자는 이상한 object 이런게 나오고 후자는 <html>이런게 나옴
    //그래서 e.target == $('.black-bg')는 사용 불가능함.
    //그리고 애초에 jQuery셀렉터 끼리 등호비교는 불가능함.
    //$('.black-bg').is($('.black-bg')) 이런 비교용 함수 쓰든가
    //$(e.target).is($('.black-bg'))이런거 쓰면 됨.

    if (e.target == document.querySelector('.black-bg')) { 
        document.querySelector('.black-bg').classList.remove('show-modal');
    }
    
})


$('#login').on('click', function () {
    $('.black-bg').addClass('show-modal')
})
$('.btn-danger').on('click', function () {
    $('.black-bg').removeClass('show-modal')
})

$('form').on('submit', function (e) {
    var 아이디값 = document.getElementById('email').value;
    var 비번값 = document.getElementById('password').value;

    if (아이디값 == '') {
        alert('아이디를 입력하세요.');
        e.preventDefault();
    }
    else if (/\S+@\S+.\S+/.test(아이디값) == false) {
        alert('이메일 형식이 아닙니다.')
        e.preventDefault();
    }
    else if (비번값 == '') {
        alert('비밀번호를 입력하세요.');
        e.preventDefault();
    }
    else if (비번값.length < 6) {
        alert('비밀번호는 6자 이상이어야 합니다.');
        e.preventDefault();
    }
    //과제 - 폼 전송 시 유저가 입력한 비번에 영어 대문자가 적어도 1개 있는지 검사 없으면 alert()띄우기
    else if (/[A-Z]/.test(비번값) == false) {
        alert('대문자가 적어도 1개 들어가야 합니다.')
        e.preventDefault()
    }
});


var countn = 0;
$('.badge').on('click', function () {
    countn = countn + 1;
    console.log(countn);
    if (countn % 2 == 1) {
        $('.badge').html('Light Mode');
        $('body').addClass('dark');
    } else {
        $('.badge').html('Dark mode');
        $('body').removeClass('dark');
    }
});

