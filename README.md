# Express In Action

## Chapter 2: The basics of Node.js

- **2.1 Installing Node**
  - hướng dẫn cài đặt Node.js và giới thiệu về NVM

- **2.1.1 Running your first Node script**
  - cách chạy một file trong Node.js

- **2.2 Using modules**

- **2.2.1 Requiring built-in modules**
  - cách import url module vào file hiện tại

- **2.2.2 Requiring third-party modules with package.json and npm**
  - giới thiệu về file `package.json`, `npm` và directory `node_modules`

- **2.2.3 Defining your own modules**
  - cách define một module và sử dụng module đó trong một file khác

- **2.3 Node: an asynchronous world**
  - [read file](./src/ch2/read-file): giới thiệu về asynchronous của Node.js thông qua việc read file

- **2.4 Building a web server with Node: the http module**
  - [hello world](./src/ch2/hello-world): viết chương trình hello world của web server sử dụng http module (của Node.js)

## Chapter 3: Foundations of Express

- **3.1 Middleware**
  - giới thiệu về nguyên lý của middleware

- **3.1.1 Hello World with Express**
  - [hello world](./src/ch3/hello-world): dựng một hello world Express project

- **3.1.2 How middleware works at a high level**
  - cách design một middleware stack gồm logging middleware, authorization middleware và send secret info middleware

- **3.1.3 Middleware code that’s passive**
  - bổ sung log middleware vào hello world program ở trên

- **3.1.4 Middleware code that changes the request and response**
  - bổ sung authorization middleware vào hello world program ở trên

- **3.1.5 Third-party middleware libraries**
  - [logging middleware](./src/ch3/logging-middleware): sử dụng logging middleware trong morgan library
  - [static middleware](./src/ch3/static-middleware): sử dụng static middleware có sẵn trong Express

- **3.2 Routing**
  - [routing](./src/ch3/routing): sử dụng routing để map request đến một handler cụ thể (có hỗ trợ regular expression để thực hiện các complex mapping)

- **3.3 Extending request and response**
  - `req` và `res` object của Express có một số extra property, ví dụ như `req.ip` có thể dùng để block các evil IP

- **3.4 Views**
  - [EJS example](./src/ch3/ejs-example): sử dụng EJS view engine để cung cấp các HTML file

- **3.5 Example: putting it all together in a guestbook**
  - [guestbook](./src/ch3/guestbook): guestbook app gồm home page và một page cho phép thêm các guestbook entry

## Chapter 4: Middleware

- **4.1 Middleware and the middleware stack**
  - giới thiệu về nguyên lý hoạt động của middleware stack

- **4.2 Example app: a static file server**
  - [static file](./src/ch4/static-file): middleware stack của application này: logger, static file và 404 handler

- **4.2.1 Getting set up**
  - dựng Node.js project và cài đặt các dependency

- **4.2.2 Writing your first middleware function: the logger**
  - viết logger middleware với 2 case: gọi `next()` và không gọi `next()`

- **4.2.3 The static file server middleware**
  - static file middleware: cung cấp file nếu file đó tồn tại, không thì nhảy qua middleware tiếp theo

- **4.2.4 404 handler middleware**
  - 404 handler middleware: nếu không tìm thấy file sẽ ném ra error này

- **4.2.5 Switching your logger to an open source one: Morgan**
  - sử dụng Morgan library để thay thế cho logger middleware đã viết trước đó

- **4.2.6 Switching to Express’s built-in static file middleware**
  - sử dụng static middleware của Express để thay thế cho static file middleware đã viết trước đó

- **4.3 Error-handling middleware**
  - [error handling middleware](./src/ch4/error-handling-middleware): giới thiệu về error-handling middleware: là các middleware gồm 4 tham số

## Chapter 5: Routing

- **5.1 What is routing?**
  - công dụng của routing: map một cặp VERB + URI đến một request handler cụ thể

- **5.1.1 A simple routing example**
  - [Olivia example](./src/ch5/olivia-example): sử dụng routing feature của Express để viết một route `GET /olivia`

- **5.2 The features of routing**

- **5.2.1 Grabbing parameters to routes**
  - cách define và lấy các parameter từ URL

- **5.2.2 Using regular expressions to match routes**
  - sử dụng regular expression để mô tả các parameter phức tạp trên URL

- **5.2.3 Grabbing query arguments**
  - cách lấy các query argument từ URL

- **5.3 Using routers to split up your app**
  - cách define các route và các request handler của chúng ở một module riêng (tách ra khỏi file `app.js`)

- **5.4 Serving static files**

- **5.4.1 Static files with middleware**
  - cải tiến static file example: đăng ký nhiều static file middleware và phân vùng cho chúng (sử dụng path)

- **5.4.2 Routing to static files**
  - send static file với một route chứa parameter: không thể dùng static middleware của Express được nữa, phải tự define middleware

- **5.5 Using Express with HTTPS**
  - nguyên lý hoạt động của TLS layer và cách setting HTTPS

- **5.6 Putting it all together: a simple routing demo**
  - example: hiển thị nhiệt độ của một thành phố từ ZIP code được nhập vào form

## Chapter 6: Building APIs

- **6.1 A basic JSON API example**
  - cách hoạt động của API server: các UI khác nhau có thể dùng chung một API server

- **6.2 A simple Express-powered JSON API**
  - [random number generator](./src/ch6/random-number-generator): khi truy cập vào path `GET /random/:min/:max` sẽ nhận về một số random

- **6.3 Create, read, update, delete APIs**
  - giới thiệu về CRUD model

- **6.3.1 HTTP verbs (also known as HTTP methods)**
  -giới thiệu về 4 HTTP method thường dùng nhất: GET, POST, PUT, DELETE

- **6.3.2 CRUD applications with HTTP methods**
  - map các HTTP method vào trong photo-sharing app

- **6.4 API versioning**
  - [API versioning](./src/ch6/api-versioning): cách sử dụng router để đánh version cho API

- **6.5 Setting HTTP status codes**
  - giới thiệu chung về các HTTP status code

- **6.5.1 Setting HTTP status codes**
  - cách set status code trong Express: sử dụng `status` method (là một chainable method)

- **6.5.2 The 100 range**
  - chỉ nói sơ qua về status code 100 và 101, không đi sâu vào

- **6.5.3 The 200 range**
  - là các status code thành công: trong quá trình thực hiện không phát sinh ra lỗi

- **6.5.4 The 300 range**
  - các status code về redirect

- **6.5.5 The 400 range**
  - các status code thông báo lỗi đến từ client

- **6.5.6 The 500 range**
  - status code thông báo lỗi đến từ server

## Chapter 8: Persisting your data with MongoDB

- **8.1 Why MongoDB?**
  - lý giải việc lựa chọn NoSQL database (cụ thể là MongoDB) thay vì các SQL database khác

- **8.1.1 How Mongo works**
  - giới thiệu về các khái niệm database, collection, document trong MongoDB

- **8.1.2 For you SQL users out there**
  - mapping thuật ngữ giữa SQL database và NoSQL database

- **8.2 Talking to Mongo from Node with Mongoose**
  - [lam](src/ch8/lam): giới thiệu mongoose library, dùng để giao tiếp với MongoDB từ Node.js

- **8.2.1 Setting up your project**
  - giới thiệu về LAM social application và dựng một project cho application này

- **8.2.2 Creating a user model**
  - tạo user model: define các field, pre-save action và các method (`name` và `checkPassword`)

- **8.2.3 Using your model**
  - giới thiệu hầu hết logic của LAM application: register new account, danh sách và chi tiết user

- **8.3 Authenticating users with Passport**

- **8.3.1 Setting up Passport**
  - setting up the passport middleware: để setup cho passport cần include một số middleware như body-parser, cookie-parser,...
  - serializing and deserializing users: setup serializeUser và deserializeUser cho passport
  - the real authentication: áp dụng local strategy cho passport
  - the routes and the views: thực hiện 3 view còn lại là login, logout và profile editing

## Chapter 9: Testing Express applications

- **9.1 What is testing and why is it important?**
  - giới thiệu về automated test và các ưu điểm của nó so với manual test

- **9.1.1 Test-driven development**
  - ưu điểm và nhược điểm của 2 cách viết test: viết test trước và viết code trước
  - giới thiệu về TDD và life cycle của nó: gồm các step red, green và refactor

- **9.1.2 Cardinal rule: when in doubt, test**
  - test nhiều code nhất có thể để đảm bảo code hoạt động đúng

- **9.2 Introducing the Mocha testing framework**
  - [capitalize](src/ch9/capitalize): giới thiệu về testing framework Mocha

- **9.2.1 How does Node.js testing work?**
  - giới thiệu 3 phần chính của testing trong Node.js: real code, testing code và test runner

- **9.2.2 Setting up Mocha and the Chai assertion library**
  - thực hiện viết real code (file `capitalize.js`) và thêm file `package.json`
  - phân biệt giữa 2 library Mocha (là một testing framework) và Chai (là một assertion library)

- **9.2.3 What happens when you run your tests**
  - khi type `npm test` sẽ chạy tất cả file `.js` trong `test` directory

- **9.2.4 Writing your first test with Mocha and Chai**
  - tạo file `capitalize.js` và viết test đầu tiên cho `capitalize` function

- **9.2.5 Adding more tests**
  - thêm các test cho `capitalize` function

- **9.2.6 More features of Mocha and Chai**
  - running code before each test: cách sử dụng `beforeEach`
  - testing for errors: dùng khi muốn confirm sẽ ném ra một error ở đây
  - reversing tests: sử dụng `.not` để đảo ngược assertion

- **9.3 Testing Express servers with SuperTest**
  - [What's my User Agent](src/ch9/whats-my-useragent): thực thực hiện test các API endpoint thông qua integration test (sử dụng SuperTest library)

- **9.3.1 Testing a simple API**
  - thực hiện viết các integration test cho các plain-text response

- **9.3.2 Filling in the code for your first tests**
  - viết real code cho application để đáp ứng các test vừa viết ở trên

- **9.3.3 Testing HTML responses**
  - thực hiện viết các integration test cho test HTML và real code của chúng
