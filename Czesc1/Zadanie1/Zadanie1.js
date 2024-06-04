import fs from "fs";

export const readData = () => {
  try {
    const data = fs.readFileSync("dane.json");
    const dataParsed = JSON.parse(data);
    return dataParsed;
  } catch (err) {
    console.error(err);
  }
};

const dane = readData();
console.log(dane);
