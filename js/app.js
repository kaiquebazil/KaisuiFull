// ════════════════════════════════════════
// Aplicativo KAISUI com rotina pessoal
// ════════════════════════════════════════

const SK = "kaisui_detailed_v1";

const RANKS = [
  { min: 0, name: "O Temeroso" },
  { min: 1, name: "O Aprendiz" },
  { min: 10, name: "O Nômade" },
  { min: 25, name: "Engenheiro de Alto Nível" },
  { min: 50, name: "Corredor das Sombras" },
  { min: 100, name: "Lenda KAISUI" },
];

const DAILY_TASKS = [
  { id: "pt1", name: "Acordar às 5h30", xp: 200, stat: "dis", icon: "⏰" },
  { id: "pt2", name: "Arrumar a cama e colocar a moto para fora", xp: 100, stat: "dis", icon: "🛏️" },
  { id: "pt3", name: "Atingir pelo menos R$ 200 no trabalho", xp: 250, stat: "dis", icon: "💰" },
  { id: "pt4", name: "Separar R$ 50 para a moto", xp: 100, stat: "dis", icon: "🏍️" },
  { id: "pt5", name: "Fazer o treino do dia", xp: 250, stat: "for", icon: "🏋️" },
  { id: "pt6", name: "Estudar inglês", xp: 150, stat: "int", icon: "🎧" },
  { id: "pt7", name: "Registrar a quilometragem da moto", xp: 80, stat: "dis", icon: "🛣️" },
  { id: "pt8", name: "Acompanhar as contas e os gastos", xp: 100, stat: "dis", icon: "📊" },
  { id: "pt9", name: "Assistir a um vídeo em inglês", xp: 100, stat: "int", icon: "📺" },
  { id: "pt10", name: "Dormir às 22h", xp: 150, stat: "dis", icon: "🌙" },
];

const BAD_HABITS = [
  { id: "b1", name: "Redes sociais por mais de 1h", xpL: 200, hpL: 20 },
  { id: "b2", name: "Acordar depois das 08:00", xpL: 300, hpL: 30 },
  { id: "b3", name: "Pular o treino", xpL: 250, hpL: 25 },
  { id: "b4", name: "Comida pouco saudável", xpL: 150, hpL: 15 },
  { id: "b5", name: "Pornografia", xpL: 500, hpL: 50 },
  { id: "b6", name: "Álcool", xpL: 400, hpL: 40 },
  { id: "b7", name: "Procrastinar", xpL: 300, hpL: 30 },
];

const HANDSTAND_PROGRESSIONS = [
  { id: "w1", name: "Supino — 3 séries de 5 a 15 repetições", xp: 50 },
  { id: "w2", name: "Mergulho nas paralelas — 3 séries de 5 a 15 repetições", xp: 50 },
  { id: "w3", name: "Barra fixa — 3 séries de 5 a 15 repetições", xp: 50 },
  { id: "w4", name: "Remada com triângulo — 3 séries de 5 a 15 repetições", xp: 50 },
  { id: "w5", name: "Agachamento — 3 séries de 5 a 15 repetições", xp: 50 },
  { id: "w6", name: "Stiff — 3 séries de 5 a 15 repetições", xp: 50 },
  { id: "w7", name: "Core — L-sit ou progressão", xp: 50 },
];

// Rotina pessoal
const ROUTINE_STEPS = [
  { id: "p001", time: "05:30", text: "Acordar", detail: "Começar o dia às 5h30." },
  { id: "p002", time: "05:35", text: "Arrumar a cama", detail: "" },
  { id: "p003", time: "05:40", text: "Colocar a moto para fora", detail: "" },
  { id: "p004", time: "05:45", text: "Tomar café da manhã", detail: "" },
  { id: "p005", time: "05:50", text: "Se arrumar", detail: "" },
  { id: "p006", time: "06:00", text: "Ir trabalhar", detail: "Escutar inglês no caminho." },
  { id: "p007", time: "06:00", text: "Meta de trabalho: mínimo de R$ 200; esperado: R$ 250", detail: "Acompanhar o valor feito durante o dia." },
  { id: "p008", time: "06:00", text: "Separar R$ 50 por dia para a moto", detail: "" },
  { id: "p009", time: "06:00", text: "Não voltar antes da hora sem atingir a meta do dia", detail: "" },
  { id: "p010", time: "11:00", text: "Esquentar a comida, arrumar o espaço e almoçar", detail: "Pausa para almoço das 11h às 12h." },
  { id: "p011", time: "11:30", text: "Assistir a algo durante o horário de almoço", detail: "" },
  { id: "p012", time: "15:00", text: "Ir para casa", detail: "Se ainda não atingiu a meta, ficar trabalhando mais um pouco." },
  { id: "p013", time: "15:00", text: "Guardar a moto ou levá-la para manutenção", detail: "" },
  { id: "p014", time: "16:00", text: "Ir treinar", detail: "" },
  { id: "p015", time: "17:30", text: "Estudar inglês", detail: "Assistir aos vídeos da lista de acompanhamento." },
  { id: "p016", time: "18:30", text: "Ir à igreja (terças e domingos, das 18h30 às 21h30)", detail: "" },
  { id: "p017", time: "22:00", text: "Dormir", detail: "" },
];
const routineStepsToday = () => typeof S!=="undefined" ? routineStepsForDate(vidaToday()) : ROUTINE_STEPS.filter(step => step.id !== "p016" || [0,2].includes(new Date().getDay()));
function dateKey(date=new Date()) { const d=new Date(date);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; }
function monthKey(date=new Date()) { return dateKey(date).slice(0,7); }
function vidaToday(){return dateKey();}
function vidaMoney(value){return Number(value||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});}
function vidaEsc(value){return String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function vidaSafeUrl(value){return /^https?:\/\//i.test(String(value||""))?vidaEsc(value):"";}
function vidaUid(){return Date.now()+Math.random();}
function vidaEntry(title,detail){return `<div class="v360-entry">${vidaEsc(title)}<small>${vidaEsc(detail)}</small></div>`;}

const initialVida360 = () => ({
  settings: { minGoal: 200, targetGoal: 250, reserve: 50, endTime: "17:00", saveFuture: 1000, saveHouse: 500 },
  bills: [["Celular",30],["Cartão",383.32],["Imposto CNPJ",87],["Aluguel",300],["Academia",80],["Seguro",150],["Alimentação",200]].map((x,i)=>({id:i+1,name:x[0],amount:x[1],dueDay:null,category:"Outros",recurring:true,active:true})),
  billMonths: {}, work: [], tx: [], training: [], exerciseCatalog: HANDSTAND_PROGRESSIONS.map((x,i)=>({id:x.id,name:x.name.replace(/ — 3 séries de 5 a 15 repetições/,""),sets:3,reps:"5–15",order:i})),
  routineItems: ROUTINE_STEPS.map((x,i)=>({id:x.id,time:x.time,text:x.text,detail:x.detail||"",days:x.id==="p016"?[0,2]:null,active:true,order:i})), routineDays:{},
  habitHistory:{}, habitMoney:{}, hand: [], english: [], videos: [], odometer: 0, fuel: [], maintenance: [], parts: [], project: [], reviews: []
});

function normalizeVida360(saved) {
  const base = initialVida360();
  const data = saved && typeof saved === "object" ? saved : {};
  const list = key => Array.isArray(data[key]) ? data[key] : [];
  const oldBills=Array.isArray(data.bills)?data.bills:base.bills;
  const bills=oldBills.map((b,i)=>({id:b.id??i+1,name:b.name||"Conta",amount:Number(b.amount)||0,dueDay:b.dueDay?Number(b.dueDay):null,category:b.category||"Outros",recurring:b.recurring!==false,active:b.active!==false,startMonth:b.startMonth||monthKey()}));
  const billMonths=data.billMonths&&typeof data.billMonths==="object"?data.billMonths:{};
  if (!billMonths[monthKey()] && Array.isArray(data.bills)) billMonths[monthKey()]=oldBills.map((b,i)=>({id:b.id??i+1,name:b.name||"Conta",amount:Number(b.amount)||0,dueDay:b.dueDay||null,category:b.category||"Outros",paid:!!b.paid}));
  const catalog=Array.isArray(data.exerciseCatalog)?data.exerciseCatalog:base.exerciseCatalog;
  const routineItems=Array.isArray(data.routineItems)?data.routineItems:base.routineItems;
  const routineDays=data.routineDays&&typeof data.routineDays==="object"?data.routineDays:{};
  const work=list("work").map(x=>{const uber=Number(x.uber??x.gross??0),app99=Number(x.app99??x.n99??0);return {...x,uber,app99,gross:uber+app99};});
  const training=list("training").map(t=>({...t,exercises:(t.exercises||[]).map((x,i)=>({...x,exerciseId:x.exerciseId??catalog[i]?.id,name:x.name||catalog[i]?.name||"Exercício"}))}));
  return { ...base, ...data, settings: { ...base.settings, ...(data.settings || {}) }, bills, billMonths, work, tx:list("tx"), training, exerciseCatalog:catalog,
    routineItems, routineDays, habitHistory:data.habitHistory&&typeof data.habitHistory==="object"?data.habitHistory:{}, habitMoney:data.habitMoney&&typeof data.habitMoney==="object"?data.habitMoney:{},
    tasks: data.tasks && typeof data.tasks === "object" ? data.tasks : {}, hand: list("hand"), english: list("english"), videos: list("videos"), fuel: list("fuel"), maintenance: list("maintenance"), parts: list("parts"), project: list("project"), reviews: list("reviews") };
}

function getLegacyVida360() { try { return JSON.parse(localStorage.getItem("vida360_data") || "null"); } catch { return null; } }
// ESTADO INICIAL
function defaultState() {
  return {
    xp: 0, hp: 100, maxHp: 100, coins: 100, xpToday: 0,
    stats: { for: 0, int: 0, dis: 0, cha: 0 },
    completedDaily: [],
    handstandProgress: [],
    handstandWorkoutStreak: 0,
    handstandLastWorkoutDate: null,
    lastDate: new Date().toDateString(),
    globalStreak: 0,
    globalMaxStreak: 0,
    lastStreakDate: null,
    routineChecklist: [],
    routineLastCompleted: null,
    vida360: initialVida360(),
  };
}

let S = (() => {
  try {
    const r = JSON.parse(localStorage.getItem(SK));
    if (!r) {
      const fresh = defaultState();
      fresh.vida360 = normalizeVida360(getLegacyVida360());
      return fresh;
    }
    const legacyVida360 = getLegacyVida360();
    r.vida360 = normalizeVida360(r.vida360 || legacyVida360);
    const today = new Date().toDateString();
    if (r.lastDate !== today) {
      r.completedDaily = [];
      r.xpToday = 0;
      r.lastDate = today;
      r.routineChecklist = [];
    }
    const todayKey=dateKey();
    if (!r.vida360.routineDays[todayKey] && r.routineChecklist?.length) r.vida360.routineDays[todayKey]=r.routineChecklist.slice();
    if (!r.vida360.habitHistory[todayKey] && r.completedDaily?.length) r.vida360.habitHistory[todayKey]={done:r.completedDaily.slice(),avoided:[],committed:[],rewards:{},penalties:{}};
    r.completedDaily = (r.completedDaily || []).filter(id => DAILY_TASKS.some(task => task.id === id));
    r.routineChecklist = (r.routineChecklist || []).filter(id => ROUTINE_STEPS.some(step => step.id === id));
    if (r.coins == null) r.coins = r.moedas ?? 100;
    delete r.moedas;
    if (!r.handstandProgress) r.handstandProgress = [];
    if (!r.handstandWorkoutStreak) r.handstandWorkoutStreak = 0;
    if (!r.handstandLastWorkoutDate) r.handstandLastWorkoutDate = null;
    if (!r.globalStreak) r.globalStreak = 0;
    if (!r.globalMaxStreak) r.globalMaxStreak = 0;
    if (!r.lastStreakDate) r.lastStreakDate = null;
    if (!r.routineChecklist) r.routineChecklist = [];
    if (!r.routineLastCompleted) r.routineLastCompleted = null;
    return r;
  } catch(e) { return defaultState(); }
})();

function save() { localStorage.setItem(SK, JSON.stringify(S)); }

// FUNÇÕES AUXILIARES
const lvl = () => Math.floor(S.xp / 1000);
const xpIn = () => S.xp % 1000;
const rank = () => { let l = lvl(); for (let i=RANKS.length-1; i>=0; i--) if (l >= RANKS[i].min) return RANKS[i]; return RANKS[0]; };
function getMultiplier() { if (S.globalStreak >= 7) return 1.25; if (S.globalStreak >= 3) return 1.1; return 1.0; }
function updateGlobalStreak() { const today = new Date().toDateString(); const yesterday = new Date(Date.now()-86400000).toDateString(); if (S.lastStreakDate === today) return; if (S.lastStreakDate === yesterday) S.globalStreak++; else S.globalStreak = 1; if (S.globalStreak > S.globalMaxStreak) S.globalMaxStreak = S.globalStreak; S.lastStreakDate = today; save(); }

function addXP(v, stat) {
  const prev = lvl();
  const mult = v > 0 ? getMultiplier() : 1;
  const finalV = v > 0 ? Math.floor(v * mult) : v;
  S.xp = Math.max(0, S.xp + finalV);
  if (v > 0) {
    S.xpToday += finalV;
    if (stat) S.stats[stat] = (S.stats[stat]||0) + Math.ceil(finalV/10);
  }
  save();
  const newMaxHp = 100 + Math.floor((S.stats.for||0)/100);
  if (newMaxHp > S.maxHp) { S.maxHp = newMaxHp; S.hp = Math.min(S.hp + (newMaxHp - S.maxHp), S.maxHp); }
  if (lvl() > prev) showLvlUp(lvl());
  updateAllUI();
  if (v > 0 && window.navigator.vibrate) window.navigator.vibrate(50);
}

function modHP(v) {
  S.hp = Math.max(0, Math.min(S.maxHp, S.hp + v));
  if (S.hp === 0) { const loss = Math.floor(xpIn() * 0.5); S.xp = Math.max(0, S.xp - loss); S.hp = S.maxHp; toast("⚠️ DERROTA — " + loss + " XP PERDIDO", "fail", 4000); }
  save(); updateAllUI();
}

function recoverHP() {
  if (S.coins < 50) { toast("❌ Você precisa de 50 moedas", "fail", 3000); return; }
  S.coins -= 50;
  modHP(20);
  toast("◈ +20 PV recuperados (50 moedas)", "ok");
}

// NAVEGAÇÃO
let cur = "home";
let workDate=vidaToday(), trainingDate=vidaToday(), routineDate=vidaToday(), financeMonth=monthKey(), showExerciseManager=false, trainingChartExercise="";
function goTo(name) {
  cur = name;
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => { b.classList.remove("active"); b.removeAttribute("aria-current"); });
  const sc = document.getElementById("screen-" + name);
  if (sc) sc.classList.add("active");
  const nb = document.getElementById("nav-" + name);
  if (nb) { nb.classList.add("active"); nb.setAttribute("aria-current", "page"); }
  renderScreen(name);
}

function openVidaTab(tab) { vidaTab = tab; goTo("vida360"); }

function renderScreen(n) {
  if (n === "home") renderHome();
  if (n === "habits") renderHabits();
  if (n === "training") renderTraining();
  if (n === "work") renderWork();
  if (n === "finances") renderFinances();
  if (n === "profile") renderProfile();
  if (n === "routine") renderRoutine();
  if (n === "vida360") renderVida360();
}

function updateAllUI() {
  renderScreen(cur);
  const lvlVal = lvl(), xpInVal = xpIn();
  const xpPercent = (xpInVal/1000)*100;
  document.querySelectorAll("#h-lvl, #p-lvl").forEach(el => { if(el) el.textContent = lvlVal; });
  const xbar = document.getElementById("h-xpbar"); if(xbar) xbar.style.width = xpPercent+"%";
  const xpin = document.getElementById("h-xpin"); if(xpin) xpin.textContent = xpInVal;
  const hxp = document.getElementById("h-xp"); if(hxp) hxp.textContent = S.xpToday;
  const hcoins = document.getElementById("h-coins"); if(hcoins) hcoins.textContent = S.coins;
  const hdaily = document.getElementById("h-daily"); if(hdaily) hdaily.textContent = S.completedDaily.length;
  const htraining = document.getElementById("h-training-records"); if(htraining) htraining.textContent = S.vida360.training.length;
  const mult = getMultiplier();
  const multDiv = document.getElementById("multiplier-display");
  if(multDiv) multDiv.innerHTML = mult>1 ? `<span class="multiplier-badge">🔥 Multiplicador ${mult}x (${S.globalStreak} dias)</span>` : `<span style="font-size:11px;">Complete 3 ou mais dias para ativar o multiplicador</span>`;
  
  // Atualiza o progresso da rotina quando a tela está aberta
  renderDashboard();
}

function renderHome() {
  const tl = document.getElementById("h-task-list");
  if(tl) tl.innerHTML = DAILY_TASKS.slice(0,5).map(t => {
    const d = S.completedDaily.includes(t.id);
    return `<div class="task-row ${d?'done':''}" role="button" tabindex="0" onclick="toggleDaily('${t.id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleDaily('${t.id}')}" aria-pressed="${d}"><div class="task-check">${d?'✓':''}</div><div class="task-label">${t.icon} ${t.name}</div><div class="task-xp">+${t.xp} XP</div></div>`;
  }).join("");
  const hl = document.getElementById("h-habits-list"),today=vidaToday(),history=S.vida360.habitHistory[today]||{avoided:[],committed:[]};
  if(hl) hl.innerHTML = BAD_HABITS.slice(0,3).map(h => `<div class="bad-row"><span>☠ ${escapeHtml(h.name)}</span><span><button class="date-step" onclick="avoidBad('${h.id}')" ${history.avoided.includes(h.id)||history.committed.includes(h.id)?"disabled":""}>Evitei</button> <button class="date-step" onclick="applyBad('${h.id}')" ${history.avoided.includes(h.id)||history.committed.includes(h.id)?"disabled":""}>Registrei</button></span></div>`).join("");
}

function monthRecords(arr, month){return arr.filter(x=>String(x.date||"").startsWith(month));}
function escapeHtml(x){return vidaEsc(x);}
function shiftDate(value,delta,unit="day"){const d=new Date(value+(unit==="month"?"-01":"T12:00:00"));if(unit==="month")d.setMonth(d.getMonth()+delta);else d.setDate(d.getDate()+delta);return unit==="month"?monthKey(d):dateKey(d);}
function billsForMonth(month){const v=S.vida360;if(!v.billMonths[month])v.billMonths[month]=v.bills.filter(b=>b.active!==false&&(!b.startMonth||b.startMonth<=month)&&(b.recurring!==false||b.startMonth===month)).map(b=>({id:b.id,name:b.name,amount:+b.amount||0,dueDay:b.dueDay,category:b.category,paid:false}));return v.billMonths[month];}
function renderDashboard(){
 const today=vidaToday(),m=monthKey(),v=S.vida360,wr=monthRecords(v.work,m),bs=billsForMonth(m),routine=v.routineDays[today]||S.routineChecklist||[],steps=routineStepsForDate(today),trs=monthRecords(v.training,m);
 const set=(id,val)=>{const el=document.getElementById(id);if(el)el.textContent=val;};
 set("dashboard-date",new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"}));
 set("dash-month-gross",vidaMoney(wr.reduce((a,x)=>a+(+x.uber||0)+(+x.app99||0),0)));
 set("dash-unpaid",vidaMoney(bs.filter(x=>!x.paid).reduce((a,x)=>a+(+x.amount||0),0)));
 set("dash-routine",`${steps.length?Math.floor(routine.filter(id=>steps.some(s=>s.id===id)).length/steps.length*100):0}%`);set("dash-training",trs.length);
 const hh=v.habitHistory[today]||{done:[],avoided:[],committed:[],rewards:{},penalties:{}};set("dash-habits-done",(hh.done||[]).length);set("dash-habits-pending",Math.max(0,DAILY_TASKS.length-(hh.done||[]).length));set("dash-bad-avoided",(hh.avoided||[]).length);const reward=Object.values(hh.rewards||{}).reduce((a,x)=>a+(+x||0),0),cost=Object.values(hh.penalties||{}).reduce((a,x)=>a+(+x||0),0);set("dash-habit-earned",vidaMoney(reward));set("dash-habit-cost",vidaMoney(cost));set("dash-habit-balance",vidaMoney(reward-cost));
 const next=document.getElementById("dashboard-next-activities");if(next)next.innerHTML=routineStepsForDate(today).filter(x=>x.time>new Date().toTimeString().slice(0,5)).slice(0,4).map(x=>`<div class="v360-entry">${x.time} · ${escapeHtml(x.text)}</div>`).join("")||"<small>Sem próximas atividades hoje.</small>";
}
function routineStepsForDate(date){const day=new Date(`${date}T12:00:00`).getDay();return S.vida360.routineItems.filter(x=>x.active!==false&&(!Array.isArray(x.days)||x.days.includes(day))).sort((a,b)=>a.time.localeCompare(b.time));}
function renderWork(){const date=document.getElementById("work-date");if(!date)return;date.value=workDate;date.onchange=()=>{workDate=date.value||vidaToday();renderWork();};const v=S.vida360,month=workDate.slice(0,7),row=v.work.find(x=>x.date===workDate)||{};[...document.querySelectorAll("#work-form [name]")].forEach(el=>el.value=row[el.name]??"");
 const rows=monthRecords(v.work,month).sort((a,b)=>a.date.localeCompare(b.date)),sum=(key)=>rows.reduce((a,x)=>a+(+x[key]||0),0),totals=rows.map(x=>({date:x.date,total:(+x.uber||0)+(+x.app99||0)})),worked=totals.filter(x=>x.total>0),best=worked.reduce((best,x)=>!best||x.total>best.total?x:best,null);
 const put=(id,val)=>{const e=document.getElementById(id);if(e)e.textContent=val;};put("work-day-uber",vidaMoney(row.uber));put("work-day-99",vidaMoney(row.app99));put("work-day-total",vidaMoney((+row.uber||0)+(+row.app99||0)));put("work-month-days",worked.length);put("work-month-uber",vidaMoney(sum("uber")));put("work-month-99",vidaMoney(sum("app99")));put("work-month-average",vidaMoney(worked.length?worked.reduce((a,x)=>a+x.total,0)/worked.length:0));put("work-month-best",best?`${vidaMoney(best.total)} (${best.date})`:"—");
 const chart=document.getElementById("work-chart");if(chart)chart.innerHTML=totals.map(x=>`<div class="chart-col"><i style="height:${Math.max(3,x.total/(Math.max(1,...totals.map(y=>y.total)))*100)}%"></i><small>${x.date.slice(-2)}</small></div>`).join("");const hist=document.getElementById("work-history");if(hist)hist.innerHTML=rows.slice().reverse().map(x=>`<div class="v360-entry">${x.date} · Uber ${vidaMoney(x.uber)} + 99 ${vidaMoney(x.app99)} = ${vidaMoney((+x.uber||0)+(+x.app99||0))}<small>${x.hours||0} h · ${x.rides||0} corridas · ${x.km||0} km · combustível ${vidaMoney(x.fuel)} ${escapeHtml(x.notes||"")}</small></div>`).join("")||"<small>Sem registros neste mês.</small>";
 document.getElementById("work-form").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget),entry={date:workDate,uber:+f.get("uber")||0,app99:+f.get("app99")||0,hours:+f.get("hours")||0,rides:+f.get("rides")||0,km:+f.get("km")||0,fuel:+f.get("fuel")||0,notes:f.get("notes")||""};v.work=v.work.filter(x=>x.date!==workDate);v.work.push(entry);save();renderWork();renderDashboard();toast("Faturamento salvo","ok");};
}
function shiftWorkDate(n){workDate=shiftDate(workDate,n);renderWork();}
function renderTraining(){const date=document.getElementById("training-date");if(!date)return;date.value=trainingDate;date.onchange=()=>{trainingDate=date.value||vidaToday();renderTraining();};const v=S.vida360,ex=v.exerciseCatalog.slice().sort((a,b)=>a.order-b.order),row=v.training.find(x=>x.date===trainingDate)||{};const host=document.getElementById("training-exercises");host.innerHTML=ex.map((x,i)=>{const old=(row.exercises||[]).find(y=>String(y.exerciseId)===String(x.id))||{};return `<div class="form-grid"><strong class="full-field">${escapeHtml(x.name)}</strong><label class="v360-field">Séries<input name="sets_${i}" type="number" min="0" value="${old.sets??x.sets??3}"></label><label class="v360-field">Repetições<input name="reps_${i}" value="${escapeHtml(old.reps??x.reps??"")}"></label><label class="v360-field">Carga (kg)<input name="load_${i}" type="number" min="0" step=".5" value="${old.load??""}"></label></div>`;}).join("");document.querySelector('#training-form [name="notes"]').value=row.notes||"";
 document.getElementById("training-form").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);const entry={date:trainingDate,exercises:ex.map((x,i)=>({exerciseId:x.id,name:x.name,sets:+f.get(`sets_${i}`)||0,reps:f.get(`reps_${i}`)||"",load:+f.get(`load_${i}`)||0})),notes:f.get("notes")||""};v.training=v.training.filter(x=>x.date!==trainingDate);v.training.push(entry);save();renderTraining();renderDashboard();toast("Treino salvo","ok");};
 const sel=document.getElementById("training-chart-exercise");if(sel){const chosen=trainingChartExercise||ex[0]?.id;trainingChartExercise=chosen;sel.innerHTML=ex.map(x=>`<option value="${x.id}" ${String(x.id)===String(chosen)?"selected":""}>${escapeHtml(x.name)}</option>`).join("");sel.onchange=()=>{trainingChartExercise=sel.value;renderTraining();};}const series=v.training.flatMap(t=>(t.exercises||[]).filter(x=>String(x.exerciseId)===String(trainingChartExercise)&&x.load>0).map(x=>({date:t.date,load:x.load}))).sort((a,b)=>a.date.localeCompare(b.date));const ch=document.getElementById("training-chart");if(ch)ch.innerHTML=series.map(x=>`<div class="chart-col"><i style="height:${Math.max(4,x.load/(Math.max(1,...series.map(y=>y.load))*1.1)*100)}%"></i><small>${x.date.slice(5)}</small><small>${x.load}kg</small></div>`).join("")||"<small>Registre cargas para ver a evolução.</small>";
 const hist=document.getElementById("training-history");if(hist)hist.innerHTML=v.training.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(t=>`<div class="v360-entry">${t.date}<small>${(t.exercises||[]).map(x=>`${escapeHtml(x.name||ex.find(y=>String(y.id)===String(x.exerciseId))?.name||"Exercício")}: ${x.sets}×${escapeHtml(x.reps)} ${x.load?`· ${x.load} kg`:""}`).join(" · ")} ${escapeHtml(t.notes||"")}</small></div>`).join("")||"<small>Sem treinos registrados.</small>";
 const hf=document.getElementById("handstand-form");hf.elements.date.value=trainingDate;hf.onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget),d=f.get("date"),minutes=+f.get("minutes");if(minutes<=0)return;v.hand=v.hand.filter(x=>x.date!==d);v.hand.push({date:d,minutes});save();renderTraining();};const hh=document.getElementById("handstand-history");if(hh)hh.innerHTML=v.hand.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(x=>vidaEntry(`${x.date} · ${x.minutes} min`,"Prática de bananeira")).join("");
 const ed=document.getElementById("exercise-editor");if(ed)ed.innerHTML=showExerciseManager?`<form id="exercise-edit">${ex.map((x,i)=>`<div class="form-grid"><label class="v360-field">Exercício<input name="name_${i}" value="${escapeHtml(x.name)}"></label><label class="v360-field">Séries<input name="sets_${i}" type="number" value="${x.sets}"></label><label class="v360-field">Repetições<input name="reps_${i}" value="${escapeHtml(x.reps)}"></label></div>`).join("")}<button class="btn btn-primary">Salvar lista</button><button type="button" class="btn btn-danger" onclick="addExercise()">Adicionar exercício</button></form>`:"";const ef=document.getElementById("exercise-edit");if(ef)ef.onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);v.exerciseCatalog=ex.map((x,i)=>({...x,name:f.get(`name_${i}`),sets:+f.get(`sets_${i}`)||3,reps:f.get(`reps_${i}`)||"",order:i}));save();renderTraining();};}
function shiftTrainingDate(n){trainingDate=shiftDate(trainingDate,n);renderTraining();}function toggleExerciseEditor(){showExerciseManager=!showExerciseManager;renderTraining();}function addExercise(){S.vida360.exerciseCatalog.push({id:`e${Date.now()}`,name:"Novo exercício",sets:3,reps:"5–15",order:S.vida360.exerciseCatalog.length});save();renderTraining();}

function renderHabits() {
  const dl = document.getElementById("daily-list");
  if(dl) dl.innerHTML = DAILY_TASKS.map(t => {
    const d = S.completedDaily.includes(t.id);
    return `<div class="task-row ${d?'done':''}" role="button" tabindex="0" onclick="toggleDaily('${t.id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleDaily('${t.id}')}" aria-pressed="${d}"><div class="task-check">${d?'✓':''}</div><div class="task-label">${t.icon} ${t.name}</div><div class="task-xp">+${t.xp} XP</div></div>`;
  }).join("");
  const hv = document.getElementById("hp-val"); if(hv) hv.textContent = S.hp;
  const hb = document.getElementById("hp-bar"); if(hb) hb.style.width = (S.hp/S.maxHp)*100+"%";
  const rewards=document.getElementById("habit-money-config"),penalties=document.getElementById("bad-habit-money-config");
  if(rewards)rewards.innerHTML=DAILY_TASKS.map(t=>`<label class="v360-field">${escapeHtml(t.name)} · recompensa (R$)<input type="number" min="0" step=".01" data-habit-reward="${t.id}" value="${S.vida360.habitMoney[t.id]?.reward??0}"></label>`).join("");
  if(penalties)penalties.innerHTML=BAD_HABITS.map(t=>`<label class="v360-field">${escapeHtml(t.name)} · custo (R$)<input type="number" min="0" step=".01" data-habit-penalty="${t.id}" value="${S.vida360.habitMoney[t.id]?.penalty??0}"></label>`).join("");
}
function saveHabitMoney(){document.querySelectorAll("[data-habit-reward]").forEach(e=>{const x=S.vida360.habitMoney[e.dataset.habitReward]||{};x.reward=+e.value||0;S.vida360.habitMoney[e.dataset.habitReward]=x;});document.querySelectorAll("[data-habit-penalty]").forEach(e=>{const x=S.vida360.habitMoney[e.dataset.habitPenalty]||{};x.penalty=+e.value||0;S.vida360.habitMoney[e.dataset.habitPenalty]=x;});save();toast("Valores salvos","ok");}

function renderHandstand() {
  const list = document.getElementById("handstand-list");
  if(list) list.innerHTML = HANDSTAND_PROGRESSIONS.map(p => {
    const done = S.handstandProgress.includes(p.id);
    return `<div class="task-row ${done?'done':''}" onclick="toggleHandstand('${p.id}', ${p.xp})"><div class="task-check">${done?'✓':''}</div><div class="task-label">🏋️ ${p.name}</div><div class="task-xp">+${p.xp} XP</div></div>`;
  }).join("");
  const streakEl = document.getElementById("workout-streak");
  if(streakEl) streakEl.textContent = S.handstandWorkoutStreak;
}

function renderProfile() {
  document.getElementById("p-name").textContent = "KAISUI";
  document.getElementById("p-rank").textContent = rank().name.toUpperCase();
  const ps = document.getElementById("p-stats");
  if(ps) ps.innerHTML = `
    <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span>⚔️ FORÇA</span><span>${S.stats.for||0}</span></div>
    <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span>🧠 INTELIGÊNCIA</span><span>${S.stats.int||0}</span></div>
    <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span>⏰ DISCIPLINA</span><span>${S.stats.dis||0}</span></div>
    <div style="display:flex; justify-content:space-between;"><span>💬 CARISMA</span><span>${S.stats.cha||0}</span></div>
  `;
}

function updateRoutineProgressUI() {
  const completed = S.routineChecklist || [];
  const total = routineStepsToday().length;
  const doneCount = completed.filter(id => routineStepsToday().some(step => step.id === id)).length;
  const percent = Math.floor((doneCount / total) * 100);
  const percentEl = document.getElementById("routine-progress-percent");
  const barEl = document.getElementById("routine-progress-bar");
  const completedEl = document.getElementById("routine-completed-count");
  const totalEl = document.getElementById("routine-total-count");
  if(percentEl) percentEl.textContent = percent + "%";
  if(barEl) barEl.style.width = percent + "%";
  if(completedEl) completedEl.textContent = doneCount;
  if(totalEl) totalEl.textContent = total;
}

function renderRoutine() {
  document.querySelectorAll("#screen-routine .routine-toolbar button").forEach(button => {
    const oldEditButton = button.classList.contains("routine-edit-button") || button.getAttribute("onclick")?.includes("toggleRoutineEditor") || button.textContent.trim().toLowerCase().includes("editar atividades");
    if (oldEditButton) button.remove();
  });
  const container = document.getElementById("routine-container");
  if(!container) return;
  const input=document.getElementById("routine-date");if(input){input.value=routineDate;input.onchange=()=>{routineDate=input.value||vidaToday();renderRoutine();};}const dateLabel=document.getElementById("routine-date-label");if(dateLabel)dateLabel.textContent=new Date(`${routineDate}T12:00:00`).toLocaleDateString("pt-BR",{day:"2-digit",month:"short",year:"numeric"}).replace(/\./g,"");
  const completed = S.vida360.routineDays[routineDate] || (routineDate===vidaToday()?S.routineChecklist:[]) || [];
  const stepsForDate=routineStepsForDate(routineDate);
  
  const groups = [
    ["🌅 MANHÃ (05:30 - 06:00)", stepsForDate.filter(s => s.time.startsWith("05:"))],
    ["💼 TRABALHO (06:00 - 11:00)", stepsForDate.filter(s => s.time === "06:00")],
    ["🍽️ ALMOÇO (11:00 - 12:00)", stepsForDate.filter(s => s.time.startsWith("11:"))],
    ["🏠 RETORNO PARA CASA (15:00)", stepsForDate.filter(s => s.time === "15:00")],
    ["🏋️ TREINO (16:00)", stepsForDate.filter(s => s.time === "16:00")],
    ["📚 INGLÊS (17:30)", stepsForDate.filter(s => s.time === "17:30")],
    ["⛪ NOITE (18:30 - 22:00)", stepsForDate.filter(s => s.time.startsWith("18:") || s.time.startsWith("22:"))],
  ];
  
  container.innerHTML = groups.map(([title, steps]) => `
    <div class="time-block">
      <div class="time-title">${title}</div>
      ${steps.map(s => `
        <div class="routine-item ${completed.includes(s.id)?'done':''}" role="checkbox" tabindex="0" aria-checked="${completed.includes(s.id)}" onclick="toggleRoutine('${s.id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleRoutine('${s.id}')} ">
          <div class="task-check">${completed.includes(s.id)?'✓':''}</div>
          <div class="routine-time">${s.time}</div>
          <div class="routine-text">${s.text}</div>
        </div>
        ${s.detail ? `<div class="routine-detail">💡 ${s.detail}</div>` : ''}
      `).join('')}
    </div>`).join("");
  const total=stepsForDate.length,done=completed.filter(id=>stepsForDate.some(s=>s.id===id)).length;document.getElementById("routine-progress-percent").textContent=`${total?Math.floor(done/total*100):0}%`;document.getElementById("routine-progress-bar").style.width=`${total?Math.floor(done/total*100):0}%`;document.getElementById("routine-completed-count").textContent=done;document.getElementById("routine-total-count").textContent=total;const progressLabel=document.querySelector("#screen-routine .stat-label");if(progressLabel)progressLabel.textContent=`CONCLUÍDO EM ${new Date(`${routineDate}T12:00:00`).toLocaleDateString("pt-BR")}`;
}
function shiftRoutineDate(n){routineDate=shiftDate(routineDate,n);renderRoutine();}

function renderFinances(){const el=document.getElementById("finance-month");if(!el)return;el.value=financeMonth;el.onchange=()=>{financeMonth=el.value||monthKey();renderFinances();renderDashboard();};const v=S.vida360,bills=billsForMonth(financeMonth),total=bills.reduce((a,x)=>a+(+x.amount||0),0),paid=bills.filter(x=>x.paid).reduce((a,x)=>a+(+x.amount||0),0);const set=(id,val)=>{document.getElementById(id).textContent=val;};set("bill-total",vidaMoney(total));set("bill-paid",vidaMoney(paid));set("bill-pending",vidaMoney(total-paid));set("bill-counts",`${bills.filter(x=>x.paid).length} / ${bills.length-bills.filter(x=>x.paid).length}`);
 const list=document.getElementById("monthly-bills");list.innerHTML=bills.map(b=>`<div class="bill-row ${b.paid?"is-paid":""}"><label class="bill-info"><input type="checkbox" ${b.paid?"checked":""} onchange="toggleMonthBill('${b.id}')"><span class="bill-copy"><strong>${escapeHtml(b.name)}</strong><small>${vidaMoney(b.amount)} · ${escapeHtml(b.category)}${b.dueDay?` · vence dia ${b.dueDay}`:""}</small></span></label><div class="bill-actions"><button class="bill-edit" onclick="editBill('${b.id}')" aria-label="Editar ${escapeHtml(b.name)}" title="Editar conta">✎</button><button class="bill-remove" onclick="removeBill('${b.id}')" aria-label="Excluir ${escapeHtml(b.name)}" title="Excluir conta">×</button></div></div>`).join("")||"<small>Nenhuma conta para este mês.</small>";
 document.getElementById("bill-form").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget),id=`b${Date.now()}`,bill={id,name:String(f.get("name")).trim(),amount:+f.get("amount")||0,dueDay:+f.get("dueDay")||null,category:f.get("category"),recurring:f.has("recurring"),active:true,startMonth:financeMonth};v.bills.push(bill);if(!v.billMonths[financeMonth])v.billMonths[financeMonth]=billsForMonth(financeMonth);v.billMonths[financeMonth].push({...bill,paid:false});save();renderFinances();renderDashboard();};
 const sf=document.getElementById("savings-form");sf.elements.saveFuture.value=v.settings.saveFuture;sf.elements.saveHouse.value=v.settings.saveHouse;document.getElementById("savings-total").textContent=`Meta mensal: ${vidaMoney(+v.settings.saveFuture + +v.settings.saveHouse)}`;sf.onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);v.settings.saveFuture=+f.get("saveFuture")||0;v.settings.saveHouse=+f.get("saveHouse")||0;save();renderFinances();};
 const tf=document.getElementById("transaction-form");tf.elements.date.value=vidaToday();tf.onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);v.tx.push({id:vidaUid(),date:f.get("date"),type:f.get("type"),amount:+f.get("amount")||0,desc:f.get("desc")||""});save();renderFinances();};const tx=document.getElementById("transaction-list");tx.innerHTML=v.tx.filter(x=>x.date?.startsWith(financeMonth)).sort((a,b)=>b.date.localeCompare(a.date)).map(x=>vidaEntry(`${x.date} · ${x.type} ${vidaMoney(x.amount)}`,x.desc)).join("")||"<small>Sem lançamentos neste mês.</small>";
}
function shiftFinanceMonth(n){financeMonth=shiftDate(financeMonth,n,"month");renderFinances();renderDashboard();}function toggleMonthBill(id){const b=billsForMonth(financeMonth).find(x=>String(x.id)===String(id));if(b)b.paid=!b.paid;save();renderFinances();renderDashboard();}
function editBill(id){const v=S.vida360,b=v.bills.find(x=>String(x.id)===String(id)),snapshot=billsForMonth(financeMonth).find(x=>String(x.id)===String(id));if(!b||!snapshot)return;const name=prompt("Nome da conta",snapshot.name);if(name===null)return;const amountInput=prompt("Valor mensal (R$)",snapshot.amount);if(amountInput===null)return;const amount=Number(amountInput.replace(",","."));if(!name.trim()||!Number.isFinite(amount)||amount<0)return toast("Confira o nome e o valor.","fail");snapshot.name=name.trim();snapshot.amount=amount;b.name=name.trim();b.amount=amount;
 if(b.recurring!==false){for(const [m,rows] of Object.entries(v.billMonths)){if(m>financeMonth){const future=rows.find(x=>String(x.id)===String(id));if(future){future.name=b.name;future.amount=amount;}}}}
 save();renderFinances();renderDashboard();}
function removeBill(id){S.vida360.bills=S.vida360.bills.filter(x=>String(x.id)!==String(id));billsForMonth(financeMonth);for(const [m,rows] of Object.entries(S.vida360.billMonths)){if(m>=financeMonth)S.vida360.billMonths[m]=rows.filter(x=>String(x.id)!==String(id));}save();renderFinances();renderDashboard();}

// Vida 360 — módulos pessoais integrados ao estado e ao tema do KAISUI
let vidaTab = "ingles";
const VIDA_TABS = [["ingles","Inglês"],["moto","Moto"],["projeto","180 dias"],["revisao","Revisão"]];

function renderVida360() {
  const root = document.getElementById("vida360-app");
  if (!root) return;
  root.innerHTML = `<div class="vida360-tabs">${VIDA_TABS.map(([id,label]) => `<button class="${vidaTab===id?'active':''}" data-vida-tab="${id}">${label}</button>`).join("")}</div><div id="vida360-panel"></div>`;
  root.querySelectorAll("[data-vida-tab]").forEach(button => button.onclick = () => { vidaTab=button.dataset.vidaTab; renderVida360(); });
  renderVidaPanel();
}

function renderVidaPanel() {
  const panel = document.getElementById("vida360-panel");
  if (!panel) return;
  const v = S.vida360;
  const today = vidaToday();
  const workToday = v.work.find(x=>x.date===today);
  const pending = v.bills.filter(x=>!x.paid).reduce((a,x)=>a+Number(x.amount||0),0);
  const doneToday = S.routineChecklist.length;
  if (vidaTab === "inicio") {
    panel.innerHTML = `<h3>Um dia de cada vez</h3><p style="color:var(--muted);font-size:12px;">Pequenas ações. Uma vida diferente.</p>
      <div class="v360-grid"><div class="v360-metric"><small>Faturamento de hoje</small><strong>${vidaMoney(workToday?.gross)}</strong></div><div class="v360-metric"><small>Contas pendentes</small><strong>${vidaMoney(pending)}</strong></div><div class="v360-metric"><small>Rotina concluída</small><strong>${doneToday} etapas</strong></div><div class="v360-metric"><small>Projeto de 180 dias</small><strong>${Math.min(100,Math.round(v.project.length/180*100))}%</strong></div></div>
      <div class="card" style="margin-top:12px;"><strong>Foco de hoje</strong><div style="font-size:12px;margin-top:8px;">${ROUTINE_STEPS.filter(x=>x.time.startsWith("05:")||x.time==="06:00").map(x=>`<div>• ${vidaEsc(x.text)}</div>`).join("")}</div><button class="btn btn-primary" onclick="goTo('routine')">Abrir minha rotina</button></div>
      <div class="card"><strong>Lembrete</strong><p style="font-size:12px;">Disciplina não é fazer tudo perfeitamente. Se um dia sair do planejado, retome no próximo com segurança e sem desistir.</p></div>`;
    return;
  }
  if (vidaTab === "trabalho") {
    panel.innerHTML = `<h3>Meu trabalho</h3><p style="color:var(--muted);font-size:12px;">Registre faturamento bruto, horas, corridas e custos.</p>
      <div class="card"><form id="v-work"><div class="v360-grid"><label class="v360-field">Data<input name="date" type="date" value="${today}"></label><label class="v360-field">Faturamento bruto (R$)<input name="gross" type="number" step=".01"></label><label class="v360-field">Horas trabalhadas<input name="hours" type="number" step=".25"></label><label class="v360-field">Corridas<input name="rides" type="number"></label><label class="v360-field">Km rodados<input name="km" type="number" step=".1"></label><label class="v360-field">Combustível (R$)<input name="fuel" type="number" step=".01"></label></div><label class="v360-field">Observações<textarea name="notes"></textarea></label><button class="btn btn-primary">Salvar dia</button></form></div>
      <div class="card"><strong>Metas diárias</strong><form id="v-goals" class="v360-grid"><label class="v360-field">Meta mínima<input name="minGoal" type="number" value="${v.settings.minGoal}"></label><label class="v360-field">Meta esperada<input name="targetGoal" type="number" value="${v.settings.targetGoal}"></label><label class="v360-field">Reserva da moto/dia<input name="reserve" type="number" value="${v.settings.reserve}"></label><label class="v360-field">Limite de extensão<input name="endTime" type="time" value="${v.settings.endTime}"></label><button class="btn btn-primary" style="grid-column:1/-1;">Salvar metas</button></form></div>
      <div class="card"><strong>Histórico de trabalho</strong>${v.work.length?v.work.slice().reverse().map(x=>vidaEntry(`${x.date} · ${vidaMoney(x.gross)}`,`${x.hours||0} h · ${x.rides||0} corridas · ${x.km||0} km · combustível ${vidaMoney(x.fuel)}`)).join(""):'<p style="font-size:12px;color:var(--muted);">Nenhum dia registrado.</p>'}</div>`;
    document.getElementById("v-work").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);const row={date:f.get("date")||today,gross:+f.get("gross")||0,hours:+f.get("hours")||0,rides:+f.get("rides")||0,km:+f.get("km")||0,fuel:+f.get("fuel")||0,notes:f.get("notes")||""};v.work=v.work.filter(x=>x.date!==row.date);v.work.push(row);save();toast("Dia de trabalho salvo","ok");};
    document.getElementById("v-goals").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);["minGoal","targetGoal","reserve","endTime"].forEach(k=>v.settings[k]=f.get(k));save();toast("Metas salvas","ok");};
    return;
  }
  if (vidaTab === "financas") {
    const total=v.bills.reduce((a,b)=>a+Number(b.amount||0),0), paid=v.bills.filter(b=>b.paid).reduce((a,b)=>a+Number(b.amount||0),0);
    panel.innerHTML = `<h3>Minhas finanças</h3><div class="v360-grid"><div class="v360-metric"><small>Total de contas</small><strong>${vidaMoney(total)}</strong></div><div class="v360-metric"><small>Já paguei</small><strong>${vidaMoney(paid)}</strong></div><div class="v360-metric"><small>Falta pagar</small><strong>${vidaMoney(total-paid)}</strong></div><div class="v360-metric"><small>Metas de economia</small><strong>${vidaMoney(+v.settings.saveFuture + +v.settings.saveHouse)}</strong></div></div>
      <div class="card"><strong>Contas do mês</strong>${v.bills.map(b=>`<div class="v360-row" style="padding:7px 0;"><label class="v360-check" style="flex:1;margin:0;"><input type="checkbox" ${b.paid?'checked':''} onchange="vidaToggleBill('${b.id}')"> ${vidaEsc(b.name)} · ${vidaMoney(b.amount)}</label><button class="btn btn-danger" style="width:auto;margin:0;padding:6px 9px;" onclick="vidaDeleteBill('${b.id}')">×</button></div>`).join("")}<form id="v-add-bill" class="v360-row"><input class="v360-input" name="name" placeholder="Nome da conta"><input class="v360-input" name="amount" type="number" step=".01" placeholder="Valor (R$)"><button class="btn btn-primary" style="width:auto;margin:0;">＋</button></form></div>
      <div class="card"><strong>Metas de economia mensal</strong><form id="v-savings" class="v360-grid"><label class="v360-field">Futuro / reserva<input name="saveFuture" type="number" value="${v.settings.saveFuture}"></label><label class="v360-field">Casa própria<input name="saveHouse" type="number" value="${v.settings.saveHouse}"></label><button class="btn btn-primary" style="grid-column:1/-1;">Salvar metas</button></form><p style="font-size:11px;color:var(--muted);">Metas são objetivos, não valores garantidos. Considere combustível, manutenção, alimentação e dívidas antes de separar dinheiro.</p></div>
      <div class="card"><strong>Lançamento financeiro</strong><form id="v-tx"><div class="v360-row"><select class="v360-input" name="type"><option value="despesa">Despesa</option><option value="receita">Receita</option></select><input class="v360-input" name="amount" type="number" step=".01" placeholder="Valor"></div><input class="v360-input" name="desc" placeholder="Descrição"><button class="btn btn-primary">Registrar</button></form>${v.tx.slice().reverse().map(x=>vidaEntry(x.desc,`${x.date} · ${x.type} · ${vidaMoney(x.amount)}`)).join("")}</div>`;
    document.getElementById("v-add-bill").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget),name=String(f.get("name")||"").trim(),amount=Number(f.get("amount"));if(!name||!Number.isFinite(amount)||amount<0)return toast("Informe nome e valor válidos","fail");v.bills.push({id:vidaUid(),name,amount,paid:false});save();};
    document.getElementById("v-savings").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);v.settings.saveFuture=+f.get("saveFuture")||0;v.settings.saveHouse=+f.get("saveHouse")||0;save();toast("Metas de economia salvas","ok");};
    document.getElementById("v-tx").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget),amount=+f.get("amount"),desc=String(f.get("desc")||"").trim();if(!amount||!desc)return toast("Informe descrição e valor","fail");v.tx.push({type:f.get("type"),amount,desc,date:today});save();};
    return;
  }
  if (vidaTab === "treino") {
    panel.innerHTML = `<h3>Treinamento</h3><p style="color:var(--muted);font-size:12px;">Fullbody 3 vezes por semana. Pratique bananeira diariamente por pelo menos 1 minuto.</p><div class="card"><strong>Registrar treino · 16:00</strong><form id="v-training">${HANDSTAND_PROGRESSIONS.map((x,i)=>`<div style="padding:8px 0;border-bottom:1px solid var(--border);font-size:12px;"><strong>${vidaEsc(x.name.replace(/ — 3 séries de 5 a 15 repetições/,""))}</strong><div class="v360-grid"><label class="v360-field">Séries<input name="sets${i}" type="number" value="3"></label><label class="v360-field">Repetições<input name="reps${i}" placeholder="8, 8, 7"></label><label class="v360-field">Carga (kg)<input name="load${i}" type="number" step=".5"></label></div></div>`).join("")}<label class="v360-field">Notas<textarea name="notes"></textarea></label><button class="btn btn-primary">Salvar treino</button></form></div><div class="card"><strong>Prática de bananeira</strong><form id="v-hand"><label class="v360-field">Minutos praticados<input name="minutes" type="number" step=".5"></label><button class="btn btn-primary">Registrar</button></form></div><div class="card"><strong>Histórico</strong>${v.training.slice().reverse().slice(0,8).map(x=>vidaEntry(x.date,x.notes||"Treino registrado")).join("")}${v.hand.slice().reverse().slice(0,8).map(x=>vidaEntry(`${x.date} · Bananeira`,`${x.minutes} min praticados`)).join("")}</div>`;
    document.getElementById("v-training").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget),exercises=HANDSTAND_PROGRESSIONS.map((_,i)=>({sets:+f.get(`sets${i}`)||0,reps:f.get(`reps${i}`)||"",load:+f.get(`load${i}`)||0}));v.training.push({date:today,exercises,notes:f.get("notes")||""});save();toast("Treino salvo","ok");};
    document.getElementById("v-hand").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget),minutes=+f.get("minutes");if(minutes<=0)return toast("Informe os minutos praticados","fail");v.hand.push({date:today,minutes});save();toast("Prática registrada","ok");};
    return;
  }
  if (vidaTab === "ingles") {
    panel.innerHTML = `<h3>Meu inglês</h3><p style="color:var(--muted);font-size:12px;">Áudio durante o deslocamento; vídeos e exercícios somente quando estiver parado. Nunca use o celular pilotando.</p><div class="card"><strong>Estudo de hoje</strong><form id="v-english"><div class="v360-grid"><label class="v360-field">Escuta (min)<input name="listen" type="number"></label><label class="v360-field">Conversação (min)<input name="speak" type="number"></label></div><label class="v360-field">Notas<textarea name="notes"></textarea></label><button class="btn btn-primary">Salvar estudo</button></form></div><div class="card"><strong>Lista de vídeos</strong><form id="v-video" class="v360-grid"><input class="v360-input" name="title" placeholder="Título do vídeo"><input class="v360-input" name="url" placeholder="Link (opcional)"><input class="v360-input" name="category" placeholder="Categoria" value="Inglês"><button class="btn btn-primary">＋ Adicionar vídeo</button></form>${v.videos.map(x=>`<label class="v360-check"><input type="checkbox" ${x.done?'checked':''} onchange="vidaToggleVideo('${x.id}')"><span>${vidaEsc(x.title)}<small>${vidaEsc(x.category)} ${x.url&&vidaSafeUrl(x.url)?`· <a href="${vidaSafeUrl(x.url)}" target="_blank" rel="noopener">Abrir</a>`:""}</small></span><button class="btn btn-danger" style="width:auto;margin:0;padding:5px 8px;" onclick="vidaDeleteVideo('${x.id}')">×</button></label>`).join("")||'<p style="font-size:12px;color:var(--muted);">Adicione vídeos para estudar.</p>'}</div><div class="card"><strong>Ideias de conversação</strong><p style="font-size:12px;">Apresentações · Restaurante · Trabalho · Viagem · Conversas do dia a dia · Falar com estrangeiros.</p></div><div class="card"><strong>Registros anteriores</strong>${v.english.slice().reverse().slice(0,10).map(x=>vidaEntry(x.date,`${x.listen} min de escuta · ${x.speak} min de conversação · ${x.notes||""}`)).join("")}</div>`;
    document.getElementById("v-english").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);v.english.push({date:today,listen:+f.get("listen")||0,speak:+f.get("speak")||0,notes:f.get("notes")||""});save();toast("Estudo salvo","ok");};
    document.getElementById("v-video").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget),title=String(f.get("title")||"").trim();if(!title)return toast("Informe o título do vídeo","fail");v.videos.push({id:vidaUid(),title,url:String(f.get("url")||"").trim(),category:String(f.get("category")||"Inglês"),done:false});save();};
    return;
  }
  if (vidaTab === "moto") {
    panel.innerHTML = `<h3>Minha moto</h3><div class="card"><strong>Quilometragem</strong><form id="v-odo"><label class="v360-field">Odômetro atual (km)<input name="odo" type="number" step=".1" value="${v.odometer||""}"></label><button class="btn btn-primary">Atualizar</button></form></div><div class="card"><strong>Abastecimento</strong><form id="v-fuel" class="v360-grid"><label class="v360-field">Data<input name="date" type="date" value="${today}"></label><label class="v360-field">Valor (R$)<input name="cost" type="number" step=".01"></label><label class="v360-field">Litros<input name="liters" type="number" step=".01"></label><label class="v360-field">Odômetro<input name="odo" type="number" step=".1"></label><button class="btn btn-primary" style="grid-column:1/-1;">Salvar abastecimento</button></form>${v.fuel.slice().reverse().map(x=>vidaEntry(`${x.date} · ${vidaMoney(x.cost)}`,`${x.liters} L · ${x.odo} km`)).join("")}</div><div class="card"><strong>Manutenção</strong><form id="v-maint" class="v360-grid"><input class="v360-input" name="name" placeholder="Serviço"><input class="v360-input" name="cost" type="number" step=".01" placeholder="Custo R$"><input class="v360-input" name="km" type="number" placeholder="Km"><button class="btn btn-primary">＋ Registrar</button></form>${v.maintenance.map(x=>vidaEntry(x.name,`${x.date} · ${vidaMoney(x.cost)} · ${x.km||"Km não informado"} km`)).join("")}</div><div class="card"><strong>Peças e compras</strong><form id="v-part" class="v360-grid"><input class="v360-input" name="name" placeholder="Peça ou item"><input class="v360-input" name="cost" type="number" step=".01" placeholder="Valor estimado R$"><button class="btn btn-primary">＋ Adicionar</button></form>${v.parts.map(x=>`<label class="v360-check"><input type="checkbox" ${x.done?'checked':''} onchange="vidaTogglePart('${x.id}')"> ${vidaEsc(x.name)} · ${vidaMoney(x.cost)}</label>`).join("")}</div>`;
    document.getElementById("v-odo").onsubmit=e=>{e.preventDefault();v.odometer=+new FormData(e.currentTarget).get("odo")||0;save();toast("Odômetro atualizado","ok");};
    document.getElementById("v-fuel").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget),entry={date:f.get("date")||today,cost:+f.get("cost")||0,liters:+f.get("liters")||0,odo:+f.get("odo")||0};v.fuel.push(entry);v.odometer=Math.max(+v.odometer||0,entry.odo);save();toast("Abastecimento salvo","ok");};
    document.getElementById("v-maint").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget),name=String(f.get("name")||"").trim();if(!name)return toast("Informe o serviço de manutenção","fail");v.maintenance.push({name,date:today,cost:+f.get("cost")||0,km:+f.get("km")||0});save();};
    document.getElementById("v-part").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget),name=String(f.get("name")||"").trim();if(!name)return toast("Informe a peça ou item","fail");v.parts.push({id:vidaUid(),name,cost:+f.get("cost")||0,done:false});save();};
    return;
  }
  if (vidaTab === "projeto") {
    const nextDay=Math.min(180,v.project.length+1);
    panel.innerHTML = `<h3>Projeto de 180 dias</h3><div class="v360-metric"><strong>${v.project.length}/180 dias · ${Math.round(v.project.length/180*100)}%</strong><div class="prog-bar"><div class="prog-fill" style="width:${Math.min(100,v.project.length/180*100)}%"></div></div></div><div class="card"><form id="v-project"><div class="v360-grid"><label class="v360-field">Data<input name="date" type="date" value="${today}"></label><label class="v360-field">Dia do projeto<input name="day" type="number" min="1" max="180" value="${nextDay}"></label></div><label class="v360-field">Vídeo (link ou nome do arquivo)<input name="video"></label><label class="v360-field">Resumo do dia<textarea name="text"></textarea></label><div class="v360-grid"><label class="v360-field">Vitória<input name="win"></label><label class="v360-field">Dificuldade enfrentada<input name="challenge"></label></div><label class="v360-field">Aprendizado<input name="lesson"></label><button class="btn btn-primary">Salvar registro</button></form></div><div class="card"><strong>Registros anteriores</strong>${v.project.slice().reverse().map(x=>vidaEntry(`Dia ${x.day} · ${x.date}`,x.text||x.win||x.video||"Registro salvo")).join("")}</div>`;
    document.getElementById("v-project").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget),row={date:f.get("date")||today,day:+f.get("day")||nextDay,video:f.get("video")||"",text:f.get("text")||"",win:f.get("win")||"",challenge:f.get("challenge")||"",lesson:f.get("lesson")||""};v.project=v.project.filter(x=>x.date!==row.date);v.project.push(row);save();toast("Registro salvo","ok");};
    return;
  }
  if (vidaTab === "revisao") {
    const review=v.reviews.find(x=>x.date===today)||{};
    panel.innerHTML = `<h3>Revisão diária</h3><div class="card"><form id="v-review"><label class="v360-field">Como foi meu dia?<select name="mood"><option value="">Selecione</option>${["Excelente","Bom","Normal","Difícil","Muito difícil"].map(x=>`<option ${review.mood===x?'selected':''}>${x}</option>`).join("")}</select></label><label class="v360-field">O que fiz bem?<textarea name="win">${vidaEsc(review.win||"")}</textarea></label><label class="v360-field">O que melhorar amanhã?<textarea name="improve">${vidaEsc(review.improve||"")}</textarea></label><label class="v360-field">Prioridade de amanhã<input name="priority" value="${vidaEsc(review.priority||"")}"></label><button class="btn btn-primary">Salvar revisão</button></form></div><div class="card"><strong>Revisões anteriores</strong>${v.reviews.slice().reverse().map(x=>vidaEntry(`${x.date} · ${x.mood||"Sem avaliação"}`,x.win||x.improve||x.priority||"Revisão salva")).join("")||'<p style="font-size:12px;color:var(--muted);">Nenhuma revisão registrada.</p>'}</div><div class="card"><strong>Dados e privacidade</strong><p style="font-size:12px;color:var(--muted);">Seus dados ficam neste navegador. Exporte backups regularmente antes de limpar os dados do navegador.</p><button class="btn btn-primary" onclick="exportarBackupVida360()">Exportar backup completo</button><label class="v360-field">Importar backup JSON<input id="v-import" type="file" accept="application/json"></label><button class="btn btn-danger" onclick="document.getElementById('v-import').click()">Selecionar backup</button></div>`;
    document.getElementById("v-review").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget),row={date:today,mood:f.get("mood"),win:f.get("win"),improve:f.get("improve"),priority:f.get("priority")};v.reviews=v.reviews.filter(x=>x.date!==today);v.reviews.push(row);save();toast("Revisão salva","ok");};
    document.getElementById("v-import").onchange=importarBackupVida360;
  }
}

function vidaToggleBill(id) { const b=S.vida360.bills.find(x=>String(x.id)===String(id)); if(b)b.paid=!b.paid; save(); }
function vidaDeleteBill(id) { S.vida360.bills=S.vida360.bills.filter(x=>String(x.id)!==String(id)); save(); }
function vidaToggleVideo(id) { const x=S.vida360.videos.find(x=>String(x.id)===String(id)); if(x)x.done=!x.done; save(); }
function vidaDeleteVideo(id) { S.vida360.videos=S.vida360.videos.filter(x=>String(x.id)!==String(id)); save(); }
function vidaTogglePart(id) { const x=S.vida360.parts.find(x=>String(x.id)===String(id)); if(x)x.done=!x.done; save(); }
function exportarBackupVida360() { const blob=new Blob([JSON.stringify(S,null,2)],{type:"application/json"}),a=document.createElement("a"),url=URL.createObjectURL(blob);a.href=url;a.download=`kaisui-backup-${vidaToday()}.json`;a.click();URL.revokeObjectURL(url); }
async function importarBackupVida360(event) { const file=event.target.files[0];if(!file)return;if(!confirm("Importar este backup vai substituir os dados atuais do KAISUI. Continuar?")){event.target.value="";return;}try{const data=JSON.parse(await file.text());if(data.vida360){S={...defaultState(),...data,vida360:normalizeVida360(data.vida360)};}else if(Array.isArray(data.bills)){S.vida360=normalizeVida360(data);}else throw new Error("invalid backup");save();toast("Backup importado","ok");}catch{toast("Backup inválido","fail");}event.target.value=""; }

// AÇÕES
function toggleDaily(id) {
  const t=DAILY_TASKS.find(x=>x.id===id);if(!t)return;
  const today=vidaToday(),history=S.vida360.habitHistory[today]||(S.vida360.habitHistory[today]={done:[],avoided:[],committed:[],rewards:{},penalties:{}}),value=+(S.vida360.habitMoney[id]?.reward||0);
  if (S.completedDaily.includes(id)) {
    const t = DAILY_TASKS.find(x=>x.id===id);
    S.completedDaily = S.completedDaily.filter(x=>x!==id);
    history.done=history.done.filter(x=>x!==id);if(history.rewards)delete history.rewards[id];
    S.vida360.tx=S.vida360.tx.filter(x=>x.habitRef!==`${today}:${id}:reward`);
    addXP(-t.xp, null);
    toast("❌ " + t.name + " desmarcada", "fail");
  } else {
    S.completedDaily.push(id);
    history.done.push(id);history.rewards[id]=value;
    if(value>0)S.vida360.tx.push({id:vidaUid(),date:today,type:"receita",amount:value,desc:`Recompensa de hábito: ${t.name}`,habitRef:`${today}:${id}:reward`});
    addXP(t.xp, t.stat);
    updateGlobalStreak();
    toast("✓ +" + Math.floor(t.xp*getMultiplier()) + " XP — " + t.name, "ok");
    if (S.completedDaily.length === DAILY_TASKS.length) {
      setTimeout(() => { addXP(500, "dis"); toast("⚡ TUDO CONCLUÍDO! +500 XP DE BÔNUS", "ok", 4000); }, 500);
    }
  }
  save(); updateAllUI();
}

function applyBad(id) {
  const h = BAD_HABITS.find(x=>x.id===id);
  const today=vidaToday(),history=S.vida360.habitHistory[today]||(S.vida360.habitHistory[today]={done:[],avoided:[],committed:[],rewards:{},penalties:{}}),cost=+(S.vida360.habitMoney[id]?.penalty||0);
  if(history.committed.includes(id)){toast("Esse hábito já foi registrado hoje.","info");return;}
  history.committed.push(id);history.penalties[id]=cost;
  if(cost>0)S.vida360.tx.push({id:vidaUid(),date:today,type:"despesa",amount:cost,desc:`Custo de hábito: ${h.name}`,habitRef:`${today}:${id}:penalty`});
  addXP(-h.xpL, null);
  modHP(-h.hpL);
  save();
  toast("☠ " + h.name + " — -" + h.xpL + " XP -" + h.hpL + " HP", "fail", 3000);
}
function avoidBad(id){const today=vidaToday(),history=S.vida360.habitHistory[today]||(S.vida360.habitHistory[today]={done:[],avoided:[],committed:[],rewards:{},penalties:{}});if(history.avoided.includes(id)||history.committed.includes(id))return;history.avoided.push(id);save();renderHome();renderDashboard();}

function toggleHandstand(id, xp) {
  if (S.handstandProgress.includes(id)) {
    S.handstandProgress = S.handstandProgress.filter(x=>x!==id);
    addXP(-xp, null);
    toast("Progresso desmarcado", "fail");
  } else {
    S.handstandProgress.push(id);
    addXP(xp, "for");
    toast("✓ " + HANDSTAND_PROGRESSIONS.find(p=>p.id===id).name + " +" + Math.floor(xp*getMultiplier()) + " XP", "ok");
  }
  save(); renderHandstand();
}

function markHandstandWorkout() {
  const today = new Date().toDateString();
  if (S.handstandLastWorkoutDate === today) { toast("O treino de hoje já foi registrado!", "fail"); return; }
  if (S.handstandLastWorkoutDate === new Date(Date.now()-86400000).toDateString()) S.handstandWorkoutStreak++;
  else S.handstandWorkoutStreak = 1;
  S.handstandLastWorkoutDate = today;
  addXP(100, "for");
  toast("🔥 Treino registrado! +100 XP", "ok");
  save();
  renderHandstand();
}

function toggleRoutine(id) {
  const day=routineDate,completed=(S.vida360.routineDays[day]||(S.vida360.routineDays[day]=day===vidaToday()?S.routineChecklist.slice():[]));
  if (completed.includes(id)) {
    completed = completed.filter(x=>x!==id);
    toast("Etapa desmarcada", "fail", 1000);
  } else {
    completed.push(id);
    if(day===vidaToday())addXP(5, "dis");
    toast("✓ +5 XP - " + ROUTINE_STEPS.find(s=>s.id===id)?.text, "ok", 1500);
  }
  S.vida360.routineDays[day] = completed;if(day===vidaToday())S.routineChecklist=completed;
  save();
  renderRoutine();
}

function completeRoutineDay() {
  const stepsToday = routineStepsForDate(routineDate),completed=S.vida360.routineDays[routineDate]||[];
  if (stepsToday.some(step => !completed.includes(step.id))) {
    toast("⚠️ Complete todas as " + stepsToday.length + " etapas primeiro!", "fail", 3000);
    return;
  }
  if(routineDate!==vidaToday()){toast("O bônus só pode ser resgatado para hoje.","info");return;}
  const today = new Date().toDateString();
  if (S.routineLastCompleted === today) { toast("O bônus de hoje já foi resgatado!", "info", 2000); return; }
  addXP(1000, "dis");
  S.coins += 200;
  S.routineLastCompleted = today;
  save();
  toast("🔥 ROTINA COMPLETA CONCLUÍDA! +1000 XP +200 MOEDAS", "ok", 4000);
  updateGlobalStreak();
  updateAllUI();
}

function resetRoutine() {
  if (confirm("Reiniciar a rotina de hoje? Todo o progresso será perdido.")) {
    S.routineChecklist = [];
    save();
    renderRoutine();
    toast("Rotina reiniciada", "info");
  }
}

function resetGame() {
  if (confirm("Reiniciar TODO o progresso? Esta ação não pode ser desfeita.")) {
    localStorage.removeItem(SK);
    S = defaultState();
    save();
    updateAllUI();
    toast("Jogo reiniciado", "info");
  }
}

// JANELA / AVISO
function showModal(html) { document.getElementById("modal-body").innerHTML = html; document.getElementById("overlay").classList.add("open"); }
function closeModal() { document.getElementById("overlay").classList.remove("open"); }
function toast(msg, type="ok", dur=2500) { const el=document.getElementById("toast"); el.textContent=msg; el.className="toast show " + type; clearTimeout(el._t); el._t=setTimeout(()=>{ el.className="toast"; },dur); }
function showLvlUp(n) { const el=document.getElementById("lvlup"); el.innerHTML=`⚡ NÍVEL ${n} ⚡<br><span style="font-size:12px;">${rank().name}</span>`; el.className="lvlup show"; setTimeout(()=>{ el.className="lvlup"; },2000); if(window.navigator.vibrate) window.navigator.vibrate([100,50,100]); }

// INICIALIZAÇÃO
updateAllUI();
renderHome();
