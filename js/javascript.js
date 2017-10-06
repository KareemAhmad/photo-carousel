//10 photos, SKIP goes to next photo, BACK goes to previous photo

//DECLARE VARIRABLES
var photoShown= ["images/troy1.jpg", "images/troy2.jpg", "images/troy3.jpg", "images/troy4.jpg", "images/troy5.jpg", "images/troy6.jpg", "images/troy7.jpg", "images/troy8.jpg", "images/troy9.jpg", "images/troy10.jpg"];
var count= 0;
//CHANGING THE IMG SRC ATTRIBUTE-CLICK EVENT

  //$("img").attr("src",photoShown[0]);
  $("#skipButton").on("click", function(){
    count++;
    $("img").attr("src",photoShown[count]);
    if(count>photoShown.length){
      count= 0;
    }
  });

  $("#backButton").on("click", function(){
    count--;
    $("img").attr("src",photoShown[count]);
    if(count<0){
      count= photoShown.length;
    }
  });




//document.getElementById('photoAlbum').onclick = skip;
//document.getElementById('photoAlbum').onclick = back;
