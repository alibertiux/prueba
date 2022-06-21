import React,{ useState } from 'react'

export const Detail = (props) => {
    const { showDetail } = props;
    const [closeDetail, setCloseDetail] = useState(showDetail);
    const show = closeDetail ? "active" : "";


    console.log(props, "detapropsil");
    return (
        <div>
            <p>
                {(props.detail) ? <img src={props.detail} alt="pokemon" /> : null}
            </p>
        </div>
    )
}