export const PRICE_PER_M2 = 4950;

export const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida/ALJJyrAT5V-BBHirNl04hj4WiTZHpc9RI_MijENKQ6eCoORMFDJTvMagqwLIfxDMWqFs-52vk5wjXb6NDCSGfgdfQvQ0BHbb_Nmzc6EIMsBzuxSvBiwx-1_WJeh5r0inQRFNFq8lbPSUsWQijZqfocIScLJUFZG7K7ZVsjqPExpW0owkjIPg-ovaGOKMRB4-4SUbnhsXYZGW3OpRpl4UKPlYXvR5rQNgworFzerI2jRi8ZB_ytrDi0FZiNUWrGMgZsGY5-VLAoY';

export interface SceneItem {
  id: string;
  roman: string;
  title: string;
  subtitle: string;
  alt: string;
  imageUrl: string;
  colSpanClass: string;
  heightClass: string;
  offsetClass?: string;
}

export const VALLADOLID_SCENES: SceneItem[] = [
  {
    id: 'luz',
    roman: 'I',
    title: 'Luz',
    subtitle: 'Patios y sombra',
    alt: 'Patios y sombra en Valladolid',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrDeNvCMDAb5W--paCAbEfAdFTB_-CvBpdVK-lZa1xxCY9tIVAzRdkUZcX9CTRwFnsIxRpJNNWlxfJP90Aga5MgensdGYaig7jLP6ExugV4s1gVlFQIM-3OsJZ3lR2OdHXXx6jwtm1xFdPLtL8bfcPIR1oszssh6_GoycW3LR3cFSvrP_XoI9hui9WEKqCdWldJ5QG5-vKaxtOr1lbGPGPaFipY8bjlQFe04Ryr68oNFAfAHDA',
    colSpanClass: 'md:col-span-5',
    heightClass: 'h-96 lg:h-[480px]',
  },
  {
    id: 'oficio',
    roman: 'II',
    title: 'Oficio',
    subtitle: 'Cultura viva',
    alt: 'Hamaca tejida a mano en Yucatán',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrBDex6wJCNAViz8b0Lb8oowYHktkKueeZScM4s8n4OfeeV6WSVr0VEvaOcO1sn2YM6CEry21r5o85_xbc5gAcl-Ni1QDPFYg2h0J90L2us50EoqIJy6EHFcc3mGsj_sTgAHkw7bsIZp0szSGA_1dsNzDIlXzjsoY6X48KdkolTlWuOQYXbTJ5WY6knG4YhZGVnmHV3BAGpuMBxdvHmM19hfRpVARNWo2l3r_MmE0wFcCF7HHkl-',
    colSpanClass: 'md:col-span-3',
    heightClass: 'h-72 lg:h-80',
    offsetClass: 'md:mt-20',
  },
  {
    id: 'agua',
    roman: 'III',
    title: 'Agua',
    subtitle: 'Paisaje regional',
    alt: 'Cenote de aguas esmeralda',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrBgyhl-chbuFU50LCEeDdjxWIGjOGwsvoKVAZ1vjl67YYIsRqCNutl78dI2ZYzJTRuTYgTvx8P-yITucwqQ_4yF_yzioBKvgd80-dyYgdjDd2eViCTAzKwoc9x5kYb23e4GKHBWmjTaK0JaZJbWQpn92zBrYHGQN3qR7N7Pp6PoXFLwUAA3GMlPff1mq9vlcyvMj0aoa_w1Hv5Q93u_r793Ac8L7MSEtob1NGLLSbiDV-MDq8M',
    colSpanClass: 'md:col-span-4',
    heightClass: 'h-96',
    offsetClass: 'md:mt-8',
  },
];

export type MoodCategory = 'all' | 'arquitectura' | 'materiales' | 'paisaje';

export interface MoodItem {
  id: string;
  category: Exclude<MoodCategory, 'all'>;
  title: string;
  subtitle: string;
  alt: string;
  imageUrl: string;
  colSpanClass: string;
  heightClass: string;
  offsetClass?: string;
}

export const MOODBOARD_ITEMS: MoodItem[] = [
  {
    id: 'pabellon',
    category: 'arquitectura',
    title: 'Pabellón abierto al jardín',
    subtitle: 'Concepto ilustrativo',
    alt: 'Pabellón contemporáneo en chukum y madera tzalam',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrCLQdUNVfHcCibDjrA5dj4H3OM3xc6VU0qEEOK6SQNVI_943L_c0g_Hb5Gt6Ihi6JsjILW9XHvxQDCX07eKKSkjOWIvglck_IO5U4kNnBF6qsMsiYaATL1VGXNAqN6Vfi28GX6YaZQDMywwM0gRSXvfL3hkPlt-SODw9OpGFgtCwgYQCJ5iJBX_i-w79eH3ee4Rv0v_PFNch0qsQgVpJH--G-ujKSBBRt1NcTyvMDXWtRnlhyhQNfGeNUZ8Zg',
    colSpanClass: 'md:col-span-7',
    heightClass: 'h-80 lg:h-[430px]',
  },
  {
    id: 'paleta',
    category: 'materiales',
    title: 'Paleta táctil',
    subtitle: 'Caliza · Chukum · Tzalam',
    alt: 'Paleta de piedra caliza, chukum, tzalam y henequén',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrCVPHyJVB-lgRl74Nv3KFV1TYlJPSUacQqkIN2j7RU-kfhbdlkU7YGUqkw86r7dwhwvMUUnbaCkQ2gLBYUjTQinaavm-d-mDEZeijEG-l5V2NM56Ey_xIEsesFMKFMVSZLPyTKrOAJ2SGfcU-6ZoRuuLMukaztTBoca6d9gWTyVX6mLg9qKMWq6-A7ZZAH7pVRPF5mWk_onbAaCZnyS9qAbj3og4sHmgIcC8k1wV556NLPYetvLgL1u9NIGT9fI65SX-Q',
    colSpanClass: 'md:col-span-5',
    heightClass: 'h-72 lg:h-80',
    offsetClass: 'md:mt-12',
  },
  {
    id: 'celosias',
    category: 'materiales',
    title: 'Sombra y celosías',
    subtitle: 'Control solar',
    alt: 'Detalle de muro en chukum y celosía',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrBEfua3Y7de2F3bl6qviXUXaVFuVS10m7IviktLDH8Tfq-MrFl4lXCceGQW5jeceuviCiivQnAOD3LVOcIBbcyQYG0x9ZhrruDm0WrFtVkGepJ5i2Q2KHprJQB6ovTMajuP9AmFED0IotxpWPDGzx8g6UkLqCKYN04cBPdJTrcb9c_UfhvSIiclsdG0kwe281PuDo1rTf_oWIebAeuJ9UsxXMRjTz48O2l_7taoVnw5OjF5hvY7H8r-hDZljnI',
    colSpanClass: 'md:col-span-5',
    heightClass: 'h-72',
  },
  {
    id: 'patio-agua',
    category: 'paisaje',
    title: 'Patio de agua y selva baja',
    subtitle: 'Vegetación endémica',
    alt: 'Patio de agua y vegetación nativa',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrDSmDmy6kO6zcJWtH3gk-HE4tDHlO7zf3Lhaxk5DcN5XPXGJ0CrYFeQFoGXBPGHu4hi_cmY3UH-aRPau0SFsTfEI01xG9OBSs_40pTjosSLmRXykf7qn9BL2qjhm1eTt4TU6ofrGO0V6IeIUjhoW_B1sXJXSpw0CmpXxj5Jlr4ymHSgZuLRHSzPa6rKVcGrFOg3vzSuhksG_a-KzlR20y20QhbVrGzwuHK3bxJke5TNU4Yyx2-3UT1Ik64xmFE',
    colSpanClass: 'md:col-span-7',
    heightClass: 'h-72 lg:h-80',
  },
];

export interface CotoInfo {
  code: string;
  name: string;
  title: string;
  badge: string;
  desc: string;
  imageUrl: string;
  isFeatured?: boolean;
  points: string;
  labelX: number;
  labelY: number;
  status: 'En venta' | 'Próximamente';
}

export const COTOS: CotoInfo[] = [
  {
    code: '01',
    name: 'Chichikán',
    title: '01 · Chichikán',
    badge: 'Primera etapa · En venta',
    desc: 'Sector derecha arriba. Única etapa abierta con tarifa vigente de $4,950 MXN/m².',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrDN50KXb-GvgDs1wraagyGK3ooxsKfWnDPfGwkGbN1Tp96uPqR-W-OY9WPP7J-BI0fMRgmYfQ_obSo0WoZ8L46-oARfTzJcEntFY7TmGmpCL9kisxx3CdZ4ezi1yu_WoqKWbySoVs5bAgJGQYAUNqxtlARH1IdEZ8nW3_5xIB-OyLMp2zpFWzOuvpUMx8D3nHMByrpic_oehUvd9TZcf8v93-U8ZZEUzKuYoJmVm-jefMaaoK_NoQNmsNg',
    isFeatured: true,
    points: '495,175 615,220 570,305 450,260',
    labelX: 535,
    labelY: 236,
    status: 'En venta',
  },
  {
    code: '02',
    name: 'Nool',
    title: '02 · Nool',
    badge: 'Próximamente',
    desc: 'Sector centro arriba. Segunda etapa en preparación.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrD7-puBlNMHp9_El-e6h7UNZwpau1cnCWbxPdznzyyZrsNBz4hnXAQ3DaUkga22eN_PDqWfMLC0oclGSDLQUIB8aLCO1Wwj1zBuKptiJmWlFadQhIh9KmuNs0EnYlAIvi4yZBguf4mju-iJb8UGgzuJvniT3X3Tfg-X5QzBTSM79molkdqn6eVKqD7Wcf5aNOdQeHosqs-FkIEeVNAKuEYKriOUIA3tHCxRDFIubgM3x-dWW-Dd',
    points: '375,130 485,170 440,255 330,215',
    labelX: 410,
    labelY: 197,
    status: 'Próximamente',
  },
  {
    code: '03',
    name: 'Oxmán',
    title: '03 · Oxmán',
    badge: 'Próximamente',
    desc: 'Sector derecha abajo. Tercera etapa contemplada en el plan maestro.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrCPdQ3zk9EZq-7POOPM-guxuOrBqQtIvSEMsH3OpsvmPNboBn1R08pPr27ysnwbOLGwS6T3oAJtD-cR7IHlxyhcNggZgRv8TKALMECq7PWq79VkslRCLUXhLoXXzUmp7_x432f30nL3bWZx3rj2TzEjVBUNpcJzVqdR9FVrwuOg56doRWBXmZgzHF4EoyqfcCZxCDdWsciG5Lt__useKGKFVBDiFr2HqqY3TXSTpZd-QQB1CBlDMg',
    points: '475,320 570,356 515,442 430,404',
    labelX: 498,
    labelY: 386,
    status: 'Próximamente',
  },
  {
    code: '04',
    name: 'Suytún',
    title: '04 · Suytún',
    badge: 'Próximamente',
    desc: 'Sector centro abajo. Cuarta etapa de apertura progresiva.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrCI75jTBguyC7U8iFNXWqSPs3wQDxdlX0ySciYIqoeqmhwrv9Pc9ZrtgbUjKVttbeSAhmi_19mO4stXfFDX_9DAPH4XH5WEIDLN4eZl_gBbUagWtEqdV0y6r36up2QJsvS6Q6FTPRmoveTVB0ZCHKgeX8gAMShcf7hSxHFM-3ZkAQmXQ9XJby2Cy7807SA-9-96-KTgs7IwAge-JlfgedeZojFcPChhWqP8j-zcAsDCmJO6-wC86gtl',
    points: '375,282 465,316 420,400 330,366',
    labelX: 398,
    labelY: 346,
    status: 'Próximamente',
  },
  {
    code: '05',
    name: 'Toh',
    title: '05 · Toh',
    badge: 'Próximamente',
    desc: 'Sector centro izquierda. Quinta etapa junto al eje arbolado.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrB99zg4b409A2sJFgv4q3PymcVyY7FizEZqw3ciHeVFyQx87FmWw_OU-mJMd4VXyo4pRbgx3aGvz0UrsE2a7pTUG1CXqDLKKveUAV5o6drmHtPC-Q-Kv99bybQk3rO5mxJjN1WESDjFnM6zXnskpU12mfb0zfUxjZDElKEeI3Uhv1z_YAK3g9quZqYOuL-10yaDzyzQ89JdXEbEehZM1sO7XuthuDhUUAxrLNYHvlCUACl-hg',
    points: '280,245 365,278 320,362 235,328',
    labelX: 302,
    labelY: 308,
    status: 'Próximamente',
  },
  {
    code: '06',
    name: 'Saamal',
    title: '06 · Saamal',
    badge: 'Próximamente',
    desc: 'Sector izquierda arriba. Sexta etapa en entorno de selva baja.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrA8PQagz4e-ST8pZGEhNS_fkv8YUZzC1zheHrLTNmWF2f4pknm2wQ_HmjlI8Q47W6KtOGisYDIgA1Oc8Ep5VuCm7beqL27SfaDecTsc2sQQvZWhrMVYHmY-bPo-wdtwyfSDnsmb8eklydFHmyp-apDPmO_RbAXlSsjemTGnLel02vVp0Ik2-J7TDXYbDkriPWAhgJixu8-2NVW-r6kGljshp7WNKkygCO_MUQWJanC9KCZ6dPgQ2c1r',
    points: '275,95 365,125 320,210 230,175',
    labelX: 295,
    labelY: 162,
    status: 'Próximamente',
  },
  {
    code: '07',
    name: 'Zací',
    title: '07 · Zací',
    badge: 'Próximamente',
    desc: 'Sector izquierda abajo. Séptima etapa de cierre del conjunto.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrD97ChW17SgefZSPB1xCf-NnsLefjeUq5Phw0Zng7xIkpUM-E2MfoFQ7NXG0jaBeM_eWfkbR6bDEFtnNxFjoNZ1N_Xaskkr6d9cJaenGBm6ZOuCdqMCwlOOE7JNdDFcgwJtKm2D9gcIU6tXofcMTzWUzbsjHFp88pHwd0QmqzmAFjrRztenSqJKkqPU0rTXEr35XHII1SoV4FHHOijLpRDhbVByXbimWd_iQPqlqUye_l4wB8il',
    points: '180,205 270,240 225,325 140,285',
    labelX: 208,
    labelY: 268,
    status: 'Próximamente',
  },
];

export interface LotItem {
  id: string;
  area: number;
  status: 'Disponible' | 'Apartado';
}

export const CHICHIKAN_LOTS: LotItem[] = [
  { id: 'C1-01', area: 284.5, status: 'Disponible' },
  { id: 'C1-02', area: 298.15, status: 'Apartado' },
  { id: 'C1-04', area: 312.4, status: 'Disponible' },
  { id: 'C1-07', area: 328.6, status: 'Disponible' },
  { id: 'C1-11', area: 276.9, status: 'Disponible' },
  { id: 'C1-15', area: 345.8, status: 'Disponible' },
];

export function formatMXN(value: number): string {
  return '$' + Math.round(value).toLocaleString('en-US');
}
