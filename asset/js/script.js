const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const inputPlace = $$(".H-textList");
const decsPlace = $$(".H-T-text");

inputPlace[0].onclick = () => {
  $(".H-input1").style.display = "block";
  decsPlace[0].style.display = "none";
  inputPlace[0].style.zindex = 3;
};
