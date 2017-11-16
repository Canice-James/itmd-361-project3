
window.onload = function() {

  var longParagraph = document.getElementsByClassName("content-long-paragraph");
  
  
  if (longParagraph[0].innerText.length > 120){
    var charCount = longParagraph[0].innerText.length;
    longParagraph[0].onclick = function(){
      toggleReadMore(longParagraph[0]);
    }
  }

}

function toggleReadMore(element){
}