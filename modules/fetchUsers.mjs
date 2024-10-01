export default async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  try {
    if (res.ok) {
      const data = await res.json();
      data.map((user) => user.name).forEach((name) => console.log(name));
    } else {
      throw new Error(`Ошибка: ${res.status}`);
    }
  } catch (erorr) {
    console.error(erorr);
  }
}
