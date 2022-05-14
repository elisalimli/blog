export const useGetVideoId = (url: string) => {
  console.log('runned', url);
  return url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)?.pop();
};
