import sqlite3InitModule from "@sqlite.org/sqlite-wasm";

describe("sqlite-wasm", () => {


  it("works", async () => {
    const sqlite3 = await sqlite3InitModule({
      print: console.log,
      printErr: console.error,
    });
  });
});
