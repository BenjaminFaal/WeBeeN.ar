import {writable} from "svelte/store";

export const title = writable(localStorage.getItem('title') || 'WeBeeNar');
export const name = writable(localStorage.getItem('name') || '');
