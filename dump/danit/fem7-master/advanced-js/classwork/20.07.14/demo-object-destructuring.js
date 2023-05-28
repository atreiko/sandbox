const recording = {
  band: 'the Beatles',
  album: 'Yellow Submarine',
  length: '39:16',
  year: 1969,
};

{
  // деструктуризация объектов работает через фигурные скобки
  // чтобы значение свойства записалось в переменную, имя переменной должно совпадать с именем свойства
  const { band, album, length, year } = recording;
  console.log(band);

  // эквивалентно
  // const band = recording.band;
  // const album = recording.album;
  // и т.д.
}
{
  // для объектов порядок, в котором мы записываем переменные при деструктуризации, значения не имеет
  // все равно в соответствующую переменную будет записано одноименное св-во.
  // можно излекать только нужные нам свойства
  const { year, band } = recording;
  console.log(band, year);
}
{
  // чтобы записать свойство в переменную с другим именем, надо указать это имя через двоеточие
  // например, так можно делать, если имя свойства не будет являться валидным именем переменной
  recording['release-date'] = new Date(1969, 7, 10);
  const { band: artist, 'release-date': releaseDate } = recording;

  console.log(artist);
  console.log(releaseDate);
}

{
  // можно присваивать в уже существующие переменные
  // но т.к. Javascript может посчитать фигурные скобки блоком кода, нужно обернуть деструктурирующее выражение  в ()
  let a, b;
  // будет ошибка:
  // { a, b } = { a: 1, b: 2 }
  // так работает:
  ({ a, b } = { a: 1, b: 2 });
  console.log(a, b);
}

{
  const { band, album, ...meta } = recording;

  console.log(band, album);
  console.log(meta.year);
  console.log(meta.length);
  console.log(meta);
}

// ...rest можно использовать для удаления свойства из объекта (не мутирующего - при этом создастся новый объект)
{
  const options = {
    title: 'Menu',
    height: 200,
    width: 100,
  };
  delete options.title;
  console.log(options);
}

{
  const options = {
    title: 'Menu',
    height: 200,
    width: 100,
  };
  const { height, ...newOptions } = options;
  console.log(newOptions);
  console.log(options);
}

{
  // дефолтные значения
  const options = {
    width: 4096,
    height: 2160,
  };

  const { width: w = 1920, height: h = 1080, quality = 'medium' } = options;
  console.log(w, h, quality);
}

{
  // деструктуризацию часто используют в параметрах функций,
  // когда последним аргументом передаются необязательные параметры в виде объекта option bag
  // дефолтным значением для option bag задается пустой объект,
  // если этого не сделать, весь объект опций в целом будет обязательным аргументом,
  // т.е. при вызове функции обязательно пришлось бы его прописывать
  function drawChart(type, { size = 'big', radius = 25 } = {}) {
    console.log(type, size, radius);
    // do some chart drawing
  }

  drawChart('circular', {
    radius: 30,
  });
  // т.к. задан дефолт = {} для последнего аргумента, можно его не передавать
  drawChart('circular');
}

{
  // комбинированная деструктуризация
  const props = [
    { id: 1, name: 'Fizz' },
    { id: 2, name: 'Buzz' },
    { id: 3, name: 'FizzBuzz' },
  ];

  const [, , { name }] = props;

  console.log(name);
  console.log(props[2].name);
}

