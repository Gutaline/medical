import React, { useEffect } from 'react';

function Test(props) {

   
    useEffect(() => {
        console.log("Я от теста",props.ward)
       
      }, [props.ward]);

    return (
        <div>
            {props.ward}
        </div>
    )
}

export default Test
