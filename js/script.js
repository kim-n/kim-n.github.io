// $(function() {
   //  $(window).on("scroll", function(e){
//         $aboutDIV = $(".about")
//         $projectsDIV = $(".projects")
//         $contactDIV = $(".contact")
//         
//         var scrollTop = $(this).scrollTop();
//         var aboutText = "KIMBERLY NARINE";
//         var projectsText = "PROJECTS"
//         var contactText = "CONTACT"
//         
//         console.log()
//         
//         if(scrollTop > $aboutDIV.offset().top && scrollTop < $projectsDIV.offset().top){
//             $(".nav-about").css("float", "right");
//             $(".nav-projects").css("float", "right");
//         } 
//         else if (scrollTop > $projectsDIV.offset().top && scrollTop < $contactDIV.offset().top){
//             console.log("PROJECT")
//             $(".nav-about").css("float", "left");
//             $(".nav-projects").css("float", "right");
//             $(".nav-contact").css("float", "right");
//             
//             // $(".nav-contact").css("float", "left");
//             // $(".nav-contact").css("margin-right", "0px");
//             // 
//             // $(".nav-projects").css("margin-right", ($(this).scrollTop() - 336) + "px");
//         } 
//         else if (scrollTop > $contactDIV.offset().top && scrollTop < $("body").height() ) {
//             console.log("CONTACT")
//             $(".nav-projects").css("float", "left");
//             $(".nav-contact").css("float", "right");
//         }
//         // console.log($(this).scrollTop())
//         //240
//         //1000
//         // $title = $(".main-navigation > .title")
//         // console.log($title.text($title.text().slice(0, -1)))
//     })
// 
// });


// $(document).ready(function() {
//     $('#picture').mouseover( function () {
//         console.log($(this).attr("src"))
//         $(this).css({"color": "lightblue"})
// 
//     });
//     
//     $('#picture').mouseleave( function () {
//         $(this).css({"color": "rgb(53, 212, 164)"})
//     });
//     
//     $('.alternate-color').mouseover( function () {
//         $(this).css({"color": "lightblue"})
// 
//     });
//     
//     $('.alternate-color').mouseleave( function () {
//         $(this).css({"color": "rgb(53, 212, 164)"})
//     });
//     
//     
//     $(".projects-nav a").on("click", function(event) {
//         event.preventDefault()
//         var clicked_project = $("." + $(this)[0].className)
//         next_project_id = $(this)[0].id
//         var next_project = $(".project" + next_project_id)
// 
//         $(".project").hide()
//         $(".project").removeClass("selected")
//         $(".projects-nav a").removeClass("selected")
//         next_project.addClass("selected")
// 
//         var div_move = $("div.project" + next_project_id)
//         div_move.slideDown("slow");
// 
// 
//         // changeCurrentSelection(clicked_project)
//     });
// 
//     $(".projects > a.prev").on("click", function(event) {
// 
//         event.preventDefault()
//         var current_project_id = $("a.selected")[0].id
//         var current_project = $("div.selected")
// 
//         var prev_project_id = (parseInt(current_project_id) - 1)
//         prev_project_id = prev_project_id == 0 ? 3 : prev_project_id
//         var prev_project = $(".project" + prev_project_id);
// 
//         current_project.animate({
//             "left": "+=1000px"
//         }, 300);
//         setTimeout(function() {
//             current_project.css({
//                 "left": "50%"
//             })
//             $(".project").hide()
//             $(".project").removeClass("hidden")
//             // 
//             $(".project").removeClass("selected")
//             $(".projects-nav a").removeClass("selected")
//             // 
//             prev_project.addClass("selected")
//             prev_project.show()
//             // 
//             var div_to_move = $("div.project" + prev_project_id)
//             div_to_move.css({
//                 "left": "-=1000px"
//             })
//             div_to_move.animate({
//                 "left": "50%"
//             }, 300);
// 
//         }, 301);
// 
//     });
// 
//     $(".projects > a.next").on("click", function(event) {
// 
//         event.preventDefault()
//         var current_project_id = $("a.selected")[0].id
//         var current_project = $("div.selected")
// 
//         var next_project_id = (parseInt(current_project_id) + 1)
//         next_project_id = next_project_id == 4 ? 1 : next_project_id
//         var next_project = $(".project" + next_project_id)
// 
//         current_project.animate({
//             "left": "-=1000px"
//         }, 300);
//         setTimeout(function() {
//             current_project.css({
//                 "left": "50%"
//             })
// 
//             $(".project").hide()
//             $(".project").removeClass("hidden")
//             // 
//             $(".project").removeClass("selected")
//             $(".projects-nav a").removeClass("selected")
//             // 
//             next_project.addClass("selected")
//             next_project.show()
//             // 
//             var div_to_move = $("div.project" + next_project_id)
//             div_to_move.css({
//                 "left": "+=1000px"
//             })
//             div_to_move.animate({
//                 "left": "50%"
//             }, 300);
// 
//         }, 300);
// 
//     });
// 
// 
// 
// });
