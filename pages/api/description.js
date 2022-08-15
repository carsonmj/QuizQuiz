const handler = (_, res) => {
  const descriptions = [
    { id: 0, item: "Each time you will be given 10 questions on a random topic." },
    { id: 1, item: "You can move on to the next question if you have selected an answer." },
    { id: 2, item: "You can choose the answer to the question from among 4 options." },
    { id: 3, item: "When you have completed all the questions, you can check the statistics of the questions." },
    { id: 4, item: "You can solve the question again or check the review notes." },
  ];

  try {
    res.status(200).json({ code: 200, result: descriptions });
  } catch (error) {
    res.status(500).json({ code: 500, message: error.message });
  }
};

export default handler;
