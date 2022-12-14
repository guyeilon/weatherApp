export type dataType = {
	Day: {
		Icon: number;
		IconPhrase: string;
	};
	Night: {
		IconPhrase: string;
	};
	Temperature: temp;
	EpochDate: string;
	WeatherIcon: Number;
};

type temp = {
	Maximum: {
		Value: number;
	};
	Minimum: {
		Value: number;
	};
};

export type hourlyDataType = {
	WeatherIcon: number;
	DateTime: number;
	Temperature: {
		Value: number;
	};
	Wind: {
		Speed: { Value: number };
	};
};
