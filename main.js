const track = document.querySelector("#gallery-track");
const images = track.querySelectorAll("img");

let firstSetWidth = 0;
const gap = 100; // тот же gap, что в CSS

// считаем ширину первого набора картинок с gap
for (let i = 0; i < images.length / 2; i++) {
  firstSetWidth += images[i].getBoundingClientRect().width + gap;
}

// начинаем с отрицательной позиции (чтобы первый набор ушёл за экран)
let position = -firstSetWidth; 
const speed = 1; // скорость движения

function animate() {
    position += speed; // движение вправо

    // когда первый набор полностью ушёл за правый край — сбрасываем
    if (position >= 0) {
        position = -firstSetWidth;
    }

    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
}

animate();

function initMap() {
  // Центр карты
  const center = { lat: 56.164315139587146, lng: 10.20291423747093 }; // Орхус

  // Создание карты
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: center,
  });

  // Координаты маркеров
  const locations = [
    { lat: 56.15268450723346, lng: 10.206217824210148 }, // Kilo Vintage Sale
    { lat: 56.158505169784, lng: 10.198166510592666 },  // Genbrug1Aarhus
    { lat: 56.16054467019196, lng: 10.208665536385066 }  // Prag
  ];

  // Добавление маркеров
  locations.forEach(loc => {
    new google.maps.Marker({
      position: loc,
      map: map,
    });
  });
}