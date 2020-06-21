import React, {useState} from 'react'
import "./add-likes-container.sass"
import {Spinner} from "../../components/helper-components/spinner/spinner";
import {fetchPhotos} from "../../servers/servers";
import SettingsSection from "./settings-setion/settings-section";
import Profile from "./profile-section/profile-section";
import PaymentSection from "./payment-section/payment-section";

const AddLikesContainer = () => {

    const [loader, setLoader] = useState(false)
    const [profile, setProfile] = useState(null)
    const [page, setPage] = useState("settings")
    const [likes, setLikes] = useState(100)
    const [checkedPhotos, setCheckedPhotos] = useState([])
    const [prevProfile, setPrevProfile] = useState(null)

    const loadAccount = (value) => {
        if(prevProfile === value) return setPage("profile");
        setLoader(true)
        fetchPhotos(value)
            .then(({profile}) => {
                setProfile(profile)
                setCheckedPhotos([])
                setPage("profile")
                setLoader(false)
                setPrevProfile(value)
            })
    }

    const checkPhoto = (id) => {
        let array = [...checkedPhotos];
        if(checkedPhotos.includes(id)){
            console.log(array.indexOf(id))
            array.splice(array.indexOf(id), 1);
        } else array = [...checkedPhotos, id]
        setCheckedPhotos(array)
    }

    return(
        <div className={"add-likes-page"}>
            <div className="add-container">
                {
                    loader? <Spinner/> : ""
                }
                {
                    page === "settings"?
                        <SettingsSection
                            setLikes={setLikes}
                            likes={likes}
                            loadAccount = {loadAccount}/>
                        :
                        <Profile
                            setPage={setPage}
                            profile={profile}
                            likes={likes}
                            checkPhoto={checkPhoto}
                            checkedPhotos={checkedPhotos}
                            setLikes={setLikes}/>
                }
            </div>
            <div className="add-container payment-container">
                <PaymentSection/>
            </div>
        </div>
    )
}

export default AddLikesContainer