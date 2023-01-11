const words = [
  "humanidad",
  "humano",
  "persona",
  "gente",
  "hombre",
  "mujer",
  "bebé",
  "niño", 
  "niña",
  "adolescente",
  "adulto", 
  "adulta",
  "anciano", 
  "anciana",
  "don", 
  "doña",
  "señor", 
  "señora",
  "caballero",
  "dama",
  "individuo",
  "cuerpo",
  "pierna",
  "pie",
  "talón",
  "espinilla",
  "rodilla",
  "muslo",
  "cabeza",
  "cara",
  "boca",
  "labio",
  "diente",
  "ojo",
  "nariz",
  "barba",
  "bigote",
  "cabello",
  "oreja",
  "cerebro",
  "estómago",
  "brazo",
  "codo",
  "hombro",
  "uña",
  "mano",
  "muñeca",
  "palma",
  "dedo",
  "trasero", 
  "culo", 
  "cola", 
  "glúteos",
  "abdomen",
  "hígado",
  "músculo",
  "cuello",
  "corazón",
  "mente",
  "alma",
  "espíritu",
  "pecho",
  "cintura",
  "cadera",
  "espalda",
  "sangre",
  "carne",
  "piel",
  "hueso",
  "resfriado",
  "gripe",
  "diarrea",
  "salud",
  "enfermedad",
  "familia",
  "amigo", 
  "amiga",
  "conocido", 
  "conocida",
  "colega",
  "pareja",
  "esposo", 
  "esposa",
  "matrimonio",
  "amor",
  "padre",
  "madre",
  "hermano", 
  "hermana",
  "hijo", 
  "hija",
  "abuelo", 
  "abuela",
  "bisabuelo", 
  "bisabuela",
  "nieto", 
  "nieta",
  "bisnieto", 
  "bisnieta",
  "primo", 
  "prima",
  "tío", 
  "tía",
  "sobrino", 
  "sobrina",
  "Vida",
  "criatura",
  "especie",
  "ser",
  "vida",
  "nacimiento",
  "reproducción",
  "muerte",
  "naturaleza",
  "campo",
  "bosque",
  "selva", 
  "jungla",
  "desierto",
  "costa",
  "playa",
  "río",
  "laguna", 
  "lago",
  "mar", 
  "océano",
  "cerro", 
  "monte", 
  "montaña",
  "luz",
  "energía",
  "animal",
  "perro",
  "gato",
  "vaca",
  "cerdo",
  "caballo", 
  "yegua",
  "oveja",
  "mono",
  "ratón", 
  "rata",
  "tigre",
  "conejo",
  "dragón",
  "ciervo",
  "rana",
  "león",
  "jirafa",
  "elefante",
  "pájaro",
  "gallina",
  "gorrión",
  "cuervo",
  "águila",
  "halcón",
  "pez",
  "camarón",
  "langosta",
  "sardina",
  "atún",
  "calamar",
  "pulpo",
  "insecto",
  "bicho",
  "mariposa",
  "polilla",
  "saltamontes",
  "araña",
  "mosca",
  "mosquito",
  "cucaracha",
  "caracol",
  "babosa",
  "lombriz",
  "marisco",
  "molusco",
  "lagarto",
  "serpiente",
  "cocodrilo",
  "alimento",
  "comida",
  "bebida",
  "vegetal",
  "planta",
  "pasto",
  "césped",
  "flor",
  "fruta",
  "semilla",
  "árbol",
  "hoja",
  "raíz",
  "tallo",
  "hongo",
  "ciruela",
  "pino",
  "bambú",
  "nuez",
  "almendra",
  "castaña",
  "arroz",
  "avena",
  "cebada",
  "trigo",
  "verdura",
  "patatas", 
  "papas",
  "judías", 
  "guisantes", 
  "porotos",
  "rábano",
  "zanahoria",
  "manzana",
  "naranja",
  "plátano",
  "pera",
  "castaño",
  "durazno",
  "tomate",
  "sandía",
  "carne",
  "gaseosa",
  "tiempo",
  "calendario",
  "edad",
  "época", 
  "era",
  "fecha",
  "instante",
  "momento",
  "segundo",
  "minuto",
  "hora",
  "día",
  "semana",
  "mes",
  "año",
  "década",
  "siglo",
  "milenio",
  "ayer",
  "hoy",
  "mañana",
  "amanecer",
  "mediodía",
  "tarde",
  "anochecer",
  "noche",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
  "domingo",
  "ambiente",
  "espacio",
  "entorno",
  "área",
  "superficie",
  "volumen",
  "región",
  "zona",
  "lado",
  "mundo",
  "planeta",
  "sol",
  "luna",
  "estrella",
  "galaxia",
  "universo",
  "clima",
  "despejado",
  "nublado",
  "lluvia",
  "nieve",
  "viento",
  "trueno",
  "rayo",
  "tormenta",
  "cielo",
  "este",
  "oeste",
  "sur",
  "norte",
  "derecha",
  "izquierda",
  "diagonal",
  "exterior",
  "interior",
  "calor",
  "agua",
  "hielo",
  "vapor",
  "fuego",
  "gas",
  "aire", 
  "atmósfera",
  "tierra",
  "silla",
  "ability",
  "able",
  "about",
  "above",
  "accept",
  "according",
  "account",
  "across",
  "act",
  "action",
  "activity",
  "actually",
  "add",
  "address",
  "administration",
  "admit",
  "adult",
  "affect",
  "after",
  "again",
  "against",
  "age",
  "agency",
  "agent",
  "ago",
  "agree",
  "agreement",
  "ahead",
  "air",
  "all",
  "allow",
  "almost",
  "alone",
  "along",
  "already",
  "also",
  "although",
  "always",
  "American",
  "among",
  "amount",
  "analysis",
  "and",
  "animal",
  "another",
  "answer",
  "any",
  "anyone",
  "anything",
  "appear",
  "apply",
  "approach",
  "area",
  "argue",
  "arm",
  "around",
  "arrive",
  "art",
  "article",
  "artist",
  "as",
  "ask",
  "assume",
  "at",
  "attack",
  "attention",
  "attorney",
  "audience",
  "author",
  "authority",
  "available",
  "avoid",
  "away",
  "baby",
  "back",
  "bad",
  "bag",
  "ball",
  "bank",
  "bar",
  "base",
  "be",
  "beat",
  "beautiful",
  "because",
  "become",
  "bed",
  "before",
  "begin",
  "behavior",
  "behind",
  "believe",
  "benefit",
  "best",
  "better",
  "between",
  "beyond",
  "big",
  "bill",
  "billion",
  "bit",
  "black",
  "blood",
  "blue",
  "board",
  "body",
  "book",
  "born",
  "both",
  "box",
  "boy",
  "break",
  "bring",
  "brother",
  "budget",
  "build",
  "building",
  "business",
  "but",
  "buy",
  "by",
  "call",
  "camera",
  "campaign",
  "can",
  "cancer",
  "candidate",
  "capital",
  "car",
  "card",
  "care",
  "career",
  "carry",
  "case",
  "catch",
  "cause",
  "cell",
  "center",
  "central",
  "century",
  "certain",
  "certainly",
  "chair",
  "challenge",
  "chance",
  "change",
  "character",
  "charge",
  "check",
  "child",
  "choice",
  "choose",
  "church",
  "citizen",
  "city",
  "civil",
  "claim",
  "class",
  "clear",
  "clearly",
  "close",
  "coach",
  "cold",
  "collection",
  "college",
  "color",
  "come",
  "commercial",
  "common",
  "community",
  "company",
  "compare",
  "computer",
  "concern",
  "condition",
  "conference",
  "Congress",
  "consider",
  "consumer",
  "contain",
  "continue",
  "control",
  "cost",
  "could",
  "country",
  "couple",
  "course",
  "court",
  "cover",
  "create",
  "crime",
  "cultural",
  "culture",
  "cup",
  "current",
  "customer",
  "cut",
  "dark",
  "data",
  "daughter",
  "day",
  "dead",
  "deal",
  "death",
  "debate",
  "decade",
  "decide",
  "decision",
  "deep",
  "defense",
  "degree",
  "Democrat",
  "democratic",
  "describe",
  "design",
  "despite",
  "detail",
  "determine",
  "develop",
  "development",
  "die",
  "difference",
  "different",
  "difficult",
  "dinner",
  "direction",
  "director",
  "discover",
  "discuss",
  "discussion",
  "disease",
  "do",
  "doctor",
  "dog",
  "door",
  "down",
  "draw",
  "dream",
  "drive",
  "drop",
  "drug",
  "during",
  "each",
  "early",
  "east",
  "easy",
  "eat",
  "economic",
  "economy",
  "edge",
  "education",
  "effect",
  "effort",
  "eight",
  "either",
  "election",
  "else",
  "employee",
  "end",
  "energy",
  "enjoy",
  "enough",
  "enter",
  "entire",
  "environment",
  "environmental",
  "especially",
  "establish",
  "even",
  "evening",
  "event",
  "ever",
  "every",
  "everybody",
  "everyone",
  "everything",
  "evidence",
  "exactly",
  "example",
  "executive",
  "exist",
  "expect",
  "experience",
  "expert",
  "explain",
  "eye",
  "face",
  "fact",
  "factor",
  "fail",
  "fall",
  "family",
  "far",
  "fast",
  "father",
  "fear",
  "federal",
  "feel",
  "feeling",
  "few",
  "field",
];