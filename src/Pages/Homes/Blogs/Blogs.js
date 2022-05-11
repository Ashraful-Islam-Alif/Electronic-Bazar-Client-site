import React from 'react';

const Blogs = () => {
    return (
        <div className='container m-5 mx-auto'>
            <div className='card m-3'>
                <div className="card-body">
                    <h5 className="card-title">1. Difference between javascript and nodejs</h5>
                    <p className="card-text">JavaScript is a programming language that is used for writting script on the website. Only run in the browsers. It is used in 'font-end development.
                        <br />
                        NodeJs is a javascript runtime environment. It can be run outside the browser with the help of NodeJs. NodeJs is used on  server-side and used in server-side environment.
                    </p>
                </div>
            </div>
            <div className='card m-3'>
                <div className="card-body">
                    <h5 className="card-title">2. When should you use nodejs and when should you use mongodb</h5>
                    <p className="card-text">
                        We can use NodeJS when we want to connect our client site to database by it's server site.
                        <br />
                        We can use MongoDB when we can want to store data in database. Efficiently store documents in a database and  perform operations like data updates, or to search documents.                    </p>
                </div>
            </div>
            <div className='card m-3'>
                <div className="card-body">
                    <h5 className="card-title">3. When should you use nodejs and when should you use mongodb</h5>
                    <p className="card-text">
                        SQL is a fixed or static or predefined database. It is best for complex queries and vertically scalable.
                        <br />
                        NoSQL is a dynamic schema database. It is not best for complex queries and horizontally scalable.
                    </p>
                </div>
            </div>
            <div className='card m-3'>
                <div className="card-body">
                    <h5 className="card-title">4. What is the purpose of jwt and how does it work</h5>
                    <p className="card-text">

                        JWT securely transmits information between two parties from client site to server. By which we can caught unauthorized user. JWT is mainly used for authorization.
                        <br />
                        JWT works in following steps:
                        <br />
                        1. Client login with username and password.
                        <br />
                        2. Server creates a token for the client.
                        <br />
                        3. Server sends a token to the client.
                        <br />
                        4. Client stores the token on either local storage or browser cookies.
                        <br />
                        5. Client makes a request, a copy of the token is send to the server for authorization.
                        <br />
                        6. Server verifies the JWT signature before giving the authorization.
                        <br />
                        7. Server responds to the client's request.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;