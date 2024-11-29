import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {fetchStories, getStories} from '../clients/stories';

export const useFetchStoriesIds = () => {
  return useInfiniteQuery({
    queryKey: ['storiesIds'],
    queryFn: ({pageParam = 1}) => getStories(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      // Assuming the API provides a way to check if there are more pages
      // Example: lastPage might include a `hasNext` or similar property
      const hasMore = lastPage?.length > 0; // Check if the current page has data
      return hasMore ? allPages.length + 1 : undefined; // Increment page or return undefined to stop
    },
    initialPageParam: 1, // Start fetching from page 1
  });
};

// Fetch stories based on provided IDs
export const useFetchStories = (ids: number[]) => {
  return useQuery({
    queryKey: ['stories', ids],
    queryFn: () => fetchStories(ids),
    enabled: Array.isArray(ids) && ids.length > 0, // Fetch only when `ids` is valid
  });
};
