function fetchql(url = "", query = "", variables = {}) {
  const headers = { "Content-Type": "application/json" };
  const config = {
    method: "POST",
    headers: {
      ...headers,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  };

  return window.fetch(url, config).then(async (response) => {
    const data = await response.json();
    if (response.ok && !data.errors) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export default fetchql;
