import { isEmpty } from 'lodash';

import { TypeLocationFields } from '@/lib/types';

export interface AddressProps extends TypeLocationFields {
	addHtml?: boolean;
}
export default function Address(props: AddressProps) {
	const { street, city, state, postal, addHtml } = props;

	const line1Arr = [],
		line2Arr = [];
	let line1, line2;

	if (street != undefined && !isEmpty(street)) {
		if (addHtml) {
			line1Arr.push(<span className="street">{street}</span>);
		} else {
			line1Arr.push(street);
		}
	}
	if (city != undefined && !isEmpty(city)) {
		let fullCity = city;

		if (state != undefined && !isEmpty(state)) {
			fullCity += ',';
		}
		if (addHtml) {
			line2Arr.push(<span className="city">{fullCity}</span>);
		} else {
			line2Arr.push(fullCity);
		}
	}
	if (state != undefined && !isEmpty(state)) {
		if (addHtml) {
			line2Arr.push(<span className="state">{state}</span>);
		} else {
			line2Arr.push(state);
		}
	}
	if (postal != undefined && !isEmpty(postal)) {
		if (addHtml) {
			line2Arr.push(<span className="postal">{postal}</span>);
		} else {
			line2Arr.push(postal);
		}
	}

	if (line1Arr.length) {
		line1 = addHtml ? (
			<span className="line-1">{line1Arr.join('')}</span>
		) : (
			line1Arr.join(' ')
		);
	}

	if (line2Arr.length) {
		line2 = addHtml ? (
			<span className="line-2">{line2Arr.join('')}</span>
		) : (
			line2Arr.join(' ')
		);
	}

	let fullAddressArr = [];
	let fullAddress = '';

	if (!addHtml) {
		if (line1 != undefined && !isEmpty(line1)) {
			fullAddressArr.push(line1);
		}
		if (line2 != undefined && !isEmpty(line2)) {
			fullAddressArr.push(line2);
		}
		fullAddress = fullAddressArr.join(', ');
	}

	return (
		<>
			{addHtml ? (
				<address>
					{line1}
					{line2}
				</address>
			) : (
				fullAddress
			)}
		</>
	);
}
