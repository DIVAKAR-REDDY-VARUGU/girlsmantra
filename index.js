	$(document).ready(function(){
        let nav=false
        console.log('hello this is js file ');
        $('#nav-btn')[0].onclick=()=>{
            nav=(nav==false)?true:false;
            console.log("you clicked nav-btn dude...");
            if(nav==true){
                $('.vertical-bar1').css({
                    "display":"block",
                    'transform':'translate(20%,-150%) rotate(50deg)',
                    'margin-bottom':'0px'
                });
                $('.vertical-bar2').css({
                    'display':'block',
                    'transform':'translate(20%,-220%) rotate(-50deg)',
                    'margin-top':'0px'
                });
                $('.mobile-nav').css("right","0px")
                $('#nav-btn .fas').css({
                    'visibility': 'hidden'
                })
            }
            else{
                $('.vertical-bar1').css({
                    'display':'none',
                    'transform':' rotate(0deg)',
                    'margin-bottom':'5px'
                })
                $('.vertical-bar2').css({
                    'display':'none',
                    'transform':' rotate(0deg)',
                    'margin-top':'5px'
                })
                $('.mobile-nav').css("right","-60vw")
                $('#nav-btn .fas').css({
                    'visibility': 'visible'
                })
            }
        }
    })