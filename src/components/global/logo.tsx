'use client';
import React from 'react';
import LogoImg from '@/img/logo.svg';
import classNames from 'classnames';
export default function Logo({ className }: { className?: string }) {
	let classes = classNames('logo', className);

	return <LogoImg className={classes} />;
}
