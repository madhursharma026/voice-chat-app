import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChatApp } from "mirrorfly-uikit/dist";
import "mirrorfly-uikit/dist/assets/scss/bundle.css";

function App() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false)

  function showFunction() {
    // alert(value)
    setShow(true)
  }

  return (
    <div className='container-md px-5'>
      {show !== true ?
        <>
          <h1 className="text-center mb-3">
            Voice Calling Website
          </h1>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Your Username" aria-label="Your Username" aria-describedby="button-addon2" onChange={(e) => setValue(e.target.value)} />
            <button class="btn btn-primary" type="button" id="button-addon2" style={{ width: '300px' }} onClick={() => showFunction()}>Login</button>
          </div>
        </>
        :
        <>
        </>
      }
      {show !== false ?
        <ChatApp
          licenseKey="dv41BxAsMPCLCi4s4Ad4aHZMGeV6ej"
          userIdentifier={value}
          apiUrl="https://api-preprod-sandbox.mirrorfly.com/api/v1"
          isSandBox={true} // if you are a sandbox user it is true
        />
        :
        <>
        </>
      }
    </div>
  );
}
export default App;