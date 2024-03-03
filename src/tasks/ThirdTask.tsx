/**
 Задача: Создание приложения "Погода в мире" с использованием React и открытого API погоды.
 Требования к функционалу:

 1 - Поиск по городам:
 Пользователь должен иметь возможность ввести название города в текстовое поле
 и нажать кнопку "Показать погоду", чтобы увидеть погоду для этого города.

 2 - Отображение текущей погоды: Приложение должно отображать следующую информацию о текущей погоде:
 Температура в Цельсиях
 Влажность воздуха
 Скорость ветра
 Общее описание погоды (например, ясно, облачно, дождь и т.д.)

 3 - Прогноз погоды на три дня:
 Помимо текущей погоды, приложение должно показывать прогноз погоды на три дня вперёд,
 включая температуру и общее описание погоды.
 */

import React, {useState} from 'react';

const apiKey = 'db0a3ad742d2eeafc57281f093577798'
const getUrl = (city: string) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

export const ThirdTask = () => {
  const [weather, setWeather] = useState<any>(null);

  return (
    <div>
      code...

      {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].main}</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};
