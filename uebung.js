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
let my_list = ["Andrè", "Dennis", "Hans-Jürgen"]

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
    my_list = my_list.concat(textList)
    setListContent()
}
//Hausaufgabe10032025
function addItem() {
    // Den Wert des Eingabefelds abrufen
    const itemInput = document.getElementById('itemInput');
    const itemValue = itemInput.value;

    // Überprüfen, ob das Eingabefeld nicht leer ist
    if (itemValue.trim() !== '') {
        // Ein neues Listenelement erstellen
        const li = document.createElement('li');
        li.textContent = itemValue;

        // Das neue Element zur Liste hinzufügen
        const itemList = document.getElementById('itemList');
        my_list = my_list.appendChild(itemInput)

        // Das Eingabefeld zurücksetzen
        itemInput.value = '';
    } else {
        alert('Bitte geben Sie ein Item ein.');
    }

    setListContent()
}
// Löschen des Elementes
function deleteItem()
let lastElement = my_list.pop();

return lastElement
//








