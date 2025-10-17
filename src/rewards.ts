export type Reward = {
  id: number;
  title: string;
  info: string;
  price: number;
  left: number;
  active: boolean;
};

export const data: Reward[] = [
  {
    id: 0,
    title: "Pledge with no reward",
    info: `Choose to support us without a reward if you simply believe in our
    project. As a backer, you will be signed up to recieve product updates
        via email.`,
    price: 0,
    left: 999,
    active: false,
  },
  {
    id: 1,
    title: "Bamboo Stand",
    info: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign and you'll be added to a special Backer member list.`,
    price: 25,
    left: 101,
    active: false,
  },
  {
    id: 2,
    title: "Black Edition Stand",
    info: `You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer memeber list. Shipping is included.`,
    price: 75,
    left: 64,
    active: false,
  },
  {
    id: 3,
    title: "Mahogany Special Edition",
    info: `You get two Special Edition Mahogany stands, a Backer T-Shirt and a personal thank you. You'll be added to our Backer member list. Shipping is included`,
    price: 200,
    left: 0,
    active: false,
  },
];
