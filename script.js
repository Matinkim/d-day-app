//input(type:date) 태그 가져오기
let date = document.getElementById("date");
// h3 태그 가져오기 (현재 날짜 출력)
let curDateElemnet = document.getElementById("curDate");
// p 태그 가져오기 (결과 출력)
let resultElement = document.getElementById("result");
// 버튼 태그 가져오기 (날짜계산 버튼)
let calBtn = document.getElementById("calBtn");
//현재 날짜
let curDate = new Date();
//현재 년도
let curYear = curDate.getFullYear();
//현재 달(0~11)
let curMonth = curDate.getMonth() + 1;

//현재 일
let curDay = curDate.getDate();
//현재 요일(0~6)
let dayOfWeek = curDate.getDay();

let dd = null; //null 값이 없다고 정의 해줌

// dayOfWeek : 0~6
switch (dayOfWeek) {
  case 0:
    dd = "일";
    break;
  case 1:
    dd = "월";
    break;
  case 2:
    dd = "화";
    break;
  case 3:
    dd = "수";
    break;
  case 4:
    dd = "목";
    break;
  case 5:
    dd = "금";
    break;
  case 6:
    dd = "토";
    break;
  default:
    dd = "";
}
//현재날짜 웹페이지 출력
curDateElemnet.innerHTML = `${curYear}년 ${curMonth}월 ${curDay}일 ${dd}요일`;

function getDiffDay(selectedDate) {
  let diff = selectedDate - curDate;
  let diffDay = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return diffDay;
}
calBtn.addEventListener("click", () => {
  // input 태그에서 선택된 날짜 문자열을
  // 날짜 객체로 변환
  // 2024-07-02 -> 2024-07-02T00:00:00 ...
  let selectedDate = new Date(date.value);
  // 밀리초
  let diff = selectedDate - curDate;
  //날짜 차이
  let diffDay = Math.ceil(diff / (1000 * 60 * 60 * 24));
  resultElement.innerHTML = `D-day까지 ${diffDay}일 남았습니다.`;
  //스타일 시트 적용하기
  resultElement.style = "color :green; font-size:20px";
});

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  //input text 태그의 값 가져오기
  let title = document.getElementById("title").value;
  //날짜 값 가져오기
  let date = document.getElementById("date").value;
  //함수를 사용해서 날짜 차이 값 반환
  let diffDay = getDiffDay(new Date(date));
  // ul 태그 가져오기
  let ul = document.getElementById("ddayList");
  // li 태그 생성
  let li = document.createElement("li");
  li.innerHTML = `<span style='color:red'>${title}</span>까지 ${diffDay}일 까지 남았습니다`;
  ul.appendChild(li);
});
