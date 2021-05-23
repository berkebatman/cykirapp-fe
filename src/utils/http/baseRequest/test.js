import baseRequest from "./";
import axios from "axios";

jest.mock("axios");
jest.mock("services/Authentication", () => {
  class TestAuth {
    isAuthenticated = () => Promise.resolve(true);
    getAccessToken = () => "super.secret.token";
  }
  return TestAuth;
});

it("should call axios with authorization header", async () => {
  expect(axios).not.toHaveBeenCalled();
  await baseRequest("http://test.link", { some: "options" });
  expect(axios).toHaveBeenCalledWith("http://test.link", {
    headers: {
      Authorization: "Bearer super.secret.token",
      "Content-Type": "application/json;charset=UTF-8"
    },
    method: "get",
    some: "options"
  });
});
