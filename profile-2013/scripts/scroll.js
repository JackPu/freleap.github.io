var H = {
    CONFIG: {
        ScrollLink: "#js_scroll_link"
    }
};

H.Scroll = (function(){
    var _cache = {}, _focus = "focus", 
    _timer, _start = 0, _end = 0, _speed = 5, _moveNum = 60, 
    _warp, _height = 0, _oldInd = 0, _openKey = true, _callback;
    
    if($.browser.msie && $.browser.version == 8){
        _speed = 1;
        _moveNum = 70;
    }
    
    
    
    var gotoScroll = function(){
        if(_start != _end){
            _openKey = false;
            _timer = window.setTimeout(function(){
                var val = _start + _moveNum;
                var isless = true;
                if(_start > _end){
                    val = _start - _moveNum;
                    isless = false;
                }
                _start = val;
                if(isless){
                    if(_start > _end){
                        _start = _end;
                    }
                }
                else{
                    if(_start < _end){
                        _start = _end;
                    }
                }
                _warp.scrollTop(_start);
                if(_start != _end){
                    gotoScroll();
                }
                else{
                    _openKey = true;
                    if(_timer) window.clearTimeout(_timer);
                    if(_callback){
                        _callback();
                        _callback = null;
                    }
                }
            }, _speed);
        }
        else{
            if(_timer){
                window.clearTimeout(_timer);
            }
            _openKey = true;
            _start = _end = 0;
        }
    }
    
    var listen = function(){
        var timer;
        var listenFun = function(){
            timer = window.setTimeout(function(){
                var st = _warp.scrollTop();
                var ind = 0;
                if(_height > 0){
                    ind = Math.floor(st / _height);
                }
                if(ind != _oldInd){
                    if(_cache.list[_oldInd]){
                        _cache.list[_oldInd].Tab.removeClass("focus");
                    }
                    if(_cache.list[ind]){
                        _cache.list[ind].Tab.addClass("focus");
                    }
                    _oldInd = ind;
                    if(_oldInd == 0){
                        _cache.scrollLink.hide();
                    }
                    else{
                        _cache.scrollLink.show();
                    }
                }
                if(timer) window.clearTimeout(timer);
                listenFun();
            }, 16);
        }
        listenFun();
    }
    
    var move = function(ind){
        if(_cache.list && _cache.list[ind]){            
            var item = _cache.list[ind];
            var con = item.Content;
            var t = con.offset().top;
            _start = _warp.scrollTop();
            _end = t - _cache.list[0].Content.offset().top;
            if(_openKey){
                gotoScroll();
            }
        }
    }
    
    var bind = function(){
        if(_cache.list){
            for(var i = 0, len = _cache.list.length; i < len; i++){
                var item = _cache.list[i];
                item.Tab.on("click", {
                    ind: i
                }, function(e){
                    var ind = e.data.ind;
                    move(ind);
                    return false;
                })
            }
            listen();
            
            
            _warp.bind("mousewheel",function(e){
                //当滚轮向下滚的时候 e.wheelDelta = -150,向上滚e.wheelDelta = 150
                var ind;
                if($.browser.msie){
                    event.returnValue = false;
                }
                if(!$.browser.msie){
                    e.preventDefault();
                }
                if(event.wheelDelta < 0){
                    ind = _oldInd + 1;
                    if(ind < _cache.list.length){
                        move(ind);
                    }
                    else{
                        event.returnValue = true;
                    }
                }
                else{
                    ind = _oldInd - 1;
                    if(ind >= 0){
                        move(ind);
                    }
                }
            })
            
            _warp.bind("DOMMouseScroll",function(e){
                //当滚轮向下滚的时候 e.detail= 3,向上滚e.detail = -3
                var ind;
                if(e.detail == 3){
                    ind = _oldInd + 1;
                    if(ind < _cache.list.length){
                        move(ind);
                    }
                }
                else if(e.detail == -3){
                    ind = _oldInd - 1;
                    if(ind > 0){
                        move(ind);
                    }
                } 
            })
            
            $(window).on("resize", function(){
                if(_resizeTimer) window.clearTimeout(_resizeTimer);
                _resizeTimer = window.setTimeout(function(){
                    if(_cache.list && _cache.list.length){
                        _height = _cache.list[0].Content.height();
                    }
                    move(_oldInd);
                    if(_resizeTimer) window.clearTimeout(_resizeTimer);
                }, 100);
                
            })
        }
        
        
    }
    
    var _resizeTimer;
    
    
    return {
        Init: function(warp, list){
            _warp = warp;
            _cache.list = list;
            _cache.scrollLink = $(H.CONFIG.ScrollLink);
            if(_cache.list.length){
                _height = _cache.list[0].Content.height();
            }
            bind();
        },
        Move: function(ind, callback){
            move(ind);
            _callback = callback;
        }
    }
})();





H.Common = (function(){
    
    return {
		FestivalLogo: function(obj){
			if(obj.logo && obj.box && obj.background){
				for(var i = 0; i < obj.logo.length; i ++){
					var logo = obj.logo[i].festival,
					thisTime = Date.parse(new Date()),
					start = Date.parse(obj.logo[i].startDate),
					end = Date.parse(obj.logo[i].endDate);
					
					if(thisTime > start && thisTime < end){
						
						swf = "http://www.115.com/static/images/festival/" + logo + ".swf"
						w = 365,
						h = 80;
						var flash = [];
						if($.browser.msie){
							flash.push('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + w + '" height="' + h + '">');
							flash.push('<param name="movie" value="' + swf + '" />');
						}
						else{
							flash.push('<object type="application/x-shockwave-flash" data="' + swf + '" width="' + w + '" height="' + h + '">');
						}
						flash.push('<param name="quality" value="high" />');
						flash.push('<param name="wmode" value="transparent" />');
						flash.push('<param name="menu" value="false">');
						flash.push('</object>');
						
						obj.box.html(flash.join("")).show();
						
						if(obj.logo[i].transparent){
							obj.background.show();
						}
						else{
							obj.background.hide();
						}
					}
				}
			}
		},
        Crab: function(obj){
            if(obj.crabBox && obj.crabHub && obj.sideLeft && obj.sideRight && obj.distance && obj.duration){
							
                var direction = -1;
                var hoverClass = "hover", activeClass = "active";
                if(obj.hoverClass){ 
                    hoverClass = obj.hoverClass;
                }
                if(obj.activeClass){
                    activeClass = obj.activeClass;
                }
							
                var runAway = function(){
                    obj.crabBox.addClass(activeClass);
                    var posX = obj.crabBox.position().left;
                    if((posX - obj.distance) < obj.sideLeft){
                        direction = 1;
                    }
                    else if((posX + obj.distance) > obj.sideRight){
                        direction = -1;
                    }
                    obj.crabBox.stop().animate({
                        left: posX + direction * obj.distance + "px"
                    }, obj.duration, function(){
                        obj.crabBox.removeClass(activeClass);
                        obj.crabBox.addClass(hoverClass);
                        window.setTimeout(function(){
                            obj.crabBox.removeClass(hoverClass);
                        }, 600);
                    });
                }
                obj.crabHub.bind({
                    mouseover: function(){
                        obj.crabBox.addClass(hoverClass);
                    },
                    mouseout: function(){
                        obj.crabBox.removeClass(hoverClass);
                    },
                    click: function(){
                        runAway();
                    }
                })
            }
        },
        Share: function(lis){
            var timer, stop = false, active = 0;              
            var listen = function(){
                timer = window.setTimeout(function(){
                    if(!stop){
                        var span = $(lis[active]);
                        span.hide();

                        active++;
                        if(active >= lis.length){
                            active = 0;
                        }
                        var item = $(lis[active]);
                        span = item;
                        span.fadeIn(500);
                    }
                    if(timer) window.clearTimeout(timer);
                    listen();
                }, 4000);
            }
            listen();

        /*lis.each(function(i){
               $(this).on("mouseover", {ind: i}, function(e){
                    stop = true;

                    active = e.data.ind;

                    lis.hide();

                    var item = $(lis[active]);
                    var span = item;
                    span.fadeIn(500);

               }).on("mouseout", {ind: i}, function(e){
                    stop = false;
               }); 
            })*/
        }
    }
})();
