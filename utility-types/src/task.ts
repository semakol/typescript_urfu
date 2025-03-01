interface Car {
	model: string;
	price: number;
	dynamic_1: Record<string, string>;
	dynamic_2: {
		[key: string]: number;
	};
	tuple: [string, number, string];
}

const add = (a: string | number, b: string | number): string | number => {
	if (typeof a === 'string' || typeof b === 'string') {
		return `${a}${b}`;
	}
	return a + b;
};

type CarKeys = keyof Car;

type PartialCar = Partial<Car>;
type ReadonlyCar = Readonly<Car>;
type PickCarModelAndPrice = Pick<Car, 'model' | 'price'>;
type OmitCarDynamic = Omit<Car, 'dynamic_1' | 'dynamic_2'>;

const carKeys: CarKeys[] = ['model', 'price', 'dynamic_1', 'dynamic_2', 'tuple'];
