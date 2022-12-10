import React from "react";


const Contactus = () => {

    
  return (

    <>
  <div id="bgv" >
  
      <h2 id="spn">Contact <span>Us</span></h2>
      <div className="container rbg shadow p-3 mb-5 bg-white rounded mt-5">
      <form>
      <div className=" row ">
        <div  className="col-12 col-lg-6">
        <div><div className="mb-2">
      <label htmlFor="exampleFormControlInput1" className="form-label"></label>
         <input type="text" className="form-control"  required placeholder="name"/>
    </div></div>
       <div><div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label"></label>
         <input type="email" className="form-control"  required placeholder="Email address"/>
    </div></div>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" required placeholder="passsword"/>
    </div>
       <div> <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label"></label>
         <input type="text" className="form-control"  required placeholder="phone no."/>
    </div></div>
       <div className="mb-3">
   
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required placeholder="message"></textarea>
      </div>
      <button className="btn-lg" type="submit">send</button>
        </div>
        <div className="col col-lg-6" >
          <map><div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Dr%20Baba%20Saheb%20Ambedkar%20Rd,%20Juna%20Bazar,%20Kasba%20Peth,%20Pune,%20Maharashtra%20411011&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://fmovies-online.net"></a><br/><style>(position:relative;text-align:right;height:500px;width:600px;)</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas overflow:hidden;background:none!important;height:500px;width:600px;</style></div></div></map>
        </div>
      </div>
      </form>
      </div>
      </div>
    </>
  );
};

export default Contactus;
