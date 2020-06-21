import React from "react"
import "../add-likes-container.sass"

const Profile = ({profile, likes, setLikes, setPage, checkPhoto, checkedPhotos}) => {
    const {name, main_photo, photos} = profile;

    const likesCount = (likes / checkedPhotos.length).toFixed(0)

    return (
        <div className={"profile-section"}>
            <div className="row profile">
                <div className="profile-info">
                    <div className="img">
                        <img src={main_photo} alt="image"/>
                    </div>
                    <span className="name title h3">{name}</span>
                </div>
                <button className="button" onClick={() => setPage("settings")}>Change Account</button>
            </div>
            <div className="hr"></div>
            <div className="row package">
                <div className={"title  h3"}>Checked package:</div>
                <select className="input" onChange={(e) => setLikes(e.target.value)}>
                    <option value="100">100 likes | $2.99</option>
                    <option value="500">500 likes | $6.99</option>
                    <option value="1000">1000 like | $13.99</option>
                </select>
            </div>
            <div className="hr"></div>
            <div className="title h3">Select Posts</div>
            <div className="select-account">Please select posts. Once you're done, scroll down to the 'Summary & Payment'
                section below.</div>
            <div className="gallery">
                {
                    photos.map((el) => {
                        return(
                            <div className={"gallery-item"} key = {el.id} onClick={() => checkPhoto(el.id)}>
                                {
                                    checkedPhotos.includes(el.id)?
                                        <div className="checked-photo">{likesCount} ♥</div> : ""
                                }
                                <div className="img">
                                    <img src={el.url} alt="image"/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="button">Load More</div>
        </div>
    )
}

export default Profile