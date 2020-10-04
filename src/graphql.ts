
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Car {
    id: string;
    license: string;
    driver: Driver;
    model: string;
}

export interface Driver {
    id: number;
    name: string;
}

export interface IQuery {
    drivers(): Driver[] | Promise<Driver[]>;
}

export interface IMutation {
    storeDriver(name: string): Driver | Promise<Driver>;
    updateDriver(id: number, name: string): Driver | Promise<Driver>;
}

export interface ISubscription {
    driverCreated(): Driver | Promise<Driver>;
}
