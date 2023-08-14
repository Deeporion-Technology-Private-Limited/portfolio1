var Helper = {
  post: async (jsonObj = {}, path = "", token) => {
    const url = "http://localhost:3000/" + path;
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(jsonObj),
      headers: {
        "Content-Type": "application/json",
        Authorization: token || "",
      },
    });
    const result = await res.json();
    return { response: result, status: res.status };
  },

  put: async (jsonObj = {}, path = "", token) => {
    const url = "http://localhost:3000/" + path;
    const res = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(jsonObj),
      headers: {
        "Content-Type": "application/json",
        Authorization: token || "",
      },
    });
    try {
      return { response: res, status: res.status };
    } catch (error) {
      console.error("Error parsing JSON response:", error);
      return { response: null, status: res.status };
    }
  },

  delete: async (path = "", token) => {
    const url = "http://localhost:3000/" + path;
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token || "",
      },
    });
    const result = await res.json();
    return { response: result, status: res.status };
  },

  get: async (path = "", token) => {
    const url = "http://localhost:3000/" + path;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token || "",
      },
    });
    const result = await res.json();
    return { response: result, status: res.status };
  },
};

export default Helper;
