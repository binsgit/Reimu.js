/**
 * Created by root on 17-5-21.
 */

Reimu.StringOps = {
    /**
     * @return {string}
     */
    EscapeHtml: function (string) {
        const entityMap = {
            '\n': '<br>', ' ': '&nbsp;', '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
            '/': '&#x2F;', '`': '&#x60;', '=': '&#x3D;'
        };

        return String(string).replace(/[&<>"'`=\/\n]/g, function (s) {
            return entityMap[s];
        });
    }
};