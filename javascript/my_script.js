$(document).ready( function () {
    function changeCurrentSelection(clicked_object) {
      $( ".project" ).addClass("hidden")
      $( ".project" ).removeClass("selected")
      $( ".projects-navigation a" ).removeClass("selected")
      clicked_object.addClass("selected")
      clicked_object.removeClass("hidden")
    };

     $( ".projects-navigation a" ).on("click", function( event ) {
       var clicked_project = $("." + $(this)[0].className)
     
       changeCurrentSelection(clicked_project)
     });
   
     $( ".projects_section > a.prev" ).on("click", function( event ) {
       var current_project_id = $("a.selected")[0].id
       var next_project_id = (parseInt(current_project_id) - 1)
       next_project_id = next_project_id == 0 ?  3 : next_project_id
       var prev_project = $(".project" + next_project_id);
     
       changeCurrentSelection(prev_project);
     });
   
     $( ".projects_section > a.next" ).on("click", function( event ) {
       var current_project_id = $("a.selected")[0].id
       var next_project_id = (parseInt(current_project_id) + 1)
       next_project_id = next_project_id == 4 ?  1 : next_project_id
       var next_project = $(".project" + next_project_id)
     
       changeCurrentSelection(next_project);
     });
});