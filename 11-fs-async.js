const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, resault) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = resault;
  readFile("./content/second.txt", "utf8", (err, resault) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = resault;

    writeFile(
      "./content/resault-async.txt",
      `here is the resault: ${first}, ${second}`,
      (err, resault) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("Starting the next task");
