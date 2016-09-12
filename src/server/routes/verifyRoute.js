import utils from '../utils';

const dictionary = utils.getDictionary();

export default (req, res) => {
  const text = req.params.text;
  if (!text) return res.status(400);

  dictionary.isCorrect(text, (err, correct, origWord) => {
    if(err) return res.status(500);

    return res.json({
      correct,
      word: origWord
    });
  });
};
