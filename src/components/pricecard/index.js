/**
 * WordPress dependencies
 */
import { currencyPound as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';

const { name, category, attributes, title } = metadata;

const settings = {
	title,
	icon,
	edit,
	save,
	attributes,
	keywords: [
        'dpwpblocks',
        'card',
    ],
};


export { name, category, metadata, settings };