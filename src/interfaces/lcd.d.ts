declare module 'lcd' {
  interface LCDOptions {
    rs: number;
    e: number;
    data: number[];
    cols: number;
    rows: number;
  }

  class LCD {
    constructor(options: LCDOptions);

    clear(): void;
    setCursor(col: number, row: number): void;
    print(message: string): void;
  }

  export = LCD;
}
