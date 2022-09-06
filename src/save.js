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
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import {
	getBlockClasses,
	getMainStylez,
	getImageLayer,
	getVideoLayer,
	getColorLayer
} from './section-parts'

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const { attributes } = props;

	const blockClasses = getBlockClasses(attributes)
	const stylez = getMainStylez(attributes)
	const imageLayer = getImageLayer(attributes)
	const videoLayer = getVideoLayer(attributes)
	const colorLayer = getColorLayer(attributes)

	return (
		<div {...useBlockProps.save()}>
			<div className={blockClasses}>
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
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}
