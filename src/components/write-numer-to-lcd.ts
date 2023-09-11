import LCD from 'lcd';

const lcd = new LCD({
  rs: 25,
  e: 24,
  data: [23, 17, 18, 22],
  cols: 16,
  rows: 2,
});

export const writeNumberToLcd = (number: number) => {
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print(number.toString());
};
