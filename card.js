const form = document.querySelector('.details-form');
const genrate = document.querySelector('.genrated-card');
const closediv = document.querySelector('.popupClose');

genrate.addEventListener('click',e=>{
  if(e.target.classList.contains('popupClose')){
    genrate.style.display = 'none';
    console.log('working');
  }
  
});


form.addEventListener('submit',e =>{
  e.preventDefault();
  const image =form.EnterImageLink.value.trim();
  const title = form.InputTitle.value.trim();
  const text = form.EnterYourText.value.trim();
  const selectedCard = form.EnterTitle.value.trim();
  
  if('simple card'===selectedCard.toLowerCase())
    simpleCard(image,title,text) ;
  else if('card image top'===selectedCard.toLowerCase())
    cardImageTop(image,title,text);
  else if('kitchen sink'===selectedCard.toLowerCase())
    kitchenSink(image,title,text);
  genrate.style.display = 'block';
});




const simpleCard = ( image , title , text )=>{
const html =  ` <div class="card genrated" style="width: 18rem;">
                  <div><i class="fa-solid fa-xmark popupClose"></i></div>
                  <img src="${image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${text}.</p>
                    <a href="#" class="btn btn-danger">Go somewhere</a>
                  </div>
                </div>`

  genrate.innerHTML = html;
}

const cardImageTop = ( image , title , text )=>{
const html = `<div class="card genrated" style="width: 18rem;">
<div><i class="fa-solid fa-xmark popupClose"></i></div>
<img src="${image}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${title}</h5>
  <p class="card-text">${text}.</p>
</div>
</div>
`
genrate.innerHTML = html;

}
const kitchenSink = ( image , title , text )=>{
const html =`<div class="card genrated" style="width: 18rem;">
<div><i class="fa-solid fa-xmark popupClose"></i></div>
<img src="${image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${title}</h5>
  <p class="card-text">${text}.</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
<div class="card-body">
  <a href="#" class="btn btn-danger">Card link</a>
  <a href="#" class="btn btn-danger">Another link</a>
</div>
</div>`
genrate.innerHTML = html;
}



