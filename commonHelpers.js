import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as h}from"./assets/vendor-77e16229.js";const p="/goit-js-hw-10/assets/caution-4e670f25.svg",c=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]"),y=document.querySelector("span[data-days]"),S=document.querySelector("span[data-hours]"),b=document.querySelector("span[data-minutes]"),g=document.querySelector("span[data-seconds]");let u;e.disabled=!0;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const o=new Date;t[0]>o?(e.disabled=!1,u=t[0]):(h.warning({title:"Caution",titleColor:"white",titleSize:"16px",message:"Please choose a date in the future",messageColor:"white",messageSize:"16px",position:"topRight",backgroundColor:"#ffa000",iconUrl:p,close:!1,closeOnClick:!0}),e.disabled=!0)}};m(c,C);e.addEventListener("click",v);function w(t){const a=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:r,minutes:l,seconds:f}}function n(t){return t.toString().padStart(2,"0")}function v(){c.disabled=!0,e.disabled=!0;const t=setInterval(()=>{const o=Date.now(),s=u-o;s===0&&(clearInterval(t),c.disabled=!1,e.disabled=!1);const{days:i,hours:d,minutes:a,seconds:r}=w(s);y.textContent=n(i),S.textContent=n(d),b.textContent=n(a),g.textContent=n(r)},1e3)}
//# sourceMappingURL=commonHelpers.js.map
