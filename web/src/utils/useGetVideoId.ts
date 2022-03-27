export const useGetVideoId = (url: string) => {
  return url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)?.pop();
};
