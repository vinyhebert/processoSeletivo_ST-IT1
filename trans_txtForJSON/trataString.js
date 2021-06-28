exemplo = '{"name":"Handcrafted Plastic Keyboard","department":"Music","material":"Soft","price":"173.00","tags":["Practical","Small","Licensed","Practical"]}{"name":"Handcrafted Plastic Keyboard","department":"Music","material":"Soft","price":"173.00","tags":["Practical","Small","Licensed","Practical"]}'

resultado = exemplo.substring(26)

/* console.log(resultado) */

/* let res = exemplo.match(/department/ig) */

/* let res = JSON.parse(exemplo) */

/* console.log(res) */

const obj = JSON.parse(exemplo, function (key, value) {
    if (key == "department") {
      return console.log(value);
    } else {
      return value;
    }
  });