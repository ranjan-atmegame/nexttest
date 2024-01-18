const API_URL = "https://testserv.atmegame.com";

export default async function CategoryList() {
  let response = await fetch(
    `${API_URL}/category?isMainMenu=true&order=order:asc&limit=10`
  );
  response = await response.json();
  let categoryList = [];
  if (response && response.status == "success" && response.result) {
    categoryList = response.result;
  }

  return categoryList.map((category) => (
    <li key={category.slug}>{category.name}</li>
  ));
}
