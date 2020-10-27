import styled from 'styled-components';

const Hamburger = styled.div`
	width: ${(p) => p.theme.sidebar.narrow.width};
	height: 24px;
	z-index: 10;

	& span {
		display: block;
		position: relative;
		border-radius: 3px;
		width: 30px;
		height: 5px;
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

		margin: 0 auto;

		background: ${(p) => p.theme.topbar.text};
	}

	& span:nth-child(1) {
		transform: ${(p) => (p.state ? 'translateY(9px) rotate(45deg)' : '')};
	}

	& span:nth-child(3) {
		transform: ${(p) => (p.state ? 'translateY(-9px) rotate(-45deg)' : '')};
	}

	& span:nth-child(2) {
		margin-top: 4px;
		margin-bottom: 4px;
		opacity: ${(p) => (p.state ? 0 : 1)};
		transition: opacity 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
	}

	&:hover {
		cursor: pointer;
	}
`;

export default Hamburger;
