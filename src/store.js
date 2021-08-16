import { writable } from 'svelte/store';

const tabState = writable([true, false, false]);

let states = {
  tabState: tabState,
};

export default states;
