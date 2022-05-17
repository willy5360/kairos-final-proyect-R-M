import "./main.css";
import "./pages/one-char/one-char.page.js";
import "./pages/home/home.page";
import "./pages/all-char/all-chars.pages";
import "./components/navbar/navbar";

import { Router } from "@vaadin/router";

const outlet = document.getElementById("outlet");
const router = new Router(outlet);

router.setRoutes([
    { path: "/", component: "home-page" },
    { path: "/character", component: "card-person" },
    { path: "/people", component: "card-people" },
]);

console.log("inner", window.innerHeight)

window.addEventListener("scroll", () => {
    const banner = document.querySelectorAll(".banner__title");
        banner.forEach((title) => {
        title.classList.toggle(
            "active",
            title.getBoundingClientRect().top < window.innerHeight - 150
        );
    });
});
