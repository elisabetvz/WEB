! function() {
    var t = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        },
        e = [].slice;
    ! function(t, e) {
        return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(n) {
            return e(n, t)
        }) : e(t.jQuery, t)
    }(window, function(n, o) {
        var i, r, l, s, a, c, u, f, h, d, g, p, m, v, y, w;
        return i = n(o), f = t.call(o, "ontouchstart") >= 0, s = {
            horizontal: {},
            vertical: {}
        }, a = 1, u = {}, c = "waypoints-context-id", g = "resize.waypoints", p = "scroll.waypoints", m = 1, v = "waypoints-waypoint-ids", y = "waypoint", w = "waypoints", r = function() {
            function t(t) {
                var e = this;
                this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + a++, this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                }, this.waypoints = {
                    horizontal: {},
                    vertical: {}
                }, this.element[c] = this.id, u[this.id] = this, t.bind(p, function() {
                    var t;
                    return e.didScroll || f ? void 0 : (e.didScroll = !0, t = function() {
                        return e.doScroll(), e.didScroll = !1
                    }, o.setTimeout(t, n[w].settings.scrollThrottle))
                }), t.bind(g, function() {
                    var t;
                    return e.didResize ? void 0 : (e.didResize = !0, t = function() {
                        return n[w]("refresh"), e.didResize = !1
                    }, o.setTimeout(t, n[w].settings.resizeThrottle))
                })
            }
            return t.prototype.doScroll = function() {
                var t, e = this;
                return t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !f || t.vertical.oldScroll && t.vertical.newScroll || n[w]("refresh"), n.each(t, function(t, o) {
                    var i, r, l;
                    return l = [], r = o.newScroll > o.oldScroll, i = r ? o.forward : o.backward, n.each(e.waypoints[t], function(t, e) {
                        var n, i;
                        return o.oldScroll < (n = e.offset) && n <= o.newScroll ? l.push(e) : o.newScroll < (i = e.offset) && i <= o.oldScroll ? l.push(e) : void 0
                    }), l.sort(function(t, e) {
                        return t.offset - e.offset
                    }), r || l.reverse(), n.each(l, function(t, e) {
                        return e.options.continuous || t === l.length - 1 ? e.trigger([i]) : void 0
                    })
                }), this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            }, t.prototype.refresh = function() {
                var t, e, o, i = this;
                return o = n.isWindow(this.element), e = this.$element.offset(), this.doScroll(), t = {
                    horizontal: {
                        contextOffset: o ? 0 : e.left,
                        contextScroll: o ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: o ? 0 : e.top,
                        contextScroll: o ? 0 : this.oldScroll.y,
                        contextDimension: o ? n[w]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, n.each(t, function(t, e) {
                    return n.each(i.waypoints[t], function(t, o) {
                        var i, r, l, s, a;
                        return i = o.options.offset, l = o.offset, r = n.isWindow(o.element) ? 0 : o.$element.offset()[e.offsetProp], n.isFunction(i) ? i = i.apply(o.element) : "string" == typeof i && (i = parseFloat(i), o.options.offset.indexOf("%") > -1 && (i = Math.ceil(e.contextDimension * i / 100))), o.offset = r - e.contextOffset + e.contextScroll - i, o.options.onlyOnScroll && null != l || !o.enabled ? void 0 : null !== l && l < (s = e.oldScroll) && s <= o.offset ? o.trigger([e.backward]) : null !== l && l > (a = e.oldScroll) && a >= o.offset ? o.trigger([e.forward]) : null === l && e.oldScroll >= o.offset ? o.trigger([e.forward]) : void 0
                    })
                })
            }, t.prototype.checkEmpty = function() {
                return n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([g, p].join(" ")), delete u[this.id]) : void 0
            }, t
        }(), l = function() {
            function t(t, e, o) {
                var i, r;
                "bottom-in-view" === o.offset && (o.offset = function() {
                    var t;
                    return t = n[w]("viewportHeight"), n.isWindow(e.element) || (t = e.$element.height()), t - n(this).outerHeight()
                }), this.$element = t, this.element = t[0], this.axis = o.horizontal ? "horizontal" : "vertical", this.callback = o.handler, this.context = e, this.enabled = o.enabled, this.id = "waypoints" + m++, this.offset = null, this.options = o, e.waypoints[this.axis][this.id] = this, s[this.axis][this.id] = this, i = null != (r = this.element[v]) ? r : [], i.push(this.id), this.element[v] = i
            }
            return t.prototype.trigger = function(t) {
                return this.enabled ? (null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0) : void 0
            }, t.prototype.disable = function() {
                return this.enabled = !1
            }, t.prototype.enable = function() {
                return this.context.refresh(), this.enabled = !0
            }, t.prototype.destroy = function() {
                return delete s[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, t.getWaypointsByElement = function(t) {
                var e, o;
                return (o = t[v]) ? (e = n.extend({}, s.horizontal, s.vertical), n.map(o, function(t) {
                    return e[t]
                })) : []
            }, t
        }(), d = {
            init: function(t, e) {
                var o;
                return e = n.extend({}, n.fn[y].defaults, e), null == (o = e.handler) && (e.handler = t), this.each(function() {
                    var t, o, i, s;
                    return t = n(this), i = null != (s = e.context) ? s : n.fn[y].defaults.context, n.isWindow(i) || (i = t.closest(i)), i = n(i), o = u[i[0][c]], o || (o = new r(i)), new l(t, o, e)
                }), n[w]("refresh"), this
            },
            disable: function() {
                return d._invoke.call(this, "disable")
            },
            enable: function() {
                return d._invoke.call(this, "enable")
            },
            destroy: function() {
                return d._invoke.call(this, "destroy")
            },
            prev: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    return e > 0 ? t.push(n[e - 1]) : void 0
                })
            },
            next: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    return e < n.length - 1 ? t.push(n[e + 1]) : void 0
                })
            },
            _traverse: function(t, e, i) {
                var r, l;
                return null == t && (t = "vertical"), null == e && (e = o), l = h.aggregate(e), r = [], this.each(function() {
                    var e;
                    return e = n.inArray(this, l[t]), i(r, e, l[t])
                }), this.pushStack(r)
            },
            _invoke: function(t) {
                return this.each(function() {
                    var e;
                    return e = l.getWaypointsByElement(this), n.each(e, function(e, n) {
                        return n[t](), !0
                    })
                }), this
            }
        }, n.fn[y] = function() {
            var t, o;
            return o = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], d[o] ? d[o].apply(this, t) : n.isFunction(o) ? d.init.apply(this, arguments) : n.isPlainObject(o) ? d.init.apply(this, [null, o]) : n.error(o ? "The " + o + " method does not exist in jQuery Waypoints." : "jQuery Waypoints needs a callback function or handler option.")
        }, n.fn[y].defaults = {
            context: o,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        }, h = {
            refresh: function() {
                return n.each(u, function(t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function() {
                var t;
                return null != (t = o.innerHeight) ? t : i.height()
            },
            aggregate: function(t) {
                var e, o, i;
                return e = s, t && (e = null != (i = u[n(t)[0][c]]) ? i.waypoints : void 0), e ? (o = {
                    horizontal: [],
                    vertical: []
                }, n.each(o, function(t, i) {
                    return n.each(e[t], function(t, e) {
                        return i.push(e)
                    }), i.sort(function(t, e) {
                        return t.offset - e.offset
                    }), o[t] = n.map(i, function(t) {
                        return t.element
                    }), o[t] = n.unique(o[t])
                }), o) : []
            },
            above: function(t) {
                return null == t && (t = o), h._filter(t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function(t) {
                return null == t && (t = o), h._filter(t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function(t) {
                return null == t && (t = o), h._filter(t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function(t) {
                return null == t && (t = o), h._filter(t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function() {
                return h._invoke("enable")
            },
            disable: function() {
                return h._invoke("disable")
            },
            destroy: function() {
                return h._invoke("destroy")
            },
            extendFn: function(t, e) {
                return d[t] = e
            },
            _invoke: function(t) {
                var e;
                return e = n.extend({}, s.vertical, s.horizontal), n.each(e, function(e, n) {
                    return n[t](), !0
                })
            },
            _filter: function(t, e, o) {
                var i, r;
                return (i = u[n(t)[0][c]]) ? (r = [], n.each(i.waypoints[e], function(t, e) {
                    return o(i, e) ? r.push(e) : void 0
                }), r.sort(function(t, e) {
                    return t.offset - e.offset
                }), n.map(r, function(t) {
                    return t.element
                })) : []
            }
        }, n[w] = function() {
            var t, n;
            return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], h[n] ? h[n].apply(null, t) : h.aggregate.call(null, n)
        }, n[w].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        }, i.on("load.waypoints", function() {
            return n[w]("refresh")
        })
    })
}.call(this), window.matchMedia = window.matchMedia || function(t) {
        var e, n = t.documentElement,
            o = n.firstElementChild || n.firstChild,
            i = t.createElement("body"),
            r = t.createElement("div");
        return r.id = "mq-test-1", r.style.cssText = "position:absolute;top:-100em", i.appendChild(r),
            function(t) {
                return r.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', n.insertBefore(i, o), e = 42 == r.offsetWidth, n.removeChild(i), {
                    matches: e,
                    media: t
                }
            }
           
    }
    
    
    
    
    
    
    (document),
    function(t) {
        "use strict";
        t.picturefill = function() {
            for (var e = t.document.getElementsByTagName("span"), n = 0, o = e.length; o > n; n++)
                if (null !== e[n].getAttribute("data-picture")) {
                    for (var i = e[n].getElementsByTagName("span"), r = [], l = 0, s = i.length; s > l; l++) {
                        var a = i[l].getAttribute("data-media");
                       
                        (!a || t.matchMedia && t.matchMedia(a).matches) && r.push(i[l])
                    }
                    var c = e[n].getElementsByTagName("img")[0];
                    if (r.length) {
                        var u = r.pop();
                        if (c && "NOSCRIPT" !== c.parentNode.nodeName) {
                            if (u === c.parentNode) continue
                        } else 
												
                        c = t.document.createElement("img"),  
                        c.mid = e[n].getAttribute("data-midnight");
                        
                        
                        if (c.mid == "light"){
	                        
                        var mn = document.createElement("img");
                        u.appendChild(mn); 
                        
                    
                        var att = document.createAttribute("data-midnight");
                        att.value = "light";
						mn.setAttributeNode(att); 
						
						var margin = document.createAttribute("class");
						margin.value = "no-margin";
						mn.setAttributeNode(margin);
						/*var att = document.createAttribute("data-midnight");
                        att.value = "light";
						c.setAttributeNode(att);  */
                        
                        }
                        c.alt = e[n].getAttribute("data-alt"),
                        
                        c.src = u.getAttribute("data-src"), u.appendChild(c), c.removeAttribute("width"), c.removeAttribute("height")
                    } else c && c.parentNode.removeChild(c)
                }
        }, t.addEventListener ? (t.addEventListener("resize", t.picturefill, !1), t.addEventListener("DOMContentLoaded", function() {
            t.picturefill(), t.removeEventListener("load", t.picturefill, !1)
        }, !1), t.addEventListener("load", t.picturefill, !1)) : t.attachEvent && t.attachEvent("onload", t.picturefill)
    }(this), 
    
    
    
    
    $(document).ready(function() {
    	$("#loading").show().removeClass("hidden")
        $.ajax()
    }), 
    
    	$(document).ajaxStart(function() {
        
        $("#loading").delay(2000)
        
    }), 
    	$(document).ajaxStop(function() {
        $("#loading").fadeOut(500).addClass("hidden")
         }), 
         
        $(document).ready(function() {
        function t() {
            window.location = linkLocation
            
        }
        $("body").css("display", "none"), $("body").fadeIn(0), 
        $("a.transition").click(function(e) { e.preventDefault(), linkLocation = this.href,  $("body").fadeOut(1000, t), $("body, #inhalt").css("background-color", "#f8f8f5")
        }) 

        
        
    }), $(function() {
        $("#navelements2").waypoint(function() {
            $("#nav").toggleClass("scrolled")
            $("#nav2").toggleClass("scrolled")
        }, {
            offset: 0
        })
    }), 
              
              
 	$(document).ready(function(){
 		  if (window.matchMedia("(min-width:750px)").matches) {
	 	 $("a#firstpoint").click(function(f) { f.preventDefault(), linkLocation = this.href,  
	 	 $("#firstpoint, #selectedworks").fadeOut(300), $("#innen").fadeIn(2500)
	 	 })
	 	 }
 	})   
 	
          

$(function(){
    
     $("#firstpoint").waypoint(function() {
     	var target3 = "#projects";
	    var $target3 = $(target3);
	     
	   
	   
	 	$("#innen").css("display","none"), $("#innen").fadeIn(2500);
	 
	    $('html, body').css("opacity", "1").stop().animate({
	    
            'scrollTop': $target3.offset().top
          

	    }, 1000, 'swing', function () {
	    
			var target4 = "#stophere";
			var $target4 = $(target4);
		   	var position = $target4.position();
		   	var scrollPoint = position.top;
		   	var scrolledPast = false;
		   	   
	 	   
		   	$(window).scroll(function() { 
			   	$(window).scrollTop() > scrollPoint ? scrolledPast = true : '';
			   	$(window).scrollTop() < scrollPoint && scrolledPast == true ? $(window).scrollTop(scrollPoint) : ''; 	
	 	    }) .scroll();

	 	     });
	 	     
	 	     
	    })
   }), 
   

   $(document).ready(function() {
        $("#menu-icon").click(function() {
            $("#navelements").slideToggle(600,"swing")
            $("#navelements").css("opacity", "1")
        })
    }), 
    
    
$(document).ready(function() {
    if (window.matchMedia("(min-width:1281px)").matches) {
	$(function() {
    $(".project_teaser_schmal").removeClass("project_teaser_schmal"); 
    })
    }
  });


$(document).ready(function(){
	$('.archive_description_box').each(function(){
	
	var offset = $(this).offset();
	
	var windowWidth = $(window).width();
	var fromLeft = windowWidth *.5;
	var fromLeft2 = windowWidth *.45;
	
	if (window.matchMedia("(min-width:760px)").matches) {
	if(offset.left < fromLeft){	
		$(this).addClass('side');
		
	}
	else {
		$(this).addClass('leftside');
	}
	
	}
	
	
	if (window.matchMedia("(min-width:1281px)").matches) {
	if(offset.left < fromLeft2){	
		$(this).addClass('side');
		
	}
	else {
		$(this).addClass('leftside');
	}
	
	}

	
})
	})
	
 ; 
    
$(document).ready(function(){
	 if (window.matchMedia("(max-width:779px)").matches) {
		 var ul = document.getElementById("navelements");
		 var li = document.createElement("li");
		 var li2 = document.createElement("li");
		 li.appendChild(document.createTextNode("Selected Works"));
		 li.setAttribute("class", "listelements");
		 ul.appendChild(li);
		 li2.appendChild(document.createTextNode("© 2013-2022 Stefanie Brückler"));
		 li2.setAttribute("class", "listelements");
		 ul.appendChild(li2);

	 }
})
    
    

	
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').css("opacity", "1").stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () { offset(300)
	    });
	});
})

/*!
 * Midnight.js 1.1.1
 * jQuery plugin to switch between multiple fixed header designs on the fly, so it looks in line with the content below it.
 * http://aerolab.github.io/midnight.js/
 *
 * Copyright (c) 2014 Aerolab <info@aerolab.co>
 *
 * Released under the MIT license
 * http://aerolab.github.io/midnight.js/LICENSE.txt
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){var e=0,s=Array.prototype.slice;t.cleanData=function(e){return function(s){var i,n,o;for(o=0;null!=(n=s[o]);o++)try{i=t._data(n,"events"),i&&i.remove&&t(n).triggerHandler("remove")}catch(r){}e(s)}}(t.cleanData),t.widget=function(e,s,i){var n,o,r,a,h={},d=e.split(".")[0];return e=e.split(".")[1],n=d+"-"+e,i||(i=s,s=t.Widget),t.expr[":"][n.toLowerCase()]=function(e){return!!t.data(e,n)},t[d]=t[d]||{},o=t[d][e],r=t[d][e]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new r(t,e)},t.extend(r,o,{version:i.version,_proto:t.extend({},i),_childConstructors:[]}),a=new s,a.options=t.widget.extend({},a.options),t.each(i,function(e,i){return t.isFunction(i)?void(h[e]=function(){var t=function(){return s.prototype[e].apply(this,arguments)},n=function(t){return s.prototype[e].apply(this,t)};return function(){var e,s=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=i.apply(this,arguments),this._super=s,this._superApply=o,e}}()):void(h[e]=i)}),r.prototype=t.widget.extend(a,{widgetEventPrefix:o?a.widgetEventPrefix||e:e},h,{constructor:r,namespace:d,widgetName:e,widgetFullName:n}),o?(t.each(o._childConstructors,function(e,s){var i=s.prototype;t.widget(i.namespace+"."+i.widgetName,r,s._proto)}),delete o._childConstructors):s._childConstructors.push(r),t.widget.bridge(e,r),r},t.widget.extend=function(e){for(var i,n,o=s.call(arguments,1),r=0,a=o.length;a>r;r++)for(i in o[r])n=o[r][i],o[r].hasOwnProperty(i)&&void 0!==n&&(e[i]=t.isPlainObject(n)?t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(o){var r="string"==typeof o,a=s.call(arguments,1),h=this;return o=!r&&a.length?t.widget.extend.apply(null,[o].concat(a)):o,r?this.each(function(){var s,i=t.data(this,n);return"instance"===o?(h=i,!1):i?t.isFunction(i[o])&&"_"!==o.charAt(0)?(s=i[o].apply(i,a),s!==i&&void 0!==s?(h=s&&s.jquery?h.pushStack(s.get()):s,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")}):this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new i(o,this))}),h}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(s,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),s),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(e,s){var i,n,o,r=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(r={},i=e.split("."),e=i.shift(),i.length){for(n=r[e]=t.widget.extend({},this.options[e]),o=0;i.length-1>o;o++)n[i[o]]=n[i[o]]||{},n=n[i[o]];if(e=i.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=s}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];r[e]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(e,s,i){var n,o=this;"boolean"!=typeof e&&(i=s,s=e,e=!1),i?(s=n=t(s),this.bindings=this.bindings.add(s)):(i=s,s=this.element,n=this.widget()),t.each(i,function(i,r){function a(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?o[r]:r).apply(o,arguments):void 0}"string"!=typeof r&&(a.guid=r.guid=r.guid||a.guid||t.guid++);var h=i.match(/^([\w:-]*)\s*(.*)$/),d=h[1]+o.eventNamespace,l=h[2];l?n.delegate(l,d,a):s.bind(d,a)})},_off:function(e,s){s=(s||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(s).undelegate(s),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function s(){return("string"==typeof t?i[t]:t).apply(i,arguments)}var i=this;return setTimeout(s,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,s,i){var n,o,r=this.options[e];if(i=i||{},s=t.Event(s),s.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),s.target=this.element[0],o=s.originalEvent)for(n in o)n in s||(s[n]=o[n]);return this.element.trigger(s,i),!(t.isFunction(r)&&r.apply(this.element[0],[s].concat(i))===!1||s.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,s){t.Widget.prototype["_"+e]=function(i,n,o){"string"==typeof n&&(n={effect:n});var r,a=n?n===!0||"number"==typeof n?s:n.effect||s:e;n=n||{},"number"==typeof n&&(n={duration:n}),r=!t.isEmptyObject(n),n.complete=o,n.delay&&i.delay(n.delay),r&&t.effects&&t.effects.effect[a]?i[e](n):a!==e&&i[a]?i[a](n.duration,n.easing,o):i.queue(function(s){t(this)[e](),o&&o.call(i[0]),s()})}}),t.widget}),function(t){"use strict";t.widget("aerolab.midnight",{options:{headerClass:"midnightHeader",innerClass:"midnightInner",defaultClass:"default",classPrefix:""},_headers:{},_headerInfo:{top:0,height:0},_$sections:[],_sections:[],_scrollTop:0,_documentHeight:0,_transformMode:!1,refresh:function(){this._headerInfo={top:0,height:this.element.outerHeight()},this._$sections=t("[data-midnight]"),this._sections=[],this._setupHeaders(),this.recalculate()},_create:function(){var e=this;this._scrollTop=window.pageYOffset||document.documentElement.scrollTop,this._documentHeight=t(document).height(),this._headers={},this._transformMode=this._getSupportedTransform(),this.refresh(),setInterval(function(){e._recalculateSections()},1e3),e.recalculate(),t(window).resize(function(){e.recalculate()}),this._updateHeadersLoop()},recalculate:function(){this._recalculateSections(),this._updateHeaderHeight(),this._recalculateHeaders(),this._updateHeaders()},_getSupportedTransform:function(){for(var t=["transform","WebkitTransform","MozTransform","OTransform","msTransform"],e=0;e<t.length;e++)if(void 0!==document.createElement("div").style[t[e]])return t[e];return!1},_getContainerHeight:function(){var e=this.element.find("> ."+this.options.headerClass),s=0,i=0,n=this;return e.length?e.each(function(){var e=t(this),o=e.find("> ."+n.options.innerClass);o.length?(o.css("bottom","auto").css("overflow","auto"),i=o.outerHeight(),o.css("bottom","0")):(e.css("bottom","auto"),i=e.outerHeight(),e.css("bottom","0")),s=i>s?i:s}):s=i=this.element.outerHeight(),s},_setupHeaders:function(){var e=this;this._headers[this.options.defaultClass]={},this._$sections.each(function(){var s=t(this),i=s.data("midnight");"string"==typeof i&&(i=i.trim(),""!==i&&(e._headers[i]={}))});({top:this.element.css("padding-top"),right:this.element.css("padding-right"),bottom:this.element.css("padding-bottom"),left:this.element.css("padding-left")});this.element.css({position:"fixed",left:0,right:0,overflow:"hidden"}),this._updateHeaderHeight();var s=this.element.find("> ."+this.options.headerClass);s.length?s.filter("."+this.options.defaultClass).length||s.filter("."+this.options.headerClass+":first").clone(!0,!0).attr("class",this.options.headerClass+" "+this.options.defaultClass):this.element.wrapInner('<div class="'+this.options.headerClass+" "+this.options.defaultClass+'"></div>');var s=this.element.find("> ."+this.options.headerClass),i=s.filter("."+this.options.defaultClass).clone(!0,!0);for(var n in this._headers)if(this._headers.hasOwnProperty(n)&&"undefined"==typeof this._headers[n].element){var o=s.filter("."+n);o.length?this._headers[n].element=o:this._headers[n].element=i.clone(!0,!0).removeClass(this.options.defaultClass).addClass(n).appendTo(this.element);var r={position:"absolute",overflow:"hidden",top:0,left:0,right:0,bottom:0};this._headers[n].element.css(r),this._transformMode!==!1&&this._headers[n].element.css(this._transformMode,"translateZ(0)"),this._headers[n].element.find("> ."+this.options.innerClass).length||this._headers[n].element.wrapInner('<div class="'+this.options.innerClass+'"></div>'),this._headers[n].inner=this._headers[n].element.find("> ."+this.options.innerClass),this._headers[n].inner.css(r),this._transformMode!==!1&&this._headers[n].inner.css(this._transformMode,"translateZ(0)"),this._headers[n].from="",this._headers[n].progress=0}s.each(function(){var s=t(this),i=!1;for(var n in e._headers)e._headers.hasOwnProperty(n)&&s.hasClass(n)&&(i=!0);s.find("> ."+e.options.innerClass).length||s.wrapInner('<div class="'+e.options.innerClass+'"></div>'),i?s.show():s.hide()})},_recalculateHeaders:function(){this._scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,this._scrollTop=Math.max(this._scrollTop,0),this._scrollTop=Math.min(this._scrollTop,this._documentHeight);var t=this._headerInfo.height,e=this._scrollTop+this._headerInfo.top,s=e+t;if("function"==typeof window.getComputedStyle){var i=window.getComputedStyle(this.element[0],null),n=0,o=0;if(this._transformMode!==!1&&"string"==typeof i.transform){var r=i.transform.match(/(-?[0-9\.]+)/g);null!==r&&r.length>=6&&!isNaN(parseFloat(r[5]))&&(o=parseFloat(r[5]))}i.top.indexOf("px")>=0&&!isNaN(parseFloat(i.top))&&(n=parseFloat(i.top)),e+=n+o,s+=n+o}for(var a in this._headers)this._headers.hasOwnProperty(a)&&(this._headers[a].from="",this._headers[a].progress=0);for(var h=0;h<this._sections.length;h++)s>=this._sections[h].start&&e<=this._sections[h].end&&(this._headers[this._sections[h].className].visible=!0,e>=this._sections[h].start&&s<=this._sections[h].end?(this._headers[this._sections[h].className].from="top",this._headers[this._sections[h].className].progress+=1):s>this._sections[h].end&&e<this._sections[h].end?(this._headers[this._sections[h].className].from="top",this._headers[this._sections[h].className].progress=1-(s-this._sections[h].end)/t):s>this._sections[h].start&&e<this._sections[h].start&&("top"===this._headers[this._sections[h].className].from?this._headers[this._sections[h].className].progress+=(s-this._sections[h].start)/t:(this._headers[this._sections[h].className].from="bottom",this._headers[this._sections[h].className].progress=(s-this._sections[h].start)/t)))},_updateHeaders:function(){if("undefined"!=typeof this._headers[this.options.defaultClass]){var t=0,e="";for(var s in this._headers)this._headers.hasOwnProperty(s)&&""!==!this._headers[s].from&&(t+=this._headers[s].progress,e=s);1>t&&(""===this._headers[this.options.defaultClass].from?(this._headers[this.options.defaultClass].from="top"===this._headers[e].from?"bottom":"top",this._headers[this.options.defaultClass].progress=1-t):this._headers[this.options.defaultClass].progress+=1-t);for(var i in this._headers)if(this._headers.hasOwnProperty(i)&&""!==!this._headers[i].from){var n=100*(1-this._headers[i].progress);n>=100&&(n=110),-100>=n&&(n=-110),"top"===this._headers[i].from?this._transformMode!==!1?(this._headers[i].element[0].style[this._transformMode]="translateY(-"+n+"%) translateZ(0)",this._headers[i].inner[0].style[this._transformMode]="translateY(+"+n+"%) translateZ(0)"):(this._headers[i].element[0].style.top="-"+n+"%",this._headers[i].inner[0].style.top="+"+n+"%"):this._transformMode!==!1?(this._headers[i].element[0].style[this._transformMode]="translateY(+"+n+"%) translateZ(0)",this._headers[i].inner[0].style[this._transformMode]="translateY(-"+n+"%) translateZ(0)"):(this._headers[i].element[0].style.top="+"+n+"%",this._headers[i].inner[0].style.top="-"+n+"%")}}},_recalculateSections:function(){this._documentHeight=t(document).height(),this._sections=[];for(var e=0;e<this._$sections.length;e++){var s=t(this._$sections[e]);this._sections.push({element:s,className:s.data("midnight"),start:s.offset().top,end:s.offset().top+s.outerHeight()})}},_updateHeaderHeight:function(){this._headerInfo.height=this._getContainerHeight(),this.element.css("height",this._headerInfo.height+"px")},_updateHeadersLoop:function(){var t=this;this._requestAnimationFrame(function(){t._updateHeadersLoop()}),this._recalculateHeaders(),this._updateHeaders()},_requestAnimationFrame:function(t){var e=e||function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();e(t)}})}(jQuery);

$(document).ready(function(){
   if (window.matchMedia("(min-width:780px)").matches) {
    $('#nav').midnight();
    $('#nav2').midnight();
    
    
    }
  });

