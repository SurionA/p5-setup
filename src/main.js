const menu = document.getElementById('menu');
console.log({ menu });

const pages = ['matrix'];

pages.forEach((name) => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.href = `/${name}/index.html`;
  a.innerText = name;

  li.appendChild(a);
  menu.appendChild(li);
});
