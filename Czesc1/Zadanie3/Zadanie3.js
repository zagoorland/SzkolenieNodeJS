import fs from "fs";
import { readData } from "../Zadanie1/Zadanie1.js";

const createDirectories = () => {
  const data = readData();
  data.forEach((el) => {
    try {
      fs.mkdirSync(`${el.Miasto}`);
    } catch (err) {
      console.error(err);
    }
  });
  data.forEach((el) => {
    try {
      fs.writeFileSync(
        `${el.Miasto}/${el.Status}-${el.Imie}-${el.Nazwisko}.json`,
        JSON.stringify(el)
      );
    } catch (err) {
      console.log(err);
    }
  });
};

createDirectories();
