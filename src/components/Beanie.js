import React from 'react';

function Beanie() {

    return(
        <div>
        <img src={props.beanie.image} />
        <h4>
          {props.beanie.name}
        </h4>
        {/* <p>Year: {this.props.painting.date}</p>
        <p>
          Dimensions: {this.props.painting.dimensions.width} in. x {this.props.painting.dimensions.height} in.
        </p> */}

        <div className="ui labeled button" tabIndex="0">
          <div className="ui red button" onClick={this.addVote}>
            <i className="heart icon"></i> Add Vote
          </div>
          <a className="ui basic red left pointing label">
            {this.state.votes}
          </a>
        </div>
      </div>
    )
}