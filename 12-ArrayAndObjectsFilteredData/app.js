let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

// 1.  "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
function nameStartLetter(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].name.startsWith("t")) {
      newArray.push(array[i].name);
    }
  }
  console.log(newArray);
}
nameStartLetter(arr);

// 2. "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
function nameStartEndLetter(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].name.startsWith("t") && array[i].name.endsWith("t")) {
      count++;
    }
  }
  console.log(count);
}
nameStartEndLetter(arr);

// 3. "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemi
function objectKeyCount(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].name.startsWith("t") && array[i].name.endsWith("t")) {
      sum = sum + array[i].key;
    }
  }
  console.log(sum);
}
objectKeyCount(arr);

// 4. "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// arrayin name =lerini deyisir deye bagli saxladim

// function nameKeySuperDev(array) {
//   for (let i = 0; i < array.length; i++) {
//     let newValue = "SuperDev";
//     if (array[i].name.endsWith('e')) {
//       array[i].name = newValue;
//       console.log(array[i]);
//     }
//   }
// }
// nameKeySuperDev(arr);

// 5. "name"-i en uzun olan obyektin key-i ni tapin
function maxLengthName(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].name.length > max) {
      max = array[i].name.length;
    }
  }
  for (let j = 0; j < array.length; j++) {
    if (array[j].name.length == max) {
      console.log(array[j].key);
    }
  }
}
maxLengthName(arr);

// 6. "name"-i en uzun olan obyektin indexin kvadratini hesablayin
function maxLengthForIndex(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].name.length > max) {
      max = array[i].name.length;
    }
  }
  for (let j = 0; j < array.length; j++) {
    if (array[j].name.length == max) {
      console.log(j ** 2);
    }
  }
}
maxLengthForIndex(arr);

// 7. "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
function lengthFour(array) {
  let newArr = [];
  array.forEach((i) => {
    if (i.name.length == 4) {
      newArr.push(i.name);
    }
  });
  console.log(newArr);
}
lengthFour(arr);

// 8.  en boyuk "key" - i olan obyektin "name"-i ni tapin
function largeKey(array) {
  let max = 0;
  array.forEach((i) => {
    if (i.key > max) {
      max = i.key;
    }
  });
  array.forEach((e) => {
    if (e.key == max) {
      console.log(e.name);
    }
  });
}
largeKey(arr);

// 9.  terkibinde 2 kiçik 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
function keyOfIndex(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name.includes("l", 2)) {
      console.log(i);
    }
  }
}
keyOfIndex(arr);

// 10. terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
function keyOfObject(array) {
  array.forEach((a) => {
    if (a.name.includes("t", 2)) {
      console.log(a.key);
    }
  });
}
keyOfObject(arr);

// 11. key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq
function keyAndName(array) {
    array.forEach(a =>{
        if(a.key > 10 && a.name.startsWith("l")){
            console.log(a);
        }
    });
}
keyAndName(arr);
