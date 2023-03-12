/**
 * External dependencies
 */
 import classnames from 'classnames';
/**
  * WordPress dependencies
  */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

function ButtonSave( {attributes}) {

	const { color, url, buttonText, linkTarget, rel, bootClass, bootOutlineClass, bootSizesClass, bootPopClass, bootAlign } = attributes;

	const classNames = classnames(
		bootClass,
		bootAlign,
		bootOutlineClass,
		bootSizesClass,
		bootPopClass,
		color
	);

	return (
		<div {...useBlockProps.save()}>
			<RichText.Content
				tagName="a"
				className={ 'btn ' + classNames }
				href={ url }
				value={ buttonText }
				target={ linkTarget }
				rel={ rel }
			/>
		</div>
	);
};

export default ButtonSave;