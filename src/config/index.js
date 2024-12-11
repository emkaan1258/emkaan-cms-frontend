const config = {
  apiUrl: process.env.REACT_APP_API_URL, 
  websiteName: process.env.REACT_APP_WEBSITE_NAME,
  fileUploadSizeLimit: parseInt(process.env.REACT_APP_FILE_UPLOAD_SIZE_LIMIT, 10),
  
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
