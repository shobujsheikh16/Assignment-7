# KeenKeeper — Keep Your Friendships Alive

**KeenKeeper** is a personal relationship management tool designed to help users maintain consistent contact with their friends. It tracks interaction history, sets communication goals, and visualizes social health through data analytics.

---

##  Key Functionalities

### 1. Smart Friends Dashboard
* **Dynamic Grid:** Displays all friends in a 4-column layout on desktop and a single column on mobile.
* **Status Indicators:** Automatically categorizes friends into **Overdue**, **Almost Due**, or **On-track** using color-coded badges based on the last contact date.
* **Realistic Profiles:** Each card features a profile picture, name, contact tags (e.g., "Work", "College"), and a summary of the relationship.

### 2. Detailed Friend Profiles
* **Two-Column Layout:** A dedicated page for each friend showing their full bio, email, and goals.
* **Quick Check-In:** Functional buttons for **Call**, **Text**, and **Video**. Clicking these buttons instantly logs an interaction and triggers a toast notification.
* **Action Center:** Includes UI placeholders for Snoozing, Archiving, and Deleting friends to manage the list.

### 3. Interactive Timeline
* **Activity History:** A complete log of every interaction (call, text, or video) triggered from the profile pages.
* **Smart Filtering:** Users can filter the timeline to view only specific interaction types (e.g., only Video calls).
* **Metadata:** Displays the specific date and type-specific icons for every entry.

### 4. Friendship Analytics (Stats)
* **Data Visualization:** A beautiful **Pie Chart** powered by Recharts that breaks down the percentage of calls, texts, and video calls made.
* **Progress Tracking:** Provides a high-level view of how you are communicating with your social circle.

### 5. Seamless User Experience
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop screen sizes.
* **Loading States:** Smooth loading animations while fetching friend data.
* **Error Handling:** A custom **404 Page** to handle invalid routes and ensure a smooth navigation experience.

---

##  Technologies Used
* **React.js / Next.js** – Core UI Framework
* **Tailwind CSS** – Styling and Responsive Layouts
* **React Router / Next Router** – Navigation Management
* **Recharts** – Data Visualization and Analytics
* **React Hot Toast** – User Notifications
