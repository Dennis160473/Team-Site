// ruft ID des Users auf und vergleicht Daten. Gibt Boolean True zurück.
function onLogin() {
    const emailTI = document.getElementById("emailti").value;
    const password = document.getElementById("passwordti").value;
    
    alert(`Der Benutzer hat sich erfolgreich mit ${emailTI} und ${password} angemeldet`);
  }
// Löscht definierte Elemente aus dem Array
function remove_second_element(liste){
  liste.splice(1, 1)
}
let mylist = [1, 2, 3, 4, 5]
let deleted_element = remove_second_element(mylist)
// Alternative zum Löschen
let spliced_list = mylist.splice(1, 1)

console.log(mylist)
console.log(spliced_list)
// filtern des Arrays
const my_ages = [32, 33, 16, 40];
const result = my_ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
// Alternative
my_ages_new = [17, 16, 4, 19, 73, 23, 5, 74]
let filtered_list = my_ages_new.filter((elem) => elem > 2)

console.log(filtered_list)
// Map des Arrays
let mapped_list = my_ages_new.map((elem) => `<p>${elem}</p>`)

console.log(mapped_list)

let stringMappedList = mapped_list.toString().replaceAll(",","")
console.log(stringMappedList)
// neue Liste anlegen und ausgeben
function createHTMLList(liste){

  let htmlElements = liste.map((listItem) => `<li>${listItem}</li>`)
  //console.log(htmlElements)
  let flattenedList = htmlElements.join("")
  //console.log(flattenedList)
  let ergebnis = `<ul>${flattenedList}</ul>`
  return ergebnis
}

