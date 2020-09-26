window.onload = function() { 

    setTimeout(function(){
      if ($('#hello').length) {
          var slider = tns({
            container: '#hello',
            items: 3,
            autoplay: true,
            autoplayButtonOutput: false,
            controls: false,
            nav: true,
            navPosition: 'bottom',
            mouseDrag: true
          });
        }
    }, 400);

      document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, ''); 
      Revealator.scroll_padding = '-300';
      Revealator.effects_padding = '-300';

    $(function(){
      $('.cover__mobile-button').on('click', function() {
         $('.mobile__div').slideToggle(300, function(){

              if( $(this).css('display') === "none"){
                  $(this).removeAttr('style');

              }
         });
        });
    }); 

/* SLIDER */ 

if(innerWidth > 990){
    $(".cover").vegas({
        autoplay: false,
        timer: false,
        slides: [
            { src: "img/cover.png" },
            { src: "img/cover2.png" },
            { src: "img/cover3.png" },
            { src: "img/cover4.png" },
            { src: "img/cover5.png" },
        ]
    }); 
    $('.cover__rightArrow').on('click', function() {
       $(".cover").vegas('next');

       let bgImg = $(".vegas-slide-inner:eq(-1)").css('background-image')
                  .split('/')[$('.cover').css('background-image')
                  .split('/').length-1].slice(0,-2)
      console.log(bgImg)

      if(bgImg == "cover.png" || bgImg == "cover3.png" || bgImg == "cover5.png"){
        let arrText1 = ['.cover__stress__title-text1', '.cover__stress__def-text', '.cover__navmenu__item>a']
        let arrText2 = ['.cover__stress__title-text2', '.cover__stress__details-text', '.cover__prof-text', '.cover__navmenu__item>a']


        arrText1.forEach(item => $(item).css('color', '#021326'));
        arrText2.forEach(item => $(item).css('color', '#2153A4'));
        $('.cover__header__logo>a>img').attr("src","img/logo.png");
        $('.cover__leftArrow>img').attr("src","img/leftArrow.png");
        $('.cover__rightArrow>img').attr("src","img/rightArr.png");
        $('.cover__navmenu__item>a').hover().css('border-image', "url(img/border.png) 30 round round");
        $('.cover__stress__details-img').attr("src","img/smRightArr.png");
        $('.cover__header__social-icon-fb').attr("src","img/facebook.png");
        $('.cover__header__social-icon-vk').attr("src","img/Vector (41).png");
        $('.cover__header__social-icon-insta').attr("src","img/instagram.png");
      }   


      if(bgImg == "cover2.png" || bgImg == "cover4.png"){
        let arrText1 = ['.cover__stress__title-text1', '.cover__stress__def-text', '.cover__prof-text', '.cover__navmenu__item>a']
        let arrText2 = ['.cover__stress__title-text2', '.cover__stress__details-text']


        arrText1.forEach(item => $(item).css('color', '#fff'));
        arrText2.forEach(item => $(item).css('color', '#CBD5E0'));
        $('.cover__header__logo>a>img').attr("src","img/logoCover2.png");
        $('.cover__leftArrow>img').attr("src","img/leftArr2.png");
        $('.cover__rightArrow>img').attr("src","img/rightArr3.png");
        $('.cover__navmenu__item>a').hover().css('border-image', "url(img/borderImgC2.png) 30 round round");
        $('.cover__stress__details-img').attr("src","img/smRightArr.png");
        $('.cover__header__social-icon-fb').attr("src","img/fbSm.png");
        $('.cover__header__social-icon-vk').attr("src","img/vkSm.png");
        $('.cover__header__social-icon-insta').attr("src","img/instaSm.png");
      }   
    });

    $('.cover__leftArrow').on('click', function() {
       $(".cover").vegas('previous');
       let bgImg = $(".vegas-slide-inner:eq(-1)").css('background-image')
                  .split('/')[$('.cover').css('background-image').split('/').length-1]
                  .slice(0,-2)
        console.log(bgImg)

      if(bgImg == "cover.png" || bgImg == "cover3.png" || bgImg == "cover5.png"){
        let arrText1 = ['.cover__stress__title-text1', '.cover__stress__def-text', '.cover__navmenu__item>a']
        let arrText2 = ['.cover__stress__title-text2', '.cover__stress__details-text', '.cover__prof-text',]


        arrText1.forEach(item => $(item).css('color', '#021326'));
        arrText2.forEach(item => $(item).css('color', '#2153A4'));
        $('.cover__header__logo>a>img').attr("src","img/logo.png");
        $('.cover__leftArrow>img').attr("src","img/leftArrow.png");
        $('.cover__rightArrow>img').attr("src","img/rightArr.png");
        $('.cover__navmenu__item>a').hover().css('border-image', "url(img/border.png) 30 round round");
        $('.cover__stress__details-img').attr("src","img/smRightArr.png");
        $('.cover__header__social-icon-fb').attr("src","img/facebook.png");
        $('.cover__header__social-icon-vk').attr("src","img/Vector (41).png");
        $('.cover__header__social-icon-insta').attr("src","img/instagram.png");
      }  

        if(bgImg == "cover2.png" || bgImg == "cover4.png"){
          let arrText1 = ['.cover__stress__title-text1', '.cover__stress__def-text', '.cover__prof-text', '.cover__navmenu__item>a']
          let arrText2 = ['.cover__stress__title-text2', '.cover__stress__details-text']


          arrText1.forEach(item => $(item).css('color', '#fff'));
          arrText2.forEach(item => $(item).css('color', '#CBD5E0'));
          $('.cover__header__logo>a>img').attr("src","img/logoCover2.png");
          $('.cover__leftArrow>img').attr("src","img/leftArr2.png");
          $('.cover__rightArrow>img').attr("src","img/rightArr3.png");
          $('.cover__navmenu__item>a').hover().css('border-image', "url(img/borderImgC2.png) 30 round round");
          $('.cover__stress__details-img').attr("src","img/smRightArr.png");
          $('.cover__header__social-icon-fb').attr("src","img/fbSm.png");
          $('.cover__header__social-icon-vk').attr("src","img/vkSm.png");
          $('.cover__header__social-icon-insta').attr("src","img/instaSm.png");
        } 
    });
}

if(innerWidth > 768 && innerWidth < 990){
    $(".cover").vegas({
        autoplay: false,
        timer: false,
        slides: [
            { src: "img/cover_v2 1 (1).png"},
            { src: "img/coverMid.png" },
        ]
    }); 
    $('.cover__rightArrow').on('click', function() {
       $(".cover").vegas('next');

       let bgImg = $(".vegas-slide-inner:eq(-1)").css('background-image')
                  .split('/')[$('.cover').css('background-image')
                  .split('/').length-1].slice(0,-2)
      console.log(bgImg)

      if(bgImg == "cover_v2%201%20(1).png"){
        let arrText1 = ['.cover__stress__title-text1', '.cover__stress__def-text', '.cover__navmenu__item>a']
        let arrText2 = ['.cover__stress__title-text2', '.cover__stress__details-text', '.cover__prof-text', '.cover__navmenu__item>a']


        arrText1.forEach(item => $(item).css('color', '#021326'));
        arrText2.forEach(item => $(item).css('color', '#2153A4'));
        $('.cover__header__logo>a>img').attr("src","img/logo.png");
        $('.cover__leftArrow>img').attr("src","img/leftArrow.png");
        $('.cover__rightArrow>img').attr("src","img/rightArr.png");
        $('.cover__navmenu__item>a').hover().css('border-image', "url(img/border.png) 30 round round");
        $('.cover__stress__details-img').attr("src","img/smRightArr.png");
        $('.cover__header__social-icon-fb').attr("src","img/facebook.png");
        $('.cover__header__social-icon-vk').attr("src","img/Vector (41).png");
        $('.cover__header__social-icon-insta').attr("src","img/instagram.png");
      }   


      if(bgImg == "coverMid.png"){
        let arrText1 = ['.cover__stress__title-text1', '.cover__stress__def-text', '.cover__prof-text', '.cover__navmenu__item>a']
        let arrText2 = ['.cover__stress__title-text2', '.cover__stress__details-text']


        arrText1.forEach(item => $(item).css('color', '#fff'));
        arrText2.forEach(item => $(item).css('color', '#CBD5E0'));
        $('.cover__header__logo>a>img').attr("src","img/logoCover2.png");
        $('.cover__leftArrow>img').attr("src","img/leftArr2.png");
        $('.cover__rightArrow>img').attr("src","img/rightArr3.png");
        $('.cover__navmenu__item>a').hover().css('border-image', "url(img/borderImgC2.png) 30 round round");
        $('.cover__stress__details-img').attr("src","img/smRightArr.png");
        $('.cover__header__social-icon-fb').attr("src","img/fbSm.png");
        $('.cover__header__social-icon-vk').attr("src","img/vkSm.png");
        $('.cover__header__social-icon-insta').attr("src","img/instaSm.png");
      }   
    });

    $('.cover__leftArrow').on('click', function() {
       $(".cover").vegas('previous');
       let bgImg = $(".vegas-slide-inner:eq(-1)").css('background-image')
                  .split('/')[$('.cover').css('background-image').split('/').length-1]
                  .slice(0,-2)
        console.log(bgImg)

      if(bgImg == "cover_v2%201%20(1).png"){
        let arrText1 = ['.cover__stress__title-text1', '.cover__stress__def-text', '.cover__navmenu__item>a']
        let arrText2 = ['.cover__stress__title-text2', '.cover__stress__details-text', '.cover__prof-text',]


        arrText1.forEach(item => $(item).css('color', '#021326'));
        arrText2.forEach(item => $(item).css('color', '#2153A4'));
        $('.cover__header__logo>a>img').attr("src","img/logo.png");
        $('.cover__leftArrow>img').attr("src","img/leftArrow.png");
        $('.cover__rightArrow>img').attr("src","img/rightArr.png");
        $('.cover__navmenu__item>a').hover().css('border-image', "url(img/border.png) 30 round round");
        $('.cover__stress__details-img').attr("src","img/smRightArr.png");
        $('.cover__header__social-icon-fb').attr("src","img/facebook.png");
        $('.cover__header__social-icon-vk').attr("src","img/Vector (41).png");
        $('.cover__header__social-icon-insta').attr("src","img/instagram.png");
      }  

        if(bgImg == "coverMid.png"){
          let arrText1 = ['.cover__stress__title-text1', '.cover__stress__def-text', '.cover__prof-text', '.cover__navmenu__item>a']
          let arrText2 = ['.cover__stress__title-text2', '.cover__stress__details-text']


          arrText1.forEach(item => $(item).css('color', '#fff'));
          arrText2.forEach(item => $(item).css('color', '#CBD5E0'));
          $('.cover__header__logo>a>img').attr("src","img/logoCover2.png");
          $('.cover__leftArrow>img').attr("src","img/leftArr2.png");
          $('.cover__rightArrow>img').attr("src","img/rightArr3.png");
          $('.cover__navmenu__item>a').hover().css('border-image', "url(img/borderImgC2.png) 30 round round");
          $('.cover__stress__details-img').attr("src","img/smRightArr.png");
          $('.cover__header__social-icon-fb').attr("src","img/fbSm.png");
          $('.cover__header__social-icon-vk').attr("src","img/vkSm.png");
          $('.cover__header__social-icon-insta').attr("src","img/instaSm.png");
        } 
    });
}

/* SLIDER END */



}


/*@media (min-width: 1240px) and (max-width: 1400px){
  .cover{
    .cover__content{
        max-width: 1240px;
      .cover__stress{
        padding-left: 300px;
      }
      .cover__rightArrow{
        padding-left: 100px;
      }
    }
  }

  .about__me{
    .about__me__wrapper{
      justify-content: space-around;
        max-width: 1240px;
    }
  }

  .directions{
    .directions__list{
      margin-left: 0;
      margin-right: 0;
      ul{
        max-width: 1024px;
        margin:0 auto;
      }
    }

  }
  .testing{
    display: flex;
     align-items: center;
     flex-direction: column;
    .testing__pages{
      z-index: 3;
      margin-left: 0;
    }
  }
  .cloud5{
    z-index: 2;
  }
}*/

/*@media (min-width: 1050px) and (max-width: 1400px){
  .cover{
    .cover__content{
      margin: 0 auto
    }
  }
  .about__me{
    .about__me__wrapper{
      display: flex;
        margin: 0 auto;
    }
  }
  .services{
    .services__wrapper{
      margin-left: 0;
      .services__list{
        ul{
          justify-content: center;
        }
      }
    }
  }
}

@media (min-width: 800px) and (max-width: 1140px){
  .directions{
    .directions__list{
      ul{
        .directions__list__item{
          &:nth-child(6){
            .directions__list__item__text{
              .directions__list__item__text-title{
                max-width: 300px;
              }
            }
          };
        }
      }
    }
  }
  .cloud6{
    margin-top: -100px;
  }
}

@media (min-width: 1240px) and (max-width: 1400px){
  .cover{
    .cover__content{
        max-width: 1240px;
      .cover__stress{
        padding-left: 300px;
      }
      .cover__rightArrow{
        padding-left: 100px;
      }
    }
  }

  .about__me{
    .about__me__wrapper{
      justify-content: space-around;
        max-width: 1240px;
    }
  }

  .directions{
    .directions__list{
      margin-left: 0;
      margin-right: 0;
      ul{
        max-width: 1024px;
        margin:0 auto;
      }
    }

  }
  .testing{
    display: flex;
     align-items: center;
     flex-direction: column;
    .testing__pages{
      z-index: 3;
      margin-left: 0;
    }
  }
  .cloud5{
    z-index: 2;
  }
}

@media (min-width: 1050px) and(max-width: 1240px){
  .cover{
    .cover__content{
        max-width: 1024px;
        margin: 0 auto;
      .cover__stress{
        padding-left: 214px;
      }
      .cover__rightArrow{
        padding-left: 20px;
      }
    }
  }
  .about__me{
    padding-top: 0;
    .about__me__wrapper{
    justify-content: space-between;
      max-width: 1050px;
      margin: 0 auto;
      .about__me__item{
        margin-left: 10px;
      }
  }
  }
  .services{
    .services__wrapper{
      ul{
        .services__list{
          ul{
          .services__list__item{
            &:nth-child(2n+1){
              margin-left: 0;
            }
          }
        }}
      }
    }
  }
  .directions{
    .directions__list{
      max-width: 900px;
        margin: 0 auto;
        margin-top: 76px;
    }
  }
  .testing{
    .testing__list{
      margin-left: 0;
      margin-right: 0;
      ul{
        justify-content: center;
        .testing__list__item{
          padding-left: 20px;
          padding-top: 15px;
          width: 320px;
        }
      }
    }
     
    .testing__pages{
      justify-content: center;
      z-index: 6;
      margin-left: 0;
    }
  }
  .cloud5{
    z-index: 5;
  }
  .blog{
    .blog__wrapper{
    padding-top: 100px;
    .blog__list{
    ul{
      justify-content: space-around;
      .blog__list__item{
        max-width: 310px;
        .blog__list__item-img{
          width: 310px;
          height: 215px;
        }
        .blog__list__item-img{
          max-width: 310px;
        }
      }
    }}
  }
  }
}

@media (min-width: 990px) and (max-width: 1050px){
  .cover{
    background-position: center top;
    .cover__header{
      .cover__header__logo{
        margin-top: 0;
      }
      
    }
    .cover__content{
        max-width: 920px;
        margin: 0 auto;
      .cover__stress{
        padding-left: 50px;
      }
      .cover__rightArrow{
        padding-left: 0;
      }
    }
  }
  .about__me{
    padding-top: 0;
    padding-bottom: 50px;
    .about__me__wrapper{
      justify-content: center;
        max-width: 1050px;
        margin: 0 auto;
        .about__me__item{
          margin: 10px;

        .about__me__item__title{
            margin-top: 0;
            margin-left: 24px;
          }
          .about__me__item__list{
            margin-top: 5px;
            .about__me__item__list-text{
              margin-top: 11px;
              &:first-child{
                margin-top: 0;
              };
              .list-style-circle{
                margin-top: 2px;
                margin-right: 5px;
              }
            }
        } 

        &:nth-child(2){
          margin-top: 4px;
          .about__me__item__title{
            margin-top: 0;
            margin-left: 24px;
          }
          .about__me__item__list{
            margin-top: 5px;
            .about__me__item__list-text{
              margin-top: 11px;
              &:first-child{
                margin-top: 0;
              };
              .list-style-circle{
                margin-top: 2px;
                margin-right: 5px;
              }
            }
          }
        };
        &:nth-child(3){
          .about__me__item-img{
            margin-left: 25px;
          }
          .about__me__item__title{
              margin-top: 5px;
              margin-left: 25px;
          }
          .about__me__item__list{
            .about__me__item__list-text{
              .list-style-circle{
                margin-top: 2px;
                margin-right: 7px;
                padding-left: 2px;
              }
            }
          }
        }
        }
  }
  }
  .services{
    .services__wrapper{
      margin-left: 0;
      ul{
        justify-content: center;
        flex-wrap: wrap;
        .services__list{
          ul{
          .services__list__item{
            &:nth-child(2n+1){
              margin-left: 0;
            }
          }
        }}
      }
    }
  }
  .directions{
    .directions__list{
      max-width: 900px;
        margin: 0 auto;
        margin-top: 76px;
    }
  }
  .testing{
    .testing__list{
      margin-left: 0;
      margin-right: 0;
      ul{
        flex-wrap: wrap;
        justify-content: center;
        .testing__list__item{
          margin: 15px;
          padding-left: 20px;
          padding-top: 15px;
          width: 320px;
        }
      }
    }
     
    .testing__pages{
      justify-content: center;
      z-index: 6;
      margin-left: 0;
    }
  }
  .cloud5{
    z-index: 5;
  }
  .blog{
    padding-top: 60px;
    .blog__wrapper{
    padding-top: 0;
    .blog__list{
    ul{
      max-width: 900px;
      flex-wrap: wrap;
      justify-content: space-around;
      .blog__list__item{
        margin: 15px;
        max-width: 310px;
        .blog__list__item-img{
          width: 310px;
          height: 215px;
        }
        .blog__list__item-img{
          max-width: 310px;
        }
      }
    }}
  }
  }
}


@media (min-width: 768px) and (max-width: 990px){
  .navmenu{
    min-width: 768px;
    ul{
      justify-content: center;
      max-width: 780px;
    .navmenu__item-services{
      margin-left: 50px;
    }
    .navmenu__item-directions{
      margin-left: 50px;
    }
    .navmenu__item-testing{
      margin-left: 50px;
    }
    .navmenu__item-blog{
      margin-left: 75px;
    }
    .navmenu__item-feedback{
      margin-left: 50px;
    }
  }
  }
  .cover{
    background-position: center top;
    .cover__header{
      .cover__header__logo{
        margin-top: 0;
      }
      
    }
    .cover__content{
        width: 765px;
        margin: 0 auto;
        justify-content: space-around;
        .cover__prof{
          display: none;
          .cover__prof-text1{
            margin-left: 0;
          }
          .cover__prof-text2{
            margin-left: 0;
          }
        }
      .cover__stress{
        padding-left: 10px;
      }
      .cover__rightArrow{
        padding-left: 0;
      }
    }
  }
  .about__me{
    padding-top: 0;
    padding-bottom: 50px;
    .about__me__wrapper{
      justify-content: center;
        max-width: 1050px;
        margin: 0 auto;
        .about__me__item{
          margin: 10px;

        .about__me__item__title{
            margin-top: 0;
            margin-left: 24px;
          }
          .about__me__item__list{
            margin-top: 5px;
            .about__me__item__list-text{
              margin-top: 11px;
              &:first-child{
                margin-top: 0;
              };
              .list-style-circle{
                margin-top: 2px;
                margin-right: 5px;
              }
            }
        } 

        &:nth-child(2){
          margin-top: 4px;
          .about__me__item__title{
            margin-top: 0;
            margin-left: 24px;
          }
          .about__me__item__list{
            margin-top: 5px;
            .about__me__item__list-text{
              margin-top: 11px;
              &:first-child{
                margin-top: 0;
              };
              .list-style-circle{
                margin-top: 2px;
                margin-right: 5px;
              }
            }
          }
        };
        &:nth-child(3){
          .about__me__item-img{
            margin-left: 25px;
          }
          .about__me__item__title{
              margin-top: 5px;
              margin-left: 25px;
          }
          .about__me__item__list{
            .about__me__item__list-text{
              .list-style-circle{
                margin-top: 2px;
                margin-right: 7px;
                padding-left: 2px;
              }
            }
          }
        }
        }
  }
  }
  .services{
    .services__wrapper{
      margin-left: 0;
        .services__list{
          ul{
          flex-direction: column;
          flex-wrap: wrap;
          align-items: center;
          .services__list__item{
            justify-content: center;
            margin-left: 0;
          }
        }
      }
    }
  }
  .directions{
    .directions__list{
      max-width: 900px;
        margin: 0 auto;
        margin-top: 76px;
        ul{
          justify-content: center;
          .directions__list__item{
            .directions__list__item-img{
              margin-right: 30px;
            }
            &:last-child{
              margin-left: 0;

            };
          }
        }
    }
  }
  .testing{
    margin-top: -80px;
    .testing__list{
      margin-left: 0;
      margin-right: 0;
      ul{
        flex-wrap: wrap;
        justify-content: center;
        .testing__list__item{
          margin: 15px;
          padding-left: 20px;
          padding-top: 15px;
          width: 320px;
        }
      }
    }
     
    .testing__pages{
      justify-content: center;
      z-index: 6;
      margin-left: 0;
    }
  }
  .cloud5{
    z-index: 5;
    margin-top: -60px;
  }
  .blog{
    padding-top: 60px;
    .blog__wrapper{
    padding-top: 0;
    .blog__list{
    ul{
      max-width: 900px;
      flex-wrap: wrap;
      justify-content: space-around;
      .blog__list__item{
        margin: 15px;
        max-width: 310px;
        .blog__list__item-img{
          width: 310px;
          height: 215px;
        }
        .blog__list__item-img{
          max-width: 310px;
        }
      }
    }}
  }
  }
}

@media (min-width: 375px) and (max-width: 768px){
  .navmenu{
      min-width: 0;
        margin: 0;
    ul{
      justify-content: space-around;
      .navmenu__item-about{
        margin-left: 0;
      }
      .navmenu__item-services{
        margin-left: 0;
      }
      .navmenu__item-directions{
        margin-left: 0;
      }
      .navmenu__item-testing{
        margin-left: 0;
      }
      .navmenu__item-blog{
        margin-left: 0;
      }
      .navmenu__item-feedback{
        margin-left: 0;
      }
    }
  }
  .cover{
    padding-bottom: 60px;
    padding-top: 7px;
    background: url("@{imagesPath}cover_v2 1 (1).png") no-repeat;
    .cover__header{
      .cover__header__logo{
        margin-left: 23px;
        margin-top: 44px;
        img{
          width: 167px;
        }
      }
      .cover__header__social{
        .cover__header__social__main{
          padding-right: 22.69px;
        }
      }
    }
    .cover__content{
      margin-left: 24px;
      .cover__content__arProf{
        flex-direction: column;
        .cover__leftArrow{
          padding-top: 323px;
        }
        .cover__prof{
          padding-top: 164px;
          .cover__prof-text1{
            margin-left: 0;
          }
          .cover__prof-text2{
            margin-left: 0;
          }
        }
      }
      .cover__stress{
        padding-left: 167px;
        padding-top: 150px;
        .cover__stress__title{
          .cover__stress__title-text1{
            max-width: 270px;
            font-size: 54px;
            line-height: 64px;
          }
          .cover__stress__title-text2{
            margin-top: 20px;
            margin-left: 1px;
          }
        }
        .cover__stress__def{
          .cover__stress__definition{
            max-width: 250px;
          }
          .cover__stress__details{
            margin-top: 25px;
          }
        }
      }
      .cover__rightArrow{
        padding-top: 323px;
        padding-left: 0;
      }
    }
    .cover__navmenu{
      margin-top: 132px;
    }
  }
  .about__me{
    margin-top: -29px;
    .about__me__wrapper{
      padding-top: 79px;
      padding-left: 24px;
      margin-left: 0;
      .about__me__item{
        margin-left: 29px;
        &:nth-child(3){
          display: none;
        };
      }
    }
  }
  .cloud2{
    margin-top: 18px;
  }
  .services{
    .services__navmenu{
      display: none;
    }
    .services__wrapper{
      padding-top: 155px;
      margin-left: 0;
      .services__list{
        ul{
          justify-content: center;
          .services__list__item{
            min-width: 0;
            &:nth-child(1),&:nth-child(2),&:nth-child(3),&:nth-child(4),&:nth-child(5),&:nth-child(6){
              width: 350px;
              padding-left: 31px;
            }
            &:nth-child(2n+1){
              margin-left: 0;
            }
            &:nth-child(4){
              margin-left: 21px;
            }
          }
        }
      }
    }
  }
  .cloud3{
    margin-top: -48px;
  }
  .directions{
    .directions__list{
      margin-left: 0;
      margin-right: 0;
      margin-top: 81px;
      ul{
        display: flex;
        justify-content: center;
        .directions__list__item{
          width: 350px;
          &:last-child{
            margin-left: 0;
            padding-top: 6px;
          };
          .directions__list__item__text{
          .directions__list__item__text-title{
            width: 255px;
          }}
        }
      }
    }
  }
  .testing{
    padding-bottom: 62px;
    padding-top: 87px;
    .testing__list{
      margin-top: 65px;
      margin-left: 0;
      margin-right: 0;
      ul{
        justify-content: center;
        .testing__list__item{
          padding-top: 22px;
          padding-left: 49px;
          &:nth-child(3){
            display: none;
          };
        }
      }
    }
    .testing__pages{
      margin-left: 0;
      justify-content: center;
      margin-top: 59px;
    }
  }
  .cloud5{
    z-index: 999;
    margin-top: -79px;
  }
  .blog{
    padding-top: 98px;
    padding-bottom: 114px;
    .blog__wrapper{
      .blog__list{
        margin-top: 51px;
        ul{
          .blog__list__item{
            &:nth-child(3){
              display: none;
            };
          }
        }
      }
    }
  }
  .feedback{
    .feedback__container{
      .feedback__main{
        .feedback__main-title{
          width: 564px;
          margin-top: 82px;
          line-height: 72px;
        }
        .feedback__main-text{
          margin-top: 39px;
          margin-right: 0;
        }
        .feedback__form{
          margin-left: 6px;
          .feedback__form-submit{
            padding-top: 1px;
          }
        }
        .feedback__main__social{
          margin-top: 104px;
        }
      }
    }
  }

  .blog__page{
    header{
      .header__container{
        padding-top: 19px;
        .header__container-logo{
          padding-top: 9px;
          padding-left: 24px;
          img{
            width: 165px;
          }

        }
        .header__container__social{
          margin-right: 19px;
        }
        .header__navmenu{
          display: none;      
        }
      }
    }
    .blog__content{
      padding-top: 26px;
      .header__blog-title{
        margin-left: 0;
        padding-left: 22px;
      } 
      .header__blog__number{
        margin-right: 0;
        padding-right: 24px;
      }
    }
    .blog__list{
        margin-left: 25px;
        margin-right: 23px;
      .blog__list__item{
        &:nth-child(3){
          margin-top: 63px;
        };
        &:nth-child(7),&:nth-child(8){
          margin-top: 39px;
        }
        &:nth-child(11),&:nth-child(12){
          display: none;
        }
        max-width: 350px;
        min-width: 0;
        img{
          width: 349px;
          height: 220px;
        }
      }
    }
    .cloud7{
      margin-top: 19px;
    }
    .feedback__blog{
      .feedback__container{
        .feedback__main{
          margin-left: 3px;
          .feedback__main-title{
            width: 564px;
            margin-top: 82px;
            line-height: 72px;
          }
          .feedback__main-text{
            margin-top: 39px;
            margin-right: 0;
          }
          .feedback__form{
            margin-left: 6px;
            .feedback__form-submit{
              padding-top: 1px;
            }
          }
          .feedback__main__social{
            margin-top: 104px;
          }
        }
      }
  }
  }

  .blog__pages{
    header{
      .header__container{
        padding-top: 19px;
        .header__container-logo{
          padding-top: 9px;
          padding-left: 24px;
          img{
            width: 165px;
          }

        }
        .header__container__social{
          margin-right: 19px;
        }
        .header__navmenu{
          display: none;      
        }
      }
    }
    .navigation{
        padding-top: 31px;
        padding-left: 25px;
    }   
    .main__content{
      padding-left: 0;
      flex-direction: column;
      .main__content__left{
        padding-left: 24px;
        .main__content__left__text{
          padding-top: 0;
          border-top: 0;
          display: flex;
          p{
            &:first-child{
              padding-top: 25px;
              border-top: 1px solid #2153A4;
            };
            &:nth-child(2){
              padding-top: 26px;
              padding-left: 6px;  
            }
          }
        }
        .social__list{
          display: none;
        }
      }
      .main__content__main{
        margin-left: 0;
        .main__content__main-title{
          padding-left: 24px;
          margin-left: 0;
        }
        .main__content__main-text1{
          padding-left: 24px;
          margin-left: 0;
          max-width: 725px;
        }
        .main__content__main-img{
          padding-left: 0;
          margin-top: 46px;
          height: 423px;
        }
        .main__content__main-text2{
          margin-top: 37px;
          margin-left: 25px;
          max-width: 720px;
        }
        .main__content__main-text3{
          margin-left: 26px;
        }
        .main__content__main-text4{
          max-width: 675px;
          margin-top: 17px;
          margin-left: 24px;
        }
        .main__content__main-text5{
          max-width: 675px;
          margin-left: 24px;
        }
        .main__content__main-text6{
          margin-left: 24px;
          margin-top: 23px;
          .main__content__main-text6_3{
            max-width: 645px;
          }
        }
      }
    }
    .back{
      padding-bottom: 100px;
      padding-top: 137px;
      padding-left: 26px;
    }
    .cloud8{
      margin-top: -111px;
    }
    .blogp{
      .blogp__title{
        margin-top: -34px;
          margin-left: 0px;
      }
      .blogp__list{
        margin-left: 25px;
          margin-right: 23px;
          .blogp__list__item{
            max-width: 350px;
          min-width: 0;
          &:nth-child(3){
            display: none;
          };
          img{
            width: 349px;
            height: 220px;
          }
        }
      }
    }
  .feedback__blog{
    .feedback__container{
      .feedback__main{
        .feedback__main-title{
          width: 564px;
          margin-top: 80px;
          line-height: 72px;
        }
        .feedback__main-text{
          margin-left: 3px;
          margin-top: 39px;
          margin-right: 0;
        }
        .feedback__form{
          margin-left: 9px;
          .feedback__form-submit{
            padding-top: 1px;
          }
        }
        .feedback__main__social{
          margin-top: 104px;
        }
      }
    }
  }
  }

  .test{
    header{
      .header__container{
        padding-top: 19px;
        .header__container-logo{
          padding-top: 9px;
          padding-left: 24px;
          img{
            width: 165px;
          }

        }
        .header__container__social{
          margin-right: 19px;
        }
        .header__navmenu{
          display: none;      
        }
      }
    }
    .navigation{
      padding-top: 31px;
      padding-left: 25px;
    } 
    .test__title{
      margin-top: 23px;
      margin-left: 23px;
    }
    .test__main{
      .test__main__leftArr{
        display: none;
      }
      .test__main__rightArr{
        display: none;
      }
      .test__main__content{
        margin-left: 0;
        table{
          width: 350px;
          &:nth-child(1){
            margin-left: 24px;
          };
          &:nth-child(2){
            margin-left: 21px;
          };
        }
      }
    }
    .cloud9{
      margin-top: 68px;
    }
    .feedback__blog{
      .feedback__container{
        .feedback__main{
          .feedback__main-title{
            width: 564px;
            margin-top: 80px;
            line-height: 72px;
          }
          .feedback__main-text{
            margin-left: 3px;
            margin-top: 39px;
            margin-right: 0;
          }
          .feedback__form{
            margin-left: 9px;
            .feedback__form-submit{
              padding-top: 1px;
            }
          }
          .feedback__main__social{
            margin-top: 104px;
          }
        }
      }
    }
  }

  .test__pages{
    header{
      .header__container{
        padding-top: 19px;
        .header__container-logo{
          padding-top: 9px;
          padding-left: 24px;
          img{
            width: 165px;
          }

        }
        .header__container__social{
          margin-right: 19px;
        }
        .header__navmenu{
          display: none;      
        }
      }
    }
    .navigation{
        padding-top: 31px;
        padding-left: 25px;
    }
    .test__pages__main{
      .test__pages__main__text{
        padding-top: 67px;
          padding-left: 86px;
      }
    }
    .test__content{
      .test__pages__test{
        margin-left: 22px;
      }
    } 
      .feedback__blog{
    .feedback__container{
      .feedback__main{
        .feedback__main-title{
          width: 564px;
          margin-top: 80px;
          line-height: 72px;
        }
        .feedback__main-text{
          margin-left: 3px;
          margin-top: 39px;
          margin-right: 0;
        }
        .feedback__form{
          margin-left: 9px;
          .feedback__form-submit{
            padding-top: 1px;
          }
        }
        .feedback__main__social{
          margin-top: 104px;
        }
      }
    }
  } 
  }
}

@media screen and (max-width: 375px){
  .navmenu{
      min-width: 0;
        margin: 0;
    ul{
      justify-content: space-around;
      .navmenu__item-about{
        margin-left: 0;
      }
      .navmenu__item-services{
        margin-left: 0;
      }
      .navmenu__item-directions{
        margin-left: 0;
      }
      .navmenu__item-testing{
        margin-left: 0;
      }
      .navmenu__item-blog{
        margin-left: 0;
      }
      .navmenu__item-feedback{
        margin-left: 0;
      }
    }
  }
  .cover{
    padding-bottom: 60px;
    padding-top: 7px;
    background: url("@{imagesPath}cover_v2 1 (375).png") no-repeat;
    .cover__header{
      .cover__header__logo{
        margin-left: 0;
        margin-top: 0;
        img{
            width: 155px;
            height: 30px;
        }
      }
      .cover__header__social{
        margin-top: 0;
        .cover__header__social__main{
          padding-right: 22.69px;
        }
      }
    }
    .cover__content{
      margin-top: 0;
      margin-left: 14px;
      .cover__content__arProf{
        flex-direction: column;
        .cover__leftArrow{
          display: none;
        }
        .cover__prof{
          max-width: 300px;
          font-size: 18px;
          line-height: 25px;
            padding-top: 135px;
            padding-left: 185px;
          .cover__prof-text1{
            margin-left: 0;
          }
          .cover__prof-text2{
            margin-left: 0;
          }
        }
      }
      .cover__stress{
        padding-left: 0;
        padding-top: 96px;
        .cover__stress__title{
          .cover__stress__title-text1{
            font-size: 42px;
            line-height: 50px;
            max-width: 308px;
          }
          .cover__stress__title-text2{
            font-size: 18px;
            line-height: 30px;
            margin-top: 0;
            margin-left: 0;
          }
        }
        .cover__stress__def{
          margin-top: 3px;
          margin-left: 0;
          .cover__stress__definition{
            max-width: 348px;
            .cover__stress__def-text{
              font-size: 12px;
              line-height: 16px;
            }
          }
          .cover__stress__details{
            margin-top: 16px;
            .cover__stress__details-text{
              font-size: 12px;
              line-height: 16px;
            }
          }
        }
      }
      .cover__rightArrow{
        display: none;
      }
    }
    .cover__navmenu{
      display: none;
    }
  }
  .cloud{
    margin-top: 13px;
  }
  .about__me{
    padding-bottom: 10px;
    margin-top: -29px;
    .about__me__wrapper{
      overflow: hidden;
        display: -webkit-box;
      padding-top: 87px;
      padding-left: 13px;
      margin-left: 0;
      .about__me__item{
        margin-left: 29px;
        &:nth-child(2){
          margin-left: -41px;
        };
        &:nth-child(3){
          display: block;
        };
        .about__me__item__title{
              margin-top: 35.15px;
              margin-left: 25px;          
          .about__me__item__title-text{
            font-size: 18px;
            line-height: 22px;
          }
        }
        .about__me__item__list{
          margin-left: 2px;
          margin-top: 12px;
          ul{
            .about__me__item__list-text{
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
  .cloud2{
    margin-top: 18px;
  }
  .services{
    .services__navmenu{
      display: none;
    }
    .services__wrapper{
      padding-top: 57px;
      margin-left: 0;
      .services__list{
        ul{
          justify-content: center;
          .services__list__item{
            min-height: 0;
            height: 224px;
            min-width: 0;
            &:nth-child(1),&:nth-child(2),&:nth-child(3),&:nth-child(4),&:nth-child(5),&:nth-child(6){
              width: 350px;
              padding-left: 31px;
              margin-left: 0;
              margin-top: -7px;
              .services__list__item-img{
                margin-top: 27px;
              }
              .services__list__item__more{
                margin-top: 7px;
              }
              .services__list__item__about{
                margin-top: 17px;
                .services__list__item__about-text{
                  display: flex;
                  font-size: 18px;
                  line-height: 22px;
                  margin-right: 0;
                  width: 100%;
                }
              }
            }
            &:nth-child(4){
              margin-left: 0;
            }
          }
        }
      }
    }
  }
  .cloud3{
    margin-top: -70px;
  }
  .directions{
    margin-top: -86px;
    .directions__navmenu{
      display: none;
    }
    .directions__list{
      margin-left: 0;
      margin-right: 0;
      margin-top: 81px;
      ul{
        display: flex;
        justify-content: center;
        .directions__list__item{
          width: 324.42px;
          height: 50.86px;
          padding-bottom: 40px;
          &:last-child{
            padding-bottom: 0px;
          };
          .directions__list__item-img{
            width: 50px;
            margin-right: 0;
          }
          .directions__list__item__text{
          .directions__list__item__text-title{
            width: 265px;
            font-size: 16px;
            line-height: 26px;
          }}
        }
      }
    }
  }
  .testing{
    padding-bottom: 62px;
    padding-top: 87px;
    .testing__list{
      margin-top: 65px;
      margin-left: 0;
      margin-right: 0;
      ul{
        justify-content: center;
        .testing__list__item{
          padding-top: 22px;
          padding-left: 49px;
          &:nth-child(3){
            display: none;
          };
        }
      }
    }
    .testing__pages{
      margin-left: 0;
      justify-content: center;
      margin-top: 59px;
    }
  }
  .cloud5{
    z-index: 999;
    margin-top: -79px;
  }
  .blog{
    padding-top: 98px;
    padding-bottom: 114px;
    .blog__wrapper{
      .blog__list{
        margin-top: 51px;
        ul{
          .blog__list__item{
            &:nth-child(3){
              display: none;
            };
          }
        }
      }
    }
  }
  .feedback{
    .feedback__container{
      .feedback__main{
        .feedback__main-title{
          width: 564px;
          margin-top: 82px;
          line-height: 72px;
        }
        .feedback__main-text{
          margin-top: 39px;
          margin-right: 0;
        }
        .feedback__form{
          margin-left: 6px;
          .feedback__form-submit{
            padding-top: 1px;
          }
        }
        .feedback__main__social{
          margin-top: 104px;
        }
      }
    }
  }

  .blog__page{
    header{
      .header__container{
        padding-top: 19px;
        .header__container-logo{
          padding-top: 9px;
          padding-left: 24px;
          img{
            width: 165px;
          }

        }
        .header__container__social{
          margin-right: 19px;
        }
        .header__navmenu{
          display: none;      
        }
      }
    }
    .blog__content{
      padding-top: 26px;
      .header__blog-title{
        margin-left: 0;
        padding-left: 22px;
      } 
      .header__blog__number{
        margin-right: 0;
        padding-right: 24px;
      }
    }
    .blog__list{
        margin-left: 25px;
        margin-right: 23px;
      .blog__list__item{
        &:nth-child(3){
          margin-top: 63px;
        };
        &:nth-child(7),&:nth-child(8){
          margin-top: 39px;
        }
        &:nth-child(11),&:nth-child(12){
          display: none;
        }
        max-width: 350px;
        min-width: 0;
        img{
          width: 349px;
          height: 220px;
        }
      }
    }
    .cloud7{
      margin-top: 19px;
    }
    .feedback__blog{
      .feedback__container{
        .feedback__main{
          margin-left: 3px;
          .feedback__main-title{
            width: 564px;
            margin-top: 82px;
            line-height: 72px;
          }
          .feedback__main-text{
            margin-top: 39px;
            margin-right: 0;
          }
          .feedback__form{
            margin-left: 6px;
            .feedback__form-submit{
              padding-top: 1px;
            }
          }
          .feedback__main__social{
            margin-top: 104px;
          }
        }
      }
  }
  }

  .blog__pages{
    header{
      .header__container{
        padding-top: 19px;
        .header__container-logo{
          padding-top: 9px;
          padding-left: 24px;
          img{
            width: 165px;
          }

        }
        .header__container__social{
          margin-right: 19px;
        }
        .header__navmenu{
          display: none;      
        }
      }
    }
    .navigation{
        padding-top: 31px;
        padding-left: 25px;
    }   
    .main__content{
      padding-left: 0;
      flex-direction: column;
      .main__content__left{
        padding-left: 24px;
        .main__content__left__text{
          padding-top: 0;
          border-top: 0;
          display: flex;
          p{
            &:first-child{
              padding-top: 25px;
              border-top: 1px solid #2153A4;
            };
            &:nth-child(2){
              padding-top: 26px;
              padding-left: 6px;  
            }
          }
        }
        .social__list{
          display: none;
        }
      }
      .main__content__main{
        margin-left: 0;
        .main__content__main-title{
          padding-left: 24px;
          margin-left: 0;
        }
        .main__content__main-text1{
          padding-left: 24px;
          margin-left: 0;
          max-width: 725px;
        }
        .main__content__main-img{
          padding-left: 0;
          margin-top: 46px;
          height: 423px;
        }
        .main__content__main-text2{
          margin-top: 37px;
          margin-left: 25px;
          max-width: 720px;
        }
        .main__content__main-text3{
          margin-left: 26px;
        }
        .main__content__main-text4{
          max-width: 675px;
          margin-top: 17px;
          margin-left: 24px;
        }
        .main__content__main-text5{
          max-width: 675px;
          margin-left: 24px;
        }
        .main__content__main-text6{
          margin-left: 24px;
          margin-top: 23px;
          .main__content__main-text6_3{
            max-width: 645px;
          }
        }
      }
    }
    .back{
      padding-bottom: 100px;
      padding-top: 137px;
      padding-left: 26px;
    }
    .cloud8{
      margin-top: -111px;
    }
    .blogp{
      .blogp__title{
        margin-top: -34px;
          margin-left: 0px;
      }
      .blogp__list{
        margin-left: 25px;
          margin-right: 23px;
          .blogp__list__item{
            max-width: 350px;
          min-width: 0;
          &:nth-child(3){
            display: none;
          };
          img{
            width: 349px;
            height: 220px;
          }
        }
      }
    }
  .feedback__blog{
    .feedback__container{
      .feedback__main{
        .feedback__main-title{
          width: 564px;
          margin-top: 80px;
          line-height: 72px;
        }
        .feedback__main-text{
          margin-left: 3px;
          margin-top: 39px;
          margin-right: 0;
        }
        .feedback__form{
          margin-left: 9px;
          .feedback__form-submit{
            padding-top: 1px;
          }
        }
        .feedback__main__social{
          margin-top: 104px;
        }
      }
    }
  }
  }

  .test{
    header{
      .header__container{
        padding-top: 19px;
        .header__container-logo{
          padding-top: 9px;
          padding-left: 24px;
          img{
            width: 165px;
          }

        }
        .header__container__social{
          margin-right: 19px;
        }
        .header__navmenu{
          display: none;      
        }
      }
    }
    .navigation{
      padding-top: 31px;
      padding-left: 25px;
    } 
    .test__title{
      margin-top: 23px;
      margin-left: 23px;
    }
    .test__main{
      .test__main__leftArr{
        display: none;
      }
      .test__main__rightArr{
        display: none;
      }
      .test__main__content{
        margin-left: 0;
        table{
          width: 350px;
          &:nth-child(1){
            margin-left: 24px;
          };
          &:nth-child(2){
            margin-left: 21px;
          };
        }
      }
    }
    .cloud9{
      margin-top: 68px;
    }
    .feedback__blog{
      .feedback__container{
        .feedback__main{
          .feedback__main-title{
            width: 564px;
            margin-top: 80px;
            line-height: 72px;
          }
          .feedback__main-text{
            margin-left: 3px;
            margin-top: 39px;
            margin-right: 0;
          }
          .feedback__form{
            margin-left: 9px;
            .feedback__form-submit{
              padding-top: 1px;
            }
          }
          .feedback__main__social{
            margin-top: 104px;
          }
        }
      }
    }
  }

  .test__pages{
    header{
      .header__container{
        padding-top: 19px;
        .header__container-logo{
          padding-top: 9px;
          padding-left: 24px;
          img{
            width: 165px;
          }

        }
        .header__container__social{
          margin-right: 19px;
        }
        .header__navmenu{
          display: none;      
        }
      }
    }
    .navigation{
        padding-top: 31px;
        padding-left: 25px;
    }
    .test__pages__main{
      .test__pages__main__text{
        padding-top: 67px;
          padding-left: 86px;
      }
    }
    .test__content{
      .test__pages__test{
        margin-left: 22px;
      }
    } 
      .feedback__blog{
    .feedback__container{
      .feedback__main{
        .feedback__main-title{
          width: 564px;
          margin-top: 80px;
          line-height: 72px;
        }
        .feedback__main-text{
          margin-left: 3px;
          margin-top: 39px;
          margin-right: 0;
        }
        .feedback__form{
          margin-left: 9px;
          .feedback__form-submit{
            padding-top: 1px;
          }
        }
        .feedback__main__social{
          margin-top: 104px;
        }
      }
    }
  } 
  }
}*/