import slugify from "slugify";

export default function slug(str) {
  return slugify(str, {
    replacement: "-",
    remove: /[&,+()$~%.'":*?<>{}#/]/g,
    lower: true,
  });
}
