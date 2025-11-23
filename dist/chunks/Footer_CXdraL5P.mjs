import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_DftDNN9n.mjs';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://youfixit.co.uk");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { current = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <div class="header" data-astro-cid-3ef6ksr2> <a class="logo-link" href="/" aria-label="YouFixIt home" data-astro-cid-3ef6ksr2> <img class="logo" src="/YouFixItLight.png" alt="You fix it" data-astro-cid-3ef6ksr2> </a> <div class="topnav" data-astro-cid-3ef6ksr2> <a${addAttribute(current === "home" ? "active" : "", "class")} href="/" data-astro-cid-3ef6ksr2>Home</a> <a${addAttribute(current === "about" ? "active" : "", "class")} href="/about" data-astro-cid-3ef6ksr2>About</a> <a${addAttribute(current === "guide" ? "active" : "", "class")} href="/guides" data-astro-cid-3ef6ksr2>Guides</a> <input type="text" placeholder="Search.." data-astro-cid-3ef6ksr2> </div> </div> </header> `;
}, "/workspaces/youfixit.co.uk/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="footer-inner" data-astro-cid-sz7xmlte>
&copy; ${today.getFullYear()} Iliketocode & AFKLLC. All rights reserved.
</div> </footer> `;
}, "/workspaces/youfixit.co.uk/src/components/Footer.astro", void 0);

export { $$Header as $, $$Footer as a };
