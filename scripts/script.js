
window.onload = function() {

  var longParagraph = document.getElementsByClassName("content-long-paragraph");
  var readMoreButton = document.getElementsByClassName("read-more-button");
  
  for (var i = 0; i < longParagraph.length; i++){
    if (longParagraph[i].innerText.length > 120){
      if (readMoreButton[i] != null){
        collapseElement(longParagraph[i], readMoreButton[i]);
        longParagraph[i].index = i;
        readMoreButton[i].index = i;
        readMoreButton[i].onclick = function(){
          toggleReadMore(longParagraph[this.index], readMoreButton[this.index]);
        }
      }
    }
  }

}

function collapseElement(targetElement, toggleElement){
  if (targetElement.classList.contains("expanded"))
    targetElement.classList.remove("expanded");
  if (!targetElement.classList.contains("not-expanded"))
    targetElement.classList.add("not-expanded");

  toggleElement.innerText = "Show More";
}

function toggleReadMore(targetElement, toggleElement){
  targetElement.classList.toggle("expanded");
  targetElement.classList.toggle("not-expanded");

  if (toggleElement.innerText == "Show More")
    toggleElement.innerText = "Show Less";
  else if (toggleElement.innerText == "Show Less")
    toggleElement.innerText = "Show More";
}