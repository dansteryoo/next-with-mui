export const stripString = ({ string }) => {
  if (typeof string !== 'string') {
    console.log('helpers/methods/stripString', { string });
    throw new Error('argument must be a string.');
  }
  const arr = string.split('');
  const newString = arr.reduce((acc, char) => {
    if (char.match(/[A-Za-z]/)) acc += char;
    return acc;
  }, '');
  return newString.toLowerCase();
};

export const createNavPath = ({ main, sub }) => {
  if (typeof main !== 'string' || typeof sub !== 'string') {
    console.log('helpers/methods/createNavPath', { main, sub });
    throw new Error('argument must be a string.');
  }
  const mainPath = stripString({ string: main });
  const subPath = stripString({ string: sub });
  return `/${mainPath}/${subPath}`;
};

export const createRegex = ({ array }) => {
  if (!Array.isArray(array)) {
    console.log('helpers/methods/createRegex', { array });
    throw new Error('argument must be an array.');
  }
  if (array.length < 1) return array;
  if (!array.every((ele) => typeof ele === 'string')) {
    console.log('helpers/methods/createRegex', { array });
    throw new Error('all elements in the array must be a string.');
  }
  return new RegExp(`${array.join('|')}`, 'g');
};

export const createMailTo = ({ email }) => {
  if (typeof email !== 'string') {
    console.log('helpers/methods/createMailTo', { email });
    throw new Error('argument must be a string.');
  }
  return `mailto:${email}`;
};

export const getBibleLink = ({ passage }) => {
  if (typeof passage !== 'string') {
    console.log('helpers/methods/getBibleLink', { passage });
    throw new Error('argument must be a string.');
  }
  const splitPassage = passage.split(' ');
  const book = splitPassage[0];
  const splitNumbers = splitPassage[1].split(':');
  const chapter = splitNumbers[0];
  const verses = splitNumbers[1];
  const query = `${book}+${chapter}%3A${verses}`;
  return `https://www.biblegateway.com/passage/?search=${query}&version=ESV`;
};

export const createArticlePath = ({ title }) => {
  if (typeof title !== 'string') {
    console.log('helpers/methods/createArticlePath', { title });
    throw new Error('argument must be a string.');
  }
  const sanitizedTitle = title
    .split('')
    .filter((char) => char === ' ' || /^[a-z0-9]+$/i.test(char))
    .join('');
  const array = sanitizedTitle.split(' ');
  return array.reduce((acc, text, i) => {
    if (i === array.length - 1) acc = acc + text.toLowerCase();
    else acc = acc + text.toLowerCase() + '-';
    return acc;
  }, '');
};

export const titleize = ({ title }) => {
  if (typeof title !== 'string') {
    console.log('helpers/methods/titlize', { title });
    throw new Error('argument must be a string.');
  }
  const SPLIT_RE = /(\S+)(\s+|\s*$)/g;
  const SPACE = ' ';
  const ARTICLES = 'a an the';
  const CONJUNCTIONS = 'and but for nor or so yet';
  const PREPOSITIONS =
    'ago at by for from in into next of off on onto out over past till to';
  const EXCEPTIONAL =
    SPACE + [ARTICLES, CONJUNCTIONS, PREPOSITIONS].join(SPACE) + SPACE;
  const _titleize = (_, word) => {
    if (!isExceptional(word)) word = camelCase(word);
    return word + SPACE;
  };
  const isExceptional = (string) =>
    EXCEPTIONAL.indexOf(SPACE + string + SPACE) >= 0;
  const camelCase = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
  const string = title.replace(SPLIT_RE, _titleize);
  const newTitle = string.slice(0, string.length - 1);
  if (newTitle && newTitle.split(' ').length === 1) {
    return newTitle[0].toUpperCase() + newTitle.slice(1).toLowerCase();
  }
  return newTitle;
};
