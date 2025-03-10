function onLogin() {
    const emailTI = document.getElementById("emailti").value;
    const password = document.getElementById("passwordti").value;
    
    alert(`Der Benutzer hat sich erfolgreich mit ${emailTI} und ${password} angemeldet`);
  }

function remove_second_element(liste){
  liste.splice(1, 1)
}
let mylist = [1, 2, 3, 4, 5]
let deleted_element = remove_second_element(mylist)




// Alternative
let spliced_list = mylist.splice(1, 1)

console.log(mylist)
console.log(spliced_list)