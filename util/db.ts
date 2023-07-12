import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default open({
  filename: "./db.sqlite",
  driver: sqlite3.Database,
});
