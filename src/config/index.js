const config = {
  apiUrl: "https://clownfish-app-qdb99.ondigitalocean.app/api", 
  websiteName: 'Emkan CMS',
  fileUploadSizeLimit: parseInt('5242880', 10),
  
  // Derived configs
  endpoints: {
    auth: {
      login: '/auth/login',
      register: '/auth/register',
    },
    pages: {
      base: '/pages',
      reorder: (id) => `/pages/${id}/reorder`,
    },
    sections: {
      base: '/sections',
      reorder: (id) => `/sections/${id}/reorder`,
    },
    upload: '/upload',
  },
};

export default config;
