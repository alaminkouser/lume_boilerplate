import lume from "lume/mod.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import pagefind from "lume/plugins/pagefind.ts";

const site = lume({
  src: "./src",
});

site.copy("ASSETS/js/sw.js", "sw.js");
site.copy("ASSETS/html/404.html", "404.html");
site.copy("ASSETS", "ASSETS");
site.copy([".jpg", ".jpeg", ".gif", ".png"]);

site.use(minifyHTML());
site.use(pagefind());

site.data("layout", "layout.tmpl.ts");

export default site;
