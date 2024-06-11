import fs from "fs";

const readAndCreateFiles = async () => {
  try {
    const data = fs.readFileSync("../dane.json");
    const dataParsed = JSON.parse(data);

    dataParsed.forEach((person) => {
      const fileName = `${person.Imie}-${person.Nazwisko}-${person.Miasto}.json`;
      fs.writeFileSync(fileName, JSON.stringify(person));
    });

    console.log(dataParsed);
  } catch (e) {
    console.log(e);
  }
};

readAndCreateFiles();
