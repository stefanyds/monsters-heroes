import { getPeixes } from "."

describe("getPeixes", () => {
  it("should return fishes list", async () => {
    const result = await getPeixes();
    const list = result.data
    const test = (list.length > 0)
    expect(list.length).toBeGreaterThan(0)
    expect(test).toBeTruthy()
  })
})