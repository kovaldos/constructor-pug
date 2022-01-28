import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';

import {bannerSlider} from './blocks/banner-slider';
import {portfolioSlider} from './blocks/portfolio-slider';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();

// Blocks

bannerSlider();
portfolioSlider();
