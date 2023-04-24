
const loadword=async(search)=>{

  const url= `https://apurba3036.github.io/short-name-api/generated%20(1).json`
   const res= await fetch(url);
   const data= await res.json();
    displayword(data[search])
   
 } 

// loadword('AA')


const displayword=(data)=>{
const wordcontainer=document.getElementById('wordcontainer')
console.log(data);
wordcontainer.innerHTML=`
    <p class="list-group-item">Full Name: <span class="span">${data}</span></p>
    `
}

const searchtext=()=>{

    const search=(document.getElementById('search').value);
    loadword(search)
}

var input = document.getElementById("search");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button-addon2").click();
  }
});


