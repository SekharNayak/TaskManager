const tasks = [
  {
    id: 1,
    name: "Make tea ",
  },
  {
    id: 2,
    name: "Make lunch ",
  },
  {
    id: 3,
    name: "Make food ",
  },
];

const getTasks = (req, res, next) => {
  res.status(200).json(tasks);
};

module.exports = {
  getTasks,
};
