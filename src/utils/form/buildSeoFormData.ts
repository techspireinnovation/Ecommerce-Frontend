export function buildSeoFormData(fd: FormData, data: any) {
  if (data.seo_title) fd.append("seo_title", data.seo_title);
  if (data.seo_description)
    fd.append("seo_description", data.seo_description);

  if (data.seo_keywords) {
    data.seo_keywords.split(",").forEach((k: string) =>
      fd.append("seo_keywords[]", k.trim()),
    );
  }
}
