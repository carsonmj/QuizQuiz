import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    correct: {},
    wrong: {},
    time: `0'00"`,
  },
});

export const timeState = atom({
  key: "timeState",
  default: {
    start: null,
    end: null,
  },
});
