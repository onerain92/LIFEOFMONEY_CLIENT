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
    image:
      'https://t1.daumcdn.net/liveboard/interbiz/9d3cc46f66de4366a2e19f351a5187bf.JPG',
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
    image:
      'https://t1.daumcdn.net/liveboard/interbiz/9d3cc46f66de4366a2e19f351a5187bf.JPG',
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
    image:
      'https://t1.daumcdn.net/liveboard/interbiz/9d3cc46f66de4366a2e19f351a5187bf.JPG',
  },
  {
    question: '인연을 맺은지 5년 이상이다.',
    yes: {
      nextStage: 6,
    },
    no: {
      nextStage: 8,
    },
    image:
      'https://t1.daumcdn.net/liveboard/interbiz/9d3cc46f66de4366a2e19f351a5187bf.JPG',
  },
  {
    question: '직장 동료이다.',
    yes: {
      nextStage: 6,
    },
    no: {
      nextStage: 3,
    },
    image:
      'https://t1.daumcdn.net/liveboard/interbiz/9d3cc46f66de4366a2e19f351a5187bf.JPG',
  },
  {
    question: 'SNS 친구다.',
    yes: {
      nextStage: 10,
    },
    no: {
      nextStage: 4,
    },
    image:
      'https://t1.daumcdn.net/liveboard/interbiz/9d3cc46f66de4366a2e19f351a5187bf.JPG',
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
    image:
      'https://t1.daumcdn.net/liveboard/interbiz/9d3cc46f66de4366a2e19f351a5187bf.JPG',
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
    image:
      'https://t1.daumcdn.net/liveboard/interbiz/9d3cc46f66de4366a2e19f351a5187bf.JPG',
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
    image:
      'https://t1.daumcdn.net/liveboard/interbiz/9d3cc46f66de4366a2e19f351a5187bf.JPG',
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
    image:
      'https://t1.daumcdn.net/liveboard/interbiz/9d3cc46f66de4366a2e19f351a5187bf.JPG',
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
    image:
      'https://t1.daumcdn.net/liveboard/interbiz/9d3cc46f66de4366a2e19f351a5187bf.JPG',
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
    image:
      'https://t1.daumcdn.net/liveboard/interbiz/9d3cc46f66de4366a2e19f351a5187bf.JPG',
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
    image:
      'https://t1.daumcdn.net/liveboard/interbiz/9d3cc46f66de4366a2e19f351a5187bf.JPG',
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
    image:
      'https://t1.daumcdn.net/liveboard/interbiz/9d3cc46f66de4366a2e19f351a5187bf.JPG',
  },
  {
    question: '봉투만 전해도 OK~',
    image:
      'https://t1.daumcdn.net/liveboard/interbiz/9d3cc46f66de4366a2e19f351a5187bf.JPG',
  },
  {
    question: '필히 참석하자!',
    image:
      'https://t1.daumcdn.net/liveboard/interbiz/9d3cc46f66de4366a2e19f351a5187bf.JPG',
  },
];

export default questionInfos;
