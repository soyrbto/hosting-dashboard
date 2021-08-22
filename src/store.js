import Dashboard from './Layouts/desktop/dashboard.svelte';
import CloudServer from './Layouts/desktop/cloudServer.svelte';
import DedicatedServer from './Layouts/desktop/dedicatedServer.svelte';
import Account from './Layouts/desktop/account.svelte';
import CloudOrder from './Layouts/desktop/cloudOrder.svelte';
import DedicatedOrder from './Layouts/desktop/dedicatedOrder.svelte';

import { writable } from 'svelte/store';

const sections = {
  0: Dashboard,
  1: CloudServer,
  2: DedicatedServer,
  3: Account,
  4: CloudOrder,
  5: DedicatedOrder,
};

const tabState = writable([true, false, false, false]);
const activeSection = writable(Dashboard);

function changeSection(sectionIndex) {
  activeSection.set(sections[sectionIndex]);
  tabState.update((el) => {
    el.fill(false);
    if (sectionIndex == 4) sectionIndex = 1;
    if (sectionIndex == 5) sectionIndex = 2;
    el[sectionIndex] = true;
    return el;
  });
}

export { activeSection, tabState, changeSection };
