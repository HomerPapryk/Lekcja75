class Apple {
  constructor(name, color, sweetness) {
    this.name = name;
    this.color = color;
    this.sweetness = sweetness;
  }
}

const apple = new Apple("antonowka", "yellow", 5);

console.log(apple.name); // "antonowka"
console.log(apple.color); // "yellow"
console.log(apple.sweetness); // 5
