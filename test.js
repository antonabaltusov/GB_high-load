// Сравните скорость добавления, удаления и поиска элемента (indexOf и has)
// в Array и Set. Сравнение нужно провести в любом браузере и в NodeJS.
// Для сравнения используйте либо console.log(Date.now()) либо,
// в качестве задания со звездочкой, метод performance.
let array = [1, 2, 5, 7];
let set = new Set(array);

const props = [
  [() => array.push(3), () => set.add(3), "добавляет"],
  [
    () => {
      array.filter((item) => item != 3);
    },
    () => set.delete(3),
    "удаляет по значение",
  ],
  [() => array.indexOf(5), () => set.has(5), "поиск выполняет"],
];
function getTimeOfFunction(metod) {
  let t0 = performance.now();
  metod();
  let t1 = performance.now();
  return t1 - t0;
}

function getDifTime(props) {
  const difPush = getTimeOfFunction(props[0]) - getTimeOfFunction(props[1]);
  difPush > 0
    ? console.log(`${props[2]} Set быстрее на ${difPush}`)
    : console.log(`${props[2]} Array быстрее на ${-difPush}`);
}

props.map((prop) => getDifTime(prop));
