import { writable } from 'svelte/store';
import { readable } from 'svelte/store';
import { derived } from 'svelte/store';

export const count = writable(0);

export const time = readable(null, function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

const start = new Date();

export const elapsed = derived(
  time,
  $time => Math.round(($time - start) / 1000)
);