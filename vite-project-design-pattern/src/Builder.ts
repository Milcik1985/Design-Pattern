// 4. Create a Tesla builder class. Car should have "wheels", "seatType", "color", "soundSystem". All of those properties should have default values. With TeslaBuilderClass you should be able to modify it's properties.
export class TeslaBuilder {
  private wheels: number = 4;
  private seatType: string = "Leather";
  private color: string = "red";
  private soundSystem: string = "Premium";

  constructor() {}

  setWheels(wheels: number): TeslaBuilder {
    this.wheels = wheels;
    return this;
  }

  getWheels(): number {
    return this.wheels;
  }

  setSeatType(seatType: string): TeslaBuilder {
    this.seatType = seatType;
    return this;
  }

  getSeatType(): string {
    return this.seatType;
  }

  setColor(color: string): TeslaBuilder {
    this.color = color;
    return this;
  }

  getColor(): string {
    return this.color;
  }

  setSoundSystem(soundSystem: string): TeslaBuilder {
    this.soundSystem = soundSystem;
    return this;
  }

  getSoundSystem(): string {
    return this.soundSystem;
  }

  build(): Tesla {
    return new Tesla(this);
  }
}

export class Tesla {
  private wheels: number;
  private seatType: string;
  private color: string;
  private soundSystem: string;

  constructor(builder: TeslaBuilder) {
    this.wheels = builder.getWheels();
    this.seatType = builder.getSeatType();
    this.color = builder.getColor();
    this.soundSystem = builder.getSoundSystem();
  }

  getInfo(): string {
    return `Tesla car: Wheels: ${this.wheels}, seat type: ${this.seatType}, color: ${this.color}, sound system: ${this.soundSystem}`;
  }
}
