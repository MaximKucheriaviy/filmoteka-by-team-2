export default function checkLS() {
  const wached = JSON.parse(localStorage.getItem('wachedFilms'));
  const queue = JSON.parse(localStorage.getItem('queueFilms'));
  let obj = {
    totalItems: [{ queue: [] }, { wached: [] }],
    totalPages: [{ queue: [] }, { wached: [] }],
    data: [{ queue: [] }, { wached: [] }],
  };
  if (queue) {
    obj.totalItems[0] = queue.length;
    obj.totalPages[0] = parseInt(queue.length / 20);
    obj.data[0] = queue;
  }
  if (wached) {
    obj.totalItems[1] = wached.length;
    obj.totalPages[1] = parseInt(wached.length / 20);
    obj.data[1] = wached;
  }
  return obj;
}
