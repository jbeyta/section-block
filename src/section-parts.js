export function getBlockClasses(attributes) {
    return attributes.fullwidthBg ? 'cw-section-block-mother fullw' : 'cw-section-block-mother'
}

export function getMainStylez(attributes) {
    let stylez = {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        maxWidth: attributes.fullWidth ? 'none' : attributes.width + 'px',
    };

    if (attributes.paddingTop > 0) {
        stylez.paddingTop = attributes.paddingTop + 'px'
    }

    if (attributes.paddingRight > 0) {
        stylez.paddingRight = attributes.paddingRight + 'px'
    }

    if (attributes.paddingBottom > 0) {
        stylez.paddingBottom = attributes.paddingBottom + 'px'
    }

    if (attributes.paddingLeft > 0) {
        stylez.paddingLeft = attributes.paddingLeft + 'px'
    }

    return stylez
}

export function getImageLayer(attributes) {
    const bgSize = (attributes.backgroundSize == 'custom' && !!attributes.backgroundSizeCustom) ? attributes.backgroundSizeCustom : (attributes.backgroundSize == 'custom' && !attributes.backgroundSizeCustom) ? 'cover' : attributes.backgroundSize

    return attributes.imgData.url ? <div
        className="cw-section-block-bg-img"
        style={{
            opacity: attributes.opacity + '%',
            backgroundPosition: attributes.backgroundPosition,
            backgroundSize: bgSize,
            backgroundAttachment: attributes.backgroundAttachment,
            backgroundRepeat: attributes.backgroundRepeat,
            backgroundImage: attributes.imgData.url ? 'url(' + attributes.imgData.url + ')' : '',
        }}
    ></div> : ''
}

export function getVideoLayer(attributes) {
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

export function getColorLayer(attributes) {
    return attributes.backgroundColor ? <div
        className="cw-section-block-bg-color"
        style={{
            backgroundColor: attributes.backgroundColor,
            background: (attributes.backgroundColor && attributes.backgroundColor2) ? 'linear-gradient(' + attributes.gradAngle + 'deg, ' + attributes.backgroundColor + ' 0%, ' + attributes.backgroundColor2 + ' 100%)' : attributes.backgroundColor
        }}
    ></div> : ''
}