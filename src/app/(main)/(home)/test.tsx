'use client';
import React from 'react';
import Section from '@/components/section/section';
export default function Test(): JSX.Element {
	const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
	const colors = [
		'primary',
		'secondary',
		'accent',
		'info',
		'success',
		'warning',
		'error',
		'neutral',
		'base',
	];

	const colorsBG = [
		'bg-primary-50',
		'bg-primary-100',
		'bg-primary-200',
		'bg-primary-300',
		'bg-primary-400',
		'bg-primary-500',
		'bg-primary-600',
		'bg-primary-700',
		'bg-primary-800',
		'bg-primary-900',
		'bg-primary-950',
		'bg-secondary-50',
		'bg-secondary-100',
		'bg-secondary-200',
		'bg-secondary-300',
		'bg-secondary-400',
		'bg-secondary-500',
		'bg-secondary-600',
		'bg-secondary-700',
		'bg-secondary-800',
		'bg-secondary-900',
		'bg-secondary-950',
		'bg-accent-50',
		'bg-accent-100',
		'bg-accent-200',
		'bg-accent-300',
		'bg-accent-400',
		'bg-accent-500',
		'bg-accent-600',
		'bg-accent-700',
		'bg-accent-800',
		'bg-accent-900',
		'bg-accent-950',
		'bg-info-50',
		'bg-info-100',
		'bg-info-200',
		'bg-info-300',
		'bg-info-400',
		'bg-info-500',
		'bg-info-600',
		'bg-info-700',
		'bg-info-800',
		'bg-info-900',
		'bg-info-950',
		'bg-success-50',
		'bg-success-100',
		'bg-success-200',
		'bg-success-300',
		'bg-success-400',
		'bg-success-500',
		'bg-success-600',
		'bg-success-700',
		'bg-success-800',
		'bg-success-900',
		'bg-success-950',
		'bg-warning-50',
		'bg-warning-100',
		'bg-warning-200',
		'bg-warning-300',
		'bg-warning-400',
		'bg-warning-500',
		'bg-warning-600',
		'bg-warning-700',
		'bg-warning-800',
		'bg-warning-900',
		'bg-warning-950',
		'bg-error-50',
		'bg-error-100',
		'bg-error-200',
		'bg-error-300',
		'bg-error-400',
		'bg-error-500',
		'bg-error-600',
		'bg-error-700',
		'bg-error-800',
		'bg-error-900',
		'bg-error-950',
		'bg-neutral-50',
		'bg-neutral-100',
		'bg-neutral-200',
		'bg-neutral-300',
		'bg-neutral-400',
		'bg-neutral-500',
		'bg-neutral-600',
		'bg-neutral-700',
		'bg-neutral-800',
		'bg-neutral-900',
		'bg-neutral-950',
		'bg-base-50',
		'bg-base-100',
		'bg-base-200',
		'bg-base-300',
		'bg-base-400',
		'bg-base-500',
		'bg-base-600',
		'bg-base-700',
		'bg-base-800',
		'bg-base-900',
		'bg-base-950',
	];

	const colorGrid: any[] = [];

	const test: string[] = [];

	colors.forEach((c) => {
		let row = (
			<div className="grid grid-cols-11 gap-2">
				{levels.map((l, i) => {
					test.push(`${c}-${l}`);
					return (
						<div
							key={i}
							className={`bg-${c}-${l} min-h-[3rem] text-center`}
						>
							<code>{`${c}-${l}`}</code>
						</div>
					);
				})}
			</div>
		);

		colorGrid.push(row);
	});
	return <Section id="test">{colorGrid}</Section>;
}
