import { Book } from './types';

const MockData: (Book & {
  [key: string]: any;
})[] = [
  {
    author: ['[波] 斯坦尼斯瓦夫·莱姆'],
    cover: 'https://img1.doubanio.com/view/subject/l/public/s33925108.jpg',

    id: '35049755',
    price: 1.99,
    rating: { count: 2886, max: 10, value: 8.9, star_count: 4.5 },
    recommend_comment:
      '因为梁文道「一千零一夜」种草这本书。蓝色东欧绝版版本太贵了，终于等到鸽了大半年的译林版！\n不是波兰语直译，而是通过莱姆基金会推荐的英译本和德译本翻译，并与波兰译本核对，不完美，但还是买它！ —— 豆友93290252的短评',
    tags: ['科幻', '科幻小说'],
    title: '索拉里斯星',
    type: 'book',
    url: 'https://book.douban.com/subject/35049755/',
    wish_count: 25174,
    year: ['2021-8'],
  },
  {
    author: ['[古巴] 吉列尔莫·卡夫雷拉·因凡特'],
    cover: 'https://img3.doubanio.com/view/subject/l/public/s33936930.jpg',
    id: '27625543',
    info: '[古巴] 吉列尔莫·卡夫雷拉·因凡特/四川人民出版社/2021-7',
    price: 2.99,
    rating: { count: 764, max: 10, value: 9.2, star_count: 4.5 },
    tags: ['拉美文学', '古巴'],
    title: '三只忧伤的老虎1',
    url: 'https://book.douban.com/subject/27625543/',
    wish_count: 21584,
    year: ['2021-7'],
  },
  {
    author: ['[古巴] 吉列尔莫·卡夫雷拉·因凡特'],
    cover: 'https://img3.doubanio.com/view/subject/l/public/s33936930.jpg',

    id: '12',
    info: '[古巴] 吉列尔莫·卡夫雷拉·因凡特/四川人民出版社/2021-7',
    price: 2.99,
    rating: { count: 764, max: 10, value: 9.2, star_count: 4.5 },
    tags: ['拉美文学', '古巴'],
    title: '三只忧伤的老虎2',
    url: 'https://book.douban.com/subject/27625543/',
    wish_count: 21584,
    year: ['2021-7'],
  },
  {
    author: ['[古巴] 吉列尔莫·卡夫雷拉·因凡特'],
    cover: 'https://img3.doubanio.com/view/subject/l/public/s33936930.jpg',

    id: '34',
    info: '[古巴] 吉列尔莫·卡夫雷拉·因凡特/四川人民出版社/2021-7',
    price: 2.99,
    rating: { count: 764, max: 10, value: 9.2, star_count: 4.5 },
    tags: ['拉美文学', '古巴'],
    title: '三只忧伤的老虎3',
    url: 'https://book.douban.com/subject/27625543/',
    wish_count: 21584,
    year: ['2021-7'],
  },
  {
    author: ['[古巴] 吉列尔莫·卡夫雷拉·因凡特'],
    cover: 'https://img3.doubanio.com/view/subject/l/public/s33936930.jpg',

    id: '35',
    info: '[古巴] 吉列尔莫·卡夫雷拉·因凡特/四川人民出版社/2021-7',
    price: 2.99,
    rating: { count: 764, max: 10, value: 9.2, star_count: 4.5 },
    tags: ['拉美文学', '古巴'],
    title: '三只忧伤的老虎3',
    url: 'https://book.douban.com/subject/27625543/',
    wish_count: 21584,
    year: ['2021-7'],
  },
  {
    author: ['[古巴] 吉列尔莫·卡夫雷拉·因凡特'],
    cover: 'https://img3.doubanio.com/view/subject/l/public/s33936930.jpg',

    id: '36',
    info: '[古巴] 吉列尔莫·卡夫雷拉·因凡特/四川人民出版社/2021-7',
    price: 2.99,
    rating: { count: 764, max: 10, value: 9.2, star_count: 4.5 },
    tags: ['拉美文学', '古巴'],
    title: '三只忧伤的老虎3',
    url: 'https://book.douban.com/subject/27625543/',
    wish_count: 21584,
    year: ['2021-7'],
  },
  {
    author: ['[古巴] 吉列尔莫·卡夫雷拉·因凡特'],
    cover: 'https://img3.doubanio.com/view/subject/l/public/s33936930.jpg',

    id: '37',
    info: '[古巴] 吉列尔莫·卡夫雷拉·因凡特/四川人民出版社/2021-7',
    price: 2.99,
    rating: { count: 764, max: 10, value: 9.2, star_count: 4.5 },
    tags: ['拉美文学', '古巴'],
    title: '三只忧伤的老虎3',
    url: 'https://book.douban.com/subject/27625543/',
    wish_count: 21584,
    year: ['2021-7'],
  },
  {
    author: ['[古巴] 吉列尔莫·卡夫雷拉·因凡特'],
    cover: 'https://img3.doubanio.com/view/subject/l/public/s33936930.jpg',

    id: '38',
    info: '[古巴] 吉列尔莫·卡夫雷拉·因凡特/四川人民出版社/2021-7',
    price: 2.99,
    rating: { count: 764, max: 10, value: 9.2, star_count: 4.5 },
    tags: ['拉美文学', '古巴'],
    title: '三只忧伤的老虎3',
    url: 'https://book.douban.com/subject/27625543/',
    wish_count: 21584,
    year: ['2021-7'],
  },
];

export default MockData;
