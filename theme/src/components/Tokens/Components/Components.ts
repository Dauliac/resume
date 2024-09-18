import { system } from '../System/System';
import { ComponentToken } from '../Token';

export const components = {
  important1: {
    font: ComponentToken.create('Important1Font', system.fonts.SysHeadingFont),
    fontSize: ComponentToken.create('Important1FontSize', system.fontSizes.SysImportantFontSize),
    fontWeight: ComponentToken.create('Important1FontWeight', system.fontWeights.SysImportantFontWeight),
    lineHeight: ComponentToken.create('Important1LineHeight', system.lineHeights.SysImportantLineHeight),
    letterSpacing: ComponentToken.create('Important1LetterSpacing', system.fontSpacings.SysImportantLetterSpacing),
    color: ComponentToken.create('Important1Color', system.colors.SysTextSecondaryColor),
  },
  important2: {
    font: ComponentToken.create('Important2Font', system.fonts.SysHeadingFont),
    fontSize: ComponentToken.create('Important2FontSize', system.fontSizes.SysImportantFontSize),
    fontWeight: ComponentToken.create('Important2FontWeight', system.fontWeights.SysImportantFontWeight),
    lineHeight: ComponentToken.create('Important2LineHeight', system.lineHeights.SysImportantLineHeight),
    letterSpacing: ComponentToken.create('Important2LetterSpacing', system.fontSpacings.SysImportantLetterSpacing),
    color: ComponentToken.create('Important2Color', system.colors.SysTextTertiaryColor),
  },
  important3: {
    font: ComponentToken.create('Important3Font', system.fonts.SysABodyFont),
    fontSize: ComponentToken.create('Important3FontSize', system.fontSizes.SysBodyFontSize),
    fontWeight: ComponentToken.create('Important3FontWeight', system.fontWeights.SysBodyFontWeight),
    lineHeight: ComponentToken.create('Important3LineHeight', system.lineHeights.SysBodyLineHeight),
    letterSpacing: ComponentToken.create('Important3LetterSpacing', system.fontSpacings.SysBodyLetterSpacing),
    color: ComponentToken.create('Important3Color', system.colors.SysTextPrimaryColor),
  },
  link: {
    font: ComponentToken.create('LinkFont', system.fonts.SysABodyFont),
    fontSize: ComponentToken.create('LinkFontSize', system.fontSizes.SysBodyFontSize),
    fontWeight: ComponentToken.create('LinkFontWeight', system.fontWeights.SysBodyFontWeight),
    lineHeight: ComponentToken.create('LinkLineHeight', system.lineHeights.SysBodyLineHeight),
    letterSpacing: ComponentToken.create('LinkLetterSpacing', system.fontSpacings.SysBodyLetterSpacing),
    color: ComponentToken.create('LinkColor', system.colors.SysTextPrimaryColor),
  },
  subtitle: {
    font: ComponentToken.create('SubtitleFont', system.fonts.SysHeadingFont),
    fontSize: ComponentToken.create('SubtitleFontSize', system.fontSizes.SysSubHeadingFontSize),
    fontWeight: ComponentToken.create('SubtitleFontWeight', system.fontWeights.SysHeadingFontWeight),
    lineHeight: ComponentToken.create('SubtitleLineHeight', system.lineHeights.SysHeadingLineHeight),
    letterSpacing: ComponentToken.create('SubtitleLetterSpacing', system.fontSpacings.SysHeadingLetterSpacing),
    color: ComponentToken.create('SubtitleColor', system.colors.SysTextTertiaryColor),
  },
  text: {
    font: ComponentToken.create('TextFont', system.fonts.SysABodyFont),
    fontSize: ComponentToken.create('TextFontSize', system.fontSizes.SysBodyFontSize),
    fontWeight: ComponentToken.create('TextFontWeight', system.fontWeights.SysBodyFontWeight),
    lineHeight: ComponentToken.create('TextLineHeight', system.lineHeights.SysBodyLineHeight),
    letterSpacing: ComponentToken.create('TextLetterSpacing', system.fontSpacings.SysBodyLetterSpacing),
    color: ComponentToken.create('TextColor', system.colors.SysTextPrimaryColor),
  },
  title: {
    font: ComponentToken.create('TitleFont', system.fonts.SysHeadingFont),
    fontSize: ComponentToken.create('TitleFontSize', system.fontSizes.SysHeadingFontSize),
    fontWeight: ComponentToken.create('TitleFontWeight', system.fontWeights.SysHeadingFontWeight),
    lineHeight: ComponentToken.create('TitleLineHeight', system.lineHeights.SysHeadingLineHeight),
    letterSpacing: ComponentToken.create('TitleLetterSpacing', system.fontSpacings.SysHeadingLetterSpacing),
    color: ComponentToken.create('TitleColor', system.colors.SysTextSecondaryColor),
  },
};
