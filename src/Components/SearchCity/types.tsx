export interface SearchCityProps {}

export interface SearchCityPopOverProps {
	isLoading: boolean;
	isFocused: boolean;
	setSearch: React.Dispatch<React.SetStateAction<string>>;

	show: boolean;
	searchValue: string;
	data:
		| [
				{
					cityKey: number;
					countryName: string;
					cityName: string;
				}
		  ]
		| [];
}

export interface CityNameHighlighterProps {
	cityName: string;
	searchValue: string;
}
