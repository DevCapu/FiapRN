import {useQuery} from '@tanstack/react-query';

import {fetchContents} from '@services';

export function useNews() {
  const page = 1;
  const perPage = 100;
  const strategy = 'new';
  const {data, isLoading, error, refetch, isFetching} = useQuery({
    queryKey: ['tabnewsContents', page, perPage, strategy],
    queryFn: () => fetchContents(page, perPage, strategy),
  });

  return {data, isLoading, error, refetch, isFetching};
}
