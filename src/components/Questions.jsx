import React from "react";

class Questions extends React.Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="../assets/profile_pic.jpg" alt="PlaceHolder" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4 my-2">John Doe</p>
                <p className="@john_doe"></p>
              </div>
            </div>

            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                molestias tempora quibusdam, cum dignissimos at similique
                suscipit deserunt, ea quasi hic quia magnam! Deserunt amet
                repudiandae dolorem corporis assumenda minus.
              </p>
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Questions;
