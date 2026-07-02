import { initializeLoader } from "./loader.js";
import "./navigation.js";
import { initScene } from "../three/scene.js";
import "./faq.js";
import "./animations.js";
import "./counter.js";
import "./contact.js";
import "./cursor.js";
import "./progress.js";



window.addEventListener("DOMContentLoaded", () => {

    initializeLoader();

    initScene();

});