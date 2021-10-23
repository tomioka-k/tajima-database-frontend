import fetch from "node-fetch";

export const apiUrl = process.env.NEXT_PUBLIC_RESTAPI_URL;

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

export async function getAllMethodCategoriesData() {
  const res = await fetch(new URL(`${apiUrl}api/database/method-category/`));
  const methodCategories = await res.json();
  return methodCategories;
}

export async function getAllMethodCategoriesIds() {
  const res = await fetch(new URL(`${apiUrl}api/database/method-category/`));
  const methodCategories = await res.json();
  return methodCategories.map((methodCategory) => {
    return {
      params: {
        slug: String(methodCategory.slug),
      },
    };
  });
}

export async function getAllMethodsData() {
  const res = await fetch(new URL(`${apiUrl}api/database/method/`));
  const methods = await res.json();
  return methods;
}

export async function getMethodsData(slug) {
  const res = await fetch(
    new URL(`${apiUrl}api/database/method/?category__slug=${slug}`)
  );
  const methods = await res.json();
  return methods;
}

export async function getAllBasesData() {
  const res = await fetch(new URL(`${apiUrl}api/database/base/`));
  const bases = await res.json();
  return bases;
}
