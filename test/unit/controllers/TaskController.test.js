const HttpMock = require("node-mocks-http");
const TaskController = require("../../../controllers/TaskController");

describe("Task controller", () => {
  it("Get tasks should retun tasks array and 200 status code ", () => {
    const req = HttpMock.createRequest();
    const res = HttpMock.createResponse();
    TaskController.getTasks(req, res, null);
    var responseJson = res._getJSONData();
    expect(res.statusCode).toBe(200);
    expect(responseJson instanceof Array).toBeTruthy();
  });
});
