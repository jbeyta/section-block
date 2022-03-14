/* global wp: false */

import React from 'react';

if (wp.element && wp.editor) {
    const { __ } = wp.i18n; // Import __() from wp.i18n

    const {
        registerBlockType,
        getBlockDefaultClassName
    } = wp.blocks; // Import registerBlockType() from wp.blocks\

    const {
        InnerBlocks,
        useBlockProps,
        MediaUploadCheck,
    } = wp.blockEditor; // Import registerBlockType() from wp.blocks\

    // const { serverSideRender: ServerSideRender } = wp;
    const {
        Button,
        CheckboxControl,
        ColorPalette,
        PanelBody,
        PanelRow,
        RangeControl,
        SelectControl,
        ServerSideRender,
        ToggleControl,
        TextControl,
    } = wp.components;

    const {
        ColorGradientControl,
        InspectorControls,
        BlockControls,
        MediaUpload // Thanks WP!
    } = wp.editor;

    const el = wp.element.createElement;

    const icon = el('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 219.93 219.93',
    },
        el('path', {
            'd': 'M16.74,0V219.93H0V0ZM219.93,0H203.19V219.93h16.74ZM164.5,0V219.93H55.43V0Zm-8.3,211.63V8.3H63.73V211.63Z',
        })
    );

    // const ALLOWED_BLOCKS = [
    //     'core/image',
    //     'core/paragraph',
    //     'core/heading',
    //     'core/list',
    //     'core/quote',
    //     'core/pullquote',
    //     'core/table',
    //     'core/verse',
    //     'core/gallery',
    //     'core/audio',
    //     'core/cover',
    //     'core/file',
    //     'core/media-text',
    //     'core/video',
    //     'core/buttons',
    //     'core/columns',
    //     'core/group',
    //     'core/separator',
    //     'core/categories',
    //     'core/latest-comments',
    //     'core/latest-posts',
    //     'core/rss',
    //     'core/social-icons',
    //     'core/tag-cloud',
    //     'core/search',
    //     'core/spacer',
    //     'cw-blocks/responsive-image',
    // ];

    const colors = [
        { name: 'red', color: '#e40303' },
        { name: 'orange', color: '#ff8c00' },
        { name: 'yellow', color: '#ffed00' },
        { name: 'green', color: '#008026' },
        { name: 'blue', color: '#004dff' },
        { name: 'purple', color: '#750787' },
        { name: 'light-blue', color: '#61c9d8' },
        { name: 'pink', color: '#ff80e0' },
        { name: 'brown', color: '#613000' },
        { name: 'gray', color: '#666' },
        { name: 'black', color: '#000' },
        { name: 'white', color: '#fff' },
    ];

    const getBlockClasses = function (attributes) { return attributes.fullwidth ? 'cw-section-block-mother fullw' : 'cw-section-block-mother' }

    const getMainStylez = function (attributes) {
        return {
            paddingTop: attributes.paddingTop + 'px',
            paddingRight: attributes.paddingRight + 'px',
            paddingBottom: attributes.paddingBottom + 'px',
            paddingLeft: attributes.paddingLeft + 'px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            maxWidth: attributes.width ? attributes.width + 'px' : 'none',
        }
    }

    const getImageLayer = function (attributes) {
        return attributes.imgData.url ? <div
            className="cw-section-block-bg-img"
            style={{
                opacity: attributes.opacity + '%',
                backgroundPosition: attributes.backgroundPosition,
                backgroundSize: attributes.backgroundSize,
                backgroundAttachment: attributes.backgroundAttachment,
                backgroundRepeat: attributes.backgroundRepeat,
                backgroundImage: attributes.imgData.url ? 'url(' + attributes.imgData.url + ')' : '',
            }}
        ></div> : ''
    }

    const getVideoLayer = function (attributes) {
        return attributes.videoData.url ? <video
            style={{
                opacity: attributes.opacity + '%',
            }}
            autoplay
            loop
            muted
        >
            <source
                src={attributes.videoData.url}
                type='video/mp4'
            />
        </video> : ''
    }

    const getColorLayer = function (attributes) {        
        return attributes.backgroundColor ? <div
            className="cw-section-block-bg-color"
            style={{
                backgroundColor: attributes.backgroundColor,
                background: (attributes.backgroundColor && attributes.backgroundColor2) ? 'linear-gradient(' + attributes.gradAngle + 'deg, ' + attributes.backgroundColor + ' 0%, ' + attributes.backgroundColor2 + ' 100%)' : attributes.backgroundColor
            }}
        ></div> : ''
    }


    registerBlockType('cw-blocks/section', {
        title: 'Section',
        icon: icon,
        category: 'text',
        attributes: {
            paddingTop: {
                type: 'number',
                default: 15
            },
            paddingRight: {
                type: 'number',
                default: 15
            },
            paddingBottom: {
                type: 'number',
                default: 15
            },
            paddingLeft: {
                type: 'number',
                default: 15
            },
            width: {
                type: 'number',
                default: 1400
            },
            height: {
                type: 'number',
                default: 0
            },
            imgData: {
                type: 'object',
                default: {}
            },
            videoData: {
                type: 'object',
                default: {}
            },
            backgroundPosition: {
                type: 'string',
                default: 'center center'
            },
            backgroundSize: {
                type: 'string',
                default: 'cover'
            },
            backgroundAttachment: {
                type: 'string',
                default: 'normal'
            },
            backgroundRepeat: {
                type: 'string',
                default: 'no-repeat'
            },
            fullwidth: {
                type: 'boolean',
                default: false
            },
            opacity: {
                type: 'number',
                default: 100
            },
            backgroundColor: {
                type: 'string',
                default: ''
            },
            backgroundColor2: {
                type: 'string',
                default: ''
            },
            gradAngle: {
                type: 'number',
                default: 0
            },
            borderWidth: {
                type: 'number',
                default: 0
            },
            borderRadius: {
                type: 'number',
                default: 0
            },
            borderColor: {
                type: 'string',
                default: ''
            },
            borderStyle: {
                type: 'string',
                default: 'solid'
            },
        },

        edit: (props) => {
            const blockProps = useBlockProps();
            const { setAttributes } = props;
            const { attributes } = props;

            const blockClasses = getBlockClasses(props.attributes)
            const stylez = getMainStylez(props.attributes)
            const imageLayer = getImageLayer(props.attributes)
            const videoLayer = getVideoLayer(props.attributes)
            const colorLayer = getColorLayer(props.attributes)

            return [
                <InspectorControls>
                    <PanelBody title="Size" initialOpen={false}>
                        <RangeControl
                            label="Width"
                            value={props.attributes.width}
                            onChange={(width) => setAttributes({ width: width })}
                            min={320}
                            max={1400}
                        />
                    </PanelBody>
                    <PanelBody title="Padding" initialOpen={false}>
                        <RangeControl
                            label="Top Padding"
                            value={props.attributes.paddingTop}
                            onChange={(paddingTop) => setAttributes({ paddingTop: paddingTop })}
                            min={0}
                            max={300}
                        />
                        <RangeControl
                            label="Right Padding"
                            value={props.attributes.paddingRight}
                            onChange={(paddingRight) => setAttributes({ paddingRight: paddingRight })}
                            min={0}
                            max={300}
                        />
                        <RangeControl
                            label="Bottom Padding"
                            value={props.attributes.paddingBottom}
                            onChange={(paddingBottom) => setAttributes({ paddingBottom: paddingBottom })}
                            min={0}
                            max={300}
                        />
                        <RangeControl
                            label="Left Padding"
                            value={props.attributes.paddingLeft}
                            onChange={(paddingLeft) => setAttributes({ paddingLeft: paddingLeft })}
                            min={0}
                            max={300}
                        />
                    </PanelBody>
                    <PanelBody title="Border" initialOpen={false}>
                        <label>Border Color</label>
                        <ColorPalette
                            colors={colors}
                            value={props.attributes.borderColor}
                            onChange={(borderColor) => setAttributes({ borderColor: borderColor })}
                        />
                        <RangeControl
                            label="Border Width"
                            value={props.attributes.borderWidth}
                            onChange={(borderWidth) => setAttributes({ borderWidth: borderWidth })}
                            min={0}
                            max={30}
                        />
                        <RangeControl
                            label="Border Radius"
                            value={props.attributes.borderRadius}
                            onChange={(borderRadius) => setAttributes({ borderRadius: borderRadius })}
                            min={0}
                            max={30}
                        />
                        <SelectControl
                            label="Border Style"
                            value={props.attributes.borderStyle}
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
                                value={props.attributes.videoData ? props.attributes.videoData.id : ''}
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
                                value={props.attributes.imgData ? props.attributes.imgData.id : ''}
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
                            value={props.attributes.backgroundPosition}
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
                            value={props.attributes.backgroundSize}
                            onChange={(backgroundSize) => setAttributes({ backgroundSize: backgroundSize })}
                            options={[
                                { label: 'Cover', value: 'cover' },
                                { label: 'Contain', value: 'contain' },
                            ]}
                        />
                        <SelectControl
                            label="Attachment"
                            value={props.attributes.backgroundAttachment}
                            onChange={(backgroundAttachment) => setAttributes({ backgroundAttachment: backgroundAttachment })}
                            options={[
                                { label: 'Normal', value: 'scroll' },
                                { label: 'Fixed', value: 'fixed' },
                            ]}
                        />
                        <SelectControl
                            label="Repeat"
                            value={props.attributes.backgroundRepeat}
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
                            value={props.attributes.backgroundColor}
                            onChange={(backgroundColor) => setAttributes({ backgroundColor: backgroundColor })}
                        />
                        <label>Gradient Color</label>
                        <ColorPalette
                            colors={colors}
                            value={props.attributes.backgroundColor2}
                            onChange={(backgroundColor2) => setAttributes({ backgroundColor2: backgroundColor2 })}
                        />
                        <RangeControl
                            label="Gradient Angle"
                            value={props.attributes.gradAngle}
                            onChange={(gradAngle) => setAttributes({ gradAngle: gradAngle })}
                            min={0}
                            max={360}
                        />
                    </PanelBody>
                    <PanelBody title="Background Options" initialOpen={false}>
                        <ToggleControl
                            label="Make Background Full Browser Width"
                            checked={attributes.fullwidth}
                            onChange={(fullwidth) => setAttributes({ fullwidth: fullwidth })}
                        />
                        <RangeControl
                            label="Background Image Opacity"
                            value={props.attributes.opacity}
                            onChange={(opacity) => setAttributes({ opacity: opacity })}
                            min={0}
                            max={100}
                        />
                    </PanelBody>
                </InspectorControls>,
                <div {...blockProps}>
                    <div className={blockClasses} >
                        <div className="cw-section-block-bg" style={{
                            borderWidth: props.attributes.borderWidth,
                            borderRadius: props.attributes.borderRadius,
                            borderColor: props.attributes.borderColor,
                            borderStyle: props.attributes.borderStyle ? props.attributes.borderStyle : 'solid',
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
            ];
        },

        save: (props) => {
            const blockProps = useBlockProps.save();
            const { attributes } = props;

            const blockClasses = getBlockClasses(attributes)
            const stylez = getMainStylez(attributes)
            const imageLayer = getImageLayer(attributes)
            const videoLayer = getVideoLayer(attributes)
            const colorLayer = getColorLayer(attributes)

            return (
                <div {...blockProps}>
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
        },

    });
}