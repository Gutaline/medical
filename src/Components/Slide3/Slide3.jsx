import React from 'react';
import sprey from '../../img/sprey.png';

import InfoTable from '../InfoTable/InfoTable';
import Button from '../Button/Button';
import PopUp from '../PopUp/PopUp';

import pinkBuble from '../../img/pink-buble.png';
import yellowBuble from '../../img/yellow-buble.png';

function Slide3() {
    const [popup, SetPopup] = React.useState(false);
    return (
        <div className="slide3">
            <div className="slide3-title">
                <h1>
                    Ключевое сообщение{' '}
                    <span>
                        Brendy<span>XY</span>
                    </span>
                </h1>
            </div>

            <div className="container">
                <InfoTable>Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies</InfoTable>
                <div className="container2">
                    <InfoTable>Ehicula</InfoTable>
                    <Button
                        onClick={() => {
                            SetPopup(true);
                        }}
                        symbol={'+'}>
                        Подробнее
                    </Button>
                </div>
            </div>

            {popup && (
                <PopUp
                    onClick={() => {
                        SetPopup(false);
                    }}></PopUp>
            )}

            <img className="slide3-sprey_img" src={sprey} alt="" />
            <img className="slide3-sprey_buble1" src={pinkBuble} alt="" />
            <img className="slide3-sprey_buble5" src={yellowBuble} alt="" />
        </div>
    );
}

export default Slide3;
