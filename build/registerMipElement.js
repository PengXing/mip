define("registerMipElement",["require","utils/cssLoader"],function(e){function t(t,r,c){if(!a[t]){c&&n.insertStyleElement(document,document.head,c,t,!1),a[t]=1;var l=Object.create(HTMLElement.prototype);return"string"==typeof r?void e([r],function(e){r=e,i(l,r,t)}):void i(l,r,t)}}function i(e,t,i){var n=new t;$.extend(!0,e,n),e.createdCallback=function(){this.classList.add("mip-element"),this.mipCreatedCallback()},e.attachedCallback=function(){this.mipAttachedCallback()},e.detachedCallback=function(){this.mipDetachedCallback()},e.attributeChangedCallback=function(){this.mipAttributeChangedCallback()},e.isInviewer=function(){var e=$(this).offset().top,t=$(window).height(),i=pageYOffset;return window.parent!==window&&platform.needSpecialScroll?t>=e:e-i>t?!1:!0},document.registerElement(i,{prototype:e})}if(MIP.registerMipElement)return MIP.registerMipElement;var n=e("utils/cssLoader"),a={};return MIP.registerMipElement=t,t});