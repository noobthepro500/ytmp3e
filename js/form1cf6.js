$(document).ready(function(){$("form").submit(function(){switch($(this).attr("id")){case"contact":var a=["#name","#email","#message"];break;case"dmca":var a=["#title","#url","#email","#message"]}var b=!1;return $.each(a,function(a,c){$(c).val().length<1&&(b=!0)}),!b||($("#notification").html("If you want to send us a message you need to fill out all fields.").show(),!1)})});