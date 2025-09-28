# Render Panel

Deploy this folder on Render or Vessel as a Web Service. This build **does not** include PM2 or bot process control. Use Render to host the panel (dashboard + billing) only.

Steps:
1. Push this folder to GitHub.
2. Create a new Web Service on Render and connect the repo.
3. Build command: `npm install && npm run migrate`
4. Start command: `npm start`

Set environment variables from `.env.example`.
