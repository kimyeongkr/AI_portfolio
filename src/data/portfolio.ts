import brandBeaconHero from '../assets/images/brand_beacon_hero_1795054478027.jpg';
import brandBeaconDetail from '../assets/images/brand_beacon_detail_1795054476770.jpg';
import mallangHero from '../assets/images/mallang_hero_1795054477109.jpg';
import mallangDetail from '../assets/images/mallang_detail_1795054477389.jpg';
import profilePortrait from '../assets/images/profile_editorial_portrait_1795054477112.jpg';

export type ProjectCategory = 'all' | 'data-ai' | 'communication';

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  period: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  summary: string;
  roles: string[];
  tools: string[];
  heroImage: string;
  heroAlt: string;
  detailImage: string;
  detailAlt: string;
  detailCaption: string;
  background: string;
  approach: string;
  highlights: ProjectHighlight[];
  flowSteps: string[];
  outcome: string;
}

export interface VisionPillar {
  key: 'explore' | 'connect' | 'build';
  title: string;
  lines: [string, string];
}

export interface ResumeEntry {
  heading: string;
  detail: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const NAV_ITEMS = [
  { id: 'home', label: 'HOME' },
  { id: 'works', label: 'WORKS' },
  { id: 'about', label: 'ABOUT' },
  { id: 'contact', label: 'CONTACT' },
] as const;

export const PROFILE_IMAGE = profilePortrait;
export const CONTACT_EMAIL = 'kimyeong.kr@gmail.com';

export const VISION_PILLARS: VisionPillar[] = [
  {
    key: 'explore',
    title: 'EXPLORE',
    lines: ['다양한 관점에서', '사람들의 생각과 선택을 탐색합니다.'],
  },
  {
    key: 'connect',
    title: 'CONNECT',
    lines: ['발견한 문제와 가능성을', '서비스 아이디어로 연결합니다.'],
  },
  {
    key: 'build',
    title: 'BUILD',
    lines: ['아이디어를 실제', '사용 가능한 기능으로 구현합니다.'],
  },
];

export const PROJECT_FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: '전체' },
  { id: 'data-ai', label: '데이터 · AI' },
  { id: 'communication', label: '커뮤니케이션 · 백엔드' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'brand-beacon',
    index: '01',
    title: 'Brand Beacon',
    subtitle: '데이터 기반 브랜드 비주얼 비교 · 방향 탐색 서비스',
    period: '2026.05–06',
    category: 'data-ai',
    categoryLabel: '데이터 · AI 서비스',
    summary:
      '브랜드 간 시각적 차이를 비교하고, 데이터 기반으로 브랜드 방향을 탐색하도록 돕는 서비스',
    roles: ['서비스 기획', '데이터 분석', 'AI 기능 개발'],
    tools: ['Figma', 'Notion', 'Python', 'FastAPI', 'SQL', 'MySQL'],
    heroImage: brandBeaconHero,
    heroAlt: 'Brand Beacon 브랜드 시각 비교 및 포지셔닝 대시보드 화면',
    detailImage: brandBeaconDetail,
    detailAlt: 'Brand Beacon 브랜드 컬러 팔레트 추출 및 레이더 분석 리포트 화면',
    detailCaption: '추출된 브랜드 컬러 팔레트와 포지셔닝 지표 기반 전략 리포트 뷰',
    background:
      '신규 브랜드를 기획하거나 리브랜딩 방향을 정할 때, 경쟁 브랜드의 시각적 특징을 주관적 감각에만 의존해 비교하면서 의사결정 기준이 모호해지는 문제가 반복되었습니다.',
    approach:
      '브랜드 이미지에서 컬러 비율·시각 밀도·무드 키워드를 정량적으로 추출하고, 유사 브랜드와의 차이를 한눈에 비교할 수 있는 탐색 흐름을 설계했습니다.',
    highlights: [
      {
        title: '시각 요소 비교 보드',
        description:
          '선택한 브랜드들의 대표 컬러 팔레트와 시각적 톤을 나란히 배치해 직관적인 차이점을 빠르게 파악합니다.',
      },
      {
        title: '포지셔닝 맵 기반 공백 탐색',
        description:
          '시장 내 브랜드 분포를 시각 지표 좌표로 시각화해, 차별화 가능한 브랜드 방향성을 데이터로 확인합니다.',
      },
      {
        title: 'AI 브랜드 인사이트 요약',
        description:
          '추출된 시각 데이터와 브랜드 키워드를 결합해 초기 기획 단계에서 바로 참고할 수 있는 방향성 리포트를 생성합니다.',
      },
    ],
    flowSteps: [
      '비교 브랜드 선택',
      '시각 지표·컬러 추출',
      '포지셔닝 비교 분석',
      'AI 방향성 리포트 확인',
    ],
    outcome:
      '정성적 레퍼런스 수집에 머물던 브랜드 리서치 과정을 구조화된 비교·분석 플로우로 전환해, 초기 방향성 검토 시간을 단축하는 프로토타입으로 완성했습니다.',
  },
  {
    id: 'mallangmallang',
    index: '02',
    title: '말랑말랑',
    subtitle: '상대와 상황에 맞춘 어조 조정 AI 업무 채팅 서비스',
    period: '2026.03–04',
    category: 'communication',
    categoryLabel: 'AI 커뮤니케이션 · 백엔드',
    summary:
      '상대와 상황에 맞게 메시지의 어조를 조정해, 업무 소통을 돕는 AI 채팅 서비스',
    roles: ['서비스 기획', '백엔드 개발'],
    tools: ['Figma', 'Notion', 'Spring Boot', 'Python', 'MySQL'],
    heroImage: mallangHero,
    heroAlt: '말랑말랑 AI 업무 채팅 및 어조 조정 인터페이스 화면',
    detailImage: mallangDetail,
    detailAlt: '말랑말랑 직설적 원문과 부드러운 변환 메시지 비교 화면',
    detailCaption: '관계와 상황에 따른 어조 스펙트럼 조절 및 원문·변환안 실시간 비교',
    background:
      '텍스트 중심의 비대면 협업이 늘어나면서, 같은 내용도 말투에 따라 딱딱하거나 오해를 불러일으켜 메시지 작성 자체에 피로감을 느끼는 실무자가 많았습니다.',
    approach:
      '대화 상대(상사·동료·외부 파트너)와 목적(요청·거절·공유)에 따라 메시지 어조를 자연스럽게 다듬고, 별도 도구 이동 없이 채팅 흐름 안에서 바로 전송할 수 있도록 설계했습니다.',
    highlights: [
      {
        title: '상황·관계별 어조 프리셋',
        description:
          '수신자와의 관계와 업무 맥락을 선택하면 핵심 의도는 유지하면서 적절한 공손함과 온도감으로 문장을 재구성합니다.',
      },
      {
        title: '원문 대비 어조 강도 조절',
        description:
          '간결한 실무 톤부터 부드러운 배려 톤까지 스펙트럼을 조절해 사용자가 가장 자연스러운 표현을 직접 선택합니다.',
      },
      {
        title: '안정적인 채팅·변환 API 구조',
        description:
          'Spring Boot 기반의 대화 세션 관리와 AI 어조 변환 파이프라인을 분리 설계해 응답 일관성과 이력 관리를 확보했습니다.',
      },
    ],
    flowSteps: [
      '초안 메시지 입력',
      '상대·상황 맥락 선택',
      '어조 변환안 비교·조정',
      '채팅창 즉시 전송',
    ],
    outcome:
      '사용자 시나리오 정의부터 데이터베이스 모델링, 핵심 백엔드 API 구현까지 직접 수행하며 기획 의도가 실제 작동하는 기능으로 이어지는 경험을 축적했습니다.',
  },
];

export const EXPERIENCES: ResumeEntry[] = [
  {
    heading: '인컴즈 · 쇼핑 서비스 운영',
    detail: '네이버 쇼핑 서비스 및 콘텐츠 운영 지원',
  },
  {
    heading: '와사비아 · 전시·콘텐츠 디자인',
    detail: '전시·행사 디자인 및 홍보물 제작',
  },
];

export const EDUCATIONS: ResumeEntry[] = [
  {
    heading: '계원예술대학교',
    detail: '감성경험제품디자인',
  },
  {
    heading: '스마트인재개발원',
    detail: '언어지능 기반 분석서비스 개발자과정',
  },
];

export const SKILL_SUMMARY = '서비스 기획 · 유사 서비스 조사 · 사용자 흐름 및 기능 설계';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Planning & UX',
    items: ['서비스 기획', '유사 서비스 조사', '사용자 흐름 및 기능 설계'],
  },
  {
    label: 'Design & Docs',
    items: ['Figma', 'Notion'],
  },
  {
    label: 'Data & Engineering',
    items: ['Python', 'SQL', 'Spring Boot', 'FastAPI', 'MySQL'],
  },
];
