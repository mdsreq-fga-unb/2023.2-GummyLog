const STATUS_ON_DECK = { id: 1, name: "On Deck", color: "blue.300" };
const STATUS_IN_PROGRESS = {
  id: 2,
  name: "In Progress",
  color: "yellow.400",
};
const STATUS_TESTING = { id: 3, name: "Testing", color: "pink.300" };
const STATUS_DEPLOYED = { id: 4, name: "Deployed", color: "green.300" };
export const STATUSES = [
  STATUS_ON_DECK,
  STATUS_IN_PROGRESS,
  STATUS_TESTING,
  STATUS_DEPLOYED,
];

const DATA = [
  {
    id: "01",
    produto: "TEST1",
    desc: "Hello world",
    marca: "Marca1",
    qtd: "22"
  },
  {
    id: "02",
    produto: "TEST2",
    desc: "Hello world",
    marca: "Marca2",
    qtd: "12"
  },
  {
    id: "03",
    produto: "TEST3",
    desc: "Hello world",
    marca: "Marca3",
    qtd: "2"
  },
  {
    id: "04",
    produto: "TEST4",
    desc: "Hello world",
    marca: "Marca4",
    qtd: "4"
  },
];

export default DATA;