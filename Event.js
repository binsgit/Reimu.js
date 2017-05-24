/**
 * Created by root on 17-5-21.
 */

Reimu.Event = {
    KeyCodes: {
        Enter: 13
    },
    CallOnKeyPress: function (dom_event_ctx, keycode, func) {
        if(dom_event_ctx.keyCode === keycode){
            dom_event_ctx.preventDefault();
            func();
        }
    }
};