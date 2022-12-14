

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


  //이동거리 => e.clientX - 시작좌표
  //console.log(e.clientX - 시작좌표);
  //css 로 2번째사진, 1번째사진으로 보낼 수 있음. => .css('transform', 'translateX(-100vw),.css('transform', 'translateX(0vw)
  //transition으로 부드럽게 보내고 싶어서 넣음 => .css('transition', 'all 0.5s')
  //transition 계속 넣어두면 이상해짐(첫번째잘되고 그 후로 이동시나 뭐든 0.5초로 해주기 때문!)
  if (e.clientX - 시작좌표 < -100) {
    $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX(-100vw)');
  } else {
    $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX(0vw)');
  }
  //이동이 끝났으면 transition 없애주기 그럼 이상한거 없어짐. 근데 바로없애면 스무스 하지 않아서 0.5초 뒤에 없애주라고 적어주기!
  setTimeout(() => {
    $('.slide-container').css('transition', 'none')
  }, 500)


  //여기까지 완성 
  //근데 마우스로는 가능한데 이게 모바일이라면 터치로 할텐데 그럼 잘 작동하지 않음.
  //mousedown -> touchstart(터치시작시 발동)
  //mousemove -> touchmove(터치중일시 발동)
  //mouseup -> touchend(터치종료시 발동)

  $('.slide-box').eq(0).on('touchstart', function (e) {
    //터치이벤트에서 X좌표 출력하려면 => e.touches[0].clientX;
    시작좌표 = e.touches[0].clientX;
    눌렀냐 = true;
  });

  $('.slide-box').eq(0).on('touchmove', function (e) {
    if (눌렀냐 == true) {
      $('.slide-container').css('transform', `translateX(${e.touches[0].clientX - 시작좌표}px)`);
    }
  });
  $('.slide-box').eq(0).on('touchend', function (e) {
    눌렀냐 = false;
    //touchend이벤트에서 X좌표 출력할 때 => e.changedTouches[0].clientX
    if (e.changedTouches[0].clientX - 시작좌표 < -100) {
      $('.slide-container')
        .css('transition', 'all 0.5s')
        .css('transform', 'translateX(-100vw)');
    } else {
      $('.slide-container')
        .css('transition', 'all 0.5s')
        .css('transform', 'translateX(0vw)');
    }
    setTimeout(() => {
      $('.slide-container').css('transition', 'none')
    }, 500)
  });

  //결론 : 터치, 마우스입력 이벤트리스너로 여러가지 기능 만들 수 있음


  //(응용1)나머지 이미지들 기능개발?
  //(응용2)첫번째 이미지는 우측으로 스와이프 못하게
  //(웅용3)코드따라치기만 했으면 다 지우고 1주 후에 다시 만들어보기.

  //한글로 기능설명부터하고
  //작은기능부터 만들어 나감









});


