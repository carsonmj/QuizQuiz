export const getURL = (path, param) => {
  try {
    if (typeof path !== "string") {
      throw new Error("getURL Parameter 'path' should be string");
    }

    if (Object.keys(param)?.length === 0) {
      return path;
    }

    const params = [];

    for (const [key, value] of Object.entries(param)) {
      if (value === "any") {
        continue;
      }

      params.push(`${key}=${value}`);
    }

    return path.concat("?", params.join("&"));
  } catch (error) {
    console.error(error);
  }

};

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export const reOrganizeQuestions = (questions) => {
  for (const question of questions) {
    const { correct_answer, incorrect_answers } = question;
    const options = [correct_answer, ...incorrect_answers];
    question.options = shuffle(options);
  }

  return questions;
};

export const getOptionState = ({ content, progressIndex, currentIndex, correctAnswer, userAnswer, userResult }) => {
  if (progressIndex > currentIndex) {
    if (correctAnswer === content) {
      return "correct";
    }

    if (userResult.wrong?.[currentIndex]) {
      return userResult.wrong[currentIndex] === content ? "wrong" : "default";
    }
  } else {
    if (!userAnswer) {
      return "default";
    }

    if (userAnswer && content === correctAnswer) {
      return "correct";
    }

    if (userAnswer === content) {
      return "wrong";
    }
  }

  return "default";
};
