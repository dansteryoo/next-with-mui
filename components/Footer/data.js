const { createMailTo } = require('helpers/methods');
const { CHURCH_INFO, EMAIL } = require('helpers/constants');

module.exports = {
  DATA: {
    CHURCH_INFO,
    SOCIALS: {
      facebook: 'https://www.facebook.com/newchurchatl',
      instagram: 'https://www.instagram.com/newchurchatl',
      youtube:
        'https://www.youtube.com/channel/UCm6SRH3c77KyrcPnm42sgHQ/videos',
      soundcloud: 'https://soundcloud.com/ncaem/tracks',
      spotify: 'https://open.spotify.com/show/0gfP0Kx3TEcuKaPPgivkv9',
      envelope:
        createMailTo({ email: EMAIL.main }) +
        `?cc=${EMAIL.cc}&subject=${EMAIL.subject}`,
    },
  },
};
