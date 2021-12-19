// Java : Exception
// JavaScript : Error

// const array = new Array(99999999999999);

// Error handling try -> catch -> finally
function readFile(fileName: string): string {
  if (fileName === "not exist!") throw new Error("File not exist!");
  return "File Content";
}

function closeFile(fileName: string) {}

const fileName = "not exist!";
try {
  console.log(readFile(fileName));
} catch (error) {
  console.log("Catched error!!");
} finally {
  closeFile(fileName);
  console.log("Finally");
}
