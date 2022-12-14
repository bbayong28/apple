//연습

//변수가 3이면 이거 실행해주세요~
//변수가 4이면 이거 실행해주세요~

// let 변수 = 2 + 5;
// //if문으로 이렇게 했겠지만 if (변수 == 3) { }else if (변수 == 4) { }.........
// //하지만 이번엔 if문 대신 switch문을 써 볼꺼임.
// switch (변수) {
//   case 3:
//     alert('변수가 3이네요!');
//     break
//   case 4:
//     alert('변수가 4네요!');
//     break
//   default:
//     alert('아무것도 해당안됨.')
// }

//if문은 다양한 조건식 가능하지만 switvh문은 변수1개만 테스트 가능 
//그런데도 switch문을 쓰는 이유 : 코드가 좀더 간결해보여서. 변수하나만 검사할 때 간편하게 사용 가능




//버튼 누르면 각각 다른 안내문 띄우게 코드짜기
//$('button').eq(0).on('click', function () {
//  alert('와이프를 사랑하시는 군요!')
//});
//$('button').eq(1).on('click', function () {
//  alert('부모님을 사랑하시는 군요')
//});
//$('button').eq(2).on('click', function () {
//  alert('강아지를 사랑하시는 군요!')
//});

//switch문 사용해보기
document.querySelector('#quiz').addEventListener('click', function (e) {
  //alert(e.target.innerHTML);
  let 변수 = e.target.innerHTML

  switch (변수) {
    case '와이프':
      alert('와이프를 사랑하시는 군요!');
      break
    case '부모님':
      alert('부모님을 사랑하시는 군요!');
      break
    case '키우는 강아지':
      alert('강아지를 사랑하시는 군요!');
      break
  }
})