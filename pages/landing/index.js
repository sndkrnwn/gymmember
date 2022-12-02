import Link from 'next/link'
export default function Landing() {
    return (
      <div className="login" style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}>
        <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                        John Doe
                    </div>
                  </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div classnName="card">
                            <div className="card-body">
                                <p>Attendance</p>
                                <h2>1/30</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <ul class="list-group">
                        <li class="list-group-item mb-3">
                        <Link href="/activity">Acitivy</Link>
                        </li>
                        <li class="list-group-item mb-3">Edit Profile</li>
                        <li class="list-group-item mb-3">Sign Out</li>
                        </ul>
                    </div>
                </div>
              </div>
            </div>
      </div>
      
    )
  }
  