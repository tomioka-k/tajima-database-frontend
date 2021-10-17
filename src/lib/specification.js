import fetch from "node-fetch";

const apiUrl = process.env.NEXT_PUBLIC_RESTAPI_URL;

export async function getAllSpecificationsData() {
  const res = await fetch(new URL(`${apiUrl}api/database/specification/`));
  const specification = await res.json();
  return specification;
}

export async function getAllSpecificationIds() {
  const res = await fetch(new URL(`${apiUrl}api/database/specification/`));
  const specification = await res.json();
  return specification.map((spec) => {
    return {
      params: {
        slug: String(spec.slug),
      },
    };
  });
}

export async function getSpecificationData(slug) {
  const res = await fetch(
    new URL(`${apiUrl}api/database/specification/${slug}`)
  );
  const specification = await res.json();
  return specification;
}
