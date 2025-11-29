# Project Files Summary

## Application Overview
This is a comprehensive Professional Certification Tracking System built with React, Redux, and Vite. The application features two distinct dashboards (User and Admin), comprehensive certification management, expiry tracking, and an ATS score calculator for resume optimization.

---

## Core Application Files

### 1. `src/App.jsx` - Main Application Component
- Sets up React Router with three main routes
- Integrates Redux Provider for state management
- Routes:
  - `/` → RoleSelection component
  - `/user-dashboard` → UserDashboard component
  - `/admin-dashboard` → AdminDashboard component

### 2. `src/main.jsx` - Application Entry Point
- Mounts React application to the DOM
- Uses Vite's React plugin

### 3. `src/App.css` - Global Styles
- Root CSS variables for color scheme
- Global animations (fadeIn, slideIn, glow, float)
- Button, input, and card base styles
- Responsive utility classes

---

## Redux Store

### 4. `src/store/store.js` - State Management
**Three Redux slices:**

1. **Certifications Slice**
   - Manages all domain and certification data
   - Provides 9 domains with 27+ certifications

2. **Users Slice**
   - Tracks current user and role (admin/user)
   - Manages user certifications
   - Actions: setUserRole, addUserCertification, updateUserCertification

3. **ATS Slice**
   - Stores resume text and ATS score
   - Tracks keywords and analysis results
   - Actions: setResumeText, setATSScore, setKeywords, setAnalysis

---

## Data Files

### 5. `src/data/certificationsData.js` - Database
**Contains:**
- `certificationData`: Array of 9 professional domains with detailed information:
  - Domain name, emoji, and description
  - List of companies in that field
  - Job roles associated with domain
  - 2-4 certifications per domain with full details
  
- `mockUsers`: Sample user data with:
  - User profiles (id, name, email, role, department)
  - User certifications with issue/expiry dates
  - Certificate status tracking

**9 Domains:**
1. Data Science & Analytics 📊
2. AI & Machine Learning 🧠
3. Cybersecurity & Networking 🛡️
4. Cloud Computing ☁️
5. DevOps & SRE 🛠️
6. Software Development 💻
7. Database Administration 💾
8. Blockchain Technology ⛓️
9. Game Development 🎮

---

## Utility Functions

### 6. `src/utils/atsCalculator.js` - ATS Scoring Logic
**Functions:**

1. **calculateATSScore(resumeText)**
   - Analyzes resume for ATS compatibility
   - Returns: { score: 0-100, matches: [], analysis: { strengths: [], weaknesses: [] } }
   - Checks: sections, keywords, action verbs, quantifiable metrics, formatting

2. **getExpiryStatus(expiryDate)**
   - Returns status: 'active', 'expiring-soon', 'expiring-warning', 'expired'
   - Calculates days remaining
   - Returns human-readable message

3. **formatDate(dateString)**
   - Formats dates to readable format (e.g., "January 15, 2024")

**Databases:**
- `keywordsDatabase`: Domain-specific keywords for matching
- `atsKeywords`: General ATS keywords

---

## React Components

### 7. `src/components/RoleSelection.jsx` - Landing Page
**Features:**
- Role selection between User and Admin
- Beautiful 3D animated cards with hover effects
- Background animation elements (cube, sphere, pyramid)
- Dispatches setUserRole action on selection
- Navigates to appropriate dashboard

**Sections:**
- Header with app title
- Two role cards (User and Admin)
- Info section about certifications

### 8. `src/components/UserDashboard.jsx` - User Main Page
**Features:**
- Three tabs: Available Certifications, My Certificates, ATS Calculator
- Navbar with search and logout
- Search functionality for certification filtering
- User greeting and welcome message

**Embedded Component:**
- **ATSCalculator** - Full ATS scoring interface with:
  - File upload area (drag-and-drop)
  - Text paste option
  - Calculate button
  - Results display with score, analysis, and keywords

### 9. `src/components/CertificationCard.jsx` - 3D Card Component
**Features:**
- 3D flip animation on click
- Front side: Basic cert info (name, provider, duration, difficulty, price)
- Back side: Detailed info (description, companies, add button)
- Reusable across all certification displays
- Hover effects and transitions

### 10. `src/components/MyCertificates.jsx` - Certificate Management
**Features:**
- Display user's certificates in grid layout
- Filter options: All, Active, Expiring Soon, Expired
- Status badges with color coding
- Countdown display showing days remaining
- Certificate progress bars
- Action buttons: View, Download/Renew
- Certificate summary section with statistics
- No certificates message when empty

**Certificate Card Elements:**
- Status badge (top right)
- Certificate title and domain
- Issue and expiry dates
- Countdown with days remaining
- Action buttons
- Progress bar

### 11. `src/components/AdminDashboard.jsx` - Admin Panel
**Features:**
- Compliance overview statistics
- User directory with search
- Expandable user cards showing certificates
- Expiry alerts section
- Color-coded status badges

**Key Elements:**
1. **Stats Section**: Total users, certs, active, expiring, expired
2. **Users Section**: Grid of user cards with expandable details
3. **Certs Table**: Shows cert name, dates, status, days remaining
4. **Alerts Section**: Up to 10 latest alerts with notify button

---

## Styling Files

### 12. `src/styles/roleSelection.css` - Landing Page Styles
- Role selection container and content layout
- Role cards with gradient backgrounds
- 3D animations for cards
- Hover effects and transitions
- Background animation elements (cube, sphere, pyramid)
- Responsive design for mobile/tablet/desktop
- Info section styling

### 13. `src/styles/certificationCard.css` - 3D Card Styles
- Perspective and 3D flip transforms
- Card front and back styling
- Flip animation on hover
- Content layout (header, body, footer)
- Difficulty level color coding
- Company and role badges
- Responsive adjustments

### 14. `src/styles/dashboard.css` - User Dashboard Styles
- Navbar styling with brand and search
- Tab navigation and content switching
- Domain cards grid layout
- Expandable domain details
- Company and role badge styling
- ATS calculator section
- Upload area and file input styling
- Score display and result sections
- Keyword and analysis display
- Responsive breakpoints for all screen sizes

### 15. `src/styles/myCertificates.css` - Certificate Management Styles
- Filter button styling
- Certificate grid layout
- Certificate card styling with status borders
- Status badges (active, expiring, expired)
- Countdown display styling
- Progress bar styling
- Action buttons styling
- Certificate summary grid
- Responsive mobile layout

### 16. `src/styles/adminDashboard.css` - Admin Dashboard Styles
- Admin navbar styling
- Stats grid and stat cards
- Stat card colors by type
- User cards grid layout
- Expandable user details
- Certificate table styling
- Status badge colors
- Alert items styling
- Alert animations with delays
- Responsive table layout for mobile

### 17. `src/index.css` - Global CSS
- Root variables and color scheme
- Font and line-height settings
- Base element styling (links, buttons)
- Default styles inherited by all components

---

## Configuration Files

### 18. `package.json` - Project Dependencies
**Dependencies:**
- react, react-dom: UI framework
- react-router-dom: Client-side routing
- redux, react-redux: State management
- @reduxjs/toolkit: Redux utilities
- axios: HTTP client (for future API calls)

**Dev Dependencies:**
- @vitejs/plugin-react: Vite React plugin
- vite: Build tool

### 19. `vite.config.js` - Build Configuration
- React plugin configuration
- HMR settings for hot module replacement

---

## File Statistics

### Total Files Created/Modified:
- **Components**: 5 JSX files
- **Styles**: 6 CSS files + 1 App.css
- **Data**: 1 data file
- **Store**: 1 Redux store file
- **Utils**: 1 utility file
- **Config**: 3 config files
- **Root**: App.jsx, main.jsx, package.json, vite.config.js

### Lines of Code:
- React Components: ~1,800 lines
- CSS Styling: ~3,000 lines
- Data & Utils: ~600 lines
- Configuration: ~100 lines

---

## Key Features by File

### User Experience Features:
- ✅ 3D card flip animations (certificationCard.css)
- ✅ Responsive design across all styles
- ✅ Dark theme with neon gradients
- ✅ Smooth transitions and hover effects
- ✅ Status indicators with color coding
- ✅ Real-time countdown timers
- ✅ Search and filter functionality
- ✅ Expandable details sections

### Functionality Features:
- ✅ Role-based access control (RoleSelection.jsx)
- ✅ Certificate tracking and expiry monitoring (MyCertificates.jsx)
- ✅ ATS resume scoring (UserDashboard.jsx, atsCalculator.js)
- ✅ Admin user management (AdminDashboard.jsx)
- ✅ Compliance tracking (AdminDashboard.jsx)
- ✅ State management with Redux (store.js)
- ✅ 9 professional domains with 27+ certifications (certificationsData.js)

---

## Development Setup

### To Run the Application:
```bash
cd sdp_proj
npm install
npm run dev
# Navigate to http://localhost:5173/
```

### To Build for Production:
```bash
npm run build
```

---

## Project Structure Visualization

```
sdp_proj/
├── src/
│   ├── App.jsx ★ Main router setup
│   ├── App.css ★ Global styles
│   ├── main.jsx ★ Entry point
│   ├── index.css ★ Global CSS
│   │
│   ├── components/
│   │   ├── RoleSelection.jsx ★ Landing page
│   │   ├── UserDashboard.jsx ★ User main page + ATS
│   │   ├── CertificationCard.jsx ★ 3D card component
│   │   ├── MyCertificates.jsx ★ User certificates
│   │   └── AdminDashboard.jsx ★ Admin panel
│   │
│   ├── store/
│   │   └── store.js ★ Redux store (3 slices)
│   │
│   ├── data/
│   │   └── certificationsData.js ★ Database (9 domains, 27+ certs, mock users)
│   │
│   ├── utils/
│   │   └── atsCalculator.js ★ ATS scoring + date functions
│   │
│   └── styles/
│       ├── roleSelection.css ★ Landing styles
│       ├── certificationCard.css ★ 3D card styles
│       ├── dashboard.css ★ User dashboard styles
│       ├── myCertificates.css ★ Cert mgmt styles
│       └── adminDashboard.css ★ Admin styles
│
├── public/
├── package.json ★ Dependencies
├── vite.config.js ★ Build config
└── README.md ★ Documentation
```

★ = Custom created/modified file

---

This comprehensive certification tracking application provides a complete solution for managing professional certifications with an intuitive UI, robust functionality, and excellent responsive design across all devices.
