import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer nVK9vofRMcnr_o3fE7JMbV74RgMbr4FEL2uN5KAtbulpNsbGteO_wE03vQdu0XR_LU92n0H9Uhx0oQYz1L_vuxT648s3nHNFV51bD5I_FUt9MBLhjrPXRZPQlYl8X3Yx',
  },
});

