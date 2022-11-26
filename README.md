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
  - [example](./src/ch2/read-file): giới thiệu về asynchronous của Node.js thông qua việc read file

- **2.4 Building a web server with Node: the http module**
  - [example](./src/ch2/hello-world): viết chương trình hello world của web server sử dụng http module (của Node.js)

## Chapter 3: Foundations of Express

- **3.1 Middleware**
  - giới thiệu về nguyên lý của middleware

- **3.1.1 Hello World with Express**
  - [example](./src/ch3/hello-world): dựng một hello world Express project

- **3.1.2 How middleware works at a high level**
  - cách design một middleware stack gồm logging middleware, authorization middleware và send secret info middleware

- **3.1.3 Middleware code that’s passive**
  - [example](./src/ch3/hello-world): bổ sung log middleware vào hello world program ở trên

- **3.1.4 Middleware code that changes the request and response**
  - [example](./src/ch3/hello-world): bổ sung authorization middleware vào hello world program ở trên

- **3.1.5 Third-party middleware libraries**
  - [logging middleware](./src/ch3/logging-middleware): sử dụng logging middleware trong morgan library
  - [static middleware](./src/ch3/static-middleware): sử dụng static middleware có sẵn trong Express

- **3.2 Routing**
  - [example](./src/ch3/routing): sử dụng routing để map request đến một handler cụ thể (có hỗ trợ regular expression để thực hiện các complex mapping)

- **3.3 Extending request and response**
  - `req` và `res` object của Express có một số extra property, ví dụ như `req.ip` có thể dùng để block các evil IP

- **3.4 Views**
  - [example](./src/ch3/ejs-example): sử dụng EJS view engine để cung cấp các HTML file

- **3.5 Example: putting it all together in a guestbook**
  - [example](./src/ch3/guestbook): guestbook app gồm home page và một page cho phép thêm các guestbook entry

## Chapter 4: Middleware

- **4.1 Middleware and the middleware stack**
  - giới thiệu về nguyên lý hoạt động của middleware stack

- **4.2 Example app: a static file server**
  - [example](./src/ch4/static-file): middleware stack của application này: logger, static file và 404 handler

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
  - [example](./src/ch4/error-handling-middleware): giới thiệu về error-handling middleware: là các middleware gồm 4 tham số
