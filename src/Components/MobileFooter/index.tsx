import React, { useState } from 'react';

import MobileSearch from '../MobileSearch';

import * as Styled from './styles';

interface MobileFooterProps {}

const MobileFooter: React.FC<MobileFooterProps> = () => {
	const [toggle, setToggle] = useState<boolean>(false);

	return (
		<>
			<Styled.MobileFooter>
				<Styled.FavBtn>Favorites</Styled.FavBtn>
				<Styled.Divider />
				<Styled.SearchBtn
					onClick={() => {
						setToggle(!toggle);
					}}>
					Search
				</Styled.SearchBtn>
				<Styled.Divider />
				<Styled.HomeBtn>Home</Styled.HomeBtn>
			</Styled.MobileFooter>
			{toggle && <MobileSearch setToggle={setToggle} toggle={toggle} />}
		</>
	);
};

export default MobileFooter;
