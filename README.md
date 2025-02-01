Quiz App - TestLine

Live Links
Frontend: https://testlineclient.vercel.app/

Backend API: https://testline-backend-co5x.onrender.com/api/result

![image_alt](https://github.com/jaygupta18/Testline/blob/8d302993ab3f7d86d422371155cb495c749fba62/React%20App%20-%20Brave%2001-02-2025%2019_41_52.png)

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

git clone https://github.com/jaygupta18/Testline.git --
run command -- cd client
Install Dependencies:

run command -  npm install-
Run the Development Server:

run command -  npm run start -
The app will be running at http://localhost:3000.

Backend:
run command - 
cd backend
run command --
npm install
Set Up Environment Variables: 
Create a .env file in the root directory and add the following:

MONGODB_URI=your_mongodb_connection_string
Run the Server -
node index.js
-
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

After completing the quiz, you'll see your score, accuracy.


GAMIFICATION FEATURES :-
1) A timer will start when users will start the quiz or move to the next questions .
2) Score will be displayed at the left side of the page whole time .
3) When users gives the right answer the feedback mechanism works and displayed "congratulations,keep it up" and when users gives wrong answers it will encourageand  show "try again"
4) Result will be displayed when user finishes the test .



Acknowledgments
Thanks to Render for hosting the backend.

Thanks to Vercel for hosting the frontend.

Contact
If you have any questions or feedback, feel free to reach out:

Email: jaykumarguptajti@gmail.com

GitHub: https://github.com/jaygupta18/
