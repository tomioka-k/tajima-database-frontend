import fetch from "node-fetch";

const apiUrl = process.env.NEXT_PUBLIC_RESTAPI_URL;

export async function getAllSpecificationsData() {
  const res = await fetch(new URL(`${apiUrl}api/database/specification/`));
  const specification = await res.json();
  return specification;
}
