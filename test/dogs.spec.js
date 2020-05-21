const supertest = require("supertest");
const server = require("../server");
const db = require("../data/dbconfig");

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("dogs integration tests", () => {
  it("GET /dogs", async () => {
    const res = await supertest(server).get("/dogs");

    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("application/json");
    expect(res.body).toHaveLength(3);
    expect(res.body[0].breed).toBe("Beagle");
    expect(res.body[1].name).toBe("Brady");
  });

});