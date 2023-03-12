/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { title, popular, features, price } = attributes;
	const wrapperClasses = classnames('price-card', 'col-4');

	function isPopular() {

	}

	return (
		<div {...useBlockProps.save({
			className: wrapperClasses,
		})}>
			<div class="card-heading matchheight">
				{popular === true &&
					<span class="popular-mark">MOST POPULAR</span>
				}
				<RichText.Content
					tagName="h3"
					value={ title }
				/>
			</div>
			<div class="card-body bg-lightgrey matchheight">
				<p class="text-center price">{ price }</p>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
