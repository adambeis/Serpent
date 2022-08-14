import { browser } from '$app/env';
import { writable } from 'svelte/store';

export const showMsg = writable(browser && localStorage.getItem('showMsg') == 'true');
showMsg.subscribe((show) => browser && (localStorage.showMsg = show));
