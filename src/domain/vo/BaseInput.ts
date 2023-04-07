type SortingType = 'desc' | 'asc';

type Sort<TField = unknown> = {
	field: TField;
	value: SortingType;
};

type Search<TField = unknown> = {
	field: TField;
	value: string;
};

// ts-prune-ignore-next
export type InputVariables<TSort = unknown, TSearch = unknown> = {
	sort?: Sort<TSort>;
	search?: Array<Search<TSearch>>;
	limit?: number;
	page?: number;
};
