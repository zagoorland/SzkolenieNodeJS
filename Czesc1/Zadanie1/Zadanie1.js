import fs from "fs";

export const readData = () => {
  try {
    const data = fs.readFileSync("../dane.json");
    const dataParsed = JSON.parse(data);
    console.log(dataParsed);
    return dataParsed;
  } catch (err) {
    console.error(err);
  }
};

readData();
