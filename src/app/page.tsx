import Header from "@/components/Header";

/* ───────── Inline SVG Icons ───────── */

function IconSparkles() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
  );
}

function IconBroadcast() {
  return (
    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-6.75h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v8.25c0 .621.504 1.125 1.125 1.125Z" />
    </svg>
  );
}

function IconArt() {
  return (
    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
    </svg>
  );
}

function IconMegaphone() {
  return (
    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38a.748.748 0 0 1-1.027-.374 48.474 48.474 0 0 1-.92-2.298M10.34 15.84c.257.956.585 1.879.985 2.76m-2.486-2.657a48.28 48.28 0 0 0 7.126-3.473M10.34 6.66a48.28 48.28 0 0 1 7.126 3.473m0 0a48.356 48.356 0 0 1 1.67.879 1.875 1.875 0 0 1 0 3.232 48.394 48.394 0 0 1-1.67.879m0-4.99a1.874 1.874 0 0 0 0 4.99" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  );
}

/* ───────── Data ───────── */

const SERVICES = [
  {
    icon: <IconBroadcast />,
    title: "방송 콘텐츠 마케팅",
    desc: "런닝맨, 나혼자산다 등 지상파/케이블 방송 콘텐츠와 브랜드를 연결합니다. 2018년부터 BambooC&C와 함께 주요 방송사 콘텐츠 마케팅을 수행하고 있습니다.",
    gradient: "from-[#1a1a2e] to-[#2a2a4e]",
    iconBg: "bg-[#f09048]/20",
    iconColor: "text-[#f09048]",
  },
  {
    icon: <IconArt />,
    title: "문화예술 x IT",
    desc: "예술의전당 QRPA 가곡 활성화 솔루션, 인도 발달장애 아티스트 국회 전시 등 문화예술과 IT 기술을 결합한 혁신 프로젝트를 기획/운영합니다.",
    gradient: "from-[#2a4494] to-[#4a6fd4]",
    iconBg: "bg-[#ffd166]/20",
    iconColor: "text-[#ffd166]",
  },
  {
    icon: <IconMegaphone />,
    title: "광고/홍보 기획",
    desc: "KOBACO 전문위원 출신의 전문성을 바탕으로 방송광고 기획부터 디지털 마케팅까지. 중소기업 방송광고 지원 제도를 직접 기획한 경험이 있습니다.",
    gradient: "from-[#e85d3a] to-[#f09048]",
    iconBg: "bg-white/20",
    iconColor: "text-white",
  },
  {
    icon: <IconBolt />,
    title: "에너지/기술 사업",
    desc: "태양광발전소 REC 매매 대행, 전자파 차폐 기술 특허 등 기술 기반 신사업을 운영합니다.",
    gradient: "",
    iconBg: "bg-[#2a4494]/10",
    iconColor: "text-[#2a4494]",
  },
];

const RECORDS = [
  { year: "2024", text: "예술의전당 \"QRPA 가곡 활성화 솔루션\" 기획 참여" },
  { year: "2023", text: "한국-인도 수교 50주년 인도발달장애 아티스트 아미탄쉬 국회전시" },
  { year: "2023", text: "전자파 차폐 관련 기술특허 출원" },
  { year: "2021", text: "YWCA of Delhi 인도 자폐 어린이 온라인 미술 전시 기획/진행" },
  { year: "2021", text: "LG유플러스 연구용역 2회차 수행" },
  { year: "2021", text: "힐링공간을 위한 전자파 차폐 기술 특허 출원" },
  { year: "2020", text: "한국뮤직비디오협회 콘텐츠 제작지원 협약" },
  { year: "2018~현재", text: "BambooC&C 지상파/케이블 방송 콘텐츠 마케팅 -- 런닝맨, 나혼자산다 외 다수" },
  { year: "", text: "태양광발전소 사업자 3개 업체 REC 매매 대행" },
];

const CERTIFICATIONS = [
  "여성기업 인증",
  "중소기업 인증",
  "비디오 제작물 보유기업",
];

const PARTNERS: { name: string; logo?: string }[] = [
  { name: "SBS", logo: "/logos/sbs.png" },
  { name: "MBC", logo: "/logos/mbc.png" },
  { name: "KBS", logo: "/logos/kbs.png" },
  { name: "MBC+", logo: "/logos/mbc-plus.png" },
  { name: "LG유플러스", logo: "/logos/lg-uplus.png" },
  { name: "동아쏘시오홀딩스", logo: "/logos/donga.png" },
  { name: "한국엡손", logo: "/logos/epson.png" },
  { name: "하쿠호도제일" },
  { name: "예술의전당", logo: "/logos/sac.png" },
  { name: "스페이스앤빈" },
  { name: "클라우드게이트" },
  { name: "푸드앤컬쳐코리아" },
  { name: "공간세라믹" },
  { name: "글래버" },
];

const CEO_CAREER = [
  { year: "2024", text: "예술의전당 \"QRPA 가곡 활성화 솔루션\" 프로젝트" },
  { year: "2023", text: "한국-인도 수교 50주년 국회 전시 기획" },
  { year: "2021", text: "YWCA of Delhi 인도 자폐아동 온라인 전시 개최" },
  { year: "2021", text: "LG유플러스 연구용역 수행" },
  { year: "2020", text: "한국뮤직비디오협회 콘텐츠 제작 협약" },
  { year: "2019", text: "지상파/케이블 방송 콘텐츠 마케팅 -- 런닝맨, 나혼자산다 등" },
  { year: "2015~2016", text: "농림축산식품부 한식세계화 교육사업 수행" },
  { year: "2015", text: "(주)위크리에이트 이사, 중국 게임광고주 광고 총괄" },
  { year: "2013~2014", text: "KOBACO 신사업국 뉴미디어팀 전문위원" },
  { year: "2010", text: "한국전력공사/한국수자원공사/한국철도시설공단 신기술 등록" },
  { year: "2006~2007", text: "KBS / MBC / SBS 방송 출연" },
  { year: "2003~2007", text: "일본 베스트셀러 『육아백과』 한국 번역 출판 총괄" },
];

/* ───────── HERO Stats ───────── */
const HERO_STATS = [
  { value: "15+", label: "프로젝트 실적", color: "text-[#e85d3a]" },
  { value: "200+", label: "콘텐츠 제작", color: "text-[#2a4494]" },
  { value: "100%", label: "고객 만족도", color: "text-[#e85d3a]" },
];

/* ───────── Page ───────── */

export default function Home() {
  return (
    <>
      <Header />

      {/* ── Hero ── */}
      <section className="hero-bg relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
        {/* Background blur circles */}
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[#f8e8ee]/70 blur-[120px]" />
        <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#e85d3a]/10 blur-[100px]" />
        <div className="pointer-events-none absolute right-1/3 top-1/3 h-[300px] w-[300px] rounded-full bg-[#2a4494]/5 blur-[80px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Text content */}
          <div>
            {/* Tagline pill */}
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e85d3a]/20 bg-[#f8e8ee] px-5 py-2 text-sm font-semibold text-[#e85d3a]">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-[#e85d3a]" />
              미디어와 기술을 잇다
            </span>

            {/* Headline */}
            <h1 className="mt-4 text-5xl font-black leading-[1.1] tracking-tight text-zinc-800 sm:text-6xl lg:text-7xl">
              <span className="font-[family-name:var(--font-playfair)] italic">Creative</span>
              <br />
              <span className="text-gradient-coral font-[family-name:var(--font-playfair)] italic">Connection</span>
              <br />
              <span className="text-zinc-600">모아브릿지</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-500 sm:text-lg">
              SBS, MBC, KBS, LG유플러스와 함께한 콘텐츠 마케팅 전문 기업.
              방송 / 광고 / 문화예술 / IT를 아우르는 통합 솔루션을 제공합니다.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-coral">
                <IconSparkles />
                프로젝트 시작하기
                <IconArrowRight />
              </a>
              <a href="#services" className="btn-outline">
                사업영역 보기
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className={`font-[family-name:var(--font-playfair)] text-3xl font-bold italic ${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual cards (desktop only) */}
          <div className="relative hidden min-h-[580px] lg:block">
            {/* Card 1: tilted broadcast visual — 좌측 헤드라인 시작 높이에 맞춤 */}
            <div className="absolute right-8 top-8 w-72 rotate-3 transform rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#2a4494] p-8 shadow-2xl transition-transform duration-500 hover:rotate-0">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                <svg className="h-8 w-8 text-[#f09048]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-6.75h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v8.25c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">방송 콘텐츠</h3>
              <p className="mt-2 text-sm text-white/60">런닝맨, 나혼자산다 등 주요 방송 마케팅</p>
              <div className="mt-6 h-32 rounded-xl bg-gradient-to-br from-[#f09048]/30 to-[#e85d3a]/10" />
            </div>

            {/* Floating info card — 주황 카드 위쪽에 배치 */}
            <div className="float-slow absolute left-4 top-44 z-10 rounded-xl bg-white/90 p-4 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8e8ee]">
                  <IconCheck />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-800">여성기업 인증</p>
                  <p className="text-xs text-zinc-500">공식 인증 기업</p>
                </div>
              </div>
            </div>

            {/* Card 2: tilted art visual — 파란 카드 아래, 겹치는 레이아웃 */}
            <div className="absolute left-0 top-64 w-64 -rotate-3 transform rounded-2xl bg-gradient-to-br from-[#e85d3a] to-[#f09048] p-8 shadow-2xl transition-transform duration-500 hover:rotate-0">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">문화예술 x IT</h3>
              <p className="mt-2 text-sm text-white/80">예술의전당, 인도 국제전시 등</p>
              <div className="mt-6 h-24 rounded-xl bg-white/10" />
            </div>
          </div>
        </div>

        {/* Mobile fixed CTA bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200/60 bg-white/90 px-4 py-3 backdrop-blur-xl lg:hidden">
          <a href="#contact" className="btn-coral block w-full justify-center text-center">
            <IconSparkles />
            프로젝트 시작하기
          </a>
        </div>
      </section>

      {/* ── Services (사업영역) ── */}
      <section id="services" className="relative px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e85d3a]/20 bg-[#f8e8ee]/50 px-4 py-1.5 text-xs font-semibold text-[#e85d3a]">
              <IconSparkles />
              What We Do
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold italic text-zinc-800 sm:text-5xl">
              연결이 만드는 <span className="text-gradient-coral">가치</span>
            </h2>
            <p className="mt-4 text-zinc-500">
              미디어, 기술, 문화의 교차점에서 새로운 비즈니스를 만듭니다
            </p>
          </div>

          <div className="stagger mt-16 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`animate-fade-in-up rounded-xl border border-[#f8e8ee] p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 sm:p-10 ${
                  s.gradient
                    ? `bg-gradient-to-br ${s.gradient} text-white`
                    : "bg-white/90 text-zinc-800 backdrop-blur-sm"
                }`}
              >
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${s.iconBg} ${s.iconColor}`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${s.gradient ? "text-white/70" : "text-zinc-500"}`}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Track Record (실적 & 인증) ── */}
      <section id="track-record" className="section-pink relative px-6 py-28">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2a4494]/20 bg-[#2a4494]/10 px-4 py-1.5 text-xs font-semibold text-[#2a4494]">
              Track Record
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold italic text-zinc-800 sm:text-5xl">
              검증된 <span className="text-gradient-blue">파트너십</span>
            </h2>
            <p className="mt-4 text-zinc-500">
              2018년 설립 이후, 국내 주요 기업/기관과 함께했습니다
            </p>
          </div>

          {/* Certifications */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {CERTIFICATIONS.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-[#e85d3a]/30 bg-[#f8e8ee]/50 px-5 py-2.5 text-sm font-semibold text-[#e85d3a]"
              >
                <IconCheck />
                {c}
              </span>
            ))}
          </div>

          {/* Record list */}
          <div className="mt-12 rounded-xl bg-white/90 p-8 shadow-xl backdrop-blur-sm">
            <ul className="space-y-4">
              {RECORDS.map((r) => (
                <li key={r.text} className="flex items-start gap-3 text-zinc-600">
                  <span className="mt-0.5 text-[#e85d3a]">
                    <IconCheck />
                  </span>
                  <span className="text-sm leading-relaxed">
                    {r.year && <span className="mr-2 font-bold text-[#2a4494]">({r.year})</span>}
                    {r.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Partners (파트너) ── */}
      <section id="partners" className="px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e85d3a]/20 bg-[#f8e8ee]/50 px-4 py-1.5 text-xs font-semibold text-[#e85d3a]">
            Partners
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-bold italic text-zinc-800 sm:text-4xl">
            함께 만들어가는 <span className="text-gradient-coral">파트너</span>
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center gap-3 rounded-xl border border-[#f8e8ee] bg-white/90 p-6 shadow-md backdrop-blur-sm transition-all hover:border-[#e85d3a]/30 hover:shadow-xl"
              >
                {p.logo ? (
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#f8e8ee] shadow-sm">
                    <img src={p.logo} alt={p.name} className="h-10 w-10 object-contain" />
                  </div>
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f8e8ee] text-lg font-bold text-[#e85d3a]">
                    {p.name[0]}
                  </div>
                )}
                <span className="text-sm font-semibold text-zinc-600">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CEO Profile (대표소개) ── */}
      <section id="ceo" className="section-pink relative px-6 py-28">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2a4494]/20 bg-[#2a4494]/10 px-4 py-1.5 text-xs font-semibold text-[#2a4494]">
              CEO Profile
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold italic text-zinc-800 sm:text-5xl">
              대표이사 <span className="text-gradient-blue">임정원</span>
            </h2>
            <p className="mt-4 text-zinc-500">
              미디어/문화예술/IT를 잇는 20년 경력의 전문가
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: Profile Cards */}
            <div className="space-y-6">
              {/* Education */}
              <div className="rounded-xl border border-[#f8e8ee] bg-white/90 p-8 shadow-xl backdrop-blur-sm">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#2a4494]">학력</h3>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li>성균관대학교 대학원 예술학 박사 수료 (2025)</li>
                  <li>성균관대학교 대학원 언론학 석사 (2017)</li>
                </ul>
              </div>

              {/* Current Activities */}
              <div className="rounded-xl border border-[#f8e8ee] bg-white/90 p-8 shadow-xl backdrop-blur-sm">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#2a4494]">현재 활동</h3>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li>한양대학교 미래인재교육원 겸임교수 (2021~현재)</li>
                  <li>(주)모아브릿지 대표이사 (2018~현재)</li>
                  <li>BambooC&C 방송 마케팅 광고회사 운영 (2018~현재)</li>
                </ul>
              </div>

              {/* Public Activities */}
              <div className="rounded-xl border border-[#f8e8ee] bg-white/90 p-8 shadow-xl backdrop-blur-sm">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#2a4494]">공공 활동</h3>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li>제21대 대통령선거 더불어민주당 문화예술특보단 문화예술본부장 (2025)</li>
                  <li>K-문화강국위원회 시각예술위원회 부위원장 (2025)</li>
                </ul>
              </div>
            </div>

            {/* Right: Career Timeline */}
            <div>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-[#e85d3a]">주요 경력</h3>
              <div className="relative border-l-2 border-[#e85d3a]/20 pl-6">
                {CEO_CAREER.map((item) => (
                  <div key={item.text} className="relative mb-6 last:mb-0">
                    <div className="timeline-dot absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-[#e85d3a] bg-[#faf5f0]" />
                    <p className="text-xs font-bold text-[#e85d3a]">{item.year}</p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="relative px-6 py-28">
        {/* Background decoration */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f8e8ee]/50 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold italic text-zinc-800 sm:text-5xl lg:text-6xl">
            다음 프로젝트,
            <br />
            <span className="text-gradient-coral">모아브릿지</span>와 함께
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-zinc-500">
            방송 마케팅부터 문화예술 프로젝트까지, 귀사의 비전을 현실로 연결합니다.
            30분 무료 상담으로 시작해 보세요.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="mailto:moa@moabridge.com" className="btn-coral">
              <IconSparkles />
              무료 상담 신청
              <IconArrowRight />
            </a>
            <a href="tel:02-459-8605" className="btn-outline">
              02-459-8605
            </a>
          </div>
          <div className="mt-8 space-y-1 text-sm text-zinc-400">
            <p>moa@moabridge.com</p>
            <p>서울시 강서구 공달래로 58길 16, 2F / 서울시 서초구 방배로 210, 5F</p>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-200/60 bg-[#faf5f0] px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#e85d3a] to-[#f8e8ee]">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.86-2.04a4.5 4.5 0 0 0-1.242-7.244l-4.5-4.5a4.5 4.5 0 0 0-6.364 6.364L4.25 8.81" />
                  </svg>
                </div>
                <p className="font-[family-name:var(--font-playfair)] text-xl italic text-zinc-800">MoaBridge</p>
              </div>
              <div className="mt-3 space-y-0.5 text-xs text-zinc-400">
                <p>대표: 임정원 | 사업자등록번호: 386-81-01329</p>
                <p>서울시 강서구 공달래로 58길 16, 2F / 서울시 서초구 방배로 210, 5F</p>
                <p>Tel. 02-459-8605 | Fax. 0504-139-8605 | moa@moabridge.com</p>
              </div>
            </div>
            <p className="text-xs text-zinc-300">
              &copy; 2025 MoaBridge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
