import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion, useResume } from '@hooks';

import ReactPrismjs from '@uiw/react-prismjs';
import 'prismjs/components/prism-json';

const StyledHeroSection = styled.section`
	${({ theme }) => theme.mixins.flexCenter};
	flex-direction: column;
	align-items: flex-start;
	min-height: 100vh;
	height: 100vh;
	padding: 0;

	@media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
		height: auto;
		padding-top: var(--nav-height);
	}

	h1 {
		margin: 0 0 30px 4px;
		color: var(--green);
		font-family: var(--font-mono);
		font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
		font-weight: 400;

		@media (max-width: 480px) {
			margin: 0 0 20px 2px;
		}
	}

	h3 {
		margin-top: 5px;
		color: var(--slate);
		line-height: 0.9;
	}

	p {
		margin: 20px 0 0;
		max-width: 540px;
	}

	.email-link {
		${({ theme }) => theme.mixins.bigButton};
		margin-top: 50px;
	}
`;

const Code = () => {
	const [isMounted, setIsMounted] = useState(false);
	const prefersReducedMotion = usePrefersReducedMotion();

	const { basics, projects, work } = useResume();

	const sections = [basics, projects, work].map((item) => {
		return {
			lang: 'json',
			source: JSON.stringify(item, null, 4),
		};
	});

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		const timeout = setTimeout(() => setIsMounted(true), navDelay);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<StyledHeroSection>
			{prefersReducedMotion ? (
				<>
					{sections.map((item, i) => (
						<div key={i} className="gatsby-highlight">
							<ReactPrismjs language={item.lang} source={item.source} />
						</div>
					))}
				</>
			) : (
				<TransitionGroup component={null}>
					{isMounted &&
						sections.map((item, i) => (
							<CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
								<div key={i} className="gatsby-highlight">
									<ReactPrismjs
										style={{ transitionDelay: `${i + 1}00ms` }}
										language={item.lang}
										source={item.source}
									/>
								</div>
							</CSSTransition>
						))}
				</TransitionGroup>
			)}
		</StyledHeroSection>
	);
};

export default Code;
