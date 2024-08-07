
function Skills() {
  return (
    <>
        <div className="container" >
        <h2 id="skills" className="title">My Skills</h2>
        <h3 className="container__title">Languages and Tools</h3>
        <h4 className="container__title2">Frontend</h4>
            <ul className="container__front">  
                <div className="container__div">
                    <li className="container__front--li">HTML5 </li>
                    <img className='icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="Logo HTML" />
                </div>
                <div className="container__div">
                    <li className="container__front--li">CSS3</li>
                    <img className="icon" src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-svg-vector.svg" alt="Logo CSS" /> 
                </div>
                <div className="container__div">
                    <li className="container__front--li">SASS </li>
                    <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" alt="Logo SASS" />
                </div>    
                <div className="container__div">
                    <li className="container__front--li">JavaScript </li>
                    <img  className="icon" src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="Logo JavaScript" /> 
                </div>
                <div className="container__div">
                    <li className="container__front--li">React </li>
                    <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="Logo React" />
                </div>
                <div className="container__div">
                    <li className="container__front--li">Tailwind </li>
                    <img className="icon" src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png" alt="Logo Tailwind" />
                </div>
            </ul>
        <h4 className="container__title2">Backend</h4>
            <ul className="container__back">
                <div  className="container__div">
                    <li className="container__back--li">NodeJS </li>
                    <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" alt="Logo NodeJS" /> 
                </div>
                <div className="container__div">
                    <li className="container__back--li">Express  </li>
                    <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Logo Express" />
                </div>
                <div className="container__div">
                    <li className="container__back--li">MySQL </li>
                    <img className="icon" src="https://banner2.cleanpng.com/20190129/wye/kisspng-mysql-logo-database-microsoft-sql-server-mysql-logo-png-5c50f3cccbcb93.2972032015488091648348.jpg" alt="Logo MySQL" />
                </div>
                
            </ul>
        <h4 className="container__title2">Tools and others</h4>
            <ul className="container__tools">
                <div className="container__div">
                    <li className="container__tools--li">Git</li>
                    <img className="icon" src="https://camo.githubusercontent.com/b95fa10463b048819574fa4a9d865e5a11b9f3ea86800d6dce8678f348df11cf/68747470733a2f2f6432387978327a6f7079783261642e636c6f756466726f6e742e6e65742f6173736574732f6769742e706e67" alt="Logo Git" /> 
                </div>
                <div className="container__div">
                    <li className="container__tools--li">GitHub</li>
                    <img className="icon" src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" alt="Logo GitHub" /> 
                </div>
                
                <div className="container__div">
                    <li className="container__tools--li">Postman</li>
                    <img className="icon" src="https://cdn.worldvectorlogo.com/logos/postman.svg" alt="Logo Postman" />
                </div>
                
            </ul>
        </div>
           
            
    </>
  )
}

export default Skills