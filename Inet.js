/**
 * Created by root on 17-5-21.
 */

const AF_INET = 2;
const AF_INET6 = 10;

Reimu.Inet = {
    inet_pton: function (af, cp) {
        let ret = [];

        if (af === AF_INET) {
            let sarray = cp.split('.');

            for (let p in sarray) {
                ret.push(parseInt(sarray[p]));
            }
        } else if (af === AF_INET6) {

            if (cp === '::1')
                return [0, 0, 0, 0, 0, 0, 0, 1];
            else if (cp === '::')
                return [0, 0, 0, 0, 0, 0, 0, 0];

            let sarray = cp.split(':');

            for (let p in sarray) {
                if (sarray[p] === '') {
                    for (let j=0; j<(8-sarray.size); j++)
                        ret.push(0x0000);
                }
                ret.push(parseInt(sarray[p], 16));
            }
        }
        return ret;
    },

    inet_ntop: function (af, src) {
        let ret = '';

        if (af === AF_INET) {
            for (let p in src)
                ret += src[p].toString() + '.';
            return ret.slice(0, -1);
        } else if (af === AF_INET6) {
            for (let p in src)
                ret += src[p].toString(16) + ':';
            return ret.slice(0, -1);
        }
    }
};