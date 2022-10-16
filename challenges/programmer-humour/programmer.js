let photo = document.getElementById("humourPhoto");
function programmerHumour() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      photo.src = data.img;
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

programmerHumour();
