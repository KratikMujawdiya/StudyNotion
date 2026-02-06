# StudyNotion | An Edtech Platform

**StudyNotion** is an educational platform that allows users to sign up and log in, with authentication implemented using JWT tokens. The project utilizes cookies to store the token, while local storage retains the logged-in user's state. Users can create a profile and upload a profile picture, leveraging Cloudinary for image storage. Additionally, the platform offers features such as password change and reset.

## Project Description

Protected routes are implemented for both students and instructors to prevent unauthorized access. Instructors have the ability to create courses, publish them, and make changes to existing courses. They can also view the course ratings and add different sections and subsections to their courses.

### Features

- User authentication with JWT tokens
- Profile creation and profile picture upload using Cloudinary
- Password change and reset functionality
- Protected routes for instructors and students
- Course creation, publishing, and management for instructors
- Course ratings and reviews for students
- Payment integration with Razorpay
- Lecture completion tracking and course rating by students
- Contact form for outside users to reach the admin

## Technologies Used

- React.js
- Cloudinary
- MongoDB
- Mongoose
- MongoDB Atlas
- Razorpay Gateway
- React libraries: react-hook-form, react-rating-stars-component, react-redux, react-type-animation
- Tailwind CSS

## Installation

To install and set up the project locally, follow these steps:

1. Clone the repository: ..
2. Navigate to the project directory: `cd thestudynotion`
3. Install the dependencies: `npm install`
4. Configure the project:
   - Set up the MongoDB connection and provide the necessary credentials in the configuration file.
   - Configure the Razorpay payment gateway integration by adding your Razorpay API credentials.
   - Set up Cloudinary and add your Cloudinary API credentials.
5. Start the application: `npm run start`

## Usage

Once the project is set up and running, you can access the StudyNotion platform in your web browser. Here are some usage instructions:

1. Sign up or log in using your credentials.
2. Create a profile and upload a profile picture using Cloudinary.
3. Explore the available courses and read their ratings and reviews.

4. Purchase a course using the Razorpay payment gateway.
5. Complete lectures and rate the courses you have purchased.
6. If you are an instructor, you can create and publish courses, make changes to existing courses, and view course ratings.



## Contributing
Contributions to StudyNotion are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. 

## Contact
For any questions or inquiries, please reach out to mujawdiyakratik2901@gmail.com

