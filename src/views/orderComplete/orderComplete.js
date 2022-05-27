import {
  addNavEventListeners,
  addNavElements,
} from "../../components/Nav/event.js";
import { addFooterElements } from "../../components/Footer/event.js";
import {
  addOrderNavElements,
  addOrderInfoElements,
} from "../../components/Order/event.js";
const orderListBtn = document.querySelector("#order-list-page-btn");
const itemsListBtn = document.querySelector("#items-list-page-btn");
addAllElements();
addAllEvents();

async function addAllElements() {
  addNavElements();
  addFooterElements();

  addOrderNavElements();
  // addOrderInfoElements();
}

// 여러 개의 addEventListener들을 묶어주어서 코드를 깔끔하게 하는 역할임.
function addAllEvents() {
  addNavEventListeners();
  orderListBtn.addEventListener("click", () => {
    window.location.href = "/orderlist";
  });
  itemsListBtn.addEventListener("click", () => {
    window.location.href = "/items";
  });
}
