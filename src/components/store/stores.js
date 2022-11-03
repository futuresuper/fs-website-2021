import { writable } from "svelte/store";

/**
 * A store for keeping track of whether the header menu is showing
 */
export const headerMenuShowing = writable(false);
