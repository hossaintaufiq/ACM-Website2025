import React from "react";
import styles from '../../app/assets/css/hacknsu.css'
import { Audiowide } from "next/font/google";
import { Italic } from "lucide-react";

const audiowide = Audiowide({ subsets: ['latin'], weight: '400', variable: '--font-audiowide' });

const PrizePool = () => {

    return (
        <>
            <div className="prizepool">

                <div className={audiowide.variable}>
                    <div className="prize">PRIZE</div>
                    <div id="pool">POOL</div>
                </div>


            </div>

            <div className="prizepool" id="total">TOTAL "5OK" BDT</div>

            <div className="trophy"></div>        
            <div className="prizepool" id="distr">
                Winner - BDT 25K<br></br><br></br>
                1<sup>st</sup> Runner Up - BDT 15K<br></br>
                <br></br>
                2<sup>nd</sup> Runner Up - BDT 10K
            </div>



            {/* <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div
                        className="col-md-6 d-flex flex-column align-items-center prize-card"
                        style={{
                            willChange: "transform",
                            transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
                        }}
                    >
                        <h1 style={{ fontFamily: "'Good Times Rg', sans-serif", color: "rgb(0, 0, 0)" }}>
                            General Category
                        </h1>
                        <div className="d-flex flex-column align-items-center mt-5">
                            <p>The Champion - 10K BDT</p>
                            <p>
                                1<sup>st</sup> Runner Up - 7K BDT
                            </p>
                            <p>
                                2<sup>nd</sup> Runner Up - 5K BDT
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}


        </>
    );

}


export default PrizePool;