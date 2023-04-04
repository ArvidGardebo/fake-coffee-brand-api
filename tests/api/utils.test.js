process.env.NODE_ENV = "development";

const axios = require("axios");
import { updateCoffeefake } from "../../utils/utils";
import { MongoClient } from "mongodb";
import _interopRequireDefault from "@babel/runtime/helpers/interopRequireDefault";
import { describe } from "node:test";

let connection;
let db;

beforeAll(async () => {
  connection = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = await connection.db();
});

afterAll(async () => {
  await connection.close();
});

it("should return coffe data from fetch", async () => {
  let res = await axios.get("http://localhost:3000/api?sort=desc");
  expect(res.status).toBe(200);

  let data = res.data;
  expect(data).toBeInstanceOf(Array);
  expect(data).toHaveLength(20);

  expect(data[0].name).toBe("Wildfire");
  expect(data[1].name).toBe("Walnut Wonder");
  expect(data[2].name).toBe("Sumatra Blend");

  res = await axios.get("http://localhost:3000/api?sort=asc");
  expect(res.status).toBe(200);

  data = res.data;
  expect(data[0].name).toBe("Andean Almond");
  expect(data[1].name).toBe("Arabian Nights");
  expect(data[2].name).toBe("Bali Bliss");

  res = await axios.get("http://localhost:3000/api?limit=4");
  expect(res.status).toBe(200);

  data = res.data;
  expect(data).toBeInstanceOf(Array);
  expect(data).toHaveLength(4);
}, 10000);

it("should get all coffee data ", async () => {
  const res = await axios.get("http://localhost:3000/api");
  expect(res.status).toBe(200);

  const data = res.data;
  expect(data).toBeInstanceOf(Array);
  expect(data).toHaveLength(20);
});

it("should get error method not allowed ", async () => {
  try {
    const res = await axios.put("http://localhost:3000/api");
    expect(res.status).toBe(405);

    const data = res.data;
    expect(data).toBeInstanceOf(undefined);
    expect(console.error).toHaveBeenCalledWith("Method not allowed");
  } catch (error) {
    console.error(error);
  }
});

it("should get error not found", async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/notexisting");
    expect(error.res.status).toBe(500);
    expect(error.res.data.success).toBe(false);
    expect(error.res.data.message).toBe("Not Found");
  } catch (error) {}
});
