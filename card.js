const form = document.querySelector('.details-form');
const genrate = document.querySelector('.genrated-card');
const closediv = document.querySelector('.popupClose');
const menuList = document.querySelector('.dropdown-Ul');
const form2 =  document.querySelector('.details-from-2');
const button = document.querySelector('.button');

genrate.addEventListener('click',e=>{
  if(e.target.classList.contains('popupClose')){
    genrate.style.display = 'none';
  }
});


form.dropdownUl.addEventListener('change',e =>{
  console.log(e.target.value);
  selectedCard=e.target.value;
  form2.classList.remove("d-none");
  dropdownMenu(e.target.value,form2);
  button.classList.remove("d-none");

  form.addEventListener('submit',e =>{
    e.preventDefault();
    const image =form.EnterImageLink.value.trim();
    const title = form.InputTitle.value.trim();
    const text = form.EnterYourText.value.trim();
  
      if('simple card'===selectedCard.toLowerCase())
      {
        const webLink = form.EnterYourWebsiteLink.value.trim();
        simpleCard(image,title,text,webLink,genrate) ;
      }
      else if('card image top'===selectedCard.toLowerCase())
        cardImageTop(image,title,text,genrate);
      else if('kitchen sink'===selectedCard.toLowerCase())
      {
        const webLink = form.EnterYourWebsiteLink.value.trim();
        const webLink2 = form.EnterYour2ndWebsiteLink.value.trim();
        kitchenSink(image,title,text,webLink,webLink2,genrate);
      }
        


  genrate.style.display = 'block';
  scrollTo(0,0);
});





});









