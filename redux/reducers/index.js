import { type } from "../actions/types";

const initialState = {
    tickers:[
        {"id":"btc","title":"Bitcoin"},
        {"id":"eth","title":"Ethereum"},
        {"id":"bch","title":"Bitcoin Cash"},
        {"id":"ltc","title":"Litecoin"},
        {"id":"xmr","title":"Monero"},
        {"id":"trx","title":"TRX"},
        {"id":"trc20/aedt","title":"AEDT"},
        {"id":"trc20/btc","title":"BTC"},
        {"id":"trc20/doge","title":"Dogecoin"},
        {"id":"trc20/eth","title":"ETH"},
        {"id":"trc20/ht","title":"HuobiToken"},
        {"id":"trc20/husd","title":"HUSD"},
        {"id":"trc20/inrt","title":"INRT"},
        {"id":"trc20/usdc","title":"USD Coin"},
        {"id":"trc20/usdt","title":"USDT"},
        {"id":"trc20/wbtc","title":"WBTC"},
        {"id":"bep20/ada","title":"Cardano"},
        {"id":"bep20/bnb","title":"BNB"},
        {"id":"bep20/btcb","title":"BTCB"},
        {"id":"bep20/busd","title":"BUSD"},
        {"id":"bep20/cake","title":"PancakeSwap"},
    ],
    coin:{},
    coins:[]
  };

  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_COINS:
            return{
                ...state,
                coin: action.payload,
            }

        case type.ADD_FAV:
            return{
                ...state,
                coins: [...state.coins, action.payload]
            }
        case type.DELETE_FAV: 
            return{
                ...state,
                coins: [...state.coins.filter((e)=> e.coin != action.payload.coin)]
            }
        case type.OPEN_FAV:
            return{
                ...state,
                coins: action.payload
            }
        default: {
            return state;
          }
    }
  }