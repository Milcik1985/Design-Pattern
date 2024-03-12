// 1. Implement a Logger class using the Singleton pattern. Logger should have acessible id. // check if after 2 logs id still the same;
export class Logger {
  private static instance: Logger;
  private static id: string;

  private constructor() {
    Logger.id = Logger.generateId();
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  logMessage(): void {
    console.log(`Your id: ${Logger.getId()}`);
  }

  private static generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  static getId(): string {
    return this.id;
  }
}
