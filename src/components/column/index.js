/**
 * WordPress dependencies
 */
import { column as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import edit from './edit';
import metadata from './block.json';
import save from './save';

const { name, category, attributes, title, parent } = metadata;

const settings = {
	title,
	parent,
	icon,
	edit,
	save,
	deprecated,
	attributes,
	keywords: [
        'dpwpblocks',
        /* translators: block keyword */
        'column',
    ],
};


export { name, category, metadata, settings };