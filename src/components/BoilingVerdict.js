import React from "react";

export default function BoilingVerdict(props) {
    const {celsius} = props;
    if (celsius>=100){
        return <p>вода закипела</p>
    } else {
        return <p>вода не закипела</p>
    }

}