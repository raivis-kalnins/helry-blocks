/**
 * WordPress dependencies
 */
import { postFeaturedImage as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
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
	attributes,
	keywords: [
        'dpwpblocks',
        'card',
    ],
};


export { name, category, metadata, settings };