// Garden Gnome Software - Skin
// Pano2VR 5.2.2/15983
// Filename: ?????? ?????????? (?? ?????) ??? ?????????? ????? ??????.ggsk
// Generated Вт сен 19 22:30:39 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/button_1__a.png';
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._info=document.createElement('div');
		this._info__img=document.createElement('img');
		this._info__img.className='ggskin ggskin_svg';
		this._info__img.setAttribute('src',basePath + 'images/info.svg');
		this._info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._info__img['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__img);
		this._info.ggId="info";
		this._info.ggLeft=449;
		this._info.ggTop=214;
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=true;
		this._info.className='ggskin ggskin_svg ';
		this._info.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 449px;';
		hs+='position : absolute;';
		hs+='top : 214px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		this._info.setAttribute('style',hs);
		this._info.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			return false;
		}
		me._info.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._info.onclick=function (e) {
			me._info_cont.style[domTransition]='none';
			me._info_cont.style.visibility=(Number(me._info_cont.style.opacity)>0||!me._info_cont.style.opacity)?'inherit':'hidden';
			me._info_cont.ggVisible=true;
		}
		this._info.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._info);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggLeft=-32;
		this._loading.ggTop=-6;
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container ';
		this._loading.ggType='container';
		hs ='';
		hs+='height : 68px;';
		hs+='left : -32px;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 68px;';
		hs+='pointer-events:none;';
		this._loading.setAttribute('style',hs);
		this._loading.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		me._loading.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggLeft=-34;
		this._loadingbg.ggTop=-34;
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle ';
		this._loadingbg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 29px;';
		hs+='border-radius : 29px;';
		hs+='background : rgba(0,0,0,0.388235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 68px;';
		hs+='left : -34px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -34px;';
		hs+='visibility : inherit;';
		hs+='width : 68px;';
		hs+='pointer-events:auto;';
		this._loadingbg.setAttribute('style',hs);
		this._loadingbg.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loading.appendChild(this._loadingbg);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggLeft=-14;
		this._loadingtext.ggTop=-8;
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text ';
		this._loadingtext.ggType='text';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -8px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs=(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingtext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingtext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loading.appendChild(this._loadingtext);
		this.divSkin.appendChild(this._loading);
		this.__2=document.createElement('div');
		this.__2.ggId="\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u041c\u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f";
		this.__2.ggLeft=-488;
		this.__2.ggTop=197;
		this.__2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2.ggVisible=true;
		this.__2.className='ggskin ggskin_container ';
		this.__2.ggType='container';
		hs ='';
		hs+='height : 53px;';
		hs+='left : -488px;';
		hs+='position : absolute;';
		hs+='top : 197px;';
		hs+='visibility : inherit;';
		hs+='width : 53px;';
		hs+='pointer-events:none;';
		this.__2.setAttribute('style',hs);
		this.__2.style[domTransform + 'Origin']='50% 50%';
		me.__2.ggIsActive=function() {
			return false;
		}
		me.__2.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this.__2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._button_1=document.createElement('div');
		this._button_1__img=document.createElement('img');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img.setAttribute('src',basePath + 'images/button_1.png');
		this._button_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_1__img);
		this._button_1.appendChild(this._button_1__img);
		this._button_1.ggId="Button 1";
		this._button_1.ggLeft=-26;
		this._button_1.ggTop=-26;
		this._button_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_1.ggVisible=true;
		this._button_1.className='ggskin ggskin_button ';
		this._button_1.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 53px;';
		hs+='left : -26px;';
		hs+='position : absolute;';
		hs+='top : -26px;';
		hs+='visibility : inherit;';
		hs+='width : 53px;';
		hs+='pointer-events:auto;';
		this._button_1.setAttribute('style',hs);
		this._button_1.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_1.onmousedown=function (e) {
			me._button_1__img.src=basePath + 'images/button_1__a.png';
		}
		this._button_1.onmouseup=function (e) {
			me._button_1__img.src=basePath + 'images/button_1.png';
		}
		this._button_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this.__2.appendChild(this._button_1);
		this.divSkin.appendChild(this.__2);
		this.__1=document.createElement('div');
		this.__1.ggId="\u0420\u0435\u0436\u0438\u043c \u044d\u043a\u0440\u0430\u043d\u0430";
		this.__1.ggLeft=446;
		this.__1.ggTop=-250;
		this.__1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1.ggVisible=true;
		this.__1.className='ggskin ggskin_container ';
		this.__1.ggType='container';
		hs ='';
		hs+='height : 39px;';
		hs+='left : 446px;';
		hs+='position : absolute;';
		hs+='top : -250px;';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:none;';
		this.__1.setAttribute('style',hs);
		this.__1.style[domTransform + 'Origin']='50% 50%';
		me.__1.ggIsActive=function() {
			return false;
		}
		me.__1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this.__1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._fullscreen_off=document.createElement('div');
		this._fullscreen_off__img=document.createElement('img');
		this._fullscreen_off__img.className='ggskin ggskin_svg';
		this._fullscreen_off__img.setAttribute('src',basePath + 'images/fullscreen_off.svg');
		this._fullscreen_off__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreen_off__img['ondragstart']=function() { return false; };
		this._fullscreen_off.appendChild(this._fullscreen_off__img);
		this._fullscreen_off.ggId="fullscreen_off";
		this._fullscreen_off.ggLeft=-16;
		this._fullscreen_off.ggTop=-16;
		this._fullscreen_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen_off.ggVisible=true;
		this._fullscreen_off.className='ggskin ggskin_svg ';
		this._fullscreen_off.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		this._fullscreen_off.setAttribute('style',hs);
		this._fullscreen_off.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen_off.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreen_off.onclick=function (e) {
			me.player.exitFullscreen();
			me._fullscreen_off.style[domTransition]='none';
			me._fullscreen_off.ggParameter.sx=1.3;me._fullscreen_off.ggParameter.sy=1.3;
			me._fullscreen_off.style[domTransform]=parameterToTransform(me._fullscreen_off.ggParameter);
		}
		this._fullscreen_off.onmouseover=function (e) {
			me.elementMouseOver['fullscreen_off']=true;
		}
		this._fullscreen_off.onmouseout=function (e) {
			me._fullscreen_off.style[domTransition]='none';
			me._fullscreen_off.ggParameter.sx=1;me._fullscreen_off.ggParameter.sy=1;
			me._fullscreen_off.style[domTransform]=parameterToTransform(me._fullscreen_off.ggParameter);
			me.elementMouseOver['fullscreen_off']=false;
		}
		this._fullscreen_off.ontouchend=function (e) {
			me.elementMouseOver['fullscreen_off']=false;
		}
		me._fullscreen_off.ggCurrentLogicStateVisible = -1;
		this._fullscreen_off.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsFullscreen() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_off.style[domTransition]='';
				if (me._fullscreen_off.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_off.style.visibility="hidden";
					me._fullscreen_off.ggVisible=false;
				}
				else {
					me._fullscreen_off.style.visibility=(Number(me._fullscreen_off.style.opacity)>0||!me._fullscreen_off.style.opacity)?'inherit':'hidden';
					me._fullscreen_off.ggVisible=true;
				}
			}
		}
		this._fullscreen_off.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._fullscreen_off.ggUpdateConditionResize();
		}
		this.__1.appendChild(this._fullscreen_off);
		this._fullscreen=document.createElement('div');
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.svg');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggLeft=-16;
		this._fullscreen.ggTop=-16;
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg ';
		this._fullscreen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreen.onclick=function (e) {
			me.player.enterFullscreen();
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.ggParameter.sx=1.3;me._fullscreen.ggParameter.sy=1.3;
			me._fullscreen.style[domTransform]=parameterToTransform(me._fullscreen.ggParameter);
		}
		this._fullscreen.onmouseover=function (e) {
			me.elementMouseOver['fullscreen']=true;
		}
		this._fullscreen.onmouseout=function (e) {
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.ggParameter.sx=1;me._fullscreen.ggParameter.sy=1;
			me._fullscreen.style[domTransform]=parameterToTransform(me._fullscreen.ggParameter);
			me.elementMouseOver['fullscreen']=false;
		}
		this._fullscreen.ontouchend=function (e) {
			me.elementMouseOver['fullscreen']=false;
		}
		me._fullscreen.ggCurrentLogicStateVisible = -1;
		this._fullscreen.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen.style[domTransition]='';
				if (me._fullscreen.ggCurrentLogicStateVisible == 0) {
					me._fullscreen.style.visibility="hidden";
					me._fullscreen.ggVisible=false;
				}
				else {
					me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
					me._fullscreen.ggVisible=true;
				}
			}
		}
		this._fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._fullscreen.ggUpdateConditionResize();
		}
		this.__1.appendChild(this._fullscreen);
		this.divSkin.appendChild(this.__1);
		this.__0=document.createElement('div');
		this.__0.ggId="\u0417\u0443\u043c";
		this.__0.ggLeft=449;
		this.__0.ggTop=-22;
		this.__0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__0.ggVisible=true;
		this.__0.className='ggskin ggskin_container ';
		this.__0.ggType='container';
		hs ='';
		hs+='height : 69px;';
		hs+='left : 449px;';
		hs+='position : absolute;';
		hs+='top : -22px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:none;';
		this.__0.setAttribute('style',hs);
		this.__0.style[domTransform + 'Origin']='50% 50%';
		me.__0.ggIsActive=function() {
			return false;
		}
		me.__0.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this.__0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._zoomout=document.createElement('div');
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.ggId="zoomout";
		this._zoomout.ggLeft=-16;
		this._zoomout.ggTop=-34;
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_svg ';
		this._zoomout.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -34px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomout.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoomout.onmouseout=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.__0.appendChild(this._zoomout);
		this._zoomin=document.createElement('div');
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.ggId="zoomin";
		this._zoomin.ggLeft=-16;
		this._zoomin.ggTop=-69;
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_svg ';
		this._zoomin.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -69px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomin.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoomin.onmouseout=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.__0.appendChild(this._zoomin);
		this.divSkin.appendChild(this.__0);
		this._map_fullskr=document.createElement('div');
		this._map_fullskr.ggId="Map FullSkr";
		this._map_fullskr.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_fullskr.ggVisible=false;
		this._map_fullskr.className='ggskin ggskin_container ';
		this._map_fullskr.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 596px;';
		hs+='left : -44px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : hidden;';
		hs+='width : 1111px;';
		hs+='pointer-events:none;';
		this._map_fullskr.setAttribute('style',hs);
		this._map_fullskr.style[domTransform + 'Origin']='50% 50%';
		me._map_fullskr.ggIsActive=function() {
			return false;
		}
		me._map_fullskr.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._map_fullskr.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=true;
		this._rectangle_1.className='ggskin ggskin_rectangle ';
		this._rectangle_1.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.521569);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 595px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1110px;';
		hs+='pointer-events:auto;';
		this._rectangle_1.setAttribute('style',hs);
		this._rectangle_1.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_1.onclick=function (e) {
			me._map_fullskr.style[domTransition]='none';
			me._map_fullskr.style.visibility='hidden';
			me._map_fullskr.ggVisible=false;
			me.__1.style[domTransition]='none';
			me.__1.style.visibility=(Number(me.__1.style.opacity)>0||!me.__1.style.opacity)?'inherit':'hidden';
			me.__1.ggVisible=true;
		}
		this._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		this._map_fullskr.appendChild(this._rectangle_1);
		this._map_2=document.createElement('div');
		this._map_2.innerHTML='Map goes here...';
		this._map_2.ggFilter = '';
		this._map_2.ggFilteredIds = [];
		this._map_2.ggId="Map 2";
		this._map_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_2.ggVisible=true;
		this._map_2.className='ggskin ggskin_map ';
		this._map_2.ggType='map';
		hs ='';
		hs+='background : #fff;';
		hs+='border : 1px solid #000;';
		hs+='height : 424px;';
		hs+='left : 97px;';
		hs+='position : absolute;';
		hs+='top : 83px;';
		hs+='visibility : inherit;';
		hs+='width : 894px;';
		hs+='pointer-events:auto;';
		this._map_2.setAttribute('style',hs);
		this._map_2.style[domTransform + 'Origin']='50% 50%';
		me._map_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_2.ggUpdateConditionTimer=function () {
			me._map_2.ggRadar.update();
		}
		this._map_2.ggUpdatePosition=function (useTransition) {
		}
		this._map_2.ggNodeChange=function () {
			if (this.ggLastActivMarker) {
				if (this.ggLastActivMarker._div.ggDeactivate) this.ggLastActivMarker._div.ggDeactivate();
			}
			var id=me.player.getCurrentNode();
			var marker=this.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			this.ggLastActivMarker=marker;
		}
		this._map_fullskr.appendChild(this._map_2);
		this.__=document.createElement('div');
		this.____img=document.createElement('img');
		this.____img.className='ggskin ggskin_svg';
		this.____img.setAttribute('src',basePath + 'images/_.svg');
		this.____img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.____img['ondragstart']=function() { return false; };
		this.__.appendChild(this.____img);
		this.__.ggId="\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043a\u0430\u0440\u0442\u0443";
		this.__.ggLeft=438;
		this.__.ggTop=-250;
		this.__.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__.ggVisible=true;
		this.__.className='ggskin ggskin_svg ';
		this.__.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 438px;';
		hs+='opacity : 0.3;';
		hs+='position : absolute;';
		hs+='top : -250px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		this.__.setAttribute('style',hs);
		this.__.style[domTransform + 'Origin']='50% 50%';
		me.__.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__.onclick=function (e) {
			me._map_fullskr.style[domTransition]='none';
			me._map_fullskr.style.visibility='hidden';
			me._map_fullskr.ggVisible=false;
			me.__1.style[domTransition]='none';
			me.__1.style.visibility=(Number(me.__1.style.opacity)>0||!me.__1.style.opacity)?'inherit':'hidden';
			me.__1.ggVisible=true;
		}
		this.__.onmouseover=function (e) {
			me.elementMouseOver['_']=true;
		}
		this.__.onmouseout=function (e) {
			if (me.player.transitionsDisabled) {
				me.__.style[domTransition]='none';
			} else {
				me.__.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__.style.opacity='0.3';
			me.__.style.visibility=me.__.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_']=false;
		}
		this.__.ontouchend=function (e) {
			me.elementMouseOver['_']=false;
		}
		this.__.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._map_fullskr.appendChild(this.__);
		this.divSkin.appendChild(this._map_fullskr);
		this._map_1=document.createElement('div');
		this._map_1.innerHTML='Map goes here...';
		this._map_1.ggFilter = '';
		this._map_1.ggFilteredIds = [];
		this._map_1.ggId="Map 1";
		this._map_1.ggLeft=-482;
		this._map_1.ggTop=149;
		this._map_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_1.ggVisible=true;
		this._map_1.className='ggskin ggskin_map ';
		this._map_1.ggType='map';
		hs ='';
		hs+='background : #fff;';
		hs+='border : 1px solid #000;';
		hs+='height : 98px;';
		hs+='left : -482px;';
		hs+='position : absolute;';
		hs+='top : 149px;';
		hs+='visibility : inherit;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		this._map_1.setAttribute('style',hs);
		this._map_1.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			return false;
		}
		me._map_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._map_1.onclick=function (e) {
			me._map_fullskr.style[domTransition]='none';
			me._map_fullskr.style.visibility=(Number(me._map_fullskr.style.opacity)>0||!me._map_fullskr.style.opacity)?'inherit':'hidden';
			me._map_fullskr.ggVisible=true;
			me.__1.style[domTransition]='none';
			me.__1.style.visibility='hidden';
			me.__1.ggVisible=false;
		}
		this._map_1.ggUpdateConditionTimer=function () {
			me._map_1.ggRadar.update();
		}
		this._map_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._map_1.ggNodeChange=function () {
			if (this.ggLastActivMarker) {
				if (this.ggLastActivMarker._div.ggDeactivate) this.ggLastActivMarker._div.ggDeactivate();
			}
			var id=me.player.getCurrentNode();
			var marker=this.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			this.ggLastActivMarker=marker;
		}
		this.divSkin.appendChild(this._map_1);
		this._info_cont=document.createElement('div');
		this._info_cont.ggId="Info cont";
		this._info_cont.ggLeft=-168;
		this._info_cont.ggTop=-106;
		this._info_cont.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_cont.ggVisible=false;
		this._info_cont.className='ggskin ggskin_container ';
		this._info_cont.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 224px;';
		hs+='left : -168px;';
		hs+='position : absolute;';
		hs+='top : -106px;';
		hs+='visibility : hidden;';
		hs+='width : 357px;';
		hs+='pointer-events:none;';
		this._info_cont.setAttribute('style',hs);
		this._info_cont.style[domTransform + 'Origin']='50% 50%';
		me._info_cont.ggIsActive=function() {
			return false;
		}
		me._info_cont.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._info_cont.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._screentint=document.createElement('div');
		this._screentint.ggId="screentint";
		this._screentint.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screentint.ggVisible=true;
		this._screentint.className='ggskin ggskin_rectangle ';
		this._screentint.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 983.654%;';
		hs+='left : -516.38%;';
		hs+='position : absolute;';
		hs+='top : -177.72%;';
		hs+='visibility : inherit;';
		hs+='width : 790.801%;';
		hs+='pointer-events:auto;';
		this._screentint.setAttribute('style',hs);
		this._screentint.style[domTransform + 'Origin']='50% 50%';
		me._screentint.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screentint.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screentint.onclick=function (e) {
			me._info_cont.style[domTransition]='none';
			me._info_cont.style.visibility='hidden';
			me._info_cont.ggVisible=false;
		}
		this._screentint.ggUpdatePosition=function (useTransition) {
		}
		this._info_cont.appendChild(this._screentint);
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId="userdatabg";
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		this._userdatabg.className='ggskin ggskin_rectangle ';
		this._userdatabg.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 224px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 357px;';
		hs+='pointer-events:auto;';
		this._userdatabg.setAttribute('style',hs);
		this._userdatabg.style[domTransform + 'Origin']='50% 50%';
		me._userdatabg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdatabg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdatabg.ggUpdatePosition=function (useTransition) {
		}
		this._info_cont.appendChild(this._userdatabg);
		this._copyright=document.createElement('div');
		this._copyright__text=document.createElement('div');
		this._copyright.className='ggskin ggskin_textdiv';
		this._copyright.ggTextDiv=this._copyright__text;
		this._copyright.ggId="copyright";
		this._copyright.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._copyright.ggVisible=true;
		this._copyright.className='ggskin ggskin_text ';
		this._copyright.ggType='text';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 192px;';
		hs+='visibility : inherit;';
		hs+='width : 335px;';
		hs+='pointer-events:auto;';
		this._copyright.setAttribute('style',hs);
		this._copyright.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._copyright__text.setAttribute('style',hs);
		this._copyright.ggUpdateText=function() {
			var hs="&#169; "+me.ggUserdata.copyright;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._copyright.ggUpdateText();
		this._copyright.appendChild(this._copyright__text);
		me._copyright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._copyright.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._copyright.onclick=function (e) {
			me.player.openUrl("https:\/\/vk.com\/russian.photo.graf","Russian.Photo.Graf");
		}
		this._copyright.ggUpdatePosition=function (useTransition) {
		}
		this._info_cont.appendChild(this._copyright);
		this._datetime=document.createElement('div');
		this._datetime__text=document.createElement('div');
		this._datetime.className='ggskin ggskin_textdiv';
		this._datetime.ggTextDiv=this._datetime__text;
		this._datetime.ggId="datetime";
		this._datetime.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._datetime.ggVisible=true;
		this._datetime.className='ggskin ggskin_text ';
		this._datetime.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 335px;';
		hs+='pointer-events:auto;';
		this._datetime.setAttribute('style',hs);
		this._datetime.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._datetime__text.setAttribute('style',hs);
		this._datetime.ggUpdateText=function() {
			var hs=me.ggUserdata.datetime;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._datetime.ggUpdateText();
		this._datetime.appendChild(this._datetime__text);
		me._datetime.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._datetime.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._datetime.ggUpdatePosition=function (useTransition) {
		}
		this._info_cont.appendChild(this._datetime);
		this._description=document.createElement('div');
		this._description__text=document.createElement('div');
		this._description.className='ggskin ggskin_textdiv';
		this._description.ggTextDiv=this._description__text;
		this._description.ggId="description";
		this._description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._description.ggVisible=true;
		this._description.className='ggskin ggskin_text ';
		this._description.ggType='text';
		hs ='';
		hs+='height : 106px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 335px;';
		hs+='pointer-events:auto;';
		this._description.setAttribute('style',hs);
		this._description.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 335px;';
		hs+='height: 106px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._description__text.setAttribute('style',hs);
		this._description.ggUpdateText=function() {
			var hs=me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._description.ggUpdateText();
		this._description.appendChild(this._description__text);
		me._description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._description.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._description.ggUpdatePosition=function (useTransition) {
		}
		this._info_cont.appendChild(this._description);
		this._title=document.createElement('div');
		this._title__text=document.createElement('div');
		this._title.className='ggskin ggskin_textdiv';
		this._title.ggTextDiv=this._title__text;
		this._title.ggId="title";
		this._title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._title.ggVisible=true;
		this._title.className='ggskin ggskin_text ';
		this._title.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 335px;';
		hs+='pointer-events:auto;';
		this._title.setAttribute('style',hs);
		this._title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 335px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._title__text.setAttribute('style',hs);
		this._title.ggUpdateText=function() {
			var hs="<b>"+me.ggUserdata.title+"<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._title.ggUpdateText();
		this._title.appendChild(this._title__text);
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._title.ggUpdatePosition=function (useTransition) {
		}
		this._info_cont.appendChild(this._title);
		this._author=document.createElement('div');
		this._author__text=document.createElement('div');
		this._author.className='ggskin ggskin_textdiv';
		this._author.ggTextDiv=this._author__text;
		this._author.ggId="author";
		this._author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._author.ggVisible=true;
		this._author.className='ggskin ggskin_text ';
		this._author.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 56px;';
		hs+='visibility : inherit;';
		hs+='width : 335px;';
		hs+='pointer-events:auto;';
		this._author.setAttribute('style',hs);
		this._author.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 335px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._author__text.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			var hs="\u0410\u0432\u0442\u043e\u0440: "+me.ggUserdata.author;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._author.ggUpdateText();
		this._author.appendChild(this._author__text);
		me._author.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._author.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._author.ggUpdatePosition=function (useTransition) {
		}
		this._info_cont.appendChild(this._author);
		this._ht_info_close_1=document.createElement('div');
		this._ht_info_close_1__img=document.createElement('img');
		this._ht_info_close_1__img.className='ggskin ggskin_svg';
		this._ht_info_close_1__img.setAttribute('src',basePath + 'images/ht_info_close_1.svg');
		this._ht_info_close_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_info_close_1__img['ondragstart']=function() { return false; };
		this._ht_info_close_1.appendChild(this._ht_info_close_1__img);
		this._ht_info_close_1.ggId="ht_info_close_1";
		this._ht_info_close_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_info_close_1.ggVisible=true;
		this._ht_info_close_1.className='ggskin ggskin_svg ';
		this._ht_info_close_1.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 325px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		this._ht_info_close_1.setAttribute('style',hs);
		this._ht_info_close_1.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_info_close_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_info_close_1.onclick=function (e) {
			me._info_cont.style[domTransition]='none';
			me._info_cont.style.visibility='hidden';
			me._info_cont.ggVisible=false;
		}
		this._ht_info_close_1.onmouseover=function (e) {
			me.elementMouseOver['ht_info_close_1']=true;
		}
		this._ht_info_close_1.onmouseout=function (e) {
			me._ht_info_close_1.style[domTransition]='none';
			me._ht_info_close_1.ggParameter.sx=1;me._ht_info_close_1.ggParameter.sy=1;
			me._ht_info_close_1.style[domTransform]=parameterToTransform(me._ht_info_close_1.ggParameter);
			me.elementMouseOver['ht_info_close_1']=false;
		}
		this._ht_info_close_1.ontouchend=function (e) {
			me.elementMouseOver['ht_info_close_1']=false;
		}
		this._ht_info_close_1.ggUpdatePosition=function (useTransition) {
		}
		this._info_cont.appendChild(this._ht_info_close_1);
		this.divSkin.appendChild(this._info_cont);
		this._map_2.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		this._map_2.ggRadar.update=function() {
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var radar=me._map_2.ggRadar;
			var map=me._map_2.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = me.player.getFov();
			var pan = me.player.getPanNorth();
			var zoom = map.getZoom();
			var gps=me.player.getNodeLatLng();
			var filterpassed = true;
			var currentId = me.player.getCurrentNode();
			if (me._map_2.ggFilteredIds.length > 0 && me._map_2.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
				var rLat = 4.0*r2d / Math.pow(2,zoom);     // beam size
				var rLng = rLat/Math.cos(radar.activeNodeLatLng.lat() * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=5;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng();
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat();
					radar_path.push(new google.maps.LatLng(y, x));
				}
				if (radar.poly) {
					radar.poly.setMap(null);
					radar.poly = null;
				}
				radar.poly = new google.maps.Polygon({
					paths: radar_path,
					strokeColor: '#054a7e',
					strokeOpacity: 0.8,
					strokeWeight: 1,
					fillColor: '#054a7e',
					fillOpacity: 0.35
				});
				radar.poly.setMap(map);
			} else {
				if (radar) {
					activeNodeLatLng = new google.maps.LatLng(0,0);
					if (radar.poly) {
						radar.poly.setMap(null);
						radar.poly = null;
					}
				}
			}
		}
		this._map_2.ggMarkerArray=[];
		this._map_2.ggGoogleMarkerArray=[];
		this._map_2.ggInitMap=function() {
		me._map_2.ggMapNotLoaded = false;
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var gps=me.player.getNodeLatLng();
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(0,0);
			}
			var mapOptions = {
				zoom: 14,
				center: activeNodeLatLng,
				mapTypeId: google.maps.MapTypeId.HYBRID,
				streetViewControl: false
			};
			me._map_2.ggMap = new google.maps.Map(me._map_2, mapOptions);
		}
		this._map_2.ggClearMap=function() {
		me._map_2.ggMap = null;
		me._map_2.ggClearMapMarkers();
		me._map_2.ggMapNotLoaded = true;
		}
		this._map_2.ggClearMapMarkers=function() {
			for (i = 0; i < me._map_2.ggGoogleMarkerArray.length; i ++) {
				me._map_2.ggGoogleMarkerArray[i].setMap(null);
			}
			me._map_2.ggGoogleMarkerArray=[];
		}
		this._map_2.ggInitMapMarkers=function(updateMapBounds) {
			me._map_2.ggClearMapMarkers();
			var ids=me.player.getNodeIds();
			me._map_2.ggFilteredIds = [];
			if (me._map_2.ggFilter != '') {
				var filter = me._map_2.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_2.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_2.ggFilteredIds.length > 0) ids = me._map_2.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			var bounds=new google.maps.LatLngBounds();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps=me.player.getNodeLatLng(id);
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					marker = new google.maps.Marker({position: markerLocation,map: me._map_2.ggMap});
					marker.setTitle(me.player.getNodeTitle(id));
					marker.setAnimation(google.maps.Animation.DROP);
					marker.setClickable(true);
					marker.ggId=id;
					google.maps.event.addListener(marker, 'click', function() {
						me.player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					me._map_2.ggGoogleMarkerArray.push(marker);
					bounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !bounds.isEmpty() && updateMapBounds) {
				me._map_2.ggMap.fitBounds(bounds);
			}
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		this._map_1.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		this._map_1.ggRadar.update=function() {
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var radar=me._map_1.ggRadar;
			var map=me._map_1.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = me.player.getFov();
			var pan = me.player.getPanNorth();
			var zoom = map.getZoom();
			var gps=me.player.getNodeLatLng();
			var filterpassed = true;
			var currentId = me.player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
				var rLat = 4.0*r2d / Math.pow(2,zoom);     // beam size
				var rLng = rLat/Math.cos(radar.activeNodeLatLng.lat() * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=5;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng();
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat();
					radar_path.push(new google.maps.LatLng(y, x));
				}
				if (radar.poly) {
					radar.poly.setMap(null);
					radar.poly = null;
				}
				radar.poly = new google.maps.Polygon({
					paths: radar_path,
					strokeColor: '#054a7e',
					strokeOpacity: 0.8,
					strokeWeight: 1,
					fillColor: '#054a7e',
					fillOpacity: 0.35
				});
				radar.poly.setMap(map);
			} else {
				if (radar) {
					activeNodeLatLng = new google.maps.LatLng(0,0);
					if (radar.poly) {
						radar.poly.setMap(null);
						radar.poly = null;
					}
				}
			}
		}
		this._map_1.ggMarkerArray=[];
		this._map_1.ggGoogleMarkerArray=[];
		this._map_1.ggInitMap=function() {
		me._map_1.ggMapNotLoaded = false;
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var gps=me.player.getNodeLatLng();
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(0,0);
			}
			var mapOptions = {
				zoom: 14,
				center: activeNodeLatLng,
				mapTypeId: google.maps.MapTypeId.SATELLITE,
				streetViewControl: false
			};
			me._map_1.ggMap = new google.maps.Map(me._map_1, mapOptions);
		}
		this._map_1.ggClearMap=function() {
		me._map_1.ggMap = null;
		me._map_1.ggClearMapMarkers();
		me._map_1.ggMapNotLoaded = true;
		}
		this._map_1.ggClearMapMarkers=function() {
			for (i = 0; i < me._map_1.ggGoogleMarkerArray.length; i ++) {
				me._map_1.ggGoogleMarkerArray[i].setMap(null);
			}
			me._map_1.ggGoogleMarkerArray=[];
		}
		this._map_1.ggInitMapMarkers=function(updateMapBounds) {
			me._map_1.ggClearMapMarkers();
			var ids=me.player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			var bounds=new google.maps.LatLngBounds();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps=me.player.getNodeLatLng(id);
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					marker = new google.maps.Marker({position: markerLocation,map: me._map_1.ggMap});
					marker.setTitle(me.player.getNodeTitle(id));
					marker.setAnimation(google.maps.Animation.DROP);
					marker.setClickable(true);
					marker.ggId=id;
					google.maps.event.addListener(marker, 'click', function() {
						me.player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					me._map_1.ggGoogleMarkerArray.push(marker);
					bounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !bounds.isEmpty() && updateMapBounds) {
				me._map_1.ggMap.fitBounds(bounds);
			}
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
			me._map_2.ggInitMap();
			me._map_2.ggInitMapMarkers(true);
			me._map_1.ggInitMap();
			me._map_1.ggInitMapMarkers(true);
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
			me._fullscreen_off.style[domTransition]='none';
			me._fullscreen_off.style.visibility=(Number(me._fullscreen_off.style.opacity)>0||!me._fullscreen_off.style.opacity)?'inherit':'hidden';
			me._fullscreen_off.ggVisible=true;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility='hidden';
			me._fullscreen.ggVisible=false;
		}
		this.divSkin.ggExitFullscreen=function() {
			me._fullscreen_off.style[domTransition]='none';
			me._fullscreen_off.style.visibility='hidden';
			me._fullscreen_off.ggVisible=false;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
			me._fullscreen.ggVisible=true;
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._map_2.ggNodeChange();
		me._map_1.ggNodeChange();
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._loadingtext.ggUpdateText();
		if (me.elementMouseOver['fullscreen_off']) {
			me._fullscreen_off.style[domTransition]='none';
			me._fullscreen_off.ggParameter.sx=1.15;me._fullscreen_off.ggParameter.sy=1.15;
			me._fullscreen_off.style[domTransform]=parameterToTransform(me._fullscreen_off.ggParameter);
		}
		if (me.elementMouseOver['fullscreen']) {
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.ggParameter.sx=1.15;me._fullscreen.ggParameter.sy=1.15;
			me._fullscreen.style[domTransform]=parameterToTransform(me._fullscreen.ggParameter);
		}
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		me._map_2.ggUpdateConditionTimer();
		if (me.elementMouseOver['_']) {
			if (me.player.transitionsDisabled) {
				me.__.style[domTransition]='none';
			} else {
				me.__.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__.style.opacity='1';
			me.__.style.visibility=me.__.ggVisible?'inherit':'hidden';
		}
		me._map_1.ggUpdateConditionTimer();
		me._copyright.ggUpdateText();
		me._datetime.ggUpdateText();
		me._description.ggUpdateText();
		me._title.ggUpdateText();
		me._author.ggUpdateText();
		if (me.elementMouseOver['ht_info_close_1']) {
			me._ht_info_close_1.style[domTransition]='none';
			me._ht_info_close_1.ggParameter.sx=1.15;me._ht_info_close_1.ggParameter.sy=1.15;
			me._ht_info_close_1.style[domTransform]=parameterToTransform(me._ht_info_close_1.ggParameter);
		}
	};
	this.addSkin();
};