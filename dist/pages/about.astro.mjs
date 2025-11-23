import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DftDNN9n.mjs';
import { $ as $$Base } from '../chunks/Base_BmFduW9h.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "about";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "pageTitle": pageTitle, "current": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1> HI!!About page content...</h1> ` })}`;
}, "/workspaces/youfixit.co.uk/src/pages/about.astro", void 0);

const $$file = "/workspaces/youfixit.co.uk/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
