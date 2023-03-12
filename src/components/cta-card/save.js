/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {

	const { title, titleColor, mediaUrl, contentStyle, columnAlign, url, linkTarget, altText, btnText, btnOnOff } = attributes;

	const wrapperClasses = classnames( 'faux-link__element', columnAlign, contentStyle );

	return (
		<section 
			{ ...useBlockProps.save( {
				className: wrapperClasses,
			} ) } 
		>
			{ mediaUrl && ( <div className="img-box"><img src={ mediaUrl } alt={ altText } className={ 'card-img' } /></div> ) }
			<div className="desc">
				{ title && <RichText.Content
					tagName="h3"
					value={ title }
				/> }
				<InnerBlocks.Content />
				{ url && <a href={ url } className={ btnOnOff }>{ btnText }</a> }
			</div>
			{ url && <a href={ url } target={ linkTarget } className='faux-link__overlay-link' rel='noopener'></a> }
		</section>
	);
}
