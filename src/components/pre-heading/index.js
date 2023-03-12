/**
 * WordPress dependencies
 */
import { heading as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';

const { name, category, attributes, pretitle, title, parent } = metadata;

const settings = {
	pretitle,
	title,
	parent,
	icon,
	edit,
	save,
	attributes,
	keywords: [
        'dpwpblocks',
        /* translators: block keyword */
        'pre-heading',
    ],
};


export { name, category, metadata, settings };