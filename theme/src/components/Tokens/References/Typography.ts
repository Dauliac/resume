import { ReferenceToken } from '../Token';

export const typography = {
  fonts: {
    garamondFont: ReferenceToken.create('GaramondFont', "Garamond"),
    courierNewFont: ReferenceToken.create('CourierNewFont', "Courier New"),
  },
  weight: {
    lightWeight: ReferenceToken.create('LightWeight', '300'),
    regularWeight: ReferenceToken.create('RegularWeight', '400'),
    boldWeight: ReferenceToken.create('BoldWeight', '700'),
  },
  height: {
    smallLineHeight: ReferenceToken.create('SmallLineHeight', '1.2'),
    mediumLineHeight: ReferenceToken.create('MediumLineHeight', '1.5'),
    largeLineHeight: ReferenceToken.create('LargeLineHeight', '1.8'),
  },
  size: {
    smallFontSize: ReferenceToken.create('SmallFontSize', '12px'),
    mediumFontSize: ReferenceToken.create('MediumFontSize', '16px'),
    largeFontSize: ReferenceToken.create('LargeFontSize', '24px'),
    xlargeFontSize: ReferenceToken.create('XLargeFontSize', '32px'),
  },
  spacing: {
    normalLetterSpacing: ReferenceToken.create('NormalLetterSpacing', '0'),
    wideLetterSpacing: ReferenceToken.create('WideLetterSpacing', '0.05em'),
    widerLetterSpacing: ReferenceToken.create('WiderLetterSpacing', '0.1em'),
  },
};
