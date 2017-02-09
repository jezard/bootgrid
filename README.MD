#Installation

##steps:
Add to tinyMCE.init()

```
content_css: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css,@Url.Content("~/Administration/Content/tinymce/plugins/bootgrid/bootgrid.css")',
body_class: "bootgrid-view" //for nopcommerce
```

For NopCommerce, this is found in RichEditor.cshtml