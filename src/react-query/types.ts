// forecastTypes:
export type dailyDataType = {
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
export type cityDataType = {
	Key: number;

	Country: {
		LocalizedName: string;
	};
	LocalizedName: string;
};

// userTypes:
export type IUser = {
	email: string;
	firstName: string;
	lastName: string;
	id: number;
	token: string;
};
