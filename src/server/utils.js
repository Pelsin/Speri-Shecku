import fs from 'fs';
import nodehun from 'nodehun';

import config from './config';
const { dictionary: { language, filename } } = config;

const forensic = fs.readFileSync(`./dictionary/${language}/${filename}.aff`);
const dict = fs.readFileSync(`./dictionary/${language}/${filename}.dic`);
const swedish = new nodehun(forensic, dict);

const getDictionary = () => {
 return swedish;
};

export default {
  getDictionary
}
