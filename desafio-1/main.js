class User {

    constructor({ firstName, lastName, books, pets }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets;
    }

    getFullName = () => `${this.firstName}  ${this.lastName}`;

    addPets = (pet) => this.pets.push(pet);

    countPets = () => this.pets.length;

    addBook = (bookName, author) => this.books.push({ bookName, author });

    getBookName = () => {
        const bookNameList = [];
        this.books.map((book) => bookNameList.push(book.bookName));
        return bookNameList;
    }

}

let data = {
    firstName: 'Luciano Javier',
    lastName: 'Costa Peralta',
    books: [
        { bookName: 'js', author: 'Oscar' },
        { bookName: 'c++', author: 'Luciano' },
    ],
    pets: ['Cat', 'Dog']

}

let users = new User(data);

console.log(users.getFullName());

users.addPets('monky');

console.log(users.countPets());

users.addBook('python', 'Kevin');

console.log(users.getBookName());
