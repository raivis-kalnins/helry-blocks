const { InspectorControls, RichText } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;
const { Fragment } = wp.element;
const { __ } = wp.i18n;

const BlockEdit = (props) => {
	const { attributes, setAttributes } = props;
	const { pretitleColor, titleColor, columnAlign } = attributes;

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Block Options', 'dpwpblocks')}
					initialOpen={ true }
				>
					<div>
						<SelectControl
							label="event Date Colour"
							value={ pretitleColor }
							options={ [
								{ label: 'Medium Blue', value: 'text-medium-blue' },
								{ label: 'Dark Blue', value: 'text-dark-blue' },
							] }
							onChange={ ( newStyle ) => setAttributes( {pretitleColor: newStyle} ) }
						/>
						<SelectControl
							label="Align"
							value={ columnAlign }
							options={ [
								{ label: 'Left', value: 'text-left' },
								{ label: 'Centre', value: 'text-center' },
							] }
							onChange={ ( newStyle ) => setAttributes( {columnAlign: newStyle} ) }
						/>
						<SelectControl
							label="Title Colour"
							value={ titleColor }
							options={ [
								{ label: 'Default', value: '' },
								{ label: 'Dark Blue', value: 'text-dark-blue' },
								{ label: 'White', value: 'text-white' },
							] }
							onChange={ ( newStyle ) => setAttributes( {titleColor: newStyle} ) }
						/>
					</div>
				</PanelBody>
			</InspectorControls>
			<div>
				<RichText
					tagName="pre" // The tag here is the element output and editable in the admin
					value={ attributes.pretitle } // Any existing content, either from the database or an attribute default
					allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
					onChange={ ( pretitle ) => setAttributes( { pretitle } ) } // Store updated content as a block attribute
					placeholder={ __( 'Event date...' ) } // Display this text before any content has been added by the user
				/>
				<RichText
					tagName="h2" // The tag here is the element output and editable in the admin
					value={ attributes.title } // Any existing content, either from the database or an attribute default
					allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
					onChange={ ( title ) => setAttributes( { title } ) } // Store updated content as a block attribute
					placeholder={ __( 'Event title...' ) } // Display this text before any content has been added by the user
				/>
                <RichText
					tagName="span" // The tag here is the element output and editable in the admin
					value={ attributes.duration } // Any existing content, either from the database or an attribute default
					allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
					onChange={ ( duration ) => setAttributes( { duration } ) } // Store updated content as a block attribute
					placeholder={ __( 'Event duration...' ) } // Display this text before any content has been added by the user
				/>
			</div>
		</Fragment>
	);
};

export default BlockEdit;