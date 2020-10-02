import { Injectable } from '@nestjs/common';
import { Driver } from '../graphql';


@Injectable()
export class DriversService {
  getDriver() {
    const driver = new Driver()
    driver.name = 'John'
    driver.id = 123;

    return driver
  }

  storeDriver(name: string) {
    const driver = new Driver()
    driver.name = name
    driver.id = 121;

    return driver
  }
}