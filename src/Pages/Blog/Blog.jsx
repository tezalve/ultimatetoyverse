import React from 'react';

const Blog = () => {
    return (
        <div className='bg-dark text-white p-5'>
            <h1>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p>All the information required by the server to determine whether the user or device may access the resource you are seeking is contained in the access token. Usually, these are tokens that have expired or have a short validity time. <br />
                A fresh access token is created using the refresh token. The user would typically need to authenticate once again in order to get an access token if the access token had an expiration date. The user may continue to access the application resources by skipping this step if they have a refresh token and instead making a request to the API to obtain a new access token. Access tokens can be kept in HTTP-only cookies. Because cookies cannot be retrieved by JavaScript in this method, the risk of cross-site scripting attacks is reduced. However, other factors like CSRF protection can be necessary.
            </p>
            <h1>Compare SQL and NoSQL databases?</h1>
            <p>
                SQL Databases:
                <ul>
                    <li>Use tables, columns, and rows to organize data.</li>
                    <li>Suitable for applications with fixed data structures and well-defined relationships.</li>
                    <li>Provide strong ACID compliance for data integrity and consistency.</li>
                    <li>Typically scale vertically and have more limitations when it comes to horizontal scalability.</li>
                    <li>Utilize the SQL language for querying and manipulating data.</li>
                </ul>
                NoSQL Databases:
                <ul>
                    <li>Embrace a flexible and dynamic data model.</li>
                    <li>Can be document-based, key-value stores, wide-column stores, or graph databases.</li>
                    <li>Suited for applications with evolving data structures and unstructured/semi-structured data.</li>
                    <li>Prioritize scalability and horizontal scaling across multiple servers.</li>
                    <li>Offer varying levels of ACID compliance, often sacrificing strict consistency for performance and scalability.</li>
                    <li>Use different query languages or APIs specific to their data model.</li>
                </ul>
            </p>
            <h1>What is express js? What is Nest JS?</h1>
            <p>A simple web application framework for Node.js is called Express.js. It offers a straightforward and adaptable collection of tools for creating APIs and web apps. Express.js gives programmers the ability to manage middleware, build routes, process HTTP requests, and generate dynamic views. It is renowned for its portability, simplicity of use, and wide range of middleware and plugins. <br /> A full-featured, progressive framework for creating scalable and maintainable server-side applications is NestJS, on the other hand. It is based on Node.js and makes use of TypeScript to create strong, enterprise-level apps. Object-oriented, functional, and reactive programming ideas are all included into NestJS. It stresses modularity, dependency injection, and adheres to MVC (Model-View-Controller) architectural conventions. A strong and opinionated framework offered by NestJS promotes best practices, code organization, and testability.
            </p>
            <h1>What is MongoDB aggregate and how does it work?</h1>
            <p>You may carry out sophisticated data aggregation operations on MongoDB collections using the robust aggregation framework known as MongoDB's aggregate. It offers a versatile and effective method for handling, transforming, and analyzing data. <br />
            To alter and change data, the aggregate operation passes it through a number of phases. Each step in the pipeline applies a particular operation on the input data before sending the results to the following stage. Filtering, grouping, sorting, projecting, and doing different calculations on the data are a few examples of the steps.</p>
        </div>
    );
};

export default Blog;