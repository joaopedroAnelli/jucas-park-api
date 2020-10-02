
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IQuery {
    abstract cars(): Car[] | Promise<Car[]>;

    abstract driver(): Driver | Promise<Driver>;
}

export class Car {
    id: string;
    license: string;
    driver: Driver;
    model: string;
}

export class Driver {
    id: number;
    name: string;
}

export abstract class IMutation {
    abstract storeDriver(name: string): Driver | Promise<Driver>;
}
