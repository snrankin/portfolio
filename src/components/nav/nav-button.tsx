'use client';
import React, { useContext, HTMLProps, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './nav.module.css';
import { omit } from 'lodash';
export interface NavButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'anchor'> {
	target: string;
	hamburger?: string;
}
export default function NavButton(props: NavButtonProps) {
	let classes = classNames({
		[`${styles.hamburger}`]: !!props.hamburger,
		[`${styles.hamburgerSpin}`]: !!props.hamburger,
	});
	let atts = omit(props, ['target', 'hamburger']);
	return (
		<button
			data-te-collapse-init
			data-te-target={`#${props.target}`}
			aria-controls={props.target}
			aria-expanded="false"
			id={`${props.target}-btn`}
			{...atts}
		>
			{!!props.hamburger && (
				<span className={classes}>
					<span className={`${styles.hamburgerBox}`}>
						<span className={`${styles.hamburgerInner}`}></span>
					</span>
				</span>
			)}
			{props.children}
		</button>
	);
}
