import fs from 'fs';

import nodehun from 'nodehun';

const forensic = fs.readFileSync('./dictionary/swedish/sv.aff');
const dictionary = fs.readFileSync('./dictionary/swedish/sv.dic');
const swedish = new nodehun(forensic, dictionary);

const isCorrect = (req, res) => {
  const text = req.params.word;
  if (!text) return res.status(400);

  swedish.isCorrect(text, (err, correct, origWord) => {
    if(err) return res.status(500);

    return res.json({
      correct,
      word: origWord
    });
  });
};

const suggest = (req, res) => {
  const text = req.params.word;
  if (!text) return res.status(400);

  swedish.spellSuggestions(text, (err, correct, suggestions, origWord) => {
    if(err) return res.status(500);

    return res.json({
      correct,
      suggestions,
      word: origWord
    });
  });
};

export default {
  isCorrect,
  suggest
};
