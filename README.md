# NRC CIE Colour Fidelity Index module for luox

**luox-NRC-CIERf** is a module to calculate parameters for light source colour appearance and colour rendering in the luox platform.

**luox-NRC-CIERf** is a fork of the [luox](https://github.com/luox-app/luox/) project, which is an open-source web platform for calculating quantities that describe light exposures. Quantities for the intensity of light exposure in terms of the international standard CIE S026:2018 were calculated in the original release. The **luox-NRC-CIERf** module, developed at the NRC in collaboration with the site’s original creator, adds indices related to light source colour appearance and colour rendering, principally those from publication CIE 224:2017 CIE 2017 Colour Fidelity Index for accurate scientific use. Users may also choose to view indices and colour vector graphics following the Illuminating Engineering Society TM-30-20 IES method for evaluating light source color rendition. This module also adds a ‘power mode’ permitting the user to submit any number of spectra simultaneously for calculation.

## Team

This module was developed by Dr. Somang Nam and Dr. Jennifer A. Veitch at the National Research Council of Canada (Construction Research Centre), in collaboration with Dr. Manuel Spitschan (Translational Sensory & Circadian Neuroscience, Max Planck Institute for Biological Cybernetics and Technical University of Munich, Germany).

## Citation

Nam, S., Veitch, J. A., & Spitschan, M. (2022). CIE Colour Fidelity Index module for luox (luox-NRC-CIERf) [Source code]. National Research Council of Canada. https://github.com/nrc-cnrc/luox-NRC-CIERf.

### Companion Paper

Spitschan, M., Mead, J., Roos, C., Lowis, C., Griffiths, B., Mucur, P., Hisf, M., Nam, S., & Veitch, J. A. (2022). luox: novel validated open-access and open-source web platform for calculating and sharing physiologically relevant quantities for light and lighting. Wellcome Open Research, 6, 69. https://doi.org/10.12688/wellcomeopenres.16595.3

## Licence

**luox-NRC-CIERf** is distributed as free software under the terms of the GNU GPL-3.0 licence (https://www.gnu.org/licenses/gpl-3.0.en.html) Please review the LICENCE document for the licensing terms.

## Copyright

**luox-NRC-CIERf** is a fork of the [luox](https://github.com/luox-app/luox/) project. [File additions and modifications](COPYRIGHT.md) by the National Research Council of Canada (NRC) are **Copyright (C) 2022 His Majesty the King in Right of Canada.**

## Development

The app is made up of HTML, CSS and JavaScript. We're using ES2015 modules and we use [webpack](https://webpack.js.org) to bundle the application. The core of the application is pure JavaScript and the user interface uses [React](https://reactjs.org).

We use [Prettier](https://prettier.io) to ensure consistent code formatting and [ESLint](https://eslint.org) with [Airbnb's JavaScript style guide](https://github.com/airbnb/javascript) to automatically find and fix problems as well as enforcing a particular code style in our JavaScript.

### Install nvm and node

```
$ brew install nvm
$ # Follow instructions to configure your bash config
```

### Install node

```
$ cd /path/to/lightbox
$ nvm install
$ nvm use
Found '/path/to/lightbox/.nvmrc' with version <v10.19.0>
Now using node v10.19.0 (npm v6.13.4)
```

### Install packages

```
$ npm install
```

### Running tests

The tests are written using [Jest](https://jestjs.io).

```
$ npm test
```

### Starting app in development

```
$ npm start
```
