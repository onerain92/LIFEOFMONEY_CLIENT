const questionInfos = [
  {
    question: '최근 1년간 청첩장이 아닌 이유로 만난적이 있다.',
    yes: {
      nextStage: 1,
      amount: 10000,
    },
    no: {
      nextStage: 2,
    },
    image: 'https://lifeofmoney.s3.ap-northeast-2.amazonaws.com/stage1.png',
  },
  {
    question: '청첩장을 직접 받았다.',
    yes: {
      nextStage: 4,
      amount: 10000,
    },
    no: {
      nextStage: 2,
    },
    image: 'https://lifeofmoney.s3.ap-northeast-2.amazonaws.com/stage2.png',
  },
  {
    question: '모바일로 받았다.',
    yes: {
      nextStage: 5,
      amount: -10000,
    },
    no: {
      nextStage: 4,
    },
    image: 'https://lifeofmoney.s3.ap-northeast-2.amazonaws.com/stage3.png',
  },
  {
    question: '인연을 맺은지 5년 이상이다.',
    yes: {
      nextStage: 6,
    },
    no: {
      nextStage: 8,
    },
    image: 'https://lifeofmoney.s3.ap-northeast-2.amazonaws.com/stage4.png',
  },
  {
    question: '직장 동료이다.',
    yes: {
      nextStage: 6,
    },
    no: {
      nextStage: 3,
    },
    image: 'https://lifeofmoney.s3.ap-northeast-2.amazonaws.com/stage5.png',
  },
  {
    question: 'SNS 친구다.',
    yes: {
      nextStage: 10,
    },
    no: {
      nextStage: 4,
    },
    image: 'https://lifeofmoney.s3.ap-northeast-2.amazonaws.com/stage6.png',
  },
  {
    question: '자주 보는 사이다.',
    yes: {
      nextStage: 7,
      amount: 10000,
    },
    no: {
      nextStage: 8,
    },
    image: 'https://lifeofmoney.s3.ap-northeast-2.amazonaws.com/stage7.png',
  },
  {
    question: '이번이 재혼이다.',
    yes: {
      nextStage: 9,
      amount: -20000,
    },
    no: {
      nextStage: 10,
    },
    image: 'https://lifeofmoney.s3.ap-northeast-2.amazonaws.com/stage8.png',
  },
  {
    question: '식장이 호텔이다.',
    yes: {
      nextStage: 12,
      amount: 20000,
    },
    no: {
      nextStage: 11,
    },
    image: 'https://lifeofmoney.s3.ap-northeast-2.amazonaws.com/stage9.png',
  },
  {
    question: '그로부터 상처를 받은 적이 있다.',
    yes: {
      nextStage: 8,
      amount: -20000,
    },
    no: {
      nextStage: 10,
    },
    image: 'https://lifeofmoney.s3.ap-northeast-2.amazonaws.com/stage10.png',
  },
  {
    question: '결혼 성수기다.',
    yes: {
      nextStage: 8,
      amount: -10000,
    },
    no: {
      nextStage: 12,
    },
    image: 'https://lifeofmoney.s3.ap-northeast-2.amazonaws.com/stage11.png',
  },
  {
    question: '식장이 지방이다.',
    yes: {
      nextStage: 14,
      amount: -10000,
    },
    no: {
      nextStage: 12,
    },
    image: 'https://lifeofmoney.s3.ap-northeast-2.amazonaws.com/stage12.png',
  },
  {
    question: '나도 2년 안에 결혼할 예정이다.',
    yes: {
      nextStage: 15,
      amount: 20000,
    },
    no: {
      nextStage: 13,
    },
    image: 'https://lifeofmoney.s3.ap-northeast-2.amazonaws.com/stage13.png',
  },
  {
    question: '액수를 정했는데 뭔가 불안하다.',
    yes: {
      nextStage: 15,
      amount: 10000,
    },
    no: {
      nextStage: 14,
    },
    image: 'https://lifeofmoney.s3.ap-northeast-2.amazonaws.com/stage14.png',
  },
  {
    question: '봉투만 전해도 OK~',
    image:
      'http://img.khan.co.kr/news/2016/01/13/l_2016011301001731700139951.jpg',
  },
  {
    question: '필히 참석하자!',
    image:
      'http://image.chosun.com/sitedata/image/201203/29/2012032900237_0.jpg',
  },
];

export default questionInfos;
