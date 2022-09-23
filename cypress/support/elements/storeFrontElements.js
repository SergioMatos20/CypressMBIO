export default class StoreFrontElements {

    //Models
    ourModelsShadowHost = () => {return "[data-aem-modulename='owc-dh-io-vmos']"}
    modelsSpan = () => {return ".dh-io-vmos_1nZ_z"}
    modelNameHref = (name) => {return `a[href*='/models/${name}'][tabindex='-1']`}

    //CookieBanner
    cookieBannerShadowHost = () => {return "cmm-cookie-banner"}
    acceptAllCookies = () => {return "cmm-buttons-wrapper [data-test='handle-accept-all-button']"}



}
