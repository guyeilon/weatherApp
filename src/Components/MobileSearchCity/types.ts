export interface ResultsProps {
	isLoading: boolean;
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
