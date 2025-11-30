# Professional Certification Tracker

A comprehensive web application to track and manage professional certifications across multiple domains, with specialized features for both regular users and administrators.

## 🎯 Features

### Role Selection
- **Role-Based Access**: Users can choose between User and Admin roles at the landing page
- **Intuitive Navigation**: Beautiful 3D animated role selection cards with hover effects
- **Futuristic UI**: Modern gradient designs and animated background elements

### User Dashboard

#### 📚 Available Certifications
- **9 Professional Domains**: Data Science & Analytics, AI & ML, Cybersecurity, Cloud Computing, DevOps, Software Development, Database Administration, Blockchain, and Game Development
- **Domain Filtering**: Search and filter certifications by domain
- **3D Card Flip Animation**: Interactive certification cards with 3D flip effects
- **Detailed Information**: 
  - Certification name, provider, and difficulty level
  - Training duration and pricing information
  - Company preferences
  - Role-specific recommendations

#### 📋 My Certificates
- **Certificate Tracking**: View and manage all personal certifications
- **Expiry Date Monitoring**: Real-time tracking of certification expiration dates
- **Status Indicators**: Visual badges showing certificate status (Active, Expiring Soon, Expired)
- **Countdown Display**: Days remaining until expiration with visual progress bars
- **Renewal Reminders**: Automatic alerts for certificates expiring within 30 days
- **Certificate Actions**: View, download, or renew certificates

#### 🎯 ATS Score Calculator
- **Resume Upload**: Upload resumes as TXT, PDF, or DOCX files
- **Text Paste Option**: Directly paste resume content for analysis
- **Comprehensive Scoring**: 0-100 ATS compatibility score
- **Detailed Analysis**: 
  - Strengths and weaknesses identification
  - Keyword matching and keyword density analysis
  - Action verb detection
  - Quantifiable achievements identification
  - Content optimization suggestions

### Admin Dashboard

#### 📊 Compliance Overview
- **Real-time Statistics**: 
  - Total users and certifications
  - Active, expiring, and expired certifications count
- **Visual Stat Cards**: Color-coded metrics for quick insights
- **Organizational Health**: Complete certification compliance picture

#### 👥 User Management
- **User Directory**: Browse all registered users
- **Search Functionality**: Find users by name or email
- **Certificate Details**: Detailed view of each user's certifications
- **Expandable User Cards**: Click to view individual user's full certificate list
- **Certification Table**: Detailed table showing:
  - Certificate name
  - Issue and expiry dates
  - Current status
  - Days remaining

#### 🔔 Expiry Alerts
- **Automatic Alerts**: Monitor all upcoming certificate expirations
- **Alert Prioritization**: Group by status (expired, expiring soon, warning)
- **Direct Actions**: Quick "Notify User" button for each alert
- **Full Alert Information**: User name, certificate details, and expiry dates

## 🛠️ Tech Stack

### Frontend
- **React 18**: Latest React with hooks and functional components
- **React Router v6**: Client-side routing and navigation
- **Redux Toolkit**: State management with simplified API
- **Vite**: Ultra-fast build tool and development server

### Styling
- **CSS3**: 
  - 3D transforms and flip animations
  - Gradient effects and animations
  - Flexbox and CSS Grid layouts
  - Responsive media queries
  - Futuristic dark theme with neon accents

### Build & Development
- **Node.js & npm**: Package management
- **Vite**: Development server and build system
- **ES6+**: Modern JavaScript features

## 📁 Project Structure

```
sdp_proj/
├── src/
│   ├── components/
│   │   ├── RoleSelection.jsx
│   │   ├── UserDashboard.jsx
│   │   ├── CertificationCard.jsx
│   │   ├── MyCertificates.jsx
│   │   └── AdminDashboard.jsx
│   ├── pages/
│   ├── store/
│   │   └── store.js (Redux store configuration)
│   ├── data/
│   │   └── certificationsData.js (Comprehensive certification database)
│   ├── utils/
│   │   └── atsCalculator.js (ATS scoring logic)
│   ├── styles/
│   │   ├── roleSelection.css
│   │   ├── certificationCard.css
│   │   ├── dashboard.css
│   │   ├── myCertificates.css
│   │   └── adminDashboard.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 📊 Certifications Database

### 9 Professional Domains with 27+ Certifications:

1. **Data Science & Analytics** 📊
   - Google Data Analytics Professional Certificate
   - IBM Data Science Professional Certificate
   - Microsoft Certified: Azure Data Scientist Associate

2. **AI & Machine Learning** 🧠
   - AWS Certified Machine Learning – Specialty
   - Microsoft Certified: Azure AI Engineer Associate
   - Google Professional Machine Learning Engineer

3. **Cybersecurity & Networking** 🛡️
   - CompTIA Security+
   - (ISC)² CISSP
   - Certified Ethical Hacker (CEH)
   - CCNA (Cisco Certified Network Associate)

4. **Cloud Computing** ☁️
   - AWS Certified Solutions Architect - Associate
   - Microsoft Certified: Azure Fundamentals
   - Google Cloud Certified - Professional Cloud Architect

5. **DevOps & Site Reliability Engineering** 🛠️
   - Certified Kubernetes Administrator (CKA)
   - AWS Certified DevOps Engineer - Professional
   - Microsoft Certified: DevOps Engineer Expert

6. **Software Development & Web Development** 💻
   - AWS Certified Developer – Associate
   - Oracle Certified Professional: Java SE Developer
   - (ISC)² Certified Secure Software Lifecycle Professional

7. **Database Administration** 💾
   - Oracle Certified Professional: Oracle Database
   - Microsoft Certified: Azure Database Administrator Associate
   - MongoDB Certified DBA Associate

8. **Blockchain Technology** ⛓️
   - Certified Blockchain Developer (CBD)
   - Hyperledger Fabric Developer

9. **Game Development** 🎮
   - Unity Certified Programmer
   - Unreal Engine Certified Professional

## 🚀 Getting Started

### Installation

1. **Navigate to the project**:
   ```bash
   cd sdp_proj
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 UI/UX Features

### Design Elements
- **Futuristic Dark Theme**: Professional dark background with neon gradients
- **Color Scheme**:
  - Primary: Indigo (#6366f1)
  - Secondary: Purple (#8b5cf6)
  - Accent: Pink (#ec4899)
  - Success: Green (#10b981)
  - Warning: Amber (#f59e0b)
  - Danger: Red (#ef4444)

### Animations
- **3D Card Flip**: Smooth 3D perspective transforms on certification cards
- **Fade-in Effects**: Staggered animations for page elements
- **Hover States**: Interactive feedback with transitions and transforms
- **Floating Elements**: Animated background shapes for visual interest
- **Progress Bars**: Dynamic width animations for expiry tracking

### Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes
- **Breakpoints**:
  - Desktop: 1024px+
  - Tablet: 768px - 1023px
  - Mobile: < 768px
- **Flexible Layouts**: CSS Grid and Flexbox for responsive positioning
- **Touch-Friendly**: Larger tap targets and touch-optimized controls

## 🔍 ATS Calculator Features

### Scoring Algorithm
- **Section Detection**: Identifies resume sections (contact, summary, experience, education, skills)
- **Keyword Matching**: Scans for industry-specific and general ATS keywords
- **Action Verbs**: Counts powerful action verbs (achieved, improved, developed, etc.)
- **Quantifiable Metrics**: Finds percentages, dollar amounts, and numerical achievements
- **Content Quality**: Evaluates word count and line structure
- **Domain-Specific Keywords**: Identifies keywords from 7+ professional domains

### Analysis Output
- **Score Interpretation**: Clear scoring ranges with recommendations
- **Strengths Report**: Highlights what the resume does well
- **Improvement Areas**: Specific suggestions for enhancement
- **Keyword Frequency**: Shows matching keywords from database
- **Visual Feedback**: Color-coded score display (red/orange/green)

## 📱 User Workflows

### User Flow
1. Select "User" role from landing page
2. View available certifications by domain
3. Explore certification details with 3D flip cards
4. Navigate to "My Certificates" tab
5. Monitor expiration dates with countdown timers
6. Use ATS calculator to optimize resume
7. Logout to return to role selection

### Admin Flow
1. Select "Admin" role from landing page
2. View compliance statistics dashboard
3. Search and select users to view details
4. Expand user cards to see full certification list
5. Monitor expiry alerts for immediate action
6. Identify at-risk certifications
7. Send renewal reminders to users
8. Logout to return to role selection

## 🔐 State Management

### Redux Store
- **Certifications Slice**: Manages all domain and certification data
- **Users Slice**: Handles user information and their certifications
- **ATS Slice**: Tracks resume analysis data and scores

### State Actions
- `setUserRole`: Set current user role (admin/user)
- `addUserCertification`: Add new certification to user
- `updateUserCertification`: Update certification details
- `setResumeText`: Store resume content
- `setATSScore`: Store calculated ATS score
- `setAnalysis`: Store ATS analysis results

## 🔄 Future Enhancements

- Database integration for persistent storage
- User authentication and authorization
- Certificate upload and verification
- Email notifications for expirations
- Certificate renewal workflow
- Advanced reporting and analytics
- Batch operations for admin
- Certificate templates
- Compliance reports generation
- Integration with certification platforms

## 📄 License

This project is created for professional certification tracking purposes.

---

**Built with ❤️ using React, Redux, and Vite**
