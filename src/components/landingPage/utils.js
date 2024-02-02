import { buildClient } from "@datocms/cma-client-node";

const client = buildClient({ apiToken: import.meta.env.DATOCMS_API_KEY });

export const getImageFromUploadId = async (uploadId) => {
  const upload = await client.uploads.find(uploadId);
  return {
    url: upload.url,
    alt: upload.default_field_metadata.en.alt,
  };
};
