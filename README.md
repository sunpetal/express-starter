Getting Started

First, clone this repository and enter its folder:

git clone <repo-url>
cd <repo-directory>

1. Client Setup

Open your first terminal and:

cd client
npm install
npm run build # Compile assets for production
npm run dev # Start the client app in development mode

Once that’s running, you’ll typically see the client at http://localhost:3000 (or whatever port Vite reports).

2. Server Setup

Open a second terminal and:

cd server
npm install
npm run build # Transpile/prepare server code
npm run dev # Start the server in development mode

By default the server should run at http://localhost:3001.
