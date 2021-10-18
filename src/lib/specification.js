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
  const res2 = await fetch(
    new URL(`${apiUrl}api/database/specification/${slug}/document`)
  );
  const res3 = await fetch(
    new URL(`${apiUrl}api/database/specification/${slug}/sub_process`)
  );
  const specification = await res.json();
  const document = await res2.json();
  const sub_process = await res3.json();

  const result = await {
    ...specification,
    sub_process: sub_process,
    document: document,
  };

  return result;
}
