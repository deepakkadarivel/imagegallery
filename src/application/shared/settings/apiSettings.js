const baseUrl = 'https://image-search-microservice-eeaiwupofb.now.sh';

const apiSettings = {
  baseUrl,
  timeout: 5000,
  endpoints: {
    gallery: {
      gallery: '/gallery',
      generateGalleryUrl() {
        return `${baseUrl}${this.gallery}`;
      }
    }
  }
};

export default apiSettings;
