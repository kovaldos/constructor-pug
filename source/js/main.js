import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';

import {bannerSlider} from './blocks/banner-slider';
import {portfolioSlider} from './blocks/portfolio-slider';
import {modalFeedbackInit} from './blocks/modal-feedback';
import {initCustomSelect} from './modules/custom-select';


// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------
initCustomSelect();
initModals();

// Blocks

bannerSlider();
portfolioSlider();
modalFeedbackInit();

