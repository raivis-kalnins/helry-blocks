const { InspectorControls, MediaUpload, MediaUploadCheck, RichText, InnerBlocks } = wp.blockEditor;
const { PanelBody, Button, ResponsiveWrapper, SelectControl } = wp.components;
const { Fragment } = wp.element;
const { __ } = wp.i18n;

const BlockEdit = (props) => {
	const { attributes, setAttributes } = props;
	const { pretitleColor, titleColor, mediaUrl, columnAlign } = attributes;

	const removeMedia = () => {
		props.setAttributes({
			mediaId: 0,
			mediaUrl: ''
		});
	}

 	const onSelectMedia = (media) => {
		props.setAttributes({
			mediaId: media.id,
			mediaUrl: media.url
		});
	}

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Block Options', 'dpwpblocks')}
					initialOpen={ true }
				>
					<div className="pre-heading">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectMedia}
								value={attributes.mediaId}
								allowedTypes={ ['image'] }
								render={({open}) => (
									<Button
										className={attributes.mediaId == 0 ? 'pre-heading__toggle' : 'pre-heading__preview'}
										onClick={open}
									>
										{attributes.mediaId == 0 && __('Choose an image', 'dpwpblocks')}
										{props.media != undefined &&
											<ResponsiveWrapper
									    		naturalWidth={ props.media.media_details.width }
												naturalHeight={ props.media.media_details.height }
									    	>
									    		<img src={props.media.source_url} />
									    	</ResponsiveWrapper>
						            		}
									</Button>
								)}
							/>
						</MediaUploadCheck>
						{attributes.mediaId != 0 &&
							<MediaUploadCheck>
								<MediaUpload
									title={__('Replace image', 'dpwpblocks')}
									value={attributes.mediaId}
									onSelect={onSelectMedia}
									allowedTypes={['image']}
									render={({open}) => (
										<Button onClick={open} isDefault>{__('Replace image', 'dpwpblocks')}</Button>
									)}
								/>
							</MediaUploadCheck>
						}
						{attributes.mediaId != 0 &&
							<MediaUploadCheck>
								<Button onClick={removeMedia} isLink isDestructive>{__('Remove image', 'dpwpblocks')}</Button>
							</MediaUploadCheck>
						}
					</div>
					<div>
						<SelectControl
							label="Pre Title Colour"
							value={ pretitleColor }
							options={ [
								{ label: 'Light Green', value: 'text-light-green' },
								{ label: 'Light Green Icon', value: 'text-light-green-icon' },
								{ label: 'Light Blue', value: 'text-light-blue' },
								{ label: 'White', value: 'text-white' },
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
				<img
					// alt={ __( 'Edit image' ) }
					// title={ __( 'Edit image' ) }
					className={ 'edit-image-preview' }
					src={ mediaUrl }
				/>
				<RichText
					tagName="pre" // The tag here is the element output and editable in the admin
					value={ attributes.pretitle } // Any existing content, either from the database or an attribute default
					allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
					onChange={ ( pretitle ) => setAttributes( { pretitle } ) } // Store updated content as a block attribute
					placeholder={ __( 'Pre Heading...' ) } // Display this text before any content has been added by the user
				/>
				<RichText
					tagName="h2" // The tag here is the element output and editable in the admin
					value={ attributes.title } // Any existing content, either from the database or an attribute default
					allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
					onChange={ ( title ) => setAttributes( { title } ) } // Store updated content as a block attribute
					placeholder={ __( 'Heading...' ) } // Display this text before any content has been added by the user
				/>
			</div>
		</Fragment>
	);
};

export default BlockEdit;