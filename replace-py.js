
// function outerFunction() {
//     let outerVariable = 'I am outer';
  
//     function innerFunction() {
//       console.log(outerVariable); // Функция innerFunction имеет доступ к переменной outerVariable из внешней области видимости
//     }
  
//     return innerFunction;
//   }
  
//   const innerFunc = outerFunction(); // Внутренняя функция innerFunction возвращается из внешней функции outerFunction
  
//   innerFunc(); 







//   // Вызываем функцию загрузки данных
//   fetchData()
//     .then(data => {
//       console.log(data); // Выводим данные в консоль
//     })
//     .catch(error => {
//       console.error('Ошибка:', error); // Обрабатываем ошибку, если она возникла
//     });








async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error; // Повторное бросание ошибки для обработки на уровне вызывающего кода
    }
  }








var str = 'String'
var strIN =  new String(str);




