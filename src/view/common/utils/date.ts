/* eslint-disable @typescript-eslint/no-empty-function */
import {
	addDays,
	addMonths,
	addYears,
	endOfDay,
	endOfMonth,
	endOfWeek,
	endOfYear,
	startOfDay,
	startOfMonth,
	startOfWeek,
	startOfYear,
} from 'date-fns';

const defineds = {
	startOfDay: startOfDay(new Date()),
	endOfDay: endOfDay(new Date()),
	last7day: addDays(new Date(), -7),
	last30day: addDays(new Date(), -30),
	startOfWeek: startOfWeek(new Date()),
	endOfWeek: endOfWeek(new Date()),
	startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
	endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
	startOfToday: startOfDay(new Date()),
	endOfToday: endOfDay(new Date()),
	startOfYesterday: startOfDay(addDays(new Date(), -1)),
	endOfYesterday: endOfDay(addDays(new Date(), -1)),
	startOfMonth: startOfMonth(new Date()),
	endOfMonth: endOfMonth(new Date()),
	startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
	endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
	startOfYear: startOfYear(new Date()),
	endOfYear: endOfYear(new Date()),
	startOflastYear: startOfYear(addYears(new Date(), -1)),
	endOflastYear: endOfYear(addYears(new Date(), -1)),
};

const staticRangeHandler = {
	range: {},
	isSelected() {},
};

function createStaticRanges(ranges: Array<any>) {
	return ranges.map((range: any) => ({...staticRangeHandler, ...range}));
}

const defaultStaticRanges = createStaticRanges([
	{
		label: 'Today',
		range: () => ({
			startDate: defineds.startOfToday,
			endDate: defineds.endOfToday,
			label: 'Today',
		}),
	},
	{
		label: 'Yesterday',
		range: () => ({
			startDate: defineds.startOfYesterday,
			endDate: defineds.endOfYesterday,
			label: 'Yesterday',
		}),
	},
	{
		label: 'This Week',
		range: () => ({
			startDate: defineds.startOfWeek,
			endDate: defineds.endOfWeek,
			label: 'This Week',
		}),
	},
	{
		label: 'Last Week',
		range: () => ({
			startDate: defineds.startOfLastWeek,
			endDate: defineds.endOfLastWeek,
			label: 'Last Week',
		}),
	},
	{
		label: 'This Month',
		range: () => ({
			startDate: defineds.startOfMonth,
			endDate: defineds.endOfMonth,
			label: 'This Month',
		}),
	},
	{
		label: 'Last Month',
		range: () => ({
			startDate: defineds.startOfLastMonth,
			endDate: defineds.endOfLastMonth,
			label: 'Last Month',
		}),
	},
	{
		label: 'This Year',
		range: () => ({
			startDate: defineds.startOfYear,
			endDate: defineds.endOfYear,
			label: 'This Year',
		}),
	},
	{
		label: 'Last Year',
		range: () => ({
			startDate: defineds.startOflastYear,
			endDate: defineds.endOflastYear,
			label: 'Last Year',
		}),
	},
]);
