/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { pretitle, pretitleColor, title, titleColor, mediaUrl, contentStyle, columnAlign } = attributes;

	const wrapperClasses = classnames( 'pre-heading', columnAlign, contentStyle );

	const imgClasses = classnames(
		'img-fluid', 'matchheight', 'px-2'
	);

	let pretitleClasses;
	let titleClasses;

	switch (Boolean(mediaUrl)) {
		case true:
			pretitleClasses = ['pretitle'];
			break;
		case false:
			pretitleClasses = ['pretitle'];
			break;
	}

	switch (Boolean(mediaUrl)) {
		case true:
			titleClasses = ['h2'];
			break;
		case false:
			titleClasses = ['h2'];
			break;
	}

	pretitleClasses = classnames(...pretitleClasses, pretitleColor)
	titleClasses = classnames(...titleClasses, titleColor)

	return (
		<div
			{ ...useBlockProps.save( {
				className: wrapperClasses,
			} ) }
		>
			<img
				// alt={ __( 'Edit image' ) }
				// title={ __( 'Edit image' ) }
				className={ imgClasses }
				src={ mediaUrl }
			/>
			<pre className={ pretitleClasses }>{ pretitle }</pre>
			<RichText.Content
				tagName="h2" // The tag here is the element output and editable in the admin
				value={ title } // Any existing content, either from the database or an attribute default
				className={ titleClasses }
			/>
		</div>
	);
}
