var arr = [
  { naame: "optimus prime", desc: "localStorageguyfyuffyg", btn: "friend" },
  { naame: "light yagami", desc: "localStorage", btn: "friend" },
  { naame: "eren yeger", desc: "localStorage", btn: "stranger" },
  { naame: "rasputin", desc: "localStorage", btn: "friend" }
];


document.querySelector("#cards").addEventListener("click",function(dets){
  
  arr[dets.target.id].btn==="friend" ? arr[dets.target.id].btn="stranger" : arr[dets.target.id].btn="friend";
  // console.log(arr[dets.target.id].btn);
  showcards();
})

function showcards() {
  var htmll = "";
  arr.forEach(function (data,index) {

    htmll += `<div id="card">
        <h1>${data.naame}</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod
        adipisci earum non nesciunt optio molestias tempore et
        necessitatibus.
        </p>
        <p class="status">${data.btn}</p>
        <button id="${index}">${data.btn === "friend" ? "remove" : "add"}</button>
      </div>` 
  });

  document.querySelector("#cards").innerHTML = htmll;
};

showcards();




