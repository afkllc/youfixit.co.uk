import { c as createComponent, r as renderComponent, b as renderHead, d as addAttribute, a as renderTemplate } from '../chunks/astro/server_DftDNN9n.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Cq0wVwAt.mjs';
import { g as getCollection, S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_B6AKIOUp.mjs';
import { $ as $$BaseHead, a as $$FormattedDate } from '../chunks/FormattedDate_C05L05w3.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_CXdraL5P.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("guides")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-erw7ffnm> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-erw7ffnm": true })}${renderHead()}</head> <body data-astro-cid-erw7ffnm> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-erw7ffnm": true })} <main data-astro-cid-erw7ffnm> <section data-astro-cid-erw7ffnm> <ul data-astro-cid-erw7ffnm> ${posts.map((post) => renderTemplate`<li data-astro-cid-erw7ffnm> <a${addAttribute(`/guides/${post.id}/`, "href")} data-astro-cid-erw7ffnm> ${post.data.heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 720, "height": 360, "src": post.data.heroImage, "alt": "", "data-astro-cid-erw7ffnm": true })}`} <h4 class="title" data-astro-cid-erw7ffnm>${post.data.title}</h4> <p class="date" data-astro-cid-erw7ffnm> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-erw7ffnm": true })} </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-erw7ffnm": true })} </body></html>`;
}, "/workspaces/youfixit.co.uk/src/pages/guides/index.astro", void 0);

const $$file = "/workspaces/youfixit.co.uk/src/pages/guides/index.astro";
const $$url = "/guides";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
