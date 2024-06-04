import fs from "fs";

export const readData = (path) => {
  try {
    const data = fs.readFileSync(path);
    const dataParsed = JSON.parse(data);
    return dataParsed;
  } catch (err) {
    console.error(err);
  }
};

const dane = readData("dane.json");
console.log(dane);
