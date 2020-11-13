class Techika {
  constructor (name, power) {
  this.name = name;
  this.power = power;
  } 
    buttonOn() {
    console.log (`${this.name} находится в режиме "Включено"`);
    }
    buttonOff() {
    console.log(`${this.name} находится в режиме "Выключено"`);
    }
    showPower() {
    console.log(`Мощность ${this.name} составляет ${this.power} Ватт`);
    }
}
//создаем функцию конструктор музыкальных центров
class MusicCenter extends Techika {
  constructor(name, power, soundSystem) {
  super (name, power);
  this.soundSystem = soundSystem;
  }

 eject() {
    console.log (`Извлечь диск в ${this.name}`);
}
  cdChanger() {
    console.log(`Сменить диск в ${this.name}`);
}
 maxVolume(maxVolume) {
    console.log(`Максимальная громость звука в ${this.name} составляет ` +maxVolume+ ` дБ`);
}}

const musicCenter = new MusicCenter('Sharp', 50, 'DolbySurround 5.1');
musicCenter.numsOfDisk= 5;
  musicCenter.buttonOff(); //Sharp находится в режиме "Выключено"
  musicCenter.eject(); // Извлечь диск в Sharp
  musicCenter.showPower(); // Мощность Sharp составляет 50 Ватт
  musicCenter.cdChanger(); // Сменить диск в Sharp 
  musicCenter.maxVolume(50); // Мощность звукa в Sharp составляет 50 дБ
  console.log ('В музыкальном центре '+ musicCenter.name +' - звуковая система '+  musicCenter.soundSystem);
console.log('Количество дисков CDChanger '+ musicCenter.numsOfDisk);
  //В музыкальном центре Sharp - звуковая система DolbySurround 5.1

// create  coffeeMachine
class CoffeeMachine extends Techika{
  constructor(name, capacity, pressure ) {
  super (name);
  this.capacity=capacity;
  this.pressure=pressure;
  }

clean () {
    console.log (`В ${this.name} переполнена емкость, очистите бак`);
}
makeEspresso () {
    console.log(`Указать ${this.name} сделать "Эспрессо"`);
}
  temperature (temperature) {
        function getTempEnd (num)
    {
      //Оставляем две последние цифры от num
      let number = +num.toString().slice(-2);
      let tempEnd;
      //Если 2 последние цифры входят в диапазон от 11 до 14
      //Тогда подставляем окончание "ОВ" 
      if(number >= 10 && number <= 20) {
        tempEnd = "ов";
      }
      else
      { 
        number = +num.toString().slice(-1);
        if(number == 0) {
          tempEnd = "сов";
        }
        if(number == 1 ) {
          tempEnd = "с";
        }
        if(number > 1 ) {
          tempEnd = "са";
        }
        if(number > 4 ) {
          tempEnd = "сов";
        }
      }
      return console.log('Установить температуру воды  '+ num +' граду'+tempEnd);
  }
  getTempEnd(temperature);
}
}
const сoffeeMachine = new CoffeeMachine('Bosch', 50, 'DolbySurround 5.1');
  сoffeeMachine.color = 'черный';
  сoffeeMachine.buttonOn();  //находится в режиме "Включено"
  сoffeeMachine.clean(); //В Bosch переполнена емкость, очистите бак
  сoffeeMachine.makeEspresso(); //Указать Bosch сделать "Эспрессо"
  сoffeeMachine.temperature(99); // Установить температуру воды  99 градусов
  сoffeeMachine.temperature(54); //Установить температуру воды  54 градусa
  console.log('Вместимость '+ сoffeeMachine.name + ' составляет ' + сoffeeMachine.capacity +' чашек'); 
  //Вместимость Bosch составляет 50 чашек
  console.log('Цвет '+ сoffeeMachine.name+ ' - '+ сoffeeMachine.color);
//Цвет Bosch - черный

// Здесь уже меньше ошибок, чем в предыдущем задании и по большому счету всё сделано верно :) но есть небольшое замечание - у вас в родительском конструкторе записываются атрибуты name и power, и в дочернем классе MusicCenter вы передаете в super только name, но не power, что не очень логично, т.к. ниже вы точно так же, как в родительском конструкторе, записываете и power. В таком случае можно просто передать этот параметр в родительский конструктор и не писать один и тот же код несколько раз.