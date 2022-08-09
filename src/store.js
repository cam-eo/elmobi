import { writable, derived } from "svelte/store";

export let headerState = writable({ name: "one", id: 1 });