import { CityData } from '../../types/forecastType';

export interface ResultsProps {
	search: string;
	resetSearch: () => void;
	setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}
