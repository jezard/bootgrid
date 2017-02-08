tinymce.PluginManager.add('bootgrid', function (editor, url) {
    //setup
    
    console.log(editor);

    //path to plugin
    var path = tinymce.baseURL + '/plugins/bootgrid/';
    var iconpath = path + 'bootgrid-menu-icon.png';

    //editor events
    var el;
    //https://www.tinymce.com/docs/api/tinymce.dom/tinymce.dom.selection/
    editor.on('keyDown', function (e) {
        //if a bootstrap column
        if (tinymce.activeEditor.selection.getStart().querySelectorAll('div[class^="col-"]')) {

            el = jQuery(tinymce.activeEditor.selection.getNode());
            var s = el.text();
            el.uniqueId();
           


            if (e.keyCode == 8 || e.keyCode == 46) {//backspace
                if (s.length == 2) {
                    /*
                    * Add some text when the user backspaces, and move the cursor to the end to prevent removal of the empty element.
                    */
                    jQuery(el).html('<div class="editor-column-spacer" style="display:none" contentEditable="false">&nbsp;</div>Add content');

                    tinymce.activeEditor.selection.setCursorLocation(tinymce.activeEditor.selection.getNode(), 2);

                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
               
            }
        }
    });

    /*
    * Add a button for each row /column type required
    */
    

    editor.addMenuItem('bootgrid-4-4', {
        image: iconpath,
        text: 'Bootgrid |-|-|-|-| columns',
        context: 'tools',
        onclick: function () {
            var html = '<div class="row">' +
		                    '<div class="bootgrid-col col-md-3"><div class="editor-column-spacer" style="display:none" contentEditable="false">&nbsp;</div>Col 1</div>' +
		                    '<div class="bootgrid-col col-md-3"><div class="editor-column-spacer" style="display:none" contentEditable="false">&nbsp;</div>Col 2</div>' +
		                    '<div class="bootgrid-col col-md-3"><div class="editor-column-spacer" style="display:none" contentEditable="false">&nbsp;</div>Col 3</div>' +
		                    '<div class="bootgrid-col col-md-3"><div class="editor-column-spacer" style="display:none" contentEditable="false">&nbsp;</div>Col 4</div>' +
	                    '</div><p class="editor-row-spacer">&nbsp;</p>';
            editor.insertContent(html);
        }
    });

    editor.addMenuItem('bootgrid-8-4', {
        image: iconpath,
        text: 'Bootgrid |--|-| columns',
        context: 'tools',
        onclick: function () {
            var html = '<div class="row">' +
		                    '<div class="bootgrid-col col-md-8"><div class="editor-column-spacer" style="display:none" contentEditable="false">&nbsp;</div>Col 1</div>' +
		                    '<div class="bootgrid-col col-md-4"><div class="editor-column-spacer" style="display:none" contentEditable="false">&nbsp;</div>Col 2</div>' +
	                    '</div><p class="editor-row-spacer">&nbsp;</p>';
            editor.insertContent(html);
        }
    });

    editor.addMenuItem('bootgrid-4-8', {
        image: iconpath,
        text: 'Bootgrid |-|--| columns',
        context: 'tools',
        onclick: function () {
            var html = '<div class="row">' +
		                    '<div class="bootgrid-col col-md-4"><div class="editor-column-spacer" style="display:none" contentEditable="false">&nbsp;</div>Col 1</div>' +
		                    '<div class="bootgrid-col col-md-8"><div class="editor-column-spacer" style="display:none" contentEditable="false">&nbsp;</div>Col 2</div>' +
	                    '</div><p class="editor-row-spacer">&nbsp;</p>';
            editor.insertContent(html);
        }
    });

    editor.addMenuItem('bootgrid-6-6', {
        image: iconpath,
        text: 'Bootgrid |--|--| columns',
        context: 'tools',
        onclick: function () {
            var html = '<div class="row">' +
		                    '<div class="bootgrid-col col-md-6"><div class="editor-column-spacer" style="display:none" contentEditable="false">&nbsp;</div>Col 1</div>' +
		                    '<div class="bootgrid-col col-md-6"><div class="editor-column-spacer" style="display:none" contentEditable="false">&nbsp;</div>Col 2</div>' +
	                    '</div><p class="editor-row-spacer">&nbsp;</p>';
            editor.insertContent(html);
        }
    });

    editor.addMenuItem('bootgrid-3-9', {
        image: iconpath,
        text: 'Bootgrid |-|---| columns',
        context: 'tools',
        onclick: function () {
            var html = '<div class="row">' +
		                    '<div class="bootgrid-col col-md-3"><div class="editor-column-spacer" style="display:none" contentEditable="false">&nbsp;</div>Col 1</div>' +
		                    '<div class="bootgrid-col col-md-9"><div class="editor-column-spacer" style="display:none" contentEditable="false">&nbsp;</div>Col 2</div>' +
	                    '</div><p class="editor-row-spacer">&nbsp;</p>';
            editor.insertContent(html);
        }
    });

    editor.addMenuItem('bootgrid-9-3', {
        image: iconpath,
        text: 'Bootgrid |---|-| columns',
        context: 'tools',
        onclick: function () {
            var html = '<div class="row">' +
		                    '<div class="bootgrid-col col-md-9"><div class="editor-column-spacer" style="display:none" contentEditable="false">&nbsp;</div>Col 1</div>' +
		                    '<div class="bootgrid-col col-md-3"><div class="editor-column-spacer" style="display:none" contentEditable="false">&nbsp;</div>Col 2</div>' +
	                    '</div><p class="editor-row-spacer">&nbsp;</p>';
            editor.insertContent(html);
        }
    });

    editor.addMenuItem('bootgrid-12', {
        image: iconpath,
        text: 'Bootgrid |----| columns',
        context: 'tools',
        onclick: function () {
            var html = '<div class="row">' +
		                    '<div class="bootgrid-col col-md-12"><div class="editor-column-spacer" style="display:none" contentEditable="false">&nbsp;</div>Col 1</div>' +
	                    '</div><p class="editor-row-spacer">&nbsp;</p>';
            editor.insertContent(html);
        }
    });
});
