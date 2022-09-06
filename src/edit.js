/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	InnerBlocks,
	useBlockProps,
	MediaUploadCheck,
	ColorGradientControl,// editor
	InspectorControls,
	BlockControls,
	MediaUpload
} from '@wordpress/block-editor';

import { // components
	Button,
	CheckboxControl,
	ColorPalette,
	PanelBody,
	PanelRow,
	RangeControl,
	SelectControl,
	ServerSideRender,
	ToggleControl,
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import {
	getBlockClasses,
	getMainStylez,
	getImageLayer,
	getVideoLayer,
	getColorLayer
} from './section-parts'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	const colors = [
		{ name: 'red', color: '#e40303' },
		{ name: 'orange', color: '#ff8c00' },
		{ name: 'yellow', color: '#ffed00' },
		{ name: 'green', color: '#008026' },
		{ name: 'teal', color: '#05929F' },
		{ name: 'darkteal', color: '#073f46' },
		{ name: 'lightblue', color: '#61c9d8' },
		{ name: 'paleblue', color: '#ebf6f7' },
		{ name: 'brown', color: '#613000' },
		{ name: 'gray', color: '#666' },
		{ name: 'black', color: '#000' },
		{ name: 'white', color: '#fff' },
	];

	const blockClasses = getBlockClasses(attributes)
	const stylez = getMainStylez(attributes)
	const imageLayer = getImageLayer(attributes)
	const videoLayer = getVideoLayer(attributes)
	const colorLayer = getColorLayer(attributes)

	let limitWidthControl = !attributes.fullWidth ? <RangeControl
		label="Limit Width"
		value={attributes.width}
		onChange={(width) => setAttributes({ width: width })}
		min={320}
		max={1400}
	/> : ''

	let customBgSizeControl = attributes.backgroundSize == 'custom' ? <RangeControl
		label="Limit Width"
		value={attributes.backgroundSizeCustom}
		onChange={(backgroundSizeCustom) => setAttributes({ backgroundSizeCustom: backgroundSizeCustom })}
		min={0}
		max={100}
	/> : ''

	return (
		<>
			<InspectorControls>
				<PanelBody title="Size" initialOpen={false}>
					<ToggleControl
						label="Full Width"
						checked={attributes.fullWidth}
						onChange={(fullWidth) => setAttributes({ fullWidth: fullWidth })}
					/>
					{limitWidthControl}
				</PanelBody>
				<PanelBody title="Padding" initialOpen={false}>
					<RangeControl
						label="Top Padding"
						value={attributes.paddingTop}
						onChange={(paddingTop) => setAttributes({ paddingTop: paddingTop })}
						min={0}
						max={300}
					/>
					<RangeControl
						label="Right Padding"
						value={attributes.paddingRight}
						onChange={(paddingRight) => setAttributes({ paddingRight: paddingRight })}
						min={0}
						max={300}
					/>
					<RangeControl
						label="Bottom Padding"
						value={attributes.paddingBottom}
						onChange={(paddingBottom) => setAttributes({ paddingBottom: paddingBottom })}
						min={0}
						max={300}
					/>
					<RangeControl
						label="Left Padding"
						value={attributes.paddingLeft}
						onChange={(paddingLeft) => setAttributes({ paddingLeft: paddingLeft })}
						min={0}
						max={300}
					/>
				</PanelBody>
				<PanelBody title="Border" initialOpen={false}>
					<label>Border Color</label>
					<ColorPalette
						colors={colors}
						value={attributes.borderColor}
						onChange={(borderColor) => setAttributes({ borderColor: borderColor })}
					/>
					<RangeControl
						label="Border Width"
						value={attributes.borderWidth}
						onChange={(borderWidth) => setAttributes({ borderWidth: borderWidth })}
						min={0}
						max={30}
					/>
					<RangeControl
						label="Border Radius"
						value={attributes.borderRadius}
						onChange={(borderRadius) => setAttributes({ borderRadius: borderRadius })}
						min={0}
						max={30}
					/>
					<SelectControl
						label="Border Style"
						value={attributes.borderStyle}
						onChange={(borderStyle) => setAttributes({ borderStyle: borderStyle })}
						options={[
							{ label: 'Solid', value: 'solid' },
							{ label: 'Dotted', value: 'dotted' },
							{ label: 'Dashed', value: 'dashed' },
							{ label: 'Double', value: 'double' },
						]}
					/>
				</PanelBody>
				<PanelBody title="Background Video" initialOpen={false}>
					<MediaUploadCheck>
						<MediaUpload
							className="cw-section-bg-video wp-admin-cw-section-bg-video"
							allowedTypes={['video/mp4']}
							multiple={false}
							value={attributes.videoData ? attributes.videoData.id : ''}
							onSelect={videoData => setAttributes({ videoData: videoData })}
							render={({ open }) => (
								attributes.videoData.id ?
									<div>
										<p>{attributes.videoData.filename}</p>

										<p>
											<Button onClick={() => setAttributes({ videoData: '' })} className="button is-small">Remove</Button>
										</p>
									</div> :
									<Button onClick={open} className="button">Select/Upload Video</Button>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>
				<PanelBody title="Background Image" initialOpen={false}>
					<MediaUploadCheck>
						<MediaUpload
							className="cw-section-bg-image wp-admin-cw-section-bg-image"
							allowedTypes={['image']}
							multiple={false}
							value={attributes.imgData ? attributes.imgData.id : ''}
							onSelect={imgData => setAttributes({ imgData: imgData })}
							render={({ open }) => (
								attributes.imgData.id ?
									<div>
										<p>
											<img src={attributes.imgData.url} width={attributes.imgData.width / 2} />
										</p>

										<p>
											<Button onClick={() => setAttributes({ imgData: '' })} className="button is-small">Remove</Button>
										</p>
									</div> :
									<Button onClick={open} className="button">Select/Upload Image</Button>
							)}
						/>
					</MediaUploadCheck>
					<SelectControl
						label="Position"
						value={attributes.backgroundPosition}
						onChange={(backgroundPosition) => setAttributes({ backgroundPosition: backgroundPosition })}
						options={[
							{ label: 'Top Left', value: 'top left' },
							{ label: 'Top Center', value: 'top center' },
							{ label: 'Top Right', value: 'top right' },
							{ label: 'Center Left', value: 'center left' },
							{ label: 'Center Center', value: 'center center' },
							{ label: 'Center Right', value: 'center right' },
							{ label: 'Bottom Left', value: 'bottom left' },
							{ label: 'Bottom Center', value: 'bottom center' },
							{ label: 'Bottom Right', value: 'bottom right' },
						]}
					/>
					<SelectControl
						label="Size"
						value={attributes.backgroundSize}
						onChange={(backgroundSize) => setAttributes({ backgroundSize: backgroundSize })}
						options={[
							{ label: 'Cover', value: 'cover' },
							{ label: 'Contain', value: 'contain' },
							// { label: 'Custom', value: 'custom' },
						]}
					/>
					{customBgSizeControl}
					<SelectControl
						label="Attachment"
						value={attributes.backgroundAttachment}
						onChange={(backgroundAttachment) => setAttributes({ backgroundAttachment: backgroundAttachment })}
						options={[
							{ label: 'Normal', value: 'scroll' },
							{ label: 'Fixed', value: 'fixed' },
						]}
					/>
					<SelectControl
						label="Repeat"
						value={attributes.backgroundRepeat}
						onChange={(backgroundRepeat) => setAttributes({ backgroundRepeat: backgroundRepeat })}
						options={[
							{ label: 'Repeat', value: 'repeat' },
							{ label: 'No Repeat', value: 'no-repeat' },
						]}
					/>
				</PanelBody>
				<PanelBody title="Background Color" initialOpen={false}>
					<label>Solid Color</label>
					<ColorPalette
						colors={colors}
						value={attributes.backgroundColor}
						onChange={(backgroundColor) => setAttributes({ backgroundColor: backgroundColor })}
					/>
					<label>Gradient Color</label>
					<ColorPalette
						colors={colors}
						value={attributes.backgroundColor2}
						onChange={(backgroundColor2) => setAttributes({ backgroundColor2: backgroundColor2 })}
					/>
					<RangeControl
						label="Gradient Angle"
						value={attributes.gradAngle}
						onChange={(gradAngle) => setAttributes({ gradAngle: gradAngle })}
						min={0}
						max={360}
					/>
				</PanelBody>
				<PanelBody title="Background Options" initialOpen={false}>
					<ToggleControl
						label="Make Background Full Browser Width"
						checked={attributes.fullwidthBg}
						onChange={(fullwidthBg) => setAttributes({ fullwidthBg: fullwidthBg })}
					/>
					<RangeControl
						label="Background Image Opacity"
						value={attributes.opacity}
						onChange={(opacity) => setAttributes({ opacity: opacity })}
						min={0}
						max={100}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className={blockClasses} >
					<div className="cw-section-block-bg" style={{
						borderWidth: attributes.borderWidth,
						borderRadius: attributes.borderRadius,
						borderColor: attributes.borderColor,
						borderStyle: attributes.borderStyle ? attributes.borderStyle : 'solid',
					}}>
						{videoLayer}
						{imageLayer}
						{colorLayer}
					</div>

					<div
						className="cw-section-block-content"
						style={stylez}
					>
						<div className="cw-section-block-inner">
							<InnerBlocks />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
