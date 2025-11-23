import { e as createAstro, c as createComponent, b as renderHead, r as renderComponent, a as renderTemplate } from './astro/server_DftDNN9n.mjs';
import { $ as $$Header, a as $$Footer } from './Footer_CXdraL5P.mjs';
/* empty css                          */

const $$Astro = createAstro("https://youfixit.co.uk");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { pageTitle = "Home Page", current = null } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${pageTitle}</title>${renderHead()}</head> <body style="background-color: black;"> ${renderComponent($$result, "Header", $$Header, { "current": current })} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/workspaces/youfixit.co.uk/src/layouts/Base.astro", void 0);

export { $$Base as $ };
