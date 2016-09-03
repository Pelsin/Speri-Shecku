# Speri-Shecku
A swedish spell checking and suggestion service using hunspell(nodehun)

Currently only handles one word at the time.

## Routes

### Verify/:text
Returns if the word is found in the dictionary and the sent word

```
{
  correct: true,
  word: originalWord
}
```

### suggest/:text
Returns if the word is found in the dictionary suggestion on similar words

```
{
  correct: false,
  suggestions: [
    "apelsin",
    "spelsinne",
    "singelspel",
    "inspel"
  ],
  word: "pelsin"
}
```
