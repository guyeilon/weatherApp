import React, { useState } from 'react';

import MobileSearchCity from '../MobileSearchCity';

import * as Styled from './styles';

interface MobileFooterProps {}

const MobileFooter: React.FC<MobileFooterProps> = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<>
			<Styled.MobileFooter>
				<Styled.FavWrapper>
					<Styled.FavBtn>Favorites</Styled.FavBtn>
				</Styled.FavWrapper>
				<Styled.Divider1 />
				<Styled.SearchWrapper>
					<Styled.SearchBtn
						onClick={() => {
							setIsExpanded(true);
						}}>
						Search
					</Styled.SearchBtn>
				</Styled.SearchWrapper>
				<Styled.Divider2 />
				<Styled.HomeWrapper>
					<Styled.HomeBtn>Home</Styled.HomeBtn>
				</Styled.HomeWrapper>
			</Styled.MobileFooter>
			{isExpanded && <MobileSearchCity setIsExpanded={setIsExpanded} isExpanded={isExpanded} />}
		</>
	);
};

export default MobileFooter;
