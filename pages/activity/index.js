import Link from 'next/link'
export default function Activity() {
    return (
      <div className="login" style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}>
        <div className="container">
            <div className="header">
                <p>Back</p>
                <h2>Activity</h2>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3">
                    <Link href="/payment">
                    <div className="card-body">
                            <p>1 Month Membership</p>
                        </div>
                    </Link>
                        
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <p>3 Month Membership</p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <p>12 Month Membership</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
    )
  }
  