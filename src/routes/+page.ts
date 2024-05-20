import { redirect } from '@sveltejs/kit';
import libary from '$lib/valTestingPrunedViewBoxSorted.json';
import { random } from '$lib/funcs.js';

export function load({ params }) {
    const num = Math.floor(random(0, libary.length-1));
    redirect(307, '/'+num)

}