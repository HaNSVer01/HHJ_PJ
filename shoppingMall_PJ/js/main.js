// 메인페이지 JS - main.js

/////////////////////// html 로드구역 ////////////////////
///// html 태그요소 보다 위에 있는 JS를 요소로딩후 실행구역 //////
// load이벤트 / DOMContentLoaded이벤트 ////////////
window.addEventListener("load", () => {

    //로딩완료확인
    // console.log("로딩완료!");

    // [ 구현내용 ]
    // - 버튼 클릭시 배너를 다음/이전으로 이동함

    // - 이벤트 대상 : .abtn(이동버튼2개)
    let abtn = document.querySelectorAll(".abtn");
    // console.log("버튼개수:" + abtn.length);

    // - 변경대상: #slide
    let slide = document.querySelector("#slide");

    // 슬라이드 개수(마지막번호 계산에 사용!)
    let scnt = slide.querySelectorAll("li").length;
    // console.log("슬라이드개수:" + scnt)

    // 슬라이드 순번 변수(click함수 바깥 )
    let snum = 0; 

    // 변경대상 블릿li
    let indic = document.querySelectorAll(".indic li");
    console.log("블릿개수:"+indic.length);

    //// 오른쪽 버튼 클릭시 ///////////////////
    // 내용: 슬라이드가 오른쪽으로 이동하여 다음슬라이드가 보임!
    abtn[1].onclick = () => goSlide(1); 
        //goSlide함수 호출:전달값 1로 오른쪽 확인!

        //// 왼쪽 버튼 클릭시 ///////////////////
    // 내용: 슬라이드가 왼쪽으로 이동하여 이전슬라이드가 보임!
    abtn[0].onclick = () => goSlide(0); //전달값 0보내기
    ////goSlide함수 호출:전달값 0로 왼쪽 확인!


    /* //////////////////////////////////////////////////
        함수명: goSlide
        기능 : 슬라이드 이동하기
    */ //////////////////////////////////////////////////
    let goSlide = dir => {
        //arrow펑션 축약 사용 dir: 버튼방향(1-오른쪽, 0-왼쪽)
        // 1은 true와 같으므로 if문에 편리하다! (0은 false)

        // 1. 호출확인, 전달값 확인
        // console.log("나야나!" + dir);


        // 2. 방향에 따른 분기 
        // dir===1이면 오른쪽 / dir===0이면 왼쪽

        // 2-1. 슬라이드 번호 증가하기 ///////////////////////////////////////
        if (dir) {

            snum++;
            // 한계값 체크(슬라이드 개수 이상이면!)
            if (snum >= scnt)
                snum = 0; //처음슬라이드로 가기
            // snum = scnt - 1;  //끝번호에 고정
        } ////////////if문 ///////////////

        // 2-2. 슬라이드 번호 감소하기 /////////////////////////////
        else { //dir===0을 else로 처리
            snum--;
            // 한게값 체크(0미만이면!)
            if (snum < 0)
            snum = scnt - 1;  //끝번호에 돌아가기
        } ////////////// else문 ///////////////////


        // 3. 슬라이드 이동하기 
        slide.style.left = (-100 * snum) + "%";
        slide.style.transition = "left .8s ease-in-out";
        // 이동원리: -100%이면 두번째 슬라이드 
        // -> -100 * 슬라이드순번(0부터)

        // 4. 블릿 변경하기 

        // 4-1. 모든 블릿li class 지우기!
        // for문으로 지움!
        for(let x of indic){
            x.classList.remove("on");
        } ////////////////for of문 //////////////////

        //  [ 배열이나 컬렉션을 위한 for of문  ]
        // -> ES6에서 새로 추가된 for문
        // 배열이나 컬렉션(다수의 요소를 담은 집합)을 변수에 담고 그 개수만큼 자동으로 돌아주는 for문! for of문!!!
        // 형식: for(변수 of 배열/컬렉션) {실행문}
        // -> for문 앞에 선언된 변수는 배열/컬렉션 자신임! (하나씩!)


        // 4-2. 해당순법 블릿에 class="on"넣기
        // 블릿순번 === 슬라이드 순번 === snum
        indic[snum].classList.add("on");

        // 클래스 조작 메서드 /////////////////////////
        // classList.add(클래스명) : 넣기
        // classList.remove(클래스명) : 빼기
        // classList.toggle(클래스명) : 넣거나빼기(반대로!)

    }; ///////////////////////goSlide함수 ////////////




}); ////////////////////load구역/////////////////////////////////
////////////////////////////////////////////////////////////////