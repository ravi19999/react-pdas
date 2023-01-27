import React from "react";
import ProfileCard from './ProfileCard';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-3'>
              <ProfileCard title="Alexa" handle="@alexa99" image="https://cdn.nerdyelectronics.com/wp-content/uploads/2019/10/amazon-alexa-transparent-logo.png" />
            </div>
            <div className='column is-3'>
              <ProfileCard title="Cortana" handle="@cortana" image="https://upload.wikimedia.org/wikipedia/commons/7/7a/Siri_Logo_in_2022.png?20220513194230" />
            </div>
            <div className='column is-3'>
              <ProfileCard title="Siri" handle="@siri01" image="https://e1.pngegg.com/pngimages/758/266/png-clipart-simply-styled-icon-set-731-icons-free-cortana-round-blue-and-teal-logo-thumbnail.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
