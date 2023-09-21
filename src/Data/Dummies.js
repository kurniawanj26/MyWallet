import { Icons } from '../Assets'

const dummyTransactions = [
  {
    name: 'Olivia Johanson',
    type: 'Transfer',
    amount: '-$432.9',
    time: '3.30 AM',
    avatar: Icons.friend1
  },
  {
    name: `James O'coner`,
    type: 'Transfer',
    amount: '-$40',
    time: '1w ago',
    avatar: Icons.friend2
  },
  {
    name: `James O'coner`,
    type: 'Transfer',
    amount: '-$100',
    time: '2w ago',
    avatar: Icons.friend2
  },
  {
    name: `James O'coner`,
    type: 'Transfer',
    amount: '-$30',
    time: '2w ago',
    avatar: Icons.friend2
  },
  {
    name: `James O'coner`,
    type: 'Transfer',
    amount: '-$30',
    time: '2w ago',
    avatar: Icons.friend2
  },
  {
    name: `James O'coner`,
    type: 'Transfer',
    amount: '-$30',
    time: '2w ago',
    avatar: Icons.friend2
  },
  {
    name: `James O'coner`,
    type: 'Transfer',
    amount: '-$30',
    time: '2w ago',
    avatar: Icons.friend2
  },
]

const dummyTransactions2 = [
  {
    name: 'Green Bank',
    type: 'withdraw',
    type_label: 'Withdraw',
    amount: '$800',
    time: '4d ago',
    avatar: Icons.bankLogo1
  },
  {
    name: 'Legendary Bank',
    type: 'transfer_out',
    type_label: 'Transfer',
    amount: '-$40',
    time: '1w ago',
    avatar: Icons.bankLogo2
  },
  {
    name: 'Bitkoin',
    type: 'sell',
    type_label: 'Sell',
    amount: '-$540',
    time: '2w ago',
    avatar: Icons.bankLogo3
  },
  {
    name: 'Kaya Bank',
    type: 'top_up_in',
    type_label: 'Top Up',
    amount: '$850',
    time: '2w ago',
    avatar: Icons.bankLogo4
  },
  {
    name: 'Olivia Johanson',
    type: 'transfer_in',
    type_label: 'Transfer',
    amount: '$432.9',
    time: '3.30 AM',
    avatar: Icons.friend1
  },
  {
    name: 'Purple Bank',
    type: 'transfer_out',
    type_label: 'Transfer',
    amount: '-$30',
    time: '2w ago',
    avatar: Icons.bankLogo5
  },
  {
    name: `James O'coner`,
    type: 'transfer_out',
    type_label: 'Transfer',
    amount: '-$30',
    time: '2w ago',
    avatar: Icons.friend2
  },
]

const dummyCardWallet = [
  {
    name: 'Main Wallet',
    amount: '$45.500,12',
    card_number: '444 221 224 ***',
    logo: Icons.cardLogo1,
    card_bg: Icons.cardBackground1,
    bg_color: ['#C0B8FF', '#645CA1']
  },
  {
    name: 'XYZ Wallet',
    amount: '$250,15',
    card_number: '444 221 224 ***',
    logo: Icons.cardLogo2,
    card_bg: Icons.cardBackground2,
    bg_color: ['#9CEA38', '#44A159'],
  },
  {
    name: 'ABC Wallet',
    amount: '$45.500,12',
    card_number: '444 221 224 ***',
    logo: Icons.cardLogo3,
    card_bg: Icons.cardBackground3,
    bg_color: ['#FFC785', '#DA1CC7'],
  },
  {
    name: 'Main Wallet',
    amount: '$45.500,12',
    card_number: '444 221 224 ***',
    logo: Icons.cardLogo3,
    card_bg: Icons.cardBackground1,
    bg_color: ['#C0B8FF', '#44A159'],
  },
]

const miniDonutData1 = [
  { value: 25, color: '#3C8AFF', focused: true },
  { value: 10, color: '#F3F3F3' },
  { value: 15, color: '#F3F3F3' },
  { value: 30, color: '#F3F3F3' },
  { value: 25, color: '#F3F3F3' },
];
const miniDonutData2 = [
  { value: 25, color: '#F3F3F3' },
  { value: 10, color: '#ED3DD1', focused: true },
  { value: 15, color: '#F3F3F3' },
  { value: 30, color: '#F3F3F3' },
  { value: 25, color: '#F3F3F3' },
];
const miniDonutData3 = [
  { value: 25, color: '#F3F3F3' },
  { value: 10, color: '#F3F3F3' },
  { value: 15, color: '#FFEE54', focused: true },
  { value: 30, color: '#F3F3F3' },
  { value: 25, color: '#F3F3F3' },
];
const miniDonutData4 = [
  { value: 25, color: '#F3F3F3' },
  { value: 10, color: '#F3F3F3' },
  { value: 15, color: '#F3F3F3' },
  { value: 30, color: '#FF5166', focused: true },
  { value: 25, color: '#F3F3F3' },
];
const miniDonutData5 = [
  { value: 25, color: '#F3F3F3' },
  { value: 10, color: '#F3F3F3' },
  { value: 15, color: '#F3F3F3' },
  { value: 30, color: '#F3F3F3' },
  { value: 25, color: '#2BC844', focused: true },
];

const weeklyData = [
  { value: 0.512, label: 'Jan' },
  { value: 1.75, label: 'Feb' },
  { value: 0.25, label: 'Mar' },
  { value: 3.5, label: 'Apr' },
  { value: 0.50, label: 'May' },
  { value: 5.512, label: 'Jun' },
  { value: 1.85, label: 'Jul' },
  { value: 0.85, label: 'Aug' },
  { value: 2.85, label: 'Sep' },
  { value: 5.85, label: 'Oct' },
  { value: 0.85, label: 'Nov' },
  { value: 0.85, label: 'Dec' }
]

const monthlyData = [
  { value: 2.512, label: 'Jan' },
  { value: 3.75, label: 'Feb' },
  { value: 4.25, label: 'Mar' },
  { value: 3.5, label: 'Apr' },
  { value: 0.50, label: 'May' },
  { value: 5.512, label: 'Jun' },
  { value: 4.85, label: 'Jul' },
  { value: 0.85, label: 'Aug' },
  { value: 1.85, label: 'Sep' },
  { value: 5.85, label: 'Oct' },
  { value: 3.85, label: 'Nov' },
  { value: 0.85, label: 'Dec' }
];

const yearlyData = [
  { value: 0.512, label: 'Jan' },
  { value: 2.75, label: 'Feb' },
  { value: 1.25, label: 'Mar' },
  { value: 3.5, label: 'Apr' },
  { value: 0.50, label: 'May' },
  { value: 1.512, label: 'Jun' },
  { value: 1.85, label: 'Jul' },
  { value: 0.85, label: 'Aug' },
  { value: 2.85, label: 'Sep' },
  { value: 5.85, label: 'Oct' },
  { value: 0.85, label: 'Nov' },
  { value: 0.85, label: 'Dec' }
];

const pieData = [
  { value: 25, color: '#3C8AFF' },
  { value: 10, color: '#ED3DD1' },
  { value: 15, color: '#FFEE54' },
  { value: 30, color: '#FF5166' },
  { value: 25, color: '#2BC844' },
];

const cardSkin = [
  {
    key: '1',
    color: ['#34B2EA', '#343DEA'],
  },
  {
    key: '2',
    color: ['#BBEA34', '#34EA51']
  },
  {
    key: '3',
    color: ['#EA9634', '#EA3434']
  },
]

export {
  weeklyData,
  monthlyData,
  yearlyData,
  dummyTransactions,
  dummyTransactions2,
  dummyCardWallet,
  miniDonutData1,
  miniDonutData2,
  miniDonutData3,
  miniDonutData4,
  miniDonutData5,
  pieData,
  cardSkin
}