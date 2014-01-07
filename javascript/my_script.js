$(document).ready( function () {
    // function changeCurrentSelection(clicked_object) {
    //   $( ".project" ).addClass("hidden")
    //   $( ".project" ).removeClass("selected")
    //   $( ".projects-navigation a" ).removeClass("selected")
    //   clicked_object.addClass("selected")
    //   clicked_object.removeClass("hidden")
    // };

     $( ".projects-navigation a" ).on("click", function( event ) {
       var clicked_project = $("." + $(this)[0].className)
       next_project_id = $(this)[0].id
       var next_project = $(".project" + next_project_id)
       
       $( ".project" ).hide()
       $( ".project" ).removeClass("selected")
       $( ".projects-navigation a" ).removeClass("selected")
       next_project.addClass("selected")
       
       var div_move = $("div.project" + next_project_id)
       div_move.slideDown( "slow" );
       
       
       // changeCurrentSelection(clicked_project)
     });
   
     $( ".projects_section > a.prev" ).on("click", function( event ) {
       var current_project_id = $("a.selected")[0].id
       var current_project = $("div.selected")
       
       var prev_project_id = (parseInt(current_project_id) - 1)
       prev_project_id = prev_project_id == 0 ?  3 : prev_project_id
       var prev_project = $(".project" + prev_project_id);
     
       current_project.animate({"left": "+=1000px"}, 300);
       setTimeout(function(){
           current_project.css({"left": "50%"})
           $( ".project" ).hide()
           $( ".project" ).removeClass("hidden")
           // 
           $( ".project" ).removeClass("selected")
           $( ".projects-navigation a" ).removeClass("selected")
           // 
           prev_project.addClass("selected")
           prev_project.show()
           // 
           var div_to_move = $("div.project" + prev_project_id)
           div_to_move.css({"left": "-=1000px"})
           div_to_move.animate({"left": "50%"}, 300);
           
       }, 301);
       
     });
   
     $( ".projects_section > a.next" ).on("click", function( event ) {
       var current_project_id = $("a.selected")[0].id
       var current_project = $("div.selected")
       
       var next_project_id = (parseInt(current_project_id) + 1)
       next_project_id = next_project_id == 4 ?  1 : next_project_id
       var next_project = $(".project" + next_project_id)
     
       current_project.animate({"left": "-=1000px"}, 300);
       setTimeout(function(){
           current_project.css({"left": "50%"})
           
           $( ".project" ).hide()
           $( ".project" ).removeClass("hidden")
           // 
           $( ".project" ).removeClass("selected")
           $( ".projects-navigation a" ).removeClass("selected")
           // 
           next_project.addClass("selected")
           next_project.show()
           // 
           var div_to_move = $("div.project" + next_project_id)
           div_to_move.css({"left": "+=1000px"})
           div_to_move.animate({"left": "50%"}, 300);
           
       }, 300);

     });
     

     
});