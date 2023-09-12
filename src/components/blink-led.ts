import gpioInstance, { type BinaryValue } from 'onoff';

const GPIO = gpioInstance.Gpio;

const LED_PIN = 17;
const LED_BLINK_INTERVAL = 500;

const led = new GPIO(LED_PIN, 'out');
let stopBlinking = false;

const blinkLed = () => {
  if (stopBlinking) {
    return led.unexport();
  }

  led.read((err, value) => {
    if (err) {
      throw err;
    }

    void led.write((value ^ 1) as BinaryValue, (err) => {
      if (err) {
        throw err;
      }
    });
  });

  setTimeout(blinkLed, LED_BLINK_INTERVAL);
};

blinkLed();

setTimeout((_) => (stopBlinking = true), 5000);
