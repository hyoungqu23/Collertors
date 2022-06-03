import * as Api from '/api.js';
import {
  selectElement,
  addCommas,
  removeExpiredItem,
} from '/useful-functions.js';

import {
  addNavEventListeners,
  addNavElements,
  handleHamburger,
} from '../components/Nav/event.js';
import { addFooterElements } from '../components/Footer/event.js';
import {
  addCategoryMenuElement,
  addCategoryMenuEventListeners,
} from '../components/Category/event.js';
import {
  addQuickMenuElement,
  addQuickMenuEventListeners,
  handleTopButton,
} from '../components/QuickMenu/event.js';

// 요소(element), input 혹은 상수
const quickMenu = selectElement('#quick-menu');
const category = selectElement('#category');
const soldoutContainer = selectElement('.soldout-container');
const newItemsContainer = selectElement('.newItems-container');

window.onload = () => {
  removeExpiredItem();
};
userInit();
await addAllElements();
await addAllEvents();

// html에 요소를 추가하는 함수들을 묶어주어서 코드를 깔끔하게 하는 역할임.
async function addAllElements() {
  addNavElements();
  addFooterElements();
  addCategoryMenuElement(category);
  addQuickMenuElement(quickMenu);
  addSoldOutItems();
  addNewItems();
}

// 여러 개의 addEventListener들을 묶어주어서 코드를 깔끔하게 하는 역할임.
async function addAllEvents() {
  addNavEventListeners();
  addCategoryMenuEventListeners();
  addQuickMenuEventListeners(quickMenu);
  handleHamburger();
  handleTopButton();
}

// 장바구니 생성하기
async function userInit() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    cart = [];
    localStorage.setItem('cart', JSON.stringify([]));
  }
  document.cookie.split(',').forEach((el) => {
    let [key, value] = el.split('=');
    // 잘못된 토큰이 올경우 대비 jwt 는 무조건 e로시작
    if (value !== undefined && value.charAt(0) === 'j') {
      const temp = value.split('%22');

      value = temp[3];
      localStorage.setItem('token', value);
    }
    if (key === 'token') localStorage.setItem('token', value);
  });
}

// 이미지 슬라이더 설정
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pauseOnMouseEnter: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 매진 임박 추가 기능 구현하기
async function addSoldOutItems() {
  // 매진 임박 상품 가져오기
  const soldoutItemsData = await Api.get(`/api/item/soldOut`);

  // 매진 임박 상품 추가하기
  soldoutItemsData.forEach(({ _id, itemName, imgUrl, price, stocks }) => {
    const soldoutItemList = `
      <div class="soldout-item home-item">
        <a href="/item/?id=${_id}">
          <div class="img-wrap" style="background-image: url(${imgUrl});">
          </div>
          <h3>${itemName}</h3>
          <p>${addCommas(price)}원</p>
          <p>단 ${stocks}개! 매진 임박</p>
        </a>
      </div>
    `;

    soldoutContainer.insertAdjacentHTML('beforeend', soldoutItemList);
  });
}

// 신상품 추가 기능 구현하기
async function addNewItems() {
  // 신상품 가져오기
  const newItemsData = await Api.get(`/api/item/newItem`);

  // 신상품 상품 추가하기
  newItemsData.forEach(({ _id, itemName, imgUrl, price, summary }) => {
    const newItemList = `
      <div class="new-item home-item">
        <a href="/item/?id=${_id}">
          <div class="img-wrap" style="background-image: url(${imgUrl});">
          </div>
          <h3>${itemName}</h3>
          <p>${summary}</p>
          <p>${addCommas(price)}원</p>
        </a>
      </div>
    `;

    newItemsContainer.insertAdjacentHTML('beforeend', newItemList);
  });
}
