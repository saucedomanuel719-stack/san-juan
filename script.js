/* ============================================================
   ICONOS SVG REUTILIZABLES
   ============================================================ */
const SUPABASE_URL = "https://wgmjnwmyqitbkxkdaqvg.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_zTIRQn7c7qLWhhB4EozqhA_gyeNeukj";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
const ICONS = {
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
  calendarCheck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>',
  clipboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6"/><path d="M9 16h6"/></svg>',
  examIcon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></svg>',
  calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
  idcard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M14 10h6"/><path d="M14 14h4"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  checkCircle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
  alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  parent:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  teacher:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  admin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>',
  building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
  send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.83 21a2 2 0 0 1-2.28-.24l-4.5-4.5a2 2 0 0 1-.24-2.28l1.42-2.85a2 2 0 0 0 .06-1.72l-1.7-4a2 2 0 0 0-2.16-1.19L2.5 5.5"/><path d="M3 4c.4 8 6.6 14.2 15 15" /></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  inbox:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"/></svg>',
};
function ic(name,size=17){ const svg = ICONS[name]||''; return svg ? svg.replace('<svg ', `<svg width="${size}" height="${size}" `) : ''; }

/* ============================================================
   BASE DE DATOS (EJEMPLO / EN MEMORIA)
   ============================================================ */
let MATERIAS_INFO = [
  {id:'mat',   nombre:'Matemática',        color:'#1d4ed8', maestro:'Por asignar', maestroUsername:''},
  {id:'ing',   nombre:'Inglés',             color:'#0891b2', maestro:'Por asignar', maestroUsername:''},
  {id:'fil',   nombre:'Filosofía',          color:'#6d28d9', maestro:'Por asignar', maestroUsername:''},
  {id:'psico', nombre:'Psicología',         color:'#a21caf', maestro:'Por asignar', maestroUsername:''},
  {id:'info',  nombre:'Informática BTH',    color:'#0ea5e9', maestro:'Por asignar', maestroUsername:''},
  {id:'gastro',nombre:'Gastronomía',        color:'#c2410c', maestro:'Por asignar', maestroUsername:''},
  {id:'len',   nombre:'Lenguaje',           color:'#7c3aed', maestro:'Por asignar', maestroUsername:''},
  {id:'bio',   nombre:'Biología',           color:'#16a34a', maestro:'Por asignar', maestroUsername:''},
  {id:'arte',  nombre:'Artes Plásticas',    color:'#db2777', maestro:'Por asignar', maestroUsername:''},
  {id:'quim',  nombre:'Química',            color:'#059669', maestro:'Por asignar', maestroUsername:''},
  {id:'fis',   nombre:'Física',             color:'#4338ca', maestro:'Por asignar', maestroUsername:''},
  {id:'edfis', nombre:'Ed. Física',         color:'#ea580c', maestro:'Por asignar', maestroUsername:''},
  {id:'socc',  nombre:'C. Sociales',        color:'#c98a06', maestro:'Por asignar', maestroUsername:''},
  {id:'mus',   nombre:'Música',             color:'#9333ea', maestro:'Por asignar', maestroUsername:''},
  {id:'rel',   nombre:'Religión',           color:'#0d9488', maestro:'Por asignar', maestroUsername:''},
];

/* ============================================================
   CURSOS DE LA INSTITUCIÓN
   6 grados x 3 paralelos x 2 niveles = 36 cursos
   ============================================================ */
const NIVELES   = ['Primaria','Secundaria'];
const GRADOS    = [1,2,3,4,5,6];
const PARALELOS = ['A','B','C'];
const ORDINAL   = {1:'1ro', 2:'2do', 3:'3ro', 4:'4to', 5:'5to', 6:'6to'};
const CURSOS    = [];
NIVELES.forEach(nivel=>{
  GRADOS.forEach(g=>{
    PARALELOS.forEach(p=>{
      CURSOS.push({
        id: (nivel==='Primaria'?'pri':'sec') + '-' + g + p,
        nivel, grado:g, paralelo:p,
        codigo: g + p,
        nombre: ORDINAL[g] + ' "' + p + '" de ' + nivel,
        corto:  ORDINAL[g] + p + ' · ' + nivel
      });
    });
  });
});

function cursoInfo(id){ return CURSOS.find(c=>c.id===id) || null; }
function cursoNombre(id){ const c = cursoInfo(id); return c ? c.nombre : 'Sin curso asignado'; }
function cursoCorto(id){ const c = cursoInfo(id); return c ? c.corto : 'Sin curso'; }
function estudiantesDeCurso(id){
  return Object.values(DB.students).filter(s=>s.cursoId===id)
    .sort((a,b)=>(a.nombreCompleto||'').localeCompare(b.nombreCompleto||''));
}
function opcionesCursos(seleccionado){
  return NIVELES.map(n=>
    '<optgroup label="'+n+'">' +
    CURSOS.filter(c=>c.nivel===n).map(c=>{
      const cant = estudiantesDeCurso(c.id).length;
      return '<option value="'+c.id+'"'+(seleccionado===c.id?' selected':'')+'>'+
             c.nombre+(cant?' ('+cant+' est.)':'')+'</option>';
    }).join('') +
    '</optgroup>'
  ).join('');
}

/* Fechas: del selector de calendario (AAAA-MM-DD) al formato del colegio */
function fechaDesdeISO(iso){
  if(!iso) return '';
  const p = iso.split('-');
  return p.length===3 ? p[2]+'/'+p[1]+'/'+p[0] : iso;
}
function fechaHaciaISO(txt){
  if(!txt) return '';
  const p = String(txt).split('/');
  return p.length===3 ? p[2]+'-'+p[1].padStart(2,'0')+'-'+p[0].padStart(2,'0') : '';
}
function hoyISO(){
  const d = new Date(), p = n=>String(n).padStart(2,'0');
  return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate());
}

function buildAttendance(pattern){
  // pattern: array de {sem:1, dias:['presente','presente','falta','presente','presente']}
  return pattern;
}

const DB = {
  students:{
    '10000001':{
      carnet:'10000001', username:'Mejia', password:'123',
      nombre:'Mejia', nombreCompleto:'Mejia',
      cursoId:'sec-6B', curso:'6to de Secundaria', paralelo:'B', fechaNacimiento:'',
      correo:'', telefono:'', direccion:'',
      materias:{ mat:91, ing:88, fil:85, psico:89, info:94, gastro:90, len:87, bio:92, arte:96, quim:86, fis:89, edfis:95, socc:88, mus:93, rel:90 },
      observaciones:{},
      asistencia:[
        {semana:'Semana 1', dias:['presente','presente','presente','presente','presente']},
        {semana:'Semana 2', dias:['presente','presente','presente','presente','presente']},
      ],
      tareas:[],
      examenes:[],
    }
  },
  parents:{},
  teachers:{},
  admins:{
    'Admin':{ username:'Admin', password:'12345', nombre:'Administración U.E. Técnico Humanístico San Juan' }
  },
  consultas:[],
  tareas:[],
  examenes:[],
  avisos:[],
};

/* ============================================================
   BASE DE DATOS LOCAL (localStorage)
   ------------------------------------------------------------
   Toda la información (estudiantes, padres, maestros, materias,
   notas, asistencia, tareas, exámenes, consultas y avisos) se
   guarda en el propio navegador (localStorage), así que:

     · funciona sin internet y sin ningún servicio externo,
     · los datos se conservan al cerrar y volver a abrir la web,
     · si abres la web en dos pestañas, los cambios se ven en ambas.
   ============================================================ */
const RAIZ_DB = 'colegio-san-juan';            // nombre de los datos de este colegio
const CLAVE_LOCAL = 'colegio-san-juan:datos';  // clave dentro de localStorage

/* Nombres de los nodos de la base de datos */
const RUTAS = {
  estudiantes:     'estudiantes',
  padres:          'padres',
  maestros:        'maestros',
  administradores: 'administradores',
  materias:        'materias',
  consultas:       'consultas',
  avisos:          'avisos',
  tareas:          'tareas',
  examenes:        'examenes',
  asisDet:         'asistenciaDetalle',
  citaciones:      'citaciones',
  excel:           'registroExcel',
};

/* Copia de los datos de ejemplo. Solo se usan la primera vez,
   para "sembrar" la base de datos cuando todavía está vacía. */
const DATOS_SEMILLA = JSON.parse(JSON.stringify({
  estudiantes:     DB.students,
  padres:          DB.parents,
  maestros:        DB.teachers,
  administradores: DB.admins,
  materias:        MATERIAS_INFO.reduce((acc,m,i)=>{ acc[m.id] = Object.assign({}, m, {orden:i}); return acc; }, {}),
  consultas:       DB.consultas.reduce((acc,c)=>{ acc[c.id] = c; return acc; }, {}),
  avisos:          DB.avisos.reduce((acc,a)=>{ acc[a.id] = a; return acc; }, {}),
  tareas:          DB.tareas.reduce((acc,t)=>{ acc[t.id] = t; return acc; }, {}),
  examenes:        DB.examenes.reduce((acc,e)=>{ acc[e.id] = e; return acc; }, {}),
}));

const VERSION_DATOS = 2;  // sube de número cuando cambia la estructura de los nodos
let migrando    = false;
let almacen     = {};     // árbol completo de datos (equivale a la raíz de la base)
let dbListo     = false;  // ya se cargaron los datos al menos una vez
let dbError     = '';     // último error, si lo hubo
let sembrando   = false;
let ultimoHash  = '';

/* ---------- Lectura / escritura en localStorage ---------- */
function leerAlmacen(){
  try{
    const t = localStorage.getItem(CLAVE_LOCAL);
    return t ? JSON.parse(t) : null;
  }catch(e){ return null; }
}

let almacenamientoOK = true;   // false si el navegador no permite guardar (los datos duran solo mientras la página está abierta)
function escribirAlmacen(){
  try{
    localStorage.setItem(CLAVE_LOCAL, JSON.stringify(almacen));
    almacenamientoOK = true;
  }catch(e){
    almacenamientoOK = false;   // se sigue trabajando en memoria
  }
  return true;
}

/* Quita valores nulos y contenedores vacíos (igual que hacía la base en la nube) */
function podar(v){
  if(Array.isArray(v)) return v.map(podar);
  if(v && typeof v === 'object'){
    const o = {};
    Object.keys(v).forEach(k=>{
      const x = podar(v[k]);
      if(x === null || x === undefined) return;
      if(typeof x === 'object' && Object.keys(x).length === 0) return;
      o[k] = x;
    });
    return o;
  }
  return v;
}

/* Escribe un valor en una ruta tipo "estudiantes/123/materias/mat1" */
function escribirRuta(ruta, valor){
  const partes = String(ruta).split('/').filter(Boolean);
  if(!partes.length) return;
  let nodo = almacen;
  for(let i=0; i<partes.length-1; i++){
    const k = partes[i];
    if(nodo[k] === null || typeof nodo[k] !== 'object') nodo[k] = {};
    nodo = nodo[k];
  }
  const ultimo = partes[partes.length-1];
  if(valor === null || valor === undefined) delete nodo[ultimo];
  else nodo[ultimo] = valor;
}

/* Se ejecuta cada vez que cambian los datos (reemplaza al listener en vivo) */
function alCambiarDatos(){
  aplicarSnapshot(almacen);
  dbListo = true;
  dbError = '';
  pintarEstadoDB();
  refrescarPantalla();
}

/* ---------- Arranque ---------- */
function iniciarBaseDeDatos(){
  pintarEstadoDB();
  const guardado = leerAlmacen();
  if(guardado && guardado[RUTAS.estudiantes]){
    almacen = guardado;
  }else{
    sembrarBaseDeDatos(true);      // primera vez: se cargan los datos de ejemplo
    return;
  }
  alCambiarDatos();

  /* Si los datos vienen de una versión anterior de la página,
     se actualiza su estructura sin borrar notas ni consultas. */
  const versionActual = (almacen._meta && almacen._meta.version) || 0;
  if(versionActual < VERSION_DATOS) migrarBaseDeDatos(almacen);

  /* Si otra pestaña modifica los datos, esta pestaña se actualiza sola */
  window.addEventListener('storage', e=>{
    if(e.key !== CLAVE_LOCAL) return;
    almacen = leerAlmacen() || {};
    alCambiarDatos();
  });
}

/* ---------- Sembrar la base de datos ---------- */
async function sembrarBaseDeDatos(reemplazarTodo){
  if(sembrando) return false;
  sembrando = true;
  try{
    const semilla = JSON.parse(JSON.stringify(DATOS_SEMILLA));
    semilla._meta = { creado: new Date().toISOString(), version: VERSION_DATOS, colegio: 'U.E. Técnico Humanístico San Juan' };
    if(reemplazarTodo) almacen = podar(semilla);
    else               Object.assign(almacen, podar(semilla));
    if(!escribirAlmacen()) return false;
    alCambiarDatos();
    return true;
  }catch(e){
    dbError = 'No se pudieron escribir los datos iniciales: ' + e.message;
    pintarEstadoDB();
    return false;
  }finally{
    sembrando = false;
  }
}

/* ---------- Actualizar la estructura de una base ya existente ----------
   Convierte los datos guardados por versiones anteriores de la página
   (sin cursos, con la lista vieja de materias) al formato nuevo.
   No toca las notas, la asistencia ni las consultas ya guardadas. */
function deducirCurso(e){
  const m = String(e.curso || '').match(/(\d)/);
  const grado = m ? parseInt(m[1], 10) : 6;
  const paralelo = String(e.paralelo || 'B').toUpperCase().charAt(0);
  const nivel = /primaria/i.test(String(e.curso||'')) ? 'pri' : 'sec';
  return cursoInfo(nivel + '-' + grado + paralelo) || cursoInfo('sec-6B');
}

async function migrarBaseDeDatos(datos, manual){
  if(migrando) return false;
  migrando = true;
  try{
    const cambios = {};

    /* Lista de materias actualizada (Informática BTH, Psicología, etc.) */
    cambios[RUTAS.materias] = DATOS_SEMILLA.materias;

    /* Maestros originales: se les dejan solo sus materias correspondientes */
    Object.keys(DATOS_SEMILLA.maestros).forEach(u=>{
      if(datos[RUTAS.maestros] && datos[RUTAS.maestros][u]){
        cambios[RUTAS.maestros + '/' + u + '/materias'] = DATOS_SEMILLA.maestros[u].materias;
        cambios[RUTAS.maestros + '/' + u + '/cursos']   = DATOS_SEMILLA.maestros[u].cursos;
      }
    });

    /* Estudiantes sin curso asignado: se deduce de su grado y paralelo */
    const ests = datos[RUTAS.estudiantes] || {};
    Object.keys(ests).forEach(carnet=>{
      const e = ests[carnet];
      if(e && !e.cursoId){
        const c = deducirCurso(e);
        cambios[RUTAS.estudiantes + '/' + carnet + '/cursoId']  = c.id;
        cambios[RUTAS.estudiantes + '/' + carnet + '/curso']    = ORDINAL[c.grado] + ' de ' + c.nivel;
        cambios[RUTAS.estudiantes + '/' + carnet + '/paralelo'] = c.paralelo;
      }
    });

    cambios['_meta/version'] = VERSION_DATOS;
    cambios['_meta/actualizado'] = new Date().toISOString();

    await guardarVarios(cambios);
    if(manual) toast('Estructura de la base de datos actualizada correctamente.');
    return true;
  }catch(e){
    dbError = 'No se pudo actualizar la estructura: ' + e.message;
    pintarEstadoDB();
    if(manual) toast('No se pudo actualizar la estructura: ' + e.message);
    return false;
  }finally{
    migrando = false;
  }
}

async function forzarMigracion(){
  await migrarBaseDeDatos(almacen || {}, true);
  navigate('basedatos');
}

/* ---------- Del formato guardado al formato de la app ---------- */
function aArreglo(x){
  if(!x) return [];
  if(Array.isArray(x)) return x.filter(v=>v!==null && v!==undefined);
  return Object.values(x);
}

function normalizarEstudiante(s){
  const e = Object.assign({}, s);
  e.materias      = e.materias || {};
  e.observaciones = e.observaciones || {};
  e.asistencia    = aArreglo(e.asistencia).map((sem,i)=>({
    semana: (sem && sem.semana) || ('Semana ' + (i+1)),
    dias:   aArreglo(sem && sem.dias)
  }));
  e.tareas   = aArreglo(e.tareas);
  e.examenes = aArreglo(e.examenes);
  return e;
}

function aplicarSnapshot(datos){
  datos = datos || {};

  /* Estudiantes */
  const estudiantes = {};
  Object.keys(datos[RUTAS.estudiantes] || {}).forEach(carnet=>{
    estudiantes[carnet] = normalizarEstudiante(datos[RUTAS.estudiantes][carnet]);
  });
  DB.students = estudiantes;

  /* Padres */
  const padres = {};
  Object.keys(datos[RUTAS.padres] || {}).forEach(u=>{
    padres[u] = Object.assign({}, datos[RUTAS.padres][u], { hijos: aArreglo(datos[RUTAS.padres][u].hijos) });
  });
  DB.parents = padres;

  /* Maestros */
  const maestros = {};
  Object.keys(datos[RUTAS.maestros] || {}).forEach(u=>{
    const m = datos[RUTAS.maestros][u];
    maestros[u] = Object.assign({}, m, {
      materias: aArreglo(m.materias),
      cursos: aArreglo(m.cursos),
      estudiantes: aArreglo(m.estudiantes)
    });
  });
  DB.teachers = maestros;

  /* Administradores */
  DB.admins = datos[RUTAS.administradores] || {};

  /* Consultas y avisos */
  DB.consultas = aArreglo(datos[RUTAS.consultas]).map(c=>Object.assign({}, c, { mensajes: aArreglo(c.mensajes) }));
  DB.avisos    = aArreglo(datos[RUTAS.avisos]);

  /* Registro maestro de tareas y exámenes creados por los profesores */
  DB.tareas   = aArreglo(datos[RUTAS.tareas]).sort((a,b)=>(b.creada||'').localeCompare(a.creada||''));
  DB.examenes = aArreglo(datos[RUTAS.examenes]).sort((a,b)=>(b.creada||'').localeCompare(a.creada||''));

  DB.asisDet = datos[RUTAS.asisDet] || {};
  DB.cfg = datos.configuracion || {};
  DB.hojas = datos.registroHojas || {};
  DB.citas = aArreglo(datos[RUTAS.citaciones]).sort((a,b)=>(b.creada||'').localeCompare(a.creada||''));

  /* Materias (se pueden agregar o editar desde el panel de administración) */
  const mats = aArreglo(datos[RUTAS.materias]);
  if(mats.length) MATERIAS_INFO = mats.slice().sort((a,b)=>(a.orden==null?99:a.orden)-(b.orden==null?99:b.orden));
}

/* ---------- Volver a enlazar al usuario con los datos frescos ---------- */
function revincularUsuario(){
  if(!currentUser) return;
  const d = currentUser.data;
  let nuevo = null;
  if(currentUser.role === 'estudiante')         nuevo = DB.students[d.carnet];
  else if(currentUser.role === 'padre')         nuevo = DB.parents[d.username];
  else if(currentUser.role === 'maestro')       nuevo = DB.teachers[d.username];
  else if(currentUser.role === 'administrador') nuevo = DB.admins[d.username];
  if(nuevo) currentUser.data = nuevo;
}

/* ---------- Repintar la pantalla cuando cambian los datos ---------- */
function refrescarPantalla(){
  if(!currentUser) return;
  const activo = document.activeElement;
  if(activo && activo.tagName && ['INPUT','TEXTAREA','SELECT'].includes(activo.tagName)) return;
  const modal = document.getElementById('modal-bg');
  if(modal && modal.classList.contains('show')) return;

  const hash = JSON.stringify({ e:DB.students, c:DB.consultas, a:DB.avisos, m:MATERIAS_INFO, t:DB.tareas, x:DB.examenes, ad:DB.asisDet, ci:DB.citas });
  const cambio = ultimoHash && ultimoHash !== hash;
  ultimoHash = hash;

  revincularUsuario();
  render();
  if(cambio) toast('Tu información se actualizó en tiempo real.');
}

/* ---------- Indicador visual del estado de la base de datos ---------- */
function estadoDB(){
  if(dbError)     return { clase:'db-err',  texto:'Error en la base de datos', corto:'Error' };
  if(!dbListo)    return { clase:'db-wait', texto:'Cargando base de datos…',   corto:'Cargando…' };
  return almacenamientoOK ? { clase:'db-ok', texto:'Base de datos local activa', corto:'Local' } : { clase:'db-wait', texto:'Base de datos temporal (no se guarda al cerrar)', corto:'Temporal' };
}

function pintarEstadoDB(){
  const st = estadoDB();
  const login = document.getElementById('db-estado');
  if(login){
    login.className = 'db-pill ' + st.clase;
    login.innerHTML = '<span class="db-dot"></span>' + st.texto;
  }
  const top = document.getElementById('db-estado-top');
  if(top){
    top.className = 'db-pill ' + st.clase;
    top.innerHTML = '<span class="db-dot"></span>' + st.corto;
  }
}

/* ---------- Escritura en la base de datos local ---------- */
function limpiar(v){ return JSON.parse(JSON.stringify(v === undefined ? null : v)); }

async function guardar(ruta, valor){
  try{
    escribirRuta(ruta, limpiar(valor));
    almacen = podar(almacen);
    if(!escribirAlmacen()){ toast('No se pudo guardar en la base de datos: ' + dbError); return false; }
    alCambiarDatos();
    return true;
  }catch(e){
    console.error('Base de datos · error al guardar en', ruta, e);
    toast('No se pudo guardar en la base de datos: ' + e.message);
    return false;
  }
}

async function guardarVarios(cambios){
  try{
    const c = limpiar(cambios);
    Object.keys(c).forEach(ruta=> escribirRuta(ruta, c[ruta]));
    almacen = podar(almacen);
    if(!escribirAlmacen()){ toast('No se pudo guardar en la base de datos: ' + dbError); return false; }
    alCambiarDatos();
    return true;
  }catch(e){
    console.error('Base de datos · error al guardar', e);
    toast('No se pudo guardar en la base de datos: ' + e.message);
    return false;
  }
}

/* Fecha y hora reales, para guardarlas en la base de datos */
function fechaHoraActual(){
  const d = new Date(), p = n=>String(n).padStart(2,'0');
  return p(d.getDate())+'/'+p(d.getMonth()+1)+'/'+d.getFullYear()+' '+p(d.getHours())+':'+p(d.getMinutes());
}
function fechaActual(){
  const d = new Date(), p = n=>String(n).padStart(2,'0');
  return p(d.getDate())+'/'+p(d.getMonth()+1)+'/'+d.getFullYear();
}

/* ============================================================
   LÓGICA DE RENDIMIENTO ACADÉMICO (cálculo automático)
   ============================================================ */
function promedioGeneral(student){
  const vals = Object.values(student.materias || {}).filter(v=>typeof v === 'number');
  if(!vals.length) return 0;
  return Math.round((vals.reduce((a,b)=>a+b,0)/vals.length)*10)/10;
}
function porcentajeAsistencia(student){
  let total=0, presentes=0;
  (student.asistencia||[]).forEach(sem=>(sem.dias||[]).forEach(d=>{
    if(d!=='na'){ total++; if(d==='presente') presentes++; else if(d==='permiso') presentes+=1; }
  }));
  return total? Math.round((presentes/total)*100):100;
}
function computeRendimiento(student){
  const prom = promedioGeneral(student);
  const asis = porcentajeAsistencia(student);
  const sinNotas = !Object.values(student.materias||{}).filter(v=>typeof v==='number').length;
  if(sinNotas){
    return {nivel:'warn', color:'yellow', titulo:'Sin calificaciones registradas',
      detalle:'Este estudiante todavía no tiene notas cargadas en la base de datos. Los maestros deben registrarlas desde la sección Calificaciones.'};
  }
  if(prom>=75 && asis>=85){
    return {nivel:'ok', color:'green', titulo:'Rendimiento académico: Todo está bien',
      detalle:`Promedio general de ${prom} y asistencia de ${asis}%. El estudiante mantiene un desempeño saludable.`};
  } else if(prom>=65 && asis>=75){
    return {nivel:'warn', color:'yellow', titulo:'Atención: rendimiento en observación',
      detalle:`Promedio general de ${prom} y asistencia de ${asis}%. Se recomienda dar seguimiento cercano.`};
  } else {
    return {nivel:'danger', color:'red', titulo:'Advertencia: estudiante en peligro de bajo rendimiento',
      detalle:`Promedio general de ${prom} y asistencia de ${asis}%. Se recomienda contactar al maestro y reforzar el apoyo académico.`};
  }
}
function materiaNombre(id){ const m=MATERIAS_INFO.find(x=>x.id===id); return m?m.nombre:id; }
function materiaColor(id){ const m=MATERIAS_INFO.find(x=>x.id===id); return m?m.color:'#64748b'; }
function notaColor(n){ if(typeof n!=='number') return 'var(--gris-500)'; return n>=75?'var(--verde)': n>=65?'var(--amarillo)':'var(--rojo)'; }
function notaBadgeClass(n){ if(typeof n!=='number') return 'badge-gris'; return n>=75?'badge-verde': n>=65?'badge-amarillo':'badge-rojo'; }
function notaTexto(n){ return typeof n==='number' ? n : '—'; }
function notaEstado(n){ if(typeof n!=='number') return 'Sin nota'; return n>=75?'Bien':n>=65?'Regular':'Bajo'; }

/* ============================================================
   ESTADO GLOBAL
   ============================================================ */
let currentUser = null; // {role, data}
let currentSection = 'inicio';
let parentSelectedCarnet = null;
let teacherSelectedMateria = 'edfis';
let teacherSelectedCurso = 'sec-6B';
let selectedRoleTab = 'estudiante';

const ROLE_META = {
  estudiante:{ label:'Estudiante', icon:'user', color:'#1d4ed8' },
  padre:{ label:'Padre de Familia', icon:'parent', color:'#7c3aed' },
  maestro:{ label:'Maestro', icon:'teacher', color:'#16a34a' },
  administrador:{ label:'Administrador', icon:'admin', color:'#c98a06' },
};

/* ============================================================
   NAVEGACIÓN LANDING / LOGIN
   ============================================================ */
function goLogin(){
  document.getElementById('landing-screen').classList.add('hidden');
  document.getElementById('login-screen').classList.remove('hidden');
  renderRoleTabs();
}
function goLanding(){
  document.getElementById('login-screen').classList.add('hidden');
  document.getElementById('landing-screen').classList.remove('hidden');
}
function renderRoleTabs(){
  const wrap = document.getElementById('role-tabs');
  wrap.innerHTML = Object.keys(ROLE_META).map(r=>{
    const m = ROLE_META[r];
    return `<button type="button" class="role-tab ${r===selectedRoleTab?'active':''}" onclick="selectRoleTab('${r}')">${ic(m.icon)}<span>${m.label}</span></button>`;
  }).join('');
}
function selectRoleTab(r){
  selectedRoleTab = r;
  document.getElementById('login-user').value='';
  document.getElementById('login-pass').value='';
  document.getElementById('login-error-holder').innerHTML='';
  renderRoleTabs();
}
function togglePass(){
  const inp = document.getElementById('login-pass');
  const eye = document.getElementById('pass-eye');
  if(inp.type==='password'){ inp.type='text'; eye.innerHTML='<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><path d="m2 2 20 20"/>'; }
  else{ inp.type='password'; eye.innerHTML='<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>'; }
}

function handleLogin(e){
  e.preventDefault();
  const user = document.getElementById('login-user').value.trim();
  const pass = document.getElementById('login-pass').value.trim();
  const errHolder = document.getElementById('login-error-holder');
  errHolder.innerHTML = '';

  if(!dbListo){
    errHolder.innerHTML = `<div class="login-error">${ic('alert',17)} ${dbError || 'Conectando con la base de datos, espera un momento e inténtalo de nuevo.'}</div>`;
    return false;
  }

  let record = null, ok=false;
  if(selectedRoleTab==='estudiante'){
    record = Object.values(DB.students).find(s=>s.username===user);
    ok = record && record.password===pass;
  } else if(selectedRoleTab==='padre'){
    record = DB.parents[user];
    ok = record && record.password===pass;
  } else if(selectedRoleTab==='maestro'){
    record = DB.teachers[user];
    ok = record && record.password===pass;
  } else if(selectedRoleTab==='administrador'){
    record = DB.admins[user];
    ok = record && record.password===pass;
  }

  if(!user || !pass){
    errHolder.innerHTML = `<div class="login-error">${ic('alert',17)} Ingresa tu usuario y contraseña para continuar.</div>`;
    return false;
  }
  if(!ok){
    errHolder.innerHTML = `<div class="login-error">${ic('alert',17)} Usuario o contraseña incorrectos para el rol seleccionado.</div>`;
    return false;
  }

  currentUser = { role:selectedRoleTab, data:record };
  parentSelectedCarnet = null;
  showWelcome();
  return false;
}

/* ============================================================
   REGISTRO DE CUENTA
   ============================================================ */
let selectedRegisterRoleTab = 'estudiante';

function goRegister(){
  document.getElementById('login-screen').classList.add('hidden');
  document.getElementById('register-screen').classList.remove('hidden');
  selectedRegisterRoleTab = 'estudiante';
  renderRegisterRoleTabs();
  renderRegisterFormFields();
}
function goLoginFromRegister(){
  document.getElementById('register-screen').classList.add('hidden');
  document.getElementById('login-screen').classList.remove('hidden');
  document.getElementById('register-error-holder').innerHTML='';
}
function renderRegisterRoleTabs(){
  const wrap = document.getElementById('register-role-tabs');
  wrap.innerHTML = Object.keys(ROLE_META).map(r=>{
    const m = ROLE_META[r];
    return `<button type="button" class="role-tab ${r===selectedRegisterRoleTab?'active':''}" onclick="selectRegisterRoleTab('${r}')">${ic(m.icon)}<span>${m.label}</span></button>`;
  }).join('');
}
function selectRegisterRoleTab(r){
  selectedRegisterRoleTab = r;
  document.getElementById('register-error-holder').innerHTML='';
  renderRegisterRoleTabs();
  renderRegisterFormFields();
}
function renderRegisterFormFields(){
  const wrap = document.getElementById('register-form-fields');
  const btn = document.getElementById('register-submit-btn');
  if(selectedRegisterRoleTab==='estudiante'){
    btn.classList.remove('hidden');
    wrap.innerHTML = `
      <div class="login-field">
        <label class="field-label">Número de carnet</label>
        <input class="pill-input" id="reg-carnet" placeholder="Ingresa tu número de carnet" oninput="onRegCarnetInput()">
      </div>
      <div class="login-field">
        <label class="field-label">Usuario que deseas usar</label>
        <input class="pill-input" id="reg-username" placeholder="Elige tu usuario">
      </div>
      <div class="login-field">
        <label class="field-label">Contraseña</label>
        <input class="pill-input mono" id="reg-password-display" placeholder="Se completa con tu carnet" disabled>
      </div>
      <p class="field-hint">Por seguridad, tu contraseña siempre será tu número de carnet.</p>`;
  } else if(selectedRegisterRoleTab==='padre'){
    btn.classList.remove('hidden');
    wrap.innerHTML = `
      <div class="login-field">
        <label class="field-label">Usuario que deseas usar</label>
        <input class="pill-input" id="reg-username" placeholder="Elige tu usuario">
      </div>
      <div class="login-field">
        <label class="field-label">Contraseña</label>
        <input class="pill-input" id="reg-password" type="password" placeholder="Elige tu contraseña">
      </div>
      <div class="login-field">
        <label class="field-label">Número de carnet de tu hijo/a</label>
        <input class="pill-input" id="reg-carnet-hijo" placeholder="Carnet del estudiante">
      </div>
      <p class="field-hint">Usaremos este carnet para vincular tu cuenta con la información de tu hijo/a.</p>`;
  } else {
    btn.classList.add('hidden');
    wrap.innerHTML = `
      <div class="register-empty">
        ${ic('alert',34)}
        <div>Las cuentas de <b>${ROLE_META[selectedRegisterRoleTab].label}</b> son creadas directamente por la administración del colegio.<br>Solicita tu usuario y contraseña en dirección académica.</div>
      </div>`;
  }
}
function onRegCarnetInput(){
  const carnet = document.getElementById('reg-carnet').value.trim();
  const disp = document.getElementById('reg-password-display');
  if(disp) disp.value = carnet;
}
function handleRegister(){
  const errHolder = document.getElementById('register-error-holder');
  errHolder.innerHTML = '';

  if(selectedRegisterRoleTab==='estudiante'){
    const carnet = document.getElementById('reg-carnet').value.trim();
    const username = document.getElementById('reg-username').value.trim();
    if(!carnet || !username){
      errHolder.innerHTML = `<div class="login-error">${ic('alert',17)} Completa tu número de carnet y el usuario que deseas usar.</div>`;
      return;
    }
    const student = DB.students[carnet];
    if(!student){
      errHolder.innerHTML = `<div class="login-error">${ic('alert',17)} No se encontró un estudiante con ese número de carnet. Contacta a administración.</div>`;
      return;
    }
    const usernameTaken = Object.values(DB.students).some(s=>s.username===username && s.carnet!==carnet);
    if(usernameTaken){
      errHolder.innerHTML = `<div class="login-error">${ic('alert',17)} Ese usuario ya está en uso, elige otro.</div>`;
      return;
    }
    student.username = username;
    guardar(RUTAS.estudiantes + '/' + carnet + '/username', username);
    finishRegistration('estudiante', username, carnet);
  } else if(selectedRegisterRoleTab==='padre'){
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value.trim();
    const carnetHijo = document.getElementById('reg-carnet-hijo').value.trim();
    if(!username || !password || !carnetHijo){
      errHolder.innerHTML = `<div class="login-error">${ic('alert',17)} Completa usuario, contraseña y el carnet de tu hijo/a.</div>`;
      return;
    }
    if(!DB.students[carnetHijo]){
      errHolder.innerHTML = `<div class="login-error">${ic('alert',17)} No se encontró un estudiante con ese número de carnet.</div>`;
      return;
    }
    if(DB.parents[username]){
      errHolder.innerHTML = `<div class="login-error">${ic('alert',17)} Ese usuario ya está en uso, elige otro.</div>`;
      return;
    }
    const nuevoPadre = { username, password, nombre:'Padre/Madre de familia', hijos:[carnetHijo] };
    DB.parents[username] = nuevoPadre;
    guardar(RUTAS.padres + '/' + username, nuevoPadre);
    finishRegistration('padre', username, password);
  }
}
function finishRegistration(role, username, password){
  document.getElementById('register-screen').classList.add('hidden');
  document.getElementById('login-screen').classList.remove('hidden');
  selectedRoleTab = role;
  renderRoleTabs();
  document.getElementById('login-user').value = username;
  document.getElementById('login-pass').value = password;
  document.getElementById('login-error-holder').innerHTML = `<div class="login-error" style="background:var(--verde-bg); border-color:var(--verde-bd); color:var(--verde);">${ic('checkCircle',17)} Cuenta creada correctamente. Presiona "Ingresar" para continuar.</div>`;
}

function showWelcome(){
  document.getElementById('login-screen').classList.add('hidden');
  const overlay = document.getElementById('welcome-overlay');
  overlay.classList.remove('hidden');
  const meta = ROLE_META[currentUser.role];
  document.getElementById('welcome-role-text').textContent = meta.label.toUpperCase();
  document.getElementById('welcome-icon').innerHTML = ic(meta.icon,42);
  const subs = {
    estudiante:`Hola ${currentUser.data.nombre}, aquí tienes tus materias, calificaciones y tareas al día.`,
    padre:`Hola ${currentUser.data.nombre.split(' ')[0]}, consulta la información académica de tu hijo o hija.`,
    maestro:`Hola ${currentUser.data.nombreCorto || currentUser.data.nombre}, gestiona tus materias, asistencia y calificaciones.`,
    administrador:`Bienvenido al panel de control general de la institución.`,
  };
  document.getElementById('welcome-sub').textContent = subs[currentUser.role];
  setTimeout(()=>{
    overlay.classList.add('hidden');
    enterApp();
  }, 1600);
}

function enterApp(){
  document.getElementById('app-screen').classList.remove('hidden');
  currentSection = 'inicio';
  buildSidebar();
  renderSidebarUser();
  navigate('inicio');
}

function logout(){
  currentUser = null;
  parentSelectedCarnet = null;
  document.getElementById('app-screen').classList.add('hidden');
  document.getElementById('login-screen').classList.remove('hidden');
  document.getElementById('login-user').value='';
  document.getElementById('login-pass').value='';
  document.getElementById('login-error-holder').innerHTML='';
}

/* ============================================================
   SIDEBAR / NAV POR ROL
   ============================================================ */
const NAV_CONFIG = {
  estudiante:[
    {group:'General', items:[
      {id:'inicio', label:'Inicio', icon:'home'},
      {id:'miinformacion', label:'Mi información', icon:'idcard'},
    ]},
    {group:'Académico', items:[
      {id:'materias', label:'Mis materias', icon:'book'},
      {id:'calificaciones', label:'Calificaciones', icon:'chart'},
      {id:'asistencia', label:'Asistencia', icon:'calendarCheck'},
      {id:'tareas', label:'Tareas', icon:'clipboard'},
      {id:'historial', label:'Historial de trabajos', icon:'clock'},
      {id:'examenes', label:'Exámenes', icon:'examIcon'},
      {id:'calendario', label:'Calendario', icon:'calendar'},
    ]},
    {group:'Comunicación', items:[
      {id:'consultas', label:'Consultas', icon:'chat'},
      {id:'citaciones', label:'Citaciones', icon:'alert'},
      {id:'notificaciones', label:'Notificaciones', icon:'bell'},
    ]},
    {group:'Cuenta', items:[
      {id:'perfil', label:'Perfil', icon:'settings'},
    ]},
  ],
  padre:[
    {group:'General', items:[
      {id:'inicio', label:'Inicio', icon:'home'},
      {id:'buscarhijo', label:'Buscar hijo', icon:'search'},
      {id:'infoestudiante', label:'Información del estudiante', icon:'idcard'},
    ]},
    {group:'Académico', items:[
      {id:'calificaciones', label:'Calificaciones', icon:'chart'},
      {id:'asistencia', label:'Asistencia', icon:'calendarCheck'},
      {id:'tareas', label:'Tareas', icon:'clipboard'},
      {id:'examenes', label:'Exámenes', icon:'examIcon'},
      {id:'calendario', label:'Calendario', icon:'calendar'},
    ]},
    {group:'Comunicación', items:[
      {id:'consultas', label:'Consultas', icon:'chat'},
      {id:'citaciones', label:'Citaciones', icon:'alert'},
      {id:'notificaciones', label:'Notificaciones', icon:'bell'},
    ]},
    {group:'Cuenta', items:[
      {id:'perfil', label:'Perfil', icon:'settings'},
    ]},
  ],
  maestro:[
    {group:'General', items:[
      {id:'inicio', label:'Inicio', icon:'home'},
      {id:'misestudiantes', label:'Mis estudiantes', icon:'users'},
      {id:'mismaterias', label:'Mis materias', icon:'book'},
    ]},
    {group:'Gestión académica', items:[
      {id:'asistencia', label:'Asistencia', icon:'calendarCheck'},
      {id:'calificaciones', label:'Calificaciones', icon:'chart'},
      {id:'tareas', label:'Tareas', icon:'clipboard'},
      {id:'examenes', label:'Exámenes', icon:'examIcon'},
    ]},
    {group:'Comunicación', items:[
      {id:'consultas', label:'Consultas', icon:'chat'},
      {id:'citaciones', label:'Citaciones', icon:'alert'},
      {id:'notificaciones', label:'Notificaciones', icon:'bell'},
    ]},
  ],
  administrador:[
    {group:'General', items:[
      {id:'inicio', label:'Inicio', icon:'home'},
    ]},
    {group:'Gestión de usuarios', items:[
      {id:'usuarios', label:'Usuarios', icon:'users'},
      {id:'estudiantes', label:'Estudiantes', icon:'user'},
      {id:'padres', label:'Padres de Familia', icon:'parent'},
      {id:'maestros', label:'Maestros', icon:'teacher'},
    ]},
    {group:'Académico', items:[
      {id:'materiasadmin', label:'Materias', icon:'book'},
      {id:'cursos', label:'Cursos', icon:'building'},
      {id:'rendimientoadmin', label:'Rendimiento', icon:'chart'},
      {id:'asistenciaadmin', label:'Asistencia', icon:'calendarCheck'},
    ]},
    {group:'Sistema', items:[
      {id:'basedatos', label:'Base de datos', icon:'building'},
      {id:'configuracion', label:'Configuración', icon:'settings'},
    ]},
  ],
};

function buildSidebar(){
  const nav = document.getElementById('sidebar-nav');
  const groups = NAV_CONFIG[currentUser.role];
  nav.innerHTML = groups.map(g=>`
    <div class="nav-section-label">${g.group}</div>
    ${g.items.map(it=>`<a class="nav-item" data-nav="${it.id}" onclick="navigate('${it.id}')">${ic(it.icon)}<span>${it.label}</span></a>`).join('')}
  `).join('');
}
function renderSidebarUser(){
  const meta = ROLE_META[currentUser.role];
  const nombre = currentUser.data.nombreCompleto || currentUser.data.nombre;
  const initials = nombre.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
  document.getElementById('side-avatar').textContent = initials;
  document.getElementById('side-name').textContent = nombre;
  document.getElementById('side-role').textContent = meta.label;
  document.getElementById('top-avatar').textContent = initials;
}
function openSidebar(){ document.getElementById('sidebar').classList.add('open'); document.getElementById('overlay-bg').classList.add('show'); }
function closeSidebar(){ document.getElementById('sidebar').classList.remove('open'); document.getElementById('overlay-bg').classList.remove('show'); }

const SECTION_TITLES = {
  inicio:'Inicio', miinformacion:'Mi información', materias:'Mis materias', calificaciones:'Calificaciones',
  asistencia:'Asistencia', tareas:'Tareas', examenes:'Exámenes', calendario:'Calendario', consultas:'Consultas',
  notificaciones:'Notificaciones', perfil:'Perfil', buscarhijo:'Buscar hijo', infoestudiante:'Información del estudiante',
  misestudiantes:'Mis estudiantes', mismaterias:'Mis materias', usuarios:'Usuarios', estudiantes:'Estudiantes',
  padres:'Padres de Familia', maestros:'Maestros', materiasadmin:'Materias', cursos:'Cursos',
  rendimientoadmin:'Rendimiento', asistenciaadmin:'Asistencia', configuracion:'Configuración',
  basedatos:'Base de datos', citaciones:'Citaciones', historial:'Historial de trabajos',
};

function navigate(section){
  currentSection = section;
  document.querySelectorAll('.nav-item').forEach(el=>el.classList.toggle('active', el.dataset.nav===section));
  document.getElementById('topbar-title').textContent = SECTION_TITLES[section] || 'Inicio';
  closeSidebar();
  window.scrollTo(0,0);
  render();
}

/* ============================================================
   RENDER PRINCIPAL - despacha por rol
   ============================================================ */
function render(){
  const el = document.getElementById('main-content');
  let html = '';
  if(currentUser.role==='estudiante') html = renderEstudiante(currentSection);
  else if(currentUser.role==='padre') html = renderPadre(currentSection);
  else if(currentUser.role==='maestro') html = renderMaestro(currentSection);
  else if(currentUser.role==='administrador') html = renderAdmin(currentSection);
  if(currentSection!=='citaciones') html = bannerCitaciones() + html;
  el.innerHTML = `<div class="animate-in">${html}</div>`;
  pintarPinCitas();
  updateNotifDot();
}

function updateNotifDot(){
  document.getElementById('notif-dot').style.display = 'block';
}

/* ============================================================
   COMPONENTES REUTILIZABLES
   ============================================================ */
function gaugeSVG(value, size=96){
  const r = 40, c = 2*Math.PI*r;
  const pct = Math.max(0,Math.min(100,value));
  const offset = c - (pct/100)*c;
  const color = notaColor(pct);
  return `<div class="gauge-wrap" style="width:${size}px;height:${size}px;">
    <svg width="${size}" height="${size}" viewBox="0 0 100 100">
      <circle class="gauge-bg" cx="50" cy="50" r="${r}"></circle>
      <circle class="gauge-fg" cx="50" cy="50" r="${r}" stroke="${color}" stroke-dasharray="${c}" stroke-dashoffset="${offset}"></circle>
    </svg>
    <div class="gauge-label"><span class="n" style="color:${color}">${pct}</span><span class="u">PROMEDIO</span></div>
  </div>`;
}

function perfCard(rend){
  const cls = rend.nivel==='ok'?'ok':rend.nivel==='warn'?'warn':'danger';
  const icon = rend.nivel==='ok'?'checkCircle':'alert';
  return `<div class="card perf-card ${cls}">
    <div class="stat-icon ${rend.nivel==='ok'?'green':rend.nivel==='warn'?'yellow':'red'}" style="width:52px;height:52px;border-radius:14px;">${ic(icon,24)}</div>
    <div class="perf-text">
      <h3>${rend.titulo}</h3>
      <p>${rend.detalle}</p>
    </div>
  </div>`;
}

function dayChip(label, status){
  const map = {
    presente:{cls:'presente', icon:'check', txt:'Presente'},
    falta:{cls:'falta', icon:'x', txt:'Falta'},
    permiso:{cls:'permiso', icon:'clock', txt:'Permiso'},
    na:{cls:'na', icon:'', txt:'—'},
  };
  const m = map[status]||map.na;
  return `<div class="day-chip ${m.cls}" title="${m.txt}">
    <span class="d">${label}</span>
    <span class="s">${m.icon?ic(m.icon,14):'—'}</span>
  </div>`;
}

function attendanceBlock(student){
  const dayLabels=['L','M','M','J','V'];
  const pct = porcentajeAsistencia(student);
  const weeksHtml = student.asistencia.map(sem=>`
    <div style="margin-bottom:14px;">
      <div style="font-size:12.5px; font-weight:600; color:var(--gris-500); margin-bottom:8px;">${sem.semana}</div>
      <div class="day-row">${sem.dias.map((d,i)=>dayChip(dayLabels[i],d)).join('')}</div>
    </div>`).join('');
  const alert = pct<80 ? `<div class="login-error" style="margin-top:6px;">${ic('alert',17)} La asistencia está por debajo del 80% recomendado. Se sugiere dar seguimiento.</div>` : '';
  return asistenciaDetallada(student) + `<div class="card">
    <div class="card-head">
      <div><h3>Resumen por semana</h3><div class="sub">Registro de días presentes, faltas y permisos</div></div>
      <span class="badge ${pct>=90?'badge-verde':pct>=80?'badge-amarillo':'badge-rojo'}">${pct}% de asistencia</span>
    </div>
    ${weeksHtml}
    ${alert}
  </div>`;
}

function taskStatusBadge(estado){
  const map={
    pendiente:{cls:'badge-amarillo', txt:'Pendiente'},
    entregada:{cls:'badge-azul', txt:'Entregada'},
    calificada:{cls:'badge-verde', txt:'Calificada'},
    vencida:{cls:'badge-rojo', txt:'Vencida'},
  };
  const m = map[estado]||map.pendiente;
  return `<span class="badge ${m.cls}">${m.txt}</span>`;
}

function toast(msg){
  const wrap = document.getElementById('toast-wrap');
  const t = document.createElement('div');
  t.className='toast';
  t.innerHTML = `${ic('checkCircle',17)}<span>${msg}</span>`;
  wrap.appendChild(t);
  setTimeout(()=>t.remove(), 3200);
}

function emptyState(icon, title, sub){
  return `<div class="empty-state">${ic(icon,44)}<h4>${title}</h4><p>${sub}</p></div>`;
}

/* ============================================================
   ROL: ESTUDIANTE
   ============================================================ */
function renderEstudiante(section){
  const s = currentUser.data;
  const v = vistaAcademica(s);   // solo tareas y exámenes publicados por los profesores
  if(section==='inicio') return estInicio(v);
  if(section==='miinformacion') return estMiInformacion(s);
  if(section==='materias') return estMaterias(v);
  if(section==='calificaciones') return estCalificaciones(s);
  if(section==='asistencia') return attendanceBlock(s);
  if(section==='citaciones') return citacionesVista(s.carnet);
  if(section==='tareas') return renderTareas(v, false);
  if(section==='historial') return estHistorial(v);
  if(section==='examenes') return renderExamenes(v);
  if(section==='calendario') return renderCalendario(v);
  if(section==='consultas') return renderConsultas('estudiante', s);
  if(section==='notificaciones') return renderNotificaciones('estudiante');
  if(section==='perfil') return renderPerfil('estudiante', s);
  return estInicio(s);
}

function estInicio(s){
  const prom = promedioGeneral(s);
  const asis = porcentajeAsistencia(s);
  const pendientes = s.tareas.filter(t=>t.estado==='pendiente'||t.estado==='vencida').length;
  const rend = computeRendimiento(s);
  return `
  <div class="section-title">Hola, ${s.nombre} 👋</div>
  <div class="section-sub">Este es el resumen de tu desempeño académico actual.</div>

  <div class="grid grid-4" style="margin-top:22px;">
    <div class="card stat-card" onclick="navigate('calificaciones')"><div class="stat-top"><div class="stat-icon blue">${ic('chart')}</div></div><div class="stat-value">${prom}</div><div class="stat-label">Promedio general</div></div>
    <div class="card stat-card" onclick="navigate('asistencia')"><div class="stat-top"><div class="stat-icon green">${ic('calendarCheck')}</div></div><div class="stat-value">${asis}%</div><div class="stat-label">Asistencia general</div></div>
    <div class="card stat-card" onclick="navigate('tareas')"><div class="stat-top"><div class="stat-icon yellow">${ic('clipboard')}</div></div><div class="stat-value">${pendientes}</div><div class="stat-label">Tareas pendientes</div></div>
    <div class="card stat-card" onclick="navigate('examenes')"><div class="stat-top"><div class="stat-icon gray">${ic('examIcon')}</div></div><div class="stat-value">${s.examenes.filter(e=>!e.pasado).length}</div><div class="stat-label">Próximos exámenes</div></div>
  </div>

  <div style="margin-top:20px;">${perfCard(rend)}</div>

  <div class="grid grid-2" style="margin-top:20px; align-items:start;">
    <div class="card">
      <div class="card-head"><div><h3>Mis materias</h3><div class="sub">Calificación actual por materia</div></div><a class="link-btn" onclick="navigate('materias')">Ver todas ${ic('examIcon',13)}</a></div>
      ${MATERIAS_INFO.map(m=>`
        <div class="subject-row">
          <span class="subject-dot" style="background:${m.color};"></span>
          <span class="subject-name">${m.nombre}</span>
          <span class="subject-teacher">${m.maestro}</span>
          <span class="subject-grade" style="color:${notaColor(s.materias[m.id])}">${s.materias[m.id]}</span>
        </div>`).join('')}
    </div>
    <div class="card" style="display:flex; align-items:center; justify-content:center; flex-direction:column; gap:16px;">
      <h3 style="align-self:flex-start;">Rendimiento académico</h3>
      ${gaugeSVG(prom, 130)}
      <span class="badge ${rend.nivel==='ok'?'badge-verde':rend.nivel==='warn'?'badge-amarillo':'badge-rojo'}">${rend.nivel==='ok'?'Todo está bien':rend.nivel==='warn'?'En observación':'En riesgo'}</span>
    </div>
  </div>

  <div class="grid grid-2" style="margin-top:20px; align-items:start;">
    <div class="card">
      <div class="card-head"><div><h3>Tareas pendientes</h3><div class="sub">Próximas entregas</div></div><a class="link-btn" onclick="navigate('tareas')">Ver todas ${ic('examIcon',13)}</a></div>
      ${s.tareas.filter(t=>t.estado==='pendiente'||t.estado==='vencida').slice(0,4).map(t=>`
        <div class="list-item">
          <div class="list-icon ${t.estado==='vencida'?'red':'yellow'}" style="background:${t.estado==='vencida'?'var(--rojo-bg)':'var(--amarillo-bg)'}; color:${t.estado==='vencida'?'var(--rojo)':'var(--amarillo)'}">${ic('clipboard',16)}</div>
          <div class="list-body"><div class="list-title">${t.titulo}</div><div class="list-meta">${materiaNombre(t.materia)} · Entrega: ${t.entrega}</div></div>
          ${taskStatusBadge(t.estado)}
        </div>`).join('') || emptyState('checkCircle','Sin pendientes','No tienes tareas pendientes. Las nuevas tareas de tus profesores aparecerán aquí.')}
    </div>
    <div class="card">
      <div class="card-head"><div><h3>Próximos exámenes</h3><div class="sub">Fechas y temas</div></div><a class="link-btn" onclick="navigate('examenes')">Ver todos ${ic('examIcon',13)}</a></div>
      ${s.examenes.filter(e=>!e.pasado).slice(0,4).map(e=>`
        <div class="list-item">
          <div class="list-icon blue" style="background:var(--azul-100); color:var(--azul-700);">${ic('examIcon',16)}</div>
          <div class="list-body"><div class="list-title">${escHTML(e.tema)}</div><div class="list-meta">${materiaNombre(e.materia)} · ${e.fecha}</div></div>
        </div>`).join('') || emptyState('examIcon','Sin exámenes programados','Cuando tus profesores programen un examen, aparecerá aquí.')}
    </div>
  </div>`;
}

function estMiInformacion(s){
  return `
  <div class="section-title">Mi información</div>
  <div class="section-sub">Tus datos personales y académicos registrados en la plataforma.</div>
  <div class="grid grid-2" style="margin-top:20px; align-items:start;">
    <div class="card">
      <div class="card-head"><h3>Datos personales</h3></div>
      ${infoRow('Nombre completo', s.nombreCompleto)}
      ${infoRow('Número de carnet', s.carnet, true)}
      ${infoRow('Curso', cursoNombre(s.cursoId))}
      ${infoRow('Paralelo', s.paralelo)}
      ${infoRow('Fecha de nacimiento', s.fechaNacimiento)}
      ${infoRow('Correo electrónico', s.correo)}
      ${infoRow('Teléfono', s.telefono)}
      ${infoRow('Dirección', s.direccion)}
    </div>
    <div class="card">
      <div class="card-head"><h3>Materias y maestros</h3></div>
      ${MATERIAS_INFO.map(m=>`
        <div class="subject-row">
          <span class="subject-dot" style="background:${m.color};"></span>
          <span class="subject-name">${m.nombre}</span>
          <span class="subject-teacher">${m.maestro}</span>
        </div>`).join('')}
    </div>
  </div>`;
}
function infoRow(label, value, mono){
  return `<div style="display:flex; justify-content:space-between; padding:11px 2px; border-bottom:1px solid var(--gris-100); font-size:14px;">
    <span style="color:var(--gris-500);">${label}</span><span style="font-weight:600; ${mono?'font-family:var(--font-mono);':''}">${value}</span>
  </div>`;
}

function estMaterias(s){
  return `
  <div class="section-title">Mis materias</div>
  <div class="section-sub">Consulta tus notas, tareas, exámenes y observaciones por materia.</div>
  <div class="grid grid-2" style="margin-top:20px;">
    ${MATERIAS_INFO.map(m=>{
      const nota = s.materias[m.id];
      const obs = s.observaciones[m.id];
      const tareasM = s.tareas.filter(t=>t.materia===m.id);
      const examM = s.examenes.filter(e=>e.materia===m.id);
      return `<div class="card">
        <div class="card-head">
          <div style="display:flex; align-items:center; gap:10px;"><span class="subject-dot" style="background:${m.color}; width:11px; height:11px;"></span><h3>${m.nombre}</h3></div>
          <span class="badge ${notaBadgeClass(nota)}">${notaTexto(nota)}${typeof nota==='number'?'/100':''}</span>
        </div>
        <div class="section-sub" style="margin-bottom:10px;">Maestro: ${m.maestro}</div>
        <div style="font-size:13px; color:var(--gris-700); background:var(--gris-50); border-radius:9px; padding:10px 12px; margin-bottom:12px;">${obs?'"'+obs+'"':'<span style="color:var(--gris-500)">Sin observaciones registradas.</span>'}</div>
        <div style="font-size:12.5px; font-weight:700; color:var(--gris-500); text-transform:uppercase; letter-spacing:.04em; margin-bottom:6px;">Tareas (${tareasM.length})</div>
        ${tareasM.map(t=>`<div style="display:flex; justify-content:space-between; padding:6px 0; font-size:13px;"><span>${t.titulo}</span>${taskStatusBadge(t.estado)}</div>`).join('')}
        ${examM.length? `<div style="font-size:12.5px; font-weight:700; color:var(--gris-500); text-transform:uppercase; letter-spacing:.04em; margin:10px 0 6px;">Exámenes</div>${examM.map(e=>`<div style="font-size:13px; padding:4px 0;">${e.tema} — <span class="mono">${e.fecha}</span></div>`).join('')}`:''}
      </div>`;
    }).join('')}
  </div>`;
}

function estCalificaciones(s){
  const prom = promedioGeneral(s);
  return `
  <div class="section-title">Calificaciones</div>
  <div class="section-sub">Detalle de calificaciones por materia y promedio general.</div>
  <div class="grid grid-2" style="margin-top:20px; align-items:start;">
    <div class="card">
      <div class="table-wrap"><table>
        <thead><tr><th>Materia</th><th>Maestro</th><th>Nota</th><th>Estado</th></tr></thead>
        <tbody>
        ${MATERIAS_INFO.map(m=>{
          const n = s.materias[m.id];
          return `<tr><td style="font-weight:600;">${m.nombre}</td><td>${m.maestro}</td><td class="mono" style="font-weight:700; color:${notaColor(n)}">${notaTexto(n)}</td><td><span class="badge ${notaBadgeClass(n)}">${notaEstado(n)}</span></td></tr>`;
        }).join('')}
        </tbody>
      </table></div>
    </div>
    <div class="card" style="display:flex; flex-direction:column; align-items:center; gap:14px;">
      <h3 style="align-self:flex-start;">Promedio general</h3>
      ${gaugeSVG(prom,140)}
      <p style="font-size:13px; color:var(--gris-500); text-align:center;">Calculado automáticamente a partir del promedio de tus ${MATERIAS_INFO.length} materias.</p>
    </div>
  </div>`;
}

/* ============================================================
   TAREAS Y EXÁMENES (vista de estudiante y padre)
   Solo se muestran las que publican los profesores. Los datos
   antiguos siguen guardados en la base de datos, simplemente no se listan.
   ============================================================ */
const MESES_CORTOS = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
function fechaADate(txt){
  const p = String(txt||'').split('/');
  if(p.length!==3) return null;
  const d = new Date(+p[2], +p[1]-1, +p[0]);
  return isNaN(d) ? null : d;
}
function diasHasta(txt){
  const d = fechaADate(txt);
  if(!d) return null;
  const h = new Date(); h.setHours(0,0,0,0);
  return Math.round((d - h) / 86400000);
}
function vistaAcademica(s){
  if(!s) return s;
  const porFecha = campo => (a,b)=>{
    const da = fechaADate(a[campo]), db = fechaADate(b[campo]);
    return (da?da.getTime():0) - (db?db.getTime():0);
  };
  const tareas = aArreglo(s.tareas).map(t=>{
    if(!t || !t.tareaId) return null;
    const o = DB.tareas.find(x=>x.id===t.tareaId);
    if(!o) return null;
    const entrega = t.entrega || o.entrega;
    let estado = t.estado || 'pendiente';
    const d = diasHasta(entrega);
    if(estado==='pendiente' && d!==null && d<0) estado = 'vencida';
    return Object.assign({}, t, { estado, entrega, max: t.max || o.puntaje, _o:o });
  }).filter(Boolean).sort(porFecha('entrega'));
  const examenes = aArreglo(s.examenes).map(e=>{
    if(!e || !e.examenId) return null;
    const o = DB.examenes.find(x=>x.id===e.examenId);
    if(!o) return null;
    const fecha = e.fecha || o.fecha;
    const d = diasHasta(fecha);
    return Object.assign({}, e, { fecha, _o:o, pasado: d!==null && d<0 });
  }).filter(Boolean).sort(porFecha('fecha'));
  return Object.assign({}, s, { tareas, examenes });
}

function bloqueFecha(txt){
  const d = fechaADate(txt);
  return d ? `<div class="ac-fecha"><span class="d">${d.getDate()}</span><span class="m">${MESES_CORTOS[d.getMonth()]}</span></div>`
           : `<div class="ac-fecha"><span class="d">—</span><span class="m">sin fecha</span></div>`;
}
function textoPlazo(dias, pasadoTxt){
  if(dias===null) return {txt:'Sin fecha', cls:''};
  if(dias<0)  return {txt: pasadoTxt + ' hace ' + (-dias) + (dias===-1?' día':' días'), cls:'urgente'};
  if(dias===0) return {txt:'Es hoy', cls:'urgente'};
  if(dias===1) return {txt:'Mañana', cls:'pronto'};
  if(dias<=3)  return {txt:'En ' + dias + ' días', cls:'pronto'};
  return {txt:'En ' + dias + ' días', cls:'ok'};
}

function vacioAcademico(tipo, esPadre){
  const esTarea = tipo==='tareas';
  const titulo = esTarea ? (esPadre?'Todavía no hay tareas asignadas':'Aún no tienes tareas')
                         : (esPadre?'Todavía no hay exámenes programados':'Aún no tienes exámenes programados');
  const texto = esTarea
    ? (esPadre ? 'Cuando los profesores publiquen una tarea para el curso de su hijo/a, aparecerá aquí al instante con su fecha de entrega.'
               : 'Cuando tus profesores publiquen una tarea para tu curso, aparecerá aquí al instante con su fecha de entrega e instrucciones.')
    : (esPadre ? 'Cuando un profesor programe un examen para el curso de su hijo/a, verá aquí la fecha, la hora y los temas.'
               : 'Cuando un profesor programe un examen para tu curso, verás aquí la fecha, la hora y los temas que entran.');
  const svg = `<svg width="120" height="104" viewBox="0 0 120 104" fill="none" aria-hidden="true">
    <ellipse cx="60" cy="96" rx="42" ry="6" fill="#fde6df"/>
    <rect x="28" y="14" width="64" height="78" rx="10" fill="#fff" stroke="#bae6fd" stroke-width="2"/>
    <rect x="46" y="8" width="28" height="12" rx="4" fill="#c8321f"/>
    ${esTarea
      ? `<rect x="40" y="34" width="10" height="10" rx="3" fill="#fde6df" stroke="#ee7a63" stroke-width="1.5"/><rect x="56" y="37" width="26" height="4" rx="2" fill="#cbd5e1"/>
         <rect x="40" y="52" width="10" height="10" rx="3" fill="#fde6df" stroke="#ee7a63" stroke-width="1.5"/><rect x="56" y="55" width="20" height="4" rx="2" fill="#cbd5e1"/>
         <rect x="40" y="70" width="10" height="10" rx="3" fill="#fde6df" stroke="#ee7a63" stroke-width="1.5"/><rect x="56" y="73" width="23" height="4" rx="2" fill="#cbd5e1"/>`
      : `<rect x="38" y="32" width="44" height="8" rx="3" fill="#fde6df"/>
         <circle cx="60" cy="64" r="16" fill="#fff5f2" stroke="#ee7a63" stroke-width="2"/><path d="M60 55v9l6 4" stroke="#c8321f" stroke-width="2.5" stroke-linecap="round"/>`}
    <circle cx="96" cy="22" r="4" fill="#2e7d32" opacity=".85"/><circle cx="20" cy="40" r="3" fill="#ee7a63"/>
  </svg>`;
  return `<div class="ac-vacio">${svg}<h3>${titulo}</h3><p>${texto}</p>
    <div class="pasos"><span>${ic('teacher',14)} El profesor publica</span><span>${ic('bell',14)} Llega en tiempo real</span><span>${ic('calendar',14)} Queda en el calendario</span></div>
  </div>`;
}

let filtroTareasAc = 'todas';
function renderTareas(s, isParentView){
  const lista = s.tareas;
  const cab = `
  <div class="section-title">Tareas</div>
  <div class="section-sub">${isParentView?'Tareas que los profesores asignaron al curso de su hijo/a.':'Tareas que tus profesores publicaron para tu curso.'}</div>`;
  if(!lista.length) return cab + vacioAcademico('tareas', isParentView);

  const filtros = [
    ['todas','Todas','var(--azul-800)'],
    ['pendiente','Pendientes','#c98a06'],
    ['entregada','Entregadas','var(--azul-700)'],
    ['calificada','Calificadas','var(--verde)'],
    ['vencida','Vencidas','var(--rojo)'],
  ];
  const cuenta = k => k==='todas' ? lista.length : lista.filter(t=>t.estado===k).length;
  const visibles = filtroTareasAc==='todas' ? lista : lista.filter(t=>t.estado===filtroTareasAc);

  const tarjeta = t=>{
    const o = t._o || {};
    const dias = diasHasta(t.entrega);
    let plazo;
    if(t.estado==='calificada') plazo = {txt:'Nota: ' + t.nota + '/' + (t.max||o.puntaje||'—'), cls:'ok'};
    else if(t.estado==='entregada') plazo = {txt:'Entregada, en revisión', cls:'ok'};
    else plazo = textoPlazo(dias, 'Venció');
    return `<article class="ac-card ${t.estado==='calificada'?'apagada':''}" style="--mc:${materiaColor(t.materia)}">
      ${bloqueFecha(t.entrega)}
      <div>
        <div class="ac-top"><span class="ac-mat"><span class="pt"></span>${escHTML(materiaNombre(t.materia))}</span><span class="ac-tipo">${escHTML(o.tipo||'Tarea')}</span></div>
        <h4>${escHTML(t.titulo)}</h4>
        ${o.descripcion ? `<p class="ac-desc">${escHTML(o.descripcion)}</p>` : ''}
        <div class="ac-pie">
          ${o.maestroNombre ? `<span>${ic('teacher',13)} ${escHTML(o.maestroNombre)}</span>` : ''}
          <span>${ic('calendar',13)} Entrega ${escHTML(t.entrega)}</span>
          ${(t.max||o.puntaje) ? `<span>${ic('target',13)} ${t.max||o.puntaje} pts</span>` : ''}
          <span class="ac-plazo ${plazo.cls}">${ic('clock',13)} ${plazo.txt}</span>
        </div>
      </div>
      <div class="ac-estado">${taskStatusBadge(t.estado)}</div>
    </article>`;
  };

  return cab + `
  <div class="ac-resumen" role="group" aria-label="Filtrar tareas">
    ${filtros.map(([k,l,c])=>`<button type="button" class="ac-filtro" style="--fc:${c}" aria-pressed="${filtroTareasAc===k}" onclick="filtroTareasAc='${k}'; navigate('tareas')">
      <span class="n">${cuenta(k)}</span><span class="l">${l}</span></button>`).join('')}
  </div>
  <div class="ac-lista">
    ${visibles.map(tarjeta).join('') || `<div class="ac-vacio-mini">No hay tareas en este estado.</div>`}
  </div>`;
}

/* ============================================================
   HISTORIAL DE TRABAJOS (estudiante)
   Todo lo que enviaron los profesores, qué presentó el estudiante
   y si el profesor ya lo registró.
   ============================================================ */
let filtroHist = 'todas', filtroHistMat = 'todas';
function estHistorial(s){
  const lista = s.tareas.slice().sort((a,b)=>String((b._o||{}).creada||'').localeCompare(String((a._o||{}).creada||'')));
  const cab = `<div class="section-title">Historial de trabajos</div>
  <div class="section-sub">Todo lo que tus profesores enviaron, lo que presentaste y si ya quedó registrado.</div>`;
  if(!lista.length) return cab + emptyState('clock','Todavía no hay historial','Cuando un profesor publique una tarea para tu curso, aparecerá aquí con su estado.');
  const pres = t=>t.estado==='entregada'||t.estado==='calificada';
  const conNota = t=>typeof t.nota==='number';
  const filtros = [
    ['todas','Publicadas','var(--azul-800)', ()=>true],
    ['presentadas','Presentadas','var(--azul-700)', pres],
    ['connota','Con nota registrada','var(--verde)', conNota],
    ['pendientes','Por presentar','#c98a06', t=>t.estado==='pendiente'],
    ['vencidas','No presentadas','var(--rojo)', t=>t.estado==='vencida'],
  ];
  const fAct = (filtros.find(f=>f[0]===filtroHist)||filtros[0])[3];
  const mats = [...new Set(lista.map(t=>t.materia))];
  if(filtroHistMat!=='todas' && !mats.includes(filtroHistMat)) filtroHistMat = 'todas';
  const visibles = lista.filter(t=>fAct(t) && (filtroHistMat==='todas' || t.materia===filtroHistMat));
  const tarjeta = t=>{
    const o = t._o || {}, max = t.max || o.puntaje || '—';
    const pub = o.creada ? new Date(o.creada).toLocaleDateString('es-BO') : (o.subida || '—');
    const miTrabajo = pres(t) ? '<span class="badge badge-azul">Presentado</span>'
                    : t.estado==='vencida' ? '<span class="badge badge-rojo">No presentado</span>'
                    : '<span class="badge badge-amarillo">Por presentar</span>';
    const reg = conNota(t) ? `<span class="badge badge-verde">Registrado · ${t.nota}/${max}</span>`
              : pres(t) ? '<span class="badge badge-azul">Entrega anotada · falta la nota</span>'
              : '<span class="badge badge-gris">Sin registrar</span>';
    const fino = conNota(t) || pres(t) ? (t.fechaRegistro ? `Anotado por el profesor el ${escHTML(t.fechaRegistro)}` : 'Anotado por el profesor') : 'El profesor aún no lo registró';
    return `<article class="hist-card" style="--mc:${materiaColor(t.materia)}">
      <div class="hist-head">
        <div style="flex:1;min-width:200px;">
          <div class="ac-top"><span class="ac-mat"><span class="pt"></span>${escHTML(materiaNombre(t.materia))}</span><span class="ac-tipo">${escHTML(o.tipo||'Tarea')}</span></div>
          <h4>${escHTML(t.titulo)}</h4>
          ${o.maestroNombre ? `<div class="ac-pie"><span>${ic('teacher',13)} ${escHTML(o.maestroNombre)}</span><span>${ic('target',13)} ${max} pts</span></div>` : ''}
        </div>
        <div class="hist-pub">Enviada el ${escHTML(pub)}<br>Entrega: ${escHTML(t.entrega||'—')}</div>
      </div>
      <div class="hist-estados">
        <div><small>Mi trabajo</small>${miTrabajo}</div>
        <div><small>Registro del profesor</small>${reg}<span class="fino">${fino}</span></div>
      </div>
    </article>`;
  };
  return cab + `
  <div class="ac-resumen" role="group" aria-label="Filtrar historial">
    ${filtros.map(([k,l,c,fn])=>`<button type="button" class="ac-filtro" style="--fc:${c}" aria-pressed="${filtroHist===k}" onclick="filtroHist='${k}'; navigate('historial')">
      <span class="n">${lista.filter(fn).length}</span><span class="l">${l}</span></button>`).join('')}
  </div>
  <div class="hist-barra">
    <label class="field-label" for="hist-mat" style="margin:0;">Materia</label>
    <select class="pill-input" id="hist-mat" style="max-width:220px;padding:8px 11px;" onchange="filtroHistMat=this.value; navigate('historial')">
      <option value="todas">Todas</option>${mats.map(m=>`<option value="${m}" ${filtroHistMat===m?'selected':''}>${escHTML(materiaNombre(m))}</option>`).join('')}
    </select>
  </div>
  <div class="ac-lista">${visibles.map(tarjeta).join('') || '<div class="ac-vacio-mini">No hay trabajos con este filtro.</div>'}</div>`;
}

function renderExamenes(s, isParentView){
  const cab = `
  <div class="section-title">Exámenes</div>
  <div class="section-sub">${isParentView?'Evaluaciones programadas por los profesores para el curso de su hijo/a.':'Evaluaciones programadas por tus profesores, con fecha, hora y temas.'}</div>`;
  if(!s.examenes.length) return cab + vacioAcademico('examenes', isParentView);

  const proximos = s.examenes.filter(e=>!e.pasado);
  const pasados  = s.examenes.filter(e=>e.pasado).reverse();
  const siguiente = proximos[0];

  const tarjeta = (e, apagada)=>{
    const o = e._o || {};
    const plazo = textoPlazo(diasHasta(e.fecha), 'Fue');
    return `<article class="ac-card ${apagada?'apagada':''}" style="--mc:${materiaColor(e.materia)}">
      ${bloqueFecha(e.fecha)}
      <div>
        <div class="ac-top"><span class="ac-mat"><span class="pt"></span>${escHTML(materiaNombre(e.materia))}</span><span class="ac-tipo">${escHTML(o.tipo||'Examen')}</span></div>
        <h4>${escHTML(e.tema)}</h4>
        ${o.descripcion ? `<p class="ac-desc">${escHTML(o.descripcion)}</p>` : ''}
        <div class="ac-pie">
          ${o.maestroNombre ? `<span>${ic('teacher',13)} ${escHTML(o.maestroNombre)}</span>` : ''}
          ${o.hora ? `<span>${ic('clock',13)} ${escHTML(o.hora)}</span>` : ''}
          ${o.puntaje ? `<span>${ic('target',13)} ${o.puntaje} pts</span>` : ''}
          <span class="ac-plazo ${apagada?'':plazo.cls}">${ic('calendar',13)} ${plazo.txt}</span>
        </div>
      </div>
      <div class="ac-estado">${apagada?'<span class="badge badge-gris">Realizado</span>':'<span class="badge badge-azul">Programado</span>'}</div>
    </article>`;
  };

  let hero = '';
  if(siguiente){
    const o = siguiente._o || {};
    const d = diasHasta(siguiente.fecha);
    hero = `<div class="ac-hero">
      <div class="cuenta"><span class="n">${d===0?'Hoy':d}</span><span class="l">${d===0?'es el examen':d===1?'día restante':'días restantes'}</span></div>
      <div class="info">
        <small>Próximo examen · ${escHTML(materiaNombre(siguiente.materia))}</small>
        <h3>${escHTML(siguiente.tema)}</h3>
        <div class="det">
          <span>${ic('calendar',14)} ${escHTML(siguiente.fecha)}</span>
          ${o.hora?`<span>${ic('clock',14)} ${escHTML(o.hora)}</span>`:''}
          ${o.tipo?`<span>${ic('examIcon',14)} ${escHTML(o.tipo)}</span>`:''}
          ${o.maestroNombre?`<span>${ic('teacher',14)} ${escHTML(o.maestroNombre)}</span>`:''}
        </div>
      </div>
    </div>`;
  }

  return cab + hero + `
  ${proximos.length ? `<div class="ac-sub">Todos los próximos <span class="c">${proximos.length}</span></div><div class="ac-lista">${proximos.map(e=>tarjeta(e,false)).join('')}</div>`
                    : `<div class="ac-vacio-mini" style="margin-top:20px;">No hay exámenes próximos. Los profesores te avisarán cuando programen uno nuevo.</div>`}
  ${pasados.length ? `<div class="ac-sub">Ya realizados <span class="c">${pasados.length}</span></div><div class="ac-lista">${pasados.map(e=>tarjeta(e,true)).join('')}</div>` : ''}`;
}

function renderCalendario(s){
  const events = [
    ...s.tareas.map(t=>({fecha:t.entrega, tipo:'Tarea', txt:t.titulo, color:'var(--amarillo)'})),
    ...s.examenes.map(e=>({fecha:e.fecha, tipo:'Examen', txt:e.tema, color:'var(--rojo)'})),
  ].sort((a,b)=> a.fecha.split('/').reverse().join('').localeCompare(b.fecha.split('/').reverse().join('')));
  return `
  <div class="section-title">Calendario académico</div>
  <div class="section-sub">Tareas, exámenes y actividades importantes.</div>
  <div class="card" style="margin-top:20px;">
    ${events.map(e=>`
      <div class="list-item">
        <div class="list-icon" style="background:${e.tipo==='Tarea'?'var(--amarillo-bg)':'var(--rojo-bg)'}; color:${e.color};">${ic(e.tipo==='Tarea'?'clipboard':'examIcon',16)}</div>
        <div class="list-body"><div class="list-title">${e.txt}</div><div class="list-meta">${e.tipo}</div></div>
        <span class="badge badge-gris mono">${e.fecha}</span>
      </div>`).join('') || emptyState('calendar','Calendario sin actividades','Las tareas y exámenes que publiquen los profesores aparecerán aquí por fecha.')}
  </div>`;
}

/* Consultas: compartido entre estudiante, padre, maestro */
function renderConsultas(viewerRole, contextData){
  let carnet = viewerRole==='estudiante'? contextData.carnet : viewerRole==='padre'? parentSelectedCarnet : null;
  let misConsultas;
  if(viewerRole==='maestro'){
    misConsultas = DB.consultas.filter(c=>c.maestro===contextData.username);
  } else {
    misConsultas = DB.consultas.filter(c=>c.carnet===carnet);
  }

  const formHtml = (viewerRole==='estudiante'||viewerRole==='padre') ? `
    <div class="card" style="margin-bottom:20px;">
      <div class="card-head"><h3>Nueva consulta</h3></div>
      <div class="grid grid-2">
        <div><label class="field-label">Materia</label>
          <select class="pill-input" id="nc-materia" onchange="updateConsultaMaestro()">${materiasConMaestro().map(m=>`<option value="${m.id}">${m.nombre}</option>`).join('')}</select>
        </div>
        <div><label class="field-label">Maestro</label>
          <input class="pill-input" id="nc-maestro-display" value="${(materiasConMaestro()[0]||{}).maestro||''}" disabled>
        </div>
      </div>
      <div style="margin-top:14px;"><label class="field-label">Asunto</label><input class="pill-input" id="nc-asunto" placeholder="Ej. Duda sobre una calificación"></div>
      <div style="margin-top:14px;"><label class="field-label">Mensaje</label><textarea class="pill-input" id="nc-mensaje" rows="3" placeholder="Explica tu duda o problema..."></textarea></div>
      <button class="btn btn-primary" style="margin-top:14px;" onclick="crearConsulta('${viewerRole}','${carnet||''}')">${ic('send',15)} Enviar consulta</button>
    </div>` : '';

  const listHtml = misConsultas.length ? misConsultas.map(c=>`
    <div class="card" style="margin-bottom:16px;">
      <div class="card-head">
        <div><h3>${c.asunto}</h3><div class="sub">${materiaNombre(c.materiaId)} ${viewerRole==='maestro'?'· Carnet '+c.carnet:''}</div></div>
        <span class="badge ${c.estado==='respondida'?'badge-verde':'badge-amarillo'}">${c.estado==='respondida'?'Respondida':'Pendiente'}</span>
      </div>
      <div class="chat-thread">
        ${c.mensajes.map(m=>`<div class="chat-bubble ${m.rol==='maestro'?(viewerRole==='maestro'?'me':'them'):(viewerRole==='maestro'?'them':'me')}"><div>${m.texto}</div><div class="meta">${m.autor} · ${m.fecha}</div></div>`).join('')}
      </div>
      <div style="display:flex; gap:8px; margin-top:12px;">
        <input class="pill-input" id="reply-${c.id}" placeholder="${viewerRole==='maestro'?'Responder al estudiante...':'Escribir un mensaje...'}">
        <button class="btn btn-primary btn-sm" onclick="responderConsulta('${c.id}','${viewerRole}')">${ic('send',15)}</button>
      </div>
    </div>
  `).join('') : emptyState('inbox','Sin consultas','Aún no hay consultas registradas.');

  return `
  <div class="section-title">Consultas</div>
  <div class="section-sub">${viewerRole==='maestro'?'Consultas recibidas de estudiantes y padres de familia.':'Comunícate directamente con los maestros sobre tus materias.'}</div>
  <div style="margin-top:20px;">${formHtml}${listHtml}</div>`;
}

function materiasConMaestro(){
  const conMaestro = MATERIAS_INFO.filter(m=>m.maestroUsername && DB.teachers[m.maestroUsername]);
  return conMaestro.length ? conMaestro : MATERIAS_INFO;
}
function crearConsulta(viewerRole, carnet){
  const materiaId = document.getElementById('nc-materia').value;
  const asunto = document.getElementById('nc-asunto').value.trim();
  const mensaje = document.getElementById('nc-mensaje').value.trim();
  if(!asunto || !mensaje){ toast('Completa el asunto y el mensaje.'); return; }
  const autor = currentUser.data.nombre;
  const rol = viewerRole==='estudiante'?'estudiante':'padre';
  const materiaInfo = MATERIAS_INFO.find(x=>x.id===materiaId);
  const maestroUsername = materiaInfo ? materiaInfo.maestroUsername : Object.keys(DB.teachers)[0];
  const nuevaConsulta = {
    id:'c'+Date.now(), carnet:carnet, materiaId, maestro:maestroUsername, asunto, estado:'pendiente', autorInicial:rol,
    mensajes:[{autor, rol, texto:mensaje, fecha:fechaHoraActual()}]
  };
  DB.consultas.push(nuevaConsulta);
  guardar(RUTAS.consultas + '/' + nuevaConsulta.id, nuevaConsulta);
  toast('Consulta enviada a '+(materiaInfo?materiaInfo.maestro:'tu maestro')+' correctamente.');
  navigate('consultas');
}
function updateConsultaMaestro(){
  const sel = document.getElementById('nc-materia');
  const disp = document.getElementById('nc-maestro-display');
  if(!sel || !disp) return;
  const m = MATERIAS_INFO.find(x=>x.id===sel.value);
  disp.value = m ? m.maestro : '';
}
function responderConsulta(id, viewerRole){
  const input = document.getElementById('reply-'+id);
  const texto = input.value.trim();
  if(!texto) return;
  const c = DB.consultas.find(x=>x.id===id);
  const autor = viewerRole==='maestro' ? currentUser.data.nombre : currentUser.data.nombre;
  const rol = viewerRole==='maestro'?'maestro':(viewerRole==='padre'?'padre':'estudiante');
  c.mensajes.push({autor:viewerRole==='maestro'?currentUser.data.nombre:autor, rol, texto, fecha:fechaHoraActual()});
  if(viewerRole==='maestro') c.estado='respondida';
  guardar(RUTAS.consultas + '/' + c.id, c);
  toast('Mensaje enviado y guardado correctamente.');
  navigate('consultas');
}

function renderNotificaciones(role){
  const data = {
    estudiante:[
      {icon:'clipboard', color:'yellow', txt:'Nueva tarea asignada: "Guía de fracciones" en Matemáticas.', fecha:'Hace 1 día'},
      {icon:'chart', color:'green', txt:'Tu tarea "Vocabulary worksheet" fue calificada: 19/20.', fecha:'Hace 2 días'},
      {icon:'examIcon', color:'blue', txt:'Examen de Ciencias Naturales programado para el 28 de agosto.', fecha:'Hace 3 días'},
      {icon:'chat', color:'blue', txt:'Tu maestro respondió tu consulta.', fecha:'Hace 3 días'},
    ],
    padre:[
      {icon:'alert', color:'red', txt:'Alerta de rendimiento: tu hijo/a se encuentra en riesgo académico.', fecha:'Hace 1 día'},
      {icon:'calendarCheck', color:'red', txt:'Falta registrada el día miércoles en curso 5to A.', fecha:'Hace 2 días'},
      {icon:'clipboard', color:'yellow', txt:'Tareas pendientes por entregar esta semana.', fecha:'Hace 2 días'},
      {icon:'chart', color:'green', txt:'Nueva calificación registrada en Inglés.', fecha:'Hace 4 días'},
    ],
    maestro:[
      {icon:'chat', color:'blue', txt:'Nueva consulta recibida de Alejandro sobre Matemática.', fecha:'Hace 1 día'},
      {icon:'clipboard', color:'yellow', txt:'Tienes 2 tareas pendientes de calificar en Lenguaje.', fecha:'Hace 2 días'},
      {icon:'calendarCheck', color:'gray', txt:'Recuerda registrar la asistencia del día de hoy.', fecha:'Hace 3 días'},
    ],
    administrador:[
      {icon:'users', color:'blue', txt:'Se registró un nuevo estudiante en el sistema.', fecha:'Hace 1 día'},
      {icon:'alert', color:'red', txt:'2 estudiantes en alerta de bajo rendimiento este mes.', fecha:'Hace 2 días'},
      {icon:'settings', color:'gray', txt:'Copia de seguridad del sistema completada.', fecha:'Hace 3 días'},
    ],
  };
  const items = data[role]||[];
  return `
  <div class="section-title">Notificaciones</div>
  <div class="section-sub">Avisos y alertas relacionadas con tu actividad en la plataforma.</div>
  <div class="card" style="margin-top:20px;">
    ${items.map(n=>`<div class="list-item">
      <div class="list-icon ${n.color}">${ic(n.icon,16)}</div>
      <div class="list-body"><div class="list-title">${n.txt}</div><div class="list-meta">${n.fecha}</div></div>
    </div>`).join('')}
  </div>`;
}

function renderPerfil(role, data){
  const nombre = data.nombreCompleto || data.nombre;
  const initials = nombre.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
  return `
  <div class="section-title">Perfil</div>
  <div class="section-sub">Información de tu cuenta en la plataforma.</div>
  <div class="card" style="margin-top:20px; max-width:520px;">
    <div style="display:flex; align-items:center; gap:16px; margin-bottom:20px;">
      <div class="avatar" style="width:56px; height:56px; font-size:19px; border-radius:14px;">${initials}</div>
      <div><div style="font-weight:700; font-size:17px;">${nombre}</div><span class="badge badge-azul">${ROLE_META[currentUser.role].label}</span></div>
    </div>
    ${infoRow('Usuario', data.username)}
    ${data.correo?infoRow('Correo', data.correo):''}
    ${data.telefono?infoRow('Teléfono', data.telefono):''}
    ${data.carnet?infoRow('Carnet', data.carnet, true):''}
    <button class="btn btn-secondary" style="margin-top:18px;" onclick="toast('Función disponible próximamente.')">${ic('edit',15)} Editar información</button>
  </div>`;
}

/* ============================================================
   ROL: PADRE DE FAMILIA
   ============================================================ */
function renderPadre(section){
  const p = currentUser.data;
  const hijo = parentSelectedCarnet ? DB.students[parentSelectedCarnet] : null;

  if(section==='buscarhijo' || (!hijo && section!=='inicio' && section!=='notificaciones' && section!=='perfil')) return padreBuscar();
  if(section==='inicio') return hijo ? padreInicio(vistaAcademica(hijo)) : padreBuscar();
  if(section==='infoestudiante') return estMiInformacion(hijo);
  if(section==='calificaciones') return estCalificaciones(hijo);
  if(section==='asistencia') return attendanceBlock(hijo);
  if(section==='citaciones') return citacionesVista(hijo?hijo.carnet:null);
  if(section==='tareas') return renderTareas(vistaAcademica(hijo), true);
  if(section==='examenes') return renderExamenes(vistaAcademica(hijo), true);
  if(section==='calendario') return renderCalendario(vistaAcademica(hijo));
  if(section==='consultas') return renderConsultas('padre', hijo);
  if(section==='notificaciones') return renderNotificaciones('padre');
  if(section==='perfil') return renderPerfil('padre', p);
  return padreBuscar();
}

function padreBuscar(){
  return `
  <div class="search-hero card animate-scale">
    <div class="ic">${ic('search',30)}</div>
    <h2 style="font-size:20px;">Buscar a mi hijo/a</h2>
    <p style="color:var(--gris-500); font-size:14px; margin-top:8px;">Ingrese el número de carnet de su hijo para consultar su información académica.</p>
    <div class="search-box-row">
      <input class="pill-input" id="carnet-input" placeholder="Ej. 15769750">
      <button class="btn btn-primary" onclick="buscarHijo()">Buscar estudiante</button>
    </div>
    <div id="buscar-error"></div>
  </div>`;
}
function buscarHijo(){
  const val = document.getElementById('carnet-input').value.trim();
  const p = currentUser.data;
  const errHolder = document.getElementById('buscar-error');
  if(!p.hijos.includes(val)){
    errHolder.innerHTML = `<div class="login-error" style="margin-top:16px; text-align:left;">${ic('alert',17)} No se encontró un estudiante asociado a esta cuenta.</div>`;
    return;
  }
  parentSelectedCarnet = val;
  toast('Estudiante encontrado. Mostrando su información.');
  navigate('inicio');
}

function padreInicio(hijo){
  const rend = computeRendimiento(hijo);
  const prom = promedioGeneral(hijo);
  const asis = porcentajeAsistencia(hijo);
  const pendientes = hijo.tareas.filter(t=>t.estado==='pendiente'||t.estado==='vencida').length;
  return `
  <div class="section-title">Información de ${hijo.nombreCompleto}</div>
  <div class="section-sub">Carnet ${hijo.carnet} · ${hijo.curso} "${hijo.paralelo}" · Consulta el resumen académico completo.</div>

  <div class="grid grid-4" style="margin-top:22px;">
    <div class="card stat-card" onclick="navigate('calificaciones')"><div class="stat-top"><div class="stat-icon blue">${ic('chart')}</div></div><div class="stat-value">${prom}</div><div class="stat-label">Promedio general</div></div>
    <div class="card stat-card" onclick="navigate('asistencia')"><div class="stat-top"><div class="stat-icon green">${ic('calendarCheck')}</div></div><div class="stat-value">${asis}%</div><div class="stat-label">Asistencia general</div></div>
    <div class="card stat-card" onclick="navigate('tareas')"><div class="stat-top"><div class="stat-icon yellow">${ic('clipboard')}</div></div><div class="stat-value">${pendientes}</div><div class="stat-label">Tareas pendientes</div></div>
    <div class="card stat-card" onclick="navigate('examenes')"><div class="stat-top"><div class="stat-icon gray">${ic('examIcon')}</div></div><div class="stat-value">${hijo.examenes.filter(e=>!e.pasado).length}</div><div class="stat-label">Próximos exámenes</div></div>
  </div>

  <div style="margin-top:20px;">${perfCard({...rend, titulo: rend.nivel==='danger' ? 'Advertencia: su hijo se encuentra en peligro de bajo rendimiento académico' : rend.titulo})}</div>

  <div class="grid grid-2" style="margin-top:20px; align-items:start;">
    <div class="card">
      <div class="card-head"><h3>Calificaciones por materia</h3></div>
      ${MATERIAS_INFO.map(m=>`
        <div class="subject-row">
          <span class="subject-dot" style="background:${m.color};"></span>
          <span class="subject-name">${m.nombre}</span>
          <span class="subject-teacher">${m.maestro}</span>
          <span class="subject-grade" style="color:${notaColor(hijo.materias[m.id])}">${hijo.materias[m.id]}</span>
        </div>`).join('')}
    </div>
    <div class="card" style="display:flex; align-items:center; justify-content:center; flex-direction:column; gap:16px;">
      <h3 style="align-self:flex-start;">Rendimiento académico</h3>
      ${gaugeSVG(prom, 130)}
    </div>
  </div>

  <div style="margin-top:20px;">${attendanceBlock(hijo)}</div>

  <div style="margin-top:16px; text-align:right;">
    <button class="btn btn-ghost" onclick="cambiarHijo()">${ic('search',15)} Buscar otro estudiante</button>
  </div>`;
}
function cambiarHijo(){ parentSelectedCarnet = null; navigate('buscarhijo'); }

/* ============================================================
   ROL: MAESTRO
   Cada maestro ve únicamente las materias que tiene asignadas
   y elige el curso (de los 36 de la institución) con el que
   quiere trabajar.
   ============================================================ */
function materiasDelMaestro(t){
  const ids = aArreglo(t.materias);
  return MATERIAS_INFO.filter(m=>ids.includes(m.id));
}
function materiaActivaMaestro(t){
  const mias = materiasDelMaestro(t);
  if(!mias.length) return null;
  if(!mias.some(m=>m.id===teacherSelectedMateria)) teacherSelectedMateria = mias[0].id;
  return teacherSelectedMateria;
}
/* ------------------------------------------------------------
   CURSOS POR MATERIA
   Cada maestro guarda en la base de datos:
     maestros/<usuario>/asignaciones = { info:['sec-6B'], edfis:['sec-6B','pri-1A'] }
     maestros/<usuario>/asignacionesPorMateria = true
   Además se mantienen "materias" y "cursos" (la unión) para que
   el resto de la página siga funcionando igual que antes.
   ------------------------------------------------------------ */
function ordenarCursos(ids){
  const orden = CURSOS.map(c=>c.id);
  return Array.from(new Set(aArreglo(ids))).filter(id=>orden.includes(id))
    .sort((a,b)=>orden.indexOf(a)-orden.indexOf(b));
}
function asignacionesDe(t){
  const res = {};
  if(!t) return res;
  const porMateria = t.asignacionesPorMateria === true;
  const asig = t.asignaciones || {};
  const legado = aArreglo(t.cursos);
  aArreglo(t.materias).forEach(id=>{
    res[id] = ordenarCursos(porMateria ? asig[id] : legado);
  });
  return res;
}
/* Cursos que el maestro puede usar (en una materia o en cualquiera) */
function cursosPermitidosMaestro(t, materiaId){
  const asig = asignacionesDe(t);
  const ids = materiaId ? (asig[materiaId] || []) : [].concat(...Object.values(asig));
  const lista = ordenarCursos(ids);
  /* Cuentas antiguas sin cursos marcados: pueden usar todos los cursos */
  if(!lista.length && t.asignacionesPorMateria !== true && !aArreglo(t.cursos).length) return CURSOS.map(c=>c.id);
  return lista;
}
function opcionesCursosDe(ids, seleccionado){
  if(!ids.length) return '<option value="">Sin cursos asignados</option>';
  return NIVELES.map(n=>{
    const cs = CURSOS.filter(c=>c.nivel===n && ids.includes(c.id));
    if(!cs.length) return '';
    return '<optgroup label="'+n+'">' + cs.map(c=>{
      const cant = estudiantesDeCurso(c.id).length;
      return '<option value="'+c.id+'"'+(seleccionado===c.id?' selected':'')+'>'+
             c.nombre+(cant?' ('+cant+' est.)':'')+'</option>';
    }).join('') + '</optgroup>';
  }).join('');
}
let maestroFiltraPorMateria = false;
function cursoActivoMaestro(t){
  const materia = maestroFiltraPorMateria ? materiaActivaMaestro(t) : null;
  const permitidos = cursosPermitidosMaestro(t, materia);
  if(!permitidos.length) return null;
  if(!teacherSelectedCurso || !permitidos.includes(teacherSelectedCurso)) teacherSelectedCurso = permitidos[0];
  return teacherSelectedCurso;
}
function actualizarCursosModal(pref){
  const t = currentUser.data;
  const mat = document.getElementById(pref+'-materia').value;
  const sel = document.getElementById(pref+'-curso');
  const previo = sel.value;
  sel.innerHTML = opcionesCursosDe(cursosPermitidosMaestro(t, mat), previo);
}
function sinMaterias(){
  return emptyState('book','Todavía no tienes materias asignadas',
    'Pídele al administrador que te asigne tus materias desde el panel de Maestros.');
}

/* Barra de filtros reutilizable: curso + materia */
function barraFiltrosMaestro(t, seccion, opts){
  opts = opts || {};
  const mias = materiasDelMaestro(t);
  const curso = cursoActivoMaestro(t);
  const cant = estudiantesDeCurso(curso).length;
  const matFiltro = opts.sinMateria ? null : materiaActivaMaestro(t);
  const permitidos = cursosPermitidosMaestro(t, matFiltro);
  const aviso = !curso ? `<div class="maestro-aviso">${ic('alert',16)} ${matFiltro
      ? 'No tienes cursos asignados en '+materiaNombre(matFiltro)+'. El administrador puede asignártelos desde el panel de Maestros.'
      : 'Todavía no tienes cursos asignados. El administrador puede asignártelos desde el panel de Maestros.'}</div>` : '';
  return `
  <div class="toolbar">
    <div class="tb-campo">
      <label class="field-label">Curso</label>
      <select class="pill-input" onchange="teacherSelectedCurso=this.value; navigate('${seccion}')" ${permitidos.length?'':'disabled'}>
        ${opcionesCursosDe(permitidos, curso)}
      </select>
    </div>
    ${opts.sinMateria ? '' : `
    <div class="tb-campo">
      <label class="field-label">Materia</label>
      <select class="pill-input" onchange="teacherSelectedMateria=this.value; navigate('${seccion}')">
        ${mias.map(m=>`<option value="${m.id}" ${teacherSelectedMateria===m.id?'selected':''}>${m.nombre}</option>`).join('')}
      </select>
    </div>`}
    <div class="tb-acciones">
      <span class="tb-contador">${cant} ${cant===1?'estudiante':'estudiantes'} en el curso</span>
      ${opts.accion || ''}
    </div>
  </div>${aviso}`;
}

function renderMaestro(section){
  const t = currentUser.data;
  maestroFiltraPorMateria = (section==='misestudiantes' || section==='calificaciones');
  if(section==='inicio') return maestroInicio(t);
  if(section==='misestudiantes') return maestroEstudiantes(t);
  if(section==='mismaterias') return maestroMaterias(t);
  if(section==='asistencia') return maestroAsistencia(t);
  if(section==='citaciones') return maestroCitaciones(t);
  if(section==='calificaciones') return maestroCalificaciones(t);
  if(section==='tareas') return maestroTareas(t);
  if(section==='examenes') return maestroExamenes(t);
  if(section==='consultas') return renderConsultas('maestro', t);
  if(section==='notificaciones') return renderNotificaciones('maestro');
  return maestroInicio(t);
}

function maestroInicio(t){
  const mias = materiasDelMaestro(t);
  const curso = cursoActivoMaestro(t);
  const estudiantes = estudiantesDeCurso(curso);
  const enRiesgo = estudiantes.filter(s=>computeRendimiento(s).nivel==='danger');
  const consultasPend = DB.consultas.filter(c=>c.maestro===t.username && c.estado==='pendiente');
  const misTareas = DB.tareas.filter(x=>x.maestro===t.username);
  return `
  <div class="section-title">Hola, ${t.nombreCorto || t.nombre.split(' ')[1] || t.nombre} 👋</div>
  <div class="section-sub">Este es el resumen de tus materias y del curso que tienes seleccionado.</div>

  <div style="margin-top:16px; padding-left:14px; display:flex; flex-wrap:wrap; gap:8px;">
    ${mias.map(m=>`<span class="chip-mat"><span class="pt" style="background:${m.color}"></span>${m.nombre}</span>`).join('') || '<span class="chip-mat">Sin materias asignadas</span>'}
  </div>

  <div class="grid grid-4" style="margin-top:20px;">
    <div class="card stat-card" onclick="navigate('mismaterias')"><div class="stat-top"><div class="stat-icon blue">${ic('book')}</div></div><div class="stat-value">${mias.length}</div><div class="stat-label">Materias que impartes</div></div>
    <div class="card stat-card" onclick="navigate('misestudiantes')"><div class="stat-top"><div class="stat-icon gray">${ic('users')}</div></div><div class="stat-value">${estudiantes.length}</div><div class="stat-label">Estudiantes en ${cursoCorto(curso)}</div></div>
    <div class="card stat-card" onclick="navigate('tareas')"><div class="stat-top"><div class="stat-icon yellow">${ic('clipboard')}</div></div><div class="stat-value">${misTareas.length}</div><div class="stat-label">Tareas publicadas</div></div>
    <div class="card stat-card" onclick="navigate('consultas')"><div class="stat-top"><div class="stat-icon red">${ic('chat')}</div></div><div class="stat-value">${consultasPend.length}</div><div class="stat-label">Consultas pendientes</div></div>
  </div>

  <div class="grid grid-2" style="margin-top:20px; align-items:start;">
    <div class="card">
      <div class="card-head"><div><h3>Estudiantes con alerta</h3><div class="sub">${cursoNombre(curso)}</div></div><a class="link-btn" onclick="navigate('misestudiantes')">Ver todos ${ic('examIcon',13)}</a></div>
      ${enRiesgo.length ? enRiesgo.map(s=>`<div class="list-item">
          <div class="list-icon red">${ic('alert',16)}</div>
          <div class="list-body"><div class="list-title">${s.nombreCompleto}</div><div class="list-meta">Carnet ${s.carnet} · Promedio ${promedioGeneral(s)} · Asistencia ${porcentajeAsistencia(s)}%</div></div>
          <span class="badge badge-rojo">Riesgo</span>
        </div>`).join('') : emptyState('checkCircle','Sin alertas','Todos los estudiantes de este curso están dentro del rango esperado.')}
    </div>
    <div class="card">
      <div class="card-head"><h3>Últimas tareas que publicaste</h3></div>
      ${misTareas.slice(0,5).map(x=>`<div class="list-item">
        <div class="list-icon" style="background:var(--gris-100); color:${materiaColor(x.materiaId)};">${ic('clipboard',16)}</div>
        <div class="list-body"><div class="list-title">${x.titulo}</div><div class="list-meta">${materiaNombre(x.materiaId)} · ${cursoCorto(x.cursoId)} · Entrega ${x.entrega}</div></div>
      </div>`).join('') || emptyState('clipboard','Sin tareas todavía','Crea tu primera tarea desde la sección Tareas.')}
      <button class="btn btn-secondary btn-block" style="margin-top:12px;" onclick="navigate('tareas')">${ic('plus',15)} Ir a Tareas</button>
    </div>
  </div>`;
}

function maestroMaterias(t){
  const mias = materiasDelMaestro(t);
  if(!mias.length) return `<div class="section-title">Mis materias</div><div class="section-sub">Materias que impartes actualmente.</div><div style="margin-top:20px;">${sinMaterias()}</div>`;
  const curso = cursoActivoMaestro(t);
  const estudiantes = estudiantesDeCurso(curso);
  return `
  <div class="section-title">Mis materias</div>
  <div class="section-sub">Materias asignadas a tu cuenta por el administrador.</div>
  ${barraFiltrosMaestro(t, 'mismaterias', {sinMateria:true})}
  <div class="grid grid-3">
    ${mias.map(m=>{
      const notas = estudiantes.map(s=>s.materias[m.id]).filter(v=>typeof v==='number');
      const promClase = notas.length ? Math.round(notas.reduce((a,b)=>a+b,0)/notas.length) : null;
      const tareasM = DB.tareas.filter(x=>x.materiaId===m.id && x.cursoId===curso).length;
      const examM   = DB.examenes.filter(x=>x.materiaId===m.id && x.cursoId===curso).length;
      return `<div class="card">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:12px;"><span class="subject-dot" style="background:${m.color}; width:12px; height:12px;"></span><h3>${m.nombre}</h3></div>
        <div class="section-sub" style="padding-left:0;">Curso: <b>${cursoNombre(curso)}</b></div>
        <div class="section-sub" style="padding-left:0;">Promedio de la clase: <b class="mono" style="color:${notaColor(promClase)}">${notaTexto(promClase)}</b></div>
        <div class="section-sub" style="padding-left:0;">Estudiantes: ${estudiantes.length} · Tareas: ${tareasM} · Exámenes: ${examM}</div>
        <div class="ic-acc">
          <button class="btn btn-secondary btn-sm" onclick="teacherSelectedMateria='${m.id}'; navigate('calificaciones')">Calificar</button>
          <button class="btn btn-ghost btn-sm" onclick="teacherSelectedMateria='${m.id}'; navigate('misestudiantes')">Ver estudiantes</button>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

function maestroEstudiantes(t){
  if(!materiaActivaMaestro(t)) return `<div class="section-title">Mis estudiantes</div>${sinMaterias()}`;
  const curso = cursoActivoMaestro(t);
  const estudiantes = estudiantesDeCurso(curso);
  return `
  <div class="section-title">Mis estudiantes</div>
  <div class="section-sub">Elige el curso y la materia para ver las notas y la asistencia.</div>
  ${barraFiltrosMaestro(t, 'misestudiantes')}
  <div class="card">
    ${estudiantes.length ? `<div class="table-wrap"><table>
      <thead><tr><th>Estudiante</th><th>Carnet</th><th>Nota de ${materiaNombre(teacherSelectedMateria)}</th><th>Promedio</th><th>Asistencia</th><th>Estado</th><th></th></tr></thead>
      <tbody>
      ${estudiantes.map(s=>{
        const nota = s.materias[teacherSelectedMateria];
        const rend = computeRendimiento(s);
        return `<tr>
          <td style="font-weight:600;">${s.nombreCompleto}</td>
          <td class="mono">${s.carnet}</td>
          <td class="mono" style="font-weight:700; color:${notaColor(nota)}">${notaTexto(nota)}</td>
          <td class="mono">${promedioGeneral(s)}</td>
          <td>${porcentajeAsistencia(s)}%</td>
          <td>${rend.nivel==='ok'?'<span class="badge badge-verde">Bien</span>':rend.nivel==='warn'?'<span class="badge badge-amarillo">Observación</span>':'<span class="badge badge-rojo">Riesgo</span>'}</td>
          <td><button class="btn btn-ghost btn-sm" onclick="verEstudianteMaestro('${s.carnet}')">${ic('search',14)}</button></td>
        </tr>`;
      }).join('')}
      </tbody>
    </table></div>` : emptyState('users','Este curso no tiene estudiantes','El administrador puede registrar estudiantes en '+cursoNombre(curso)+' desde el panel de Estudiantes.')}
  </div>`;
}

function verEstudianteMaestro(carnet){
  const s = DB.students[carnet];
  if(!s) return;
  const rend = computeRendimiento(s);
  openModal(`Ficha de ${s.nombreCompleto}`, `
    ${infoRow('Carnet', s.carnet, true)}
    ${infoRow('Curso', cursoNombre(s.cursoId))}
    ${infoRow('Usuario', s.username, true)}
    ${infoRow('Correo', s.correo || '—')}
    ${infoRow('Teléfono', s.telefono || '—')}
    <div style="margin-top:14px;">${perfCard(rend)}</div>
    <div style="margin-top:14px; display:flex; justify-content:center;">${gaugeSVG(promedioGeneral(s),110)}</div>
  `);
}

/* ---------------- ASISTENCIA ---------------- */
/* ---------------- CALIFICACIONES ---------------- */
function maestroCalificaciones(t){
  if(!materiaActivaMaestro(t)) return `<div class="section-title">Calificaciones</div>${sinMaterias()}`;
  const curso = cursoActivoMaestro(t);
  const estudiantes = estudiantesDeCurso(curso);
  const mid = teacherSelectedMateria;
  return `
  <div class="section-title">Calificaciones</div>
  <div class="section-sub">Registra la nota y la observación de cada estudiante. Puedes guardar uno por uno o todo el curso de una vez.</div>
  ${barraFiltrosMaestro(t, 'calificaciones', {
    accion:`${botonExcel('calificaciones')} <button class="btn btn-primary btn-sm" onclick="guardarNotasCurso()">${ic('check',14)} Guardar todo el curso</button>`})}
  <div class="card">
    ${estudiantes.length ? `<div class="table-wrap"><table>
      <thead><tr><th>Estudiante</th><th>Nota actual</th><th>Nueva nota (0-100)</th><th>Observación</th><th></th></tr></thead>
      <tbody>
      ${estudiantes.map(s=>{
        const actual = s.materias[mid];
        const obs = s.observaciones[mid] || '';
        return `<tr>
          <td style="font-weight:600;">${s.nombreCompleto}<div class="mono" style="font-size:11.5px; color:var(--gris-500); font-weight:500;">${s.carnet}</div></td>
          <td><span class="badge ${notaBadgeClass(actual)} mono">${notaTexto(actual)}</span></td>
          <td><input class="pill-input" style="max-width:110px; padding:8px 11px;" type="number" min="0" max="100" step="0.1" id="nota-${s.carnet}" value="${typeof actual==='number'?actual:''}" placeholder="0-100"></td>
          <td><input class="pill-input" style="min-width:230px; padding:8px 11px;" id="obs-${s.carnet}" value="${(obs+'').replace(/"/g,'&quot;')}" placeholder="Observación para el estudiante"></td>
          <td><button class="btn btn-primary btn-sm" onclick="guardarNota('${s.carnet}')">Guardar</button></td>
        </tr>`;
      }).join('')}
      </tbody>
    </table></div>` : emptyState('users','Este curso no tiene estudiantes','Selecciona otro curso o pide al administrador que registre estudiantes.')}
  </div>`;
}
function guardarNota(carnet){
  const mid = teacherSelectedMateria;
  const input = document.getElementById('nota-'+carnet);
  const obsInput = document.getElementById('obs-'+carnet);
  const val = parseFloat(input.value);
  if(isNaN(val) || val<0 || val>100){ toast('Ingresa una nota válida entre 0 y 100.'); return; }
  const obs = obsInput ? obsInput.value.trim() : '';
  DB.students[carnet].materias[mid] = val;
  DB.students[carnet].observaciones[mid] = obs;
  const cambios = {};
  cambios[RUTAS.estudiantes+'/'+carnet+'/materias/'+mid] = val;
  cambios[RUTAS.estudiantes+'/'+carnet+'/observaciones/'+mid] = obs;
  guardarVarios(cambios);
  toast('Calificación de '+DB.students[carnet].nombre+' guardada correctamente.');
}
function guardarNotasCurso(){
  const t = currentUser.data;
  const mid = teacherSelectedMateria;
  const cambios = {};
  let n = 0, invalidas = 0;
  estudiantesDeCurso(cursoActivoMaestro(t)).forEach(s=>{
    const input = document.getElementById('nota-'+s.carnet);
    const obsInput = document.getElementById('obs-'+s.carnet);
    if(!input) return;
    if(input.value === '') return;
    const val = parseFloat(input.value);
    if(isNaN(val) || val<0 || val>100){ invalidas++; return; }
    const obs = obsInput ? obsInput.value.trim() : '';
    s.materias[mid] = val;
    s.observaciones[mid] = obs;
    cambios[RUTAS.estudiantes+'/'+s.carnet+'/materias/'+mid] = val;
    cambios[RUTAS.estudiantes+'/'+s.carnet+'/observaciones/'+mid] = obs;
    n++;
  });
  if(invalidas){ toast('Hay '+invalidas+' nota(s) fuera del rango 0-100. Corrígelas.'); return; }
  if(!n){ toast('No escribiste ninguna nota nueva.'); return; }
  guardarVarios(cambios);
  toast(n+' calificación(es) guardadas en la base de datos.');
  navigate('calificaciones');
}

/* ---------------- TAREAS ---------------- */
const TIPOS_TAREA = ['Tarea','Práctica','Trabajo de investigación','Proyecto','Exposición','Taller en clase'];

function maestroTareas(t){
  if(!materiaDeTareaDisponible(t)) return `<div class="section-title">Tareas</div>${sinMaterias()}`;
  const mias = aArreglo(t.materias);
  const misTareas = DB.tareas.filter(x=>x.maestro===t.username || mias.includes(x.materiaId));
  return `
  <div class="section-title">Tareas asignadas</div>
  <div class="section-sub">Crea tareas y envíalas al curso que elijas. Se publican al instante para todos los estudiantes de ese curso.</div>
  <div class="toolbar">
    <div class="tb-campo"><label class="field-label">Tareas publicadas</label>
      <div class="tb-contador" style="width:max-content;">${misTareas.length} en total</div></div>
    <div class="tb-acciones">
      <button class="btn btn-primary" onclick="crearTareaModal()">${ic('plus',15)} Crear nueva tarea</button>
    </div>
  </div>
  <div style="margin:0 0 14px 0;">${botonExcel('calificaciones')}</div>
  ${misTareas.length ? misTareas.map(x=>{
    const est = estudiantesDeCurso(x.cursoId);
    const entregadas = est.filter(s=>s.tareas.some(y=>y.tareaId===x.id && (y.estado==='entregada'||y.estado==='calificada'))).length;
    return `<div class="item-card">
      <div class="ic-top">
        <div style="flex:1; min-width:220px;">
          <h4>${x.titulo}</h4>
          <div class="ic-meta">
            <span class="chip-mat"><span class="pt" style="background:${materiaColor(x.materiaId)}"></span>${materiaNombre(x.materiaId)}</span>
            <span class="chip-curso">${ic('building',12)} ${cursoNombre(x.cursoId)}</span>
            <span class="badge badge-gris">${x.tipo||'Tarea'}</span>
            <span class="badge badge-azul mono">Entrega: ${x.entrega}</span>
            ${x.puntaje?`<span class="badge badge-gris">${x.puntaje} pts</span>`:''}
            ${x.xl ? `<span class="badge badge-verde" title="Columna del Registro Pedagógico donde se escribió esta tarea">Excel: ${escH(x.xl.hoja)} · col. ${escH(x.xl.col)}</span>` : `<span class="badge badge-gris">Sin columna en el Excel</span>`}
          </div>
          ${x.descripcion?`<div class="ic-desc">${x.descripcion}</div>`:''}
        </div>
        <div style="text-align:right;">
          <div class="stat-value" style="font-size:24px;">${entregadas}/${est.length}</div>
          <div class="stat-label">Entregadas</div>
        </div>
      </div>
      <div class="ic-acc">
        <button class="btn btn-secondary btn-sm" onclick="calificarTareaModal('${x.id}')">${ic('chart',14)} Revisar y calificar</button>
        <button class="btn btn-danger btn-sm" onclick="eliminarTarea('${x.id}')">${ic('trash',14)} Eliminar</button>
      </div>
    </div>`;
  }).join('') : emptyState('clipboard','Todavía no has creado tareas','Usa el botón "Crear nueva tarea" para enviar la primera a un curso.')}`;
}
function materiaDeTareaDisponible(t){ return materiasDelMaestro(t).length > 0; }

function crearTareaModal(){
  const t = currentUser.data;
  const mias = materiasDelMaestro(t);
  const matIni = mias.some(m=>m.id===teacherSelectedMateria) ? teacherSelectedMateria : (mias[0] ? mias[0].id : '');
  openModal('Crear nueva tarea', `
    <div class="form-grid">
      <div class="full">
        <label class="field-label">Curso al que se enviará</label>
        <select class="pill-input" id="ct-curso">${opcionesCursosDe(cursosPermitidosMaestro(t, matIni), teacherSelectedCurso)}</select>
        <div class="ayuda">Solo aparecen los cursos que el administrador te asignó en la materia elegida. La tarea llegará a todos los estudiantes de ese curso.</div>
      </div>
      <div>
        <label class="field-label">Materia</label>
        <select class="pill-input" id="ct-materia" onchange="actualizarCursosModal('ct')">${mias.map(m=>`<option value="${m.id}" ${m.id===matIni?'selected':''}>${m.nombre}</option>`).join('')}</select>
      </div>
      <div>
        <label class="field-label">Tipo de actividad</label>
        <select class="pill-input" id="ct-tipo">${TIPOS_TAREA.map(x=>`<option>${x}</option>`).join('')}</select>
      </div>
      <div class="full">
        <label class="field-label">Título de la tarea</label>
        <input class="pill-input" id="ct-titulo" placeholder="Ej. Guía de repaso del capítulo 3">
      </div>
      <div class="full">
        <label class="field-label">Instrucciones / descripción</label>
        <textarea class="pill-input" id="ct-desc" rows="3" placeholder="Explica qué debe hacer el estudiante, materiales, formato de entrega..."></textarea>
      </div>
      <div>
        <label class="field-label">Fecha de entrega</label>
        <input class="pill-input" type="date" id="ct-fecha" value="${hoyISO()}" min="${hoyISO()}">
      </div>
      <div>
        <label class="field-label">Puntaje máximo</label>
        <input class="pill-input" type="number" id="ct-puntaje" min="1" max="100" value="20">
      </div>
    </div>
  `, `<button class="btn btn-secondary" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="guardarNuevaTarea()">${ic('check',15)} Publicar tarea</button>`);
}

function guardarNuevaTarea(){
  const t = currentUser.data;
  const cursoId = document.getElementById('ct-curso').value;
  const materiaId = document.getElementById('ct-materia').value;
  const tipo = document.getElementById('ct-tipo').value;
  const titulo = document.getElementById('ct-titulo').value.trim();
  const descripcion = document.getElementById('ct-desc').value.trim();
  const fechaISO = document.getElementById('ct-fecha').value;
  const puntaje = parseInt(document.getElementById('ct-puntaje').value, 10) || 20;
  if(!cursoId){ toast('No tienes cursos asignados en esa materia.'); return; }
  if(!cursosPermitidosMaestro(t, materiaId).includes(cursoId)){ toast('Ese curso no está asignado a esta materia.'); return; }
  if(!titulo){ toast('Escribe el título de la tarea.'); return; }
  if(!fechaISO){ toast('Elige la fecha de entrega en el calendario.'); return; }

  const entrega = fechaDesdeISO(fechaISO);
  const id = 'tar' + Date.now();
  const tarea = { id, cursoId, materiaId, maestro:t.username, maestroNombre:t.nombre,
                  tipo, titulo, descripcion, entrega, puntaje, creada:new Date().toISOString() };

  const cambios = {};
  tarea.subida = fechaActual();
  xlMarcarTarea(tarea, cambios);
  cambios[RUTAS.tareas + '/' + id] = tarea;
  cambios[RUTAS.excel + '/' + cursoId + '/' + id] = { tareaId:id, titulo, materiaId, tipo, puntaje, fechaSubida:fechaActual(), maestro:t.username, estado: tarea.xl ? 'registrada_en_excel' : 'sin_columna_en_excel', hoja: tarea.xl ? tarea.xl.hoja : null, columna: tarea.xl ? tarea.xl.col : null };

  const destinatarios = estudiantesDeCurso(cursoId);
  destinatarios.forEach(s=>{
    s.tareas.push({ id:id+'_'+s.carnet, tareaId:id, materia:materiaId, titulo,
                    entrega, estado:'pendiente', max:puntaje });
    cambios[RUTAS.estudiantes + '/' + s.carnet + '/tareas'] = s.tareas;
  });

  DB.tareas.unshift(tarea);
  guardarVarios(cambios);
  closeModal();
  toast(destinatarios.length
    ? 'Tarea publicada para '+destinatarios.length+' estudiante(s) de '+cursoNombre(cursoId)+'.'
    : 'Tarea guardada. '+cursoNombre(cursoId)+' todavía no tiene estudiantes registrados.');
  navigate('tareas');
  xlAvisoTarea(tarea);
}

function calificarTareaModal(tareaId){
  const x = DB.tareas.find(y=>y.id===tareaId);
  if(!x){ toast('No se encontró la tarea.'); return; }
  const est = estudiantesDeCurso(x.cursoId);
  if(!est.length){
    openModal('Revisar tarea', `<p style="font-size:14px; color:var(--gris-700);">${cursoNombre(x.cursoId)} todavía no tiene estudiantes registrados.</p>`,
      `<button class="btn btn-secondary" onclick="closeModal()">Cerrar</button>`);
    return;
  }
  const filas = est.map(s=>{
    const copia = s.tareas.find(y=>y.tareaId===tareaId) || {};
    return `<tr>
      <td style="font-weight:600;">${s.nombreCompleto}</td>
      <td><select class="pill-input" style="padding:7px 10px; min-width:135px;" id="ct-est-${s.carnet}">
        ${['pendiente','entregada','calificada','vencida'].map(e=>`<option value="${e}" ${copia.estado===e?'selected':''}>${{pendiente:'Pendiente',entregada:'Entregada',calificada:'Calificada',vencida:'Vencida'}[e]}</option>`).join('')}
      </select></td>
      <td><input class="pill-input" style="max-width:95px; padding:7px 10px;" type="number" min="0" max="${x.puntaje||20}" id="ct-nota-${s.carnet}" value="${typeof copia.nota==='number'?copia.nota:''}" placeholder="0-${x.puntaje||20}"></td>
    </tr>`;
  }).join('');
  openModal('Revisar: ' + x.titulo, `
    <div class="ic-meta" style="margin-bottom:14px;">
      <span class="chip-curso">${cursoNombre(x.cursoId)}</span>
      <span class="chip-mat"><span class="pt" style="background:${materiaColor(x.materiaId)}"></span>${materiaNombre(x.materiaId)}</span>
      <span class="badge badge-azul mono">Entrega: ${x.entrega}</span>
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th>Estudiante</th><th>Estado</th><th>Nota /${x.puntaje||20}</th></tr></thead>
      <tbody>${filas}</tbody>
    </table></div>
  `, `<button class="btn btn-secondary" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="guardarRevisionTarea('${tareaId}')">${ic('check',15)} Guardar revisión</button>`);
}

function guardarRevisionTarea(tareaId){
  const x = DB.tareas.find(y=>y.id===tareaId);
  if(!x) return;
  const cambios = {};
  let n = 0;
  estudiantesDeCurso(x.cursoId).forEach(s=>{
    const selE = document.getElementById('ct-est-'+s.carnet);
    const inpN = document.getElementById('ct-nota-'+s.carnet);
    if(!selE) return;
    let copia = s.tareas.find(y=>y.tareaId===tareaId);
    if(!copia){
      copia = { id:tareaId+'_'+s.carnet, tareaId, materia:x.materiaId, titulo:x.titulo, entrega:x.entrega, estado:'pendiente', max:x.puntaje };
      s.tareas.push(copia);
    }
    copia.estado = selE.value;
    const val = parseFloat(inpN.value);
    if(!isNaN(val)) copia.nota = val; else delete copia.nota;
    if(copia.estado==='entregada' || copia.estado==='calificada' || !isNaN(val)) copia.fechaRegistro = fechaHoraActual(); else delete copia.fechaRegistro;
    copia.max = x.puntaje || 20;
    cambios[RUTAS.estudiantes + '/' + s.carnet + '/tareas'] = s.tareas;
    n++;
  });
  xlRegistrarNotas(x);
  guardarVarios(cambios);
  closeModal();
  toast('Revisión guardada para '+n+' estudiante(s).');
  navigate('tareas');
}

function eliminarTarea(tareaId){
  const x = DB.tareas.find(y=>y.id===tareaId);
  if(!x) return;
  openModal('Eliminar tarea',
    `<p style="font-size:14px; line-height:1.7; color:var(--gris-700);">Se eliminará <strong>${x.titulo}</strong> de ${cursoNombre(x.cursoId)} y también desaparecerá de la lista de los estudiantes.</p>`,
    `<button class="btn btn-secondary" onclick="closeModal()">Cancelar</button><button class="btn btn-danger" onclick="confirmarEliminarTarea('${tareaId}')">Sí, eliminar</button>`);
}
function confirmarEliminarTarea(tareaId){
  const x = DB.tareas.find(y=>y.id===tareaId);
  if(!x) return;
  const cambios = {};
  estudiantesDeCurso(x.cursoId).forEach(s=>{
    const antes = s.tareas.length;
    s.tareas = s.tareas.filter(y=>y.tareaId!==tareaId);
    if(s.tareas.length !== antes) cambios[RUTAS.estudiantes + '/' + s.carnet + '/tareas'] = s.tareas;
  });
  cambios[RUTAS.tareas + '/' + tareaId] = null;
  cambios[RUTAS.excel + '/' + x.cursoId + '/' + tareaId] = null;
  xlQuitarTarea(x, cambios);
  DB.tareas = DB.tareas.filter(y=>y.id!==tareaId);
  guardarVarios(cambios);
  closeModal();
  toast('Tarea eliminada de la base de datos.');
  navigate('tareas');
}

/* ---------------- EXÁMENES ---------------- */
const TIPOS_EXAMEN = ['Examen escrito','Examen oral','Examen práctico','Evaluación bimestral','Prueba corta','Defensa de proyecto'];

function maestroExamenes(t){
  if(!materiaDeTareaDisponible(t)) return `<div class="section-title">Exámenes</div>${sinMaterias()}`;
  const mias = aArreglo(t.materias);
  const mios = DB.examenes.filter(x=>x.maestro===t.username || mias.includes(x.materiaId));
  return `
  <div class="section-title">Exámenes programados</div>
  <div class="section-sub">Programa evaluaciones y envíalas al curso correspondiente.</div>
  <div class="toolbar">
    <div class="tb-campo"><label class="field-label">Exámenes programados</label>
      <div class="tb-contador" style="width:max-content;">${mios.length} en total</div></div>
    <div class="tb-acciones">
      <button class="btn btn-primary" onclick="crearExamenModal()">${ic('plus',15)} Programar examen</button>
    </div>
  </div>
  ${mios.length ? mios.map(x=>`<div class="item-card">
      <div class="ic-top">
        <div style="flex:1; min-width:220px;">
          <h4>${x.tema}</h4>
          <div class="ic-meta">
            <span class="chip-mat"><span class="pt" style="background:${materiaColor(x.materiaId)}"></span>${materiaNombre(x.materiaId)}</span>
            <span class="chip-curso">${ic('building',12)} ${cursoNombre(x.cursoId)}</span>
            <span class="badge badge-gris">${x.tipo||'Examen escrito'}</span>
            <span class="badge badge-azul mono">${x.fecha}${x.hora?' · '+x.hora:''}</span>
            ${x.puntaje?`<span class="badge badge-gris">${x.puntaje} pts</span>`:''}
          </div>
          ${x.descripcion?`<div class="ic-desc">${x.descripcion}</div>`:''}
        </div>
        <div style="text-align:right;">
          <div class="stat-value" style="font-size:24px;">${estudiantesDeCurso(x.cursoId).length}</div>
          <div class="stat-label">Estudiantes</div>
        </div>
      </div>
      <div class="ic-acc">
        <button class="btn btn-danger btn-sm" onclick="eliminarExamen('${x.id}')">${ic('trash',14)} Eliminar</button>
      </div>
    </div>`).join('') : emptyState('examIcon','Sin exámenes programados','Programa el primer examen con el botón de arriba.')}`;
}

function crearExamenModal(){
  const t = currentUser.data;
  const mias = materiasDelMaestro(t);
  const matIni = mias.some(m=>m.id===teacherSelectedMateria) ? teacherSelectedMateria : (mias[0] ? mias[0].id : '');
  openModal('Programar nuevo examen', `
    <div class="form-grid">
      <div class="full">
        <label class="field-label">Curso al que se enviará</label>
        <select class="pill-input" id="ce-curso">${opcionesCursosDe(cursosPermitidosMaestro(t, matIni), teacherSelectedCurso)}</select>
        <div class="ayuda">Solo aparecen los cursos que el administrador te asignó en la materia elegida.</div>
      </div>
      <div>
        <label class="field-label">Materia</label>
        <select class="pill-input" id="ce-materia" onchange="actualizarCursosModal('ce')">${mias.map(m=>`<option value="${m.id}" ${m.id===matIni?'selected':''}>${m.nombre}</option>`).join('')}</select>
      </div>
      <div>
        <label class="field-label">Tipo de evaluación</label>
        <select class="pill-input" id="ce-tipo">${TIPOS_EXAMEN.map(x=>`<option>${x}</option>`).join('')}</select>
      </div>
      <div class="full">
        <label class="field-label">Tema del examen</label>
        <input class="pill-input" id="ce-tema" placeholder="Ej. Ecuaciones de primer grado">
      </div>
      <div class="full">
        <label class="field-label">Contenido a evaluar</label>
        <textarea class="pill-input" id="ce-desc" rows="3" placeholder="Temas, capítulos o material que entra en el examen..."></textarea>
      </div>
      <div>
        <label class="field-label">Fecha del examen</label>
        <input class="pill-input" type="date" id="ce-fecha" value="${hoyISO()}" min="${hoyISO()}">
      </div>
      <div>
        <label class="field-label">Hora</label>
        <input class="pill-input" type="time" id="ce-hora" value="08:00">
      </div>
      <div>
        <label class="field-label">Puntaje máximo</label>
        <input class="pill-input" type="number" id="ce-puntaje" min="1" max="100" value="100">
      </div>
    </div>
  `, `<button class="btn btn-secondary" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="guardarNuevoExamen()">${ic('check',15)} Programar examen</button>`);
}

function guardarNuevoExamen(){
  const t = currentUser.data;
  const cursoId = document.getElementById('ce-curso').value;
  const materiaId = document.getElementById('ce-materia').value;
  const tipo = document.getElementById('ce-tipo').value;
  const tema = document.getElementById('ce-tema').value.trim();
  const descripcion = document.getElementById('ce-desc').value.trim();
  const fechaISO = document.getElementById('ce-fecha').value;
  const hora = document.getElementById('ce-hora').value;
  const puntaje = parseInt(document.getElementById('ce-puntaje').value, 10) || 100;
  if(!cursoId){ toast('No tienes cursos asignados en esa materia.'); return; }
  if(!cursosPermitidosMaestro(t, materiaId).includes(cursoId)){ toast('Ese curso no está asignado a esta materia.'); return; }
  if(!tema){ toast('Escribe el tema del examen.'); return; }
  if(!fechaISO){ toast('Elige la fecha en el calendario.'); return; }

  const fecha = fechaDesdeISO(fechaISO);
  const id = 'exa' + Date.now();
  const examen = { id, cursoId, materiaId, maestro:t.username, maestroNombre:t.nombre,
                   tipo, tema, descripcion, fecha, hora, puntaje, creada:new Date().toISOString() };

  const cambios = {};
  cambios[RUTAS.examenes + '/' + id] = examen;
  const destinatarios = estudiantesDeCurso(cursoId);
  destinatarios.forEach(s=>{
    s.examenes.push({ id:id+'_'+s.carnet, examenId:id, materia:materiaId, tema, fecha });
    cambios[RUTAS.estudiantes + '/' + s.carnet + '/examenes'] = s.examenes;
  });

  DB.examenes.unshift(examen);
  guardarVarios(cambios);
  closeModal();
  toast(destinatarios.length
    ? 'Examen programado para '+destinatarios.length+' estudiante(s) de '+cursoNombre(cursoId)+'.'
    : 'Examen guardado. '+cursoNombre(cursoId)+' todavía no tiene estudiantes.');
  navigate('examenes');
}

function eliminarExamen(examenId){
  const x = DB.examenes.find(y=>y.id===examenId);
  if(!x) return;
  const cambios = {};
  estudiantesDeCurso(x.cursoId).forEach(s=>{
    const antes = s.examenes.length;
    s.examenes = s.examenes.filter(y=>y.examenId!==examenId);
    if(s.examenes.length !== antes) cambios[RUTAS.estudiantes + '/' + s.carnet + '/examenes'] = s.examenes;
  });
  cambios[RUTAS.examenes + '/' + examenId] = null;
  DB.examenes = DB.examenes.filter(y=>y.id!==examenId);
  guardarVarios(cambios);
  toast('Examen eliminado de la base de datos.');
  navigate('examenes');
}

function publicarAviso(){
  const t = currentUser.data;
  const mias = materiasDelMaestro(t);
  openModal('Publicar aviso', `
    <div class="form-grid">
      <div class="full"><label class="field-label">Materia</label>
        <select class="pill-input" id="av-materia">${mias.map(m=>`<option value="${m.id}">${m.nombre}</option>`).join('')}</select></div>
      <div class="full"><label class="field-label">Mensaje del aviso</label>
        <textarea class="pill-input" id="av-texto" rows="3" placeholder="Ej. Recuerden traer el material para la práctica del jueves."></textarea></div>
    </div>
  `, `<button class="btn btn-secondary" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="guardarAviso()">${ic('send',15)} Publicar</button>`);
}
function guardarAviso(){
  const t = currentUser.data;
  const materiaId = document.getElementById('av-materia').value;
  const texto = document.getElementById('av-texto').value.trim();
  if(!texto){ toast('Escribe el mensaje del aviso.'); return; }
  const aviso = { id:'av'+Date.now(), autor:t.nombre, materia:materiaNombre(materiaId), texto, fecha:fechaActual() };
  DB.avisos.unshift(aviso);
  guardar(RUTAS.avisos + '/' + aviso.id, aviso);
  closeModal();
  toast('Aviso publicado correctamente.');
  navigate('inicio');
}

/* ============================================================
   ROL: ADMINISTRADOR
   ============================================================ */
function renderAdmin(section){
  if(section==='inicio') return adminInicio();
  if(section==='usuarios') return adminUsuarios();
  if(section==='estudiantes') return adminEstudiantes();
  if(section==='padres') return adminPadres();
  if(section==='maestros') return adminMaestros();
  if(section==='materiasadmin') return adminMaterias();
  if(section==='cursos') return adminCursos();
  if(section==='rendimientoadmin') return adminRendimiento();
  if(section==='asistenciaadmin') return adminAsistencia();
  if(section==='basedatos') return adminBaseDatos();
  if(section==='configuracion') return adminConfiguracion();
  return adminInicio();
}

function adminInicio(){
  const allStudents = Object.values(DB.students);
  const enRiesgo = allStudents.filter(s=>computeRendimiento(s).nivel==='danger').length;
  const asisProm = allStudents.length ? Math.round(allStudents.reduce((a,s)=>a+porcentajeAsistencia(s),0)/allStudents.length) : 0;
  return `
  <div class="section-title">Panel de administración</div>
  <div class="section-sub">Vista general del estado de la institución.</div>
  <div class="grid grid-4" style="margin-top:22px;">
    <div class="card stat-card" onclick="navigate('estudiantes')"><div class="stat-top"><div class="stat-icon blue">${ic('user')}</div></div><div class="stat-value">${allStudents.length}</div><div class="stat-label">Estudiantes registrados</div></div>
    <div class="card stat-card" onclick="navigate('maestros')"><div class="stat-top"><div class="stat-icon gray">${ic('teacher')}</div></div><div class="stat-value">${Object.keys(DB.teachers).length}</div><div class="stat-label">Maestros activos</div></div>
    <div class="card stat-card" onclick="navigate('padres')"><div class="stat-top"><div class="stat-icon gray">${ic('parent')}</div></div><div class="stat-value">${Object.keys(DB.parents).length}</div><div class="stat-label">Padres de familia</div></div>
    <div class="card stat-card" onclick="navigate('rendimientoadmin')"><div class="stat-top"><div class="stat-icon red">${ic('alert')}</div></div><div class="stat-value">${enRiesgo}</div><div class="stat-label">Estudiantes en riesgo</div></div>
  </div>

  <div class="grid grid-2" style="margin-top:20px; align-items:start;">
    <div class="card">
      <div class="card-head"><h3>Rendimiento general por estudiante</h3></div>
      ${allStudents.map(s=>{
        const rend = computeRendimiento(s);
        return `<div class="list-item">
          <div class="list-icon ${rend.nivel==='ok'?'green':rend.nivel==='warn'?'yellow':'red'}">${ic(rend.nivel==='ok'?'checkCircle':'alert',16)}</div>
          <div class="list-body"><div class="list-title">${s.nombreCompleto}</div><div class="list-meta">Promedio ${promedioGeneral(s)} · Asistencia ${porcentajeAsistencia(s)}%</div></div>
          <span class="badge ${rend.nivel==='ok'?'badge-verde':rend.nivel==='warn'?'badge-amarillo':'badge-rojo'}">${rend.nivel==='ok'?'Bien':rend.nivel==='warn'?'Observación':'Riesgo'}</span>
        </div>`;
      }).join('')}
    </div>
    <div class="card">
      <div class="card-head"><h3>Estadísticas institucionales</h3></div>
      <div style="margin-bottom:16px;"><div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:6px;"><span>Asistencia promedio</span><b>${asisProm}%</b></div><div class="progress-track"><div class="progress-fill" style="width:${asisProm}%; background:var(--verde);"></div></div></div>
      <div style="margin-bottom:16px;"><div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:6px;"><span>Estudiantes con buen rendimiento</span><b>${allStudents.length-enRiesgo}/${allStudents.length}</b></div><div class="progress-track"><div class="progress-fill" style="width:${allStudents.length?Math.round((allStudents.length-enRiesgo)/allStudents.length*100):0}%; background:var(--azul-700);"></div></div></div>
      <div style="margin-bottom:16px;"><div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:6px;"><span>Materias activas</span><b>${MATERIAS_INFO.length}</b></div><div class="progress-track"><div class="progress-fill" style="width:100%; background:var(--amarillo);"></div></div></div>
      <div><div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:6px;"><span>Cursos con estudiantes</span><b>${CURSOS.filter(c=>estudiantesDeCurso(c.id).length).length}/${CURSOS.length}</b></div><div class="progress-track"><div class="progress-fill" style="width:${Math.round(CURSOS.filter(c=>estudiantesDeCurso(c.id).length).length/CURSOS.length*100)}%; background:var(--escudo-rojo);"></div></div></div>
    </div>
  </div>`;
}

function adminTable(title, sub, headers, rows, addLabel, addFn){
  return `
  <div class="section-title">${title}</div>
  <div class="section-sub">${sub}</div>
  <div class="card" style="margin-top:20px;">
    <div class="card-head"><div></div><button class="btn btn-primary btn-sm" onclick="${addFn}">${ic('plus',14)} ${addLabel}</button></div>
    <div class="table-wrap"><table>
      <thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${rows}</tbody>
    </table></div>
  </div>`;
}

function adminUsuarios(){
  const rows = [
    ...Object.values(DB.students).map(s=>({nombre:s.nombreCompleto, usuario:s.username, rol:'Estudiante', extra:cursoCorto(s.cursoId)})),
    ...Object.values(DB.teachers).map(t=>({nombre:t.nombre, usuario:t.username, rol:'Maestro', extra:aArreglo(t.materias).map(materiaNombre).join(', ')||'Sin materias'})),
    ...Object.values(DB.parents).map(p=>({nombre:p.nombre, usuario:p.username, rol:'Padre de Familia', extra:aArreglo(p.hijos).length+' hijo(s)'})),
    ...Object.values(DB.admins).map(a=>({nombre:a.nombre, usuario:a.username, rol:'Administrador', extra:'Acceso total'})),
  ];
  const body = rows.map(r=>`<tr>
    <td style="font-weight:600;">${r.nombre}</td>
    <td class="mono">${r.usuario}</td>
    <td><span class="badge badge-azul">${r.rol}</span></td>
    <td style="font-size:13px; color:var(--gris-700);">${r.extra}</td>
    <td><span class="badge badge-verde">Activo</span></td></tr>`).join('');
  return `
  <div class="section-title">Usuarios</div>
  <div class="section-sub">Todas las cuentas que pueden iniciar sesión en la plataforma.</div>
  <div class="toolbar">
    <div class="tb-campo"><label class="field-label">Cuentas registradas</label>
      <div class="tb-contador" style="width:max-content;">${rows.length} usuarios</div></div>
    <div class="tb-acciones">
      <button class="btn btn-secondary btn-sm" onclick="navigate('maestros')">${ic('teacher',14)} Crear maestro</button>
      <button class="btn btn-primary btn-sm" onclick="navigate('estudiantes')">${ic('user',14)} Crear estudiante</button>
    </div>
  </div>
  <div class="card">
    <div class="table-wrap"><table>
      <thead><tr><th>Nombre</th><th>Usuario</th><th>Rol</th><th>Detalle</th><th>Estado</th></tr></thead>
      <tbody>${body}</tbody>
    </table></div>
  </div>`;
}

/* ================= ESTUDIANTES ================= */
function adminEstudiantes(){
  const lista = Object.values(DB.students).sort((a,b)=>(a.cursoId||'').localeCompare(b.cursoId||'') || (a.nombreCompleto||'').localeCompare(b.nombreCompleto||''));
  const body = lista.map(s=>{
    const rend = computeRendimiento(s);
    return `<tr>
      <td style="font-weight:600;">${s.nombreCompleto}</td>
      <td class="mono">${s.carnet}</td>
      <td><span class="chip-curso">${cursoCorto(s.cursoId)}</span></td>
      <td class="mono">${s.username||'—'}</td>
      <td class="mono">${promedioGeneral(s)}</td>
      <td><span class="badge ${rend.nivel==='ok'?'badge-verde':rend.nivel==='warn'?'badge-amarillo':'badge-rojo'}">${rend.nivel==='ok'?'Bien':rend.nivel==='warn'?'Observación':'Riesgo'}</span></td>
      <td style="white-space:nowrap;">
        <button class="btn btn-ghost btn-sm" onclick="verEstudianteMaestro('${s.carnet}')" title="Ver ficha">${ic('search',14)}</button>
        <button class="btn btn-ghost btn-sm" onclick="editarEstudianteModal('${s.carnet}')" title="Editar">${ic('edit',14)}</button>
      </td></tr>`;
  }).join('');
  return `
  <div class="section-title">Estudiantes</div>
  <div class="section-sub">Registra estudiantes, asígnalos a un curso y crea su cuenta de acceso.</div>
  <div class="toolbar">
    <div class="tb-campo"><label class="field-label">Estudiantes registrados</label>
      <div class="tb-contador" style="width:max-content;">${lista.length} en ${CURSOS.length} cursos</div></div>
    <div class="tb-acciones">
      <button class="btn btn-primary" onclick="nuevoEstudianteModal()">${ic('plus',15)} Registrar estudiante</button>
    </div>
  </div>
  <div class="card">
    ${lista.length ? `<div class="table-wrap"><table>
      <thead><tr><th>Nombre</th><th>Carnet</th><th>Curso</th><th>Usuario</th><th>Promedio</th><th>Rendimiento</th><th></th></tr></thead>
      <tbody>${body}</tbody>
    </table></div>` : emptyState('user','Sin estudiantes','Registra el primer estudiante con el botón de arriba.')}
  </div>`;
}

function camposEstudiante(s){
  s = s || {};
  return `
    <div class="form-grid">
      <div class="full"><label class="field-label">Nombre completo *</label>
        <input class="pill-input" id="ne-nombre" value="${(s.nombreCompleto||'').replace(/"/g,'&quot;')}" placeholder="Ej. María Fernanda López Rojas"></div>
      <div><label class="field-label">Número de carnet *</label>
        <input class="pill-input mono" id="ne-carnet" value="${s.carnet||''}" placeholder="Ej. 14313442" ${s.carnet?'disabled':''}></div>
      <div><label class="field-label">Curso *</label>
        <select class="pill-input" id="ne-curso">${opcionesCursos(s.cursoId||'sec-6B')}</select></div>
      <div><label class="field-label">Fecha de nacimiento</label>
        <input class="pill-input" type="date" id="ne-nac" value="${fechaHaciaISO(s.fechaNacimiento)}"></div>
      <div><label class="field-label">Teléfono</label>
        <input class="pill-input" id="ne-tel" value="${s.telefono||''}" placeholder="Ej. 63445905"></div>
      <div class="full"><label class="field-label">Correo electrónico</label>
        <input class="pill-input" id="ne-correo" value="${s.correo||''}" placeholder="estudiante@gmail.com"></div>
      <div class="full"><label class="field-label">Dirección</label>
        <input class="pill-input" id="ne-dir" value="${(s.direccion||'').replace(/"/g,'&quot;')}" placeholder="Ej. URB. Buena Fe UV1"></div>
      <div><label class="field-label">Usuario para ingresar *</label>
        <input class="pill-input mono" id="ne-user" value="${s.username||''}" placeholder="Ej. MariaL"></div>
      <div><label class="field-label">Contraseña *</label>
        <input class="pill-input mono" id="ne-pass" value="${s.password||''}" placeholder="Ej. su número de carnet"></div>
      <div class="full"><div class="ayuda">Con estos datos el estudiante podrá iniciar sesión eligiendo el rol <strong>Estudiante</strong>. Si dejas la contraseña vacía se usará el número de carnet.</div></div>
    </div>`;
}

function nuevoEstudianteModal(){
  openModal('Registrar nuevo estudiante', camposEstudiante(null),
    `<button class="btn btn-secondary" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="guardarNuevoEstudiante()">${ic('check',15)} Crear cuenta</button>`);
}
function editarEstudianteModal(carnet){
  const s = DB.students[carnet];
  if(!s) return;
  openModal('Editar a ' + s.nombreCompleto, camposEstudiante(s),
    `<button class="btn btn-secondary" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="guardarNuevoEstudiante('${carnet}')">${ic('check',15)} Guardar cambios</button>`);
}

function guardarNuevoEstudiante(carnetExistente){
  const v = id => (document.getElementById(id) ? document.getElementById(id).value.trim() : '');
  const nombreCompleto = v('ne-nombre');
  const carnet = carnetExistente || v('ne-carnet');
  const cursoId = document.getElementById('ne-curso').value;
  const username = v('ne-user');
  let password = v('ne-pass') || carnet;

  if(!nombreCompleto){ toast('Escribe el nombre completo del estudiante.'); return; }
  if(!carnet){ toast('Escribe el número de carnet.'); return; }
  if(!username){ toast('Escribe el usuario con el que ingresará.'); return; }
  if(!carnetExistente && DB.students[carnet]){ toast('Ya existe un estudiante con ese carnet.'); return; }
  const usuarioOcupado = Object.values(DB.students).some(x=>x.username===username && x.carnet!==carnet);
  if(usuarioOcupado){ toast('Ese usuario ya está en uso por otro estudiante.'); return; }

  const anterior = DB.students[carnet] || {};
  const info = cursoInfo(cursoId);
  const estudiante = {
    carnet, username, password,
    nombre: nombreCompleto.split(' ')[0],
    nombreCompleto,
    cursoId,
    curso: info ? ORDINAL[info.grado] + ' de ' + info.nivel : '',
    paralelo: info ? info.paralelo : '',
    fechaNacimiento: fechaDesdeISO(v('ne-nac')),
    correo: v('ne-correo'),
    telefono: v('ne-tel'),
    direccion: v('ne-dir'),
    materias: anterior.materias || {},
    observaciones: anterior.observaciones || {},
    asistencia: anterior.asistencia || [],
    tareas: anterior.tareas || [],
    examenes: anterior.examenes || [],
  };

  /* Si es nuevo, se le entregan las tareas y exámenes vigentes de su curso */
  if(!carnetExistente){
    DB.tareas.filter(x=>x.cursoId===cursoId).forEach(x=>{
      estudiante.tareas.push({id:x.id+'_'+carnet, tareaId:x.id, materia:x.materiaId, titulo:x.titulo, entrega:x.entrega, estado:'pendiente', max:x.puntaje});
    });
    DB.examenes.filter(x=>x.cursoId===cursoId).forEach(x=>{
      estudiante.examenes.push({id:x.id+'_'+carnet, examenId:x.id, materia:x.materiaId, tema:x.tema, fecha:x.fecha});
    });
  }

  DB.students[carnet] = estudiante;
  guardar(RUTAS.estudiantes + '/' + carnet, estudiante);
  closeModal();
  toast(carnetExistente
    ? 'Datos de ' + nombreCompleto + ' actualizados.'
    : nombreCompleto + ' fue registrado en ' + cursoNombre(cursoId) + '. Usuario: ' + username);
  navigate('estudiantes');
}

/* ================= PADRES ================= */
function adminPadres(){
  const lista = Object.values(DB.parents);
  const body = lista.map(p=>{
    const hijos = aArreglo(p.hijos).map(c=>DB.students[c] ? DB.students[c].nombreCompleto : 'Carnet '+c).join(', ') || '—';
    return `<tr><td style="font-weight:600;">${p.nombre}</td><td class="mono">${p.username}</td><td>${hijos}</td></tr>`;
  }).join('');
  return `
  <div class="section-title">Padres de Familia</div>
  <div class="section-sub">Cuentas de padres y el estudiante al que están asociados.</div>
  <div class="toolbar">
    <div class="tb-campo"><label class="field-label">Cuentas de padres</label>
      <div class="tb-contador" style="width:max-content;">${lista.length} registradas</div></div>
    <div class="tb-acciones"><button class="btn btn-primary" onclick="nuevoPadreModal()">${ic('plus',15)} Registrar padre</button></div>
  </div>
  <div class="card">
    ${lista.length ? `<div class="table-wrap"><table>
      <thead><tr><th>Nombre</th><th>Usuario</th><th>Hijo(s) asociado(s)</th></tr></thead>
      <tbody>${body}</tbody>
    </table></div>` : emptyState('parent','Sin padres registrados','Los padres también pueden crear su cuenta desde la pantalla de registro.')}
  </div>`;
}
function nuevoPadreModal(){
  const estudiantes = Object.values(DB.students);
  openModal('Registrar padre de familia', `
    <div class="form-grid">
      <div class="full"><label class="field-label">Nombre completo *</label><input class="pill-input" id="np-nombre" placeholder="Ej. Juana Surco de Nina"></div>
      <div><label class="field-label">Usuario *</label><input class="pill-input mono" id="np-user" placeholder="Ej. JuanaS"></div>
      <div><label class="field-label">Contraseña *</label><input class="pill-input mono" id="np-pass" placeholder="Contraseña de acceso"></div>
      <div class="full"><label class="field-label">Hijo/a asociado *</label>
        <select class="pill-input" id="np-hijo">${estudiantes.map(s=>`<option value="${s.carnet}">${s.nombreCompleto} · ${cursoCorto(s.cursoId)}</option>`).join('')}</select></div>
    </div>
  `, `<button class="btn btn-secondary" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="guardarNuevoPadre()">${ic('check',15)} Crear cuenta</button>`);
}
function guardarNuevoPadre(){
  const nombre = document.getElementById('np-nombre').value.trim();
  const username = document.getElementById('np-user').value.trim();
  const password = document.getElementById('np-pass').value.trim();
  const hijoSel = document.getElementById('np-hijo');
  const hijo = hijoSel ? hijoSel.value : '';
  if(!nombre || !username || !password){ toast('Completa nombre, usuario y contraseña.'); return; }
  if(DB.parents[username]){ toast('Ese usuario ya está en uso.'); return; }
  if(!hijo){ toast('Primero debe existir al menos un estudiante registrado.'); return; }
  const padre = { username, password, nombre, hijos:[hijo] };
  DB.parents[username] = padre;
  guardar(RUTAS.padres + '/' + username, padre);
  closeModal();
  toast('Cuenta de ' + nombre + ' creada correctamente.');
  navigate('padres');
}

/* ================= MAESTROS ================= */
function escHTML(v){ return String(v==null?'':v).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function inicialesDe(nombre){
  const partes = String(nombre||'').replace(/^(Prof\.|Profa\.|Lic\.)\s*/i,'').split(' ').filter(Boolean);
  return ((partes[0]||'?')[0] + ((partes[1]||'')[0]||'')).toUpperCase();
}
function chipCursoTxt(id){
  const c = cursoInfo(id);
  return c ? ORDINAL[c.grado] + ' ' + c.paralelo + ' · ' + (c.nivel==='Primaria'?'Primaria':'Secundaria') : id;
}
function materiasOrdenadas(ids){
  const orden = MATERIAS_INFO.map(m=>m.id);
  return ids.slice().sort((a,b)=>{
    const ia = orden.indexOf(a), ib = orden.indexOf(b);
    return (ia<0?99:ia) - (ib<0?99:ib);
  });
}

function adminMaestros(){
  const lista = Object.values(DB.teachers).sort((a,b)=>(a.nombre||'').localeCompare(b.nombre||''));
  return `
  <div class="section-title">Maestros</div>
  <div class="section-sub">Asigna a cada maestro sus materias y, dentro de cada materia, los cursos exactos donde enseña. Cada cambio se guarda al instante en la base de datos.</div>
  <div class="toolbar">
    <div class="tb-campo"><label class="field-label">Maestros activos</label>
      <div class="tb-contador" style="width:max-content;">${lista.length} registrados</div></div>
    <div class="tb-acciones">
      <button class="btn btn-primary" onclick="nuevoMaestroModal()">${ic('plus',15)} Crear maestro</button>
    </div>
  </div>
  ${lista.length ? `<div class="asg-lista">${lista.map(tarjetaAsignacion).join('')}</div>`
                 : `<div class="card">${emptyState('teacher','Sin maestros','Crea la primera cuenta de maestro.')}</div>`}`;
}

function tarjetaAsignacion(t){
  const u = escHTML(t.username);
  const asig = asignacionesDe(t);
  const mats = materiasOrdenadas(Object.keys(asig));
  const sinRestriccion = t.asignacionesPorMateria !== true && !aArreglo(t.cursos).length;
  const totalCursos = new Set([].concat(...Object.values(asig))).size;
  const filas = mats.map(mid=>{
    const cursos = asig[mid] || [];
    const chips = cursos.map(cid=>{
      const c = cursoInfo(cid);
      return `<span class="asg-chip ${c && c.nivel==='Primaria'?'pri':'sec'}">${chipCursoTxt(cid)}<button type="button" title="Quitar ${escHTML(chipCursoTxt(cid))} de ${escHTML(materiaNombre(mid))}" aria-label="Quitar ${escHTML(chipCursoTxt(cid))}" onclick="quitarCursoMateria('${u}','${mid}','${cid}')">${ic('x',12)}</button></span>`;
    }).join('');
    const estado = sinRestriccion
      ? '<span class="asg-todos">Todos los cursos (sin restricción)</span>'
      : (!cursos.length ? '<span class="asg-vacio">Sin cursos asignados</span>' : '');
    return `<div class="asg-row" style="--mc:${materiaColor(mid)}">
      <div class="asg-mat"><span class="barra"></span><div><b>${escHTML(materiaNombre(mid))}</b><small>${sinRestriccion?'Sin restricción':cursos.length+' '+(cursos.length===1?'curso':'cursos')}</small></div></div>
      <div class="asg-chips">${chips}${estado}
        <button type="button" class="asg-chip-add" onclick="editarCursosMateriaModal('${u}','${mid}')">${ic(cursos.length?'edit':'plus',13)} ${cursos.length?'Editar cursos':'Añadir cursos'}</button>
      </div>
      <div class="asg-acc"><button type="button" class="btn btn-ghost btn-sm" title="Quitar la materia" onclick="quitarMateriaMaestroModal('${u}','${mid}')">${ic('trash',14)} Quitar materia</button></div>
    </div>`;
  }).join('');
  return `<div class="asg-card">
    <div class="asg-head">
      <div class="asg-avatar">${inicialesDe(t.nombre)}</div>
      <div class="asg-id">
        <h3>${escHTML(t.nombre)}</h3>
        <div class="asg-meta"><span>Usuario <b class="mono">${u}</b></span><span><b>${mats.length}</b> ${mats.length===1?'materia':'materias'}</span><span><b>${sinRestriccion?'Todos':totalCursos}</b> ${totalCursos===1&&!sinRestriccion?'curso':'cursos'}</span></div>
      </div>
      <div class="asg-head-acc">
        <button class="btn btn-secondary btn-sm" onclick="editarMaestroModal('${u}')">${ic('edit',14)} Editar cuenta</button>
      </div>
    </div>
    <div class="asg-body">${filas || '<div class="asg-sinmat">Este maestro todavía no tiene materias. Añade la primera para que pueda trabajar.</div>'}</div>
    <div class="asg-foot"><button type="button" class="asg-chip-add" onclick="agregarMateriaModal('${u}')">${ic('plus',13)} Añadir materia</button></div>
  </div>`;
}

/* ---------- Guardar asignaciones en la base de datos ---------- */
function cambiosDeAsignacion(username, asig){
  const t = DB.teachers[username];
  const orden = MATERIAS_INFO.map(m=>m.id);
  const materias = materiasOrdenadas(Object.keys(asig));
  const limpio = {};
  materias.forEach(id=>{ limpio[id] = ordenarCursos(asig[id]); });
  const cursos = ordenarCursos([].concat(...Object.values(limpio)));

  const base = RUTAS.maestros + '/' + username;
  const cambios = {};
  cambios[base + '/materias'] = materias;
  cambios[base + '/cursos'] = cursos;
  cambios[base + '/asignaciones'] = limpio;
  cambios[base + '/asignacionesPorMateria'] = true;

  /* Actualización local inmediata */
  Object.assign(t, { materias, cursos, asignaciones:limpio, asignacionesPorMateria:true });

  /* Nombre del maestro que aparece en cada materia */
  MATERIAS_INFO.forEach((m, idx)=>{
    const tiene = materias.includes(m.id);
    let nuevoU = m.maestroUsername || '', nuevoN = m.maestro;
    if(tiene && (!m.maestroUsername || !DB.teachers[m.maestroUsername])){ nuevoU = username; nuevoN = t.nombre; }
    else if(tiene && m.maestroUsername === username){ nuevoN = t.nombre; }
    else if(!tiene && m.maestroUsername === username){
      const otro = Object.values(DB.teachers).find(x=>x.username!==username && aArreglo(x.materias).includes(m.id));
      nuevoU = otro ? otro.username : ''; nuevoN = otro ? otro.nombre : 'Por asignar';
    }
    if(nuevoU !== (m.maestroUsername||'') || nuevoN !== m.maestro){
      m.maestroUsername = nuevoU; m.maestro = nuevoN;
      cambios[RUTAS.materias + '/' + m.id] = Object.assign({}, m, {orden: (m.orden!=null?m.orden:idx)});
    }
  });
  return cambios;
}
async function guardarAsignaciones(username, asig, mensaje){
  if(!DB.teachers[username]) return false;
  const cambios = cambiosDeAsignacion(username, asig);
  render();
  const ok = await guardarVarios(cambios);
  if(ok && mensaje) toast(mensaje);
  return ok;
}

/* Quitar un curso de una materia (se guarda al instante) */
function quitarCursoMateria(username, materiaId, cursoId){
  const t = DB.teachers[username]; if(!t) return;
  const asig = asignacionesDe(t);
  asig[materiaId] = (asig[materiaId]||[]).filter(c=>c!==cursoId);
  guardarAsignaciones(username, asig, chipCursoTxt(cursoId) + ' se quitó de ' + materiaNombre(materiaId) + '.');
}

/* Quitar una materia completa */
function quitarMateriaMaestroModal(username, materiaId){
  const t = DB.teachers[username]; if(!t) return;
  const n = (asignacionesDe(t)[materiaId]||[]).length;
  openModal('Quitar ' + escHTML(materiaNombre(materiaId)),
    `<p style="font-size:14px; line-height:1.7; color:var(--gris-700); margin:0;">${escHTML(t.nombre)} dejará de ver <b>${escHTML(materiaNombre(materiaId))}</b>${n?' en sus '+n+' '+(n===1?'curso':'cursos'):''}. Las tareas, exámenes y notas que ya registró no se borran.</p>`,
    `<button class="btn btn-secondary" onclick="closeModal()">Cancelar</button><button class="btn btn-danger" onclick="quitarMateriaMaestro('${escHTML(username)}','${materiaId}')">${ic('trash',15)} Quitar materia</button>`);
}
function quitarMateriaMaestro(username, materiaId){
  const t = DB.teachers[username]; if(!t) return;
  const asig = asignacionesDe(t);
  delete asig[materiaId];
  closeModal();
  guardarAsignaciones(username, asig, materiaNombre(materiaId) + ' se quitó a ' + (t.nombreCorto||t.nombre) + '.');
}

/* ---------- Selector de cursos ---------- */
function selectorCursosHtml(seleccionados){
  return NIVELES.map(nivel=>{
    const clave = nivel==='Primaria' ? 'pri' : 'sec';
    return `<div class="cp-nivel ${clave}">
      <div class="cp-nivel-head"><h4>${nivel}</h4>
        <button type="button" onclick="cpNivel('${clave}', true)">Marcar todo</button>
        <button type="button" onclick="cpNivel('${clave}', false)">Quitar todo</button>
      </div>
      <div class="cp-grid">
        ${GRADOS.map(g=>`<div class="cp-grado"><span class="g">${ORDINAL[g]}</span>
          ${PARALELOS.map(p=>{
            const id = clave + '-' + g + p;
            const on = seleccionados.includes(id);
            return `<button type="button" class="cp-par ${on?'on':''}" data-c="${id}" aria-pressed="${on}" title="${escHTML(cursoNombre(id))}" onclick="cpToggle(this)">${p}</button>`;
          }).join('')}
        </div>`).join('')}
      </div>
    </div>`;
  }).join('');
}
function cpToggle(btn){
  btn.classList.toggle('on');
  btn.setAttribute('aria-pressed', btn.classList.contains('on'));
  cpContar();
}
function cpNivel(clave, marcar){
  document.querySelectorAll('.cp-nivel.'+clave+' .cp-par').forEach(b=>{ b.classList.toggle('on', marcar); b.setAttribute('aria-pressed', marcar); });
  cpContar();
}
function cpMarcar(ids){
  document.querySelectorAll('.cp-par').forEach(b=>{ const on = ids.includes(b.dataset.c); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
  cpContar();
}
function cpSeleccion(){ return Array.from(document.querySelectorAll('.cp-par.on')).map(b=>b.dataset.c); }
function cpContar(){
  const el = document.getElementById('cp-total');
  if(el){ const n = cpSeleccion().length; el.textContent = n + ' ' + (n===1?'curso seleccionado':'cursos seleccionados'); }
}
function cpCopiarDe(username, materiaId){
  if(!materiaId) return;
  const t = DB.teachers[username]; if(!t) return;
  cpMarcar(asignacionesDe(t)[materiaId] || []);
}
function copiarDeHtml(t, excluir){
  const otras = Object.keys(asignacionesDe(t)).filter(m=>m!==excluir);
  if(!otras.length) return '';
  return `<div class="cp-copiar">Usar los mismos cursos que en
    <select class="pill-input" onchange="cpCopiarDe('${escHTML(t.username)}', this.value)">
      <option value="">Elegir materia…</option>
      ${materiasOrdenadas(otras).map(m=>`<option value="${m}">${escHTML(materiaNombre(m))}</option>`).join('')}
    </select></div>`;
}
function pieSelector(accion){
  return `<span class="cp-total" id="cp-total"></span><button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>${accion}`;
}

function editarCursosMateriaModal(username, materiaId){
  const t = DB.teachers[username]; if(!t) return;
  const actuales = t.asignacionesPorMateria === true ? (asignacionesDe(t)[materiaId]||[]) : aArreglo(t.cursos);
  openModal('Cursos de ' + escHTML(materiaNombre(materiaId)) + ' · ' + escHTML(t.nombreCorto||t.nombre), `
    <div class="cp-intro">Toca cada paralelo para marcarlo o desmarcarlo. ${escHTML(t.nombre)} solo verá <b>${escHTML(materiaNombre(materiaId))}</b> en los cursos marcados.</div>
    ${copiarDeHtml(t, materiaId)}
    ${selectorCursosHtml(actuales)}`,
    pieSelector(`<button class="btn btn-primary" onclick="guardarCursosMateria('${escHTML(username)}','${materiaId}')">${ic('check',15)} Guardar cursos</button>`));
  cpContar();
}
function guardarCursosMateria(username, materiaId){
  const t = DB.teachers[username]; if(!t) return;
  const asig = asignacionesDe(t);
  /* Al pasar a "por materia", las demás materias conservan los cursos que tenían */
  asig[materiaId] = cpSeleccion();
  closeModal();
  guardarAsignaciones(username, asig, 'Cursos de ' + materiaNombre(materiaId) + ' guardados para ' + (t.nombreCorto||t.nombre) + '.');
}

function agregarMateriaModal(username){
  const t = DB.teachers[username]; if(!t) return;
  const tiene = Object.keys(asignacionesDe(t));
  const libres = MATERIAS_INFO.filter(m=>!tiene.includes(m.id));
  if(!libres.length){ toast('Este maestro ya tiene todas las materias.'); return; }
  openModal('Añadir materia a ' + escHTML(t.nombreCorto||t.nombre), `
    <label class="field-label">Materia</label>
    <select class="pill-input" id="am-materia" style="margin-bottom:16px;">
      ${libres.map(m=>`<option value="${m.id}">${escHTML(m.nombre)}${m.maestroUsername && m.maestroUsername!==username ? ' — también la dicta '+escHTML((DB.teachers[m.maestroUsername]||{}).nombreCorto||m.maestro) : ''}</option>`).join('')}
    </select>
    <label class="field-label">Cursos donde la dictará</label>
    ${copiarDeHtml(t, null)}
    ${selectorCursosHtml([])}`,
    pieSelector(`<button class="btn btn-primary" onclick="guardarMateriaNueva('${escHTML(username)}')">${ic('check',15)} Añadir materia</button>`));
  cpContar();
}
function guardarMateriaNueva(username){
  const t = DB.teachers[username]; if(!t) return;
  const mid = document.getElementById('am-materia').value;
  const cursos = cpSeleccion();
  if(!cursos.length){ toast('Marca al menos un curso para esta materia.'); return; }
  const asig = asignacionesDe(t);
  asig[mid] = cursos;
  closeModal();
  guardarAsignaciones(username, asig, materiaNombre(mid) + ' añadida a ' + (t.nombreCorto||t.nombre) + ' en ' + cursos.length + ' ' + (cursos.length===1?'curso':'cursos') + '.');
}

/* ---------- Cuenta del maestro (nombre, usuario, contraseña) ---------- */
function camposMaestro(t){
  const nuevo = !t;
  t = t || {};
  return `
    <div class="form-grid">
      <div class="full"><label class="field-label">Nombre completo *</label>
        <input class="pill-input" id="nm-nombre" value="${escHTML(t.nombre||'')}" placeholder="Ej. Prof. Carlos Mamani Quispe"></div>
      <div><label class="field-label">Usuario para ingresar *</label>
        <input class="pill-input mono" id="nm-user" value="${escHTML(t.username||'')}" placeholder="Ej. Carlos" ${t.username?'disabled':''}></div>
      <div><label class="field-label">Contraseña *</label>
        <input class="pill-input mono" id="nm-pass" value="${escHTML(t.password||'')}" placeholder="Contraseña de acceso"></div>
      ${nuevo ? `
      <div class="full">
        <label class="field-label">Primera materia *</label>
        <select class="pill-input" id="nm-materia">${MATERIAS_INFO.map(m=>`<option value="${m.id}">${escHTML(m.nombre)}</option>`).join('')}</select>
        <div class="ayuda">Después podrás añadirle más materias desde su tarjeta.</div>
      </div>
      <div class="full">
        <label class="field-label">Cursos de esa materia *</label>
        ${selectorCursosHtml([])}
      </div>` : `
      <div class="full"><div class="ayuda" style="margin-top:0;">Las materias y los cursos de este maestro se editan directamente en su tarjeta, en la lista de Maestros.</div></div>`}
    </div>`;
}

function nuevoMaestroModal(){
  openModal('Crear cuenta de maestro', camposMaestro(null),
    pieSelector(`<button class="btn btn-primary" onclick="guardarNuevoMaestro()">${ic('check',15)} Crear cuenta</button>`));
  cpContar();
}
function editarMaestroModal(username){
  const t = DB.teachers[username];
  if(!t) return;
  openModal('Editar cuenta de ' + escHTML(t.nombre), camposMaestro(t),
    `<button class="btn btn-secondary" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="guardarNuevoMaestro('${escHTML(username)}')">${ic('check',15)} Guardar cambios</button>`);
}

function marcadosEn(contenedorId){
  const cont = document.getElementById(contenedorId);
  if(!cont) return [];
  return Array.from(cont.querySelectorAll('input[type=checkbox]:checked')).map(x=>x.value);
}

function guardarNuevoMaestro(usernameExistente){
  const nombre = document.getElementById('nm-nombre').value.trim();
  const username = usernameExistente || document.getElementById('nm-user').value.trim();
  const password = document.getElementById('nm-pass').value.trim();

  if(!nombre){ toast('Escribe el nombre completo del maestro.'); return; }
  if(!username){ toast('Escribe el usuario con el que ingresará.'); return; }
  if(!/^[^.#$\[\]\/]+$/.test(username)){ toast('El usuario no puede tener los signos . # $ [ ] /'); return; }
  if(!password){ toast('Escribe una contraseña para la cuenta.'); return; }
  if(!usernameExistente && DB.teachers[username]){ toast('Ya existe un maestro con ese usuario.'); return; }

  const partes = nombre.replace(/^(Prof\.|Profa\.|Lic\.)\s*/i,'').split(' ');
  const base = RUTAS.maestros + '/' + username;

  if(usernameExistente){
    /* Solo se actualizan los datos de la cuenta; materias y cursos quedan igual */
    const t = DB.teachers[username];
    Object.assign(t, { nombre, password, nombreCorto: partes[0] || nombre });
    const cambios = {};
    cambios[base + '/nombre'] = nombre;
    cambios[base + '/password'] = password;
    cambios[base + '/nombreCorto'] = t.nombreCorto;
    MATERIAS_INFO.forEach((m, idx)=>{
      if(m.maestroUsername === username && m.maestro !== nombre){
        m.maestro = nombre;
        cambios[RUTAS.materias + '/' + m.id] = Object.assign({}, m, {orden:(m.orden!=null?m.orden:idx)});
      }
    });
    guardarVarios(cambios);
    closeModal();
    toast('Datos de ' + nombre + ' actualizados.');
    navigate('maestros');
    return;
  }

  const materiaId = document.getElementById('nm-materia').value;
  const cursos = cpSeleccion();
  if(!cursos.length){ toast('Marca al menos un curso para la materia.'); return; }

  const maestro = { username, password, nombre, nombreCorto: partes[0] || nombre, materias:[], cursos:[], estudiantes:[] };
  DB.teachers[username] = maestro;
  const cambios = Object.assign({}, { [base + '/username']: username, [base + '/password']: password,
    [base + '/nombre']: nombre, [base + '/nombreCorto']: maestro.nombreCorto },
    cambiosDeAsignacion(username, { [materiaId]: cursos }));
  guardarVarios(cambios);
  closeModal();
  toast('Cuenta creada. ' + nombre + ' ingresa con el usuario ' + username + '.');
  navigate('maestros');
}

/* ================= MATERIAS ================= */
function adminMaterias(){
  const body = MATERIAS_INFO.map(m=>{
    const maestro = m.maestroUsername && DB.teachers[m.maestroUsername];
    return `<tr>
      <td style="display:flex; align-items:center; gap:9px; font-weight:600;"><span class="subject-dot" style="background:${m.color};"></span>${m.nombre}</td>
      <td>${maestro ? maestro.nombre : '<span class="badge badge-gris">Por asignar</span>'}</td>
      <td class="mono">${Object.values(DB.students).filter(s=>typeof s.materias[m.id]==='number').length}</td>
      <td><button class="btn btn-ghost btn-sm" onclick="navigate('maestros')" title="Asignar maestro">${ic('teacher',14)}</button></td>
    </tr>`;
  }).join('');
  return `
  <div class="section-title">Materias</div>
  <div class="section-sub">Materias de la institución y el maestro responsable de cada una.</div>
  <div class="toolbar">
    <div class="tb-campo"><label class="field-label">Materias activas</label>
      <div class="tb-contador" style="width:max-content;">${MATERIAS_INFO.length} materias</div></div>
    <div class="tb-acciones"><button class="btn btn-primary" onclick="nuevaMateriaModal()">${ic('plus',15)} Nueva materia</button></div>
  </div>
  <div class="card">
    <div class="table-wrap"><table>
      <thead><tr><th>Materia</th><th>Maestro asignado</th><th>Con nota</th><th></th></tr></thead>
      <tbody>${body}</tbody>
    </table></div>
  </div>`;
}
function nuevaMateriaModal(){
  openModal('Nueva materia', `
    <div class="form-grid">
      <div class="full"><label class="field-label">Nombre de la materia *</label><input class="pill-input" id="nmat-nombre" placeholder="Ej. Dibujo Técnico"></div>
      <div><label class="field-label">Color de identificación</label><input class="pill-input" type="color" id="nmat-color" value="#c8321f" style="height:44px; padding:5px;"></div>
      <div><label class="field-label">Maestro responsable</label>
        <select class="pill-input" id="nmat-maestro"><option value="">Por asignar</option>${Object.values(DB.teachers).map(t=>`<option value="${t.username}">${t.nombre}</option>`).join('')}</select></div>
    </div>
  `, `<button class="btn btn-secondary" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="guardarNuevaMateria()">${ic('check',15)} Crear materia</button>`);
}
function guardarNuevaMateria(){
  const nombre = document.getElementById('nmat-nombre').value.trim();
  const color = document.getElementById('nmat-color').value;
  const maestroUsername = document.getElementById('nmat-maestro').value;
  if(!nombre){ toast('Escribe el nombre de la materia.'); return; }
  const id = nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,'').slice(0,12) || ('mat'+Date.now());
  if(MATERIAS_INFO.some(m=>m.id===id)){ toast('Ya existe una materia con un nombre parecido.'); return; }
  const t = DB.teachers[maestroUsername];
  const materia = { id, nombre, color, maestro: t ? t.nombre : 'Por asignar', maestroUsername: t ? t.username : '', orden: MATERIAS_INFO.length };
  const cambios = {};
  cambios[RUTAS.materias + '/' + id] = materia;
  if(t){
    t.materias = aArreglo(t.materias).concat([id]);
    cambios[RUTAS.maestros + '/' + t.username + '/materias'] = t.materias;
  }
  MATERIAS_INFO.push(materia);
  guardarVarios(cambios);
  closeModal();
  toast('Materia "' + nombre + '" creada correctamente.');
  navigate('materiasadmin');
}

/* ================= CURSOS ================= */
function adminCursos(){
  const filas = NIVELES.map(nivel=>{
    const cursos = CURSOS.filter(c=>c.nivel===nivel);
    return `
    <div class="card" style="margin-top:20px;">
      <div class="card-head"><div><h3>${nivel}</h3><div class="sub">${cursos.length} cursos · ${cursos.reduce((a,c)=>a+estudiantesDeCurso(c.id).length,0)} estudiantes</div></div></div>
      <div class="table-wrap"><table>
        <thead><tr><th>Curso</th><th>Grado</th><th>Paralelo</th><th>Estudiantes</th><th>Maestros asignados</th></tr></thead>
        <tbody>${cursos.map(c=>{
          const est = estudiantesDeCurso(c.id);
          const maes = Object.values(DB.teachers).filter(t=>aArreglo(t.cursos).includes(c.id));
          const matsEn = t=>{ const a = asignacionesDe(t); return Object.keys(a).filter(m=>a[m].includes(c.id)).map(materiaNombre).join(', '); };
          return `<tr>
            <td style="font-weight:600;">${c.nombre}</td>
            <td class="mono">${ORDINAL[c.grado]}</td>
            <td class="mono">${c.paralelo}</td>
            <td>${est.length ? `<span class="badge badge-verde">${est.length}</span>` : '<span class="badge badge-gris">0</span>'}</td>
            <td style="font-size:13px;">${maes.length ? maes.map(t=>(t.nombreCorto||t.nombre)+(matsEn(t)?' <span style="color:var(--gris-500)">('+matsEn(t)+')</span>':'')).join('<br>') : '—'}</td>
          </tr>`;
        }).join('')}</tbody>
      </table></div>
    </div>`;
  }).join('');
  return `
  <div class="section-title">Cursos</div>
  <div class="section-sub">La institución maneja ${CURSOS.length} cursos: 6 grados por 3 paralelos (A, B y C) en Primaria y en Secundaria.</div>
  ${filas}`;
}

function adminRendimiento(){
  const allStudents = Object.values(DB.students);
  return `
  <div class="section-title">Rendimiento académico institucional</div>
  <div class="section-sub">Resultados calculados automáticamente según promedio y asistencia.</div>
  <div class="grid grid-2" style="margin-top:20px;">
    ${allStudents.map(s=>{
      const rend = computeRendimiento(s);
      return `<div class="card">
        <div class="card-head"><div><h3>${s.nombreCompleto}</h3><div class="sub">Carnet ${s.carnet}</div></div>${gaugeSVG(promedioGeneral(s),74)}</div>
        ${perfCard(rend)}
      </div>`;
    }).join('')}
  </div>`;
}

function adminAsistencia(){
  const allStudents = Object.values(DB.students);
  return `
  <div class="section-title">Asistencia institucional</div>
  <div class="section-sub">Resumen de asistencia de todos los estudiantes.</div>
  <div class="card" style="margin-top:20px;">
    <div class="table-wrap"><table>
      <thead><tr><th>Estudiante</th><th>Carnet</th><th>Curso</th><th>% Asistencia</th><th>Estado</th></tr></thead>
      <tbody>${allStudents.map(s=>{
        const p = porcentajeAsistencia(s);
        return `<tr><td style="font-weight:600;">${s.nombreCompleto}</td><td class="mono">${s.carnet}</td><td><span class="chip-curso">${cursoCorto(s.cursoId)}</span></td><td>${p}%</td><td><span class="badge ${p>=90?'badge-verde':p>=80?'badge-amarillo':'badge-rojo'}">${p>=90?'Buena':p>=80?'Regular':'Baja'}</span></td></tr>`;
      }).join('')}</tbody>
    </table></div>
  </div>`;
}

function adminConfiguracion(){
  return `
  <div class="section-title">Configuración del sistema</div>
  <div class="section-sub">Ajustes generales de la plataforma del colegio.</div>
  <div class="grid grid-2" style="margin-top:20px;">
    <div class="card">
      <div class="card-head"><h3>Institución</h3></div>
      <div style="margin-bottom:12px;"><label class="field-label">Nombre de la institución</label><input class="pill-input" value="U.E. Técnico Humanístico San Juan"></div>
      <div style="margin-bottom:12px;"><label class="field-label">Ciclo escolar</label><input class="pill-input" value="2026"></div>
      <button class="btn btn-primary btn-sm" onclick="toast('Configuración guardada correctamente.')">Guardar cambios</button>
    </div>
    <div class="card">
      <div class="card-head"><h3>Umbrales de alerta de rendimiento</h3></div>
      <div style="margin-bottom:12px;"><label class="field-label">Promedio mínimo saludable</label><input class="pill-input" value="75"></div>
      <div style="margin-bottom:12px;"><label class="field-label">Asistencia mínima saludable (%)</label><input class="pill-input" value="85"></div>
      <button class="btn btn-primary btn-sm" onclick="toast('Umbrales actualizados correctamente.')">Guardar cambios</button>
    </div>
  </div>`;
}

/* ============================================================
   ADMINISTRADOR · BASE DE DATOS
   ============================================================ */
function adminBaseDatos(){
  const st = estadoDB();
  const nodos = [
    ['estudiantes',     Object.keys(DB.students).length,  'Datos, notas, asistencia, tareas y exámenes'],
    ['padres',          Object.keys(DB.parents).length,   'Cuentas de padres y el carnet de sus hijos'],
    ['maestros',        Object.keys(DB.teachers).length,  'Maestros, sus materias y sus estudiantes'],
    ['administradores', Object.keys(DB.admins).length,    'Cuentas de administración'],
    ['materias',        MATERIAS_INFO.length,             'Materias del curso y su maestro asignado'],
    ['tareas',          DB.tareas.length,                 'Tareas publicadas por los maestros, con su curso'],
    ['examenes',        DB.examenes.length,               'Exámenes programados por curso y materia'],
    ['consultas',       DB.consultas.length,              'Mensajes entre estudiantes, padres y maestros'],
    ['avisos',          DB.avisos.length,                 'Avisos publicados por los maestros'],
  ];
  return `
  <div class="section-title">Base de datos</div>
  <div class="section-sub">Base de datos local del navegador. Todo lo que ves aquí se guarda en este dispositivo.</div>

  <div class="card" style="margin-top:20px;">
    <div class="card-head"><h3>Estado de la base de datos</h3>
      <span class="db-pill ${st.clase}"><span class="db-dot"></span>${st.texto}</span>
    </div>
    <div style="margin-bottom:10px;"><span class="db-ruta">localStorage · ${CLAVE_LOCAL}</span></div>
    ${dbError ? `<div class="login-error" style="margin-top:10px;">${ic('alert',17)} ${dbError}</div>` : ''}
    <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:14px;">
      <button class="btn btn-secondary btn-sm" onclick="exportarBaseDatos()">Descargar copia (JSON)</button>
      <button class="btn btn-secondary btn-sm" onclick="forzarMigracion()">Actualizar estructura (cursos y materias)</button>
      <button class="btn btn-danger btn-sm" onclick="restaurarDatosEjemplo()">Restaurar datos de ejemplo</button>
    </div>
  </div>

  <div class="card" style="margin-top:20px;">
    <div class="card-head"><h3>Nodos guardados</h3></div>
    <div class="table-wrap"><table>
      <thead><tr><th>Nodo</th><th>Registros</th><th>Qué contiene</th></tr></thead>
      <tbody>
        ${nodos.map(n=>`<tr><td><span class="db-ruta">/${n[0]}</span></td><td><strong>${n[1]}</strong></td><td>${n[2]}</td></tr>`).join('')}
      </tbody>
    </table></div>
  </div>

  <div class="card" style="margin-top:20px;">
    <div class="card-head"><h3>Dónde se guardan los datos</h3></div>
    <div class="section-sub" style="margin:0;">Los datos se guardan en el navegador de este dispositivo (localStorage). Usa «Descargar copia (JSON)» para respaldarlos y «Restaurar datos de ejemplo» para volver al estado inicial.</div>
  </div>`;
}

function exportarBaseDatos(){
  const datos = {
    estudiantes: DB.students, padres: DB.parents, maestros: DB.teachers,
    administradores: DB.admins,
    materias: MATERIAS_INFO.reduce((a,m,i)=>{ a[m.id]=Object.assign({},m,{orden:i}); return a; },{}),
    consultas: DB.consultas.reduce((a,c)=>{ a[c.id]=c; return a; },{}),
    avisos: DB.avisos.reduce((a,v)=>{ a[v.id]=v; return a; },{}),
    tareas: DB.tareas.reduce((a,t)=>{ a[t.id]=t; return a; },{}),
    examenes: DB.examenes.reduce((a,e)=>{ a[e.id]=e; return a; },{}),
  };
  const blob = new Blob([JSON.stringify(datos, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'control-academico-san-juan.json';
  a.click();
  URL.revokeObjectURL(a.href);
  toast('Copia de la base de datos descargada.');
}

function restaurarDatosEjemplo(){
  openModal('Restaurar datos de ejemplo',
    '<p style="font-size:14px; line-height:1.7; color:var(--texto-2);">Se van a reemplazar <strong>todos</strong> los datos que hay ahora en la base de datos por los datos de ejemplo originales. Esta acción no se puede deshacer.</p>',
    '<button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancelar</button>' +
    '<button class="btn btn-danger btn-sm" onclick="confirmarRestaurar()">Sí, restaurar</button>');
}

async function confirmarRestaurar(){
  closeModal();
  const ok = await sembrarBaseDeDatos(true);
  toast(ok ? 'Base de datos restaurada con los datos de ejemplo.' : 'No se pudo restaurar la base de datos.');
}

/* ============================================================
   MODAL GENÉRICO
   ============================================================ */
function openModal(title, bodyHtml, footHtml){
  document.getElementById('modal-inner').innerHTML = `
    <div class="modal-head"><h3>${title}</h3><button class="modal-close" onclick="closeModal()">${ic('x',14)}</button></div>
    <div class="modal-body">${bodyHtml}</div>
    ${footHtml?`<div class="modal-foot">${footHtml}</div>`:''}
  `;
  document.getElementById('modal-bg').classList.add('show');
}
function closeModal(){ document.getElementById('modal-bg').classList.remove('show'); }
document.getElementById('modal-bg').addEventListener('click', (e)=>{ if(e.target.id==='modal-bg') closeModal(); });

/* ============================================================
   INIT
   ============================================================ */
renderRoleTabs();

/* ============================================================
   MÓDULO NUEVO · Excel vinculado, asistencia detallada y citaciones
   (todo se guarda en la base de datos local)
   ============================================================ */
const EXCEL_URL = 'REGISTRO_PEDAGOGICO_2026.xlsm';   // pon este archivo junto al index.html (o una URL completa)
function escH(s){ return String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function hoyISO(){ const d=new Date(),p=n=>String(n).padStart(2,'0'); return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate()); }
function horaAhora(){ const d=new Date(),p=n=>String(n).padStart(2,'0'); return p(d.getHours())+':'+p(d.getMinutes()); }
function isoADate(iso){ const [y,m,d]=String(iso).split('-').map(Number); return new Date(y,(m||1)-1,d||1); }
function fechaLarga(iso){ return isoADate(iso).toLocaleDateString('es-BO',{weekday:'long',day:'numeric',month:'long',year:'numeric'}); }

/* ---------- Abrir el Registro Pedagógico (Excel) ----------
   Orden: 1) enlace guardado en la base de datos (Drive/OneDrive) 2) archivo junto al index.html
          3) copia guardada en este navegador 4) ventana para configurarlo una sola vez. */
const EXCEL_NOMBRE = 'REGISTRO_PEDAGOGICO_2026.xlsm';
function idbExcel(modo, blob){
  return new Promise(res=>{
    try{
      const rq = indexedDB.open('bth-excel',1);
      rq.onupgradeneeded = ()=>rq.result.createObjectStore('f');
      rq.onerror = ()=>res(null);
      rq.onsuccess = ()=>{
        const st = rq.result.transaction('f', modo==='put'?'readwrite':'readonly').objectStore('f');
        const op = modo==='put' ? st.put(blob,'excel') : st.get('excel');
        op.onsuccess = ()=>res(op.result||true); op.onerror = ()=>res(null);
      };
    }catch(e){ res(null); }
  });
}
function descargarBlob(blob){
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = EXCEL_NOMBRE;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href), 60000);
}
function configurarExcel(){
  openModal('Vincular el Registro Pedagógico (Excel)', `
    <p style="font-size:13.5px;color:var(--gris-500);margin-bottom:12px;">Para unir la página con tu formato Excel, pega el enlace o elige el archivo. Después, el botón lo descarga con las tareas ya escritas en su columna:</p>
    <label class="field-label">Opción 1 · Enlace del Excel (Google Drive, OneDrive…) — lo verán todos los maestros</label>
    <input class="pill-input" id="ex-url" placeholder="https://..." value="${escH((DB.cfg&&DB.cfg.excelUrl)||'')}">
    <button class="btn btn-primary btn-sm" style="margin:8px 0 18px;" onclick="guardarEnlaceExcel()">Guardar enlace</button>
    <label class="field-label">Opción 2 · Elegir el archivo .xlsm de este equipo</label>
    <input type="file" id="ex-file" accept=".xlsm,.xlsx" class="pill-input" onchange="elegirArchivoExcel(this.files[0])">`);
}
function guardarEnlaceExcel(){
  const u = document.getElementById('ex-url').value.trim();
  if(!/^https?:\/\//i.test(u)){ toast('Pega un enlace válido que empiece con https://'); return; }
  guardar('configuracion/excelUrl', u); DB.cfg = Object.assign({}, DB.cfg, {excelUrl:u}); closeModal(); window.open(u,'_blank');
}
async function elegirArchivoExcel(f){
  if(!f) return;
  await idbExcel('put', f); closeModal(); descargarBlob(f);
  toast('Excel vinculado en este equipo. Desde ahora el botón lo abre directo.');
}
function botonExcel(tipo){
  const txt = tipo==='asistencia' ? 'ESPECIFICACIONES Y REGISTRO DE ASISTENCIA' : 'ESPECIFICACIONES Y REGISTRO DE CALIFICACIONES';
  return `<button class="btn btn-excel" onclick="abrirExcel('${tipo}')">${ic('clipboard',15)} ${txt}</button> <button class="btn btn-ghost btn-sm" onclick="configurarExcel()" title="Vincular o cambiar el Excel">${ic('plus',14)} Vincular Excel</button>`;
}

/* ---------------- ASISTENCIA DEL MAESTRO (detallada, con motivo y hora) ---------------- */
let asFechaSel = null;
const ASIS_ESTADOS = {presente:['Presente','badge-verde'], atraso:['Atraso','badge-amarillo'], falta:['Falta','badge-rojo'], permiso:['Permiso / licencia','badge-azul']};
function maestroAsistencia(t){
  const curso = cursoActivoMaestro(t);
  const estudiantes = estudiantesDeCurso(curso);
  const fecha = asFechaSel || hoyISO();
  return `
  <div class="section-title">Registro de asistencia</div>
  <div class="section-sub">Hoy es <b>${fechaLarga(hoyISO())}</b> · <b id="reloj-vivo">${horaAhora()}</b>. Registra estado, hora y motivo de cada estudiante.</div>
  <div style="margin:14px 0 0 0;">${botonExcel('asistencia')}</div>
  ${barraFiltrosMaestro(t, 'asistencia', {sinMateria:true,
    accion:`<input type="date" class="pill-input" style="max-width:160px;padding:8px 11px;" id="as-fecha" value="${fecha}" max="${hoyISO()}" onchange="asFechaSel=this.value;navigate('asistencia')">
            <button class="btn btn-ghost btn-sm" onclick="marcarTodosAsistencia('presente')">Marcar todos presentes</button>`})}
  <div class="card">
    ${estudiantes.length ? `<div class="table-wrap"><table>
      <thead><tr><th>Estudiante</th><th>Estado</th><th>Hora de llegada</th><th>Motivo</th><th>% acum.</th></tr></thead>
      <tbody>
      ${estudiantes.map(s=>{
        const r = ((DB.asisDet||{})[s.carnet]||{})[fecha] || {};
        const est = r.estado || 'presente';
        return `<tr>
        <td style="font-weight:600;">${escH(s.nombreCompleto)}<div class="mono" style="font-size:11.5px;color:var(--gris-500);font-weight:500;">${s.carnet}</div></td>
        <td><select class="pill-input asis-sel" style="max-width:160px;padding:8px 11px;" id="asis-${s.carnet}" onchange="asisCambio('${s.carnet}')">
          ${Object.keys(ASIS_ESTADOS).map(k=>`<option value="${k}" ${est===k?'selected':''}>${ASIS_ESTADOS[k][0]}</option>`).join('')}</select></td>
        <td><input type="time" class="pill-input" style="max-width:120px;padding:8px 11px;" id="ahora-${s.carnet}" value="${r.hora||''}" ${est==='falta'?'disabled':''}></td>
        <td><input class="pill-input" style="min-width:220px;padding:8px 11px;" id="amot-${s.carnet}" value="${escH(r.motivo||'')}" placeholder="Motivo (obligatorio si no está presente)" ${est==='presente'?'disabled':''}></td>
        <td class="mono">${porcentajeAsistencia(s)}%</td></tr>`;}).join('')}
      </tbody></table></div>
    <button class="btn btn-primary" style="margin-top:16px;" onclick="guardarAsistencia()">${ic('check',15)} Guardar asistencia del ${fecha.split('-').reverse().join('/')}</button>`
    : emptyState('users','Este curso no tiene estudiantes','Registra estudiantes en este curso para poder pasar asistencia.')}
  </div>`;
}
function asisCambio(c){
  const est = document.getElementById('asis-'+c).value;
  const h = document.getElementById('ahora-'+c), m = document.getElementById('amot-'+c);
  h.disabled = (est==='falta'); m.disabled = (est==='presente');
  if(est==='presente'||est==='falta') { if(est==='falta') h.value=''; }
  else if(!h.value) h.value = horaAhora();
  if(est==='presente') m.value='';
}
function marcarTodosAsistencia(v){
  document.querySelectorAll('.asis-sel').forEach(sel=>{ sel.value=v; asisCambio(sel.id.replace('asis-','')); });
  toast('Todos los estudiantes quedaron marcados como presentes.');
}
function guardarAsistencia(){
  const t = currentUser.data, curso = cursoActivoMaestro(t), fecha = asFechaSel || hoyISO();
  const cambios = {}; let n = 0, falta = 0;
  const lista = estudiantesDeCurso(curso);
  for(const s of lista){
    const sel = document.getElementById('asis-'+s.carnet); if(!sel) continue;
    const estado = sel.value, hora = document.getElementById('ahora-'+s.carnet).value, motivo = document.getElementById('amot-'+s.carnet).value.trim();
    if(estado!=='presente' && !motivo){ toast('Escribe el motivo para '+s.nombre+' ('+ASIS_ESTADOS[estado][0]+').'); return; }
    if(estado==='atraso' && !hora){ toast('Indica la hora de llegada de '+s.nombre+'.'); return; }
  }
  lista.forEach(s=>{
    const sel = document.getElementById('asis-'+s.carnet); if(!sel) return;
    const estado = sel.value;
    const reg = { estado, hora: document.getElementById('ahora-'+s.carnet).value || '', motivo: document.getElementById('amot-'+s.carnet).value.trim(),
                  maestro:t.username, maestroNombre:t.nombre, cursoId:curso, registrado:new Date().toISOString() };
    const yaExistia = ((DB.asisDet||{})[s.carnet]||{})[fecha];
    cambios[RUTAS.asisDet+'/'+s.carnet+'/'+fecha] = reg;
    if(!yaExistia){   // se mantiene también el resumen semanal que usa el % de asistencia
      let sem = s.asistencia[s.asistencia.length-1];
      if(!sem || sem.dias.length>=5){ sem = {semana:'Semana '+(s.asistencia.length+1), dias:[]}; s.asistencia.push(sem); }
      sem.dias.push(estado);
      cambios[RUTAS.estudiantes+'/'+s.carnet+'/asistencia'] = s.asistencia;
    }
    n++;
  });
  if(!n){ toast('No hay estudiantes para registrar.'); return; }
  guardarVarios(cambios);
  toast('Asistencia de '+n+' estudiante(s) guardada en tiempo real.');
  navigate('asistencia');
}

/* Vista detallada para estudiante y padre: día, fecha, mes, hora y motivo */
function asistenciaDetallada(student){
  const reg = (DB.asisDet||{})[student.carnet] || {};
  const fechas = Object.keys(reg).sort().reverse();
  if(!fechas.length) return `<div class="card" style="margin-bottom:16px;">${emptyState('calendarCheck','Aún no hay asistencia detallada','Cuando el maestro registre la asistencia verás aquí cada día con su hora y motivo.')}</div>`;
  const meses = {};
  fechas.forEach(f=>{ const d=isoADate(f); const k=d.toLocaleDateString('es-BO',{month:'long',year:'numeric'}); (meses[k]=meses[k]||[]).push(f); });
  return `<div class="card" style="margin-bottom:16px;">
    <div class="card-head"><div><h3>Asistencia detallada</h3><div class="sub">Toca un día con atraso, falta o permiso para ver el motivo que registró el maestro</div></div>
    <span class="badge badge-azul">En tiempo real</span></div>
    ${Object.keys(meses).map(mes=>{
      const fs = meses[mes], cnt = k=>fs.filter(f=>reg[f].estado===k).length;
      return `<div class="asis-mes"><div class="asis-mes-h">${escH(mes)}
        <span>${cnt('presente')} presentes · ${cnt('atraso')} atrasos · ${cnt('falta')} faltas · ${cnt('permiso')} permisos</span></div>
      ${fs.map(f=>{ const r=reg[f], d=isoADate(f), E=ASIS_ESTADOS[r.estado]||ASIS_ESTADOS.presente;
        const cab = `<div class="asis-fila"><div class="asis-dia"><b>${d.getDate()}</b><small>${d.toLocaleDateString('es-BO',{month:'short'})}</small></div>
          <div class="asis-info"><div style="font-weight:600;text-transform:capitalize;">${d.toLocaleDateString('es-BO',{weekday:'long'})}</div>
          <div style="font-size:12px;color:var(--gris-500);">${fechaLarga(f)}${r.hora?' · llegó a las '+r.hora:''}</div></div>
          <span class="badge ${E[1]}">${E[0]}</span></div>`;
        return r.estado==='presente' ? `<div class="asis-item">${cab}</div>`
          : `<details class="asis-item"><summary>${cab}</summary><div class="asis-motivo">${ic('alert',15)} <div><b>Motivo:</b> ${escH(r.motivo||'Sin motivo registrado')}<br><span>Registrado por ${escH(r.maestroNombre||'el maestro')}${r.hora?' · hora '+r.hora:''}</span></div></div></details>`;
      }).join('')}</div>`; }).join('')}
  </div>`;
}

/* ---------------- CITACIONES ---------------- */
function citasDe(carnet){ return (DB.citas||[]).filter(c=>c.carnet===carnet); }
function citaVigente(c){ return isoADate(c.fecha).getTime() >= isoADate(hoyISO()).getTime(); }
function carnetVisible(){ return currentUser ? (currentUser.role==='estudiante' ? currentUser.data.carnet : currentUser.role==='padre' ? parentSelectedCarnet : null) : null; }
function bannerCitaciones(){
  const c = carnetVisible(); if(!c) return '';
  const v = citasDe(c).filter(citaVigente); if(!v.length) return '';
  const esPadre = currentUser.role==='padre', est = DB.students[c];
  return v.slice(0,2).map(x=>`<div class="cita-banner">
    <div class="cita-ic">${ic('alert',26)}</div>
    <div><div class="cita-t">${esPadre ? 'Reunión de emergencia: su hijo/a '+escH(est?est.nombre:'')+' ha sido citado' : 'Han citado a tu padre, madre o tutor'}</div>
    <div class="cita-d"><b>${escH(x.tipo)}</b> · ${escH(x.motivo)}<br>${ic('calendar',13)} ${fechaLarga(x.fecha)} · ${ic('clock',13)} ${escH(x.hora)} · Citó: ${escH(x.maestroNombre)}</div></div>
    <button class="btn btn-sm cita-btn" onclick="navigate('citaciones')">Ver citaciones</button></div>`).join('');
}
function pintarPinCitas(){
  let pin = document.getElementById('cita-pin');
  const c = carnetVisible(), v = c ? citasDe(c).filter(citaVigente) : [];
  if(!currentUser || !v.length){ if(pin) pin.style.display='none'; return; }
  if(!pin){ pin = document.createElement('div'); pin.id='cita-pin'; document.body.appendChild(pin); }
  const x = v[0];
  pin.style.display='block';
  pin.innerHTML = `<div class="pin-h" onclick="navigate('citaciones')">${ic('alert',16)} <b>${v.length} citación${v.length>1?'es':''} pendiente${v.length>1?'s':''}</b></div>
    <div class="pin-b" onclick="navigate('citaciones')">${escH(x.tipo)} · ${x.fecha.split('-').reverse().join('/')} ${escH(x.hora)}</div>`;
}
function citacionesVista(carnet){
  const lista = carnet ? citasDe(carnet) : [];
  return `<div class="section-title">Citaciones</div>
  <div class="section-sub">Historial de citaciones a reunión enviadas por los maestros.</div>
  <div style="margin-top:16px;">${lista.length ? lista.map(x=>`<div class="card cita-card ${citaVigente(x)?'vig':''}">
    <div class="card-head"><div><h3>${escH(x.tipo)}</h3><div class="sub">Citó ${escH(x.maestroNombre)} · enviada el ${new Date(x.creada).toLocaleDateString('es-BO')}</div></div>
    <span class="badge ${citaVigente(x)?'badge-rojo':'badge-gris'}">${citaVigente(x)?'Pendiente':'Pasada'}</span></div>
    <p style="margin:6px 0 10px;">${escH(x.motivo)}</p>
    <div class="mono" style="font-size:13px;">${ic('calendar',14)} ${fechaLarga(x.fecha)} &nbsp; ${ic('clock',14)} ${escH(x.hora)}</div></div>`).join('')
    : emptyState('checkCircle','Sin citaciones','No hay citaciones registradas.')}</div>`;
}
function maestroCitaciones(t){
  const curso = cursoActivoMaestro(t), ests = estudiantesDeCurso(curso);
  const mias = (DB.citas||[]).filter(c=>c.maestro===t.username);
  return `<div class="section-title">Citaciones a padres de familia</div>
  <div class="section-sub">Cita a un padre o madre por mal comportamiento o bajo rendimiento. El estudiante y su familia lo verán de inmediato.</div>
  ${barraFiltrosMaestro(t,'citaciones',{sinMateria:true})}
  <div class="card"><div class="card-head"><h3>Nueva citación</h3></div>
    <div class="grid grid-2" style="gap:12px;">
      <div><label class="field-label">Estudiante</label><select class="pill-input" id="ci-est">${ests.map(s=>`<option value="${s.carnet}">${escH(s.nombreCompleto)}</option>`).join('')}</select></div>
      <div><label class="field-label">Tipo</label><select class="pill-input" id="ci-tipo"><option>Mal comportamiento</option><option>Bajo rendimiento</option><option>Inasistencias</option><option>Otro</option></select></div>
      <div><label class="field-label">Fecha de la reunión</label><input type="date" class="pill-input" id="ci-fecha" min="${hoyISO()}" value="${hoyISO()}"></div>
      <div><label class="field-label">Hora</label><input type="time" class="pill-input" id="ci-hora" value="08:00"></div>
    </div>
    <label class="field-label" style="margin-top:12px;display:block;">Motivo</label>
    <textarea class="pill-input" id="ci-motivo" rows="3" style="width:100%;" placeholder="Describe el motivo de la citación"></textarea>
    <button class="btn btn-primary" style="margin-top:14px;" onclick="guardarCitacion()" ${ests.length?'':'disabled'}>${ic('check',15)} Enviar citación</button>
  </div>
  <div class="card" style="margin-top:16px;"><div class="card-head"><h3>Citaciones enviadas</h3></div>
    ${mias.map(x=>`<div class="list-item"><div class="list-icon red">${ic('alert',16)}</div>
      <div class="list-body"><div class="list-title">${escH(x.estudiante)} · ${escH(x.tipo)}</div><div class="list-meta">${x.fecha.split('-').reverse().join('/')} ${escH(x.hora)} · ${escH(x.motivo)}</div></div>
      <button class="btn btn-ghost btn-sm" onclick="eliminarCitacion('${x.id}')">Quitar</button></div>`).join('') || emptyState('chat','Sin citaciones','Aún no enviaste ninguna.')}
  </div>`;
}
function guardarCitacion(){
  const t = currentUser.data, carnet = document.getElementById('ci-est').value;
  const motivo = document.getElementById('ci-motivo').value.trim(), fecha = document.getElementById('ci-fecha').value, hora = document.getElementById('ci-hora').value;
  if(!carnet||!motivo||!fecha||!hora){ toast('Completa estudiante, motivo, fecha y hora.'); return; }
  const s = DB.students[carnet], id = 'cit'+Date.now();
  guardar(RUTAS.citaciones+'/'+id, { id, carnet, estudiante:s.nombreCompleto, cursoId:s.cursoId, maestro:t.username, maestroNombre:t.nombre,
    tipo:document.getElementById('ci-tipo').value, motivo, fecha, hora, creada:new Date().toISOString() });
  toast('Citación enviada a la familia de '+s.nombre+'.');
  document.getElementById('ci-motivo').value='';
}
function eliminarCitacion(id){ if(confirm('¿Quitar esta citación?')) guardar(RUTAS.citaciones+'/'+id, null); }

setInterval(()=>{ const r=document.getElementById('reloj-vivo'); if(r) r.textContent=horaAhora(); if(!currentUser) pintarPinCitas(); }, 1000);

/* ============================================================
   EXCEL VINCULADO · las tareas se escriben en la primera columna vacía
   del Registro Pedagógico y salen ya dentro del archivo al descargarlo.
   ============================================================ */
const XL_CLASES = [{"n": "01", "g": "1º \"A\"", "a": "TECNICA T.G./T.T.E./BTH"}, {"n": "02", "g": "1º \"C\"", "a": "CIENCIAS SOCIALES"}, {"n": "03", "g": "3º \"B\"", "a": "EDUCACIÓN MUSICAL"}, {"n": "04", "g": "3º \"C\"", "a": "EDUCACIÓN MUSICAL"}, {"n": "05", "g": "4º \"A\"", "a": "EDUCACIÓN MUSICAL"}, {"n": "06", "g": "4º \"B\"", "a": "EDUCACIÓN MUSICAL"}, {"n": "07", "g": "4º \"C\"", "a": "EDUCACIÓN MUSICAL"}, {"n": "08", "g": "5º \"A\"", "a": "EDUCACIÓN MUSICAL"}, {"n": "09", "g": "5º \"B\"", "a": "EDUCACIÓN MUSICAL"}, {"n": "10", "g": "5º \"C\"", "a": "EDUCACIÓN MUSICAL"}, {"n": "11", "g": "6º \"A\"", "a": "EDUCACIÓN MUSICAL"}, {"n": "12", "g": "6º \"B\"", "a": "EDUCACIÓN MUSICAL"}, {"n": "13", "g": "6º \"C\"", "a": "EDUCACIÓN MUSICAL"}, {"n": "14", "g": "5º \"B\"", "a": "VALORES, ESP. Y RELIGIONES"}, {"n": "15", "g": "5º \"C\"", "a": "COMUNICACIÓN Y LENGUAJES"}, {"n": "16", "g": "6º \"A\"", "a": "LENGUA EXTRANJERA"}, {"n": "17", "g": "6º \"B\"", "a": "CIENCIAS SOCIALES"}, {"n": "18", "g": "6º \"C\"", "a": "EDUCACIÓN FÍSICA Y DEPORTES"}];
const XL_EST = {"01":["AMADOR ALVAREZ ANIEL EMILIO","ANTELO BALLON THIANA ISABELA","ARANDIA GANDARILLAS YOMAIRA","BARRIENTOS VILLARROEL MIA AGUSTINA","CABELLO HONOR KAREN ARIELY","CASTAÑO RIVERA FRANZ YHAMIL","CHURA PARI JAQUELINE ROSARIO","COLODRO YABETA WILMAN JAIR","COLQUE CHUMACERO EVELYN","CUELLAR RODRIGUEZ DAILER ISRAEL","ESCALANTE LAZCANO EMANUEL MATHIAS","ESCOBAR AGUILAR JESUS AMADOR","ESPINDOLA FERRUFINO DANIA","GARCIA MIRANDA CALEB ANDRES","GUTIERREZ NINA ROMINA","HERRERA ROJAS THIAGO NICOLAS","HONOR LEDEZMA JOSE LEANDRO","JUSTINIANO DURAN SANTIAGO","MACIAS LAPACA GABRIEL","MAMANI APAZA RODRIGO","MAMANI GONZALES DULCE MASSIEL","MEDINA ARANCIBIA JHOJAN SAMIEL","MUIBA SANDOVAL FABIO","NUÑEZ MEJIA IRINA","ORIHUELA SALAZAR MAYERLY","ORTIZ CESPEDES NATALY","QUELCA POMA KAYLEN ALEXIA","QUISPE VASQUEZ MATEO BENJAMIN","RAMIREZ GONZALES BRYAN ABDIEL","RIOS VIDAL PABLO FARID","ROJAS CUELLAR ADAIR","ROMERO SUBELZA XIOMARA AYME","SALVATIERRA VINIQUE THIAGO ANDREY","SANCHEZ VELEZ LUCIANA ABIGAIL","SECKO CHOQUE YELSON","TABOADA FLORES MATEO ENRIQUE","TAMES THAMES LUCAS MATEO","TANTANI CONDORI REGINA SULLY","TIÑINI YUJRA JAIR","VILLARROEL VELASQUEZ XIOMARA LEONOR","YEBARA SEGUNDO MARILIN","PINTO NAIM JAFIEL","GUTIERREZ OVALE MATEO"],"02":["ARAUZ PARADA GABRIELA","CALDERON CUELLAR ALEXIS BRANDON","CAMACHO HIGUERAS MATHIEU","CANAVIRI YUCRA JAZMIN","CHOQUETOPA HUANCA JUAN DANIEL","CHUMACERO SORIA KELLY","CISNEROS PACHECO KEILY","CLAROS MAMANI JOSUE","CONDORI CONDORI JHON SAID","CRUZ LUIS MATIAS","ESCALANTE ALVAREZ AARON ","FLORES SOLIZ CARLOS DANIEL","GARCIA VACA JOSE SANTIAGO","HUARAYO IPURANI JHOSEPH","JALA ANZE JHEYMI KEYLIN","LOPEZ MAMANI WALTER","MAMANI FLORES MELISA","MEDINA ROCA LUCAS EMERSON","MENACHO TICONA NAJAIRA","MENESES SUAREZ SOLANGE","MONTAÑO ZELAYA ANGHY AMELY","NAVIA LOPEZ JOSE EMILIANO","ORTUÑO IRAHORI JOSE ANGEL AUGUSTO","PEÑA SALVATIERRA MATIAS","PEREZ PEREIRA VICTOR GABRIEL","RAMIREZ CUELLAR ANDERSON","RAMOS TITO MARIBEL","ROCHA FERNANDEZ YERKO","SAAVEDRA BARBOSA EMILY DANITZA","SALVATIERRA SALVATIERRA ROSA ELENA","SANCHEZ ESPINOZA IDSEL RENESNE","SANCHEZ MASIAS JHON JAMES","SOLIZ CUELLAR MARIA DEL CARMEN","SOLIZ HILARION ABEL EMANUEL","SOLIZ HILARION VICTOR EMANUEL","SOSA TELLEZ LUCIANE","SUAREZ PADILLA BRENDA","TAMAYO ESPINOZA ALEXANDER","TORREZ AGUILAR ABRIL SAMIRA","TORREZ SEJAS DANA MABEL","YURQUINA YUCO ESTEBAN SAMUEL","ZENTENO MALDONADO THAIS","MUÑOZ CORTES RANSETT DANIEL","FLORES MAMANI MARIA ANGELA","DELGADILLO GUTIEREZ GUILLERMO"],"03":["ALIAGA CAPIONA JAVIER","ALPIRI YABETA MELANY","ALVARADO CALLAU LUANA","ALVAREZ CHOLIMA ALEXANDER","ALVAREZ FERNANDEZ ANTHONY LUCAS","APAZA BARCO RUZIEL JADE","APAZA GUZMAN MICHEL FERNANDO","BAZAN FERNANDEZ ANGELA","CALLE PACO IVER","CHALLAPA VELASQUEZ ANTONI SAID","COLODRO YABETA WILMAN JUNIOR","COLQUE CONDORI MARY ALEJANDRA","CONDORI SALVATIERRA JOSHUA CALET","CORTEZ FRIAS SANDRA YANNINE","CRUZ LUIS SAMUEL","DO BRASIL JUSTINIANO ANGEL DANIEL","FUENTES VARGAS JHOEL ANYELO","GALVIS VARGAS BRANDON NEYTAN","GONZALES MORALES FERNANDA EMILY","GUARDIA RODRIGUEZ HANS ALEJANDRO","LOPEZ CALDERON ANGEL SANTIAGO","LOPEZ PEDRAZA ROSARIO","MUÑUNI CABALLERO NICOLAS","MURIEL ROJAS JOSE MANUEL ANTONIO","OJEDA CALDERON LUIS DANIEL","ORELLANA HERRERA EZEQUIEL LARRY","ORTIZ EQUICE AMY MICHELLE","ORTIZ SANCHEZ RENATA","ORTIZ SANCHEZ THIARA","ROCHA FERNANDEZ RASEK","RODAS DENKER YEREMI SANTIAGO","ROJAS LARA AMELI GRISEL","ROLDAN CORTEZ DAHIRA ANJELINE","SAMEJA MONTESINOS ARINK MATEO","SEMO MUIBA CARLOS ENRIQUE","TERRAZAS ASTETE CRISTOPHER ALVEIRO","TOCAS GUAYACUMA EMIRI LUZMILA","TOCAS GUAYACUMA KRISTHEN LUCERO","VARGAS NARVAEZ MAICOL MATIAS","VILLAGOMEZ MAMANI CARLA LORENA","VINIQUE SALVATIERRA NAOMI","ZAMBRANA GARCIA ARACELI","ZAMBRANA GARCIA GUSTAVO MATIAS","ELIMORE FLORES SARAY"],"04":["AJHUACHO RAMIREZ LUIS ANGEL","ALBA BLACUT MISAEL FABIAN","AÑEZ ARIAS AARON","ARAUCO COCA ISABEL","ARISPE CRUZ RAYSA NICOL","AVENDAÑO ALCONS JONATAN SAMIR","BAILABA ROCA DIEGO","CACERES GARCILAZO HELEN NOEMI","CALDERON CUELLAR HECTOR","CALDERON TAPEOSI IAN RODRIGO","CHIRI ARACA JHOEL","CHOQUE ALEGRE LIZ MARIANE","COSSIO CALDERON JUAN VAIRO","FLORES COSSIO KEVIN","FLORES POMA JUAQUIN ADRIAN","FUENTES GABRIEL CARLOS TEVEZ","GARCIA MEDINA ALAN","GARNICA VALDA JUAN DIEGO","GUTIERREZ ALBA JOSE BRAYAM","HERRERA PEDRAZA YUSET VANINA","IBAÑEZ RIOS MIJHAEL ALEJANDRO","JUSTINIANO ROJAS JHENSSEN","LINO SOLIZ JAYKO ALVARO","MAMANI ROJAS MELINA JACIEL","MEO COLEGIAL GENESIS","MOIRENDA VARGAS JOSE DANIEL","OCHOA MARTINEZ HECTOR SAMUEL","ORTIZ CESPEDES LEONEL","PACHECO MARTINEZ MARIA LIZ","QUISPE ALVAREZ ALBER YONATHAN","RAMIREZ CUELLAR ANGELA","RODRIGUEZ DONAIRE BRUCE JARED","RODRIGUEZ ROJAS DARLY","SARZURI ACERO JOSE ELIAS","SORIA CONDORI CARLA","VARGAS VACA SANTIAGO","VIAMONTE BERNAL SARAI","VILLANUEVA MARTINEZ JHEARIM GIARETH","VELIZ GONZALES GLADIS SIMEI","SUNCO CASTELLON YARITZA ERCILIA"],"05":["AMADOR COLQUE JOHN MAIKI","ANAGUA GUTIERREZ BRISA MILAGROS","ARACA LAZARO BRAYAN","ARACA LAZARO BRENDA NICOL","BARRIOS QUIROGA MELODY","BRAVO CHINCHILLA ALEXANDRA","CAMARGO PEÑA GERALDA","CASTILLO YARICHIME JOSUE DAVID","CHOQUEHUANCA CLAVIJO MARIA RENE","COSSIO FLORES ARACELY","CUSI ROJAS HIRMA DAVINIA","ESCOBAR SARAVIA PABLO JESUS","FERNANDEZ BUSTAMANTE GUIDO","FERNANDEZ ORACIO DEYSI","GUTIERREZ ANCIETA HECTOR","GUTIERREZ POZO JAIME","GUTIERREZ POZO NAYDA","GUTIERREZ VARGAS ANA BRISSEL","HUANCA MAMANI GAUSS WILSON","LAMAS ACUÑA YENIFER","MALDONADO MAMANI MAITE","MARCA CARBALLO ARELY","MELGAREJO MENDEZ ARIANE","MENDOZA HONOR KEVIN","MERCADO GILES YADIRA","PARI FERNANDEZ FRANK HAROLD","PAZ ORTIZ GENESIS","PEREZ PEREIRA ANTHONY","PITA ARISPE DANNA","SANCHEZ MASIAS JUAN DANIEL","SERNA AGUAYO SAYURI GISELL","SOSA TELLEZ STEVEN","TANTANI CONDORI RAQUEL YASMIN","TOLA AJARACHI LEIDY KAMILA","VARGAS CHAMBI SHIRLEY","VILLCA VARGAS EDE LUIS"],"06":["ALVAREZ CEREZO CARLA AZUCENA","ALVAREZ NINA FABRICIO","APAZA TOCO GONZALO DARIO","BALDIVIEZO COLQUE ELIZABETH TAIS","BARBA AGUILERA JAVIER ANDRES","CALLE PACO ANDER JHON","CEJAS PALAVECINO ELIANA","CESPEDEZ DURAN LEIDY","CHOQUE SOLIZ JUAN ANTONIO","CHOQUE VACA ROBIN ANDRES","GARCIA JIMENEZ LEONEL","GUZMAN CRONEMBOLD BRUNO","HERBAS URUGUA VALERIA","HERRERA PEDRAZA YUSEL YANINA","JUSTINIANO EQUICE ALONZO","LAIME ESPEJO MARIA MICAELA","LARA CORIA THAIS ANDREA","MENESES SUAREZ LUZ CRISTEL","MOLINA ALVAREZ DAYANI MICHELLE","MONTAÑO ARIAS JOSE CARLOS","MORON ROJAS VICTORIA","PANOZO DA SILVA MIGUEL ANGEL","PEINADO ESCOBAR ABIGAIL","PEÑA ABAPUCU MARIA ROSA","QUISPE ARROYO RUBI","RIOS LOPEZ CELINA","RIVERO CASTRO FABRICIO MATIAS","RIVERO LOPEZ VICTORIA DEIDAD","RODRIGUEZ VARGAS BELL ALISON","RODRIGUEZ VELEZ FRANCO","ROJAS FERNANDEZ SAUL WILLIAMS","ROJAS GALVIZ SEBASTIAN","SANABRIA RODRIGUEZ BRANKO SAHIR","SILVA VALLE MIGUEL ANGELO","SURUBI ORELLANA FERNANDA NICOLE","TORIHUANO AGUILAR BRANDON LIONEL","VALVERDE SUAREZ LUCAS YAMIEL","VARGAS YABETA GIOVANI DI","VELASCO MURIEL DIEGO","VIAMONTE BERNAL URIEL"],"07":["BAUTISTA MANO ANGELA TATIANA","BAYO HUANCA DIEGO ALEXIS","BENAVIDES PADILLA MARIA SHIRELI","BONILLA FRANCO BRENDA","CALDERON CATUARI AHIME MAYRIN","CALDERON TAPEOSI ANYELINE","CHIRINOS CHOQUE LUCAS MISAEL","CHOCLLU PARICAGUA DAJHOLY","CISNEROS PACHECO LISBETH","COLQUE BARRIENTOS MAISA STEFANI","CONDORI CONDORI VIDAL","CORANI TORRICO ALEXANDER","CORDERO MAMANI YESENIA","DELGADILLO GUTIERREZ BRIGITH","FLORES ESPEJO EDSON","GALARZA MAMANI ALAN","GARCIA SALAS ARACELY ANDREA","IRIARTE SALAZAR LUIS SERBANDO","PACAJA ESPEJO SUSY ESTRELLA","PANIAGUA MAGNE GIAN FRANCO","QUISBERT GARCIA GABRIEL","RIOS MULLISACA WILLIAM OCTAVIO","ROCHA LOAIZA ALEXANDRA","ROCHA MORALES DIEGO SAMIR","RODRIGUEZ ROJAS MAITE","ROSEL OMONTE YANEILA","SOLETO FLORES ADRIANA RAQUEL","SOLETO FLORES FERNANDO DANIEL","TAMAYO ESPINOZA JHAN CARLA","TAPIA ROJAS MATIAS","TORREZ GUTIERREZ YHOEL","USCAMAYTA LUPATI GIANELA","VACA DIEZ PARADA EDUARDO","VENTURA YUCRA OLIVER STIVEN","TASCA VALVERDE DARLING","YAPURA CONDORI MARIA FERNANDA","MONTAÑO VEIZAGA SCARLETT","SUNCO CASTELLON CRISTIAN MAURICIO","RODRIGUEZ VARGAS BELL ALISSON"],"08":["AIREYU VARGAS DIANA CAMILA","ANAGUA UÑO LAURA BENIGNA","AÑEZ JUSTINIANO FAVIO ANDRES","AÑEZ SANDOVAL WILDER","BARRENOSO CASTILLO LUIS MARIO","CASUPA MENDEZ ARELY","CONDORI QUISPE DANIELA GISLAINE","ESCALANTE POMA MOISES","ESCOBAR SARAVIA CARLOS MATIAS","FLORES OROSCO JHON BRAYAN","GALVIS VARGAS ARIANY","GARCIA CONDORI BAYRON EZEQUIEL","GARCIA VELASQUEZ ALAN","MALDONADO SOLIZ YESENIA","MAMANI COPATITI MARIA BELEN","MEDINA CALDERON AVIGAIL","MOJICA GARCIA MIGUEL ANGEL","MORENO GOMEZ BRITTANY GENESIS","PADILLA ABREGO MATIAS EMILIANO","PASCUAL RENTERIA NAYELI","ROCA ORTIZ FLAVIA","ROCHA GUTIERREZ KAREN","ROCHA GUTIERREZ RAQUEL","RODRIGUEZ PEREDO MARIANA","SOLIZ CARRILLO NAYELI","SOLIZ CUELLAR YANKARLA","SURUBY SALAZAR RONI MARCELO","TICONA NINA NATALY","VACA SAAVEDRA YASSER ALEXANDER","VALVERDE GUTIERREZ CARLA LUISA","VINIQUE ALVAREZ LUANA","VINIQUE SALVATIERRA MARY ESTEFANI","YUJRA APAZA OLIVER","ZURITA QUISPE TIAGO ISAAC","LEON HUARACHI LIZ MADELEN"],"09":["ALBA BLACUT NOHELIA","ALVARADO CALLAU DIEGO","ARAMAYO JIMENEZ ADRIANA","ATILA HURTADO PAMELA","AYZAMA CASTILLO MILAGRO","BARBA AGUILERA ORIANA KATERINE","BURGOS CUELLAR DAMIAN","CABRAL VARGAS BENZY MARCUS","CADIMA TERRAZAS CESAR SANTIAGO","CALLISAYA QUISPE YESSICA","CAMACHO VARGAS MARIA LAURA","CHAMBI ULO HANS MICHAEL","CONDORI MEDRANO NOE CALEB","CORTEZ FRIAS ROBERTH YOLI","DIAZ CABRERA EVELIN FRANCYNY","DURAN MEDRANO JHON CARLO","GIMENEZ PAREDES SEBASTIAN","JALA RAMOS CRISTOPHER DENIS","LARA CHARUPA RAYSA","MERCADO VARGAS DADDY DANIEL","NUÑEZ ROJAS DARA NIKOLL","PARDO CAERO JHUDITH ANAHY DEYSI","RIVERO ARIAS EYNI FABIANA","ROJAS CONDORI CARMEN ELIZABETH","ROJAS OVALE KEILA ANDREA","ROMERO SUBELZA LIZZELL AYLIM","SALDIAS ANTELO MARIA PAULA","SERNA AGUAYO EVELIN","SIPE GUTIERREZ NICOLE","TAPIA ROJAS MARIA FERNANDA","TIÑINI YUJRA LAURA","VELASQUEZ CEREZO SANTIAGO","YEBARA SEGUNDO REINA ISABEL","YRAIPY EGUEZ JUAN PABLO","ZAMBRANA GAMBOA JOSE EYNAR MAC DONALD","ZEGARRA ARIAS RENE EDUARDO"],"10":["AGUILAR MANUEL ALEJANDRO JHOSUA","ALBA AGUILAR BRANKO","ALBA PARI ITZEL ESTEFANY","AÑEZ ARIAS ARIELY","CALANI SECKO ALEX BEYMAR","CALDERON MORA SHELY YAMILA","CALIXTO TOLEDO THIAGO DAVID","CASTRO FLORES JHUNIOR DAVID","CAYO JUCHASARA MAYTE SARAHI","CLAROS CORO JULISSA","COLQUE ARANCIBIA NOELIA","CRUZ CANDIA ARIANNE","GARCIA SANDOVAL BRIGITH ARACELY","GUEVARA ANTURIANO MARY LUZ","GUZMAN MONTAÑO KELSEY","HUARAYO IPURANI LIONEL","LOPEZ ARTEAGA CARLOS","MAMANI MANZANEDA GUISEL","MOJICA GARCIA ANABEL","MONTAÑO MOJICA JHOAN WILLIAM","MONTAÑO VARGAS CARLOS LIONEL","MUÑOZ MIRADA MATIAS ALESSANDER","MUÑOZ MUÑOZ DANIEL","ORTEGA AMADOR ANDRES REYNALDO","ROJAS DELGADILLO DOLLY MARIANA","SALAS ALBA DANIELA","SALVATIERRA VINIQUE MARIA JOSE","SECKO CANAVIRE JOEL","TORRICO ROMERO JHAIR","TORRICO ROSAS NOELIA","VARGAS PIMENTEL LUCIANA NICOL","VASQUEZ ASENCIO LEILA GRACY","VEIZAGA FLORES REMBRANDT JHERLY","VILLAVICENCIO MONTAÑO MELANI","VILLAZON HUMEREZ RITHIANA","VINIQUE COIMBRA FABIANA","PANOZO WILLIS STEFANI NARDA"],"11":["ALIAGA SAISA ANDY DYLAN","ARGOTE GUZMAN DANIELA NICOLE","BORJA TORREZ VANIA FERNANDA","CABEZAS PAEZ JHON DEIBY","CADIMA VEIZAGA JUAN MIGUEL","CHALACAN BALDERRAMA JEAN POOL","CHOQUE BEYUMA LUCAS RENNY","EGUIVAR MAMANI ESTEBAN","FERRUFINO GUTIERREZ LUZ MILAGROS","GALARZA SALDIAS DANNA NICOL","GAMARRA GUTIERREZ PEDRO RAUL","GUTIERREZ VARGAS FRANCISCO JOEL","LOPEZ CALDERON CARLOS ADRIAN","MALDONADO PARICAGUA DOLLI EDITH","MONTAÑO CABRERA KATHERIN","MUÑOZ MIRANDA JHON ALBARO","PACHACUTE POBLETE ISAMAR JEILY","QUISPE VASQUEZ BRITANY NOEMI","QUISPE VASQUEZ GERSON DANIEL","ROCABADO JALA ALISON ADRIANA","ROJAS AVILES JHONATAN","ROJAS GANDARILLAS CHRISTIAN JHOADEL ALEXIS","TASCA VALVERDE NAZARETH","TORREZ VEDIA DULCE KEYLA","VACA CORTEZ FERNANDA","VACA ROJAS YSABELLA","VASQUEZ GUAMAN MAYLIN","VEIZAGA SUAREZ AVIGAIL","VICENTE MIRANDA MARCOS EZEQUIEL","YAPURA CONDORI ARACELY"],"12":["ALVARADO MORENO NEYER","APAZA TOCO ALICE YUVENKA","ARTEAGA FUENTES ANDREA","CADIMA TERRAZAS CESIA MARIEL","CAMACHO BURGOS DIANA MARIANA","CARTAGENA VACA MICHEL","CORDERO MAMANI BRANDON","CUELLAR MEDINA YANDEL","FLORES RIOS MILENA","GARCIA MEDINA JHON KEVIN","GARCIA RODRIGUEZ ANDRES","GARCIA VASQUEZ ANGEL RAFAEL","JIMENEZ ARCE CAMILA","JUSTINIANO EQUICE CAMILA","LEON JUSTINIANO DIETTER","LIJERON MEJIAS YIMMY","LIZARRAGA MOLINA DENNISE MAITE","MACHACA PINTO SAIRA","MALDONADO MAMANI JHON CRISTIAN","MAMANI MAMANI DEYVID ALAN","MAMANI TICONA DALIZ DANITZA","MEDINA ROCA DENZEL ANDRES","MUIBA TORRICO ELIANE","NINA SURCO ADALID","PADILLA ABREGO JOSE LEONARDO","PEDRO GUTIERREZ JHAQUELIN","PEREZ PEREIRA JHOISSY BRITTANY","RAMIREZ CESPEDES MARIOLY","RIOS MULLISACA MIDIALA YASIRA","ROCHA PARADA DANNA ANABEL","SALVATIERRA TABOADA BRUNO MATIAS","SANTANDER GONZALES ALEJANDRO","SOTO PAZ LEIDY YOHANNA","TORRICO MORON OLIVER","VILLCA VARGAS LIMBER"],"13":[" VALLE VALVERDE SURI SUSANA","ALVARADO ARAUZ CAMILA TAI","AYNO BUSTOS XIOARA ALICIA","BAYO HUANCA LISEL MADHAI","BAYO ROJAS RUBY","CAUCHI SALLAMA JOSE ISRAEL","CONDORI PINTO NICOL","CORDOVA GONZALES THIAGO YOADEL","CRUZ MEJIA MARI PAZ","ESCOBAR AGUILAR LIZVANIA CAMELIA","FLORES CORAITE RUTH NOELIA","GALARZA MAMANI ARLETT","GUARI ESPINOZA ANGELINA JUNG SUH","HUANCA MOLLO JEISON ELMER","LAURA MAMANI ANABEL YOLAINE","LLUEN VACA JOSE CARLOS","LOPEZ ARISPE JUAN JORGE","MAMANI SULLCA JHAMILA VICTORIA","MENESES VILLANUEVA DANA SARAI","ORTEGA CHOQUE ALISSON YESMIN","ORTIZ BALDERRAMA CARLA LORENA","PONCE COLQUE ALEXSANDER","PONCE MORA EMILY BELEN","RAMIREZ MAMANI SAMUEL DAVID","SEGUNDO MORESEÑO KRISTEL","SUAREZ CHECO MARISABETH ROSAURA","TABOADA FLORES LEONARDO NICOLAS","VELASQUEZ ORTIZ HUGO AMILKAR"],"14":[],"15":[],"16":[],"17":[],"18":[]};
const JSZIP_URL = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';

function xlTri(){ const m = new Date().getMonth()+1; return m<=4 ? 1 : m<=8 ? 2 : 3; }
function xlClaseDeCurso(cursoId, materiaId){
  const m = String(cursoId||'').match(/-(\d)([A-C])/); if(!m) return null;
  const c = XL_CLASES.filter(x=>x.g===m[1]+'º "'+m[2]+'"'); if(!c.length) return null;
  const mat = materiaId ? materiaNombre(materiaId).toUpperCase() : '';
  const hit = c.find(x=>mat && (x.a.includes(mat.split(' ')[0]) || mat.includes(x.a.split(' ')[0])));
  return (hit||c[0]).n;
}
/* Fecha de Excel (días desde 1899-12-30) */
function xlSerial(d){ return Math.round((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - Date.UTC(1899,11,30)) / 86400000); }
/* Datos viejos (texto "dd/mm/aaaa · título" en la fila 5) -> fecha en la fila 5 y título en la fila 6 */
function xlNormalizar(hoja){
  const out = {};
  Object.keys(hoja).forEach(c=>{
    const v = hoja[c], m = c.match(/^([A-Z]+)5$/);
    if(m && typeof v==='string' && isNaN(Number(v.replace(',','.')))){
      const f = v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})\s*·?\s*([\s\S]*)$/);
      if(f){ out[c] = xlSerial(new Date(+f[3], +f[2]-1, +f[1])); if(f[4] && hoja[m[1]+'6']==null) out[m[1]+'6'] = f[4]; }
      else if(hoja[m[1]+'6']==null) out[m[1]+'6'] = v;
      return;
    }
    out[c] = v;
  });
  return out;
}
const xlLetraANum = L=>L.split('').reduce((a,c)=>a*26+c.charCodeAt(0)-64,0);
function xlNombreClave(s){ return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase().replace(/[^A-Z ]/g,' ').split(/\s+/).filter(Boolean).sort().join(' '); }

/* Tarea publicada -> primera columna vacía de la hoja de calificaciones (fecha + título en la fila 5) */
function xlMarcarTarea(tarea, cambios){
  const n = xlClaseDeCurso(tarea.cursoId, tarea.materiaId), hoja = 'EVA_'+xlTri()+'T';
  if(!n){ toast('Este curso no tiene hoja en el Registro Pedagógico: la tarea se publicó, pero no se escribió en el Excel.'); return; }
  const hacer = ['Práctica','Proyecto','Exposición','Taller en clase'].includes(tarea.tipo);
  const cols = hacer ? 'Z AA AB AC AD AE AF AG AH AI'.split(' ') : 'G H I J K L M N'.split(' ');
  DB.hojas = DB.hojas || {}; const usadas = ((DB.hojas[n]||{})[hoja]) || {};
  const col = cols.find(c=>!usadas[c+'5']); if(!col){ toast('La hoja de calificaciones ya no tiene columnas libres para esta tarea.'); return; }
  tarea.xl = {n, hoja, col, max: hacer?40:45};
  const fechaSerial = xlSerial(new Date(tarea.creada || Date.now()));
  const titulo = String(tarea.titulo||'').slice(0,70);
  const base = 'registroHojas/'+n+'/'+hoja+'/';
  cambios[base+col+'5'] = fechaSerial;   /* fecha de envío (fecha real, con el formato de fecha de la plantilla) */
  cambios[base+col+'6'] = titulo;        /* nombre de la tarea, en el cuadro blanco debajo de la fecha */
  DB.hojas[n] = DB.hojas[n]||{}; DB.hojas[n][hoja] = Object.assign({}, usadas, {[col+'5']:fechaSerial, [col+'6']:titulo});
}
/* Notas de esa tarea -> mismas filas de los estudiantes, en esa misma columna */
function xlRegistrarNotas(x){
  if(!x.xl) return;
  const nombres = (XL_EST[x.xl.n]||[]).map(xlNombreClave), cambios = {};
  estudiantesDeCurso(x.cursoId).forEach(s=>{
    const copia = s.tareas.find(y=>y.tareaId===x.id);
    const i = nombres.indexOf(xlNombreClave(s.nombreCompleto)); if(i<0) return;
    const ref = 'registroHojas/'+x.xl.n+'/'+x.xl.hoja+'/'+x.xl.col+(7+i);
    cambios[ref] = (copia && typeof copia.nota==='number') ? Math.round(copia.nota/(x.puntaje||20)*x.xl.max) : null;
  });
  if(Object.keys(cambios).length) guardarVarios(cambios);
}
/* Quitar una tarea eliminada de la hoja (libera su columna) */
function xlQuitarTarea(x, cambios){
  if(!x.xl) return;
  const {n, hoja, col} = x.xl, total = (XL_EST[n]||[]).length, base = 'registroHojas/'+n+'/'+hoja+'/';
  cambios[base+col+'5'] = null; cambios[base+col+'6'] = null;
  for(let i=0;i<total;i++) cambios[base+col+(7+i)] = null;
  const h = ((DB.hojas||{})[n]||{})[hoja];
  if(h){ delete h[col+'5']; delete h[col+'6']; for(let i=0;i<total;i++) delete h[col+(7+i)]; }
}
/* Aviso inmediato al publicar: dónde quedó la tarea en el Excel */
function xlAvisoTarea(tarea){
  if(!tarea || !tarea.xl) return;
  const c = XL_CLASES.find(k=>k.n===tarea.xl.n) || {};
  openModal('Tarea registrada en el Excel', `
    <p style="font-size:14px;line-height:1.7;color:var(--gris-700);">La tarea <b>${escH(tarea.titulo)}</b> ya está en el Registro Pedagógico:</p>
    <div class="ic-meta" style="margin:10px 0 12px;">
      <span class="badge badge-verde">Hoja ${escH(tarea.xl.hoja)}</span>
      <span class="badge badge-verde">Fecha en ${escH(tarea.xl.col)}5</span>
      <span class="badge badge-verde">Tarea en ${escH(tarea.xl.col)}6</span>
      ${c.g ? `<span class="badge badge-gris">Curso ${escH(c.g)}</span>` : ''}
    </div>
    <p style="font-size:13px;line-height:1.65;color:var(--gris-500);">Se escribió la fecha de hoy, que es la fecha de envío, y debajo el nombre de la tarea. Las notas se anotan solas, en la fila de cada estudiante, cuando guardas la revisión de la tarea. Descarga el Excel para verla ya escrita.</p>`,
    `<button class="btn btn-secondary" onclick="closeModal()">Más tarde</button><button class="btn btn-excel" onclick="closeModal();abrirExcel('calificaciones')">${ic('clipboard',15)} Descargar Excel actualizado</button>`);
}

/* ---- Escribir celdas dentro del XML de una hoja (sin tocar el resto del formato) ---- */
function xlPonerCelda(xml, coord, val){
  const m = coord.match(/^([A-Z]+)(\d+)$/); if(!m) return xml;
  const col = xlLetraANum(m[1]), fila = m[2];
  const i = xml.indexOf('<row r="'+fila+'"'); if(i<0) return xml;
  const e = xml.indexOf('>', i), auto = xml[e-1]==='/';
  let ini, inner, fin;
  if(auto){ ini = xml.slice(i,e-1)+'>'; inner = ''; fin = e+1; }
  else { const c = xml.indexOf('</row>', e); ini = xml.slice(i,e+1); inner = xml.slice(e+1,c); fin = c+6; }
  const celdas = []; const re = /<c r="([A-Z]+)\d+"[^>]*?(?:\/>|>[\s\S]*?<\/c>)/g; let k;
  while((k = re.exec(inner))) celdas.push({col:xlLetraANum(k[1]), xml:k[0]});
  const ex = celdas.find(c=>c.col===col);
  const sm = ex && ex.xml.match(/^<c r="[A-Z]+\d+"[^>]*?\ss="(\d+)"/); let s = sm ? ' s="'+sm[1]+'"' : '';
  if(!s && fila==='6'){ const r5 = xml.match(new RegExp('<c r="'+m[1]+'5"[^>]*?\\ss="(\\d+)"')); if(r5) s = ' s="'+r5[1]+'"'; }
  const esNum = fila!=='6' && val!=='' && !isNaN(Number(String(val).replace(',','.')));
  const nuevo = esNum ? '<c r="'+coord+'"'+s+'><v>'+Number(String(val).replace(',','.'))+'</v></c>'
                      : '<c r="'+coord+'"'+s+' t="inlineStr"><is><t xml:space="preserve">'+escH(val)+'</t></is></c>';
  if(ex) ex.xml = nuevo; else { celdas.push({col, xml:nuevo}); celdas.sort((a,b)=>a.col-b.col); }
  return xml.slice(0,i)+ini+celdas.map(c=>c.xml).join('')+'</row>'+xml.slice(fin);
}
async function xlInyectarTareas(blob){
  const datos = DB.hojas || {}; if(!Object.keys(datos).length) return {blob, n:0};
  if(!window.JSZip) await cargarScript(JSZIP_URL);
  const zip = await JSZip.loadAsync(blob);
  let wbx = await zip.file('xl/workbook.xml').async('string');
  const rels = await zip.file('xl/_rels/workbook.xml.rels').async('string');
  const dest = {}; (rels.match(/<Relationship [^>]*\/>/g)||[]).forEach(t=>{ dest[t.match(/Id="([^"]+)"/)[1]] = t.match(/Target="([^"]+)"/)[1]; });
  const hojas = {}; (wbx.match(/<sheet [^>]*\/>/g)||[]).forEach(t=>{
    const nom = t.match(/name="([^"]+)"/)[1].replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&apos;/g,"'");
    hojas[nom] = 'xl/' + dest[t.match(/r:id="([^"]+)"/)[1]].replace(/^\/?(xl\/)?/,''); });
  let total = 0;
  for(const n of Object.keys(datos)){
    const k = XL_CLASES.findIndex(c=>c.n===n)+1; if(!k) continue;
    for(const hk of Object.keys(datos[n])){
      const nombre = hk.replace(/^(EVA|ASIS)_/, '$1 ').replace(/^ASIS /,'ASIS_') + '_C_1' + (k>1 ? ' ('+k+')' : '');
      const ruta = hojas[nombre]; if(!ruta || !zip.file(ruta)) continue;
      let xml = await zip.file(ruta).async('string');
      const celdas = xlNormalizar(datos[n][hk]);
      Object.keys(celdas).forEach(coord=>{ xml = xlPonerCelda(xml, coord, celdas[coord]); total++; });
      zip.file(ruta, xml);
    }
  }
  if(!total) return {blob, n:0};
  wbx = /<calcPr/.test(wbx) ? wbx.replace(/<calcPr([^>]*?)\/>/, (a,b)=>'<calcPr'+b.replace(/\s*fullCalcOnLoad="\d"/,'')+' fullCalcOnLoad="1"/>') : wbx.replace('</workbook>','<calcPr fullCalcOnLoad="1"/></workbook>');
  zip.file('xl/workbook.xml', wbx);
  const out = await zip.generateAsync({type:'blob', compression:'DEFLATE', compressionOptions:{level:1}, mimeType:'application/vnd.ms-excel.sheet.macroEnabled.12'});
  return {blob:out, n:total};
}

/* ---- Botón del maestro: se descarga el Excel (con las tareas ya escritas) ---- */
async function xlEsExcel(b){ try{ return !!b && b.size>100000 && (await b.slice(0,2).text())==='PK'; }catch(e){ return false; } }
async function xlObtenerBlob(){
  const cfg = (DB.cfg && DB.cfg.excelUrl) || '';
  for(const u of [cfg, EXCEL_URL]){
    if(!u) continue;
    try{ const r = await fetch(u, {cache:'no-store'}); if(r.ok){ const b = await r.blob(); if(await xlEsExcel(b)) return b; } }catch(e){}
  }
  const g = await idbExcel('get'); return (g && g!==true && await xlEsExcel(g)) ? g : null;
}
async function abrirExcel(tipo){
  toast('Preparando el Registro Pedagógico…');
  const blob = await xlObtenerBlob();
  if(blob){
    let salida = blob, n = 0;
    try{ const r = await xlInyectarTareas(blob); salida = r.blob; n = r.n; }
    catch(e){ console.error(e); toast('Se descargó el Excel sin las tareas nuevas: '+e.message); }
    descargarBlob(salida);
    toast(n ? 'Excel descargado con '+n+' dato(s) de tareas ya escritos en su columna.' : 'Excel descargado.');
    return;
  }
  const cfg = (DB.cfg && DB.cfg.excelUrl) || '';
  if(/^https?:\/\//i.test(cfg)){ window.open(cfg, '_blank'); toast('Abriendo el Registro Pedagógico…'); return; }
  configurarExcel();
}

/* ============================================================
   ARRANQUE DE LA BASE DE DATOS
   ============================================================ */
iniciarBaseDeDatos();
