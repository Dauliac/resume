import { typography } from '../References/Typography';
import { colors } from '../References/Colors';
import { SystemToken } from '../Token';

export const system = {
  fonts: {
    SysHeadingFont: SystemToken.create('SysHeadingFont', typography.fonts.garamondFont),
    SysABodyFont: SystemToken.create('SysABodyFont', typography.fonts.courierNewFont),
  },
  fontSizes: {
    SysHeadingFontSize: SystemToken.create('SysHeadingFontSize', typography.size.xLargeFontSize),
    SysSubHeadingFontSize: SystemToken.create('SysSubHeadingFontSize', typography.size.largeFontSize),
    SysImportantFontSize: SystemToken.create('SysImportantFontSize', typography.size.mediumFontSize),
    SysBodyFontSize: SystemToken.create('SysBodyFontSize', typography.size.smallFontSize),
  },
  fontWeights: {
    SysHeadingFontWeight: SystemToken.create('SysHeadingFontWeight', typography.weight.boldWeight),
    SysImportantFontWeight: SystemToken.create('SysImportantFontWeight', typography.weight.regularWeight),
    SysBodyFontWeight: SystemToken.create('SysBodyFontWeight', typography.weight.lightWeight),
  },
  lineHeights: {
    SysHeadingLineHeight: SystemToken.create('SysHeadingLineHeight', typography.height.largeLineHeight),
    SysImportantLineHeight: SystemToken.create('SysImportantLineHeight', typography.height.mediumLineHeight),
    SysBodyLineHeight: SystemToken.create('SysBodyLineHeight', typography.height.smallLineHeight),
  },
  fontSpacings: {
    SysHeadingLetterSpacing: SystemToken.create('SysHeadingLetterSpacing', typography.spacing.wideLetterSpacing),
    SysImportantLetterSpacing: SystemToken.create('SysImportantLetterSpacing', typography.spacing.normalLetterSpacing),
    SysBodyLetterSpacing: SystemToken.create('SysBodyLetterSpacing', typography.spacing.widerLetterSpacing),
  },
  colors: {
    SysPrimaryColor: SystemToken.create('SysPrimaryColor', colors.whiteColor),
    SysSecondaryColor: SystemToken.create('SysSecondaryColor', colors.blackColor),
    SysTertiaryColor: SystemToken.create('SysTertiaryColor', colors.gray100Color),
    SysTextPrimaryColor: SystemToken.create('SysTextPrimaryColor', colors.violetColor),
    SysTextSecondaryColor: SystemToken.create('SysTextSecondaryColor', colors.blueVioletColor),
    SysTextTertiaryColor: SystemToken.create('SysTextTertiaryColor', colors.blueColor),
    SysSeparatorColor: SystemToken.create('SysSeparatorColor', colors.yellowColor),
    SysBackgroundColor: SystemToken.create('SysBackgroundColor', colors.whiteColor),
  }
};
