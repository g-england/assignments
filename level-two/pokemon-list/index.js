const xhr = new XMLHttpRequest();


xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText;
        const data = JSON.parse(JSONdata);
        showData(data)
    }
}

function showData(arr){
    for (let i = 0; i < arr.objects[0].pokemon.length; i++){
        const newElement = document.createElement("p")
        newElement.innerHTML = arr.objects[0].pokemon[i].name
        document.body.appendChild(newElement)
        //const newElement2 = document.createElement("p")
        //newElement2.innerHTML = arr.objects[0].pokemon[i].resource_uri
        //document.body.appendChild(newElement2)
    }

}
