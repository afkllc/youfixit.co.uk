import { c as createComponent, s as spreadAttributes, u as unescapeHTML, a as renderTemplate } from './astro/server_DftDNN9n.mjs';
import 'clsx';

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const __ASTRO_IMAGE_IMPORT_Zc90n1 = createSvgComponent({"meta":{"src":"/_astro/placeholder-hero.c6toyWi8.svg","width":1200,"height":360,"format":"svg"},"attributes":{"width":"1200","height":"360","viewBox":"0 0 1200 360"},"children":"\n  <defs>\n    <linearGradient id=\"g\" x1=\"0\" x2=\"1\">\n      <stop offset=\"0\" stop-color=\"#4f46e5\" />\n      <stop offset=\"1\" stop-color=\"#06b6d4\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"1200\" height=\"360\" fill=\"url(#g)\" rx=\"12\" />\n  <g fill=\"#fff\" font-family=\"Inter, Roboto, Arial, sans-serif\">\n    <text x=\"60\" y=\"120\" font-size=\"36\" font-weight=\"700\">Guide: Upgrade or Replace RAM</text>\n    <text x=\"60\" y=\"170\" font-size=\"18\" opacity=\"0.9\">Step-by-step walkthrough • Placeholder hero image</text>\n  </g>\n"});

const contentAssets = new Map([["./placeholder-hero.svg?astroContentImageFlag=&importer=src%2Fcontent%2Fguides%2Fram.md", __ASTRO_IMAGE_IMPORT_Zc90n1]]);

export { contentAssets as default };
