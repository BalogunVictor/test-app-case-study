import apiHandler from '../api-handler';
import ApiRoute from '../routes/api.routes';

export type Story = {
  id: number;
  by: string;
  title: string;
  url: string;
};

export const getStories = async (page: number) => {
  const response = await apiHandler.get(`${ApiRoute.stories}?page=${page}`);
  return response.data;
};

export const fetchStory = async (id: number): Promise<Story> => {
  const response = await apiHandler.get(
    `${ApiRoute.story}/${id}.json?print=pretty`,
  );
  const storyData = response.data;
  return {
    id: storyData.id,
    by: storyData.by,
    title: storyData.title,
    url: storyData.url,
  };
};

export const fetchStories = async (ids: number[]): Promise<Story[]> => {
  const stories = await Promise.all(ids.map(id => fetchStory(id)));
  return stories;
};
