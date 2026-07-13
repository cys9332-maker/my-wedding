/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "유신",
    nameEn: "groom",
    father: "조동준",
    mother: "신순자",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "경진",
    nameEn: "Bride",
    father: "이현택",
    mother: "김형자",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-31",
    time: "11:00",
    venue: "광명 아이벡스 컨벤션",
    hall: "아이벡스홀",
    address: "경기 광명시 양지로 17 AK플라자 광명 5층",
    tel: "02-897-1002",
    mapLinks: {
      kakao: "https://place.map.kakao.com/1236579495",
      naver: "https://naver.me/GkURxNA2"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 삶을 살아오던 우리가\n자연스럽게 같은 방향을 바라보게 되었습니다.\n그 마음을 소중히 이어가며\n이제 하나의 가정을 이루려 합니다.\n귀한 걸음으로 함께해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "10.12 ♥ 12.10\n숫자마저 서로를 비추듯 닮은 우리,\n이제 평생의 짝이 되려 합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)
    
    

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "조유신", bank: "우리은행", number: "1002-637-697175" },
      { role: "어머니", name: "신순자", bank: "광주은행", number: "028-121-553535" }
    ],
    bride: [
      { role: "신부", name: "이경진", bank: "국민은행", number: "740502-00-065343" },
      { role: "아버지", name: "이현택", bank: "농협은행", number: "356-1087-6968-03" },
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "유신 ♥ 경진 결혼합니다",
    description: "2026년 10월 31일, 소중한 분들을 초대합니다."
  }
};
