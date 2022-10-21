const url = `https://xkcd.now.sh/?comic=latest`;
let photo = document.getElementById("humourPhoto");
function programmerHumour() {
  fetch(url)
    .then((response) => response.json())
   .then((data) => {
      console.log(data);
      photo.src = data.img;
  })
    .catch( (err) =>  console.log(err));
}

programmerHumour();
