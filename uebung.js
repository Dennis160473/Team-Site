// neue Liste anlegen und ausgeben
function createHTMLList(liste){

    let htmlElements = liste.map((listItem) => `<li>${listItem}</li>`)
    //console.log(htmlElements)
    let flattenedList = htmlElements.join("")
    //console.log(flattenedList)
    let ergebnis = `<ul>${flattenedList}</ul>`
    return ergebnis
  }
// Alternative
let my_list = ["Lukas", "Kevin", "Suheib"]

function createHTMLList(liste){

    let htmlElements = liste.map((listItem) => `<li>${listItem}</li>`)
    //console.log(htmlElements)
    let flattenedList = htmlElements.join("")
    //console.log(flattenedList)
    let ergebnis = `<ul>${flattenedList}</ul>`
    return ergebnis
}

function setListContent(){
    let listDiv = document.getElementById("liste")
    let content = createHTMLList(my_list)
    listDiv.innerHTML = content
}
function setUserInputList(){
    let userInput = document.getElementById("UserInput")
    let text = userInput.value
    let textList = text.split(",")
    my_list = textList
    setListContent()
}



