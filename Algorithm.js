/**
 * Created by root on 17-5-21.
 */

Reimu.Algorithm = {
    Random: {
        Int: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },
    isInt: function (value) {
        return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
    }
};