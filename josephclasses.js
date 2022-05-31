class Pen {
  constructor (name, type, clr) {
    this.name = name
    this.type = type
    this.clr = clr
  }
} // initialize an instantiated object
const pen1 = new Pen('Bic', 'ballpoint', 'blue')
const pen2 = new Pen('Fountain', 'ink', 'black')
console.log(pen1.name); console.log(pen2.type); console.log('----------------------------------------------\n')

class Perfume {
  constructor (name, gender, brand) {
    this.name = name
    this.gender = gender
    this.brand = brand
  }
} // initialize an instantiated object
const perfume1 = new Perfume('Rexona', 'male', 'showergel')
const perfume2 = new Perfume('Brute', 'male', 'Aftershave')
console.log(perfume1.name); console.log(perfume2.brand); console.log('----------------------------------------------\n')

class Toothpaste {
  constructor (name, expdate, color) {
    this.name = name
    this.expdate = expdate
    this.color = color
  }
} // initialize an instantiated object
const toothpaste1 = new Toothpaste('Colgate', 2022, 'green')
const toothpaste2 = new Toothpaste('ABC dent', 2024, 'red')
console.log(toothpaste1.name); console.log(toothpaste2.expdate); console.log('----------------------------------------------\n')

class Table {
  constructor (size, color, legs) {
    this.size = size
    this.color = color
    this.legs = legs
  }
} // initialize an instantiated object
const table1 = new Table('small', 'brown', 4)
const table2 = new Table('medium', 'black', 4)
console.log(table1.size); console.log(table2.legs); console.log('----------------------------------------------\n')

class Currency {
  constructor (name, country, clr, value) {
    this.name = name
    this.country = country
    this.value = value
    this.clr = clr
  }
} // initialize an instantiated object
const currency1 = new Currency('Shillings', 'uganda', 'green', 5000)
const currency2 = new Currency('Dollar', 'USA', 'green', 10)
console.log(currency1.name); console.log(currency2.country); console.log('----------------------------------------------\n')

class Shoes {
  constructor (gender, size, color) {
    this.gender = gender
    this.size = size
    this.color = color
  }
} // initialize an instantiated object
const Shoes1 = new Shoes('male', 40, 'black')
const Shoes2 = new Shoes('female', 34, 'red')
console.log(Shoes1.size); console.log(Shoes2.color); console.log('----------------------------------------------\n')

class Book {
  constructor (title, publishingdate, pages) {
    this.title = title
    this.publishingdate = publishingdate
    this.pages = pages
  }
} // initialize an instantiated object
const Book1 = new Book('Call of the Wild', 1991, 100)
const Book2 = new Book('Engineering Mathematics', 1982, 400)
console.log(Book2.title); console.log(Book1.publishingdate); console.log('----------------------------------------------\n')
