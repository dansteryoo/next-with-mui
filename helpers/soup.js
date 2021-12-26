const axios = require('axios');
const JSSoup = require('jssoup').default;

const getHTML = async (url) => {
  try {
    const { data } = await axios.get(url);
    return new JSSoup(data);
  } catch (err) {
    console.log({ err });
    throw new Error(err);
  }
};

export const getDevoPodcasts = async () => {
  try {
    const rss = 'https://anchor.fm/s/1acb4700/podcast/rss';
    const html = await getHTML(rss);
    const set = new Set();
    const links = html
      .findAll('link')
      .map((link) => {
        const url = link.nextElement._text;
        if (url.includes('/episodes/') && !set.has(url)) {
          set.add(url);
          return url;
        }
        return null;
      })
      .filter((link) => !!link);
    const current = links[0];
    const results = { current, links };
    return results;
  } catch (err) {
    console.log({ err });
    throw new Error(err);
  }
};
