//Problem: Upon clicking on image, goes to dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $("<div id='overlay'></div>");
var $overlayContent = $("<div id='overlayContent'></div>");
var $slide = $("<div class='slide'></div>");
var $img = $('<img>');
var $caption = $('<p>');
var $leftButton = $("<div class='arrow-l'>-</div>");
var $rightButton = $("<div class='arrow-r'>+</div>");
var $Xbutton = $("<div class='xButton'>X</div>");
var $imgCont = $("<div class='imgCont'></div>");

var $index = 0;

var $galleryLength = $("#imageGallery a").length-1;


//2 Add and overlay
$imgCont.append($img);
$imgCont.append($caption);

$slide.append($imgCont);
$slide.append($leftButton);
$slide.append($rightButton);

$overlayContent.append($slide);


$overlay.append($Xbutton);
$overlay.append($overlayContent);

$('body').append($overlay);
  //an image
  
  //caption


  var updateImage = function(imageLocation, imageCaption){
      //update image
      $img.attr("src", imageLocation);
      $caption.text(imageCaption);

  }
  
  var arrows = function(left){

    

      //if right arrow is clicked, index increases by one
      if(!left){
        $index++;
      } else{
        //use true as argument to make index decrease
        //if left arrow is clicked, index decreases by one
        $index--;
      }

      //if at the end of gallery, jump to beginning
      if($index > $galleryLength){
        $index = 0;
      } 

      //if at beginning of gallery, jump to end
      if($index < 0){
        $index = $galleryLength;
      }

      //get new image using updated $index value
      var newImageSelected = $("#imageGallery a").get($index);
       var newImageLocation = $(newImageSelected).attr("href");
      var newImageCaption = $(newImageSelected).children("img").attr("alt");
      console.log($index);
      console.log(newImageSelected);

      //update overlay
      updateImage(newImageLocation, newImageCaption);
      if(!left){
        $imgCont.css("right", -350)
        $imgCont.hide().animate({
          display: "block",
          right: 0,
        }, 1000);
      } else {
          $imgCont.css("right", 350)
        $imgCont.hide().animate({
          display: "block",
          right: 0,
        }, 1000);
      } 


  }



//1. Capture the click event on a link to an image
$('#imageGallery a').click(function(event){
  event.preventDefault();
  var $href= $(this).attr("href");
  var $text= $(this).children('img').attr("alt");


  //$(this).parent() refers to the array of li's that the <a> tags are in
  $index = $(this).parent().index();

  console.log($index);
  console.log($href);
  console.log($text);
  //update overlay with the image linked in the link
  updateImage($href, $text);

  //Show the overlay
  $overlay.show();
  $img.hide().fadeIn("slow");
  
  //update overlay with the image linked in the link

    //Get child's alt attribute and set caption

});

  

$(".arrow-l").click(function(){
    arrows(true);
});

$(".arrow-r").click(function(){
    arrows();
});


//3 when overlay is clicked
$Xbutton.click(function(){
  $overlay.hide();
});

$('li p').each(function(index){
    var $pText = $(this).parent().find("img").attr("alt");
    $(this).text($pText);
    console.log($pText);
});


  //hide overlay