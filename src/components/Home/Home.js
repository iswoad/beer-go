import React, { useEffect, useState } from 'react';
import BeerCard from '../BeerCard/BeerCard';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});


const Home = () => {
    const classes = useStyles();
    const [beerData, setBeerData] = useState([]);
    const [ibuValue, setIbuValue] = useState([1, 100]);
    const [abvValue, setAbvValue] = useState([0,50]);
    

    const handleIbuChange = (event, newValue) => {
        setIbuValue(newValue);
      };

      const handleAbvChange = (event, newValue) => {
          setAbvValue(newValue);
      }

    //   console.log(ibuValue.[1]);

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(data => setBeerData(data))
    }, [])


    return (
        <div>
            <div style={{ margin: "20px", padding: "20px", backgroundColor: "#f5f5f5", boxShadow: "1px 3px 1px #f5f5f5", border: "2px solid #f5f5f5" }} className="row">
                <h1>Beer Styles</h1>
                <p>Click on a style to enable/disable</p>
                <div style={{ flexDirection: "row" }}>
                    <button type="button" class="btn btn-success">American Brown Ale</button>
                    <button style={{ marginLeft: 5 }} type="button" class="btn btn-success">Belgian Pale Ale</button>
                    <button style={{ marginLeft: 5 }} type="button" class="btn btn-success">Imperial Double IPA</button>
                    <button style={{ marginLeft: 5 }} type="button" class="btn btn-success">Imperial IPA</button>
                    <button style={{ marginLeft: 5 }} type="button" class="btn btn-success">Imperial Stout</button>
                    <button style={{ marginLeft: 5 }} type="button" class="btn btn-success">Premium Lager</button>
                    <button style={{ marginLeft: 5 }} type="button" class="btn btn-success">Sour Red/Brown</button>
                </div>
            </div>
            <div style={{ height: "200px", margin: "20px", padding: "20px" }} className="row text-center border-bottom border-top">
                <div className="col-md-6">
                <h1>IBU</h1>
                    <p>International Bitterness Units</p>
                    <Slider
                        className = {classes.root}
                        value={abvValue}
                        onChange={handleAbvChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        // getAriaValueText={valuetext}
                    />
                </div>
                <div className="col-md-6 ">
                    <h1>IBU</h1>
                    <p>International Bitterness Units</p>
                    <Slider
                        className = {classes.root}
                        value={ibuValue}
                        onChange={handleIbuChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        // getAriaValueText={valuetext}
                    />
                </div>
            </div>
            <div style={{ margin: "20px", padding: "20px", backgroundColor: "#f5f5f5" }} className="d-flex">

                <div className="row mt-5 pt-5 d-flex text-center">
                    {
                        beerData.map((beer, i) => {
                            return(
                                <div className="col-md-4">
                                    {
                                    (beer.ibu >= ibuValue.[0] && beer.ibu <= ibuValue.[1]) || (beer.abv >= abvValue.[0] && beer.abv <= abvValue[1])?
                                    <BeerCard beer ={beer} ></BeerCard> : null
                                }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;