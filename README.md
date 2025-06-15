ExpServer
A basic web server built using Express.js. This project demonstrates simple routing, middleware usage, and rendering styled HTML pages directly from your server.

🚀 Features
Set up a simple and elegant web server using Express.js

Handles basic routing for three endpoints:

/ (Home Page)

/second (Second Page)

/third (Third Page)

Includes middleware for logging all incoming requests

Sends back clean, styled HTML pages directly from the server (no template engine)

Uses only core functionality from Express.js

📦 Installation
Clone the repository:

bash

git clone https://github.com/dhruv00712/ExpServer.git
Navigate into the project directory:

bash

cd ExpServer
Install dependencies (Express is required):

bash

npm install
▶️ Run the Server
Start the server with:

bash
node index.js

(Replace index.js with your actual filename if different)

🌐 Access the Server
Once the server is running, open your browser and visit:

🏠 Home Page: http://localhost:3000/

📄 Second Page: http://localhost:3000/second

📄 Third Page: http://localhost:3000/third



📁 Routes
Home Page
GET /
Displays a welcome message on the home page.
Example:
http://localhost:3000/

Second Page
GET /second
Displays content for the second page.
Example:
http://localhost:3000/second

Third Page
GET /third
Displays content for the third page.
Example:
http://localhost:3000/third

🛠️ Technologies Used
Node.js

Express.js


📄 License
MIT © Dhruv
