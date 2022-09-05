function dropdownMenu(menuValue,form2)
{
    if(menuValue === 'Simple Card')
    simpleCardForm(form2);
    else if(menuValue === 'Card image top')
    cardImageTopForm(form2);
    else if (menuValue === 'Kitchen sink')
    kitchenSinkForm(form2);
}


function simpleCardForm(form2){
    const simpleFrom = `<div class="mb-3">
    <label for="EnterImageLink" class="form-label">Enter image Link</label>
    <input type="text" class="form-control" id="EnterImageLink">
  </div>
<div class="mb-3">
  <label for="InputTitle" class="form-label">Enter your title</label>
  <input type="text" class="form-control" id="InputTitle" >
</div>
<div class="mb-3">
  <label for="EnterYourText" class="form-label">EnterText</label>
  <input type="text" class="form-control" id="EnterYourText">
</div>
<div class="mb-3">
    <label for="EnterYourWebsiteLink" class="form-label">Enter Your Website link</label>
    <input type="text" class="form-control" id="EnterYourWebsiteLink">
</div>
<div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1">
  <label class="form-check-label" for="exampleCheck1">Are confirmed with information </label>
</div>
`
form2.innerHTML = simpleFrom ;
};

function cardImageTopForm(form2){
  const cardImageTopFrom = `<div class="mb-3">
    <label for="EnterImageLink" class="form-label">Enter image Link</label>
    <input type="text" class="form-control" id="EnterImageLink">
  </div>
<div class="mb-3">
  <label for="InputTitle" class="form-label">Enter your title</label>
  <input type="text" class="form-control" id="InputTitle" >
</div>
<div class="mb-3">
  <label for="EnterYourText" class="form-label">EnterText</label>
  <input type="text" class="form-control" id="EnterYourText">
</div>
<div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1">
  <label class="form-check-label" for="exampleCheck1">Are confirmed with information </label>
</div>
`
form2.innerHTML = cardImageTopFrom ;
};

function kitchenSinkForm(form2){
  const kitchenSinkFrom = `<div class="mb-3">
    <label for="EnterImageLink" class="form-label">Enter image Link</label>
    <input type="text" class="form-control" id="EnterImageLink">
  </div>
<div class="mb-3">
  <label for="InputTitle" class="form-label">Enter your title</label>
  <input type="text" class="form-control" id="InputTitle" >
</div>
<div class="mb-3">
  <label for="EnterYourText" class="form-label">EnterText</label>
  <input type="text" class="form-control" id="EnterYourText">
</div>
<div class="mb-3">
    <label for="EnterYourWebsiteLink" class="form-label">Enter Your Website link</label>
    <input type="text" class="form-control" id="EnterYourWebsiteLink">
</div>
<div class="mb-3">
    <label for="EnterYour2ndWebsiteLink" class="form-label">Enter Your second Website link</label>
    <input type="text" class="form-control" id="EnterYour2ndWebsiteLink">
</div>
<div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1">
  <label class="form-check-label" for="exampleCheck1">Are confirmed with information </label>
</div>
`
form2.innerHTML = kitchenSinkFrom ;
};










