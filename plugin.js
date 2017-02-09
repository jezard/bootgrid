tinymce.PluginManager.add('bootgrid', function (editor, url) {
    //setup

    //path to plugin
    var path = tinymce.baseURL + '/plugins/bootgrid/';
    var iconpath = path + 'bootgrid-menu-icon.png';


    //editor events
    var el;

    //https://www.tinymce.com/docs/api/tinymce.dom/tinymce.dom.selection/
    editor.on('keyDown', function (e) {
        //if a bootgrid column
        if (tinymce.activeEditor.selection.getStart()
            .querySelectorAll('div[class^="col-"]')) {

            el = jQuery(tinymce.activeEditor.selection.getNode());
            var s = el.text();
            //el.uniqueId();
            if (e.keyCode == 8 || e.keyCode == 46) { //backspace
                if (s.length <= 1) {
                    // Add some text when the user backspaces, and move the cursor to the end to prevent removal of the empty element.
                    jQuery(el)
                        .text('');
                    $(el)
                        .prev()
                        .remove(); //remove any previous and extraneous sibling created during editing

                    tinymce.activeEditor.selection.setCursorLocation(tinymce.activeEditor.selection.getNode(), 1);

                    e.preventDefault()
                    e.stopPropagation();
                    return false;
                }
            }
        }
    });

    //fix for full screen on NopCommerce
    editor.on('FullscreenStateChanged', function(e) {
        if (e.state) {
            window.parent.jQuery('div.content').css({ position: 'absolute', 'z-index': '9999' });
        } else {
            window.parent.jQuery('div.content').css({ position: 'relative', 'z-index': '9999' });
        }
    });

    /*
    * Add a button for each row /column type required
    */

    editor.addMenuItem('bootgrid-3-3-3-3', {
        image: iconpath,
        text: 'Bootgrid |-|-|-|-| columns',
        context: 'tools',
        onclick: function () {
            var html = '<div class="row">' +
                '<div class="col-sm-3 col-md-3"><div>Col 1</div></div>' +
                '<div class="col-sm-3 col-md-3"><div>Col 2</div></div>' +
                '<div class="col-sm-3 col-md-3"><div>Col 3</div></div>' +
                '<div class="col-sm-3 col-md-3"><div>Col 4</div></div>' +
                '</div><p class="editor-row-spacer" style="display:none">&nbsp;</p>';
            editor.insertContent(html);
        }
    });

    editor.addMenuItem('bootgrid-8-4', {
        image: iconpath,
        text: 'Bootgrid |--|-| columns',
        context: 'tools',
        onclick: function () {
            var html = '<div class="row">' +
                '<div class="col-sm-8 col-md-8"><div>Col 1</div></div>' +
                '<div class="col-sm-4 col-md-4"><div>Col 2</div></div>' +
                '</div><p class="editor-row-spacer" style="display:none">&nbsp;</p>';
            editor.insertContent(html);
        }
    });

    editor.addMenuItem('bootgrid-4-8', {
        image: iconpath,
        text: 'Bootgrid |-|--| columns',
        context: 'tools',
        onclick: function () {
            var html = '<div class="row">' +
                '<div class="col-sm-4 col-md-4"><div>Col 1</div></div>' +
                '<div class="col-sm-8 col-md-8"><div>Col 2</div></div>' +
                '</div><p class="editor-row-spacer" style="display:none">&nbsp;</p>';
            editor.insertContent(html);
        }
    });

    editor.addMenuItem('bootgrid-6-6', {
        image: iconpath,
        text: 'Bootgrid |--|--| columns',
        context: 'tools',
        onclick: function () {
            var html = '<div class="row">' +
                '<div class="col-sm-6 col-md-6"><div>Col 1</div></div>' +
                '<div class="col-sm-6 col-md-6"><div>Col 2</div></div>' +
                '</div><p class="editor-row-spacer" style="display:none">&nbsp;</p>';
            editor.insertContent(html);
        }
    });

    editor.addMenuItem('bootgrid-3-9', {
        image: iconpath,
        text: 'Bootgrid |-|---| columns',
        context: 'tools',
        onclick: function () {
            var html = '<div class="row">' +
                '<div class="col-sm-3 col-md-3"><div>Col 1</div></div>' +
                '<div class="col-sm-9 col-md-9"><div>Col 2</div></div>' +
                '</div><p class="editor-row-spacer" style="display:none">&nbsp;</p>';
            editor.insertContent(html);
        }
    });

    editor.addMenuItem('bootgrid-9-3', {
        image: iconpath,
        text: 'Bootgrid |---|-| columns',
        context: 'tools',
        onclick: function () {
            var html = '<div class="row">' +
                '<div class="col-sm-9 col-md-9"><div>Col 1</div></div>' +
                '<div class="col-sm-3 col-md-3"><div>Col 2</div></div>' +
                '</div><p class="editor-row-spacer" style="display:none">&nbsp;</p>';
            editor.insertContent(html);
        }
    });

    editor.addMenuItem('bootgrid-4-4-4', {
        image: iconpath,
        text: 'Bootgrid |-|-|-| columns',
        context: 'tools',
        onclick: function () {
            var html = '<div class="row">' +
                '<div class="col-sm-4 col-md-4"><div>Col 1</div></div>' +
                '<div class="col-sm-4 col-md-4"><div>Col 2</div></div>' +
                '<div class="col-sm-4 col-md-4"><div>Col 3</div></div>' +
                '</div><p class="editor-row-spacer" style="display:none">&nbsp;</p>';
            editor.insertContent(html);
        }
    });

    editor.addMenuItem('bootgrid-12', {
        image: iconpath,
        text: 'Bootgrid |----| columns',
        context: 'tools',
        onclick: function () {
            var html = '<div class="row">' +
                '<div class="col-sm-12 col-md-12"><div>Col 1</div></div>' +
                '</div><p class="editor-row-spacer" style="display:none">&nbsp;</p>';
            editor.insertContent(html);
        }
    });
});

