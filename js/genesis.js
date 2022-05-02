(function($){

    let cnt=0;
    let cnt2=0;
    let setId=0;
    let setId2=0;
    

    //1.메인슬라이드 함수
    function mainSlide(){ //012345 console.log(`mainSlide() ${cnt}`);->함수확인절차
        pageBtn();
        $('.slide-wrap').stop().animate({left:`${-100*cnt}%`}, 600, function(){
            cnt > 5 ? cnt=0 : cnt; 
            cnt < 0 ? cnt=5 : cnt; 
            $('.slide-wrap').stop().animate({left:`${-100*cnt}%`}, 0);    
        });
    }



    //2-1.다음카운트 함수
    function nextCount(){ //디버깅(debugging) 개발자 오류 수정하고 확인
        cnt++; 
        mainSlide();
    }
    //2-2.이전카운트 함수
    function prevCount(){
        cnt--; 
        mainSlide();
    }



    //3.자동타이머 함수
    function autoTimer(){
        setId = setInterval(nextCount, 4000);//4초후 실행
    }
    autoTimer(); //로딩시 실행함.

    //    //10초후에 정지하게
    //     cnt2=0;
    //     setId2 = setInterval(function(){
    //         cnt2++;
    //         console.log(cnt2);
    //         if(cnt2>10){
    //             clearInterval(setId);
    //             clearInterval(setId2);
    //             pausefn();
    //     //정지상태에서 10초 지나면 재생
    //     cnt3=0;
    //     setId3 = setInterval(function(){
    //         cnt3++;
    //         console.log(cnt3);
    //         if(cnt3>10){
    //             clearInterval(setId3); //자신카운트 정지되고
    //             alert(자동실행호출);
    //             setId = setInterval(nextCount, 4000); //1회만 호출 실행 끝
    //             palyfn();
    //             }
    //         }, 1000);

    //     }
    // }, 1000);

    //4.페이지버튼 함수
    function pageBtn(){
        $('.page-btn').removeClass('on');
        $('.page-btn').eq(cnt>5?0:cnt).addClass('on');
    }

    //5.페이지버튼$('.page-btn') 클릭(click) 이벤트 반복 처리

    $('.page-btn').each(function(idx){
    $(this).click(function(){
        clearInterval(setId);
        pausefn();
        cnt=idx;
        mainSlide();
        });

    });

    //6-1.다음화살버튼(next-btn) 클릭(click) 이벤트
    $('.next-btn').click(function(){
        //선택자 $('.slide-wrap')가 애니메이션이 진행중인
        //경우는 클릭 취소(return)하라.
        if($('.slide-wrap').is(':animated')){
            return;
            }
            pausefn();
            nextCount(); 
            

        // 선택자 $('.slide-wrap')가 애니메이션이 진행중이
        //아닐때만 실행
        // if(!$('.slide-wrap').is(':animated')){
        //     clearInterval(setId);
        //     nextCount();
        //     }
    });



    //6-2.이전화살버튼(prev-btn) 클릭(click) 이벤트
    $('.prev-btn').click(function(){
        clearInterval(setId);
        pausefn();
        prevCount();
    });

    //7. 정지버튼 클릭이벤트
    // $('.pause-btn').click(function(){
    //     clearInterval(setId);
    //     // 정지버튼을 클릭하면 자식요소인 i 태그에 $(this).children()

    //     // hasClass
    //     // 클래스이름이 fa-pause이면 fa-play로 바꾸고 
    //     // 클래스이름이 fa-play이면 fa-pause로 바꿔라

    //     console.log($(this).children().hasClass('fa fa-pause'));

    //     //포우즈가 있으면 플레이로 바꾼다.
    //     if( $(this).children().hasClass('fa fa-pause') === true ){
    //         $(this).children().removeClass('fa fa-pause');
    //         $(this).children().addClass('fa fa-play');
    //      }  

    //     else{
    //         $(this).children().removeClass('fa fa-play');
    //         $(this).children().addClass('fa fa-pause');
             //}

        // //플레이가 있으면 포우즈로 바꾼다.
        // if($(this).children().hasClass('fa fa-play') === true ){
        // $(this).children().removeClass('fa fa-play');
        // $(this).children().addClass('fa fa-pause');
        //  } 
     //7. 정지버튼 클릭이벤트
       $('.pause-btn').click(function(){
            
            //토글 기능 : 한번은 정지 또 한번은 플레이
            if ($(this).children().hasClass('fa fa-pause')) { //있다면
                pausefn();
            }
            else{ //없다면 (false)
                palyfn();

            }

    });


    // 정지함수
    function pausefn(){
        clearInterval(setId);
        clearInterval(setId2);
        $('.pause-btn').children().prop('class','fa fa-play')

        cnt2=0;
        setId2 = setInterval(function(){
            cnt2++;
            if(cnt2>5){
                clearInterval(setId2); //자신은 정지
                palyfn(); //한번만 호출 실행
            }
        }, 1000);

    }
        //타이머컨트롤
        //정지상태에서 시간을 카운트
        // let count=0; 
        // setId2=setInterval(function(){
        //  count++;
        //  if(count > 5){ //5초를 초과하면
        //     clearInterval(setId);
        //     clearInterval(setId2);
        //     nextCount();
        //     palyfn();
        //  }
        // },1000); //1초마다 1씩 증가

        //정지상태에서 일정시간 지나면
        //자동으로 플레이를 해주는 카운터 프로그래밍   
    //     let cnt2=0;

    //     setId2 = setInterval(function(){
    //         cnt2++;
    //         if(cnt2>10){
    //             console.log('10초간 터치가 없었습니당.', cnt2);
    //             // 10초동안 터치가 없으면 
    //             // 카운터 타이머 정지
    //             clearInterval(setId2);
    //             palyfn();
    //         }
    //         console.log( cnt2 );
            
    //     }, 1000);
    

        // setInterval(함수, 1000);
    //플레이 함수
    function palyfn(){
        autoTimer();
        $('.pause-btn').children().prop('class','fa fa-pause')

    };

    

    //정지상태에서 일정시간 지나면
    //자동으로 플레이를 해주는 카운터 프로그래밍



})(jQuery);