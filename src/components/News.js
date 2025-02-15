import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
    static propTypes = {

    }
    articles= [
        {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Joel Khalili",
            "title": "The Science of Crypto Forensics Survives a Court Battle—for Now",
            "description": "A jury convicted Roman Sterlingov of money laundering this month. His defense team says it will appeal, saying the crypto-tracing technique at the heart of the case is “pseudoscience.”",
            "url": "https://www.wired.com/story/the-science-of-crypto-forensics-court-battle/",
            "urlToImage": "https://media.wired.com/photos/6603759fd3a75d0aa76d16ab/191:100/w_1280,c_limit/business_crypto_tracing_forensics_trial.jpg",
            "publishedAt": "2024-03-27T11:00:00Z",
            "content": "On March 12, Russian-Swedish national Roman Sterlingov was found guilty of money laundering conspiracy and other violations by a federal jury in Washington, DC, for having operated Bitcoin Fog, a ser… [+3654 chars]"
          },
          {
            "source": {
              "id": "bbc-news",
              "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Woman found with £2bn in Bitcoin convicted",
            "description": "Jian Wen, 42, from north London, was involved in converting Bitcoin into assets like luxury houses.",
            "url": "https://www.bbc.co.uk/news/uk-england-london-68620253",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17FE5/production/_132977289_wen2.jpg",
            "publishedAt": "2024-03-20T17:50:49Z",
            "content": "A former takeaway worker found with Bitcoin worth more than £2bn has been convicted at Southwark Crown Court of a crime linked to money laundering.\r\nJian Wen, 42, from Hendon in north London, was inv… [+2779 chars]"
          },
          {
            "source": {
              "id": "ars-technica",
              "name": "Ars Technica"
            },
            "author": "Ashley Belanger",
            "title": "Bitcoin price hits record $69K after SEC approvals fueled $7B in investments",
            "description": "SEC chair warns bitcoin is still \"volatile\" and linked to \"illicit activity.\"",
            "url": "https://arstechnica.com/tech-policy/2024/03/bitcoin-price-hits-record-69k-after-sec-approvals-fueled-7b-in-investments/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/03/GettyImages-1872368024-760x380.jpg",
            "publishedAt": "2024-03-05T19:07:13Z",
            "content": "20\r\nBitcoin's price hit a record high Tuesday, surging above $69,000 and notching past its prior peak price of $68,991.85 recorded in 2021.\r\nAfter bitcoin's price sunk in 2022 amid a cryptocurrency i… [+4343 chars]"
          },
          {
            "source": {
              "id": "ars-technica",
              "name": "Ars Technica"
            },
            "author": "Ashley Belanger",
            "title": "Bitcoin Fog operator convicted of laundering $400M in bitcoins on darknet",
            "description": "Roman Sterlingov will appeal, denouncing DOJ's crypto-tracing techniques.",
            "url": "https://arstechnica.com/tech-policy/2024/03/bitcoin-fog-operator-convicted-of-laundering-400m-in-bitcoins-on-darknet/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/03/GettyImages-1240726120-760x380.jpg",
            "publishedAt": "2024-03-13T20:34:08Z",
            "content": "19\r\nA US federal jury has convicted a dual Russian-Swedish national, Roman Sterlingov, for operating Bitcoin Fog, \"the longest-running bitcoin money laundering service on the darknet,\" the Department… [+5682 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "The Feds Are Reportedly Investigating Ethereum Foundation",
            "description": "The U.S. Securities and Exchange Commission (SEC) is investigating the Ethereum Foundation and companies doing business with the nonprofit, according to a new report from Fortune Wednesday. And that’s very bad news for crypto enthusiasts who were hopeful that…",
            "url": "https://gizmodo.com/sec-ethereum-price-bitcoin-investigation-crypto-etf-1851352576",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/b5adaa02e058acea54ab69fa505844cc.jpg",
            "publishedAt": "2024-03-20T18:15:00Z",
            "content": "The U.S. Securities and Exchange Commission (SEC) is investigating the Ethereum Foundation and companies doing business with the nonprofit, according to a new report from Fortune Wednesday. And thats… [+2397 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NPR"
            },
            "author": "David Gura",
            "title": "Bitcoin hits a record high. Here are 4 things to know about this spectacular rally",
            "description": "Bitcoin hit a record high, marking a remarkable comeback from a period known as the \"crypto winter.\" A big catalyst behind the gains has been the approval of new bitcoin investment funds.",
            "url": "https://www.npr.org/2024/03/05/1235865112/bitcoin-record-high-rally-crypto-sec-etf",
            "urlToImage": "https://media.npr.org/assets/img/2024/03/04/gettyimages-19217562081_wide-eba7c909ba5e0cb64e10c0f882f70414cf0a5847-s1400-c100.jpg",
            "publishedAt": "2024-03-05T18:38:02Z",
            "content": "Bitcoin hit a record high following a rally sparked by the Securities and Exchange Commission's approval of bitcoin exchange-traded funds.\r\nDan Kitwood/Getty Images\r\nBitcoin is trading at a new all-t… [+5142 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Ali Rees",
            "title": "Why did the Bitcoin price drop?",
            "description": "Despite reaching record highs of almost $74,000 on Thursday (March 14), the price of Bitcoin (BTC) dropped by 9% early… Continue reading Why did the Bitcoin price drop?\nThe post Why did the Bitcoin price drop? appeared first on ReadWrite.",
            "url": "https://readwrite.com/why-did-bitcoin-drop/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/a_chart_showing_bitcoin_rising_a_lot_then_droppi.jpg",
            "publishedAt": "2024-03-15T12:38:50Z",
            "content": "Despite reaching record highs of almost $74,000 on Thursday (March 14), the price of Bitcoin (BTC) dropped by 9% early on Friday (March 15) to $66, 885.\r\nMany cryptocurrency traders will likely sell … [+2274 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "World’s top pension fund eyes Bitcoin",
            "description": "Japan’s Government Pension Investment Fund (GPIF) is considering Bitcoin (BTC) as a potential investment diversification tool amidst economic and technological… Continue reading World’s top pension fund eyes Bitcoin\nThe post World’s top pension fund eyes Bitc…",
            "url": "https://readwrite.com/worlds-top-pension-fund-eyes-bitcoin/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/Japanese-investors.png",
            "publishedAt": "2024-03-19T14:13:51Z",
            "content": "Japan’s Government Pension Investment Fund (GPIF) is considering Bitcoin (BTC) as a potential investment diversification tool amidst economic and technological changes.\r\nAccording to a Mar. 19 announ… [+2534 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "prosen@insider.com (Phil Rosen)",
            "title": "Why crypto is surging back to all-time highs and shrugging off high interest rates",
            "description": "Bitcoin suffered during the Fed's tightening cycle, but is rallying once again as a supply-demand imbalance offsets rate pressures.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-explained-cryptocurrency-record-high-interest-rates-fed-2024-3",
            "urlToImage": "https://i.insider.com/65e603d790413ab8e1d8e646?width=1200&format=jpeg",
            "publishedAt": "2024-03-04T18:47:06Z",
            "content": "Bitcoin is in the midst of a prolonged rebound back to levels last seen when interest rates were near zero and pixelated artwork was regularly selling for millions. \r\nOn Monday, bitcoin spiked more t… [+3350 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Sarah Andersen,Teresa Zhang,Laila Maidan",
            "title": "How bitcoin halving affects crypto prices",
            "description": "With bitcoin hitting new record highs, the crypto world is bracing for the next \"halving,\" which occurs every four years.",
            "url": "https://www.businessinsider.com/bitcoin-halving-event-crypto-market-mining-etf-2024",
            "urlToImage": "https://i.insider.com/65f08f9890413ab8e1dbd6a4?width=1200&format=jpeg",
            "publishedAt": "2024-03-12T20:17:49Z",
            "content": "With bitcoin hitting new record highs, the crypto world is bracing for the next \"halving,\" which occurs every four years. We break down how it works and what it means for investors.Read the original … [+26 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Nasdaq’s Bitcoin ETFs break five-day outflow streak with $15.4M boost",
            "description": "On Monday, Nasdaq-traded spot Bitcoin (BTC) exchange-traded funds (ETFs) witnessed an inflow of $15.4 million, marking a positive shift after… Continue reading Nasdaq’s Bitcoin ETFs break five-day outflow streak with $15.4M boost\nThe post Nasdaq’s Bitcoin ETF…",
            "url": "https://readwrite.com/nasdaqs-bitcoin-etfs-break-five-day-outflow-streak-with-15-4m-boost/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/sRVLagdvTLSPSVK2Wb7dBA.png",
            "publishedAt": "2024-03-26T14:20:47Z",
            "content": "On Monday, Nasdaq-traded spot Bitcoin (BTC) exchange-traded funds (ETFs) witnessed an inflow of $15.4 million, marking a positive shift after five consecutive days of outflows, according to prelimina… [+1664 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Bitcoin flash crashes to $8,900 on BitMEX",
            "description": "Bitcoin (BTC) experienced a sudden drop to $8,900 on BitMEX, deviating significantly from its stable $60,000+ valuation on other exchanges.… Continue reading Bitcoin flash crashes to $8,900 on BitMEX\nThe post Bitcoin flash crashes to $8,900 on BitMEX appeared…",
            "url": "https://readwrite.com/bitcoin-flash-crashes-to-8900-on-bitmex/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/bitcoinflashcrash.jpg",
            "publishedAt": "2024-03-19T14:59:18Z",
            "content": "Bitcoin (BTC) experienced a sudden drop to $8,900 on BitMEX, deviating significantly from its stable $60,000+ valuation on other exchanges.\r\nOn a late Monday, Bitcoin experienced a swift downturn, dr… [+2214 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "El Salvador gained $84M from Bitcoin holdings",
            "description": "El Salvador’s Bitcoin (BTC) holdings have yielded an unrealized profit of $84 million, with the treasury’s value increasing by 69%… Continue reading El Salvador gained $84M from Bitcoin holdings\nThe post El Salvador gained $84M from Bitcoin holdings appeared …",
            "url": "https://readwrite.com/el-salvador-gained-84m-from-bitcoin-holdings/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/d464b5cf-a07f-47dd-aefa-a09ec69e9d66.webp",
            "publishedAt": "2024-03-12T13:23:25Z",
            "content": "El Salvador’s Bitcoin (BTC) holdings have yielded an unrealized profit of $84 million, with the treasury’s value increasing by 69% to over $206 million due to Bitcoin’s 250% appreciation over the pas… [+1899 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Coinbase CEO: Bitcoin could counteract US deficit",
            "description": "Coinbase CEO Brian Armstrong has advocated for Bitcoin (BTC) as a financial discipline tool, suggesting it could counteract United States… Continue reading Coinbase CEO: Bitcoin could counteract US deficit\nThe post Coinbase CEO: Bitcoin could counteract US de…",
            "url": "https://readwrite.com/coinbase-ceo-bitcoin-could-counteract-us-deficit/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/bJrwuE-PR2-ZleuzYPZ4rg.png",
            "publishedAt": "2024-03-14T08:56:30Z",
            "content": "Coinbase CEO Brian Armstrong has advocated for Bitcoin (BTC) as a financial discipline tool, suggesting it could counteract United States deficit spending and echo the fiscal restraint of the gold st… [+2615 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Bitcoin lifted over $71,000 as UK’s FCA approves crypto ETNs",
            "description": "During the Asian trading session on Monday, Bitcoin (BTC) soared past $71,000 for the first time in history. This surge… Continue reading Bitcoin lifted over $71,000 as UK’s FCA approves crypto ETNs\nThe post Bitcoin lifted over $71,000 as UK’s FCA approves cr…",
            "url": "https://readwrite.com/bitcoin-lifted-over-71000-as-uks-fca-approves-crypto-etns/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/yAqI9QlFReGdutRddL3VzQ.png",
            "publishedAt": "2024-03-11T17:46:21Z",
            "content": "During the Asian trading session on Monday, Bitcoin (BTC) soared past $71,000 for the first time in history.\r\nThis surge comes on the heels of the U.S.’s approval of spot Bitcoin spot exchange-traded… [+2051 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Bitcoin ETF daily inflows breaks $1B",
            "description": "The United States recently approved spot Bitcoin (BTC) exchange-traded funds (ETFs), which experienced another day of record-breaking inflows on March… Continue reading Bitcoin ETF daily inflows breaks $1B\nThe post Bitcoin ETF daily inflows breaks $1B appeare…",
            "url": "https://readwrite.com/bitcoin-etf-daily-inflows-breaks-1b/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/2at7RvbmQ9mXqGyaKKPWug.png",
            "publishedAt": "2024-03-13T16:58:49Z",
            "content": "The United States recently approved spot Bitcoin (BTC) exchange-traded funds (ETFs), which experienced another day of record-breaking inflows on March 12.\r\nData gathered from BitMEX Research shows th… [+1671 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "James Spillane",
            "title": "Bitcoin Price Prediction – Is The Biggest Crash Of All Time Coming?",
            "description": "The Bitcoin price has risen exponentially since the fourth financial quarter of 2023, up 163% from the start of October… Continue reading Bitcoin Price Prediction – Is The Biggest Crash Of All Time Coming?\nThe post Bitcoin Price Prediction – Is The Biggest Cr…",
            "url": "https://readwrite.com/bitcoin-price-prediction-is-the-biggest-crash-of-all-time-coming/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/bitcoin-price-crash.jpg",
            "publishedAt": "2024-03-20T16:48:25Z",
            "content": "The Bitcoin price has risen exponentially since the fourth financial quarter of 2023, up 163% from the start of October last year. \r\nIf the Bitcoin price closes the month of March over $61,157, it wo… [+4836 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Sam Shedden",
            "title": "Bitcoin endures biggest daily price drop since FTX crash",
            "description": "The price of Bitcoin (BTC) dropped drastically on Tuesday (Mar 19), when it registered its biggest single-day loss since the… Continue reading Bitcoin endures biggest daily price drop since FTX crash\nThe post Bitcoin endures biggest daily price drop since FTX…",
            "url": "https://readwrite.com/bitcoin-endures-biggest-daily-price-drop-since-ftx-crash/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/Bitcoinfall.png",
            "publishedAt": "2024-03-20T10:53:55Z",
            "content": "The price of Bitcoin (BTC) dropped drastically on Tuesday (Mar 19), when it registered its biggest single-day loss since the infamous collapse of the FTX exchange in November 2022.\r\nAccording to data… [+2252 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Grayscale’s Bitcoin ETF sees $359m daily outflow",
            "description": "The Grayscale Bitcoin Trust (GBTC) experienced significant withdrawals, with $359 million leaving the fund on Thursday (Mar 21). Those outflows… Continue reading Grayscale’s Bitcoin ETF sees $359m daily outflow\nThe post Grayscale’s Bitcoin ETF sees $359m dail…",
            "url": "https://readwrite.com/grayscales-bitcoin-etf-sees-359m-daily-outflow/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/3-Ndb1f1SiWyzebvNUMprg.jpg",
            "publishedAt": "2024-03-22T15:51:17Z",
            "content": "The Grayscale Bitcoin Trust (GBTC) experienced significant withdrawals, with $359 million leaving the fund on Thursday (Mar 21).\r\nThose outflows come on the heels of a week of heavy withdrawals, culm… [+3589 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Emily Stewart",
            "title": "Bitcoin will keep going boom and bust until we all die",
            "description": "Investors are stuck in a perpetual boom-and-bust cycle where they put money into bitcoin every few years, only to get burned by a price crash.",
            "url": "https://www.businessinsider.com/bitcoin-all-time-high-etfs-crypto-price-crash-boom-bust-2024-3",
            "urlToImage": "https://i.insider.com/65e78a5790413ab8e1d97e2e?width=1200&format=jpeg",
            "publishedAt": "2024-03-06T10:47:01Z",
            "content": "Bitcoin investors are stuck in a perpetual boom-and-bust cycle where they get back on the bitcoin horse every few years only to get burned.Getty Images; Alyssa Powell/BI\r\nBitcoin's been back on the u… [+7318 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Sophie Atkinson",
            "title": "Bitcoin price surges beyond $65,000 as records beckon",
            "description": "Bitcoin has reached a two-year high today (Monday 4 March) as it jumped to above $65,000 in the early hours […]\nThe post Bitcoin price surges beyond $65,000 as records beckon appeared first on ReadWrite.",
            "url": "https://readwrite.com/bitcoin-bounces-beyond-65000-as-records-beckon/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/pierre-borthiry-peiobty-vBCVcWUyvyM-unsplash-scaled.jpg",
            "publishedAt": "2024-03-04T11:42:29Z",
            "content": "Bitcoin has reached a two-year high today (Monday 4 March) as it jumped to above $65,000 in the early hours in Europe.\r\nMonday (Mar. 4) has seen the price rise to $65,537 which is the crypto assets h… [+1548 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Sophie Atkinson",
            "title": "Bitcoin and gold prices shatter previous highs",
            "description": "The ultra-modern and traditional markets coincided on Mar 5, as both Bitcoin and gold saw record-breaking highs occur on the […]\nThe post Bitcoin and gold prices shatter previous highs appeared first on ReadWrite.",
            "url": "https://readwrite.com/bitcoin-and-gold-prices-shatter-previous-highs/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/p2fOhXKdQPqdhr0tbXdxTQ.png",
            "publishedAt": "2024-03-06T16:23:20Z",
            "content": "The ultra-modern and traditional markets coincided on Mar 5, as both Bitcoin and gold saw record-breaking highs occur on the same day.\r\nIn the early hours in Europe on Monday 4 March, Bitcoin jumped … [+1785 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Sam Shedden",
            "title": "Coinbase crashed as Bitcoin soared to record high",
            "description": "Angry Coinbase users slammed the cryptocurrency trading app after it crashed again on Tuesday (Mar.5), the same day Bitcoin hit […]\nThe post Coinbase crashed as Bitcoin soared to record high appeared first on ReadWrite.",
            "url": "https://readwrite.com/coinbase-crashed-as-bitcoin-soared-to-record-high/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/NfPvWsHYT8e0fGymX9HfZQ.png",
            "publishedAt": "2024-03-06T10:44:24Z",
            "content": "Angry Coinbase users slammed the cryptocurrency trading app after it crashed again on Tuesday (Mar.5), the same day Bitcoin hit a new all-time high price of $69,000 after over two years of waiting.\r\n… [+2292 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "It's sentencing day for Sam Bankman-Fried",
            "description": "Bitcoin is booming, but a piece of its darker past is back in the spotlight.",
            "url": "https://www.businessinsider.com/insider-today-sam-bankman-fried-ftx-bitcoin-prison-sentencing-cryptocurrency-2024-3",
            "urlToImage": "https://i.insider.com/653aeece356802a56be57380?width=1200&format=jpeg",
            "publishedAt": "2024-03-28T14:20:11Z",
            "content": "Sam Bankman-Fried.Chelsea Jia Feng/Insider.\r\n\u003Cul\u003E\u003Cli\u003EThis post originally appeared in the Insider Today newsletter.\u003C/li\u003E\u003Cli\u003EYou can sign up for Business Insider's daily newsletter here.\u003C/li\u003E\u003C/ul\u003EHi! … [+6913 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Sam Shedden",
            "title": "This movie streaming platform is accepting Bitcoin",
            "description": "In a ground-breaking step for the streaming industry, Movies Plus has become the “first streaming platform” to allow subscribers to… Continue reading This movie streaming platform is accepting Bitcoin\nThe post This movie streaming platform is accepting Bitcoi…",
            "url": "https://readwrite.com/this-movie-streaming-platform-is-accepting-bitcoin/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/Bitcoinmovies.png",
            "publishedAt": "2024-03-15T11:56:21Z",
            "content": "In a ground-breaking step for the streaming industry, Movies Plus has become the “first streaming platform” to allow subscribers to pay for their service using Bitcoin.\r\nThe free movie streaming app … [+1433 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "George Glover",
            "title": "Bitcoin's been sliding ahead of the 'halving' — but crypto bulls aren't worried",
            "description": "Crypto bulls are confident that a looming \"halving\" event could power bitcoin to new highs, despite the coin's recent declines.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-halving-halvening-event-crypto-market-analysis-ethereum-solana-2024-3",
            "urlToImage": "https://i.insider.com/65fc056f2417f97b87cdf7ce?width=1200&format=jpeg",
            "publishedAt": "2024-03-21T10:15:17Z",
            "content": "Getty Images\r\n\u003Cul\u003E\n\u003Cli\u003EBitcoin hit a new record high last week, but has since lost ground.\u003C/li\u003E\n\u003Cli\u003EProfit-taking could be fueling the sell-off, which has also hit other tokens like ether and solana.… [+3285 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hipertextual"
            },
            "author": "Gabriel Erard",
            "title": "Bitcoin supera los 69.000 dólares y alcanza un nuevo máximo histórico",
            "description": "Poco más de 2 años después de su anterior All-Time High (ATH), Bitcoin ha alcanzado un nuevo valor máximo histórico. La criptomoneda ha ratificado su corrida alcista y este martes ha vuelto a superar los 69.000 dólares para, brevemente, establecer el registro…",
            "url": "http://hipertextual.com/2024/03/bitcoin-nuevo-maximo-historico",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/02/michael-fortsch-4GD_5kMZmY8-unsplash-scaled.jpg",
            "publishedAt": "2024-03-05T15:55:07Z",
            "content": "Poco más de 2 años después de su anterior All-Time High (ATH), Bitcoin ha alcanzado un nuevo valor máximo histórico. La criptomoneda ha ratificado su corrida alcista y este martes ha vuelto a superar… [+1422 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Craig Wright Is Not Bitcoin Creator Satoshi Nakamoto, Judge Declares",
            "description": "A judge in the UK High Court has declared that Australian computer scientist Craig Wright is not Satoshi Nakamoto, the creator of Bitcoin, marking the end of a years-long debate. From a report: \"The evidence is overwhelming,\" said Honourable Mr. Justice James…",
            "url": "https://slashdot.org/story/24/03/14/1428252/craig-wright-is-not-bitcoin-creator-satoshi-nakamoto-judge-declares",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2024-03-14T14:41:00Z",
            "content": "\"The evidence is overwhelming,\" said Honourable Mr. Justice James Mellor, delivering a surprise ruling at the close of the trial. \"Dr. Wright is not the author of the Bitcoin white paper. Dr. Wright … [+766 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Bitcoin 'Halving' Spurs Exodus of Old US Mining Computers Abroad",
            "description": "An anonymous reader shares a report: About 6,000 older Bitcoin mining machines in the US will soon be idled and sent to a warehouse in Colorado Springs where they'll be refreshed and resold to buyers overseas looking to profit from mining in lower-cost enviro…",
            "url": "https://it.slashdot.org/story/24/03/25/1645212/bitcoin-halving-spurs-exodus-of-old-us-mining-computers-abroad",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2024-03-25T18:41:00Z",
            "content": "About 6,000 older Bitcoin mining machines in the US will soon be idled and sent to a warehouse in Colorado Springs where they'll be refreshed and resold to buyers overseas looking to profit from mini… [+1424 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Matt Turner,Jordan Parker Erb",
            "title": "First it was warehouses taking over America. Now it's data centers.",
            "description": "In Sunday's edition of Insider Today: Bitcoin is here to stay, and the first wave of \"walking-dead\" venture firms is here.",
            "url": "https://www.businessinsider.com/insider-today-warehouses-data-centers-bitcoin-walking-dead-venture-firms-2024-3",
            "urlToImage": "https://i.insider.com/65edc1f0ce7f1785b2e84d57?width=1200&format=jpeg",
            "publishedAt": "2024-03-10T14:24:18Z",
            "content": "Alvarez/Getty Images\r\n\u003Cul\u003E\u003Cli\u003EThis post originally appeared in the Insider Today newsletter.\u003C/li\u003E\u003Cli\u003EYou can sign up for Business Insider's daily newsletter here.\u003C/li\u003E\u003C/ul\u003EWelcome back to our Sunday … [+4478 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Graeme Hanna",
            "title": "SEC delays decision on Bitcoin trading options for ETFs",
            "description": "The United States Securities and Exchange Commission has delayed its decision on whether to approve the trading of options on… Continue reading SEC delays decision on Bitcoin trading options for ETFs\nThe post SEC delays decision on Bitcoin trading options for…",
            "url": "https://readwrite.com/sec-delays-decision-on-bitcoin-trading-options-for-etfs/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/CCs5HZeeR6ix-lOB3K1HWA.png",
            "publishedAt": "2024-03-08T14:29:25Z",
            "content": "The United States Securities and Exchange Commission has delayed its decision on whether to approve the trading of options on exchange-traded funds (ETFs) that invest directly in Bitcoin.\r\nThe openin… [+2417 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "gglover@insider.com (George Glover)",
            "title": "Bitcoin is about to undergo another 'halving' event - here's what that means",
            "description": "Previous halvings have powered the cryptocurrency higher because they reduce the supply of new tokens in circulation.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-halving-event-cryptocurrency-new-all-time-high-halvening-explained-2024-3",
            "urlToImage": "https://i.insider.com/65e88f1290413ab8e1d9ae64?width=1200&format=jpeg",
            "publishedAt": "2024-03-09T09:31:01Z",
            "content": "2024 has been a big year for bitcoin.\r\nIn January, the Securities and Exchange Commission finally gave its seal of approval to 11 spot ETFs after months of speculation.\r\nThe following month, the toke… [+2725 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "George Glover",
            "title": "Bitcoin and gold are both on fire right now — but for very different reasons",
            "description": "The leading cryptocurrency and the precious metal are both on winning streaks, but analysts say their simultaneous rises are something of a coincidence.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-gold-record-highs-halving-crypto-etf-inflation-federal-reserve-2024-3",
            "urlToImage": "https://i.insider.com/65f0565fce7f1785b2e8c2a2?width=1200&format=jpeg",
            "publishedAt": "2024-03-13T09:35:57Z",
            "content": "Bitcoin is trading above $73,000.Business Insider\r\n\u003Cul\u003E\n\u003Cli\u003EBitcoin and gold have both been hitting new record highs.\u003C/li\u003E\n\u003Cli\u003EThe cryptocurrency is surging following SEC approval of spot ETFs and a … [+3951 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Anna Merlan",
            "title": "Robert F. Kennedy Jr. Targets a Generation of Politically Disaffected, Extremely Online Men",
            "description": "In a campaign that increasingly reflects a late night TikTok scroll, Robert F. Kennedy Jr. is gathering celebrities and influencers that appeal to a young male base.",
            "url": "https://www.wired.com/story/robert-f-kennedy-jr-aaron-rodgers-male-vote/",
            "urlToImage": "https://media.wired.com/photos/65f2ff1a9f86ee0288b77cdf/191:100/w_1280,c_limit/politics_rfk-jr-masculine-online-votes.jpg",
            "publishedAt": "2024-03-14T13:53:41Z",
            "content": "In his continued quest to become either the president of the United States or else a very interesting footnote to someone elses reelection, Robert F. Kennedy Jr. has enlisted a number of celebrities … [+3401 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Dhruv Mehrotra, Andrew Couts",
            "title": "Security News This Week: Russian Hackers Stole Microsoft Source Code—and the Attack Isn’t Over",
            "description": "Plus: An ex-Google engineer gets arrested for allegedly stealing trade secrets, hackers breach the top US cybersecurity agency, and X’s new feature exposes sensitive user data.",
            "url": "https://www.wired.com/story/russia-hackers-microsoft-source-code/",
            "urlToImage": "https://media.wired.com/photos/65eb4c36b7cb6be700970ab7/191:100/w_1280,c_limit/Security-Roundup-Microsoft-Russian-Hackers-GettyImages-1913821927.jpg",
            "publishedAt": "2024-03-09T14:00:00Z",
            "content": "For years, Registered Agents Inc.a secretive company whose business is setting up other businesseshas registered thousands of companies to people who appear to not exist. Multiple former employees te… [+3299 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Coinbase pitched Grayscale’s ETH ETF to the SEC, filings show",
            "description": "United States-based publicly traded cryptocurrency exchange Coinbase met with the Securities and Exchange Commission (SEC) to discuss the Ethereum (ETH)… Continue reading Coinbase pitched Grayscale’s ETH ETF to the SEC, filings show\nThe post Coinbase pitched …",
            "url": "https://readwrite.com/coinbase-pitched-grayscales-eth-etf-to-the-sec-filings-show/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/AluhS-stTquaBFNeakUuQA.png",
            "publishedAt": "2024-03-11T17:30:51Z",
            "content": "United States-based publicly traded cryptocurrency exchange Coinbase met with the Securities and Exchange Commission (SEC) to discuss the Ethereum (ETH) exchange-traded fund (ETF) proposed by asset m… [+2567 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Brian-Damien Morgan",
            "title": "Crypto: Coinbase Files to list DOGE, LTC and BCH",
            "description": "Coinbase Exchange has filed to list Litecoin (LTC), Bitcoin Cash (BCH), and Dogecoin futures trading with the Commodity Futures Trading… Continue reading Crypto: Coinbase Files to list DOGE, LTC and BCH\nThe post Crypto: Coinbase Files to list DOGE, LTC and BC…",
            "url": "https://readwrite.com/crypto-coinbase-files-to-list-doge-ltc-and-bch/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/pexels-karolina-grabowska-5980596-scaled.jpg",
            "publishedAt": "2024-03-21T17:54:09Z",
            "content": "Coinbase Exchange has filed to list Litecoin (LTC), Bitcoin Cash (BCH), and Dogecoin futures trading with the Commodity Futures Trading Commission (CFTC).\r\nThe CFTC has not yet responded officially t… [+2015 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NPR"
            },
            "author": "Alina Selyukh",
            "title": "Bad news, chocolate lovers: Cocoa prices have risen faster than bitcoin",
            "description": "It's been a wild historic ride: The price of cocoa topped the all-time record before Valentine's Day and has almost doubled since then, in time for Easter. The culprit is the weather.",
            "url": "https://www.npr.org/2024/03/29/1240947073/cocoa-price-chocolate-kitkat-hershey",
            "urlToImage": "https://media.npr.org/assets/img/2024/03/28/ap20101410900586_wide-052ddb8f70634cec7defa48f3c7c4a00afa50374-s1400-c100.jpg",
            "publishedAt": "2024-03-29T09:01:15Z",
            "content": "Chocolate Easter bunnies wait to be decorated at a shop in Belgium.\r\nVirginia Mayo/AP\r\nCocoa prices are going nuts: The bean is now more valuable than several precious metals and has surged faster th… [+5029 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "Crypto Miner, Pennsylvania Hit With Lawsuit Over Pollution From Bitcoin Mine",
            "description": "An anonymous reader quotes a report from Reuters: An environmental community group on Tuesday sued Stronghold Digital Mining claiming the company's bitcoin mine in northeastern Pennsylvania that burns waste coal and old tires for energy is polluting nearby co…",
            "url": "https://slashdot.org/story/24/03/27/0130229/crypto-miner-pennsylvania-hit-with-lawsuit-over-pollution-from-bitcoin-mine",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2024-03-27T03:30:00Z",
            "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Kenneth Niemeyer",
            "title": "Cocoa prices are rising so fast they are outpacing bitcoin — just in time for Easter",
            "description": "Cocoa prices are skyrocketing. They've doubled in 2024 so far, leading to a potential rise in Easter chocolate costs this year.",
            "url": "https://www.businessinsider.com/easter-chocolate-expensive-price-of-cocoa-bitcoin-2024-3",
            "urlToImage": "https://i.insider.com/65ff282316bde8d4ead18e1e?width=1200&format=jpeg",
            "publishedAt": "2024-03-23T19:47:55Z",
            "content": "Easter candy.Getty Images\r\n\u003Cul\u003E\u003Cli\u003ECocoa prices have nearly doubled in 2024 and are outpacing bitcoin in the last 12 months.\u003C/li\u003E\u003Cli\u003ERising cocoa costs may drive up Easter chocolate prices.\u003C/li\u003E\u003Cli\u003EH… [+1335 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Radek Zielinski",
            "title": "Biden’s tax plan sparks crypto industry backlash",
            "description": "President Joe Biden’s proposed 30% tax on crypto mining power faced criticism for potentially harming the industry and erasing investor… Continue reading Biden’s tax plan sparks crypto industry backlash\nThe post Biden’s tax plan sparks crypto industry backlas…",
            "url": "https://readwrite.com/bidens-tax-plan-sparks-crypto-industry-backlash/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/image-1.png",
            "publishedAt": "2024-03-18T15:23:31Z",
            "content": "President Joe Biden’s proposed 30% tax on crypto mining power faced criticism for potentially harming the industry and erasing investor wealth.\r\nThe resurgence in Bitcoin and other cryptocurrency val… [+2215 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Xataka.com"
            },
            "author": "Enrique Pérez",
            "title": "Qué sabemos del Bitcoin Halving 2024 y cómo puede afectar este esperado evento al precio del Bitcoin",
            "description": "Han pasado ya cuatro años. Y eso significa que ya está cerca el Bitcoin Halving 2024, un crucial evento que sucede de forma periódica y forma parte indispensable de la propia criptomoneda. Este mes de abril, en un día que todavía no está cerrado porque depend…",
            "url": "https://www.xataka.com/criptomonedas/que-sabemos-bitcoin-halving-2024-como-puede-afectar-este-esperado-evento-al-precio-bitcoin",
            "urlToImage": "https://i.blogs.es/6c4d4a/michael-fortsch-bitcoin/840_560.jpeg",
            "publishedAt": "2024-03-31T17:01:23Z",
            "content": "Han pasado ya cuatro años. Y eso significa que ya está cerca el Bitcoin Halving 2024, un crucial evento que sucede de forma periódica y forma parte indispensable de la propia criptomoneda. Este mes d… [+4230 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Xataka.com"
            },
            "author": "Enrique Pérez",
            "title": "Ni el Bitcoin en máximos es suficiente estable: una avalancha lo ha hundido fugazmente hasta los 8.900 dólares",
            "description": "El Bitcoin ha empezado el 2024 como un cohete. En estos momentos supera los 63.000 dólares, pero eso no quiere decir que todas las ventas se realicen siempre a este precio. El precio del Bitcoin va cambiando constantemente y es posible ver operaciones donde s…",
            "url": "https://www.xataka.com/criptomonedas/bitcoin-maximos-suficiente-estable-avalancha-ha-hundido-fugazmente-8-900-dolares",
            "urlToImage": "https://i.blogs.es/232bcd/bitcoin-caida/840_560.jpeg",
            "publishedAt": "2024-03-20T16:31:15Z",
            "content": "El Bitcoin ha empezado el 2024 como un cohete. En estos momentos supera los 63.000 dólares, pero eso no quiere decir que todas las ventas se realicen siempre a este precio. El precio del Bitcoin va c… [+3569 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Xataka.com"
            },
            "author": "Javier Pastor",
            "title": "Bitcoin hace historia y rompe la barrera de los 69.000 dólares. La pregunta es cuál es su techo",
            "description": "El 10 de noviembre de 2021 el bitcoin alcanzó el que había sido su valor más alto hasta entonces: 69.040,10 dólares. La fiebre por las criptomonedas —y los NFTs— se situó entonces en máximos históricos para luego caer de forma prolongada a lo largo de 2022 y …",
            "url": "https://www.xataka.com/criptomonedas/bitcoin-hace-historia-y-rompe-la-barrera-de-los-69-000-dolares-la-pregunta-es-cual-es-su-techo",
            "urlToImage": "https://i.blogs.es/647b4b/btc1/840_560.jpeg",
            "publishedAt": "2024-03-05T18:30:23Z",
            "content": "El 10 de noviembre de 2021 el bitcoin alcanzó el que había sido su valor más alto hasta entonces: 69.040,10 dólares. La fiebre por las criptomonedas y los NFTs se situó entonces en máximos históricos… [+3083 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Petar Jovanović",
            "title": "Top Crypto Gainers to Watch this Week – Dogecoin, Aptos, Toncoin and New Altcoin ICOs",
            "description": "The crypto market experienced a correction last week, with major cryptocurrencies like Bitcoin and Ethereum declining by 1.7% and 4%… Continue reading Top Crypto Gainers to Watch this Week – Dogecoin, Aptos, Toncoin and New Altcoin ICOs\nThe post Top Crypto Ga…",
            "url": "https://readwrite.com/top-crypto-gainers-to-watch-this-week-dogecoin-aptos-toncoin-new-altcoin-icos/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/dogecoin-top-crypto-gainer.jpg",
            "publishedAt": "2024-03-26T07:05:35Z",
            "content": "The crypto market experienced a correction last week, with major cryptocurrencies like Bitcoin and Ethereum declining by 1.7% and 4% respectively. \r\nWhile the weekend was relatively flat, one meme co… [+4059 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Xataka.com"
            },
            "author": "Rubén Andrés",
            "title": "Hay 22 milmillonarios por las criptomonedas en el mundo. Solo seis de ellos lo son por invertir en bitcoin",
            "description": "Los datos del informe de riqueza global 2023 de UBS y Credit Suisse apuntan a que en el mundo existen unos 59,4 millones de personas con un capital valorado en más de un millón de dólares. Con la llegada de las criptomonedas, la población de millonarios tambi…",
            "url": "https://www.xataka.com/criptomonedas/hay-22-milmillonarios-criptomonedas-mundo-solo-6-ellos-bitcoin-que-esta-batiendo-records",
            "urlToImage": "https://i.blogs.es/faf5db/pexels-crypto-crow-1447418/840_560.jpeg",
            "publishedAt": "2024-03-06T10:31:41Z",
            "content": "Los datos del informe de riqueza global 2023 de UBS y Credit Suisse apuntan a que en el mundo existen unos 59,4 millones de personas con un capital valorado en más de un millón de dólares. Con la lle… [+3623 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Stackexchange.com"
            },
            "author": null,
            "title": "Is MEV Possible on Bitcoin?",
            "description": "Miner Extractable Value (MEV) is a big topic in the life of ethereum users, and it creates an additional revenue source for the miners.\nIs MEV possible on the bitcoin blockchain as well? And if yes...",
            "url": "https://ethereum.stackexchange.com/questions/119253/is-mev-possible-on-bitcoin",
            "urlToImage": "https://cdn.sstatic.net/Sites/ethereum/Img/apple-touch-icon@2.png?v=fa4301ca0e6d",
            "publishedAt": "2024-04-02T13:15:26Z",
            "content": "Yes, it's just less prominent in Bitcoin as there is less complexity involved with the transactions, but it is possible.\r\nIf you stick to the definition of MEV from the Ethereum foundation :\r\nMaximal… [+1182 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Xataka.com"
            },
            "author": "Javier Marquez",
            "title": "Craig Wright lleva años diciendo ser Satoshi Nakamoto: la Justicia pone fin al debate: no es el creador de Bitcoin",
            "description": "Craig Wright no es ‘Satoshi Nakamoto’. O al menos esto es lo que ha dictaminado un Tribunal Superior de Londres. El juez James Mellor ha llegado a la conclusión de que el emprendedor australiano que lleva aproximadamente una década autoproclamándose creador d…",
            "url": "https://www.xataka.com/criptomonedas/craig-wright-lleva-anos-diciendo-ser-satoshi-nakamoto-justicia-pone-fin-al-debate-no-creador-bitcoin",
            "urlToImage": "https://i.blogs.es/a238a4/craig-1wright-1/840_560.jpeg",
            "publishedAt": "2024-03-16T00:35:07Z",
            "content": "Craig Wright no es Satoshi Nakamoto. O al menos esto es lo que ha dictaminado un Tribunal Superior de Londres. El juez James Mellor ha llegado a la conclusión de que el emprendedor australiano que ll… [+2692 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Suswati Basu",
            "title": "Rhysida ransomware group claims MarineMax yacht dealer attack",
            "description": "US luxury yacht dealer MarineMax was reportedly attacked by the Rhysida ransomware group earlier this month. The company, which experienced… Continue reading Rhysida ransomware group claims MarineMax yacht dealer attack\nThe post Rhysida ransomware group claim…",
            "url": "https://readwrite.com/rhysida-ransomware-group-claims-marinemax-yacht-dealer-attack/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/Rhysida-ransomware-group-claims-MarineMax-yacht-dealer-attack.png",
            "publishedAt": "2024-03-21T18:39:30Z",
            "content": "US luxury yacht dealer MarineMax was reportedly attacked by the Rhysida ransomware group earlier this month.\r\nThe company, which experienced record revenue this year, filed a report on March 10 with … [+2375 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Thenewstack.io"
            },
            "author": "Steven J. Vaughan-Nichols",
            "title": "Python Users: BIPClip Is After Your Bitcoin Wallet, via PyPI",
            "description": "Python Package Index (PyPI) packages found hiding Bitcoin wallet hacking tools.",
            "url": "https://thenewstack.io/python-users-bibclip-is-after-your-bitcoin-wallet-via-pypi/",
            "urlToImage": "https://cdn.thenewstack.io/media/2024/03/ce67c3b9-wallet-1010601_1280.jpg",
            "publishedAt": "2024-03-17T16:21:17Z",
            "content": "Python Users: BIPClip Is After Your Bitcoin Wallet, Via PyPI"
          },
          {
            "source": {
              "id": null,
              "name": "heise online"
            },
            "author": "Mark Mantel",
            "title": "Bitcoin ist so viel wert wie noch nie",
            "description": "Zum ersten Mal in seiner Geschichte hat die Kryptowährung Bitcoin die 60.000-Euro-Marke genommen.",
            "url": "https://www.heise.de/news/Bitcoin-ist-so-viel-wert-wie-noch-nie-9645169.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/1/2/4/3/shutterstock_1841762269-1efce39393fb55d5.jpg",
            "publishedAt": "2024-03-04T10:51:00Z",
            "content": "Ein Bitcoin kostet momentan um die 60.000 Euro am Montagmorgen mal ein paar Hundert Euro mehr, mal ein paar Hundert Euro weniger. Damit übertrifft die Kryptowährung ihr bisheriges Allzeithoch vom 10.… [+1947 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Unchainedcrypto.com"
            },
            "author": "Kyle Torpey",
            "title": "UK Judge Declares Craig Wright Is Not Bitcoin Creator Satoshi Nakamoto",
            "description": "The presumed final ruling comes eight years after Wright’s initial claims of being the person behind the Satoshi Nakamoto pseudonym, and has implications for a number of other cases involving Wright.",
            "url": "https://unchainedcrypto.com/uk-judge-declares-craig-wright-is-not-bitcoin-creator-satoshi-nakamoto/",
            "urlToImage": "https://unchainedcrypto.com/wp-content/uploads/2024/03/shutterstock_2424042441-scaled.jpg",
            "publishedAt": "2024-03-14T16:22:12Z",
            "content": "The presumed final ruling comes eight years after Wrights initial claims of being the person behind the Satoshi Nakamoto pseudonym, and has implications for a number of other cases involving Wright.A… [+3416 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "MarketWatch"
            },
            "author": "Chris Brodersen",
            "title": "What you need to know about taxes on bitcoin ETFs before you buy or sell",
            "description": "Retail investors and financial advisers have much to learn about this new investment.",
            "url": "https://www.marketwatch.com/story/what-youneed-to-know-about-taxes-on-bitcoin-etfs-before-you-buy-or-sell-b51afbf8",
            "urlToImage": "https://images.mktw.net/im-97181825/social",
            "publishedAt": "2024-03-04T16:17:00Z",
            "content": "For all its opportunities, bitcoin \r\n BTCUSD,\r\n +6.00%\r\nhas posed a number of challenges for investors. On top of the inherent difficulties of understanding blockchain terminology and the underlying … [+5380 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "MarketWatch"
            },
            "author": "Isabel Wang",
            "title": "Did bitcoin ETF frenzy drive the crypto to a record? How the experts see it.",
            "description": "Bitcoin’s momentum was fueled in part by excitement over the debut of spot bitcoin ETFs, but it raises concerns over whether the initial rising demand for the funds is robust enough to keep bitcoin afloat.",
            "url": "https://www.marketwatch.com/story/did-bitcoin-etf-frenzy-drive-the-crypto-to-a-record-how-the-experts-see-it-ba738798",
            "urlToImage": "https://images.mktw.net/im-337931/social",
            "publishedAt": "2024-03-07T22:36:00Z",
            "content": "Hello! This is MarketWatch reporter Isabel Wang bringing you this weeks ETF Wrap. In this weeks edition, we look at spot bitcoin ETFs, and the role these first-of-a-kind funds are playing in the rall… [+258 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "MarketWatch"
            },
            "author": "Tomi Kilgore",
            "title": "MicroStrategy stock soars 24% — tops $1,300 for first time in 24 years as bitcoin soars",
            "description": "The software company and bitcoin play adds nearly $11 billion in market cap in 6 days.",
            "url": "https://www.marketwatch.com/story/microstrategy-stock-soars-24-tops-1-300-for-first-time-in-24-years-as-bitcoin-soars-0846400b",
            "urlToImage": "https://images.mktw.net/im-400000/social",
            "publishedAt": "2024-03-04T20:34:00Z",
            "content": "Shares of MicroStrategy Inc. soared toward a 24-year high on Monday, fueled by the recent rapid run up in bitcoin prices to near-record levels.\r\nA business-analytics software company at heart, invest… [+179 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Opencrypto.org"
            },
            "author": "Crypto Open Patent Alliance",
            "title": "Craig Wright Is Not Satoshi Nakamoto",
            "description": "Today, Justice Mellor found that the evidence in the COPA v Wright trial was “overwhelming,” ruling that: Dr Wright is not the author of the Bitcoin White Paper. Dr Wright is not the person who adopted or operated under the pseudonym Satoshi Nakamoto from 200…",
            "url": "https://www.opencrypto.org/2024-03-14-Justice-Mellor-Rules-That-Craig-Wright-Is-Not-Satoshi-Nakamoto-in-COPA-v-Wright-Trial/",
            "urlToImage": null,
            "publishedAt": "2024-03-14T22:08:37Z",
            "content": "Today, Justice Mellor found that the evidence in the COPA v Wright trial was overwhelming, ruling that:\r\n\u003Col\u003E\u003Cli\u003EDr Wright is not the author of the Bitcoin White Paper.\u003C/li\u003E\u003Cli\u003EDr Wright is not the p… [+898 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Xataka.com"
            },
            "author": "Javier Marquez",
            "title": "Los mineros de Bitcoin de EEUU tienen un montón de equipos obsoletos. Y los están enviando a África y Sudamérica",
            "description": "Estamos a las puertas de un nuevo ‘halving’ de Bitcoin, un evento que ocurre aproximadamente cada cuatro años en el que se reduce a la mitad la recompensa que los participantes de la red reciben por cada bloque minado. Esto puede traducirse en menores benefic…",
            "url": "https://www.xataka.com/criptomonedas/mineros-bitcoin-eeuu-tienen-monton-equipos-obsoletos-estan-enviando-a-africa-latinoamerica",
            "urlToImage": "https://i.blogs.es/41962e/minado-criptomonedas-2/840_560.jpeg",
            "publishedAt": "2024-03-25T22:01:48Z",
            "content": "Estamos a las puertas de un nuevo halving de Bitcoin, un evento que ocurre aproximadamente cada cuatro años en el que se reduce a la mitad la recompensa que los participantes de la red reciben por ca… [+3104 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "heise online"
            },
            "author": "Martin Holland",
            "title": "Gericht in London: Craig Wright ist nicht der Bitcoin-Erfinder Satoshi Nakamoto",
            "description": "Vor dem High Court of England and Wales ging es einmal mehr um die Frage, ob Craig Wright den Bitcoin erfunden hat. Das Urteil kam jetzt überraschend schnell.",
            "url": "https://www.heise.de/news/Gericht-in-London-Craig-Wright-ist-nicht-der-Bitcoin-Erfinder-Satoshi-Nakamoto-9655362.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/6/8/0/7/shutterstock_1937129161-91f75b37827ffe38.jpg",
            "publishedAt": "2024-03-14T16:23:00Z",
            "content": "Der in Großbritannien lebende australische Computerwissenschaftler Craig Wright ist nicht der Erfinder des Bitcoins. Das hat der High Court of England and Wales nach einem fünfwöchigen Prozess ungewö… [+2042 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "MarketWatch"
            },
            "author": "Frances Yue",
            "title": "Bitcoin surges above $69,000 to record high, entering ‘untested waters’",
            "description": "Bitcoin’s rally took it to a fresh record high on Tuesday, its first since November 2021",
            "url": "https://www.marketwatch.com/story/bitcoin-surges-above-69-000-to-record-high-entering-untested-waters-9be2511f",
            "urlToImage": "https://images.mktw.net/im-07932583/social",
            "publishedAt": "2024-03-05T15:13:00Z",
            "content": "Bitcoin hit a record high on Tuesday, with the cryptocurrency surpassing $69,000, marking a dramatic comeback for digital assets following a tumultuous stretch of more than two years.The rally saw bi… [+2225 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Ali Rees",
            "title": "Sam Bankman-Fried to be sentenced to jail time",
            "description": "Sam Bankman-Fried, owner of the bankrupt crypto exchange FTX, will receive sentencing in New York today (March 28) after his… Continue reading Sam Bankman-Fried to be sentenced to jail time\nThe post Sam Bankman-Fried to be sentenced to jail time appeared firs…",
            "url": "https://readwrite.com/sam-bankman-fried-to-be-sentenced-to-jail-time/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/a-white-man-with-short-dark-hair-seen-from-behind-5NbqRdRbQbKyba3HGrOj1g-UaCmXv-IQoS7tOe87Fcs2w-.jpeg",
            "publishedAt": "2024-03-28T11:26:05Z",
            "content": "Sam Bankman-Fried, owner of the bankrupt crypto exchange FTX, will receive sentencing in New York today (March 28) after his convictions for fraud and conspiracy last year. District Judge Lewis Kapla… [+2984 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Atlantic"
            },
            "author": "Gilad Edelman",
            "title": "Bitcoin’s Biggest Weakness May Be Its Greatest Strength",
            "description": "The utter pointlessness of crypto helps explain its resurgence.",
            "url": "https://www.theatlantic.com/ideas/archive/2024/03/crypto-bitcoin-market-strength/677643/?utm_source=feed",
            "urlToImage": null,
            "publishedAt": "2024-03-05T16:50:00Z",
            "content": "Can someone remind crypto that it’s supposed to be dead? The digital asset market, widely written off as a bubble that burst two years ago, is having one of its wildest rallies ever. The price of bit… [+5888 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Genbeta.com"
            },
            "author": "Antonio Vallejo",
            "title": "Estos bitcoins fueron minados en 2010 casi gratis. Acaban de venderlos por 69 millones de dólares",
            "description": "Ha vuelto a suceder. Desde noviembre de 2021 no habíamos visto un pico histórico en el bitcoin hasta que, esta misma madrugada, la criptomoneda volvía a alcanzar su máximo histórico con un valor de más de 69.000 dólares. Tras unos años de sequía, en el último…",
            "url": "https://www.genbeta.com/actualidad/estos-bitcoins-fueron-minados-2010-casi-gratis-acaban-venderlos-69-millones-dolares",
            "urlToImage": "https://i.blogs.es/096570/kanchanara-lta5b8mpytw-unsplash/840_560.jpeg",
            "publishedAt": "2024-03-06T11:25:14Z",
            "content": "Ha vuelto a suceder. Desde noviembre de 2021 no habíamos visto un pico histórico en el bitcoin hasta que, esta misma madrugada, la criptomoneda volvía a alcanzar su máximo histórico con un valor de m… [+2668 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Golem.de"
            },
            "author": "Stefan Mey",
            "title": "Bitcoin-Governance: Wer hat die Macht beim Bitcoin?",
            "description": "Die erste funktionsfähige Kryptowährung ist ein Multimilliarden-Kosmos und gleichzeitig ein freies Softwareprojekt mit minimalistischen Strukturen. Eine Analyse von Stefan Mey (Wer hat das Sagen bei freien Projekten, Open Source)",
            "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fbitcoin-governance-wer-hat-die-macht-beim-bitcoin-2403-182591.html&referer=https%3A%2F%2Ft.co%2Ff2de8a3fbe",
            "urlToImage": null,
            "publishedAt": "2024-03-11T08:30:02Z",
            "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "heise online"
            },
            "author": "Alexander Spier",
            "title": "heise+ | Kryptocoins verkaufen: Wie Sie Kryptowährungen zu Geld machen können",
            "description": "Die Kurse für Bitcoin & Co. auf Höhenflug: Ein guter Zeitpunkt die eigenen Coins zu verkaufen. Das gilt es dabei zu beachten.​",
            "url": "https://www.heise.de/ratgeber/Kryptocoins-verkaufen-Wie-Sie-Kryptowaehrungen-zu-Geld-machen-koennen-9658516.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/8/5/3/9/shutterstock_1916262404-b7c59be85e1ebe55.jpg",
            "publishedAt": "2024-03-20T06:30:00Z",
            "content": "Inhaltsverzeichnis\r\nDie Kurse von Kryptowährungen erreichen aktuell neue Hochs, nach einer langen Phase der Tränen. Der richtige Moment, sich von dem riskanten Investment mit Gewinn zu verabschieden.… [+1711 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The New Yorker"
            },
            "author": "Elizabeth Kolbert",
            "title": "The Obscene Energy Demands of A.I.",
            "description": "Elizabeth Kolbert on how the advent of artificial intelligence is fuelling a spike in demand for energy consumption.",
            "url": "https://www.newyorker.com/news/daily-comment/the-obscene-energy-demands-of-ai",
            "urlToImage": "https://media.newyorker.com/photos/65ea3f8487f529d1a2a61317/16:9/w_1280,c_limit/Kolbert_AI_Power.jpg",
            "publishedAt": "2024-03-09T11:00:00Z",
            "content": "In 2016, Alex de Vries read somewhere that a single bitcoin transaction consumes as much energy as the average American household uses in a day. At the time, de Vries, who is Dutch, was working at a … [+6050 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (William Gallagher)",
            "title": "Bitcoin app accused of stealing $120,000 in another App Store failure",
            "description": "Reports of another fake bitcoin wallet in the App Store are claiming that \"Leather Wallet & Hiro Bitcoin\" took over $120,000 in a single fraudulent transaction.The App Store is meant to be safe from scam appsApple claims the EU is weakening App Store security…",
            "url": "https://appleinsider.com/articles/24/03/11/bitcoin-app-accused-of-stealing-120000-in-another-app-store-failure",
            "urlToImage": "https://photos5.appleinsider.com/gallery/52114-103624-The-App-Store-logo-on-iOS----resized-xl.jpg",
            "publishedAt": "2024-03-11T13:17:22Z",
            "content": "The App Store is meant to be safe from scam apps\r\nReports of another fake bitcoin wallet in the App Store are claiming that \"Leather Wallet &amp; Hiro Bitcoin\" took over $120,000 in a single fraudule… [+1443 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Theregister.com"
            },
            "author": "Connor Jones",
            "title": "Cryptocurrency laundryman gets hung out to dry",
            "description": "Bitcoin Fog washed hundreds of millions for criminals\nThe operator of the world's longest-running Bitcoin money laundering service faces a 50-year prison sentence after being found guilty in a US court.…",
            "url": "https://www.theregister.com/2024/03/13/bitcoin_fog_conviction/",
            "urlToImage": "https://regmedia.co.uk/2023/09/06/bitcoin_shutterstock.jpg",
            "publishedAt": "2024-03-13T16:45:07Z",
            "content": "The operator of the world's longest-running Bitcoin money laundering service faces a 50-year prison sentence after being found guilty in a US court.\r\nRoman Sterlingov, 35, operated Bitcoin Fog, a ser… [+4393 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Golem.de"
            },
            "author": "Tobias Költzsch",
            "title": "Bitcoin: Craig Wright ist laut Gericht nicht Satoshi Nakamoto",
            "description": "Der Australier Craig Wright behauptet seit Jahren, er sei der Erfinder des Bitcoin. Ein britisches Gericht stellt nun fest: Nein, ist er nicht. (Bitcoin, Wirtschaft)",
            "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fbitcoin-craig-wright-ist-laut-gericht-nicht-satoshi-nakamoto-2403-183207.html&referer=https%3A%2F%2Ft.co%2F400741fef5",
            "urlToImage": null,
            "publishedAt": "2024-03-14T15:45:02Z",
            "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Jacob Shamsian",
            "title": "Judge thrashes Sam Bankman-Fried for claiming FTX customers didn't lose any money before handing down 25-year sentence",
            "description": "SBF's legal team claimed FTX customers suffered \"zero\" losses when the crypto exchange collapsed. The judge rejected the argument \"entirely.\"",
            "url": "https://www.businessinsider.com/sam-bankman-fried-sentencing-customer-losses-judge-2024-3",
            "urlToImage": "https://i.insider.com/6603311a1caec1275a69b963?width=1200&format=jpeg",
            "publishedAt": "2024-03-28T17:26:00Z",
            "content": "Sam Bankman-Fried, the jailed founder of bankrupt cryptocurrency exchange FTX, sits with his lawyers Torrey Young and Marc Mukasey.REUTERS/Jane Rosenberg\r\n\u003Cul\u003E\u003Cli\u003ESam Bankman-Fried's lawyers claimed … [+6035 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "MarketWatch"
            },
            "author": "Tomi Kilgore",
            "title": "MicroStrategy’s stock pulls back after plan to offer debt to buy more bitcoin",
            "description": "MicroStrategy’s stock fell Tuesday, as the business-analytics software company and bitcoin play’s plan to offer convertible debt gave investors a reason to take a breather following the stock’s recent sprint to a 24-year high.",
            "url": "https://www.marketwatch.com/story/microstrategys-stock-pulls-back-after-plan-to-offer-debt-to-buy-more-bitcoin-4f8a1838",
            "urlToImage": "https://images.mktw.net/im-94974111/social",
            "publishedAt": "2024-03-05T13:15:00Z",
            "content": "Shares of MicroStrategy Inc. fell Tuesday, as the business-analytics software company and bitcoin plays plan to offer convertible debt gave investors a reason to take a breather following the stocks … [+1859 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "George Glover",
            "title": "Ripple Labs accuses the SEC of trying to 'punish and intimidate' by seeking $2 billion in penalties from XRP developer",
            "description": "The SEC is trying to \"punish and intimidate\" XRP developer Ripple Labs by seeking penalties worth $2 billion, its chief legal officer claimed.",
            "url": "https://www.businessinsider.com/xrp-price-today-ripple-crypto-bitcoin-sec-gary-gensler-2024-3",
            "urlToImage": "https://i.insider.com/6602b4f11caec1275a6959f2?width=1200&format=jpeg",
            "publishedAt": "2024-03-26T13:36:01Z",
            "content": "Ripple Labs is behind the XRP cryptocurrency.Jack Taylor/Getty Images\r\n\u003Cul\u003E\u003Cli\u003EThe SEC is seeking fines and penalties worth $2 billion from Ripple Labs, its legal chief said.\u003C/li\u003E\u003Cli\u003EStuart Alderoty … [+2324 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Paul McNally",
            "title": "Game prototypes and code found on discarded hard drive, now it’s obviously been uploaded to the Internet",
            "description": "Even novice computer users know to not just throw a hard drive in the trash. Even if all it contains […]\nThe post Game prototypes and code found on discarded hard drive, now it’s obviously been uploaded to the Internet appeared first on ReadWrite.",
            "url": "https://readwrite.com/game-prototypes-and-code-found-on-discarded-hard-drive-now-its-obviously-been-uploaded-to-the-internet/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/A_striking_3D_rendering_of_a_cyberpunk_hacker_d.jpg",
            "publishedAt": "2024-03-04T12:52:54Z",
            "content": "Even novice computer users know to not just throw a hard drive in the trash. Even if all it contains is photos of your cat and a few old dodgy mp3s downloaded from Napster back in the day, you just n… [+1993 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CNET"
            },
            "author": "Ian Sherr",
            "title": "Bitcoin Jumps to New All-Time High: What You Need to Know About Crypto - CNET",
            "description": "The cryptocurrency industry is making headlines after multibillion-dollar fraud scandals and years of yo-yoing prices. Will this time be different?",
            "url": "https://www.cnet.com/personal-finance/bitcoin-jumps-to-new-all-time-highs-what-you-need-to-know-about-crypto/",
            "urlToImage": "https://www.cnet.com/a/img/resize/cac45764738b5a0a7b0ddfaa55f66e0caa5af384/hub/2022/04/25/349bd7ef-ef81-49d4-bc74-b12b1077aa01/bitcoin-logo-2022-772.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-03-06T20:45:00Z",
            "content": "Bitcoin, the cryptocurrency synonymous with startup riches, valuation roller coasters and massive fraud, hit a new all-time high on Tuesday — above $69,000 — beating a previous peak from November 202… [+4318 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Microsiervos.com"
            },
            "author": "alvy@microsiervos.com (Alvy)",
            "title": "La dominancia de las criptodivisas en una imagen: Bitcoin (BTC), Ethereum (ETH) y decenas más",
            "description": "Esta interesante gráfica de Coin360.com muestra cómo se reparte el mercado global de las criptodivisas en función de su capitalización.\n\nEl dato está indicado como «dominancia» y un porcentaje: el Bitcoin (abreviado, BTC) tiene el 51% del mercado ahora mismo;…",
            "url": "https://www.microsiervos.com/archivo/economia/dominancia-criptodivisas-bitcoin-btc-ethereum-eth.html",
            "urlToImage": "https://img.microsiervos.com/images2024/Coin360-crypto-dominance.webp",
            "publishedAt": "2024-03-27T22:00:09Z",
            "content": "Por @Alvy 27 de Marzo de 2024\r\nEsta interesante gráfica de Coin360.com muestra cómo se reparte el mercado global de las criptodivisas en función de su capitalización.\r\nEl dato está indicado como «dom… [+2011 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Jacob Shamsian",
            "title": "FTX's victims may get all their money back. The judge sentencing Sam Bankman-Fried might not care.",
            "description": "As Sam Bankman-Fried's sentencing date approaches, the judge is being asked to consider billions of dollars in losses and his claimed neurodivergence.",
            "url": "https://www.businessinsider.com/sbf-sentencing-ftx-customers-get-money-back-should-it-matter-2024-3",
            "urlToImage": "https://i.insider.com/65fb30c12417f97b87cdd31f?width=1200&format=jpeg",
            "publishedAt": "2024-03-24T11:00:02Z",
            "content": "Sam Bankman-Fried is scheduled to be sentenced on Thursday.Chelsea Jia Feng/Insider\r\n\u003Cul\u003E\u003Cli\u003ESam Bankman-Fried bilked FTX customers out of over $8 billion, according to prosecutors.\u003C/li\u003E\u003Cli\u003EFTX bankr… [+10737 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Graeme Hanna",
            "title": "Coinbase report urges “caution” on AI coins despite boom",
            "description": "An analyst has urged caution on the artificial intelligence (AI) token market, warning the recent surge in prices could be… Continue reading Coinbase report urges “caution” on AI coins despite boom\nThe post Coinbase report urges “caution” on AI coins despite …",
            "url": "https://readwrite.com/coinbase-report-urges-caution-on-ai-coins-despite-boom/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/O8oXjuTwSPawcXFRVqmuew.png",
            "publishedAt": "2024-03-08T17:05:47Z",
            "content": "An analyst has urged caution on the artificial intelligence (AI) token market, warning the recent surge in prices could be fuelled more by hype, rather than its actual value.\r\nIn a report compiled by… [+2137 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Xataka.com"
            },
            "author": "Jose García",
            "title": "Desmantelan una mina de criptomonedas ilegal en Ripollet. Había defraudado 4,5 millones de euros en electricidad",
            "description": "Los Mossos d'Esquadra y la Guàrdia Civil de Tarragona han desmantelado una instalación de minería de criptomonedas ilegal en Ripollet (Barcelona). Según han informado a través de un comunicado, se ha detenido al principal investigado y se han intervenido 85 o…",
            "url": "https://www.xataka.com/criptomonedas/desmantelan-mina-criptomonedas-ilegal-ripollet-habia-defraudado-4-5-millones-euros-electricidad",
            "urlToImage": "https://i.blogs.es/662d90/mossos/840_560.jpeg",
            "publishedAt": "2024-03-04T12:01:57Z",
            "content": "Los Mossos d'Esquadra y la Guàrdia Civil de Tarragona han desmantelado una instalación de minería de criptomonedas ilegal en Ripollet (Barcelona). Según han informado a través de un comunicado, se ha… [+2789 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Faz.net"
            },
            "author": "Bloomberg",
            "title": "Bitcoin schwankt nach Höchststand stark",
            "description": "Nach einem Höchststand von mehr als 69.000 Dollar ist die Kryptowährung Bitcoin wieder stark gefallen. Die Volatilität dürfte einige Zeit anhalten, neue Höchststände sind aber nicht ausgeschlossen.",
            "url": "https://www.faz.net/aktuell/wirtschaft/bitcoin-nach-hoechststand-stark-gefallen-die-volatilitaet-der-kryptowaehrung-19567189.html",
            "urlToImage": "https://media1.faz.net/ppmedia/aktuell/wirtschaft/1013612349/1.9567255/facebook_teaser/der-wert-der-kryptowaehrung.jpg",
            "publishedAt": "2024-03-06T10:33:58Z",
            "content": "Der Wert des Bitcoin verzeichnet starke Schwankungen, nachdem die Kryptowährung seinen ersten Rekord in mehr als zwei Jahren erreicht hatte. Händler bewerteten, ob die Nachfrage von kürzlich aufgeleg… [+3683 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "MarketWatch"
            },
            "author": "Steve Goldstein",
            "title": "There’s one big mystery in the everything rally: gold’s record-setting ascent",
            "description": "Gold’s defying many of its traditional relationships in its record-setting run.",
            "url": "https://www.marketwatch.com/story/theres-one-big-mystery-in-the-everything-rally-golds-record-setting-ascent-13775d75",
            "urlToImage": "https://images.mktw.net/im-65082598/social",
            "publishedAt": "2024-03-06T11:42:00Z",
            "content": "It seems almost every asset class has been hitting records: U.S. stocks, Japanese stocks, German stocks, bitcoin, gold.\r\nThat last one is unusual. Rising prices usually generate speculative interest … [+195 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Journal du geek"
            },
            "author": "Antoine Gautherie",
            "title": "Le Bitcoin bat un nouveau record, avec un pic à plus de 70 000 $",
            "description": "La reine des cryptomonnaies se porte très bien en ce moment, après une longue traversée du désert.",
            "url": "https://www.journaldugeek.com/2024/03/08/le-bitcoin-bat-un-nouveau-record-avec-un-pic-a-plus-de-70-000/",
            "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/02/bitcoin.jpg",
            "publishedAt": "2024-03-08T17:26:59Z",
            "content": "Quelques jours après avoir battu le record de 2021, le prix du Bitcoin sest encore envolé de manière spectaculaire ce vendredi ; à 17 h 30 précises, il a franchi la barre des 70 000 $, soit environ 6… [+2381 chars]"
          },
          {
            "source": {
              "id": "new-scientist",
              "name": "New Scientist"
            },
            "author": "Matthew Sparkes",
            "title": "US government wants to tax bitcoin to reduce its environmental impact",
            "description": "The computers that secure cryptocurrencies like bitcoin consume large amounts of power, pushing up electricity prices and potentially contributing to climate change. Now, the US government wants to tackle the problem",
            "url": "https://www.newscientist.com/article/2421745-us-government-wants-to-tax-bitcoin-to-reduce-its-environmental-impact/",
            "urlToImage": "https://images.newscientist.com/wp-content/uploads/2024/03/12161030/SEI_195742712.jpg",
            "publishedAt": "2024-03-12T16:15:11Z",
            "content": "Bitcoin mining has been linked to rising electricity prices\r\nThomas Lenne/Alamy Stock Photo\r\nThe US government has proposed a tax on cryptocurrency miners in an effort to reduce the industry’s sizeab… [+3112 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Theregister.com"
            },
            "author": "Jessica Lyons",
            "title": "Change Healthcare attack latest: ALPHV bags $22M in Bitcoin amid affiliate drama",
            "description": "No honor among thieves?\nALPHV/BlackCat, the gang behind the Change Healthcare cyberattack, has received more than $22 million in Bitcoin in what might be a ransomware payment.…",
            "url": "https://www.theregister.com/2024/03/04/alphv_ransom_payment/",
            "urlToImage": "https://regmedia.co.uk/2024/03/04/bitcoin_shutterstock.jpg",
            "publishedAt": "2024-03-04T21:01:06Z",
            "content": "ALPHV/BlackCat, the gang behind the Change Healthcare cyberattack, has received more than $22 million in Bitcoin in what might be a ransomware payment.\r\nDmitry Smilyanets, an intelligence analyst at … [+2281 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "Meme stocks are back in fashion. Here's how to find one.",
            "description": "In today's big story, we're breaking down how to identify a meme stock.",
            "url": "https://www.businessinsider.com/meme-stocks-return-how-to-identify-2024-4",
            "urlToImage": "https://i.insider.com/660aaee716bde8d4ead3f78f?width=1200&format=jpeg",
            "publishedAt": "2024-04-01T13:08:09Z",
            "content": "The Wall Street bullReuters/herval\r\n\u003Cul\u003E\u003Cli\u003EThis post originally appeared in the Insider Today newsletter.\u003C/li\u003E\u003Cli\u003EYou can sign up for Business Insider's daily newsletter here.\u003C/li\u003E\u003C/ul\u003EWelcome back!… [+6516 chars]"
          },
          {
            "source": {
              "id": "die-zeit",
              "name": "Die Zeit"
            },
            "author": "ZEIT ONLINE: News -",
            "title": "Digitalwährung: Bitcoin überholt mit neuem Allzeithoch Silber",
            "description": "Hier finden Sie Informationen zu dem Thema „Digitalwährung“. Lesen Sie jetzt „Bitcoin überholt mit neuem Allzeithoch Silber“.",
            "url": "https://www.zeit.de/news/2024-03/11/bitcoin-ueberholt-mit-neuem-allzeithoch-silber",
            "urlToImage": "https://img.zeit.de/news/2024-03/11/bitcoin-ueberholt-mit-neuem-allzeithoch-silber-image-group/wide__1300x731",
            "publishedAt": "2024-03-11T11:30:47Z",
            "content": "Der Gesamtwert der Digitalwährung Bitcoin hat die Bewertung aller Silber-Bestände weltweit überschritten. Nach Berechnungen des Fachportals «Infinite Market Cap» waren sämtliche Bitcoins erstmals meh… [+2839 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "MarketWatch"
            },
            "author": "Chris Matthews",
            "title": "As bitcoin hits record high, only two lawmakers have bought crypto since 2021",
            "description": "Only two sitting members of Congress reported buying crypto in 2022 and 2023.",
            "url": "https://www.marketwatch.com/story/as-bitcoin-hits-record-high-only-two-lawmakers-have-bought-crypto-since-2021-3f084d78",
            "urlToImage": "https://images.mktw.net/im-06887610/social",
            "publishedAt": "2024-03-05T21:39:00Z",
            "content": "The price of bitcoin traded at a record high of more than $69,000 on Tuesday, but one demographic thats not cashing in on the historic crypto bull market are lawmakers in Washington, D.C. \r\nJust two … [+270 chars]"
          },
          {
            "source": {
              "id": "die-zeit",
              "name": "Die Zeit"
            },
            "author": "ZEIT ONLINE: Wirtschaft - Jens Tönnesmann, Zacharias Zacharakis",
            "title": "Wirtschaftspodcast: Haben Sie auch Bitcoin-Fomo?",
            "description": "Der Kurs der Kryptowährung eilt von einem Höchststand zum nächsten. Alle Kritik am Bitcoin scheint wieder vergessen. Regiert nur noch die Gier?",
            "url": "https://www.zeit.de/wirtschaft/2024-03/wirtschaftspodcast-bitcoin-alltimehigh-kritik",
            "urlToImage": "https://img.zeit.de/wirtschaft/2024-03/bitcoin-podcast-112/wide__1300x731",
            "publishedAt": "2024-04-02T10:20:45Z",
            "content": "Wie hoch steigt der Bitcoin-Kurs noch?© Hannes P Albert/dpa\r\nDie bekannteste aller Kryptowährungen erlebt seit einigen Monaten ein starkes Comeback. Marktbeobachter hatten den Bitcoin mit Beginn des … [+2932 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Camilo Fonseca",
            "title": "Millennials fall for investment scams a lot — even more than boomers",
            "description": "More millennials reported being duped by investment scams than people over 60, according to the FBI.",
            "url": "https://www.businessinsider.com/millennials-investment-crypto-scams-boomers-fraud-fbi-report-2024-3",
            "urlToImage": "https://i.insider.com/65ea05376080194819fda8f3?width=1200&format=jpeg",
            "publishedAt": "2024-03-08T14:21:27Z",
            "content": "An FBI report shows that millennials, not the elderly, are most likely to lose money on investment-related frauds or scams.Getty Images\r\n\u003Cul\u003E\u003Cli\u003EAmericans aged 30-49 are most susceptible to investmen… [+3659 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Theron Mohamed",
            "title": "Runaway government debt could sink markets and slam the economy, 2 watchdogs warn",
            "description": "Ballooning government debt and soaring interest payments could trigger a UK-style market meltdown and an economic disaster, fiscal watchdogs warned.",
            "url": "https://www.businessinsider.com/us-national-debt-government-spending-stock-market-financial-crisis-economy-2024-3",
            "urlToImage": "https://i.insider.com/6603077616bde8d4ead2547f?width=1200&format=jpeg",
            "publishedAt": "2024-03-26T17:36:59Z",
            "content": "Interest payments are costing the government more.Getty Images\r\n\u003Cul\u003E\u003Cli\u003EThe soaring national debt threatens to cause market chaos and economic pain, two watchdogs warned.\u003C/li\u003E\u003Cli\u003EThe US government's … [+3609 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Presse-citron"
            },
            "author": "RPB",
            "title": "Le cours du Bitcoin continue d’exploser : pourquoi ce nouveau record ?",
            "description": "Le cours du Bitcoin a dépassé mardi 5 mars son précédent record de 68 999,99 dollars atteint en 2021.",
            "url": "https://www.presse-citron.net/le-cours-du-bitcoin-continue-dexploser-pourquoi-ce-nouveau-record/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2024/03/Bitcoin-ETF.jpg",
            "publishedAt": "2024-03-06T13:53:28Z",
            "content": "Depuis quelques mois le marché des crypto reprend incontestablement des couleurs. Le marché profite d’une conjonction vertueuse de facteurs : le premier est sans conteste le ralentissement de l’infla… [+3208 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Techmeme.com"
            },
            "author": null,
            "title": "CoinShares: as bitcoin topped $72K, a record $2.7B flowed into crypto assets last week; in 2024 so far, $10.3B flowed to crypto assets, close to 2021's $10.6B (Elijah Nicholson-Messmer/Bloomberg)",
            "description": "Elijah Nicholson-Messmer / Bloomberg:\nCoinShares: as bitcoin topped $72K, a record $2.7B flowed into crypto assets last week; in 2024 so far, $10.3B flowed to crypto assets, close to 2021's $10.6B  —  - Last week saw a record $2.7 billion flow into crypto ass…",
            "url": "https://www.techmeme.com/240312/p7",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iWBK_2wEBWzg/v1/1200x800.jpg",
            "publishedAt": "2024-03-12T11:05:01Z",
            "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 7:05 AM ET, March 12, 2024.\r\nThe most current version of the site as always is available at our home page.\r\nTo vie… [+68 chars]"
          },
          {
            "source": {
              "id": "die-zeit",
              "name": "Die Zeit"
            },
            "author": "ZEIT ONLINE: News -",
            "title": "Oder-Spree: 82-Jährige verliert fünfstellige Summe an Bitcoin-Betrüger",
            "description": "Hier finden Sie Informationen zu dem Thema „Oder-Spree“. Lesen Sie jetzt „82-Jährige verliert fünfstellige Summe an Bitcoin-Betrüger“.",
            "url": "https://www.zeit.de/news/2024-03/29/82-jaehrige-verliert-fuenfstellige-summe-an-bitcoin-betrueger",
            "urlToImage": "https://img.zeit.de/news/2024-03/29/82-jaehrige-verliert-fuenfstellige-summe-an-bitcoin-betrueger-image-group/wide__1300x731",
            "publishedAt": "2024-03-29T13:15:17Z",
            "content": "Eine 82 Jahre alte Frau hat in Fürstenwalde eine fünfstellige Summe an Bitcoin-Betrüger verloren. Die Täter hatten ihr eine Summe der Kryptowährung angeboten, wie die Polizeidirektion Ost am Freitag … [+244 chars]"
          },
          {
            "source": {
              "id": "die-zeit",
              "name": "Die Zeit"
            },
            "author": "ZEIT ONLINE: News -",
            "title": "Digitalwährung: Bitcoin-Gründer «Satoshi Nakamoto» weiter nicht bekannt",
            "description": "Hier finden Sie Informationen zu dem Thema „Digitalwährung“. Lesen Sie jetzt „Bitcoin-Gründer \"Satoshi Nakamoto\" weiter nicht bekannt“.",
            "url": "https://www.zeit.de/news/2024-03/14/bitcoin-gruender-satoshi-nakamoto-weiter-nicht-bekannt",
            "urlToImage": "https://img.zeit.de/news/2024-03/14/bitcoin-gruender-satoshi-nakamoto-weiter-nicht-bekannt-image-group/wide__1300x731",
            "publishedAt": "2024-03-14T17:15:15Z",
            "content": "Ein australischer Unternehmer ist nach Einschätzung eines britischen Gerichts nicht der unter dem Pseudonym «Satoshi Nakamoto» agierende Gründer der Kryptowährung Bitcoin. Das sagte ein Richter des H… [+2054 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Presse-citron"
            },
            "author": "RPB",
            "title": "Qu’est-ce que les ETF ?",
            "description": "Les ETF sont le dernier buzzword des investisseurs intéressés par les crypto et les investissements fractionnés dans diverses valeurs et index - le tout sans sortir des marchés boursiers. On vous dit tout sur les ETF.",
            "url": "https://www.presse-citron.net/quest-ce-que-les-etf/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2024/02/ETF-Bourse.jpg",
            "publishedAt": "2024-03-13T21:32:46Z",
            "content": "Les ETF, ou Fonds Négociés en Bourse, représentent un outil d’investissement de plus en plus populaire, offrant aux investisseurs un moyen pratique et diversifié d’accéder à une large gamme de marché… [+9339 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Who is the true creator of Bitcoin? Now we have an answer.",
            "description": "Who created Bitcoin? That we don’t know, but now we certainly know who didn’t create Bitcoin. Australian scientist Craig Wright who claims to be Satoshi Nakamoto (the pseudonymous person or persons who developed Bitcoin) is not the creator of Bitcoin or the a…",
            "url": "https://qz.com/craig-wright-satoshi-nakamoto-bitcoin-1851335763",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a4f76a2b1e9747a3b38a269f9123ffb4.jpg",
            "publishedAt": "2024-03-14T17:12:00Z",
            "content": "Who created Bitcoin? That we dont know, but now we certainly know who didnt create Bitcoin. Australian scientist Craig Wright who claims to be Satoshi Nakamoto (the pseudonymous person or persons who… [+2057 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Quartz India"
            },
            "author": "Quartz Bot",
            "title": "Weekend Leadership Roundup March 16, 2024",
            "description": "Who created Bitcoin? That we don’t know, but now we certainly know who didn’t create Bitcoin. Australian scientist Craig Wright who claims to be Satoshi Nakamoto (the pseudonymous person or persons who developed Bitcoin) is not the creator of Bitcoin or the a…",
            "url": "https://qz.com/weekend-leadership-roundup-march-16-2024-1851339613",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/3e1352f40f161e02cb2da7f8c2f521b4.jpg",
            "publishedAt": "2024-03-16T13:00:00Z",
            "content": "Donald Trump called into CNBCs Squawk Box on Monday where he talked about crypto, tried to defend his complete 180 on a TikTok ban, and promoted his new sneakers. The former president also railed aga… [+190 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "The Bitcoin craze saw investors pour a record $1 billion into Bitcoin ETFs in just a day",
            "description": "It’s a rare day today — Bitcoin and Bitcoin ETFs both made records, and the rally is not going to end anytime soon. Spot Bitcoin exchange-traded funds (ETFs) in the U.S. reached a new milestone by attracting more than $1 billion in net inflows. Over the last …",
            "url": "https://qz.com/bitcoin-etfs-1-billion-rally-crypto-1851332135",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/0b45fd224ddd1f143baaa398c99bd30b.jpg",
            "publishedAt": "2024-03-13T17:21:51Z",
            "content": "Its a rare day today Bitcoin and Bitcoin ETFs both made records, and the rally is not going to end anytime soon. Spot Bitcoin exchange-traded funds (ETFs) in the U.S. reached a new milestone by attra… [+1476 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "The history of Bitcoin",
            "description": "Since its creation in 2009, Bitcoin has revolutionized finance as the world’s first decentralized digital currency. From zero to $73,000, Bitcoin has been on quite a journey. And now it’s hard to envision the world of finance without it.Read more...",
            "url": "https://qz.com/bitcoin-history-creation-origin-price-1851347621",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/ca6d4b82801f9e807738cf5857fe8b85.jpg",
            "publishedAt": "2024-03-19T11:20:00Z",
            "content": "Do you know what the first item ever purchased using Bitcoin was? \r\nIt was two large pizzas from Papa Johns in 2010. The transaction on May 22, known as Bitcoin Pizza Day, was the first reported use … [+870 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Petar Jovanović",
            "title": "Solana Crypto Presale ‘Slothana’ Raises $6 Million – SLOTH Meme Coin Review",
            "description": "New crypto presale Slothana (SLOTH) has raised over $6 million within just one week of its simple one-page website going… Continue reading Solana Crypto Presale ‘Slothana’ Raises $6 Million – SLOTH Meme Coin Review\nThe post Solana Crypto Presale ‘Slothana’ Ra…",
            "url": "https://readwrite.com/solana-crypto-presale-slothana-raises-6-million-sloth-meme-coin-review/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/slothana-new-meme-coin-presale-solana.jpg",
            "publishedAt": "2024-04-02T14:37:48Z",
            "content": "New crypto presale Slothana (SLOTH) has raised over $6 million within just one week of its simple one-page website going live, highlighting the project’s initial appeal as well as the growing demand … [+4004 chars]"
          },
      
        {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Joel Khalili",
            "title": "The Science of Crypto Forensics Survives a Court Battle—for Now",
            "description": "A jury convicted Roman Sterlingov of money laundering this month. His defense team says it will appeal, saying the crypto-tracing technique at the heart of the case is “pseudoscience.”",
            "url": "https://www.wired.com/story/the-science-of-crypto-forensics-court-battle/",
            "urlToImage": "https://media.wired.com/photos/6603759fd3a75d0aa76d16ab/191:100/w_1280,c_limit/business_crypto_tracing_forensics_trial.jpg",
            "publishedAt": "2024-03-27T11:00:00Z",
            "content": "On March 12, Russian-Swedish national Roman Sterlingov was found guilty of money laundering conspiracy and other violations by a federal jury in Washington, DC, for having operated Bitcoin Fog, a ser… [+3654 chars]"
          },
        {
          "source": {
            "id": null,
            "name": "CBS Sports"
          },
          "author": "",
          "title": "Pete Prisco 2024 NFL Mock Draft 1.0: Jets add firepower for Aaron Rodgers; Super Bowl hopefuls address defense - CBS Sports",
          "description": "Pete Prisco has QBs going 1-2-3-4 for the first time in NFL history",
          "url": "https://www.cbssports.com/nfl/draft/news/pete-prisco-2024-nfl-mock-draft-1-0-jets-add-firepower-for-aaron-rodgers-super-bowl-hopefuls-address-defense/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/03/28/5152fb65-4e6a-4bbc-b003-ace0df54b759/thumbnail/1200x675/98a759414e1b665b2df7ca5aa6f1308e/rome-odunze.jpg",
          "publishedAt": "2024-04-02T18:12:48Z",
          "content": "Free agency has come and gone for the most part, so mock drafts actually mean something.\r\nUnlike our lead NFL Draft analyst Ryan Wilson, I am late to the process when it comes to doing mock drafts. I… [+1855 chars]"
        },
        {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Who were the World Central Kitchen workers killed in Gaza? - BBC.com",
            "description": "Seven aid workers, including foreign nationals, have been killed in an Israeli strike in central Gaza.",
            "url": "https://www.bbc.com/news/world-middle-east-68711282",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0F6A/production/_133064930_21.jpg",
            "publishedAt": "2024-04-02T16:28:10Z",
            "content": null
          },
        
        {
          "source": {
            "id": null,
            "name": "Hollywood Reporter"
          },
          "author": "Christy Piña",
          "title": "Angie Harmon Says She Is “Completely Traumatized” After Instacart Deliveryman Shot and Killed Her Dog - Hollywood Reporter",
          "description": "\"We have no tolerance for violence of any kind,\" the company said in a statement.",
          "url": "http://www.hollywoodreporter.com/news/general-news/angie-harmon-instacart-deliveryman-shot-killed-dog-1235864630/",
          "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/04/Angie-Harmon-GettyImages-800773010-H-2024.jpg?w=1024",
          "publishedAt": "2024-04-02T17:18:36Z",
          "content": "Angie Harmon took to social media to share that an Instacart deliveryman shot and killed her dog after leaving her groceries on the doorstep. \r\n“This Easter weekend a man delivering groceries for Ins… [+1579 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Karen Friar",
          "title": "Stock market today: Dow sinks nearly 400 points, yields rise to 2024 highs - Yahoo Finance",
          "description": "Investors are growing gloomy about the chances the Fed will delay a rate cut until the second half of the year.",
          "url": "https://finance.yahoo.com/news/live/stock-market-today-dow-sinks-nearly-400-points-yields-rise-to-2024-highs-133258500.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Ek7osT_6lKRM_9T5Ym0D8w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-09/642e6ab0-38d0-11ed-bd6e-3f50b76446e8",
          "publishedAt": "2024-04-02T16:35:00Z",
          "content": "Wedbush on Tuesday downgraded shares of five homebuilder stocks, citing seasonality headwinds during what it called the most \"normal\" year for housing trends since 2019.\r\nThe firm downgraded all five… [+2322 chars]"
        },
       
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "Who were the World Central Kitchen workers killed in Gaza? - BBC.com",
          "description": "Seven aid workers, including foreign nationals, have been killed in an Israeli strike in central Gaza.",
          "url": "https://www.bbc.com/news/world-middle-east-68711282",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0F6A/production/_133064930_21.jpg",
          "publishedAt": "2024-04-02T16:28:10Z",
          "content": null
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Daniel Dale",
          "title": "Fact check: Trump falsely claims, again, that he had to post bond to appeal civil fraud decision - CNN",
          "description": "Former President Donald Trump has falsely claimed, again, that he had to post a bond in order to appeal a $454 million civil fraud judgment against him – and falsely claimed, again, that Judge Arthur Engoron did something unusual in forcing him to post a bond…",
          "url": "https://www.cnn.com/2024/04/02/politics/fact-check-donald-trump-post-bond-appeal-civil-fraud/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-03-29t193206z-1690648249-rc2os6aqnigm-rtrmadp-3-usa-trump-georgia.JPG?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-04-02T16:22:00Z",
          "content": "Former President Donald Trump has falsely claimed, again, that he had to post a bond in order to appeal a $454 million civil fraud judgment against him and falsely claimed, again, that Judge Arthur E… [+2816 chars]"
        },
        {
          "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
          },
          "author": "Caroline Kitchener",
          "title": "Abortion ruling by Florida Supreme Court leaves women with few options - The Washington Post",
          "description": "The law allowed to go into effect by Florida’s Supreme Court will affect more women seeking abortions in the first trimester than any other ban to date.",
          "url": "https://www.washingtonpost.com/nation/2024/04/02/florida-supreme-court-abortion-access/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/766G43BXMZV4PAPAX34IRMUIEA.JPG&w=1440",
          "publishedAt": "2024-04-02T16:16:38Z",
          "content": "More than 80,000 women get an abortion in Florida in a typical year accounting for about 1 in 12 abortions in the country.\r\nNow, most of those women will need to find somewhere else to go.\r\nWith the … [+8163 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Variety"
          },
          "author": "Jaden Thompson",
          "title": "Joe Flaherty, ‘SCTV’ and ‘Freaks and Geeks’ Actor, Dies at 82 - Variety",
          "description": "Joe Flaherty, the actor, writer and comedian known for his roles on 'Second City Television' and 'Freaks and Geeks,' died on Monday. He was 82.",
          "url": "https://variety.com/2024/tv/news/joe-flaherty-dead-dies-sctv-freaks-and-geeks-1235957809/",
          "urlToImage": "https://variety.com/wp-content/uploads/2024/04/TSDSCTV_EC029.jpg?w=1000&h=562&crop=1",
          "publishedAt": "2024-04-02T16:04:00Z",
          "content": "Joe Flaherty, the actor, writer and comedian known for his roles on the Canadian sketch comedy series “Second City Television” and “Freaks and Geeks,” died on Monday. He was 82.\r\nFlaherty’s daughter,… [+4391 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Whitehouse.gov"
          },
          "author": "The White House",
          "title": "Readout of President Joe Biden's Call with President Xi Jinping of the People's Republic of China - The White House",
          "description": "President Joseph R. Biden, Jr. spoke today with President Xi Jinping of the People’s Republic of China (PRC).  The call follows the two leaders’ meeting in Woodside, California in November 2023.  The two leaders held a candid and constructive discussion on a …",
          "url": "https://www.whitehouse.gov/briefing-room/statements-releases/2024/04/02/readout-of-president-joe-bidens-call-with-president-xi-jinping-of-the-peoples-republic-of-china/",
          "urlToImage": "https://www.whitehouse.gov/wp-content/uploads/2021/01/wh_social-share.png",
          "publishedAt": "2024-04-02T15:59:09Z",
          "content": "President Joseph R. Biden, Jr. spoke today with President Xi Jinping of the Peoples Republic of China (PRC).  The call follows the two leaders meeting in Woodside, California in November 2023.  The t… [+1542 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Zac Hall",
          "title": "Alleged iOS 18 design leak promises the visionOS-like redesign everyone wants - 9to5Mac",
          "description": "Apple Vision Pro’s greatest contribution to humankind in year one may just be inspiring the iOS 18 redesign everyone wants....",
          "url": "https://9to5mac.com/2024/04/02/ios-18-design-maybe/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/ios18-wwdc24.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-04-02T15:38:00Z",
          "content": "Apple Vision Pro’s greatest contribution to humankind in year one may just be inspiring the iOS 18 redesign everyone wants. Our friends at MacRumors have published what they describe as an “iPhone fr… [+1288 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "WOODTV.com"
          },
          "author": "Michael Oszust",
          "title": "Bird flu found at commercial poultry farm in Ionia County - WOODTV.com",
          "description": "The state has found avian influenza at a commercial poultry farm in Ionia County.",
          "url": "https://www.woodtv.com/news/ionia-county/bird-flu-found-at-commercial-poultry-farm-in-ionia-county/",
          "urlToImage": "https://www.woodtv.com/wp-content/uploads/sites/51/2022/10/generic-MDARD-logo.jpg?w=1280",
          "publishedAt": "2024-04-02T15:23:05Z",
          "content": "GRAND RAPIDS, Mich. (WOOD) The state has found avian influenza at a commercial poultry farm in Ionia County.\r\nThis is the fourth confirmed case of highly pathogenic avian influence (HPAI) at a commer… [+1356 chars]"
        },
        
        {
          "source": {
            "id": null,
            "name": "Prevention.com"
          },
          "author": "Korin Miller",
          "title": "'Oatzempic Challenge' Is TikTok's 'Affordable' Viral Weight Loss Trend - Prevention Magazine",
          "description": "Oatzempic is a buzzy new weight loss drink on TikTok...does it work? Nutritionists explain the benefits and dangers of the recipe users say is “like Ozempic.”",
          "url": "https://www.prevention.com/health/a60359233/oatzempic-challenge-weight-loss-tiktok/",
          "urlToImage": "https://hips.hearstapps.com/hmg-prod/images/banana-smoothie-and-fresh-banana-on-wooden-royalty-free-image-1711991751.jpg?crop=1.00xw:0.753xh;0,0.149xh&resize=1200:*",
          "publishedAt": "2024-04-02T14:04:00Z",
          "content": "We may earn commission from links on this page, but we only recommend products we back. Why Trust Us?\u003Cul\u003E\u003Cli\u003EThe Oatzempic Challenge is making the rounds on TikTok as the latest weight loss challenge… [+6588 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Nick Bromberg",
          "title": "Final Four: With both teams still standing, UConn and NC State are in unpredecedented territory - Yahoo Sports",
          "description": "2024 is the first time that two schools have both teams in the Final Four in the same season.",
          "url": "https://sports.yahoo.com/final-four-with-both-teams-still-standing-uconn-and-nc-state-are-in-unpredecedented-territory-123439922.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/BoBHRWFrmkRVTYdg1l91DQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-04/c4fc9620-f0ec-11ee-b77f-22f894b9de0a",
          "publishedAt": "2024-04-02T13:46:37Z",
          "content": "NC State and UConn are each achieving a rare feat in 2024. And together, theyre making history.\r\nThe Wolfpack became the 14th school to have both its mens and womens basketball teams advance to the F… [+9446 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Al Jazeera",
          "title": "Iran’s Khamenei promises ‘Israel will be punished’ for Syria strike - Al Jazeera English",
          "description": "The attack and rhetoric raise concern that Israel’s war in Gaza threatens to escalate major conflict across the region.",
          "url": "https://www.aljazeera.com/news/2024/4/2/irans-khamenei-says-israel-will-be-punished-for-syria-strike",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/11/photo-2-1700399871.jpg?resize=1920%2C1440",
          "publishedAt": "2024-04-02T13:29:36Z",
          "content": "Ayatollah Ali Khamenei has promised revenge for an Israeli air raid in Syria that killed senior military officers.\r\nIrans supreme leader declared on Tuesday that Israel will be punished for the attac… [+3160 chars]"
        },

        {
          "source": {
            "id": null,
            "name": "KPRC Click2Houston"
          },
          "author": "Anthony Yanez",
          "title": "Update: Minor but good changes to the solar eclipse forecast for Texas - KPRC Click2Houston",
          "description": "There can be changes, we’re watching this for you",
          "url": "https://www.click2houston.com/weather/2024/04/01/solar-eclipse-forecast-does-not-look-good-for-texas/",
          "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/OO5GITY3OJA7DB4B3UMNXC7W6U.jpg?_a=ATAPphC0",
          "publishedAt": "2024-04-02T13:25:00Z",
          "content": "We are less than a week away from the total solar eclipse. Monday looked bleak for the entire state. Today both long range models show slight improvement to viewing weather. \r\nThe key to our eclipse … [+3362 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Eden Laase",
          "title": "LSU's Angel Reese opens up about dealing with hateful speech, death threats: 'I've been through so much' - Yahoo Sports",
          "description": "The LSU star said she's dealt with a lot ever since her star run in last year's national championship.",
          "url": "https://sports.yahoo.com/lsus-angel-reese-opens-up-about-dealing-with-hateful-speech-death-threats-ive-been-through-so-much-041431765.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/9J2Q72CpT68JS7Dst7PVvw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-03/07c99480-f0a7-11ee-b4c2-5a3d10ac77f8",
          "publishedAt": "2024-04-02T13:23:54Z",
          "content": "ALBANY, N.Y. Following her teams Elite Eight loss to Iowa, Angel Reese reflected on the difficulties shes encountered since LSU won the title in 2023.\r\nReese led LSU to a national championship last s… [+1734 chars]"
        },
        {
          "source": {
            "id": "the-hill",
            "name": "The Hill"
          },
          "author": "Tara Suter",
          "title": "Oregon governor signs law recriminalizing drug possession - The Hill",
          "description": "Oregon Gov. Tina Kotek (D) on Monday signed a law recriminalizing the possession of small amounts of drugs. The law makes personal use possession a misdemeanor punishable with sentences of up to six months in jail. However, it also creates avenues for treatme…",
          "url": "https://thehill.com/homenews/state-watch/4569303-oregon-governor-signs-law-recriminalizing-drug-possession/",
          "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2022/11/KotekTina.jpg?w=1280",
          "publishedAt": "2024-04-02T13:06:00Z",
          "content": "Skip to content\r\nOregon Gov. Tina Kotek (D) on Monday signed a law recriminalizing the possession of small amounts of drugs.\r\nThe law makes personal use possession a misdemeanor punishable with sente… [+957 chars]"
        }
      ]
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false
        }

}
    render() {
        return (
            <div className='container my-3'>
                <h1>News Monkey</h1>
              
                <div className="row">
                {this.state.articles.map((element)=>{
return  <div className="col-md-4 " key={element.url}>
<NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newUrl={element.url}/>
 </div>

               })}
              </div>     
            </div>
        )
    }
}

export default News
