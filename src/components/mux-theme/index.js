const defaultViewport = {
  fullScreen: false,
  statusBarHeight: 20,
  systemLanguage: 'zh',
  systemRegion: 'CN',
  applicationLanguage: 'zh',
  applicationRegion: 'CN'
}
const viewport = weex.config.viewport || defaultViewport
const fullScreen = viewport.fullScreen
const statusBarHeight = viewport.statusBarHeight
let headerBarHeight = 40
if (fullScreen) {
  headerBarHeight = 40 + statusBarHeight
}
export default {
  color: {
    primary: '#223B61',
    primaryContrary: '#FFFFFF',
    accent: '#CB1E36',
    accentContrary: '#FFFFFF',
    subject: '#BFA456',
    paleGold: '#F3EEE1',
    arrow: '#C7C7C7',
    subjectContrary: '#FFFFFF',
    disable: '#CBCBCB',
    disableContrary: '#FFFFFF',
    light: '#FFFFFF',
    lightContrary: '#C7C7C7',
    lightYellow: '#C4A347'
  },
  header: {
    height: headerBarHeight
  },
  container: {
    height: viewport.viewportHeight - headerBarHeight,
    width: viewport.viewportWidth,
    bottomHeight: viewport.buttomHeight ? viewport.buttomHeight : 0
  },
  viewport: {
    fullScreen: fullScreen,
    statusBarHeight: statusBarHeight,
    height: viewport.viewportHeight
  }
}
