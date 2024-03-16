import React , {useId} from "react"
import useCurrencyInfo from "../hooks/useCurrencyinfo";

function InputBox({  // the syntax resemble thjis function Inputbox ({props = "default value"}) { // function implementation}
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    onOptionChange,
    currencyOption = [],
    selectCurrency= "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    id={amountInputId}
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value= {selectCurrency}
                    onChange={(e) => onCurrencyChange&& onCurrencyChange(e.target.value)}
                   //So, the logic can be summarized as
                   // follows: When the onChange event is 
                   //triggered (i.e., when the value of the input 
                   //element changes), the onCurrencyChange function
                   // is called with the new value of the currency as an 
                   //argument. However, before calling onCurrencyChange, 
                   //it checks if onCurrencyChange is defined (i.e., it's not null or undefined). 
                   //This is to ensure 
                   //that the onCurrencyChange
                   // function exists before attempting //
                   //to call it, preventing potential errors.
                   
                   
                   
                   
                    disabled= {currencyDisable  }
                >
                    
                        {currencyOption.map((currency) =>
                        (
                            <option key = {currency}
                            value ={currency}>
                                {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;