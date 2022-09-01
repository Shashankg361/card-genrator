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
  
  cardGenrating(image,title,text,selectedCard,genrate);


  genrate.style.display = 'block';
  console.log('working');
});





