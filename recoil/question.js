import { atom, selector } from "recoil";

import { getURL, reOrganizeQuestions } from "../utils/helper";

export const progressState = atom({
  key: "progressState",
  default: 0,
});

export const updateState = atom({
  key: "updateState",
  default: false,
});

export const paramState = atom({
  key: "paramState",
  default: {
    amount: 10,
    category: "any",
    difficulty: "any",
    type: "multiple"
  },
});

export const questionsState = selector({
  key: "questionsState",
  get: async ({ get }) => {
    try {
      const param = get(paramState);
      const url = getURL("https://opentdb.com/api.php", param);
      const res = await fetch(url);
      const questions = await res.json();

      return {
        code: 200,
        results: reOrganizeQuestions(questions.results),
      };
    } catch (error) {
      throw new Error("Quiz API server is not avaliable.");
    }
  },
});
