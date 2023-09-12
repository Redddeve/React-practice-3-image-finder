import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?';

export default function getImages(query, page) {
  const params = new URLSearchParams({
    key: '39009655-5531f53105d0117785bd13541',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    page,
    per_page: 12,
  });
  params.set('q', query);

  axios.get(`${BASE_URL}${params}`).then(res => {
    if (res.status !== 200) {
      throw new Error(res.message);
    }
    if (res.data.total) {
      console.error('Nothing was found');
    }
    return res.data;
  });
}
