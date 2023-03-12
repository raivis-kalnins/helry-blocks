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
 
 const { name, category, attributes, pretitle, title, duration, parent } = metadata;
 
 const settings = {
     pretitle,
     title,
     duration,
     parent,
     icon,
     edit,
     save,
     attributes,
     keywords: [
         'dpwpblocks',
         /* translators: block keyword */
         'event-details',
     ],
 };
 
 
 export { name, category, metadata, settings };