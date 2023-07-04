import { getBookcard } from "./bookcard";
import { seemore } from "./bookcard";

const categories = document.querySelectorAll(".bestsellers-item-name")
const titles = document.querySelectorAll(".bookcard-name")
const authors = document.querySelectorAll(".bookcard-author")
const images = document.querySelectorAll(".bookcard-image")
const ids = document.querySelectorAll(".bookcard")

getBookcard(categories, titles, authors, images, ids)



const upButton = document.querySelector(".bestsellers-button-up")
const header = document.querySelector(".header")
upButton.addEventListener("click", () => {
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
 
})
const titless = document.querySelectorAll(".bookcard-names")
const authorss = document.querySelectorAll(".bookcard-authors")
const imagess = document.querySelectorAll(".bookcard-images")
const idss = document.querySelectorAll(".bookcard-second")
const seemoreButton = document.querySelectorAll(".bestsellers-button")
const categoryBlock = document.querySelector(".category-block")
const bestsellersHome = document.querySelector(".bestsellers-home")
const active = document.querySelector(".categories-list-link")
categoryBlock.classList.toggle("visually-hidden");

seemoreButton[0].addEventListener("click", () => {
  bestsellersHome.classList.toggle("visually-hidden")
  categoryBlock.classList.toggle("visually-hidden");
  const cat = "Combined Print and E-Book Fiction"
  seemore(cat, imagess, titless, authorss, idss)
})
seemoreButton[1].addEventListener("click", () => {
  bestsellersHome.classList.toggle("visually-hidden")
  categoryBlock.classList.toggle("visually-hidden");
  const cat = "Graphic Books and Manga"
  seemore(cat, imagess, titless, authorss, idss)
})
seemoreButton[2].addEventListener("click", () => {
  bestsellersHome.classList.toggle("visually-hidden")
  categoryBlock.classList.toggle("visually-hidden");
  const cat = "Hardcover Fiction"
  seemore(cat, imagess, titless, authorss, idss)
})
seemoreButton[3].addEventListener("click", () => {
  bestsellersHome.classList.toggle("visually-hidden")
  categoryBlock.classList.toggle("visually-hidden");
  const cat = "Hardcover Nonfiction"
  seemore(cat, imagess, titless, authorss, idss)
})

active.addEventListener("click", () => {
  bestsellersHome.classList.toggle("visually-hidden")
  categoryBlock.classList.toggle("visually-hidden");
})