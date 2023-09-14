import LCD from 'raspberrypi-liquid-crystal';

const I2C_BUS = 1;
const I2C_ADDR = 0x3f;
const LCD_COLS = 16;
const LCD_ROWS = 2;

const lcd = new LCD(I2C_BUS, I2C_ADDR, LCD_COLS, LCD_ROWS);

export const setupLcd = async () => {
  await lcd.begin();
};

export const writeToLcd = async (text: [string, string] | string) => {
  await lcd.clear();

  if (typeof text === 'string') {
    await lcd.print(text);

    return;
  }

  if (Array.isArray(text)) {
    await lcd.print(text[0]);
    await lcd.setCursor(0, 1);
    await lcd.print(text[1]);

    return;
  }
};
