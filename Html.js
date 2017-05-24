/**
 * Created by root on 17-5-21.
 */

const REIMU_HTML_TABLE_OMIT_TR = 0x1;


Reimu.Html = {
    Table: {
        LineGenerator: function (entries_array, prop, tr_prop) {
            let ret = '';

            if (prop & REIMU_HTML_TABLE_OMIT_TR) {
            } else {
                ret += '<tr';
                if (tr_prop)
                    ret += ' ' + tr_prop;
                ret += '>';
            }

            for (let p in entries_array) {
                let entry = entries_array[p];

                if (entry instanceof Object) {
                    ret += '<td ' + entry[1] + '>';
                    ret += entry[0];
                } else {
                    ret += entry;
                }

                ret += '</td>';

            }

            if (prop & REIMU_HTML_TABLE_OMIT_TR) {
            } else {
                ret += '</tr>';
            }

            return ret;
        }
    },


    Renderer: function (ctx) {
        let ret = '';

        if (ctx.constructor !== Array) {
            ctx = [ctx];
        }

        for (let p in ctx) {
            let thisctx = ctx[p];

            if (thisctx.constructor == String)
                return ctx;

            for (let dom in thisctx) {

                if (thisctx.hasOwnProperty(dom)) {
                    let dom_spec = thisctx[dom];
                    ret += '<' + dom;

                    for (let dom_spec_attr in dom_spec) {
                        if (dom_spec.hasOwnProperty(dom_spec_attr) && dom_spec[dom_spec_attr] != dom_spec.__Next) {
                            ret += ' ' + dom_spec_attr + '="' + dom_spec[dom_spec_attr] + '"';
                        }
                    }

                    ret += '>';
                    if (dom_spec.__Next)
                        ret += Reimu.Html.Renderer(dom_spec.__Next);

                    ret += '</' + dom + '>';
                }
            }
        }

        return ret;
    }

};