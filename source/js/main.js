import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';

import {bannerSlider} from './blocks/banner-slider';
import {portfolioSlider} from './blocks/portfolio-slider';
import {modalFeedbackInit} from './blocks/modal-feedback';
import {modalLoginInit} from './blocks/modal-login';
import {modalRegistrationInit} from './blocks/modal-registration';
import {initCustomSelect} from './modules/custom-select';
import {initAccordions} from './modules/init-accordion';


// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------
initCustomSelect();
initModals();
initAccordions();

// Blocks

bannerSlider();
portfolioSlider();
modalFeedbackInit();
modalLoginInit();
modalRegistrationInit();
