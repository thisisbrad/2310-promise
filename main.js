"use strict";
(() => {
  const fetchAPI = () => {
    const url = `https://jsonplaceholder.typicode.com/posts/1`;

    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const buildDOM = () => {
    const app = document.getElementById("app");

    fetchAPI().then((data) => {
      console.log(">>>", data);
      const dataElement = document.createElement("p");
      dataElement.textContent = data.body;
      app.appendChild(dataElement);
    });
  };
  window.addEventListener("load", buildDOM);
})();
