import http from "./";
import baseRequest from "./baseRequest";
jest.mock("./baseRequest");

describe("http", () => {
  beforeEach(() => {
    baseRequest.mockClear();
  });

  it("should call baseRequest with get method and options", () => {
    expect(baseRequest).not.toHaveBeenCalled();
    http.get("http://link/get", { some: "options" });
    expect(baseRequest).lastCalledWith("http://link/get", {
      method: "get",
      some: "options"
    });

    http.get("http://link/get");
    expect(baseRequest).lastCalledWith("http://link/get", {
      method: "get"
    });
  });

  it("should call baseRequest with put method and options", () => {
    expect(baseRequest).not.toHaveBeenCalled();
    http.put("http://link/put", { some: "options" });
    expect(baseRequest).lastCalledWith("http://link/put", {
      method: "put",
      some: "options"
    });

    http.put("http://link/put");
    expect(baseRequest).lastCalledWith("http://link/put", {
      method: "put"
    });
  });

  it("should call baseRequest with post method and options", () => {
    expect(baseRequest).not.toHaveBeenCalled();
    http.post("http://link/post", { some: "options" });
    expect(baseRequest).lastCalledWith("http://link/post", {
      method: "post",
      some: "options"
    });
    http.post("http://link/post");
    expect(baseRequest).lastCalledWith("http://link/post", {
      method: "post"
    });
  });

  it("should call baseRequest with delete method and options", () => {
    expect(baseRequest).not.toHaveBeenCalled();
    http.delete("http://link/delete", { some: "options" });
    expect(baseRequest).lastCalledWith("http://link/delete", {
      method: "delete",
      some: "options"
    });

    http.delete("http://link/delete");
    expect(baseRequest).lastCalledWith("http://link/delete", {
      method: "delete"
    });
  });

  it("should call baseRequest with patch method and options", () => {
    expect(baseRequest).not.toHaveBeenCalled();
    http.patch("http://link/patch", { some: "options" });
    expect(baseRequest).lastCalledWith("http://link/patch", {
      method: "patch",
      some: "options"
    });

    http.patch("http://link/patch");
    expect(baseRequest).lastCalledWith("http://link/patch", {
      method: "patch"
    });
  });
});
