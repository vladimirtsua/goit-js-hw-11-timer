(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,e,a){"use strict";a.r(e);a("VA1H")},VA1H:function(t,e){class a{constructor({selector:t,targetDate:e,name:a}){this.selector=t,this.targetDate=e,this.name=a,this.currentDate,this.deltaTime,this.currentDate}insertName(){const t=document.querySelector(this.selector),e=document.createElement("p");e.textContent=`До Дня Рождения ${this.name} осталось:`,t.before(e),this.getIdDate()}getIdDate(){this.targetDate=new Date(this.targetDate).getTime(),this.getTimer()}getTimer(){setInterval(()=>{this.currentDate=Date.now(),this.deltaTime=this.targetDate-this.currentDate,this.timing(this.deltaTime)},1e3)}timing(){const t=document.querySelector(this.selector+' [data-value="days"]'),e=document.querySelector(this.selector+' [data-value="hours"]'),a=document.querySelector(this.selector+' [data-value="mins"]'),r=document.querySelector(this.selector+' [data-value="secs"]'),s=Math.floor(this.deltaTime/864e5);t.textContent=""+s;const i=this.pad(Math.floor(this.deltaTime%864e5/36e5));e.textContent=""+i;const n=this.pad(Math.floor(this.deltaTime%36e5/6e4));a.textContent=""+n;const o=this.pad(Math.floor(this.deltaTime%6e4/1e3));r.textContent=""+o}pad(t){return String(t).padStart(2,"0")}}new a({selector:"#timer-1",targetDate:new Date("Jan 24, 2022"),name:"Vladimir"}).insertName();new a({selector:"#timer-2",targetDate:new Date("May 24, 2021"),name:"Ed"}).insertName();new a({selector:"#timer-3",targetDate:new Date("Feb 21, 2021"),name:"Bo"}).insertName()}},[["QfWi",1]]]);
//# sourceMappingURL=main.3cb3e5417a7be4b2501e.js.map