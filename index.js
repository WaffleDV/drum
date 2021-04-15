$(document).keydown(function(event) {
  if (["w","a","s","d","j","k","l"].includes(event.key)) {
    var equalsButton = document.querySelector("." + event.key);
    equalsButton.click();
  }
});

$(".drum").click(function () {
  var img = this,
  style = img.currentStyle || window.getComputedStyle(img, false),
  bg_image_url = style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
  bg_image_url = bg_image_url.split("images/").pop();
  bg_image_url = bg_image_url.replace(".png","");

  img.classList.add("pressed");
  var audio = new Audio("sounds/" + bg_image_url + ".mp3");
  audio.play();

  setTimeout(function() {
    img.classList.remove("pressed");
  }, 100);
});
