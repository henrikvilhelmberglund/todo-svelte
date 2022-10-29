import { writable } from 'svelte/store';
import { readable } from 'svelte/store';


export const count = writable(0);

export const time = readable(null, function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});