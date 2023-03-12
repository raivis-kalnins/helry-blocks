/**
 * Internal dependencies
 */
 import edit from './edit';
 import save from './save';
 import metadata from './block.json';
 // import transforms from './transforms';
 
 /**
   * WordPress dependencies
   */
 import { __ } from '@wordpress/i18n';
 import { button as icon } from '@wordpress/icons';
 
 /**
  * Block constants
  */
 const { name, category, attributes } = metadata;
 
 const settings = {
     /* translators: block name */
     title: __( 'DP Button', 'dpwpblocks' ),
     /* translators: block description */
     description: __( 'Bootstrap & Custom Style Buttons', 'dpwpblocks' ),
     icon,
     keywords: [
         'dpwpblocks',
         /* translators: block keyword */
         __( 'button-boot', 'dpwpblocks' ),
     ],
     supports: {
         html: false,
     },
     attributes,
     // transforms,
     edit,
     save,
 };
 
 export { name, category, metadata, settings };