module.exports = {
  CHURCH_INFO: {
    location: 'Covenant Center',
    name: 'New Church of Atanta English Ministry',
    address: '2845 Amwiler Road, Atlanta, GA 30360',
    phone: '(770) 447-6663',
    nickName: 'NCA EM',
    seniorPastor: 'John Kim',
  },
  EMAIL: {
    main: 'contact@newchurchatl.com',
    cc: 'writepastorjohn@newchurchatl.com',
    subject: 'A Message From The Website',
  },
  ROOT_URL: process.env.REACT_APP_ROOT_URL,
  isProduction: process.env.REACT_APP_ENV === 'production',
  mustBeValidUrl: 'URL must start with (i.e. https://)',
  adminUsers: process.env.REACT_APP_ADMIN_USERS.split(','),
};
