import { buildClient } from "@datocms/cma-client-node";

const client = buildClient({
  apiToken: import.meta.env.DATOCMS_API_KEY,
  environment: "old-website",
});

export const getImageFromUploadId = async (uploadId) => {
  const upload = await client.uploads.find(uploadId);
  return {
    url: upload.url,
    alt: upload.default_field_metadata.en.alt,
  };
};

export const getTestimonialFromId = async (testimonialId) => {
  const testimonial = await client.items.find(testimonialId);
  // console.log(testimonial);
  return {
    quote: testimonial.quote,
    name: testimonial.name,
    place: testimonial.place,
  };
};
