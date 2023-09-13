import LCD from 'raspberrypi-liquid-crystal';

const I2C_BUS = 1;
const I2C_ADDR = 0x3f;
const LCD_COLS = 16;
const LCD_ROWS = 2;

const lcd = new LCD(I2C_BUS, I2C_ADDR, LCD_COLS, LCD_ROWS);
lcd.beginSync();

export const writeNumberToLcd = (number: number) => {
  lcd.clearSync();
  lcd.printSync('«  ' + number.toString());
};
