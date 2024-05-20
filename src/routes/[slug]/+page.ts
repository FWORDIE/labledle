import { redirect } from '@sveltejs/kit';
import libary from '$lib/valTestingPrunedViewBoxSorted.json';

export function load({ params }) {
	if (Number.isNaN(parseInt(params.slug)) || parseInt(params.slug) > libary.length) {
		redirect(307, '/');
	}
	return {
		num: params.slug
	};
}
