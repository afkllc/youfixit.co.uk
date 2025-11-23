import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DftDNN9n.mjs';
import { $ as $$Base } from '../chunks/Base_BmFduW9h.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Home";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "pageTitle": pageTitle, "current": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>About page content...</p> ` })}`;
}, "/workspaces/youfixit.co.uk/src/pages/index.astro", void 0);

const $$file = "/workspaces/youfixit.co.uk/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
