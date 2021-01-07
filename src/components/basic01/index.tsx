import React from "react";
import {useObservable} from "rxjs-hooks";
import {interval} from "rxjs";
import {map} from "rxjs/operators";

const Basic01: React.FC = () => {
    const value = useObservable(() => interval(500).pipe(map(val => val * 3)));

    return (
        <div className="basic01">
            <h1>Incremental number: {value}</h1></div>
    );
}

export default Basic01;