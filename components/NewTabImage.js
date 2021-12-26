import React from 'react';
import PropTypes from 'prop-types';
import OpenNewTabLink from 'components/OpenNewTabLink';
import Image from 'next/image';

const NewTabImage = ({ imageClassName, imageSource, altText, href }) => {
  return (
    <OpenNewTabLink href={href}>
      <Image src={imageSource} alt={altText} className={imageClassName} />
    </OpenNewTabLink>
  );
};

NewTabImage.propTypes = {
  imageClassName: PropTypes.string,
  imageSource: PropTypes.string,
  altText: PropTypes.string,
  href: PropTypes.string,
};

export default NewTabImage;
