import baseRequest from "./baseRequest";

function get(url, options = {}) {
  return baseRequest(url, {
    ...options,
    method: "get"
  });
}

function post(url, options = {}) {
  return baseRequest(url, {
    ...options,
    method: "post"
  });
}

function del(url, options = {}) {
  return baseRequest(url, {
    ...options,
    method: "delete"
  });
}

function put(url, options = {}) {
  return baseRequest(url, {
    ...options,
    method: "put"
  });
}

function patch(url, options = {}) {
  return baseRequest(url, {
    ...options,
    method: "patch"
  });
}

const http = {
  get,
  put,
  post,
  delete: del,
  patch
};

export default http;
