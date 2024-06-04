import fs from "fs";
import { readData } from "../Zadanie1/Zadanie1.js";

const createFiles = () => {
  const data = readData();
  data.forEach((el) => {
    fs.writeFileSync(
      `${el.Miasto}-${el.Imie}-${el.Nazwisko}.json`,
      JSON.stringify(el)
    );
  });
};

createFiles();
