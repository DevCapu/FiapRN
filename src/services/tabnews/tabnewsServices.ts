import {instanceTabnews} from './tabnewsInstance';
import {TabNewsContentList} from './types';

export const fetchContents = (
  page: number,
  perPage: number,
  strategy: 'new' | 'old' | 'relevant',
): Promise<TabNewsContentList> =>
  instanceTabnews
    .get(
      `contents?page=${page}&per_page=${perPage}&strategy=${strategy}`,
    )
    .then(response => response.data);
