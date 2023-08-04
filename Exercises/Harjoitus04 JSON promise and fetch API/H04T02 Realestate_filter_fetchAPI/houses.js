let filterSize = false;
let filterPrice = false;

async function getHouses() {
    let url = 'houses.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderHouses() {
    let houses = await getHouses();
    let housediv = document.getElementById("houses");
    housediv.innerHTML = '';

    console.log("renderHouses " + filterSize);
    console.log("renderHouses " + filterPrice);

    houses.forEach(house => {
      
      if ((filterSize && parseInt(house.size) > 200) && (filterPrice && parseInt(house.price) > 1000000)){
        return;
      }
      else if (filterSize && parseInt(house.size) > 200){
        return;
      } else if (filterPrice && parseInt(house.price) > 1000000){
        return;
      }

      console.log("executing below statements");

      let housecontainer = document.createElement('div');
      housecontainer.className = 'houseContainer';

      let image = document.createElement("img");
      image.src = house.image;
      image.className = "houseImage";

      let header = document.createElement('p');
      header.className = 'header';
      header.innerHTML = house.address;

      let size = document.createElement("p");
      size.className = 'content'
      size.innerHTML = house.size;

      let info = document.createElement("p");
      info.className = 'content'
      info.innerHTML = house.text;

      let hinta = document.createElement("p");
      hinta.className = 'content'
      hinta.innerHTML = house.price;

      housecontainer.appendChild(image);
      housecontainer.appendChild(header);
      housecontainer.appendChild(size);
      housecontainer.appendChild(info);
      housecontainer.appendChild(hinta);
      housediv.appendChild(housecontainer);
        
    });
}

function updateCheckBox()
{
  if (filterSize === true)
     filterSize = true
  else   
     filterSize = false;

  if (filterPrice === true)
     filterPrice = true
  else   
     filterPrice = false;
}

function updateSizeFilter() {

  updateCheckBox();

  console.log("updateSizeFilter 1 "+filterSize);
  console.log("updateSizeFilter 1 "+filterPrice);
  
  filterSize = document.getElementById('sizeCheckbox').checked;
  
  console.log("updateSizeFilter 2 "+filterSize);
  console.log("updateSizeFilter 2 "+filterPrice);
    
  renderHouses();
}

function updatePriceFilter() {

  updateCheckBox();

  console.log("updatePriceFilter 1 "+filterSize);
  console.log("updatePriceFilter 1 "+filterPrice);
  
  filterPrice = document.getElementById('priceCheckbox').checked;

  console.log("updatePriceFilter 2 "+filterSize);
  console.log("updatePriceFilter 2 "+filterPrice);

  renderHouses();
}

renderHouses();