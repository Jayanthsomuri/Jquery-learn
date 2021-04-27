$(document).ready(function () {
    //your jquery code here
    console.log("We are Using Jquery")
    //   $('selector').action()//syntax
    // $('p').click();//click on all the p
    // This is an example of Element selector
    // $('p').dblclick(function () {
    //     console.log('you double clicked on P', this);

    // });
    // $('p').mouseenter(function () {
    //     console.log('you hovered on P', this);

    // });
    // $('p').hover(function () {
    //     console.log('you entereted on P', this);

    //});
    // There are Three main types of selectors in Jquery
    // 1.element selectors
    // 2.id selectors
    // 3.class selectors 
    // 1. Element selector -  This is an example of element selector which clicks on all p
    // $('p').click(); 
    //2.Id selector -This is an example of Id selector
    //$('#second').click();
    //3.Class selector -This is an example of Id selector
    //$('.odd').click();

    //Other selectors
    //$('*').click()//clicks on all the elements
    //$('p.odd').click()//clicks on all the class elements in the paragraph with class name='odd'
    // $('p:first').click() selects all the first elements in the paragraph

    //Events in Jquery
    // Mouse events= click,double click,mouseenter,mouseleave
    // keyboard events= keypress,keydown,MediaKeyStatusMap
    // Form events= submit,change,focus,blur
    // document/window events=load,resize,scroll,unload
    // Demonstrating the On method
    $('p').on({
        click: function () {
            console.log("thanks for coming", this);
        },
        mouseleave: function () {
            console.log("mouse leave")
        }
    })
    // $('#wiki').hide(1000,function(){
    //     console.log("hidden")
    // })
    // $('#wiki').show(1000,function(){
    //     console.log("Im back")
    // })
    $("#but").click(function () {
        // $("#wiki").toggle(1000,function(){
        //     console.log("Shown")
        // })
        // $("#wiki").fadeOut(1000, function () {
        //     console.log("Shown")
        // })
        // $("#wiki").fadeToggle(1000,function(){
        //     console.log("Shown")
        // })
        //  $("#wiki").fadeTo(1000,function(){
        //      console.log("Shown")
        //})

        //fadeOut
        //toggle
        //fadeToggle
        //fadeTo
        //Slide methods-speed and callback method is optina
        // $('#wiki').slideDown(1000)
        //$('#wiki').slideUp(1000)
        // $('#wiki').slideToggle(1000)
        //Animate function in Jquery
        // $('#wiki').animate({
        //     opacity:0.3,
        //     height:'150px',
        //     width:'350px'
        // },2000)
        // $('#wiki').animate({ opacity: 0.3 }, 4000);
        // $('#wiki').animate({ opacity: 0.9 }, 1000);
        // $('#wiki').animate({ width: '300px' }, 12000);
    })
    //Forms data
    // $("#ta").val("this is Jayanth somuri")
    //$("#ta").html("this is Jayanth somuri")
    //$("#inp").val("this is Jayanth somuri")
    //$("#inp").empty()
    //$("#wiki").text("this is text")
    //$("#wiki").remove()
    //$("#wiki").addclass('Myclass')//adds class from the console
    //$("#wiki").removeClass('Myclass')
    //$('#wiki').css('background-color','red')

    //AJAX using Jquery!!
    //$.get('https://code.jquery.com/jquery-3.6.0.js')
    //$.get('https://code.jquery.com/jquery-3.6.0.js',function(data,status){alert(data);})
    //$.get('https://code.jquery.com/jquery-3.6.0.js',function(data,status){alert(status);}) 
    //post('https://code.jquery.com/jquery-3.6.0.js',
    // {name:'jayanth',channel:'code with Jay'},
//     function(data,status){alert(status)});
// });
