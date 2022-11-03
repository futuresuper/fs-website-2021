import { writable } from "svelte/store";

/**
 * A store for indicating whether the header menu should be shown
 * immediately when the page is first loaded
 */
export const showHeaderMenuOnLoad = writable(true);

/**
 * A store for keeping track of whether the header menu is showing
 */
export const headerMenuShowing = writable(true);
