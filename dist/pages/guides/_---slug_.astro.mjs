import { e as createAstro, c as createComponent, r as renderComponent, b as renderHead, f as renderSlot, a as renderTemplate } from '../../chunks/astro/server_DftDNN9n.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/consts_B6AKIOUp.mjs';
import { $ as $$BaseHead, a as $$FormattedDate } from '../../chunks/FormattedDate_C05L05w3.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Footer_CXdraL5P.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://youfixit.co.uk");
const $$Guide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Guide;
  const { title, description, pubDate, updatedDate, heroImage, steps } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-4mdma4k4> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-4mdma4k4": true })}${renderHead()}</head> <body data-astro-cid-4mdma4k4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-4mdma4k4": true })} <main data-astro-cid-4mdma4k4> <article data-astro-cid-4mdma4k4> <div class="prose" data-astro-cid-4mdma4k4> <div class="title" data-astro-cid-4mdma4k4> <div class="date" data-astro-cid-4mdma4k4> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-4mdma4k4": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-4mdma4k4>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-4mdma4k4": true })} </div>`} </div> <h1 data-astro-cid-4mdma4k4>${title}</h1> <hr data-astro-cid-4mdma4k4> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-4mdma4k4": true })} </body></html>`;
}, "/workspaces/youfixit.co.uk/src/layouts/Guide.astro", void 0);

const $$Astro = createAstro("https://youfixit.co.uk");
async function getStaticPaths() {
  const posts = await getCollection("guides");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "Guide", $$Guide, { ...post.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/workspaces/youfixit.co.uk/src/pages/guides/[...slug].astro", void 0);

const $$file = "/workspaces/youfixit.co.uk/src/pages/guides/[...slug].astro";
const $$url = "/guides/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
