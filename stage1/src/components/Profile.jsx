/* eslint-disable jsx-a11y/img-redundant-alt */
import "./profile.scss";

function Profile() {
  return (
    <section className="profile">
      <div className="profile_img" tabIndex="0">
      <img id="profile__img" src="assets/Sardiusjay.png" alt="profile image" />
        <div className="overlay" aria-hidden>
          <img src="assets/camicon.svg" alt="camera icon" />
        </div>
      </div>
      <button className="profile_btn">
     
    
      </button>
      <p>John Abidoye</p>
      <p id="twitter">SardiusJay</p>
      <p id="slack">SardiusJay</p>
    </section>
  );
}

export default Profile;
