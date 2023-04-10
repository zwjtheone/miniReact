import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	ElementType,
	Key,
	Props,
	ReactElementType,
	Ref,
	Type
} from 'shared/ReactTypes';
// ReactElement

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	return {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'Jaxson'
	};
};

export const jsx = (type: ElementType, config: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;
	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}

		return ReactElement(type, key, ref, props);
	}
};

export const jsxDEV = jsx;
