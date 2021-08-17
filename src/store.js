import { writable } from 'svelte/store';

const tabState = writable([false, true, false]);

let states = {
  tabState: tabState,
};

export default states;
