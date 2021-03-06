# sassy-cubic-bezier [![Build Status](https://travis-ci.org/danielguillan/sassy-cubic-bezier.svg?branch=master)](https://travis-ci.org/danielguillan/sassy-cubic-bezier) [![Bower version](https://badge.fury.io/bo/sassy-cubic-bezier.svg)](http://badge.fury.io/bo/sassy-cubic-bezier) [![Gem Version](https://badge.fury.io/rb/sassy-cubic-bezier.svg)](http://badge.fury.io/rb/sassy-cubic-bezier)

A Sass function that extends the CSS cubic-bezier() notation to allow for (predefined) named easing functions.

A quick example:

````scss
.default { transition-timing-function: cubic-bezier('easeOutSine'); }
.custom  { transition-timing-function: cubic-bezier('myCustomEasingFunction'); }
.manual  { transition-timing-function: cubic-bezier(0.470, 0.000, 0.745, 0.715); }
````

## Installation

### Download

Download [_cubic-bezier.scss](/stylesheets/_cubic-bezier.scss) and place it in your Sass directory.

### Bower

Run the following command:

    bower install --save-dev sassy-cubic-bezier

### Compass

1. `gem install sassy-cubic-bezier`
2. Add `require 'sassy-cubic-bezier'` to your `config.rb`

## Usage

Import it into your main stylesheet:

    @import 'cubic-bezier';

Just use cubic-bezier() as you normally would in your animations and transitions with the added ability to pass named easing functions:

````scss
    .my-transition { transition: all 1s cubic-bezier('easeInOutBack'); }
    .my-animation  { animation: fade-in 1s cubic-bezier('easeInQuint'); }
    .manual        { transition: fade-in 1s cubic-bezier(1, 2, 3, 4); }
````

### Adding functions and updating default ones

````scss
$my-easing-functions: (
  'custom': (1, 2, 3, 4),                     // add new function
  'easeOutSine': (0.470, 0.000, 0.745, 0.715) // update default function
);

$cubic-bezier-functions: map-merge($cubic-bezier-functions, $my-easing-functions) !global;
````

### Overriding the built-in functions list

Completely remove the built-in functions and replace them with your own list:

````scss
$cubic-bezier-functions: (
  'customOne': (1, 2, 3, 4)
  'customTwo': (4, 3, 2, 1)
) !global;
````

## Built-in easing functions

The built-in easing functions are based on Robert Penner's original equations:

````scss
$cubic-bezier-functions:  (
    'linear'         : (0.250, 0.250, 0.750, 0.750),
    'ease'           : (0.250, 0.100, 0.250, 1.000),
    'ease-in'        : (0.420, 0.000, 1.000, 1.000),
    'ease-out'       : (0.000, 0.000, 0.580, 1.000),
    'ease-in-out'    : (0.420, 0.000, 0.580, 1.000),

    'easeInQuad'     : (0.550, 0.085, 0.680, 0.530),
    'easeInCubic'    : (0.550, 0.055, 0.675, 0.190),
    'easeInQuart'    : (0.895, 0.030, 0.685, 0.220),
    'easeInQuint'    : (0.755, 0.050, 0.855, 0.060),
    'easeInSine'     : (0.470, 0.000, 0.745, 0.715),
    'easeInExpo'     : (0.950, 0.050, 0.795, 0.035),
    'easeInCirc'     : (0.600, 0.040, 0.980, 0.335),
    'easeInBack'     : (0.600, -0.280, 0.735, 0.045),

    'easeOutQuad'    : (0.250, 0.460, 0.450, 0.940),
    'easeOutCubic'   : (0.215, 0.610, 0.355, 1.000),
    'easeOutQuart'   : (0.165, 0.840, 0.440, 1.000),
    'easeOutQuint'   : (0.230, 1.000, 0.320, 1.000),
    'easeOutSine'    : (0.390, 0.575, 0.565, 1.000),
    'easeOutExpo'    : (0.190, 1.000, 0.220, 1.000),
    'easeOutCirc'    : (0.075, 0.820, 0.165, 1.000),
    'easeOutBack'    : (0.175, 0.885, 0.320, 1.275),

    'easeInOutQuad'  : (0.455, 0.030, 0.515, 0.955),
    'easeInOutCubic' : (0.645, 0.045, 0.355, 1.000),
    'easeInOutQuart' : (0.770, 0.000, 0.175, 1.000),
    'easeInOutQuint' : (0.860, 0.000, 0.070, 1.000),
    'easeInOutSine'  : (0.445, 0.050, 0.550, 0.950),
    'easeInOutExpo'  : (1.000, 0.000, 0.000, 1.000),
    'easeInOutCirc'  : (0.785, 0.135, 0.150, 0.860),
    'easeInOutBack'  : (0.680, -0.550, 0.265, 1.550),

);
````
