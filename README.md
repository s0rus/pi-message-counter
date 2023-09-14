## pi-message-counter

Cool little project that displays the current and all time message count (the message count is aggregated by separate bot which is private) of a discord server using a "RaspberryPI 4 B 2GB" and "GJD 1602IIC" LCD display.

### Local development

1. Clone the repo
2. Install dependencies

```
pnpm install
```

3. Run dev server

```
pnpm dev
```

To use the LCD screen you need to have the i2c interface enabled on your raspberry pi. You can do this by running `sudo raspi-config` and enabling it under `Interfacing Options`.
Then, to get the address of the LCD screen, run `sudo i2cdetect -y 1`.
You can change the address in `src/components/write-to-lcd.ts`;

It should be `0x27` by default, but it was `0x3f` in my case.
