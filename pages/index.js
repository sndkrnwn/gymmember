import Link from 'next/link'
export default function Home() {
  return (
    <div className="login" style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#524eb7"
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
                        <input className="form-control" placeholder="Username" />
                      </div>
                      <div className="form-group mb-3">
                        <input className="form-control" placeholder="Password" type="password" />
                      </div>
                      <div className="form-group mb-3">
                      <Link href="/landing"><button className="btn btn-primary" style={{width: "100%"}}>Get Started</button></Link>
                      </div>
                      <div className="form-group">
                      <Link href="/register"> <button className="btn btn-secondary" style={{width: "100%"}}>Don't have account?</button></Link>
                       
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
