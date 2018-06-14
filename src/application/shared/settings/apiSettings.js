const baseUrl = 'http://localhost:8080';

const apiSettings = {
  baseUrl,
  timeout: 5000,
  endpoints: {
    gallery: {
      gallery: '/gallery',
      generateGalleryUrl() {
        return `${baseUrl}/${this.gallery}`;
      }
    }
  }
};

export default apiSettings;
