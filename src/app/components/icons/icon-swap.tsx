'use client';

import Icon from './icon';
import React, { useState } from 'react';
import { isEmpty, omit, set } from 'lodash';
import classNames from 'classnames';
interface IconSwapProps extends React.ComponentPropsWithoutRef<'button'> {
	iconOn: string;
	iconOff: string;
	groupOn?: 'web' | 'dev' | 'ios';
	groupOff?: 'web' | 'dev' | 'ios';
	swapAction?: 'hover' | 'click';
	swap?: 'rotate' | 'flip';
}

export default function IconSwap(props: IconSwapProps): JSX.Element {
	const [isActive, setActive] = useState(false);
	let groupOn = props.groupOn != undefined ? props.groupOn : 'web';
	let groupOff = props.groupOff != undefined ? props.groupOff : 'web';
	let swapAction = props.swapAction != undefined ? props.swapAction : 'click';
	let swap = props.swap != undefined ? props.swap : 'flip';

	let classes = classNames('swap', `swap-${swap}`, props.className, {
		'swap-active': isActive,
	});

	let itemProps = omit(props, [
		'iconOn',
		'iconOff',
		'groupOn',
		'groupOff',
		'swapAction',
		'swap',
	]);

	const handleSwap = () => {
		if (isActive) {
			setActive(false);
		}
		setActive(true);
	};

	set(itemProps, 'className', classes);

	if (swapAction == 'click') {
		set(itemProps, 'onClick', handleSwap);
	}

	if (swapAction == 'hover') {
		set(itemProps, 'onMouseEnter', handleSwap);
	}

	return (
		<>
			{!isEmpty(props.iconOff) && !isEmpty(props.iconOn) ? (
				<button {...itemProps}>
					<Icon
						group={groupOff}
						icon={props.iconOff}
						className="swap-off "
						iconClasses="stroke-2"
					/>
					<Icon
						group={groupOn}
						icon={props.iconOn}
						className="swap-on"
						iconClasses="stroke-2"
					/>
				</button>
			) : null}
		</>
	);
}
