var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    
    console.log(myObj.Components);
  }
};
xmlhttp.open("GET", "__navigation.json", true);
xmlhttp.send();
