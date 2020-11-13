 function Technika (name, power) {
  this.name = name;
  this.power = power;
 }

Technika.prototype.buttonOn = function (){
  console.log (`${this.name} находится в режиме "Включено"`);
}

Technika.prototype.buttonOff = function (){
  console.log(`${this.name} находится в режиме "Выключено"`);
}

Technika.prototype.showPower = function (){
  console.log(`Мощность ${this.name} составляет ${this.power} Ватт`);
}

//создаем функцию конструктор музыкальных центров
function MusicCenter (name,power,soundSystem) {
  this.name =name;
  this.power = power;
  this.soundSystem = soundSystem;
  }

MusicCenter.prototype = new Technika();
  MusicCenter.prototype.eject = function () {
    console.log (`Извлечь диск в ${this.name}`);
};
  MusicCenter.prototype.cdChanger = function () {
    console.log(`Сменить диск в ${this.name}`);
};
  MusicCenter.prototype.maxVolume = function (maxVolume) {
    console.log(`Мощность звукa в ${this.name} составляет ` +maxVolume+ ` дБ`);
};

const musicCenter = new MusicCenter('Sharp', 50, 'DolbySurround 5.1') ;
  musicCenter.buttonOff(); //Sharp находится в режиме "Выключено"
  musicCenter.eject(); // Извлечь диск в Sharp
  musicCenter.showPower(); // Мощность Sharp составляет 50 Ватт
  musicCenter.cdChanger(); // Сменить диск в Sharp 
  musicCenter.maxVolume(50); // Мощность звукa в Sharp составляет 50 дБ
  console.log ('В музыкальном центре '+ musicCenter.name +' - звуковая система '+  musicCenter.soundSystem)
//В музыкальном центре Sharp - звуковая система DolbySurround 5.1

// create  coffeeMachine
function CoffeeMachine (name, capacity, pressure ) {
  this.name =name;
  this.capacity = capacity;
  this.pressure = pressure;
  }


CoffeeMachine.prototype = new Technika();
  CoffeeMachine.prototype.clean = function () {
    console.log (`В ${this.name} переполнена емкость, очистите бак`);
};
  CoffeeMachine.prototype.makeEspresso = function () {
    console.log(`Указать ${this.name} сделать "Эспрессо"`);
};
  CoffeeMachine.prototype.temperature = function (temperature) {
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

};

const сoffeeMachine = new CoffeeMachine('Bosch', 50, 'DolbySurround 5.1') ;
сoffeeMachine.buttonOn(); 
сoffeeMachine.clean(); 
сoffeeMachine.makeEspresso();
сoffeeMachine.temperature(99); 
console.log('Вместимость '+ сoffeeMachine.name + ' составляет ' + сoffeeMachine.capacity +' чашек'); 

// В задании есть несколько недочетов:
// 1. Методы в конструктор Technika записываются неправильно. Вы переписали целый объект constructor, записав туда свой объект с методами. Переписывать системные свойства небезопасно, потому что вы можете стереть важную информацию или функционал, заложенные в этот объект. Методы нужно добавлять к constructor, не переписывать целый объект. В конструкторах MusicCenter и CoffeeMachine это сделано правильно.
// 2. Прототип для MusicCenter и CoffeeMachine также задан не совсем правильно. Например, в этой строчке - MusicCenter.prototype = Object.create(Technika.prototype) - вы создаете пустой объект с прототипом Technika и записываете его в прототип объекта MusicCenter. Т.е. создается лишнее звено в цепочке прототипов (тот самый пустой объект)
// Исправила перечисленные ошибки в коде