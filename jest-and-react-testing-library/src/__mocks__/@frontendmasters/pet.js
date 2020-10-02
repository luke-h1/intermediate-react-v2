import { readFileSync } from "fs";
import path from "path";
import { act } from "@testing-library/react";

const breeds = [
  { name: "Bichon Frise" },
  { name: "Bolognese" },
  { name: "Coton de Tulear" },
  { name: "havaense" },
  { name: "Maltese" }
];

const doggos = JSON.parse(
  readFileSync(path.join(__dirname, "res.json")).toString()
);

export const ANIMALS = ["dog", "cat", "bird"];
export const _breeds = breeds;
export const _dogs = doggos.animals;

// below returns a promise like fn
// act = update it & tells react to do something with it
const mock = {
  breeds: jest.fn(() => {
    return {
      then: callback => act(() => callback({ breeds }))
    };
  }),
  animals: jest.fn(() => {
    return {
      then: callback => act(() => callback(doggos))
    };
  })
};
export default mock;