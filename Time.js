/**
 * Created by root on 17-5-21.
 */

Reimu.Time = {
    Sec2HMS: function (sec) {
        let h = (sec / 3600).toFixed(0);
        let t = sec % 3600;
        let m = (t / 60).toFixed(0);
        let s = t % 60;

        return h.toString() + 'h ' + m.toString() + 'm ' + s.toString() + 's';
    },

    strftime_rfc3339: function (sec) {
        let padzero = function (i) {
            if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
            return i;
        };

        let date;

        if (!sec)
            date = new Date();
        else
            date = new Date(sec*1000);

        let M = padzero(date.getMonth()+1);
        let d = padzero(date.getDate());
        let h = padzero(date.getHours());
        let m = padzero(date.getMinutes());
        let s = padzero(date.getSeconds());
        return date.getFullYear() + "-" + M + "-" + d + " " + h + ":" + m + ":" + s;
    }
};