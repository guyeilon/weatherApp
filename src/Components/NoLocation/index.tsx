import React from 'react';
import * as Styled from './styles';

export interface NoLocationProps {}

const NoLocation: React.FC<NoLocationProps> = Props => {
	return (
		<>
			<Styled.NoLocationWrapper>
				<Styled.SvgNoLocation />
				<Styled.SvgLogo />
				<Styled.header>Set up location</Styled.header>
				<Styled.DesktopTxt>
					To identify your location please allow WeatherApp to know your location.
				</Styled.DesktopTxt>
				<Styled.MobileTxt>
					We probably could not find your current location. Please turn on the location by phone or select a
					city in the search button
				</Styled.MobileTxt>
				<Styled.ButtonWrapper>
					<Styled.LocationBtn secondary>Open location services</Styled.LocationBtn>
					<Styled.SearchBtn ghost>Search city</Styled.SearchBtn>
				</Styled.ButtonWrapper>
			</Styled.NoLocationWrapper>
		</>
	);
};

export default NoLocation;
