import avatarshare from "../icons/_Avatar share button.png"
import profilepic from "../icons/profile__img.png"


function Homepage() {
    return <div className="back">

        <div className="first-page">

            <div className="share-avatar">
                <img className="avatar" src={avatarshare} alt="" />
            </div>

            <div className="picxusername">
                <img id="profile__img" className="image" src={profilepic} alt="" />
            </div>

            <p id="twitter" className="twitterusername">Toju_toby</p>
            <p id="slack" className="twitterusername" style={{ display: "none" }}>Toju_tobiliscious</p>

</div>

        </div>





}

        export default Homepage;