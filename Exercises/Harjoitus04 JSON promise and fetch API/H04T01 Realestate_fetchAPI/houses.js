// Using a promise with an async/await construct
async function getHouses() {
  let url = 'houses.json';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
      console.log(error);
  }
}


async function renderHouses(){
  let houses = await getHouses();
  console.log(houses);

  let housediv = document.getElementById("houses");

  houses.forEach(house =>{

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

renderHouses(); 