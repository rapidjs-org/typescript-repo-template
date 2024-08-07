// [TODO]

import { EPlanets } from "./EPlanets";
import { hello, bye } from "./greet";


export function helloWorld(): string {
    return hello(EPlanets.EARTH);
}

export function helloMars(): string {
    return hello(EPlanets.MARS);
}

export function helloSaturn(): string {
    return hello(EPlanets.SATURN);
}

export function byeWorld(): string {
    return bye(EPlanets.EARTH);
}

export function byeMars(): string {
    return bye(EPlanets.MARS);
}

export function byeSaturn(): string {
    return bye(EPlanets.SATURN);
}

export function goToMars() {
    console.log([
        byeWorld(),
        helloMars(),
    ].join("\n"));
}