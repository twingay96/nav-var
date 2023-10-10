let horizontalUnderline = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");

let verticalUnderline = document.getElementById("vertical-underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

let activeMenu = null; // 초기에 선택한 메뉴 정보를 저장할 변수

// 초기 로딩 시 언더라인 위치 설정
setInitialUnderlinePosition();

// 브라우저 크기 변경 시 언더라인 위치 업데이트
window.addEventListener("resize", () => {
  // resize 이벤트 발생 시 애니메이션 효과 제거
  horizontalUnderline.style.transition = "none";
  updateHorizontalUnderline();
});

horizontalMenus.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    horizontalIndicator(e);
  });
});

verticalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => {
    verticalIndicator(e);
  })
);

function setInitialUnderlinePosition() {
  // 초기에 선택한 메뉴를 여기에서 설정
  // 예를 들어, 첫 번째 메뉴를 선택
  activeMenu = horizontalMenus[0];

  // 언더라인 초기 위치 설정함수 호출
  firstUpdateHorizontalUnderline();
}
// 언더라인 초기위치 설정함수 => 애니메이션 효과 적용X
function firstUpdateHorizontalUnderline(){
    horizontalUnderline.style.transition = "none";
    horizontalUnderline.style.left = activeMenu.offsetLeft + "px";
    horizontalUnderline.style.width = activeMenu.offsetWidth + "px";
    horizontalUnderline.style.top =
      activeMenu.offsetTop + activeMenu.offsetHeight + "px";

}
// 메뉴항목 클릭시에만 호출할 함수 
function updateHorizontalUnderline() {
  if (activeMenu) {
    if (activeMenu.classList.contains("active")) {
      // activeMenu의 경우 애니메이션 효과 적용
      horizontalUnderline.style.transition = "0.5s";
    } 
    // 이벤트리스너 resize로 호출된경우에는 activeMenu.classList에 active속성이 없으므로 애니메이션 효과적용X
    horizontalUnderline.style.left = activeMenu.offsetLeft + "px";
    horizontalUnderline.style.width = activeMenu.offsetWidth + "px";
    horizontalUnderline.style.top =
      activeMenu.offsetTop + activeMenu.offsetHeight + "px";

    // 브라우저가 리플로우되지 않도록 다른 속성 변경
    horizontalUnderline.style.transform = "translateZ(0)";
  }
  // 언더라인 이동완료후에는 active속성제거
  activeMenu.classList.remove("active");
}

function horizontalIndicator(e) {
  activeMenu = e.currentTarget; // 선택한 메뉴 정보 업데이트
  activeMenu.classList.add("active");
  updateHorizontalUnderline(); //언더라인 위치 옮기는 함수호출

}

// 수직배치된 항목들에는 특별한 효과 적용X
function verticalIndicator(e) {
  verticalUnderline.style.left = e.currentTarget.offsetLeft + "px";
  verticalUnderline.style.width = e.currentTarget.offsetWidth + "px";
  verticalUnderline.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}