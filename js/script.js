var positionY;
var scrollTop;


$( document ).ready(function() {
    //récupérer les dimension de la fenêtre :
    var hauteurFenetre;
    var largeurFenetre;
    scrollTop = $(window).scrollTop(); //récupérer la "quantité" de scroll
  
$('main').on('mousemove', function(){
  hauteurFenetre = $(window).height();
  largeurFenetre = $(window).width();
  console.log('bouge');
})
    
////vous pouvez rédiger vos modification ici !

$( '.pirag' ).on( 'mousemove', function() {

var valeur = mapValue(event.pageX,0,largeurFenetre,-100,100);
  $(this).css({
  'top' : (positionY-100),
  'left' : (event.pageX)-250,
})
});

$( '.pira' ).on( 'mousemove', function() {

  var valeur = mapValue(event.pageX,0,largeurFenetre,-100,100);
    $(this).css({
    'top' : (positionY-50),
    'left' : (event.pageX)-125,
  })
  });



$('main').on( 'click', function() {

  if(largeurFenetre<=800){
    console.log('petit');
    $('#base').css({
      'top' : '394px',
      'left' : '114px',
      })
      $('#Sommet').css({
        'top' : '158px',
        'left' : '174px',
        })
      $('#piedg').css({
      'top' : '1127px',
      'left' : '-118px',
      })
      $('#piedd').css({
        'top' : '1138px',
        'left' : '362px',
        })
      $('#piedcentre').css({
      'top' : '1194px',
      'left' : '114px',
      })
      $('#t1').css({
        'top' : '657px',
        'left' : '79px',
        })
      $('#t2').css({
        'top' : '690px',
        'left' : '199px',
        })
      $('#t3').css({
        'top' : '668px',
        'left' : '291px',
        })
      $('#t4').css({
          'top' : '809px',
          'left' : '-12px',
          })
      $('#t5').css({
        'top' : '707px',
        'left' : '75px',
        })
      $('#t6').css({
          'top' : '823px',
          'left' : '181px',
          })
      $('#t7').css({
            'top' : '774px',
            'left' : '266px',
            })
      $('#t8').css({
          'top' : '738px',
          'left' : '356px',
        })
        $('#t9').css({
          'top' : '938px',
          'left' : '-30px',
          })
        $('#t10').css({
          'top' : '942px',
          'left' : '118px',
          })
        $('#t11').css({
          'top' : '966px',
          'left' : '206px',
          })
        $('#t12').css({
            'top' : '1069px',
            'left' : '-22px',
            })
        $('#t13').css({
          'top' : '1041px',
          'left' : '56px',
          })
        $('#t14').css({
            'top' : '1099px',
            'left' : '186px',
            })
        $('#t15').css({
              'top' : '1049px',
              'left' : '280px',
              })
        $('#t16').css({
            'top' : '1006px',
            'left' : '366px',
          })
    
    }

  else if(800<largeurFenetre && largeurFenetre <1800){
    console.log('carre');
    $('#base').css({
      'top' : '394px',
      'left' : '314px',
      })
      $('#Sommet').css({
        'top' : '158px',
        'left' : '374px',
        })
      $('#piedg').css({
      'top' : '1127px',
      'left' : '82px',
      })
      $('#piedd').css({
        'top' : '1138px',
        'left' : '562px',
        })
      $('#piedcentre').css({
      'top' : '1194px',
      'left' : '314px',
      })
      $('#t1').css({
        'top' : '657px',
        'left' : '279px',
        })
      $('#t2').css({
        'top' : '690px',
        'left' : '399px',
        })
      $('#t3').css({
        'top' : '668px',
        'left' : '491px',
        })
      $('#t4').css({
          'top' : '809px',
          'left' : '188px',
          })
      $('#t5').css({
        'top' : '707px',
        'left' : '275px',
        })
      $('#t6').css({
          'top' : '823px',
          'left' : '381px',
          })
      $('#t7').css({
            'top' : '774px',
            'left' : '466px',
            })
      $('#t8').css({
          'top' : '738px',
          'left' : '556px',
        })
        $('#t9').css({
          'top' : '938px',
          'left' : '170px',
          })
        $('#t10').css({
          'top' : '942px',
          'left' : '318px',
          })
        $('#t11').css({
          'top' : '966px',
          'left' : '406px',
          })
        $('#t12').css({
            'top' : '1069px',
            'left' : '178px',
            })
        $('#t13').css({
          'top' : '1041px',
          'left' : '256px',
          })
        $('#t14').css({
            'top' : '1099px',
            'left' : '386px',
            })
        $('#t15').css({
              'top' : '1049px',
              'left' : '480px',
              })
        $('#t16').css({
            'top' : '1006px',
            'left' : '566px',
          })
    
    }

  else if (largeurFenetre>=1800){
    console.log('grand');
    $('#base').css({
      'top' : '394px',
      'left' : '414px',
      })
      $('#Sommet').css({
        'top' : '158px',
        'left' : '474px',
        })
      $('#piedg').css({
      'top' : '1127px',
      'left' : '182px',
      })
      $('#piedd').css({
        'top' : '1138px',
        'left' : '662px',
        })
      $('#piedcentre').css({
      'top' : '1194px',
      'left' : '414px',
      })
      $('#t1').css({
        'top' : '657px',
        'left' : '379px',
        })
      $('#t2').css({
        'top' : '690px',
        'left' : '499px',
        })
      $('#t3').css({
        'top' : '668px',
        'left' : '591px',
        })
      $('#t4').css({
          'top' : '809px',
          'left' : '288px',
          })
      $('#t5').css({
        'top' : '707px',
        'left' : '375px',
        })
      $('#t6').css({
          'top' : '823px',
          'left' : '481px',
          })
      $('#t7').css({
            'top' : '774px',
            'left' : '566px',
            })
      $('#t8').css({
          'top' : '738px',
          'left' : '656px',
        })
        $('#t9').css({
          'top' : '938px',
          'left' : '270px',
          })
        $('#t10').css({
          'top' : '942px',
          'left' : '418px',
          })
        $('#t11').css({
          'top' : '966px',
          'left' : '506px',
          })
        $('#t12').css({
            'top' : '1069px',
            'left' : '278px',
            })
        $('#t13').css({
          'top' : '1041px',
          'left' : '356px',
          })
        $('#t14').css({
            'top' : '1099px',
            'left' : '486px',
            })
        $('#t15').css({
              'top' : '1049px',
              'left' : '580px',
              })
        $('#t16').css({
            'top' : '1006px',
            'left' : '666px',
          })
    
  }
  
});

$( '.mont' ).on( 'mousedown', function() {

  $('.mk1').toggleClass('leve'),
  $('.mk1').removeClass('couche')
 
  });

  $( '.mont' ).on( 'mouseup', function() {

    $('.mk1').toggleClass('couche'),
    $('.mk1').removeClass('leve')

   
    });
  

//ici on utilise une classe déplacment qui sera appliquée à tous les éléménts HTML qui peuvent être déplacer
  /// décricre se qu'il se passe
/////Ci-dessous la fonction permettant de déclancher des modifications en fonction du scroll
$(window).on( 'scroll', function(){
    scrollTop = $(window).scrollTop(); //création d'une varible contenant la "quantitée de scroll"
 });



  $(window).on('mousemove', function(){
    positionY = event.pageY - scrollTop; // corection de la valeur de event.pageY pour qu'elle ne soit pas affectée par le scroll
  })



 //////// ///ne rien écrire après ceci
});



