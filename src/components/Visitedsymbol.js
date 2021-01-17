import { useState } from 'react';
import {fetchForexCandles ,fetchCryptoCandles} from '../finantialmodeling';
import { connect } from 'react-redux';

function Visitedsymbol({description,displaySymbol,symbol,basis,isCrypto,fetchfinnhub,finnhub}) 
{
    const [bidAsk, setbidAsk] = useState(0);
    const [growth, setGrowth] = useState(0);

    const Fetchcryptocandles = (symbol,key) => {
        fetchCryptoCandles(symbol).then(e => {
            setbidAsk(e[0])
            setGrowth(e[1])
            fetchfinnhub({[key]: (+ new Date()), timestamp: (+ new Date()), e: e},key)
        })
    }

    const Fetchforexcandles = (symbol, key) => {
        fetchForexCandles(symbol).then(e => {
            setbidAsk(e[0])
            setGrowth(e[1])
            fetchfinnhub({[key]: (+ new Date()), timestamp: (+ new Date()), e: e},key)
        })
    }
    
    if (bidAsk === 0) {
        setbidAsk('Loading')

        if (isCrypto) {
            let key = "fetchCryptoCandles_"+symbol
            if (finnhub.hasOwnProperty(key)) {
                console.log((+new Date) - finnhub[key]["timestamp"])
                if ((+new Date) - finnhub[key]["timestamp"] > 160000 || finnhub[key]['e'] === "No data") { 
                    Fetchcryptocandles(symbol,key)
                } else {
                    setbidAsk(finnhub[key]['e'])
                }
            } else {
                Fetchcryptocandles(symbol,key)
            }
        } else {
            let key = "fetchForexCandles_"+symbol
            if (finnhub.hasOwnProperty(key)) {
                console.log((+new Date) - finnhub[key]["timestamp"])
                if ((+new Date) - finnhub[key]["timestamp"] > 160000 || finnhub[key]['e'] === "No data") { 
                    Fetchforexcandles(symbol,key)
                } else {
                    setbidAsk(finnhub[key]['e'])
                }
            } else {
                Fetchforexcandles(symbol,key)
            }
        }
    }

    return  (
    <div className="col corebox_14 mobilecorebox_21 center items_start pad_l24 pad_r24 pad_b27" style={{flexBasis:basis + 'px'}}>
        <div className="allsize col boxshadow_24 pad_l26 pad_r26 pad_t27 borderradius_25">
            <div className="row center space_between allwidth">
                <span className="f_1 f500">{displaySymbol}</span>
                {bidAsk === 0 ? 'Loading' : <span className="f_2 f600"><span style={{fontSize:"1rem"}} className={"pad_l20 pad_r20 borderradius_16 mar_r10 pad_t5 pad_b5 "+((growth > 1) ?"fore_green": "fore_red")}>{growth > 1 ? "+": "-"} {((growth > 1 ? growth - 1 : 1 - growth) * 100).toString().substring(0,4)}%</span>{bidAsk}</span>}
            </div>
            <span className="f500 fore_8 mar_t15">{description}</span>
        </div>
    </div>)
}

const mapStateToProps = (state) => {
    const { finnhub } = state;
    return {
      finnhub
    }
};

const mapDispatchToProps = dispatch => ({
    fetchfinnhub: (finnhub,key) => dispatch({ type: 'finnhub/fetch', finnhub, key }),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Visitedsymbol)