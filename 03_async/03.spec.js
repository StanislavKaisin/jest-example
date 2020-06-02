const axios = require("axios");
// console.log(axios);
const Ajax = require("./03");

jest.mock("axios");
// console.log(axios);

describe("Ajax echo", () => {
  test("should return value async", async () => {
    const result = await Ajax.echo("some data");
    expect(result).toBe("some data");
  });
  test("should return value with promise", () => {
    return Ajax.echo("some data").then((data) => {
      expect(data).toBe("some data");
    });
  });
  test("should catch an error with promise", () => {
    return Ajax.echo().catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });
  test("should catch an error with promise", async () => {
    try {
      await Ajax.echo();
    } catch (error) {
      expect(error.message).toBe("error");
    }
  });
});

describe("Ajax: GET", () => {
  let response;
  let todos;
  beforeEach(() => {
    todos = [
      { id: 1, title: "Todo 1", completed: true },
      { id: 2, title: "Todo 2", completed: true },
    ];
    response = {
      data: {
        todos,
      },
    };
  });
  test("should return data from backend", () => {
    axios.get.mockReturnValue(response);
    return Ajax.get().then((data) => {
      expect(data.todos).toEqual(todos);
    });
  });
});
