const CLOUD_IMAGE_URL = 'https://d2vcremxatlmjn.cloudfront.net/images';

export const WEBPS = {
  banner: {
    ['LEAGUE OF LEGENDS']: {
      url: `${CLOUD_IMAGE_URL}/banner-LOL.webp`,
      alt: '롤 배너 이미지',
    },
    ['BATTLEGROUNDS']: {
      url: `${CLOUD_IMAGE_URL}/banner-BG.webp`,
      alt: '배그 배너 이미지',
    },
    ['OVERWATCH 2']: {
      url: `${CLOUD_IMAGE_URL}/banner-OW.webp`,
      alt: '오버워치 배너 이미지',
    },
    ['MINECRAFT']: {
      url: `${CLOUD_IMAGE_URL}/banner-MC.webp`,
      alt: '마인크래프트 배너 이미지',
    },
  },

  match: {
    lol: {
      default: `${CLOUD_IMAGE_URL}/landing-card-LOL-default.webp`,
      active: `${CLOUD_IMAGE_URL}/landing-card-LOL-active.webp`,
      background: `${CLOUD_IMAGE_URL}/landing-card-background-LOL.webp`,
      alt: '롤 이미지',
    },
    bg: {
      default: `${CLOUD_IMAGE_URL}/landing-card-BG-default.webp`,
      active: `${CLOUD_IMAGE_URL}/landing-card-BG-active.webp`,
      background: `${CLOUD_IMAGE_URL}/landing-card-background-BG.webp`,
      alt: '배틀그라운드 이미지',
    },
    ow: {
      default: `${CLOUD_IMAGE_URL}/landing-card-OW-default.webp`,
      active: `${CLOUD_IMAGE_URL}/landing-card-OW-active.webp`,
      background: `${CLOUD_IMAGE_URL}/landing-card-background-OW.webp`,
      alt: '오버워치 이미지',
    },
    mc: {
      default: `${CLOUD_IMAGE_URL}/landing-card-MC-default.webp`,
      active: `${CLOUD_IMAGE_URL}/landing-card-MC-active.webp`,
      background: `${CLOUD_IMAGE_URL}/landing-card-background-MC.webp`,
      alt: '마인크래프트 이미지',
    },
  },

  errorPage: {
    error404: {
      url: `${CLOUD_IMAGE_URL}/404.webp`,
      alt: '404 에러',
    },
    error500: {
      url: `${CLOUD_IMAGE_URL}/500.webp`,
      alt: '500 에러',
    },
    error: {
      url: `${CLOUD_IMAGE_URL}/error.webp`,
      alt: '서버 에러',
    },
  },

  auth: {
    url: `${CLOUD_IMAGE_URL}/auth-background.webp`,
    alt: '로그인/회원가입 배경화면',
  },

  landing: {
    echo: {
      url: `${CLOUD_IMAGE_URL}/landing-echo.webp`,
      alt: '에코',
    },
    echoShadow: {
      url: `${CLOUD_IMAGE_URL}/landing-echo-shadow.webp`,
      alt: '에코 그림자',
    },
    echoBackground: {
      url: `${CLOUD_IMAGE_URL}/landing-echo-background.webp`,
      alt: '에코 배경',
    },
    slider: {
      ['league-of-legends']: {
        url: `${CLOUD_IMAGE_URL}/slider-lol.webp`,
        alt: '롤 클랜 모집',
      },
      ['battlegrounds']: {
        url: `${CLOUD_IMAGE_URL}/slider-battlegrounds.webp`,
        alt: '배그 클랜 모집',
      },
      ['overwatch-2']: {
        url: `${CLOUD_IMAGE_URL}/slider-overwatch.webp`,
        alt: '오버워치 클랜 모집',
      },
      ['minecraft']: {
        url: `${CLOUD_IMAGE_URL}/slider-minecraft.webp`,
        alt: '마인크래프트 클랜 모집',
      },
    },
  },
};

export const SVGS = {
  profile: {
    url: '/svgs/ic-profile.svg',
    alt: '기본 프로필',
  },

  star: {
    empty: {
      url: '/svgs/ic-star-empty.svg',
      alt: '빈 별 아이콘',
    },
    filled: {
      url: '/svgs/ic-star-filled.svg',
      alt: '채워진 별 아이콘',
    },
    error: {
      url: '/svgs/ic-star-error.svg',
      alt: '에러 별 아이콘',
    },
  },

  arrow: {
    bottom: {
      url: '/svgs/ic-arrow-bottom.svg',
      alt: '아래쪽 화살표',
    },
    top: {
      url: '/svgs/ic-arrow-top.svg',
      alt: '위쪽 화살표',
    },
    left: {
      default: {
        url: '/svgs/ic-arrow-left-default.svg',
        alt: '왼쪽 화살표',
      },
      active: {
        url: '/svgs/ic-arrow-left-active.svg',
        alt: '왼쪽 화살표',
      },
    },
    right: {
      default: {
        url: '/svgs/ic-arrow-right-default.svg',
        alt: '오른쪽 화살표',
      },
      active: {
        url: '/svgs/ic-arrow-right-active.svg',
        alt: '오른쪽 화살표',
      },
    },
    down: {
      default: {
        url: '/svgs/ic-arrow-down-default.svg',
        alt: '드롭다운 아래쪽 화살표 기본',
      },
      active: {
        url: '/svgs/ic-arrow-down-active.svg',
        alt: '드롭다운 아래쪽 화살표 활성화',
      },
    },
    chevron: {
      url: '/svgs/ic-chevron.svg',
      alt: '뒤로가기 버튼',
    },
  },
  alarm: {
    empty: {
      url: '/svgs/ic-alarm-empty.svg',
      alt: '빈 알림',
    },
    full: {
      url: '/svgs/ic-alarm-full.svg',
      alt: '가득 찬 알림',
    },
    off: {
      url: '/svgs/ic-alarm-off.svg',
      alt: '끈 알림',
    },
  },

  eye: {
    on: {
      url: '/svgs/ic-eye-on.svg',
      alt: '비밀번호 표시',
    },
    off: {
      url: '/svgs/ic-eye-off.svg',
      alt: '비밀번호 숨김',
    },
  },

  drawerMenu: {
    url: '/svgs/ic-menu.svg',
    alt: '모바일 메뉴',
  },

  button: {
    add: {
      default: {
        url: '/svgs/ic-add.svg',
        alt: '더하기 버튼',
      },
      active: {
        url: '/svgs/ic-add-active.svg',
        alt: '더하기 버튼',
      },
    },
    remove: {
      default: {
        url: '/svgs/ic-remove.svg',
        alt: '빼기 버튼',
      },
      active: {
        url: '/svgs/ic-remove-active.svg',
        alt: '빼기 버튼',
      },
    },

    more: {
      url: '/svgs/ic-more.svg',
      alt: '메뉴 버튼',
    },
    setting: {
      url: '/svgs/ic-setting.svg',
      alt: '설정 버튼',
    },
  },

  calendar: {
    default: {
      url: '/svgs/ic-calendar-default.svg',
      alt: '캘린더 아이콘',
    },
    active: {
      url: '/svgs/ic-calendar-active.svg',
      alt: '캘린더 아이콘',
    },
  },

  location: {
    default: {
      url: '/svgs/ic-location-default.svg',
      alt: '위치 아이콘',
    },
    active: {
      url: '/svgs/ic-location-active.svg',
      alt: '위치 아이콘',
    },
  },

  search: {
    url: '/svgs/ic-search.svg',
    alt: '돋보기 아이콘',
  },

  chatbot: {
    default: {
      url: '/svgs/ic-chatbot.svg',
      alt: '챗봇 아이콘',
    },
    sad: {
      url: '/svgs/ic-chatbot-sad.svg',
      alt: '챗봇 아이콘',
    },
  },

  chat: {
    url: '/svgs/ic-chat.svg',
    alt: '말풍선 아이콘',
  },

  send: {
    url: '/svgs/ic-send.svg',
    alt: '메시지 보내기 아이콘',
  },

  trashcan: {
    normal: {
      url: '/svgs/ic-trashcan-normal.svg',
      alt: '기본 휴지통 아이콘',
    },
    hover: {
      url: '/svgs/ic-trashcan-hover.svg',
      alt: '색이 있는 휴지통 아이콘',
    },
  },

  upload: {
    default: {
      url: '/svgs/ic-upload-default.svg',
      alt: '이미지 업로드 아이콘',
    },
    active: {
      url: '/svgs/ic-upload-active.svg',
      alt: '활성화된 이미지 업로드 아이콘',
    },
    file: {
      url: '/svgs/ic-upload-file.svg',
      alt: '파일 업로드 아이콘',
    },
  },

  close: {
    active: { url: '/svgs/ic-close-active.svg', alt: '닫기 아이콘' },
    default: {
      url: '/svgs/ic-close-default.svg',
      alt: '닫기 아이콘',
    },
  },

  pagination: {
    left: {
      single: {
        url: '/svgs/ic-singleArrow-left.svg',
        alt: '기본 왼쪽 화살표',
      },
      double: {
        url: '/svgs/ic-doubleArrow-left.svg',
        alt: '기본 왼쪽 2단 화살표 ',
      },
    },
    right: {
      single: {
        url: '/svgs/ic-singleArrow-right.svg',
        alt: '기본 오른쪽 화살표',
      },
      double: {
        url: '/svgs/ic-doubleArrow-right.svg',
        alt: '기본 오른쪽 2단 화살표 ',
      },
    },
  },

  empty: {
    url: '/svgs/ic-empty-paper.svg',
    alt: '데이터 없음 아이콘',
  },

  map: {
    active: {
      url: '/svgs/ic-map-active.svg',
      alt: '활성화된 지도 아이콘',
    },
  },

  discord: {
    url: '/svgs/ic-discord.svg',
    alt: '디스코드 아이콘',
  },
};
