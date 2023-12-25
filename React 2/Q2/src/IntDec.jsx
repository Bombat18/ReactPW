import './IntDec.css'
import { useState } from "react";
function IntDec() {


    const [x, setx] = useState(3)

    const dec = () => {

        setx((X) => (X - 1 >= 0 ? X - 1 :0));
    }
    return (
        <>
            <div className="maindiv">
                <div className='div'>
                    <h1>{x}</h1>
                    <div className='button'>
                        <button onClick={() => setx(x + 1)}>Increment</button>
                        <button onClick={dec}>Decrement</button>
                    </div>
                </div>

            </div>
        </>
    );

}
export default IntDec;