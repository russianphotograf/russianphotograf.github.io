// Garden Gnome Software - Skin
// Pano2VR 5.0/12110
// Filename: simplex_v33_autohide.ggsk
// Generated Пт мар 31 18:32:15 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
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
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._hide_template_timers=document.createElement('div');
		this._hide_template_timers.ggId="hide_template_timers";
		this._hide_template_timers.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_template_timers.ggVisible=false;
		this._hide_template_timers.className='ggskin ggskin_container ';
		this._hide_template_timers.ggType='container';
		hs ='';
		hs+='height : 59px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 171px;';
		this._hide_template_timers.setAttribute('style',hs);
		this._hide_template_timers.style[domTransform + 'Origin']='50% 50%';
		me._hide_template_timers.ggIsActive=function() {
			return false;
		}
		me._hide_template_timers.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._hide_template_timers.ggUpdatePosition=function () {
		}
		this._markertemplate=document.createElement('div');
		this._markertemplate.ggMarkerNodeId='';
		nodeMarker.push(this._markertemplate);
		this._markertemplate.ggId="markertemplate";
		this._markertemplate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._markertemplate.ggVisible=true;
		this._markertemplate.className='ggskin ggskin_mark ';
		this._markertemplate.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._markertemplate.setAttribute('style',hs);
		this._markertemplate.style[domTransform + 'Origin']='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._markertemplate.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._markertemplate.onmouseover=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='inherit';
			me._marker_title.ggVisible=true;
		}
		this._markertemplate.onmouseout=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='hidden';
			me._marker_title.ggVisible=false;
		}
		this._markertemplate.ggUpdateConditionNodeChange=function () {
				me._markertemplate__normal.ggNodeChangeMain();
				me._markertemplate__active.ggNodeChangeMain();
		}
		this._markertemplate.ggUpdatePosition=function () {
		}
		this._markertemplate.ggNodeChange=function () {
			me._markertemplate.ggUpdateConditionNodeChange();
		}
		this._marker_title=document.createElement('div');
		this._marker_title__text=document.createElement('div');
		this._marker_title.className='ggskin ggskin_textdiv';
		this._marker_title.ggTextDiv=this._marker_title__text;
		this._marker_title.ggId="marker_title";
		this._marker_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title.ggVisible=false;
		this._marker_title.className='ggskin ggskin_text ';
		this._marker_title.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title.setAttribute('style',hs);
		this._marker_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title__text.setAttribute('style',hs);
		this._marker_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title.ggUpdateText();
		this._marker_title.appendChild(this._marker_title__text);
		me._marker_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._markertemplate.appendChild(this._marker_title);
		this._hide_template_timers.appendChild(this._markertemplate);
		this._controller_hide_timer=document.createElement('div');
		this._controller_hide_timer.ggTimestamp=this.ggCurrentTime;
		this._controller_hide_timer.ggLastIsActive=true;
		this._controller_hide_timer.ggTimeout=5000;
		this._controller_hide_timer.ggId="controller_hide_timer";
		this._controller_hide_timer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller_hide_timer.ggVisible=true;
		this._controller_hide_timer.className='ggskin ggskin_timer ';
		this._controller_hide_timer.ggType='timer';
		hs ='';
		hs+='height : 43px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 76px;';
		this._controller_hide_timer.setAttribute('style',hs);
		this._controller_hide_timer.style[domTransform + 'Origin']='50% 50%';
		me._controller_hide_timer.ggIsActive=function() {
			return (me._controller_hide_timer.ggTimestamp + me._controller_hide_timer.ggTimeout) >= me.ggCurrentTime;
		}
		me._controller_hide_timer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._controller_hide_timer.ggUpdatePosition=function () {
		}
		this._hide_template_timers.appendChild(this._controller_hide_timer);
		this.divSkin.appendChild(this._hide_template_timers);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggLeft=-105;
		this._loading.ggTop=-30;
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container ';
		this._loading.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		this._loading.setAttribute('style',hs);
		this._loading.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		me._loading.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loading.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text ';
		this._loadingtext.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
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
			var hs="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
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
		this._loadingtext.ggUpdatePosition=function () {
		}
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle ';
		this._loadingbar.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #808080;';
		hs+='height : 12px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		this._loadingbar.setAttribute('style',hs);
		this._loadingbar.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbar.ggUpdatePosition=function () {
		}
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._screentint=document.createElement('div');
		this._screentint.ggId="screentint";
		this._screentint.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screentint.ggVisible=false;
		this._screentint.className='ggskin ggskin_rectangle ';
		this._screentint.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 1px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		this._screentint.setAttribute('style',hs);
		this._screentint.style[domTransform + 'Origin']='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		me._screentint.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._screentint.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._screentint);
		this._userdata=document.createElement('div');
		this._userdata.ggId="userdata";
		this._userdata.ggLeft=-120;
		this._userdata.ggTop=-80;
		this._userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata.ggVisible=false;
		this._userdata.className='ggskin ggskin_container ';
		this._userdata.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 140px;';
		hs+='left : -120px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		this._userdata.setAttribute('style',hs);
		this._userdata.style[domTransform + 'Origin']='50% 50%';
		me._userdata.ggIsActive=function() {
			return false;
		}
		me._userdata.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._userdata.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId="userdatabg";
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		this._userdatabg.className='ggskin ggskin_rectangle ';
		this._userdatabg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='height : 138px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 238px;';
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
		this._userdatabg.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._userdatabg);
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
		hs+='width : 218px;';
		this._title.setAttribute('style',hs);
		this._title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
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
		this._title.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._title);
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
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._description.setAttribute('style',hs);
		this._description.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
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
		this._description.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._description);
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
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._author.setAttribute('style',hs);
		this._author.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._author__text.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			var hs=me.ggUserdata.author;
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
		this._author.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._author);
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
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._datetime.setAttribute('style',hs);
		this._datetime.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
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
		this._datetime.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._datetime);
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
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._copyright.setAttribute('style',hs);
		this._copyright.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
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
		this._copyright.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._copyright);
		this._userdata_close=document.createElement('div');
		this._userdata_close__img=document.createElement('img');
		this._userdata_close__img.className='ggskin ggskin_svg';
		this._userdata_close__img.setAttribute('src',basePath + 'images/userdata_close.svg');
		this._userdata_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._userdata_close__img['ondragstart']=function() { return false; };
		this._userdata_close.appendChild(this._userdata_close__img);
		this._userdata_close__imgo=document.createElement('img');
		this._userdata_close__imgo.className='ggskin ggskin_svg';
		this._userdata_close__imgo.setAttribute('src',basePath + 'images/userdata_close__o.svg');
		this._userdata_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._userdata_close__imgo['ondragstart']=function() { return false; };
		this._userdata_close.appendChild(this._userdata_close__imgo);
		this._userdata_close.ggId="userdata_close";
		this._userdata_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata_close.ggVisible=true;
		this._userdata_close.className='ggskin ggskin_svg ';
		this._userdata_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 207px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._userdata_close.setAttribute('style',hs);
		this._userdata_close.style[domTransform + 'Origin']='50% 50%';
		me._userdata_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdata_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdata_close.onclick=function () {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
		}
		this._userdata_close.onmouseover=function () {
			me._userdata_close__img.style.visibility='hidden';
			me._userdata_close__imgo.style.visibility='inherit';
		}
		this._userdata_close.onmouseout=function () {
			me._userdata_close__img.style.visibility='inherit';
			me._userdata_close__imgo.style.visibility='hidden';
		}
		this._userdata_close.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._userdata_close);
		this.divSkin.appendChild(this._userdata);
		this._information=document.createElement('div');
		this._information.ggId="information";
		this._information.ggLeft=-148;
		this._information.ggTop=-150;
		this._information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._information.ggVisible=false;
		this._information.className='ggskin ggskin_container ';
		this._information.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -148px;';
		hs+='position : absolute;';
		hs+='top : -150px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		this._information.setAttribute('style',hs);
		this._information.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		me._information.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._information.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._informationbg=document.createElement('div');
		this._informationbg.ggId="informationbg";
		this._informationbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._informationbg.ggVisible=true;
		this._informationbg.className='ggskin ggskin_rectangle ';
		this._informationbg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 2px solid #ffffff;';
		hs+='height : 248px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 298px;';
		this._informationbg.setAttribute('style',hs);
		this._informationbg.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._informationbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._informationbg.ggUpdatePosition=function () {
		}
		this._information.appendChild(this._informationbg);
		this._info_text_body=document.createElement('div');
		this._info_text_body__text=document.createElement('div');
		this._info_text_body.className='ggskin ggskin_textdiv';
		this._info_text_body.ggTextDiv=this._info_text_body__text;
		this._info_text_body.ggId="info_text_body";
		this._info_text_body.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_text_body.ggVisible=true;
		this._info_text_body.className='ggskin ggskin_text ';
		this._info_text_body.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 274px;';
		this._info_text_body.setAttribute('style',hs);
		this._info_text_body.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 274px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._info_text_body__text.setAttribute('style',hs);
		this._info_text_body__text.innerHTML="";
		this._info_text_body.appendChild(this._info_text_body__text);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_text_body.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_text_body.ggUpdatePosition=function () {
		}
		this._information.appendChild(this._info_text_body);
		this._info_title=document.createElement('div');
		this._info_title__text=document.createElement('div');
		this._info_title.className='ggskin ggskin_textdiv';
		this._info_title.ggTextDiv=this._info_title__text;
		this._info_title.ggId="info_title";
		this._info_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_title.ggVisible=true;
		this._info_title.className='ggskin ggskin_text ';
		this._info_title.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 103px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 99px;';
		this._info_title.setAttribute('style',hs);
		this._info_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 99px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._info_title__text.setAttribute('style',hs);
		this._info_title__text.innerHTML="";
		this._info_title.appendChild(this._info_title__text);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_title.ggUpdatePosition=function () {
		}
		this._information.appendChild(this._info_title);
		this._ht_info_close=document.createElement('div');
		this._ht_info_close__img=document.createElement('img');
		this._ht_info_close__img.className='ggskin ggskin_svg';
		this._ht_info_close__img.setAttribute('src',basePath + 'images/ht_info_close.svg');
		this._ht_info_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_info_close__img['ondragstart']=function() { return false; };
		this._ht_info_close.appendChild(this._ht_info_close__img);
		this._ht_info_close__imgo=document.createElement('img');
		this._ht_info_close__imgo.className='ggskin ggskin_svg';
		this._ht_info_close__imgo.setAttribute('src',basePath + 'images/ht_info_close__o.svg');
		this._ht_info_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_info_close__imgo['ondragstart']=function() { return false; };
		this._ht_info_close.appendChild(this._ht_info_close__imgo);
		this._ht_info_close.ggId="ht_info_close";
		this._ht_info_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_info_close.ggVisible=true;
		this._ht_info_close.className='ggskin ggskin_svg ';
		this._ht_info_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 263px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._ht_info_close.setAttribute('style',hs);
		this._ht_info_close.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_info_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_info_close.onclick=function () {
			me._information.style[domTransition]='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
		}
		this._ht_info_close.onmouseover=function () {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		this._ht_info_close.onmouseout=function () {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		this._ht_info_close.ggUpdatePosition=function () {
		}
		this._information.appendChild(this._ht_info_close);
		this.divSkin.appendChild(this._information);
		this._image_popup=document.createElement('div');
		this._image_popup.ggId="image_popup";
		this._image_popup.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_popup.ggVisible=false;
		this._image_popup.className='ggskin ggskin_container ';
		this._image_popup.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		this._image_popup.setAttribute('style',hs);
		this._image_popup.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		me._image_popup.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_popup.onclick=function () {
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.ggText="";
			me._popup_image__img.src=me._popup_image.ggText;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
		}
		this._image_popup.ggUpdatePosition=function () {
		}
		this._loading_image=document.createElement('div');
		this._loading_image__img=document.createElement('img');
		this._loading_image__img.className='ggskin ggskin_svg';
		this._loading_image__img.setAttribute('src',basePath + 'images/loading_image.svg');
		this._loading_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_image__img['ondragstart']=function() { return false; };
		this._loading_image.appendChild(this._loading_image__img);
		this._loading_image.ggId="loading_image";
		this._loading_image.ggLeft=-20;
		this._loading_image.ggTop=-20;
		this._loading_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_image.ggVisible=true;
		this._loading_image.className='ggskin ggskin_svg ';
		this._loading_image.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		this._loading_image.setAttribute('style',hs);
		this._loading_image.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_image.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._image_popup.appendChild(this._loading_image);
		this._popup_image=document.createElement('div');
		this._popup_image__img=document.createElement('img');
		this._popup_image__img.className='ggskin ggskin_external';
		this._popup_image__img.onload=function() {me._popup_image.ggUpdatePosition();}
		this._popup_image__img.setAttribute('src',basePath + '');
		this._popup_image__img['ondragstart']=function() { return false; };
		hs ='';
		this._popup_image.appendChild(this._popup_image__img);
		this._popup_image.ggId="popup_image";
		this._popup_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_image.ggVisible=true;
		this._popup_image.className='ggskin ggskin_external ';
		this._popup_image.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		this._popup_image.setAttribute('style',hs);
		this._popup_image.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._popup_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._popup_image.ggUpdatePosition=function () {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = me._popup_image__img.naturalWidth / me._popup_image__img.naturalHeight;
			if (me._popup_image__img.naturalWidth < parentWidth) parentWidth = me._popup_image__img.naturalWidth;
			if (me._popup_image__img.naturalHeight < parentHeight) parentHeight = me._popup_image__img.naturalHeight;
			var currentWidth = me._popup_image__img.naturalWidth;
			var currentHeight = me._popup_image__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;');
			};
		}
		this._image_popup.appendChild(this._popup_image);
		this.divSkin.appendChild(this._image_popup);
		this._markertemplate__normal=new SkinElement_marker_normal_Class(this,this._markertemplate);
		this._markertemplate__normal.style.visibility='inherit';
		this._markertemplate__normal.style.left='0px';
		this._markertemplate__normal.style.top='0px';
		this._markertemplate.ggMarkerNormal=this._markertemplate__normal;
		this._markertemplate__active=new SkinElement_marker_active_Class(this,this._markertemplate);
		this._markertemplate__active.style.visibility='hidden';
		this._markertemplate__active.style.left='0px';
		this._markertemplate__active.style.top='0px';
		this._markertemplate.ggMarkerActive=this._markertemplate__active;
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__active,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__active);
		}
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__normal,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__normal);
		}
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='inherit';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
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
		me._markertemplate.ggNodeChange();
		var newMarker=[];
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._marker_title.ggUpdateText();
		me._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		me._title.ggUpdateText();
		me._description.ggUpdateText();
		me._author.ggUpdateText();
		me._datetime.ggUpdateText();
		me._copyright.ggUpdateText();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='ht_url') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_url";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 576px;';
			hs+='position : absolute;';
			hs+='top : 25px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._hsimage_url=document.createElement('div');
			this._hsimage_url__img=document.createElement('img');
			this._hsimage_url__img.className='ggskin ggskin_svg';
			this._hsimage_url__img.setAttribute('src',basePath + 'images/hsimage_url.svg');
			this._hsimage_url__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hsimage_url__img['ondragstart']=function() { return false; };
			this._hsimage_url.appendChild(this._hsimage_url__img);
			this._hsimage_url.ggId="hsimage_url";
			this._hsimage_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage_url.ggVisible=true;
			this._hsimage_url.className='ggskin ggskin_svg ';
			this._hsimage_url.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 20px;';
			hs+='left : -10px;';
			hs+='position : absolute;';
			hs+='top : -10px;';
			hs+='visibility : inherit;';
			hs+='width : 20px;';
			this._hsimage_url.setAttribute('style',hs);
			this._hsimage_url.style[domTransform + 'Origin']='50% 50%';
			me._hsimage_url.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hsimage_url.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hsimage_url.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._hsimage_url);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_info";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 549px;';
			hs+='position : absolute;';
			hs+='top : 25px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				var flag=(me.skin._information.style.visibility=='hidden');
				me.skin._information.style[domTransition]='none';
				me.skin._information.style.visibility=flag?'inherit':'hidden';
				me.skin._information.ggVisible=flag;
				me.skin._info_title.ggText="<b>"+me.hotspot.title+"<\/b>";
				me.skin._info_title__text.innerHTML=me.skin._info_title.ggText;
				if (me.skin._info_title.ggUpdateText) {
					me.skin._info_title.ggUpdateText=function() {
						var hs="<b>"+me.hotspot.title+"<\/b>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				me.skin._info_text_body.ggText=me.hotspot.description;
				me.skin._info_text_body__text.innerHTML=me.skin._info_text_body.ggText;
				if (me.skin._info_text_body.ggUpdateText) {
					me.skin._info_text_body.ggUpdateText=function() {
						var hs=me.hotspot.description;
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility='inherit';
				me.skin._screentint.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_info_image=document.createElement('div');
			this._ht_info_image__img=document.createElement('img');
			this._ht_info_image__img.className='ggskin ggskin_svg';
			this._ht_info_image__img.setAttribute('src',basePath + 'images/ht_info_image.svg');
			this._ht_info_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_info_image__img['ondragstart']=function() { return false; };
			this._ht_info_image.appendChild(this._ht_info_image__img);
			this._ht_info_image.ggId="ht_info_image";
			this._ht_info_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_info_image.ggVisible=true;
			this._ht_info_image.className='ggskin ggskin_svg ';
			this._ht_info_image.ggType='svg';
			hs ='';
			hs+='height : 20px;';
			hs+='left : -10px;';
			hs+='position : absolute;';
			hs+='top : -10px;';
			hs+='visibility : inherit;';
			hs+='width : 20px;';
			this._ht_info_image.setAttribute('style',hs);
			this._ht_info_image.style[domTransform + 'Origin']='50% 50%';
			me._ht_info_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_info_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_info_image.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._ht_info_image);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinElement_marker_normal_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._marker_normal=document.createElement('div');
		this._marker_normal__img=document.createElement('img');
		this._marker_normal__img.className='ggskin ggskin_svg';
		this._marker_normal__img.setAttribute('src',basePath + 'images/marker_normal.svg');
		this._marker_normal__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._marker_normal__img['ondragstart']=function() { return false; };
		this._marker_normal.appendChild(this._marker_normal__img);
		this._marker_normal.ggId="marker_normal";
		this._marker_normal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_normal.ggVisible=true;
		this._marker_normal.className='ggskin ggskin_svg ';
		this._marker_normal.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		this._marker_normal.setAttribute('style',hs);
		this._marker_normal.style[domTransform + 'Origin']='50% 50%';
		me._marker_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_normal.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._marker_normal.ggUpdatePosition=function () {
		}
		this._marker_normal.ggNodeChangeMain=function() {
		}
		return this._marker_normal;
	};
	function SkinElement_marker_active_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._marker_active=document.createElement('div');
		this._marker_active__img=document.createElement('img');
		this._marker_active__img.className='ggskin ggskin_svg';
		this._marker_active__img.setAttribute('src',basePath + 'images/marker_active.svg');
		this._marker_active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._marker_active__img['ondragstart']=function() { return false; };
		this._marker_active.appendChild(this._marker_active__img);
		this._marker_active.ggId="marker_active";
		this._marker_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_active.ggVisible=true;
		this._marker_active.className='ggskin ggskin_svg ';
		this._marker_active.ggType='svg';
		hs ='';
		hs+='height : 31px;';
		hs+='left : 105px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		this._marker_active.setAttribute('style',hs);
		this._marker_active.style[domTransform + 'Origin']='50% 50%';
		me._marker_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._marker_active.ggUpdatePosition=function () {
		}
		this._marker_active.ggNodeChangeMain=function() {
		}
		return this._marker_active;
	};
	this.addSkin();
};