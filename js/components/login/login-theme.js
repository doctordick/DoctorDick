//import Color from 'color';

import { Platform } from 'react-native';

module.exports = {
    brandPrimary : "#fff",
    brandInfo: "#5bc0de",
    brandSuccess: "#5cb85c",
    brandDanger: "#d9534f",
    brandWarning: "#f0ad4e",
    brandSidebar: "#252932",

    inverseTextColor: "#00c497",
    textColor: "#fff",

    fontSizeBase: 15,

    get fontSizeH1 () {
        return this.fontSizeBase*1.8;
    },
    get fontSizeH2 () {
        return this.fontSizeBase* 1.6;
    },
    get fontSizeH3 () {
        return this.fontSizeBase* 1.4;
    },
    get btnTextSize () {
        return this.fontSizeBase* 1.1;
    },
    get btnTextSizeLarge () {
        return this.fontSizeBase* 1.5;
    },
    get btnTextSizeSmall () {
        return this.fontSizeBase* .8;
    },
    get iconSizeLarge () {
        return this.iconFontSize* 1.5;
    },
    get iconSizeSmall () {
        return this.iconFontSize* .6;
    },

    borderRadiusBase: 4,

    get borderRadiusLarge () {
        return this.fontSizeBase* 3.8;
    },  

    footerHeight: 55,
    toolbarHeight: (Platform.OS === 'ios' ) ? 70 : 55, 
    toolbarDefaultBg: "#4563ED",
    toolbarInverseBg: "#222",

    get btnPrimaryBg () {
        return this.brandPrimary;
    },  
    get btnPrimaryColor () {
        return this.inverseTextColor;
    },  
    get btnSuccessBg () {
        return this.brandSuccess;
    },  
    get btnSuccessColor () {
        return this.inverseTextColor;
    },  
    get btnDangerBg () {
        return this.brandDanger;
    },  
    get btnDangerColor () {
        return this.inverseTextColor;
    },  
    get btnInfoBg () {
        return this.brandInfo;
    },  
    get btnInfoColor () {
        return this.inverseTextColor;
    },  
    get btnWarningBg () {
        return this.brandWarning;
    },  
    get btnWarningColor () {
        return this.inverseTextColor;
    },  

    borderWidth: 0.5,

    get inputColor () {
        return this.textColor;
    },
    get inputColorPlaceholder () {
        return 'rgba(255, 255, 255, 1.0)';
    },
    inputBorderColor: "#fff",
    inputHeightBase: 40,    
    inputGroupMarginBottom: 30,
    inputPaddingLeft: 5,
    get inputPaddingLeftIcon () {
        return this.inputPaddingLeft* 8;
    }
}