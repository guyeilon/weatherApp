import React, { useState } from 'react';

import MobileSearch from '../MobileSearch';

import * as Styled from './styles';

interface MobileFooterProps {}

const MobileFooter: React.FC<MobileFooterProps> = () => {
	const [toggle, setToggle] = useState<boolean>(false);

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
							setToggle(!toggle);
						}}>
						Search
					</Styled.SearchBtn>
				</Styled.SearchWrapper>
				<Styled.Divider2 />
				<Styled.HomeWrapper>
					<Styled.HomeBtn>Home</Styled.HomeBtn>
				</Styled.HomeWrapper>
			</Styled.MobileFooter>
			{toggle && <MobileSearch setToggle={setToggle} toggle={toggle} />}
		</>
	);
};

export default MobileFooter;
