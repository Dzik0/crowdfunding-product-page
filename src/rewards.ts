export type Reward = {
  id: number;
  title: string;
  info: string;
  price: number;
  left: number;
};

export const data: Reward[] = [
  {
    id: 1,
    title: "Bamboo Stand",
    info: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign and you'll be added to a special Backer member list.`,
    price: 25,
    left: 101,
  },
  {
    id: 2,
    title: "Black Edition Stand",
    info: `You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer memeber list. Shipping is included.`,
    price: 75,
    left: 64,
  },
  {
    id: 3,
    title: "Mahogany Special Edition",
    info: `You get two Special Edition Mahogany stands, a Backer T-Shirt and a personal thank you. You'll be added to our Backer member list. Shipping is included`,
    price: 200,
    left: 0,
  },
];
