// 보그 코리아 공통 기능 JS - common.js //
$(function(){ ////// jQB ////////////////////////
    // 페이지 새로 고침시 스크롤이 중간에 있으면
    // 브라우저 스크롤위치 캐싱(즉, 위치기억)에
    // 의해서 그 위치에 있게 되므로
    // 강제로 위로 보내는 코드를 넣어준다!
    // CSS로 넣어주면 캐싱 덮어써서 소용이 없다!
    // 그래서 animate로 넣어줌
    $("html,body").animate({
        scrollTop: "0px"
    }, 100);



    /* 
        [ 스크롤 이벤트 처리구역 설정하기 ]

        1. 스크롤이벤트는 스크롤바가 움직일때 발생한다.
        (마우스휠 이벤트와 다름!)
        2. 제이쿼리에서 scroll() 메서드로 구현함
        3. 스크롤 위치값은 scrollTop() 메서드로 알아낸다!
     */

    // 스크롤위치변수
    let scTop;
    // 스크롤실행상태변수(상단영역)
    let scSts = 1;// 실행전1, 실행후0
    // 스크롤실행상태변수2(탑버튼)
    let scSts2 = 1;// 실행전1, 실행후0
    // 상단영역요소
    let tm = $("#top");
    // 위로이동버튼 요소
    let tbtn = $(".tbtn");
    

    // 전체 스크롤의 대상은 화면이므로 window객체를 사용한다!
    $(window).scroll(function(){

        // 1. 전체 스크롤 위치값 알아내기
        // (1) scrollTop() 메서드 : 세로스크롤 위치값
        // (2) scrollLeft() 메서드 : 가로스크롤 위치값

        scTop = $(this).scrollTop();
        console.log("스위:"+scTop);

        // 1. 상단영역(#top)이 스크롤위치값 100px이상일때
        // -> #top에 .on을 넣어서 상단영역 디자인 변경하기
        // 대상: #top -> 변수 tm에 할당!
        if(scTop >= 100 && scSts===1){ // 100이상
            scSts = 0;//한번밖에 못들어옴!
            console.log("실행1");
            tm.addClass("on");
        } ////////// if //////////
        else if(scTop < 100 && scSts===0){ // 100미만
            scSts = 1;//한번밖에 못들어옴!
            console.log("실행2");
            tm.removeClass("on");
        } //////// else /////////////



        // 2. 상단이동버튼 보이기 숨기기 ///
        // 대상: .tbtn -> tbtn변수에 할당!
        // 기준위치: 300px 스크롤위치
        if(scTop >= 300 && scSts2===1){
            scSts2 = 0;//한번만!
            console.log("탑버튼보여!");
            tbtn.fadeIn(300);//쓱~보여
        } ///////// if ///////////////////
        else if(scTop < 300 && scSts2===0){
            scSts2 = 1;//한번만
            console.log("탑버튼숨겨!");
            tbtn.fadeOut(300);//쓱~숨겨
        } ///////// else if //////////////


    }); //////////// scroll //////////////////////
    //////////////////////////////////////////////

    /// 탑버튼 이동 구현하기 /////
    // 대상: .tbtn === tbtn변수
    tbtn.click(function(e){ // e-이벤트전달변수
        // 기본이동막기
        e.preventDefault();

        // 맨위로 이동하기
        // 변경대상: html,body 두가지모두!
        $("html,body").animate({
            scrollTop: "0px"
        }, 1000,"easeInOutQuad");
    }); ///////// click ////////////



}); /////////////// jQB /////////////////////////

