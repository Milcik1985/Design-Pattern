// 3. Create a SmartHomeFacade class that simplifies the interface for controlling various smart home devices (lights, thermostat, security system) with unified methods like morningRoutine() leaveHome(), and nightMode().
interface Light {
  turnOn(): void;
  turnOff(): void;
}

interface Thermostat {
  setTemperature(temperature: number): void;
}

interface SecuritySystem {
  arm(): void;
  disarm(): void;
}

export class BasicLight implements Light {
  turnOn(): void {
    console.log("Light turned on");
  }

  turnOff(): void {
    console.log("Light is turned Off");
  }
}

export class BasicThermostat implements Thermostat {
  setTemperature(temperature: number): void {
    console.log(`Thermostat is set on ${temperature} degrees`);
  }
}

export class BasicSecuritySystem implements SecuritySystem {
  arm(): void {
    console.log("Security system is armed");
  }
  disarm(): void {
    console.log("Security system is disarmed");
  }
}

export class SmartHomeFacade {
  private lights: Light;
  private thermostat: Thermostat;
  private securitySystem: SecuritySystem;

  constructor(
    lights: Light,
    thermostat: Thermostat,
    securitySystem: SecuritySystem
  ) {
    this.lights = lights;
    this.thermostat = thermostat;
    this.securitySystem = securitySystem;
  }

  morningRoutine(): void {
    this.lights.turnOn();
    this.thermostat.setTemperature(25);
  }

  leaveHome(): void {
    this.lights.turnOff();
    this.securitySystem.arm();
  }

  nightMode(): void {
    this.lights.turnOff();
    this.thermostat.setTemperature(20);
    this.securitySystem.arm();
  }
}
