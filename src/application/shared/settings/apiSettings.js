const baseUrl = 'http://localhost:5000';

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
