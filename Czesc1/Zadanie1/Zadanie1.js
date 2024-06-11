import fs from "fs";

const readFile = async () => {
  try {
    const data = fs.readFileSync("../dane.json");
    const dataParsed = JSON.parse(data);

    console.log(dataParsed);
  } catch (e) {
    console.log(e);
  }
};

readFile();
