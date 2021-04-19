import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href:
          'https://swap.faev.io/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xa2f0B35B93f39F19B010999aaa28Bd5A77eb40f4',
      },
      {
        label: 'Liquidity',
        href:
          'https://swap.faev.io/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0xa2f0B35B93f39F19B010999aaa28Bd5A77eb40f4',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Launchpad',
  //   icon: 'BushIcon',
  //   href: '/bush',
  // },
  // {
  //   label: 'Techrate Audit',
  //   icon: 'ShieldIcon',
  //   href: 'https://faev.io/files/audit_techrate.pdf',
  //   target: '_blank',
  // },
  // {
  //   label: 'Certik Audit (In-Progress)',
  //   icon: 'ShieldIcon',
  //   href: 'https://certik.org/projects/faev',
  //   target: '_blank',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     // {
  //     //   label: 'Token',
  //     //   href: 'https://doc.faev.io/tokennomics/faev-token',
  //     //   target: '_blank',
  //     // },
  //     // {
  //     //   label: 'Contracts',
  //     //   href: 'https://doc.faev.io/security/contracts',
  //     //   target: '_blank',
  //     // },
  //     // {
  //     //   label: 'Transparency',
  //     //   href: 'https://doc.faev.io/transparency/transparency',
  //     //   target: '_blank',
  //     // },
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0xa2f0B35B93f39F19B010999aaa28Bd5A77eb40f4',
  //       target: '_blank',
  //     },
  //     {
  //       label: 'Dapp.com',
  //       href: 'https://www.dapp.com/app/faev',
  //       target: '_blank',
  //     },
  //     {
  //       label: 'Dappradar.com',
  //       href: 'https://dappradar.com/binance-smart-chain/defi/faev',
  //       target: '_blank',
  //     },
  //     {
  //       label: 'Bsc.news',
  //       href: 'https://www.bsc.news/bsc-projects',
  //       target: '_blank',
  //     },
  //     // {
  //     //   label: 'CoinGecko',
  //     //   href: 'https://www.coingecko.com/en/coins/faevtoken',
  //     // },
  //     // {
  //     //   label: 'CoinMarketCap',
  //     //   href: 'https://coinmarketcap.com/currencies/faevtoken/',
  //     // },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/faevfinancebsc/',
        target: '_blank',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://doc.faev.io/',
      //   target: '_blank',
      // }, 
      {
        label: 'Medium',
        href: 'https://medium.com/@faevfinance',
        target: '_blank',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/faevfinanceann',
        target: '_blank',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/faevfinance',
        target: '_blank',
      },
    ],
  },
]

export default config
