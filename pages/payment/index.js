export default function Payment() {
    return (
      <div className="login" style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        // backgroundImage: 'url("'+BgLogin+'")',
        // backgroundSize: 'cover',
        //   backgroundPosition: 'center center',
      }}>
        <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <form>
                        <div className="form-group mb-3">
                          <input className="form-control" placeholder="Full Name" />
                        </div>
                        <div className="form-group mb-3">
                          <input className="form-control" placeholder="ID Member" />
                        </div>
                        <div className="form-group mb-3">
                          <input className="form-control" placeholder="Phone Number" />
                        </div>
                        <div className="form-group mb-3">
                          <input className="form-control" placeholder="Gender" />
                        </div>
                        <div className="form-group mb-3">
                            <label for="exampleFormControlSelect1">Membership Category</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                        </div>
                        <div className="form-group mb-3">
                          <input type="date" className="form-control" placeholder="Join Date" />
                        </div>
                        <div className="form-group mb-3">
                          <button className="btn btn-primary" style={{width: "100%"}}>Register</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
      
    )
  }
  