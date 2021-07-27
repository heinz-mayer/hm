var SF_Opts = {"wp_menu_id":"4","social":[],"search":"no","blur":"no","fade":"no","test_mode":"no","hide_def":"no","mob_nav":"no","dynamic":"no","parent_ignore":"yes","sidebar_style":"full","sidebar_behaviour":"slide","alt_menu":"","sidebar_pos":"left","width_panel_1":"275","width_panel_2":"250","width_panel_3":"250","width_panel_4":"200","base_color":"#040402","opening_type":"click","sub_type":"flyout","video_bg":"","video_mob":"yes","video_preload":"yes","sub_mob_type":"dropdown","sub_opening_type":"hover","label":"none","label_top":"10px","label_size":"53px","label_vis":"yes","item_padding":"15","bg":"","path":"https:\/\/heinzmayer.de\/superfly-menu\/img\/","menu":"{\"4\":{\"term_id\":4,\"name\":\"Hauptmenu\",\"loc\":{\"pages\":{\"3\":1,\"9\":1,\"11\":1,\"13\":1,\"15\":1,\"17\":1,\"19\":1,\"21\":1,\"24\":1,\"26\":1,\"28\":1,\"30\":1,\"32\":1,\"34\":1,\"36\":1,\"38\":1,\"40\":1,\"49\":1},\"cposts\":{\"astra-advanced-hook\":1},\"cats\":{\"1\":1},\"taxes\":{},\"langs\":{},\"wp_pages\":{\"front\":1,\"home\":1,\"archive\":1,\"single\":1,\"forbidden\":1,\"search\":1},\"ids\":[\"\"]},\"isDef\":true}}","togglers":"","subMenuSupport":"yes","subMenuSelector":"sub-menu, children","eventsInterval":"51","activeClassSelector":"current-menu-item","allowedTags":"DIV, NAV, UL, OL, LI, A, P, H1, H2, H3, H4, SPAN","menuData":[],"siteBase":"https:\/\/heinzmayer.de"};

/* iznad KORTO MENU   u slider start gornji sliderstart.js  <script> </script> */
		   ;(function (){
        var insertListener = function(event){
            if (event.animationName == "bodyArrived") {
                afterContentArrived();
            }
        }
        var timer, _timer;

        if (document.addEventListener && false) {
            document.addEventListener("animationstart", insertListener, false); // standard + firefox
            document.addEventListener("MSAnimationStart", insertListener, false); // IE
            document.addEventListener("webkitAnimationStart", insertListener, false); // Chrome + Safari
        } else {
            timer = setInterval(function(){
                if (document.body) { //
                    clearInterval(timer);
                    afterContentArrived();
                }
            },14);
        }

        function afterContentArrived() {
            clearTimeout(_timer);
            var htmlClss;

            if (window.jQuery) {
                htmlClss = document.getElementsByTagName('html')[0].className;
                if (htmlClss.indexOf('sfm-pos') === -1) {
                    document.getElementsByTagName('html')[0].className = htmlClss + ' ' + window.SFM_classes;
                }
                jQuery('body').fadeIn();
                jQuery(document).trigger('sfm_doc_body_arrived');
                window.SFM_EVENT_DISPATCHED = true;
            } else {
                _timer = setTimeout(function(){
                    afterContentArrived();
                },14);
            }
        }
    })()

function setREVStartSize(e){
			//window.requestAnimationFrame(function() {				 
				window.RSIW = window.RSIW===undefined ? window.innerWidth : window.RSIW;	
				window.RSIH = window.RSIH===undefined ? window.innerHeight : window.RSIH;	
				try {								
					var pw = document.getElementById(e.c).parentNode.offsetWidth,
						newh;
					pw = pw===0 || isNaN(pw) ? window.RSIW : pw;
					e.tabw = e.tabw===undefined ? 0 : parseInt(e.tabw);
					e.thumbw = e.thumbw===undefined ? 0 : parseInt(e.thumbw);
					e.tabh = e.tabh===undefined ? 0 : parseInt(e.tabh);
					e.thumbh = e.thumbh===undefined ? 0 : parseInt(e.thumbh);
					e.tabhide = e.tabhide===undefined ? 0 : parseInt(e.tabhide);
					e.thumbhide = e.thumbhide===undefined ? 0 : parseInt(e.thumbhide);
					e.mh = e.mh===undefined || e.mh=="" || e.mh==="auto" ? 0 : parseInt(e.mh,0);		
					if(e.layout==="fullscreen" || e.l==="fullscreen") 						
						newh = Math.max(e.mh,window.RSIH);					
					else{					
						e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
						for (var i in e.rl) if (e.gw[i]===undefined || e.gw[i]===0) e.gw[i] = e.gw[i-1];					
						e.gh = e.el===undefined || e.el==="" || (Array.isArray(e.el) && e.el.length==0)? e.gh : e.el;
						e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
						for (var i in e.rl) if (e.gh[i]===undefined || e.gh[i]===0) e.gh[i] = e.gh[i-1];
											
						var nl = new Array(e.rl.length),
							ix = 0,						
							sl;					
						e.tabw = e.tabhide>=pw ? 0 : e.tabw;
						e.thumbw = e.thumbhide>=pw ? 0 : e.thumbw;
						e.tabh = e.tabhide>=pw ? 0 : e.tabh;
						e.thumbh = e.thumbhide>=pw ? 0 : e.thumbh;					
						for (var i in e.rl) nl[i] = e.rl[i]<window.RSIW ? 0 : e.rl[i];
						sl = nl[0];									
						for (var i in nl) if (sl>nl[i] && nl[i]>0) { sl = nl[i]; ix=i;}															
						var m = pw>(e.gw[ix]+e.tabw+e.thumbw) ? 1 : (pw-(e.tabw+e.thumbw)) / (e.gw[ix]);					
						newh =  (e.gh[ix] * m) + (e.tabh + e.thumbh);
					}				
					if(window.rs_init_css===undefined) window.rs_init_css = document.head.appendChild(document.createElement("style"));					
					document.getElementById(e.c).height = newh+"px";
					window.rs_init_css.innerHTML += "#"+e.c+"_wrapper { height: "+newh+"px }";				
				} catch(e){
					console.log("Failure at Presize of Slider:" + e)
				}					   
			//});
		  };