import { validateCityName } from './validate/validateCity';
import { validateDate } from './validate/validateDate';

describe('Валидация даты', () => {
    test('должна пропускать дату в формате ДД.ММ.ГГГГ', () => {
        expect(validateDate('25.12.2025')).toEqual({ isValid: true, message: 'Date is valid.' });
    });

    test('не должна пропускать дату со спецсимволами', () => {
        expect(validateDate('25/12/2025')).toEqual({ isValid: false, message: 'Date contains invalid characters.' });
    });

    test('не должна пропускать дату с буквенными значениями', () => {
        expect(validateDate('25.Dec.2025')).toEqual({ isValid: false, message: 'Date contains invalid characters.' });
    });

    test('должна выдавать предупреждение, если дата раньше текущей', () => {
        const today = new Date();
        const pastDate = new Date(today.setDate(today.getDate() - 1)).toLocaleDateString('ru-RU');
        expect(validateDate(pastDate)).toEqual({ isValid: false, message: 'Date cannot be in the past.' });
    });
});

describe('Валидация города', () => {
    test('должна выдавать предупреждение, если в названии города есть экранирование', () => {
        expect(validateCityName('New\\York')).toEqual({ isValid: false, message: 'City name contains invalid characters.' });
    });

    test('должна пропускать название города с восклицательным знаком или дефисами', () => {
        expect(validateCityName('Saint-Louis-du-Ha! Ha!')).toEqual({ isValid: true, message: 'City name is valid.' });
    });

    test('должна пропускать название города со спецсимволами', () => {
        expect(validateCityName('Ağrı')).toEqual({ isValid: true, message: 'City name is valid.' });
    });

    test('должна пропускать название города из одной буквы', () => {
        expect(validateCityName('A')).toEqual({ isValid: true, message: 'City name is valid.' });
    });
});
