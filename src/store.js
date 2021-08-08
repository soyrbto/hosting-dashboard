import { writable } from 'svelte/store';

const tabState = writable([false, false, true]);

let states = {
  tabState: tabState,
};

export default states;
