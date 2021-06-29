const result = document.querySelector(".result");

let count = 0;

document.querySelector(".button-plus").addEventListener("click", function () {
  count += 1;
  result.innerText = count;
});

document.querySelector(".button-minus").addEventListener("click", () => {
  count -= 1;
  result.innerText = count;
});
