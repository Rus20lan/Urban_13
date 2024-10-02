export default async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  try {
    if (res.ok) {
      const data = await res.json();
      const result = data
        .map((user) => user.name)
        .reduce((acc, curr) => acc + ', ' + curr);
      // .forEach((name) => console.log(name));

      console.log(result);
      return result;
    } else {
      throw new Error(`Ошибка: ${res.status}`);
    }
  } catch (erorr) {
    console.error(erorr);
  }
}
