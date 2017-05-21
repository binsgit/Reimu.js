/**
 * Created by root on 17-5-21.
 */

// jQuery required

Reimu.Dom = {
    SetVisibility: function (jq_ctx, bool) {
        if (!bool) {
            let orig_prop = {
                visibility: jq_ctx.css('visibility'),
                height: jq_ctx.css('height'),
                width: jq_ctx.css('width')
            };

            jq_ctx.attr('reimuDom_vis_savedprops_0', JSON.stringify(orig_prop));

            jq_ctx.css('visibility', 'hidden');
            jq_ctx.css('height', 0);
            jq_ctx.css('width', 0);
        } else {
            let j_orig_prop = jq_ctx.attr('reimuDom_vis_savedprops_0');

            if (j_orig_prop) {
                let orig_prop = JSON.parse(j_orig_prop);

                jq_ctx.css('visibility', orig_prop.visibility);
                jq_ctx.css('height', orig_prop.height);
                jq_ctx.css('width', orig_prop.width);
            } else {
                jq_ctx.css('visibility', 'visible');
                jq_ctx.css('height', 'inherit');
                jq_ctx.css('width', 'inherit');
            }
        }
    },

    SetEnabled: function (jq_ctx_array, bool) {
        if (bool)
            for (let i in jq_ctx_array) {
                jq_ctx_array[i].prop('disabled', false);
                jq_ctx_array[i].removeProp('disabled');
            }
        else
            for (let i in jq_ctx_array) {
                jq_ctx_array[i].prop('disabled', true);
            }
    }
};