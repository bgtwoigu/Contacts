define("wkview:widget/crm_multi/wangmeng/wangmeng.js",function(t,i,s){var n=t("wkcommon:widget/ui/lib/jquery/jquery.js"),o=t("wkcommon:widget/lib/doT/doT.min.js"),p=(t("wkcommon:widget/ui/js_core/log/log.js"),function(t){this.ele=n(t.ele),this.position=t.position,this.actId=t.actId,this.init()});p.prototype={init:function(){this.template=o.template('{{? it.position == \'doc-btm\' }}\n<script type="text/javascript">\n    var cpro_psid ="u2572947";\n    var cpro_pswidth =966;\n    var cpro_psheight =120;\n</script>\n<script src="http://su.bdimg.com/static/dspui/js/ue.js" type="text/javascript"></script>\n{{?? it.position == \'doc2-3\' }}\n<script type="text/javascript">\n    var cpro_psid ="u2572954";\n    var cpro_pswidth =966;\n    var cpro_psheight =120;\n</script>\n<script src="http://su.bdimg.com/static/dspui/js/ue.js" type="text/javascript"></script>\n{{?}}'),this.initPage()},initPage:function(){this.initAds()},initAds:function(){var t=this;n(t.ele).html(t.template({position:t.position})),t.sendLog(t.actId)},sendLog:function(){}},s.exports=p});