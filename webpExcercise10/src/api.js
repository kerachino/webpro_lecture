export async function fetchImages(breed) {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?breeds=${breed}`
  );
  const data = await response.json();
  //console.log(data);
  return data[0].url;
}


export async function breeds_select(num) {
  const response = await fetch(
    `https://api.thecatapi.com/v1/breeds/`
  );
  const data = await response.json();
//  console.log(data[66].name);
  return data[num].name;
}
