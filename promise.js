let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

promise
  .then(() => console.log("finsihes"))
  .then(() => {
    console.log("now I run");
  })
  .catch(() => {
    console.log("Ooops!");
  });
