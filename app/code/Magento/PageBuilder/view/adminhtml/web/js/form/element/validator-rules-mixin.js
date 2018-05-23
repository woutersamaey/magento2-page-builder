/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'Magento_Ui/js/lib/validation/utils'
], function ($, utils) {
    'use strict';

    /**
     * Validate the number is between the min and max provided
     *
     * @param {Number} value
     * @param {Number} min
     * @param {Number} max
     * @return {Boolean}
     */
    function validateNumberBetween (value, min, max) {
        var numValue;

        if ($.mage.isEmptyNoTrim(value)) {
            return true;
        }

        numValue = $.mage.parseNumber(value);

        if (isNaN(numValue)) {
            return false;
        }

        return $.mage.isBetween(numValue, min, max);
    }

    return function (validator) {
        validator.addRule(
            'required-entry-location-name',
            function (value) {
                return !utils.isEmpty(value);
            },
            $.mage.__('Please enter the location name.')
        );

        validator.addRule(
            'required-entry-latitude',
            function (value) {
                return !utils.isEmpty(value);
            },
            $.mage.__('Enter Latitude')
        );

        validator.addRule(
            'required-entry-longitude',
            function (value) {
                return !utils.isEmpty(value);
            },
            $.mage.__('Enter Longitude')
        );

        validator.addRule(
            'validate-latitude',
            function (v) {
                return validateNumberBetween(v, -85, 85)
            },
            $.mage.__('Please enter a number between -85 and 85')
        );

        validator.addRule(
            'validate-longitude',
            function (v) {
                return validateNumberBetween(v, -180, 180)
            },
            $.mage.__('Please enter a number between -180 and 180')
        );

        return validator;
    }
});
