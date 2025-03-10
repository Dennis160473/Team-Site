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
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
