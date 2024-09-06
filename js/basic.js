// 여기부터는 자바스크립트 영역입니다
/*
대소문자를 구분하고 한 문장은 ; 찍는다. 또는 엔터
브라우저에 출력
*/

document.write("<h1>난 어디에 출력되나?</h1>");

// 콘솔창에 출력 -> 개발자 디버깅용. 사용자용x
console.log("어디에 나오나?");

// h1 태그 바탕색을 변경하고 싶다. 클릭했을 때 -> 함수로 만들어야 한다
function test1() {
    // event.target는 현재 함수를 호출한 주체=element
    alert("눌렸어요");
    // 클릭된 element에 바탕색을 변경하자, event.target을 통해 주체를 선택하고 바탕색을 변경
    event.target.style.backgroundColor = 'aqua';
}

// 마우스 오버했을 때
function mouse_over() {
    // event.target을 통해 주체의 테두리 스타일을 변경
    event.target.style.border = "blue dashed 5px";
    event.target.style.color = "red";
}

// 마우스 아웃했을 때
function mouse_out() {
    // event.target을 통해 원래 상태로 복원
    event.target.style.border = "none";
    event.target.style.color = "black";
}
