export interface SearchCityProps {}

export interface SearchCityPopOverProps {
	isLoading: boolean;
	isFocused: boolean;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	show: boolean;
	searchValue: string;
	data: [City] | [];
}

export interface CityNameHighlighterProps {
	cityName: string;
	searchValue: string;
}

export interface City {
	cityKey: number;
	countryName: string;
	cityName: string;
}
