interface User {
	id: number;
	userName: string;
	surname: string;
	coins: number;
	age: number;
	addCoin(amount: number): void;
	removeCoin(amount: number): void;
	getCoins(): string;
	middleName?: string;
	readonly createdAt: Date; 
}

interface ExtendedUser extends User {
	email: string;
}

interface Admin extends ExtendedUser {
	role: string;
}

class AdminUser implements Admin {
	id: number;
	userName: string;
	surname: string;
	coins: number;
	age: number;
	middleName?: string;
	readonly createdAt: Date;
	email: string;
	role: string;

	constructor(id: number, userName: string, surname: string, coins: number, age: number, createdAt: Date, email: string, role: string) {
		this.id = id;
		this.userName = userName;
		this.surname = surname;
		this.coins = coins;
		this.age = age;
		this.createdAt = createdAt;
		this.email = email;
		this.role = role;
	}

	addCoin(amount: number): void {
		this.coins += amount;
	}

	removeCoin(amount: number): void {
		this.coins -= amount;
	}

	getCoins(): string {
		return `Количество монет ${this.coins}`;
	}
}

const ivan: Admin = {
	id: 1,
	userName: "Ivan",
	surname: "Ivanov",
	coins: 5,
	age: 25,
    role: "manager",
    email: "ivan@email.ru",
	addCoin(amount) {
		this.coins += amount;
	},
	removeCoin(amount) {
		this.coins -= amount;
	},
	getCoins() {
		return `Количество монет ${this.coins}`;
	},
	createdAt: new Date(),
};

let misha = new AdminUser(2, "Misha", "Mishin", 10, 30, new Date(), "misha@email.ru", "admin");