import React from "react";

class Post extends React.Component {
  render() {
    return (
      <div>
        <p onClick={() => this.props.edit("Fayzulloh")}>
          Lorem ipsum dolor. <sub>{this.props.masalan}</sub>
        </p>
        <img
          onClick={this.props.loger}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        />
      </div>
    );
  }
}

export default Post;
