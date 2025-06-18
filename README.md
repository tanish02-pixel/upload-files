# 📁 File Upload Web App

A simple and beautiful file upload and preview web application built with:

- Node.js + Express
- MongoDB (Mongoose)
- Multer (for file handling)
- EJS (for frontend templating)
- Vanta.js + Three.js (for 3D animated background)

---

## 🚀 Features

✅ Upload image or document files  
✅ Preview uploaded images  
✅ Show 📄 icon for non-image files like PDFs  
✅ Download any uploaded file  
✅ View all previously uploaded files  
✅ MongoDB database integration  
✅ Stylish UI with 3D animated background  
✅ Responsive & clean layout  

---

## 🛠️ Technologies Used

- **Node.js** + **Express** (Backend)
- **MongoDB** with **Mongoose** (Database)
- **Multer** (File upload middleware)
- **EJS** (Frontend templating)
- **CSS3**, **Flexbox**, **Grid**
- **Vanta.js** + **Three.js** (3D background effect)

---

## 📦 Installation & Setup

### 1. Clone the repository

git clone https://github.com/your-username/upload-files.git
cd upload-files



2. Install dependencies
bash
Copy
Edit
npm install



3. Configure environment variables
Create a .env file in the root:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_uri
Note: Never share .env in public! It's in .gitignore.


4. Start the server
bash
Copy
Edit
npm run dev
Now visit http://localhost:8000




🌐 Deployment (Render)
Push your project to GitHub

Go to https://render.com

Create a new Web Service:

Environment: Node

Build Command: npm install

Start Command: node index.js or npm start

Add environment variable:

Key: MONGO_URI

Value: Your MongoDB Atlas URI




📁 Folder Structure
java
Copy
Edit
📁 upload-files/
├── 📁 views/           → EJS templates
├── 📁 public/          → Static files (CSS, images)
├── 📁 uploads/         → Stored uploaded files
├── 📄 index.js         → Main Express server
├── 📄 .env             → Mongo URI (excluded)
├── 📄 .gitignore       
├── 📄 README.md



👤 Author
Tanish Singh
Feel free to connect or give ⭐️ if you like it!


📄 License
MIT License - Free to use for personal or commercial projects.

Let me know if you want this to include **dark mode**, **Drag & Drop** upload, or a **React version** too!
