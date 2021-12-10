import styled from 'styled-components';

export const Wrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	background: ${({ theme }) => theme.colors.primary};

	a {
		display: flex;
		align-items: center;
	}
`;
