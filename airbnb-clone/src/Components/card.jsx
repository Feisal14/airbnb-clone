import React from "react";



export default function Card(props) {

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            <div className="card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={props.item.img} alt="" className="card--image" />
                <div className="card--stats">
                    <img src="src/img/star.png"
                        alt="" className="card--star" />
                    {/* <span >Katie Zaferes</span> */}
                    <span>{props.item.stats.rating}</span>
                    <span className="grey"> ({props.item.stats.reviewCount}) </span>
                    <span className="grey"> {props.item.location } </span>
                </div>
                <p className="card--par">{props.item.title}</p>
                <p className="card--par"> <b>From {props.item.price}</b> / person</p>
            </div>
        </div>

    )
}