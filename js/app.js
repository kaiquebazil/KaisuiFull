// ════════════════════════════════════════
// SIMPLIFIED KAISUI APP - DETAILED ROUTINE
// ════════════════════════════════════════

const SK = "kaisui_detailed_v1";

const RANKS = [
  { min: 0, name: "The Fearful" },
  { min: 1, name: "The Apprentice" },
  { min: 10, name: "The Nomad" },
  { min: 25, name: "High-Level Engineer" },
  { min: 50, name: "Shadow Runner" },
  { min: 100, name: "KAISUI LEGEND" },
];

const DAILY_TASKS = [
  { id: 1, name: "Wake up 05:00 no snooze", xp: 200, stat: "dis", icon: "⏰" },
  { id: 3, name: "Plan 3 main tasks", xp: 100, stat: "dis", icon: "📋" },
  { id: 5, name: "Coding (1h Deep Work)", xp: 250, stat: "int", icon: "💻" },
  { id: 6, name: "University Review (30min)", xp: 150, stat: "int", icon: "🎓" },
  { id: 7, name: "Anki (flashcards)", xp: 200, stat: "int", icon: "🧠" },
  { id: 11, name: "10 Push-ups after waking", xp: 80, stat: "for", icon: "💪" },
  { id: 13, name: "English Immersion (Podcast/Video)", xp: 100, stat: "dis", icon: "🎧" },
  { id: 14, name: "Handstand Workout", xp: 250, stat: "for", icon: "🤸" },
  { id: 15, name: "Drink 3L Water", xp: 100, stat: "for", icon: "💧" },
  { id: 20, name: "Sleep before 22:30", xp: 150, stat: "dis", icon: "🌙" },
];

const BAD_HABITS = [
  { id: "b1", name: "Social Media > 1h", xpL: 200, hpL: 20 },
  { id: "b2", name: "Woke up after 08:00", xpL: 300, hpL: 30 },
  { id: "b3", name: "Skipped workout", xpL: 250, hpL: 25 },
  { id: "b4", name: "Junk food", xpL: 150, hpL: 15 },
  { id: "b5", name: "Pornography", xpL: 500, hpL: 50 },
  { id: "b6", name: "Alcohol", xpL: 400, hpL: 40 },
  { id: "b7", name: "Procrastinated", xpL: 300, hpL: 30 },
];

const MISSIONS = [
  { id: 1, name: "Wake up at 5am for 7 days", tier: "easy", xp: 300, coins: 50, stat: "dis", target: 7, unit: "days" },
  { id: 2, name: "Read 20 technical pages", tier: "easy", xp: 150, coins: 25, stat: "int", target: 20, unit: "pages" },
  { id: 3, name: "100 push-ups in a day", tier: "easy", xp: 200, coins: 30, stat: "for", target: 100, unit: "push-ups" },
  { id: 4, name: "3 LeetCode problems", tier: "easy", xp: 250, coins: 40, stat: "int", target: 3, unit: "problems" },
  { id: 5, name: "Cold shower for 3 days", tier: "easy", xp: 200, coins: 40, stat: "dis", target: 3, unit: "days" },
  { id: 6, name: "GitHub project from scratch", tier: "normal", xp: 600, coins: 120, stat: "int" },
  { id: 7, name: "30 days without social media", tier: "normal", xp: 800, coins: 200, stat: "dis", target: 30, unit: "days" },
  { id: 8, name: "Read an entire book in English", tier: "normal", xp: 700, coins: 150, stat: "int" },
  { id: 9, name: "Keep 5am routine for 30 days", tier: "hard", xp: 2500, coins: 500, stat: "dis", target: 30, unit: "days" },
  { id: 10, name: "Hold free handstand for 5 seconds", tier: "hard", xp: 3000, coins: 600, stat: "for", target: 1, unit: "achievement" },
];

const HANDSTAND_PROGRESSIONS = [
  { id: "hs1", name: "Pike Plank (30s)", xp: 50 },
  { id: "hs2", name: "Pike Push-ups (8 reps)", xp: 50 },
  { id: "hs3", name: "Wall Walk (3x)", xp: 50 },
  { id: "hs4", name: "Wall Handstand (30s)", xp: 100 },
  { id: "hs5", name: "Wall Handstand (60s)", xp: 100 },
  { id: "hs6", name: "Wall Handstand Shoulder Taps", xp: 150 },
  { id: "hs7", name: "Free Handstand Kick-ups (5 tries)", xp: 200 },
  { id: "hs8", name: "Free Handstand (5s)", xp: 300 },
  { id: "hs9", name: "Free Handstand (10s+)", xp: 500 },
  { id: "hs10", name: "Handstand Push-ups (1 rep)", xp: 1000 },
];

// DETAILED ROUTINE STEPS - STARTING AT 05:00
const ROUTINE_STEPS = [
  // ========== MORNING BLOCK (05:00 - 07:30) ==========
  { id: "r001", time: "05:00", text: "Wake up immediately - no snooze, no excuses", detail: "Get out of bed before your brain negotiates. This is your first victory." },
  { id: "r002", time: "05:01", text: "Go to bathroom - wash face with cold water", detail: "Cold water wakes up circulation. Scrub well." },
  { id: "r003", time: "05:03", text: "Drink 500ml of water (full glass)", detail: "Drink everything at once. Rehydrate after sleep." },
  { id: "r004", time: "05:05", text: "Brush teeth (2 minutes + floss)", detail: "Complete oral hygiene. Fresh start." },
  { id: "r005", time: "05:07", text: "Light stretch routine", detail: "Neck rotations (10x), shoulder circles (10x), trunk twist (30s each), deep squat hold (10s)" },
  { id: "r006", time: "05:12", text: "CORE ACTIVATION (weak abs focus)", detail: "Front plank 45s / Side planks 30s each / Leg raises 15 reps / Hollow body 30s" },
  { id: "r007", time: "05:20", text: "10 push-ups (perfect form)", detail: "Chest to floor. Full range of motion." },
  { id: "r008", time: "05:22", text: "Quick shower (5 min)", detail: "End with 30s cold if possible." },
  { id: "r009", time: "05:27", text: "Get dressed (clothes prepared night before)", detail: "No decision fatigue. Everything ready." },
  { id: "r010", time: "05:30", text: "Plan your 3 main tasks for the day", detail: "Write in journal. Order by IMPACT, not urgency." },
  { id: "r011", time: "05:35", text: "Review yesterday (2 min)", detail: "What worked? What didn't? One quick lesson." },
  { id: "r012", time: "05:37", text: "Anki flashcards (25 min FOCUSED)", detail: "Do it OUT LOUD. No distractions." },
  { id: "r013", time: "06:02", text: "Water break (200ml) + neck stretch", detail: "Hydrate. Relax neck muscles." },
  { id: "r014", time: "06:05", text: "Deep Work: CODING (25 min)", detail: "Timer on. Phone in another room. ONE task only." },
  { id: "r015", time: "06:30", text: "Water break (200ml) + walk 1 min", detail: "Move your body. Rest eyes." },
  { id: "r016", time: "06:32", text: "English passive immersion - podcast ON", detail: "Tech/BBC/History podcast in English. Medium volume." },
  { id: "r017", time: "06:42", text: "Prepare breakfast + pack bag", detail: "Bread + black coffee (you'll eat at work). Pack: water bottle (1L), earphones (ESSENTIAL), charger, healthy snack." },
  { id: "r018", time: "06:50", text: "Second deep work block (25 min coding)", detail: "Finish your 1 hour of coding." },
  { id: "r019", time: "07:15", text: "Final check before leaving", detail: "Bag? Water bottle? Earphones? Keys?" },
  { id: "r020", time: "07:17", text: "Brush teeth (quick refresh)", detail: "Fresh breath for the day." },
  { id: "r021", time: "07:20", text: "Leave home - earphones ALREADY ON", detail: "English podcast starts NOW." },
  { id: "r022", time: "07:30", text: "In the car - English podcast/audiobook", detail: "Drive focused + English immersion." },
  
  // ========== WORK & DRIVING BLOCK (07:45 - 17:00) ==========
  { id: "r023", time: "07:45", text: "Arrive at work - park, breathe 3x", detail: "Transition from commute to work mode." },
  { id: "r024", time: "08:00", text: "Breakfast at work (bread + black coffee)", detail: "Eat without phone. 10 minutes." },
  { id: "r025", time: "08:10", text: "Prepare earphones - English ON", detail: "Podcast/BBC/News in English." },
  { id: "r026", time: "08:15", text: "WORK STARTS - delivering while driving", detail: "English in earphones ALL DAY. Alternate: podcast 30min / music 15min / audiobook 30min" },
  { id: "r027", time: "12:00", text: "Lunch (clean meal + 300ml water)", detail: "No fried food, no soda. Eat clean." },
  { id: "r028", time: "12:30", text: "Back to work - continue English immersion", detail: "Earphones back on." },
  { id: "r029", time: "16:00", text: "Work ends (or overtime - max 1h)", detail: "WORKOUT CANNOT BE SACRIFICED." },
  { id: "r030", time: "17:00", text: "Leave work (flexible) - earphones ON", detail: "English continues on the way home." },
  
  // ========== HANDSTAND & CORE BLOCK (17:00 - 18:30) ==========
  { id: "r031", time: "17:15", text: "Arrive home - drink 300ml water immediately", detail: "Rehydrate. Change clothes." },
  { id: "r032", time: "17:20", text: "Wrist mobility (2 min)", detail: "Circles, flexion, extension. Essential for handstand." },
  { id: "r033", time: "17:22", text: "Shoulder mobility (3 min)", detail: "Arm circles, triceps stretch, chest opening." },
  { id: "r034", time: "17:25", text: "CORE WORK (priority - weak abs)", detail: "Front plank 60s / Side planks 45s each / Crunches 20 reps / Leg raises 15 reps / Hollow body 45s / Superman 30s" },
  { id: "r035", time: "17:35", text: "Handstand progression training", detail: "Follow your current level in the app. Mark each progression." },
  { id: "r036", time: "18:10", text: "Cool down - stretch wrists, shoulders, back", detail: "5 minutes of gentle stretching." },
  { id: "r037", time: "18:15", text: "Mark handstand workout in app", detail: "Log your progress. Click the button." },
  { id: "r038", time: "18:18", text: "Post-workout shower", detail: "Quick shower." },
  
  // ========== EVENING BLOCK (18:30 - 22:30) ==========
  { id: "r039", time: "18:35", text: "Post-workout snack (protein)", detail: "Eggs, whey, or yogurt. Drink 200ml water." },
  { id: "r040", time: "19:00", text: "Light dinner (clean meal)", detail: "Protein + vegetables. No screens while eating." },
  { id: "r041", time: "19:25", text: "Drink 200ml water", detail: "Stay hydrated." },
  { id: "r042", time: "19:30", text: "University review (30 min FOCUSED)", detail: "Single pomodoro. No distractions." },
  { id: "r043", time: "20:00", text: "ACTIVE ENGLISH - speak out loud", detail: "Roleplay from app OR record 1 minute speaking about your day in English." },
  { id: "r044", time: "20:15", text: "Water break (200ml)", detail: "Hydrate." },
  { id: "r045", time: "20:20", text: "Journaling", detail: "✓ What went well today? ✓ What did I learn in English? ✓ Handstand progress? ✓ 3 tasks for tomorrow" },
  { id: "r046", time: "20:35", text: "Prepare for tomorrow", detail: "Clothes ready. Bag packed. Earphones charged." },
  { id: "r047", time: "20:40", text: "Final 200ml water (reach 3L goal)", detail: "Complete your hydration for the day." },
  { id: "r048", time: "20:45", text: "Disconnect - no screens", detail: "Phone on silent. Dim lights." },
  { id: "r049", time: "21:00", text: "Light reading (10 pages - English preferred)", detail: "Relax your mind." },
  { id: "r050", time: "21:15", text: "Prepare for sleep", detail: "Brush teeth, wash face, light stretch in bed." },
  { id: "r051", time: "21:25", text: "In bed - lights off", detail: "Breathe deeply 5x. Think of 1 victory today. Be grateful." },
  { id: "r052", time: "21:30", text: "SLEEP (aim for 22:30 or earlier)", detail: "Recovery is sacred." },
];

// DEFAULT STATE
function defaultState() {
  return {
    xp: 0, hp: 100, maxHp: 100, coins: 100, xpToday: 0,
    stats: { for: 0, int: 0, dis: 0, cha: 0 },
    completedDaily: [],
    completedMissions: [],
    activeMissions: [],
    missionProgress: {},
    handstandProgress: [],
    handstandWorkoutStreak: 0,
    handstandLastWorkoutDate: null,
    treinos100: [],
    streak: 0,
    maxStreak: 0,
    lastDate: new Date().toDateString(),
    globalStreak: 0,
    globalMaxStreak: 0,
    lastStreakDate: null,
    routineChecklist: [],
    routineLastCompleted: null,
  };
}

let S = (() => {
  try {
    const r = JSON.parse(localStorage.getItem(SK));
    if (!r) return defaultState();
    const today = new Date().toDateString();
    if (r.lastDate !== today) {
      r.completedDaily = [];
      r.xpToday = 0;
      r.lastDate = today;
      r.routineChecklist = [];
    }
    if (!r.handstandProgress) r.handstandProgress = [];
    if (!r.handstandWorkoutStreak) r.handstandWorkoutStreak = 0;
    if (!r.handstandLastWorkoutDate) r.handstandLastWorkoutDate = null;
    if (!r.treinos100) r.treinos100 = [];
    if (!r.streak) r.streak = 0;
    if (!r.maxStreak) r.maxStreak = 0;
    if (!r.globalStreak) r.globalStreak = 0;
    if (!r.globalMaxStreak) r.globalMaxStreak = 0;
    if (!r.lastStreakDate) r.lastStreakDate = null;
    if (!r.activeMissions) r.activeMissions = [];
    if (!r.missionProgress) r.missionProgress = {};
    if (!r.routineChecklist) r.routineChecklist = [];
    if (!r.routineLastCompleted) r.routineLastCompleted = null;
    return r;
  } catch(e) { return defaultState(); }
})();

function save() { localStorage.setItem(SK, JSON.stringify(S)); }

// HELPERS
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
  if (S.hp === 0) { const loss = Math.floor(xpIn() * 0.5); S.xp = Math.max(0, S.xp - loss); S.hp = S.maxHp; toast("⚠️ DEATH — " + loss + " XP LOST", "fail", 4000); }
  save(); updateAllUI();
}

function recoverHP() {
  if (S.coins < 50) { toast("❌ Need 50 coins", "fail", 3000); return; }
  S.coins -= 50;
  modHP(20);
  toast("◈ +20 HP recovered (50 coins)", "ok");
}

// NAVIGATION
let cur = "home";
function goTo(name) {
  cur = name;
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  const sc = document.getElementById("screen-" + name);
  if (sc) sc.classList.add("active");
  const nb = document.getElementById("nav-" + name);
  if (nb) nb.classList.add("active");
  renderScreen(name);
}

function renderScreen(n) {
  if (n === "home") renderHome();
  if (n === "habits") renderHabits();
  if (n === "missions") renderMissions();
  if (n === "handstand") renderHandstand();
  if (n === "workouts") renderWorkouts();
  if (n === "profile") renderProfile();
  if (n === "routine") renderRoutine();
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
  const hmissions = document.getElementById("h-missions"); if(hmissions) hmissions.textContent = S.completedMissions.length;
  const hworkouts = document.getElementById("h-workouts"); if(hworkouts) hworkouts.textContent = S.treinos100.length;
  const mult = getMultiplier();
  const multDiv = document.getElementById("multiplier-display");
  if(multDiv) multDiv.innerHTML = mult>1 ? `<span class="multiplier-badge">🔥 ${mult}x MULTIPLIER (${S.globalStreak} days)</span>` : `<span style="font-size:11px;">Complete 3+ days for multiplier</span>`;
  
  // Update routine progress in home screen if visible
  if (cur === "routine") updateRoutineProgressUI();
}

function renderHome() {
  const tl = document.getElementById("h-task-list");
  if(tl) tl.innerHTML = DAILY_TASKS.slice(0,5).map(t => {
    const d = S.completedDaily.includes(t.id);
    return `<div class="task-row ${d?'done':''}" onclick="toggleDaily(${t.id})"><div class="task-check">${d?'✓':''}</div><div class="task-label">${t.icon} ${t.name}</div><div class="task-xp">+${t.xp} XP</div></div>`;
  }).join("");
  const hl = document.getElementById("h-habits-list");
  if(hl) hl.innerHTML = BAD_HABITS.slice(0,3).map(h => `<div class="bad-row" onclick="applyBad('${h.id}')"><span>☠ ${h.name}</span><span style="color:var(--red)">-${h.xpL} XP</span></div>`).join("");
}

function renderHabits() {
  const dl = document.getElementById("daily-list");
  if(dl) dl.innerHTML = DAILY_TASKS.map(t => {
    const d = S.completedDaily.includes(t.id);
    return `<div class="task-row ${d?'done':''}" onclick="toggleDaily(${t.id})"><div class="task-check">${d?'✓':''}</div><div class="task-label">${t.icon} ${t.name}</div><div class="task-xp">+${t.xp} XP</div></div>`;
  }).join("");
  const hv = document.getElementById("hp-val"); if(hv) hv.textContent = S.hp;
  const hb = document.getElementById("hp-bar"); if(hb) hb.style.width = (S.hp/S.maxHp)*100+"%";
}

function renderMissions() {
  const allMissions = MISSIONS;
  const active = allMissions.filter(m => S.activeMissions.includes(m.id) && !S.completedMissions.includes(m.id));
  const available = allMissions.filter(m => !S.activeMissions.includes(m.id) && !S.completedMissions.includes(m.id));
  const activeDiv = document.getElementById("active-missions-list");
  if(activeDiv) activeDiv.innerHTML = active.map(m => {
    const progress = S.missionProgress[m.id] || 0;
    const percent = m.target ? (progress/m.target)*100 : 0;
    return `<div class="card" style="cursor:pointer" onclick="openMission(${m.id})">
      <div style="display:flex; justify-content:space-between;"><strong>${m.name}</strong><span style="color:var(--gold)">+${m.coins}◈</span></div>
      <div style="font-size:12px; color:var(--blue);">+${m.xp} XP</div>
      ${m.target ? `<div class="prog-bar" style="margin:8px 0;"><div class="prog-fill" style="width:${percent}%;"></div></div><div style="font-size:11px;">${progress}/${m.target} ${m.unit}</div>` : ''}
      <button class="btn btn-primary" style="margin-top:8px;" onclick="event.stopPropagation();completeMission(${m.id})">✓ COMPLETE</button>
    </div>`;
  }).join("");
  const availDiv = document.getElementById("available-missions-list");
  if(availDiv) availDiv.innerHTML = available.map(m => `<div class="card" style="cursor:pointer" onclick="acceptMission(${m.id})">
    <div style="display:flex; justify-content:space-between;"><strong>${m.name}</strong><span style="color:var(--gold)">+${m.coins}◈</span></div>
    <div style="font-size:12px;">+${m.xp} XP · ${m.tier.toUpperCase()}</div>
    ${m.target ? `<div style="font-size:11px; color:var(--muted);">Target: ${m.target} ${m.unit}</div>` : ''}
  </div>`).join("");
}

function renderHandstand() {
  const list = document.getElementById("handstand-list");
  if(list) list.innerHTML = HANDSTAND_PROGRESSIONS.map(p => {
    const done = S.handstandProgress.includes(p.id);
    return `<div class="task-row ${done?'done':''}" onclick="toggleHandstand('${p.id}', ${p.xp})"><div class="task-check">${done?'✓':''}</div><div class="task-label">🤸 ${p.name}</div><div class="task-xp">+${p.xp} XP</div></div>`;
  }).join("");
  const streakEl = document.getElementById("workout-streak");
  if(streakEl) streakEl.textContent = S.handstandWorkoutStreak;
}

function renderWorkouts() {
  const total = S.treinos100.length;
  document.getElementById("w100-count").textContent = total;
  document.getElementById("w100-bar").style.width = total + "%";
  document.getElementById("w100-streak").textContent = S.streak;
  document.getElementById("w100-max").textContent = S.maxStreak;
  const msgs = ["🚀 Start your journey!","⚡ Consistency is everything!","🔥 You're on fire!","💀 Unstoppable!","👑 Legend in the making!"];
  document.getElementById("w100-message").innerHTML = msgs[Math.min(Math.floor(total/25),4)];
  const grid = document.getElementById("w100-grid");
  if(grid) grid.innerHTML = Array.from({length:100}, (_,i) => {
    const n = i+1;
    const done = S.treinos100.includes(n);
    const milestone = [10,25,50,75,100].includes(n);
    return `<div style="aspect-ratio:1; background:${done?'rgba(124,58,237,0.3)':'var(--card2)'}; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:10px; cursor:pointer; border:${milestone?'1px solid var(--gold)':'none'}" onclick="logWorkout(${n})">${n}</div>`;
  }).join("");
}

function renderProfile() {
  document.getElementById("p-name").textContent = "KAISUI";
  document.getElementById("p-rank").textContent = rank().name.toUpperCase();
  const ps = document.getElementById("p-stats");
  if(ps) ps.innerHTML = `
    <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span>⚔️ STRENGTH</span><span>${S.stats.for||0}</span></div>
    <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span>🧠 INTELLIGENCE</span><span>${S.stats.int||0}</span></div>
    <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span>⏰ DISCIPLINE</span><span>${S.stats.dis||0}</span></div>
    <div style="display:flex; justify-content:space-between;"><span>💬 CHARISMA</span><span>${S.stats.cha||0}</span></div>
  `;
}

function updateRoutineProgressUI() {
  const completed = S.routineChecklist || [];
  const total = ROUTINE_STEPS.length;
  const percent = Math.floor((completed.length / total) * 100);
  const percentEl = document.getElementById("routine-progress-percent");
  const barEl = document.getElementById("routine-progress-bar");
  const completedEl = document.getElementById("routine-completed-count");
  const totalEl = document.getElementById("routine-total-count");
  if(percentEl) percentEl.textContent = percent + "%";
  if(barEl) barEl.style.width = percent + "%";
  if(completedEl) completedEl.textContent = completed.length;
  if(totalEl) totalEl.textContent = total;
}

function renderRoutine() {
  const container = document.getElementById("routine-container");
  if(!container) return;
  const completed = S.routineChecklist || [];
  
  // Group by blocks
  const morning = ROUTINE_STEPS.filter(s => s.time.includes("05:") || s.time.includes("06:") || s.time.includes("07:"));
  const work = ROUTINE_STEPS.filter(s => s.time.includes("08:") || s.time.includes("12:") || s.time.includes("16:") || s.time.includes("17:"));
  const handstandBlock = ROUTINE_STEPS.filter(s => s.time.includes("17:") && (s.text.includes("Handstand") || s.text.includes("CORE") || s.text.includes("wrist") || s.text.includes("shoulder")));
  const evening = ROUTINE_STEPS.filter(s => s.time.includes("18:") || s.time.includes("19:") || s.time.includes("20:") || s.time.includes("21:"));
  
  container.innerHTML = `
    <div class="time-block">
      <div class="time-title">🌅 MORNING RITUAL (05:00 - 07:30)</div>
      ${morning.map(s => `
        <div class="routine-item ${completed.includes(s.id)?'done':''}" onclick="toggleRoutine('${s.id}')">
          <div class="task-check">${completed.includes(s.id)?'✓':''}</div>
          <div class="routine-time">${s.time}</div>
          <div class="routine-text">${s.text}</div>
        </div>
        <div class="routine-detail">💡 ${s.detail}</div>
      `).join('')}
    </div>
    
    <div class="time-block">
      <div class="time-title">💼 WORK & DRIVING (07:45 - 17:00)</div>
      ${work.map(s => `
        <div class="routine-item ${completed.includes(s.id)?'done':''}" onclick="toggleRoutine('${s.id}')">
          <div class="task-check">${completed.includes(s.id)?'✓':''}</div>
          <div class="routine-time">${s.time}</div>
          <div class="routine-text">${s.text}</div>
        </div>
        <div class="routine-detail">💡 ${s.detail}</div>
      `).join('')}
    </div>
    
    <div class="time-block">
      <div class="time-title">🤸 HANDSTAND & CORE TRAINING (17:00 - 18:30)</div>
      ${handstandBlock.map(s => `
        <div class="routine-item ${completed.includes(s.id)?'done':''}" onclick="toggleRoutine('${s.id}')">
          <div class="task-check">${completed.includes(s.id)?'✓':''}</div>
          <div class="routine-time">${s.time}</div>
          <div class="routine-text">${s.text}</div>
        </div>
        <div class="routine-detail">💡 ${s.detail}</div>
      `).join('')}
    </div>
    
    <div class="time-block">
      <div class="time-title">🌙 EVENING ROUTINE (18:30 - 22:30)</div>
      ${evening.map(s => `
        <div class="routine-item ${completed.includes(s.id)?'done':''}" onclick="toggleRoutine('${s.id}')">
          <div class="task-check">${completed.includes(s.id)?'✓':''}</div>
          <div class="routine-time">${s.time}</div>
          <div class="routine-text">${s.text}</div>
        </div>
        <div class="routine-detail">💡 ${s.detail}</div>
      `).join('')}
    </div>
  `;
  
  updateRoutineProgressUI();
}

// ACTIONS
function toggleDaily(id) {
  if (S.completedDaily.includes(id)) {
    const t = DAILY_TASKS.find(x=>x.id===id);
    S.completedDaily = S.completedDaily.filter(x=>x!==id);
    addXP(-t.xp, null);
    toast("❌ " + t.name + " unchecked", "fail");
  } else {
    S.completedDaily.push(id);
    const t = DAILY_TASKS.find(x=>x.id===id);
    addXP(t.xp, t.stat);
    updateGlobalStreak();
    toast("✓ +" + Math.floor(t.xp*getMultiplier()) + " XP — " + t.name, "ok");
    if (S.completedDaily.length === DAILY_TASKS.length) {
      setTimeout(() => { addXP(500, "dis"); toast("⚡ COMPLETE! +500 XP BONUS", "ok", 4000); }, 500);
    }
  }
  save(); updateAllUI();
}

function applyBad(id) {
  const h = BAD_HABITS.find(x=>x.id===id);
  addXP(-h.xpL, null);
  modHP(-h.hpL);
  toast("☠ " + h.name + " — -" + h.xpL + " XP -" + h.hpL + " HP", "fail", 3000);
}

function acceptMission(id) {
  if (S.activeMissions.length >= 3) { toast("⚠️ Max 3 active missions", "fail"); return; }
  if (S.activeMissions.includes(id)) return;
  S.activeMissions.push(id);
  S.missionProgress[id] = 0;
  save();
  toast("⚡ Mission accepted!", "ok");
  renderMissions();
}

function openMission(id) {
  const m = MISSIONS.find(x=>x.id===id);
  if(!m) return;
  showModal(`
    <div class="stat-value" style="font-size:18px;">${m.name}</div>
    <div style="margin:12px 0;">+${m.xp} XP · +${m.coins} coins · ${m.tier.toUpperCase()}</div>
    ${m.target ? `<div>Target: ${m.target} ${m.unit}</div>` : ''}
    <button class="btn btn-primary" onclick="acceptMission(${m.id});closeModal()" style="margin-top:12px;">⚡ ACCEPT</button>
  `);
}

function completeMission(id) {
  const m = MISSIONS.find(x=>x.id===id);
  if (!m) return;
  if (m.target && (S.missionProgress[id]||0) < m.target) {
    toast(`⚠️ Need ${m.target - (S.missionProgress[id]||0)} more ${m.unit}`, "fail");
    return;
  }
  S.completedMissions.push(id);
  S.activeMissions = S.activeMissions.filter(x=>x!==id);
  delete S.missionProgress[id];
  S.coins += m.coins;
  addXP(m.xp, m.stat);
  save();
  toast("⚡ MISSION COMPLETE! +" + m.xp + " XP +" + m.coins + " coins", "ok", 4000);
  renderMissions();
}

function toggleHandstand(id, xp) {
  if (S.handstandProgress.includes(id)) {
    S.handstandProgress = S.handstandProgress.filter(x=>x!==id);
    addXP(-xp, null);
    toast("Progress unchecked", "fail");
  } else {
    S.handstandProgress.push(id);
    addXP(xp, "for");
    toast("✓ " + HANDSTAND_PROGRESSIONS.find(p=>p.id===id).name + " +" + Math.floor(xp*getMultiplier()) + " XP", "ok");
  }
  save(); renderHandstand();
}

function markHandstandWorkout() {
  const today = new Date().toDateString();
  if (S.handstandLastWorkoutDate === today) { toast("Already marked today's workout!", "fail"); return; }
  if (S.handstandLastWorkoutDate === new Date(Date.now()-86400000).toDateString()) S.handstandWorkoutStreak++;
  else S.handstandWorkoutStreak = 1;
  S.handstandLastWorkoutDate = today;
  addXP(100, "for");
  toast("🔥 Handstand workout logged! +100 XP", "ok");
  save();
  renderHandstand();
}

function logWorkout(n) {
  if (S.treinos100.includes(n)) { toast("Already logged", "fail"); return; }
  const next = S.treinos100.length + 1;
  if (n !== next) { toast("Log in order! Next: #" + next, "fail"); return; }
  S.treinos100.push(n);
  S.streak++;
  S.maxStreak = Math.max(S.maxStreak, S.streak);
  addXP(100, "for");
  updateGlobalStreak();
  save();
  if ([10,25,50,75,100].includes(n)) {
    toast("🏆 MILESTONE! +500 XP BONUS", "ok", 4000);
    addXP(500, "for");
  } else toast("Workout #" + n + " ✓ +" + Math.floor(100*getMultiplier()) + " XP", "ok");
  renderWorkouts();
}

function toggleRoutine(id) {
  let completed = S.routineChecklist || [];
  if (completed.includes(id)) {
    completed = completed.filter(x=>x!==id);
    toast("Step unchecked", "fail", 1000);
  } else {
    completed.push(id);
    addXP(5, "dis");
    toast("✓ +5 XP - " + ROUTINE_STEPS.find(s=>s.id===id)?.text, "ok", 1500);
  }
  S.routineChecklist = completed;
  save();
  renderRoutine();
}

function completeRoutineDay() {
  if ((S.routineChecklist||[]).length < ROUTINE_STEPS.length) {
    toast("⚠️ Complete all " + ROUTINE_STEPS.length + " steps first!", "fail", 3000);
    return;
  }
  const today = new Date().toDateString();
  if (S.routineLastCompleted === today) { toast("Already claimed today's bonus!", "info", 2000); return; }
  addXP(1000, "dis");
  S.coins += 200;
  S.routineLastCompleted = today;
  save();
  toast("🔥 FULL ROUTINE COMPLETED! +1000 XP +200 COINS", "ok", 4000);
  updateGlobalStreak();
  updateAllUI();
}

function resetRoutine() {
  if (confirm("Reset today's routine? All progress will be lost.")) {
    S.routineChecklist = [];
    save();
    renderRoutine();
    toast("Routine reset", "info");
  }
}

function resetGame() {
  if (confirm("Reset ALL progress? This cannot be undone.")) {
    localStorage.removeItem(SK);
    S = defaultState();
    save();
    updateAllUI();
    toast("Game reset", "info");
  }
}

// MODAL / TOAST
function showModal(html) { document.getElementById("modal-body").innerHTML = html; document.getElementById("overlay").classList.add("open"); }
function closeModal() { document.getElementById("overlay").classList.remove("open"); }
function toast(msg, type="ok", dur=2500) { const el=document.getElementById("toast"); el.textContent=msg; el.className="toast show " + type; clearTimeout(el._t); el._t=setTimeout(()=>{ el.className="toast"; },dur); }
function showLvlUp(n) { const el=document.getElementById("lvlup"); el.innerHTML=`⚡ LEVEL ${n} ⚡<br><span style="font-size:12px;">${rank().name}</span>`; el.className="lvlup show"; setTimeout(()=>{ el.className="lvlup"; },2000); if(window.navigator.vibrate) window.navigator.vibrate([100,50,100]); }

// INIT
updateAllUI();
renderHome();