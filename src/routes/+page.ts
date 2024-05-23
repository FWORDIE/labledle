import { redirect } from '@sveltejs/kit';
import allItems from '$lib/data.json';
import moment from 'moment';

const daysSince = () => {
	const day = moment();
	const oldDate = moment('2016/01/01');

	return Math.abs(day.diff(oldDate, 'days'))
};

const getNumbers = (num: number) => {
    // console.log(num)
	if (num < Object.values(allItems).length) {
		num += Object.values(allItems).length;
	}
	const cat = num % Object.values(allItems).length;
	const img = num % Object.values(allItems)[cat].files.length;
    // console.log(cat,img)
	return {
		catNum: cat,
		imgNum: img
	};
};

export function load({ params }) {
	return {
		itemNums: getNumbers(daysSince())
	};
}
