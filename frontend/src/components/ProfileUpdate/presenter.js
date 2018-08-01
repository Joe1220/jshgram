import React, { Component } from "react";
import Textarea from "react-textarea-autosize";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";

class ProfileUpdate extends Component {
  render() {
    if(!this.props.profile) {
      return (
        <div className={styles.loading}>
          <Loading />
        </div>
      )
    } else {
      return <div className={styles.formComponent}>
          <div className={styles.imageField}>
            <div className={styles.image}>
              <img 
                src={this.props.profile_image || require("images/noPhoto.jpg")} 
                alt={this.props.userName} 
                className={styles.avatar} 
              />
            </div>
            <div className={styles.updateImage}>
              <span className={styles.username}>
                {this.props.userName}
              </span>
              <span className={styles.text}>
                <label htmlFor="imageUpload">{this.context.t("Profile Image Update")}</label>
                <input 
                  type="file" 
                  name="image" 
                  id="imageUpload"
                  onChange={this.props.handleImageChange} 
                  accept="image/*"/>
              </span>
            </div>
          </div>
          <form className={styles.form} onSubmit={this.props.submitUpdateProfile}>
            <div className={styles.field}>
              <span className={styles.label}>
                {this.context.t("Name")}
              </span>
              <input type="text" className={styles.input} value={this.props.name} onChange={this.props.handleInputChange} name="name" />
            </div>
            <div className={styles.field}>
              <span className={styles.label}>
                {this.context.t("Username")}
              </span>
              <input type="text" className={styles.input} value={this.props.userName} onChange={this.props.handleInputChange} name="userName" />
            </div>
            <div className={styles.field}>
              <span className={styles.label}>
                {this.context.t("Website")}
              </span>
              <input type="url" className={styles.input} value={this.props.website} onChange={this.props.handleInputChange} name="website" />
            </div>
            <div className={styles.field}>
              <span className={styles.label}>
                {this.context.t("Bio")}
              </span>
              <Textarea type="textarea" className={styles.input} value={this.props.bio ? this.props.bio : " "} onChange={this.props.handleInputChange} minRows={2} maxRows={5} name="bio" />
            </div>
            <div className={styles.field}>
              <span className={styles.label}>
                {this.context.t("Email")}
              </span>
              <input type="email" className={styles.input} value={this.props.email} onChange={this.props.handleInputChange} name="email" />
            </div>
            <div className={styles.field}>
              <span className={styles.label}>
                {this.context.t("Gender")}
              </span>
              <select name="gender" className={styles.input} onChange={this.props.handleInputChange} value={this.props.gender || ""}>
                <option value="male">{this.context.t("Male")}</option>
                <option value="female">{this.context.t("Female")}</option>
                <option value="">{this.context.t("Null")}</option>
              </select>
            </div>
            <input type="submit" className={styles.button} value={this.context.t("Submit")} />
          </form>
        </div>;
    }
  }

  static propTypes = {
    profile: PropTypes.shape({
      profile_image: PropTypes.string,
      username: PropTypes.string.isRequired,
      name: PropTypes.string,
      bio: PropTypes.string,
      website: PropTypes.string,
      gender: PropTypes.string
    }),
    handleInputChange: PropTypes.func.isRequired,
    submitUpdateProfile: PropTypes.func.isRequired,
    handleImageChange: PropTypes.func.isRequired
  }
  static contextTypes = {
    t: PropTypes.func.isRequired
  }
}

export default ProfileUpdate;