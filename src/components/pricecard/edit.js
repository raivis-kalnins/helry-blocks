/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	InspectorControls,
	RichText,
	MediaUpload,
	MediaUploadCheck
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	CheckboxControl,
	ResponsiveWrapper,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const TEMPLATE = [
	['core/paragraph', {placeholder: 'Text...'}],
	['core/heading', {level: 4, placeholder: 'Heading...', className: 'pl-4', content: 'Features'}],
	['core/list', {className: 'pl-4'}]
];

const ALLOWED_BLOCKS = ['core/paragraph', 'core/heading', 'core/list'];

function ColumnEdit (props) {
	const { attributes, setAttributes } = props;

	const { title, features, popular, price } = attributes;

	const contentClasses = classnames('content');

	return (
		<div>
			<InspectorControls>
				<PanelBody title={ __( 'Card settings' ) }
							initialOpen={ true }
				>
					<CheckboxControl
						label="Is popular"
						help="Is this a popular product or not?"
						checked={ popular || false }
						onChange={ (newPopular) => setAttributes( { popular: newPopular } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ contentClasses }>
				<p>-------Start Price card--------</p>
				<RichText
					tagName="h3" // The tag here is the element output and editable in the admin
					value={ title } // Any existing content, either from the database or an attribute default
					allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
					onChange={ ( title ) => setAttributes( { title: title } ) } // Store updated content as a block attribute
					placeholder={ __( 'Heading...' ) } // Display this text before any content has been added by the user
				/>
				<RichText
					tagName="p" // The tag here is the element output and editable in the admin
					value={ price } // Any existing content, either from the database or an attribute default
					allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
					onChange={ ( price ) => setAttributes( { price: price } ) } // Store updated content as a block attribute
					placeholder={ __( 'Price...' ) } // Display this text before any content has been added by the user
				/>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } template={ TEMPLATE } />
				<p>-------End Price card--------</p>

			</div>
		</div>
	);
}

export default ColumnEdit;
