import './main-page.css'

function MainPage() {
  
    return (
      <>
        <div className="background">
            <div className="top-navbar">
                <div className="container">
                    <a href="#">
                        <img src="./src/assets/conUlogo.png" alt="Concordia Logo" className='icon'/>
                    </a>
                    <form action="" method="post">
                        <input type="text" className='input-myLocation' placeholder='I am at...'/>
                    </form>
                </div>
                <div className="container">
                    <img src="./src/assets/message.png" alt="message" />
                    <img src="./src/assets/bell.png" alt="bell" />
                    <a href="#">
                        <img src="./src/assets/choppa.jpg" alt="Profile Picture" className='icon'/>
                    </a>
                </div>
            </div>
            <div className="side-navbar">

            </div>
            <div className="main-content">

            </div>
        </div>
      </>
    )
  }
  
  export default MainPage