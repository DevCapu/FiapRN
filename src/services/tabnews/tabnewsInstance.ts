import perf from '@react-native-firebase/perf';
import axios from 'axios';

export const instanceTabnews = axios.create({
  baseURL: 'https://www.tabnews.com.br/api/v1',
});

instanceTabnews.interceptors.request.use(async function (config) {
  try {
    const httpMetric = perf().newHttpMetric(
      config.url,
      config.method,
    );
    config.metadata = {httpMetric};

    await httpMetric.start();
  } finally {
    return config;
  }
});

instanceTabnews.interceptors.response.use(
  async function (response) {
    try {
      const {httpMetric} = response.config.metadata;
      httpMetric.setHttpResponseCode(response.status);
      httpMetric.setResponseContentType(
        response.headers['content-type'],
      );
      await httpMetric.stop();
    } finally {
      return response;
    }
  },
  async function (error) {
    try {
      const {httpMetric} = error.config.metadata;
      httpMetric.setHttpResponseCode(error.response.status);
      httpMetric.setResponseContentType(
        error.response.headers['content-type'],
      );
      await httpMetric.stop();
    } finally {
      return Promise.reject(error);
    }
  },
);
