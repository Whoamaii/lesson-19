fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
)
  .then((response) => response.json())
  .then(
    (user) => (
      (document.querySelector("div").textContent = "Місто: " + user.name),
      (document.querySelector("p").textContent =
        "Температура повітря: " + user.main.temp + " C°"),
      (document.querySelector(".pressure").textContent =
        "Тиск: " + user.main.pressure),
      (document.querySelector(".description").textContent =
        "Погодні умови: " + user.weather[0].description),
      (document.querySelector(".humidity").textContent =
        "Вологість: " + user.main.humidity + " φ"),
      (document.querySelector(".speed-wind").textContent =
        "Швидкість вітру: " + user.wind.speed + " м/с"),
      (document.querySelector(".deg").textContent =
        "Напрям у градусах: " + user.wind.deg + "°")
    )
  );

fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
)
  .then((response) => response.json())
  .then((item) => {
    const img_url_current = item.weather[0].icon + ".png";
    const img_url = "http://openweathermap.org/img/w/";
    document
      .querySelector("img")
      .setAttribute("src", img_url + img_url_current);
  });
