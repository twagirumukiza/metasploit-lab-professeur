const modules=[
{id:"01",title:"Configuration du SET",tag:"Fondamentaux",desc:"Comprendre l’organisation générale du Social Engineer Toolkit et ses familles de vecteurs.",theory:"Le SET regroupe plusieurs familles de scénarios d’ingénierie sociale. Le parcours commence par la lecture de son menu et par la vérification de l’environnement pédagogique.",cmds:[
["help","Affiche l’aide du laboratoire.","À utiliser pour découvrir les commandes disponibles.","Liste des commandes pédagogiques."],
["set --status","Vérifie que le laboratoire est en mode simulation.","À utiliser au début d’une séance pour confirmer que rien de réel ne sera exécuté.","Safety mode: ON · Execution engine: INERT"],
["set menu","Présente les familles de vecteurs étudiées.","À utiliser pour cartographier le parcours avant une analyse.","Phishing · Web · Media · HID · etc."]
],scenario:["Vérifier l’environnement","Cartographier les vecteurs","Consulter l’aide"],seq:["set --status","set menu","help"],quiz:["Pourquoi vérifier l’environnement ?",["Confirmer le mode simulation","Essayer la commande une attaque"],0]},
{id:"02",title:"Spear-phishing",tag:"Email",desc:"Analyser un courriel ciblé fictif, identifier ses signaux et produire un signalement.",theory:"Le spear-phishing vise une cible ou un contexte précis. L’objectif pédagogique est de reconnaître les indices, de ne pas interagir avec le contenu suspect et de transmettre un signalement.",cmds:[
["mail inspect sample-01","Inspecte un message fictif.","À utiliser avant toute interaction avec un message suspect.","Expéditeur · objet · pièce jointe · indicateurs."],
["mail indicators sample-01","Extrait les signaux d’alerte.","À utiliser après l’inspection pour documenter le risque.","Urgence · pièce jointe inattendue · contexte incohérent."],
["mail report sample-01","Crée un signalement pédagogique.","À utiliser lorsque les indicateurs justifient une remontée.","PHISHING_SIMULATED · QUARANTINE."]
],scenario:["Inspecter le message","Qualifier les indicateurs","Signaler"],seq:["mail inspect sample-01","mail indicators sample-01","mail report sample-01"],quiz:["Quel signal est particulièrement suspect ?",["Une urgence inattendue","Un message attendu sans anomalie"],0]},
{id:"03",title:"Vecteurs d’attaque web",tag:"Web",desc:"Étudier les familles web citées dans le document et analyser des événements inertes.",theory:"Le document présente notamment Java Applet, Metasploit Browser Exploit, Credential Harvester, Tabnabbing, Man Left in the Middle, Web Jacking et Multi-Attack Web Method. La plateforme les étudie sous l’angle de l’analyse et de la défense.",cmds:[
["web list","Liste les vecteurs web.","À utiliser avant une analyse pour connaître les familles couvertes.","Liste des vecteurs web."],
["web inspect tabnabbing","Analyse un événement de tabnabbing fictif.","À utiliser pour étudier les signaux observables.","TABNABBING_SIMULATED · demande d’identifiants bloquée."],
["web inspect web-jacking","Analyse un événement web-jacking fictif.","À utiliser pour comprendre le risque sans navigation réelle.","WEB_JACKING_SIMULATED · navigation: NONE."],
["web report","Signale l’événement.","À utiliser après l’analyse.","Web event reported."]
],scenario:["Lister les vecteurs","Analyser tabnabbing","Analyser web jacking","Signaler"],seq:["web list","web inspect tabnabbing","web inspect web-jacking","web report"],quiz:["Que faire devant une page suspecte ?",["Vérifier son origine et interrompre l’interaction","Saisir ses identifiants"],0]},
{id:"04",title:"Credential Harvester",tag:"Identifiants",desc:"Comprendre le principe de détection d’un formulaire sensible sans collecter de données réelles.",theory:"Le document décrit le clonage d’un site et la détection des champs username/password. Dans la plateforme, tout est fictif : aucune donnée réelle n’est transmise ou stockée.",cmds:[
["harvester inspect-form","Inspecte un formulaire fictif.","À utiliser pour identifier les champs sensibles et le contexte.","CREDENTIAL_CAPTURE_SIMULATED · transmission NONE."],
["harvester status","Vérifie l’état de la simulation.","À utiliser pour confirmer l’absence de collecte réelle.","Transmission: NONE · Storage: NONE."],
["harvester report","Signale l’événement.","À utiliser après confirmation du risque.","Credential-harvesting event reported."]
],scenario:["Inspecter le formulaire","Vérifier l’absence de collecte","Signaler"],seq:["harvester inspect-form","harvester status","harvester report"],quiz:["Que signifie CREDENTIAL_CAPTURE_SIMULATED ?",["Une simulation sans transmission ni stockage","Des mots de passe réels"],0]},
{id:"05",title:"Générateur de médias infectés",tag:"USB",desc:"Inspecter un support fictif, l’isoler et documenter le risque.",theory:"Le document traite le vecteur des médias infectés. La plateforme transforme ce contenu en exercice de réponse : identifier un comportement suspect, isoler le support et signaler.",cmds:[
["usb inspect media-01","Inspecte un support simulé.","À utiliser avant toute interaction avec un support inconnu.","Autorun simulé · PAYLOAD_SIMULATED · exécution bloquée."],
["usb isolate media-01","Enregistre l’isolement.","À utiliser lorsqu’un support présente un comportement suspect.","Support isolé · aucune exécution."],
["usb report","Crée le signalement.","À utiliser après l’isolement.","Media event reported."]
],scenario:["Inspecter le support","Isoler","Signaler"],seq:["usb inspect media-01","usb isolate media-01","usb report"],quiz:["Face à un support inconnu ?",["Isoler et analyser","Essayer la commande automatiquement"],0]},
{id:"06",title:"Teensy USB HID",tag:"Périphériques",desc:"Analyser un comportement HID fictif et apprendre la réponse défensive.",theory:"Le document présente Teensy USB HID comme un vecteur d’émulation d’entrées clavier. Ici, seules des traces fictives sont journalisées.",cmds:[
["hid inspect device-07","Inspecte un périphérique HID simulé.","À utiliser face à un périphérique inattendu.","HID_SIMULATED · keystrokes_logged · execution BLOCKED."],
["hid analyze device-07","Analyse l’anomalie.","À utiliser après l’inspection.","Comportement HID anormal."],
["hid report","Signale l’événement.","À utiliser après l’analyse.","HID event reported."]
],scenario:["Inspecter le périphérique","Analyser","Signaler"],seq:["hid inspect device-07","hid analyze device-07","hid report"],quiz:["Pourquoi surveiller un HID inconnu ?",["Il peut générer des entrées inattendues","Il augmente toujours les performances"],0]},
{id:"07",title:"Payloads — concepts",tag:"Analyse",desc:"Étudier les propriétés d’un payload comme objet de détection, sans exécution.",theory:"Le SET permet de travailler avec des payloads dans différents scénarios. Pour éviter toute exécution offensive, la plateforme représente uniquement leurs propriétés et les contrôles de sécurité.",cmds:[
["payload list","Liste les objets simulés.","À utiliser pour découvrir les objets d’analyse.","PAYLOAD_SIMULATED · objets inertes."],
["payload inspect demo-01","Inspecte un objet fictif.","À utiliser pour comprendre sa fonction sans l’exécuter.","Execution NONE · Persistence NONE."],
["payload analyze demo-01","Analyse ses contrôles.","À utiliser pour relier objet, alerte et défense.","BLOCKED_SIMULATION."]
],scenario:["Lister les objets","Inspecter demo-01","Analyser"],seq:["payload list","payload inspect demo-01","payload analyze demo-01"],quiz:["PAYLOAD_SIMULATED signifie…",["Un objet pédagogique inerte","Un programme à exécuter"],0]},
{id:"08",title:"Reverse shell — détection",tag:"SOC",desc:"Lire une alerte réseau fictive et appliquer une réponse SOC.",theory:"Le reverse shell est étudié ici uniquement comme concept de détection. Aucun listener, shell, connexion ou mécanisme d’exploitation n’est créé.",cmds:[
["analyze reverse-shell","Analyse une alerte réseau fictive.","À utiliser pour lire les éléments importants d’un événement EDR/SOC.","REVERSE_SHELL_SIMULATED · connexion bloquée."],
["soc open-incident","Ouvre un incident pédagogique.","À utiliser lorsque le comportement suspect est confirmé.","INC-SIM-001 · HIGH."],
["soc contain","Enregistre le confinement.","À utiliser après l’ouverture de l’incident.","Containment recorded · no network action."]
],scenario:["Analyser l’alerte","Ouvrir l’incident","Confinement"],seq:["analyze reverse-shell","soc open-incident","soc contain"],quiz:["Quel signal est pertinent ?",["Une connexion sortante inhabituelle","La couleur du terminal"],0]},
{id:"09",title:"Caractéristiques supplémentaires",tag:"Gouvernance",desc:"Relier les fonctions du SET à la surveillance, la vérification et la gouvernance.",theory:"Le document mentionne notamment Mass Mailer, SMS Spoofing, Wireless Access Point, Third Party Modules, mises à jour et aide/crédits. Le parcours se concentre sur l’analyse, la vérification et les contrôles.",cmds:[
["defense map","Affiche une carte des contrôles défensifs.","À utiliser en synthèse pour relier vecteur, signal et contrôle.","Email monitor · SMS verify · Wireless verify AP."],
["set help","Affiche l’aide pédagogique.","À utiliser pour retrouver les principes du laboratoire.","Help and credits available."],
["set updates","Vérifie le jeu de données pédagogique.","À utiliser avant une séance pour vérifier sa cohérence.","Educational dataset current."]
],scenario:["Afficher la carte de défense","Consulter l’aide","Vérifier les données"],seq:["defense map","set help","set updates"],quiz:["Pourquoi vérifier les modules tiers ?",["Maîtriser leur provenance et leur risque","Supprimer les journaux"],0]}
];

const OUT={
"set --status":"[LAB] Safety mode: ON\\nExecution engine: INERT\\nNetwork: DISABLED\\nData collection: DISABLED",
"set menu":"[LAB] Spear-Phishing · Website Attack Vectors · Infectious Media · Payload concept · Mass Mailer · Teensy HID · SMS Spoofing · Wireless AP · Third Party Modules",
"help":"[LAB] help · module commands · scenario · assessment · export",
"mail inspect sample-01":"[EMAIL SIMULATED]\\nFrom: finance@example.test\\nSubject: Urgent — document à vérifier\\nAttachment: invoice_review.simulated\\nRisk indicators available for analysis.",
"mail indicators sample-01":"[ANALYSIS]\\nUrgency: HIGH\\nUnexpected attachment: YES\\nContext mismatch: YES",
"mail report sample-01":"[SOC SIMULATED]\\nPHISHING_SIMULATED\\nRecommended action: QUARANTINE",
"web list":"[WEB SIMULATED]\\nJava Applet · Browser Exploit · Credential Harvester · Tabnabbing · Man Left in the Middle · Web Jacking · Multi-Attack",
"web inspect tabnabbing":"[WEB SIMULATED]\\nTABNABBING_SIMULATED\\nCredential request: BLOCKED\\nNavigation: NONE",
"web inspect web-jacking":"[WEB SIMULATED]\\nWEB_JACKING_SIMULATED\\nNavigation: NONE\\nExecution: NONE",
"web report":"[SOC SIMULATED]\\nWeb event reported.",
"harvester inspect-form":"[FORM SIMULATED]\\nusername = student@example.test\\npassword = ••••••••••\\nCREDENTIAL_CAPTURE_SIMULATED\\nTransmission: NONE\\nStorage: NONE",
"harvester status":"[SAFE CHECK]\\nTransmission: NONE\\nStorage: NONE\\nReal credentials: NEVER COLLECTED",
"harvester report":"[SOC SIMULATED]\\nCredential-harvesting event reported.",
"usb inspect media-01":"[USB SIMULATED]\\nAutorun: PRESENT (simulated)\\nPayload: PAYLOAD_SIMULATED\\nExecution: BLOCKED",
"usb isolate media-01":"[RESPONSE SIMULATED]\\nUSB-SIMULATED isolated. No execution occurred.",
"usb report":"[SOC SIMULATED]\\nMedia event reported.",
"hid inspect device-07":"[HID SIMULATED]\\nDevice: HID-SIMULATED\\nEvent: keystrokes_logged\\nPrivilege change: NONE\\nExecution: BLOCKED",
"hid analyze device-07":"[ANALYSIS]\\nAnomalous HID behavior detected. Recommended: isolate and report.",
"hid report":"[SOC SIMULATED]\\nHID event reported.",
"payload list":"[PAYLOAD LAB]\\nPAYLOAD_SIMULATED · inert demonstration objects only",
"payload inspect demo-01":"[PAYLOAD LAB]\\nType: PAYLOAD_SIMULATED\\nExecution: NONE\\nPersistence: NONE",
"payload analyze demo-01":"[DETECTION]\\nExecution: NONE\\nPersistence: NONE\\nControl: BLOCKED_SIMULATION",
"analyze reverse-shell":"[EDR SIMULATED]\\nEvent: REVERSE_SHELL_SIMULATED\\nDestination: 203.0.113.50:4444\\nStatus: BLOCKED\\nAlert: suspicious outbound connection",
"soc open-incident":"[SOC SIMULATED]\\nINC-SIM-001 opened\\nSeverity: HIGH",
"soc contain":"[SOC SIMULATED]\\nContainment recorded\\nNetwork action: NONE",
"defense map":"[DEFENSE MAP]\\nEmail: monitor/report\\nSMS: verify sender\\nWireless: verify AP\\nThird-party: review source",
"set help":"[LAB] Help and credits available.",
"set updates":"[LAB] Educational dataset current."
};

const defaultState={view:"dashboard",module:"01",done:[],score:0,xp:0,badges:[],step:{},evalStep:{},evalDone:{},font:16,dark:false,examDone:false,examScore:0};
let S=Object.assign({},defaultState,JSON.parse(localStorage.getItem("csl_v3_state")||"{}"));
const $=id=>document.getElementById(id);
function save(){localStorage.setItem("csl_v3_state",JSON.stringify(S))}
function mod(){return modules.find(m=>m.id===S.module)||modules[0]}
function progress(){return Math.round(S.done.length/modules.length*100)}
function setTheme(){document.body.classList.toggle("dark",S.dark);document.documentElement.style.fontSize=S.font+"px"}
function stats(){let p=progress();$("sideProgress").style.width=p+"%";$("sideProgressText").textContent=p+"% terminé"}
function nav(view){S.view=view;document.querySelectorAll(".nav-item[data-view]").forEach(b=>b.classList.toggle("active",b.dataset.view===view));save();render()}
function goModule(id){S.module=id;S.view="lesson";save();render()}
function esc(x){return String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}

function dashboard(){
let next=modules.find(m=>!S.done.includes(m.id))||modules[0];
return `<div class="hero"><div><div class="eyebrow">CYBER SECURITY ACADEMY · V3</div><h1 class="page-title">Plateforme de formation professionnelle</h1><p class="lead">Un parcours structuré autour de la boîte à outils du social engineer : théorie, commandes expliquées, console simulée, scénarios guidés et évaluation.</p></div><div class="hero-actions"><button class="run" onclick="app.goModule('${next.id}')">Continuer le parcours →</button><button onclick="app.nav('modules')">Voir les modules</button></div></div>
<div class="kpis"><div class="kpi"><span>Progression</span><strong>${progress()}%</strong></div><div class="kpi"><span>Score</span><strong>${S.score}</strong></div><div class="kpi"><span>XP</span><strong>${S.xp}</strong></div><div class="kpi"><span>Badges</span><strong>${S.badges.length}</strong></div></div>
<div class="panel"><div class="panel-body"><div class="section-title"><h2>Votre parcours</h2><span class="muted">${S.done.length}/${modules.length} modules validés</span></div><div class="progress-track"><i style="width:${progress()}%"></i></div><p class="muted">Prochaine étape : <b>${esc(next.id)} · ${esc(next.title)}</b></p></div></div>
<div class="section-title"><h2>Compétences du parcours</h2><span class="muted">Apprentissage progressif</span></div><div class="module-grid">${modules.slice(0,6).map(card).join("")}</div>
<div class="section-title"><h2>Règle de sécurité pédagogique</h2></div><div class="info-box">Toutes les commandes sont <b>simulées et inertes</b>. Aucun système, compte, réseau ou identifiant réel n’est ciblé. Les concepts offensifs sont étudiés sous l’angle de l’analyse, de la détection et de la réponse.</div>`;
}
function card(m){
let done=S.done.includes(m.id);
return `<article class="module-card"><span class="num">MODULE ${m.id} · ${esc(m.tag)}</span><h3>${esc(m.title)}</h3><p>${esc(m.desc)}</p><div class="card-bottom"><span class="status ${done?"done":""}">${done?"✓ Validé":"À faire"}</span><button onclick="app.goModule('${m.id}')">${done?"Revoir":"Commencer"} →</button></div></article>`
}
function modulesView(){
return `<div class="hero"><div><div class="eyebrow">PARCOURS</div><h1 class="page-title">Modules de formation</h1><p class="lead">Chaque module suit le même modèle : comprendre → observer → pratiquer par clic → résoudre un scénario → s’évaluer.</p></div></div><div class="module-grid">${modules.map(card).join("")}</div>`;
}

function lesson(){
let m=mod(), n=S.step[m.id]||0, done=S.done.includes(m.id);
let commands=m.cmds.map((c,i)=>`<article class="command-row"><div class="cmd-actions"><code>${esc(c[0])}</code><button class="run" onclick="app.run('${esc(c[0])}')">▶ Essayer la commande</button></div><p><b>À quoi ça sert :</b> ${esc(c[1])}</p><p><b>Comment l’utiliser :</b> ${esc(c[2])}</p><p class="muted"><b>Résultat attendu :</b> ${esc(c[3])}</p></article>`).join("");
let steps=m.scenario.map((s,i)=>`<div class="step ${i<n?"done":i===n?"current":""}"><span class="step-num">${i<n?"✓":i+1}</span><span><b>${esc(s)}</b>${i===n?'<small class="muted"> · étape actuelle</small>':""}</span></div>`).join("");
return `<div class="hero"><div><div class="eyebrow">MODULE ${m.id} · ${esc(m.tag)}</div><h1 class="page-title">${esc(m.title)}</h1><p class="lead">${esc(m.desc)}</p></div><div class="hero-actions"><button onclick="app.nav('modules')">← Modules</button></div></div>
<div class="two-col"><div class="panel lesson"><div class="panel-head"><h2>1. Comprendre</h2></div><div class="panel-body"><p>${esc(m.theory)}</p><h3>2. Commandes expliquées</h3><p class="muted">Chaque ligne indique son objectif et la manière de l’utiliser. Cliquez sur <b>Essayer la commande</b> : la commande est placée automatiquement dans la console.</p><div class="command-list">${commands}</div><h3>3. Console simulée</h3><div class="terminal" id="terminal">Cyber Security Academy V3 — SIMULATION INERTE
Cliquez sur une commande ci-dessus.
Aucune commande système réelle n’est exécutée.</div><div class="info-box" id="explain"><b>Conseil :</b> commencez par la commande proposée dans le scénario.</div></div></div>
<div><div class="panel"><div class="panel-head"><h3 style="margin:0">Mission guidée</h3></div><div class="panel-body"><div class="mission"><b>Objectif :</b> terminer toutes les étapes du scénario.</div><div class="steps">${steps}</div><button class="run" style="width:100%" onclick="app.nextStep()">${n<m.seq.length?"Étape suivante ▶":"Scénario terminé ✓"}</button><button style="width:100%;margin-top:7px" onclick="app.restart()">Recommencer le scénario</button><div class="feedback ok">Vous n’avez pas besoin de taper les commandes : le bouton exécute automatiquement l’étape.</div></div></div>
<div class="panel" style="margin-top:14px"><div class="panel-head"><h3 style="margin:0">Évaluation — cas pratique</h3></div><div class="panel-body">
<p><b>Situation :</b> vous êtes analyste cybersécurité. Un événement lié à ce module vient d’être détecté. Votre mission est de traiter le cas de bout en bout en utilisant <b>toutes les commandes du module</b>, dans l’ordre attendu.</p>
<div class="mission"><b>Règle :</b> cliquez sur « Essayer la commande » pour exécuter chaque commande dans la console simulée. L’évaluation valide uniquement le parcours complet.</div>
<div class="steps">${m.cmds.map((c,i)=>`<div class="step ${(S.evalStep[m.id]||0)>i?"done":(S.evalStep[m.id]||0)===i?"current":""}"><span class="step-num">${(S.evalStep[m.id]||0)>i?"✓":i+1}</span><span><b>${esc(c[0])}</b><small class="muted"> · ${esc(c[1])}</small></span></div>`).join("")}</div>
<div class="command-list">${m.cmds.map((c,i)=>`<article class="command-row"><div class="cmd-actions"><code>${esc(c[0])}</code><button class="run" onclick="app.evalCommand('${esc(c[0])}')">▶ Essayer la commande</button></div><p><b>Utilisation :</b> ${esc(c[2])}</p></article>`).join("")}</div>
<div id="evalFeedback"></div>
<button style="width:100%;margin-top:12px" class="run" onclick="app.complete()">${done?"Module validé ✓":"Valider le cas pratique"}</button>
</div></div></div></div>`;
}

function run(cmd){
let m=mod(), out=OUT[cmd]||"[LAB] Commande pédagogique non prévue pour ce module.";
let term=$("terminal"); if(term){term.textContent+=`\\n\\nstudent@academy:~$ ${cmd}\\n${out}`;term.scrollTop=term.scrollHeight}
let c=m.cmds.find(x=>x[0]===cmd);if(c&&$("explain"))$("explain").innerHTML=`<b>${esc(c[0])}</b><br>${esc(c[1])}<br><small><b>Utilisation :</b> ${esc(c[2])}</small>`;
}
function nextStep(){let m=mod(),n=S.step[m.id]||0;if(n<m.seq.length){run(m.seq[n]);S.step[m.id]=n+1;S.score+=5;S.xp+=10;save();render()}}
function restart(){S.step[mod().id]=0;save();render()}
function evalCommand(cmd){
let m=mod(), n=S.evalStep[m.id]||0, expected=m.cmds[n]?.[0];
let f=$("evalFeedback");
if(cmd!==expected){
  if(f){f.className="feedback bad";f.textContent=`Étape incorrecte. Pour ce cas pratique, commencez par : ${expected||"aucune commande"}.`;}
  return;
}
run(cmd);
S.evalStep[m.id]=n+1;
save();
render();
setTimeout(()=>{let x=$("evalFeedback");if(x){x.className="feedback ok";x.textContent=`Commande validée : ${cmd}`}},0);
}
function complete(){
let m=mod(), n=S.evalStep[m.id]||0;
if(n<m.cmds.length){
  alert(`Cas pratique incomplet : utilisez les ${m.cmds.length} commandes du module, dans l'ordre attendu.`);
  return;
}
if(!S.done.includes(m.id)){
  S.done.push(m.id);S.score+=50;S.xp+=100;S.badges.push(m.id==="09"?"SOC Foundations":"Module "+m.id);
  S.evalDone[m.id]=true;save();
}
render();
}
function exam(){
let all=modules.flatMap(m=>m.cmds.map(c=>({module:m.id,title:m.title,cmd:c[0],use:c[2]})));
let doneCount=S.examStep||0;
let current=all[doneCount];
let completed=doneCount>=all.length;
let h=`<div class="hero"><div><div class="eyebrow">CERTIFICATION INTERNE</div><h1 class="page-title">Évaluation finale — cas pratique</h1><p class="lead">Mission de synthèse : traiter un parcours complet en utilisant les commandes pédagogiques de tous les modules.</p></div></div>
<div class="panel"><div class="panel-body">
<div class="mission"><b>Mission :</b> vous êtes analyste SOC. Traitez successivement les situations simulées des 9 modules. Chaque commande doit être utilisée au moins une fois. Aucune commande réelle n'est exécutée.</div>
<div class="kpis"><div class="kpi"><span>Commandes à maîtriser</span><strong>${all.length}</strong></div><div class="kpi"><span>Progression</span><strong>${Math.round(doneCount/all.length*100)}%</strong></div><div class="kpi"><span>Score certification</span><strong>${S.examScore||0}</strong></div><div class="kpi"><span>Statut</span><strong>${completed?"Validée":"En cours"}</strong></div></div>
<div class="progress-track"><i style="width:${Math.round(doneCount/all.length*100)}%"></i></div>
${completed?`<div class="feedback ok" style="margin-top:16px"><b>Certification pratique validée.</b><br>Vous avez utilisé toutes les commandes pédagogiques du parcours.</div>`:
`<div class="panel" style="margin-top:16px"><div class="panel-head"><b>Étape ${doneCount+1}/${all.length} · Module ${current.module} — ${esc(current.title)}</b></div><div class="panel-body"><p><b>Commande à utiliser :</b> <code>${esc(current.cmd)}</code></p><p class="muted">${esc(current.use)}</p><button class="run" id="examCmd">▶ Essayer la commande</button><div class="terminal" id="examTerminal" style="margin-top:12px;min-height:150px">Cyber Security Academy — certification pratique\\nAucune commande système réelle n’est exécutée.</div><div id="examFeedback"></div></div></div>`}
</div></div>`;
$("main").innerHTML=h;
if(!completed){
$("examCmd").onclick=()=>{
  let t=$("examTerminal");t.textContent+=`\\n\\nstudent@academy:~$ ${current.cmd}\\n${OUT[current.cmd]||"[LAB] Simulation pédagogique."}`;t.scrollTop=t.scrollHeight;
  S.examStep=doneCount+1;S.examScore=(S.examScore||0)+5;S.xp+=10;
  if(S.examStep>=all.length){S.badges.push("Certification pratique");}
  save();render();
};
}
}
function openModal(kind){const data={legal:["Mentions légales","TWAGIRUMUKIZA INNOCENT · Entrepreneur individuel · APE 62.02A<br><br>87 RUE BAUDRICOURT, 75013 PARIS<br>SIREN 454 007 691 · SIRET 454 007 691 00016<br>Active depuis le 11/06/2004<br><br>LinkedIn : profil professionnel de l’exploitant."],cgu:["Conditions générales d’utilisation","Plateforme destinée à la formation en cybersécurité. Les scénarios offensifs sont simulés et inertes. L’utilisateur s’engage à utiliser les connaissances acquises uniquement dans des environnements autorisés et pédagogiques."],licence:["Licence pédagogique","Contenu destiné à l’apprentissage. Les exemples de la plateforme ne constituent pas des instructions d’exploitation d’un système tiers. Respecter les droits d’auteur et les licences applicables aux contenus et outils référencés."]};$("modalTitle").textContent=data[kind][0];$("modalBody").innerHTML=data[kind][1];$("modal").classList.add("open")}
function render(){stats();setTheme();if(S.view==="dashboard")$("main").innerHTML=dashboard();else if(S.view==="modules")$("main").innerHTML=modulesView();else if(S.view==="lesson")$("main").innerHTML=lesson();else exam()}
window.app={nav,goModule,run,nextStep,restart,answer,complete,goDashboard:()=>nav("dashboard")};
document.querySelectorAll(".nav-item[data-view]").forEach(b=>b.onclick=()=>nav(b.dataset.view));
$("langBtn").onclick=()=>alert("Le contenu principal est actuellement en français. La structure est prête pour l’extension FR/EN complète.");
$("themeBtn").onclick=()=>{S.dark=!S.dark;save();setTheme()};
$("fontDown").onclick=()=>{S.font=Math.max(13,S.font-1);save();setTheme()};
$("fontUp").onclick=()=>{S.font=Math.min(21,S.font+1);save();setTheme()};
$("exportBtn").onclick=()=>{let a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(S,null,2)],{type:"application/json"}));a.download="cyber-security-academy-v3-progress.json";a.click()};
$("resetBtn").onclick=()=>{if(confirm("Réinitialiser toute la progression ?")){localStorage.removeItem("csl_v3_state");location.reload()}};
$("legalBtn").onclick=()=>openModal("legal");$("cguBtn").onclick=()=>openModal("cgu");$("licenceBtn").onclick=()=>openModal("licence");$("footerLegal").onclick=e=>{e.preventDefault();openModal("legal")};$("footerCgu").onclick=e=>{e.preventDefault();openModal("cgu")};$("footerLicence").onclick=e=>{e.preventDefault();openModal("licence")};$("closeModal").onclick=()=>$("modal").classList.remove("open");
$("modal").onclick=e=>{if(e.target===$("modal"))$("modal").classList.remove("open")};
setTheme();render();
