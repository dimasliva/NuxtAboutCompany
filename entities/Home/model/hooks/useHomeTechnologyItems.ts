// Importing images
import webflow from "~/shared/assets/Home/images/logo-webflow.png.webp";
import wordpress from "~/shared/assets/Home/images/logo-wp.png.webp";
import shopify from "~/shared/assets/Home/images/logo-shopify.png.webp";
import woocommerce from "~/shared/assets/Home/images/logo-woo.png.webp";
import prestashop from "~/shared/assets/Home/images/logo-prestashop.png.webp";
import git from "~/shared/assets/Home/images/logo-git.png.webp";
import javascript from "~/shared/assets/Home/images/logo-js.png.webp";
import css from "~/shared/assets/Home/images/logo-css.png.webp";
import html from "~/shared/assets/Home/images/logo-html.png.webp";
import react from "~/shared/assets/Home/images/logo-react.png.webp";
import vue from "~/shared/assets/Home/images/logo-vue.png.webp";
import symfony from "~/shared/assets/Home/images/logo-symfony.png.webp";
import php from "~/shared/assets/Home/images/logo-php.png.webp";
import threejs from "~/shared/assets/Home/images/logo-3js.png.webp";
import jquery from "~/shared/assets/Home/images/logo-jquery.png.webp";

export const useHomeTechnologyItems = () => {
    const items = reactive<IHomeTechnologyImage[]>([
        {
            title: "Webflow",
            image: webflow,
            delay: 0,
        },
        {
            title: "Wordpress",
            image: wordpress,
            delay: 100,
        },
        {
            title: "Shopify",
            image: shopify,
            delay: 200,
        },
        {
            title: "WooCommerce",
            image: woocommerce,
            delay: 300,
        },
        {
            title: "PrestaShop",
            image: prestashop,
            delay: 400,
        },
        {
            title: "Git",
            image: git,
            delay: 500,
        },
        {
            title: "Javascript",
            image: javascript,
            delay: 600,
        },
        {
            title: "CSS",
            image: css,
            delay: 700,
        },
        {
            title: "HTML",
            image: html,
            delay: 800,
        },
        {
            title: "React",
            image: react,
            delay: 900,
        },
        {
            title: "Vue",
            image: vue,
            delay: 1000,
        },
        {
            title: "Symfony",
            image: symfony,
            delay: 1100,
        },
        {
            title: "PHP",
            image: php,
            delay: 1200,
        },
        {
            title: "Three.js",
            image: threejs,
            delay: 1300,
        },
        {
            title: "jQuery",
            image: jquery,
            delay: 1400,
        },
    ]);

    return { items };
};
