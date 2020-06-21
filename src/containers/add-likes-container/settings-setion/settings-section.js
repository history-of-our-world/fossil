import React, {useState} from 'react'
import "../add-likes-container.sass"

const SettingsSection = ({loadAccount, setLikes}) => {
    const [account, setAccount] = useState("")
    return (
        <div className={"settings-section"}>
            <div className="title h3">Instagram Account</div>
            <div className="select-account">Select your Instagram account</div>
            <form onSubmit={(e) => {e.preventDefault(); loadAccount(account)}}>
                <div className="input-wrapper">
                    <div className="icon"></div>
                    <input
                        type="text"
                        required={true}
                        onChange={(e) => setAccount(e.target.value)}
                        className="input"
                        placeholder={"Your Instagram Name"}/>
                </div>
                <button type={"submit"} className="button">Select Account</button>
            </form>
            <div className="hr"></div>
            <div className="title h3">Package</div>
            <div className="select-account">
                Select a suitable package.
                You'll be able to spread likes throughout your images in the next step.
            </div>
            <div className="input-wrapper">
                <div className="icon"></div>
                <select className="input" onChange={(e) => setLikes(e.target.value)}>
                    <option value="100">100 likes | $2.99</option>
                    <option value="500">500 likes | $6.99</option>
                    <option value="1000">1000 like | $13.99</option>
                </select>
            </div>
        </div>
    )
}

export default SettingsSection