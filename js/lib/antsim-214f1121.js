!function(){var t,i;i=this.antsimulator,t={SCALE:4,NUM_ANTS:1e3,STEPS_PER_FRAME:1,ANT_TURN_SPEED:.7,SHOW_ANTS:1,JITTER_MAGNITUDE:.5,NEST_FALLOFF_RATE:.01,FOOD_TRAIL_FALLOFF_RATE:.01,NEST_TRAIL_FADE_RATE:.01,FOOD_TRAIL_FADE_RATE:.005},i.AntSim=function(){function e(){this.CONFIG=t,this.frame=0,this.layerScale=this.CONFIG.SCALE,this.createCanvas(),this.createLayers(),this.ants=[],this.update()}return e.prototype.createCanvas=function(){return this.b=document.body,this.c=document.getElementsByTagName("canvas")[0],this.a=this.c.getContext("2d"),this.w=this.c.width=this.c.clientWidth,this.h=this.c.height=this.c.clientHeight,document.body.clientWidth},e.prototype.createLayers=function(){return this.layers={},this.layers.nesttrail=new i.NestTrail(this),this.layers.foodtrail=new i.FoodTrail(this),this.layers.food=new i.Food(this),this.compositor=new i.LayerCompositor(this)},e.prototype.createAndRemoveAnts=function(){for(;this.ants.length<this.CONFIG.NUM_ANTS;)this.ants.push(new i.Ant(this,new i.Vec(this.w/2,this.h)));return this.ants.length>this.CONFIG.NUM_ANTS?this.ants=this.ants.slice(0,this.CONFIG.NUM_ANTS):void 0},e.prototype.drawLayers=function(){return this.a.putImageData(this.compositor.getImageData(this.layers),0,0),this.a.drawImage(this.c,0,0,this.layerScale*this.w,this.layerScale*this.h)},e.prototype.update=function(){var t,i,e,s,a,n,h,r,o,c;for(this.createAndRemoveAnts(),i=a=0,r=this.CONFIG.STEPS_PER_FRAME;r>=0?r>a:a>r;i=r>=0?++a:--a){o=this.layers;for(e in o)s=o[e],s.update();for(c=this.ants,n=0,h=c.length;h>n;n++)t=c[n],t.update()}return this.draw(),this.frame++},e.prototype.draw=function(){var t,i,e,s,a,n=this;for(this.a.clearRect(0,0,this.w,this.h),this.drawLayers(),a=this.ants,i=0,e=a.length;e>i;i++)t=a[i],parseInt(this.CONFIG.SHOW_ANTS)&&t.draw(this.a);return s=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame,s(function(){return n.update()})},e}()}.call(this);