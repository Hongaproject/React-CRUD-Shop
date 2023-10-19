import { useState } from "react";

const data = [
    {
        id: 1,
        a: "dd",
        s: "dd",
    }
]

const Homes = () => {

    const [datas, setDatas] = useState(data);

    return(
        <div>
            {
                datas.map((list)=> (
                    <Qwer 
                        key={list.id}
                        id={list.id}
                        a={list.a}
                    />
                ))
            }
        </div>
    );
}

const Qwer = ({id, a}) => {
    
    return(
        <div>
            <div>
            {id}
            {a}
            </div>
        </div>
    );
}

export default ({Homes, Qwer});

