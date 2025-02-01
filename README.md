Quiz App - TestLine

Live Links
Frontend: https://testlineclient.vercel.app/

Backend API: https://testline-backend-co5x.onrender.com/api/result

Features
Interactive Quiz: Answer multiple-choice questions and get instant feedback.

Timer: Each question has a timer to track how long you take to answer.

Score Tracking: Earn points for correct answers and see your total score at the end.

Feedback Messages: Get encouraging messages like "Congratulations, keep it up!" for correct answers and "Try again!" for incorrect ones.

Detailed Explanations: Learn more with detailed explanations for each question.

Responsive Design: Works seamlessly on all devices, from desktops to mobile phones.

Tech Stack
Frontend:
React
CSS (for styling)
Axios (for API calls)

Backend:
Node.js
Express.js
MongoDB 

Project Setup
Frontend Setup
Clone the Repository:

git clone https://github.com/your-username/testline-client.git
cd testline-client
Install Dependencies:

bash
Copy
npm install
Run the Development Server:

bash
Copy
npm start
The app will be running at http://localhost:3000.

Build for Production:

bash
Copy
npm run build
Backend Setup
Clone the Repository:

bash
Copy
git clone https://github.com/your-username/testline-backend.git
cd testline-backend
Install Dependencies:

bash
Copy
npm install
Set Up Environment Variables:
Create a .env file in the root directory and add the following:

env
Copy
PORT=5000
MONGODB_URI=your_mongodb_connection_string
Run the Server:

bash
Copy
npm start
The backend will be running at http://localhost:5000.

API Endpoint:

Fetch quiz data: GET /api/result

How to Use
Start the Quiz:

Click the "Start Quiz" button on the homepage.

Answer Questions:

Read the question and select the correct answer from the options.

You'll see instant feedback and a timer for each question.

View Results:

After completing the quiz, you'll see your score, accuracy, and total time taken.

Contributing
We welcome contributions! If you'd like to contribute to this project, follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Make your changes and commit them.

Submit a pull request with a detailed description of your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Thanks to Render for hosting the backend.

Thanks to Vercel for hosting the frontend.

Contact
If you have any questions or feedback, feel free to reach out:

Email: your-email@example.com

GitHub: your-username
