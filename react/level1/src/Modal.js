import React from 'react'
/* 
const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.글제목]
        copy[0] = '여자 코트 추천'
        props.글제목변경(copy);
      }}>글수정</button>
    </div>
  )
}
 */
const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}


export default Modal;
