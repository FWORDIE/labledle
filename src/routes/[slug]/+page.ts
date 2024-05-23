import { redirect } from '@sveltejs/kit';
import allItems from '$lib/data.json';

const getNumbers  = (num:number) => {
    if(num < Object.values(allItems).length){
        num += Object.values(allItems).length;
    }
    const cat = num%Object.values(allItems).length
    const img = num%Object.values(allItems)[cat].files.length
    return{ 
        catNum:cat,
        imgNum:img
    }
}

export function load({ params }) {
	if (Number.isNaN(parseInt(params.slug))) {
		redirect(307, '/');
	}
	return {
		itemNums: getNumbers(parseInt(params.slug))
	};
}
