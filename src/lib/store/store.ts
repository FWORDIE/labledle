import { type lableObject, type appStateType, type gameStateType } from "$lib/types";
import { writable } from "svelte/store";

export const itemNum = writable(-1)

export const maskSwitchesDummy = writable( new Array(1000).fill([]));

export const exclude = writable( new Array(1000).fill(false));

export const rotate = writable( new Array(1000).fill(false));

export const debug = writable(false)
export const showImg = writable(false)

export const appState = writable<appStateType>('playing');
export const gameState = writable<gameStateType>('guessing');

export const answers = writable<lableObject[]>([])