/**
 * WordPress dependencies
 */
 import {
	registerBlockType,
} from '@wordpress/blocks';

/**
 * Components
 */
import * as ctaCard from './components/cta-card';
import * as pricecard from './components/pricecard';
import * as preHeading from './components/pre-heading';
import * as eventDetails from './components/event-details';
import * as rowSection from './components/row-section';
import * as rowColumn from './components/column';
import * as button from './components/button-boot';

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	let { category } = block;

	const { name, settings } = block;

	registerBlockType( name, {
		category,
		...settings,
	} );
};

/**
 * Function to register blocks provided by CoBlocks.
 */
export const registerDPBlocks = () => {
	[
		ctaCard,
		pricecard,
		preHeading,
		eventDetails,
		rowSection,
		rowColumn,
		button
	].forEach( registerBlock );
};

registerDPBlocks();