
window.onload = function() {

  //Gets Expandable Paragraphs and Toggle elements
  var longParagraph = document.getElementsByClassName("content-long-paragraph");
  var readMoreButton = document.getElementsByClassName("read-more-button");
  
  for (var i = 0; i < longParagraph.length; i++){
    if (longParagraph[i].innerText.length > 120){
      if (readMoreButton[i] != null){

        //Collapses all paragraphs by default
        collapseElement(longParagraph[i], readMoreButton[i]);

        //Indexes Expandable Paragraphs and Toggle elements
        longParagraph[i].index = i;
        readMoreButton[i].index = i;

        //Onclick listener for paragraph toggle
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