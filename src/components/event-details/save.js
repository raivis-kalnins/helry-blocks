/**
 * External dependencies
 */
 import classnames from 'classnames';

 /**
  * WordPress dependencies
  */
 import { useBlockProps, RichText } from '@wordpress/block-editor';
 
 export default function save( { attributes } ) {
	 const { pretitle, pretitleColor, title, titleColor, duration, contentStyle, columnAlign } = attributes;
 
	 const wrapperClasses = classnames( 'event-details', columnAlign, contentStyle );
 
	 let pretitleClasses;
	 let titleClasses;
 
	pretitleClasses = ['pretitle'];
	titleClasses = ['h2'];
 
	pretitleClasses = classnames(...pretitleClasses, pretitleColor)
	titleClasses = classnames(...titleClasses, titleColor)
 
	 return (
		 <div
			 { ...useBlockProps.save( {
				 className: wrapperClasses,
			 } ) }
		 >
			 <pre className={ pretitleClasses }>{ pretitle }</pre>
			 <RichText.Content
				 tagName="h2" // The tag here is the element output and editable in the admin
				 value={ title } // Any existing content, either from the database or an attribute default
				 className={ titleClasses }
			 />
			 <RichText.Content
				 tagName="span" // The tag here is the element output and editable in the admin
				 value={ duration } // Any existing content, either from the database or an attribute default
				 className="duration"
			 />
		 </div>
	 );
 }
 