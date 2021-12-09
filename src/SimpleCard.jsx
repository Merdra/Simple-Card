import React from "react";
import Image from "./Image";
import Logo from "./logo.jpg";
import Title from "./Title";
import Description from "./Description";

class SimpleCard extends React.Component {
    render() {
        return(
            <div>
<br />
<br />
<div className="container">
	<div className="row main-card">
		<div className="col-md-6 offset-md-3">
			<div className="card mb-3" style={{maxWidth: "540px"}}>
			  <div className="row no-gutters">
			    <div className="col-md-4">
			      <Image name={Logo}/>
			    </div>
	    <div className="col-md-8 message">
	      <div className="card-body">
	        <Title name="A good programmer" />
           </div>

           <div className="card-text">
            <Description name={<p><em>Any person can write a code that a computer can understand. A good programmer write codes that humans can understand</em></p>} />          
	      </div>
	    </div>
  	</div>
</div>
</div>
</div>
</div>
</div>
        )
    }
};

export default SimpleCard;