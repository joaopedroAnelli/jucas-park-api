import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DriverEntity } from './driver.entity';
import { Repository } from 'typeorm';


@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(DriverEntity)
    private driversRepository: Repository<DriverEntity>
  ) {

  }
  index() {
    return this.driversRepository.createQueryBuilder().getMany();
  }

  async store(name: string) {
    const driver = new DriverEntity()
    driver.name = name

    await this.driversRepository.save(driver);

    return await this.driversRepository.preload(driver)
  }

  async update(id: number, name: string) {
    const driver = await this.driversRepository.findOneOrFail(id)

    driver.name = name

    await this.driversRepository.save(driver)

    return driver;
  }
}