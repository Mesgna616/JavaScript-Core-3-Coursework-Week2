const parentContainer = document.getElementById("photoContainer");
const dogPhotoAdder = document.getElementById("btnAdd");
function dogPhotos() {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let dogImageList = document.createElement("li");

      let dogImage = document.createElement("img");
      dogImageList.className = "ImageList";
      dogImage.style.width = "220px";
      dogImage.style.height = "200px";
      dogImage.src = data.message;
      dogImageList.appendChild(dogImage);
      parentContainer.appendChild(dogImageList);
      console.log(dogImage);
    })
    .catch(function (error) {
      console.log(error);
    });
}
dogPhotoAdder.addEventListener("click", dogPhotos);
window.onload = dogPhotos;
