

document.querySelector('.navbar-toggler').addEventListener('click', function () {
  document.querySelector('.list-group').classList.toggle('show');
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

var count = 5;

setInterval(function () {
  count -= 1
  if (count > 0) {
    document.querySelector('#num').innerHTML = count;
  } else {
    document.querySelector('.alert').style.display = 'none';
  }
}, 1000);


var 지금사진 = 1;
//btn 1
document.querySelector('.slide-1').addEventListener('click', function () {
  document.querySelector('.slide-container').style.transform = `translateX(0)`
})

//btn 2
document.querySelector('.slide-2').addEventListener('click', function () {
  document.querySelector('.slide-container').style.transform = `translateX(-100vw)`
})

//btn 3
document.querySelector('.slide-3').addEventListener('click', function () {
  document.querySelector('.slide-container').style.transform = `translateX(-200vw)`
})

//btn 이전
document.querySelector('.slide-prev').addEventListener('click', function () {
  if (지금사진 == 2) {
    document.querySelector('.slide-container').style.transform = `translateX(0vw)`
    지금사진 -= 1;
  } else if (지금사진 == 3) {
    document.querySelector('.slide-container').style.transform = `translateX(-100vw)`
    지금사진 -= 1;
  }
});

document.querySelector('.slide-next').addEventListener('click', function () {
  if (지금사진 == 1) {
    document.querySelector('.slide-container').style.transform = `translateX(-100vw)`
    지금사진 += 1;
  } else if (지금사진 == 2) {
    document.querySelector('.slide-container').style.transform = `translateX(-200vw)`
    지금사진 += 1;
  }
});

function vat(a) {
  var num = (a * 1.1).toFixed(1);
  return num;
}

console.log(Q1(1, 30))
console.log(Q1(2, 10))
//애플코딩 답
function Q1(a, b) {
  var result = (a * 60 + b) * 1000
  return result;
}

console.log(Q2(70, false))
console.log(Q2(10, true))
console.log(Q2(12.27, true))
//애플코딩 답
function Q2(a, b) {
  var result = a * 0.9;
  if (b == true) {
    result = result - 1.5;
  }
  return parseFloat(result.toFixed(2));
}
//전역변수 
var 시작좌표 = 0;
var 눌렀냐 = false;

$('.slide-box').eq(0).on('mousedown', function (e) {
  시작좌표 = e.clientX;
  눌렀냐 = true;
});

$('.slide-box').eq(0).on('mousemove', function (e) {
  //마우스 찍은 후에 박스 움직이게 해주세요
  if (눌렀냐 == true) {
    $('.slide-container').css('transform', `translateX(${e.clientX - 시작좌표}px)`);
  }
  console.log(e.clientX - 시작좌표);

});

//손을 놓을 때 100px 이상 이동했으면 둘째사진 보임 아니면 첫째사진 보임.(2번째 사진이 보일 때 서서히 보이게 => transition 사용하기)
$('.slide-box').eq(0).on('mouseup', function (e) {
  눌렀냐 = false;

  //이렇게 짜면 될거 같음.
  //if (이동거리 100이상) {
  //    2번사진 보여주셈
  //}else {
  //  1번사진 보여주셈
  //}




});


