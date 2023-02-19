const arr = [
  {
    id: 1,
    name: "trung",
    age: 1,
    sex: "female",
    entranceGrade: null,
    mediumGrade: 3,
  },
  {
    id: 2,
    name: "3",
    age: "2",
    sex: "male",
    entranceGrade: "",
    mediumGrade: "4",
  },
  {
    id: 3,
    name: "1",
    age: "2",
    sex: "female",
    entranceGrade: "",
    mediumGrade: "1",
  },
  {
    id: 4,
    name: "1",
    age: "2",
    sex: "male",
    entranceGrade: "",
    mediumGrade: "2",
  },
];
const idList = [1, 2];
// so sanh id cua i.id voi id trong idList, neu return true, add vo filtered, con ko tiep tuc
const filterArray = (arr1, arr2) => {
  const filterd = arr.filter((el) => {
    console.log(el.id);
    return idList.indexOf(el.id) === -1; //
  });
  return filterd;
};

console.log(filterArray(arr, idList));
