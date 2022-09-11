export interface SearchCityProps {
	search: string;
	closeModal: () => void;
}

export interface CityNameHighlighterProps {
	cityName: string;
	search: string;
}

export interface City {
	cityKey: number;
	countryName: string;
	cityName: string;
}
