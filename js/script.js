"use strict";
import { cardProducds } from "../components/cardProduct.js";
import { cardUsers } from "../components/cardUsers.js";
import { data } from "../store/fetchApi.js";
// query for different section
const productQuery = document.querySelector("#products");
const userQery = document.querySelector("#containerUsers");
// fetch api from different end-point
const dataPro = await data("products");
const dataUser = await data("users");
// loop products json
dataPro.map((product) => {
  productQuery.innerHTML += cardProducds(product);
});
// loop users json
dataUser.map((user) => {
  userQery.innerHTML += cardUsers(user);
});
