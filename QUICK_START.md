# Quick Start Guide - Professional Certification Tracker

## 🚀 Getting Started in 5 Minutes

### 1. Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

### 2. Installation

```bash
# Navigate to the project directory
cd sdp_proj

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

---

## 🎮 Using the Application

### First Time Launch
1. Open `http://localhost:5173/` in your browser
2. You'll see the role selection page
3. Choose **User** or **Admin** to continue

### As a User

#### Tab 1: Available Certifications 📚
- **Search** for certifications by domain name
- **Click on a domain card** to expand and see:
  - Companies that value these certifications
  - Job roles in this domain
  - Available certifications (max 4 per domain)
- **Flip certification cards** to see:
  - Front: Basic info (provider, duration, difficulty, price)
  - Back: Detailed info (description, companies, add button)

#### Tab 2: My Certificates 📋
- View all your saved certifications
- **Filter** by: All, Active, Expiring Soon, Expired
- See **countdown** to expiration
- **Status badges** show certificate state:
  - ✅ Green: Active
  - ⚠️ Orange: Expiring Soon (1-30 days)
  - ❌ Red: Expired
- **Progress bars** visualize time remaining
- **Action buttons**: View, Download, or Renew

#### Tab 3: ATS Score Calculator 🎯
- **Upload your resume**: Drag-drop or click upload
- **Paste text**: Manually enter resume content
- **Get score**: 0-100 ATS compatibility score
- **View analysis**:
  - Strengths ✅ (what you're doing well)
  - Improvements ⚠️ (what to enhance)
  - Keywords found 🔑 (ATS keywords detected)

### As an Admin

#### Dashboard View 📊
- **Compliance Statistics**: See organization-wide metrics
  - Total users
  - Total certifications
  - Active certifications
  - Expiring certifications
  - Expired certifications

#### User Management 👥
- **Search users** by name or email
- **Click expand button** (▶) on user cards to see:
  - Certificate name
  - Issue and expiry dates
  - Current status
  - Days remaining

#### Expiry Alerts 🔔
- **Monitor top 10 alerts** for:
  - Expired certifications
  - Certifications expiring soon
- **Quick actions**: Click "Notify User" to send reminders
- **Color-coded alerts**: Red (expired), Orange (expiring)

---

## 🎨 UI Navigation Guide

### Color Meanings
- **Indigo (#6366f1)**: Primary actions, interactive elements
- **Pink (#ec4899)**: Important actions, admin features
- **Green (#10b981)**: Success, active status
- **Amber (#f59e0b)**: Warnings, expiring soon
- **Red (#ef4444)**: Critical, expired

### Button Guide
| Button | Purpose | Location |
|--------|---------|----------|
| **Continue as User** | Enter user dashboard | Role Selection |
| **Continue as Admin** | Enter admin dashboard | Role Selection |
| **Calculate ATS Score** | Analyze resume | ATS Tab |
| **Logout** | Return to role selection | Top-right navbar |

### Badge Guide
| Badge | Meaning | Color |
|-------|---------|-------|
| ✓ Active | Certificate valid | Green |
| ⚠ Expiring Soon | 1-30 days left | Orange |
| ⏰ Warning | 31-90 days left | Orange |
| ✗ Expired | No longer valid | Red |

---

## 📋 Sample Data

### Mock Users (Admin Dashboard)
1. **John Doe** - Data Scientist
   - Google Data Analytics Professional Certificate (Active)
   - AWS Certified Solutions Architect (Expiring Soon)

2. **Jane Smith** - Cloud Architect
   - Microsoft Certified: Azure Fundamentals (Active)

3. **Bob Wilson** - DevOps Engineer
   - Certified Kubernetes Administrator (Expiring Soon)

### Available Domains
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

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new packages
npm install <package-name>
```

---

## 📱 Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | < 480px | Single column, stacked |
| Tablet | 480-768px | 1-2 columns |
| Desktop | 768-1024px | 2-3 columns |
| Large | 1024px+ | Full layout |

---

## ⚡ Performance Tips

1. **First Load**: Page loads in ~1-2 seconds
2. **Tab Switching**: Instant transitions
3. **Animations**: Smooth 60fps animations
4. **Search**: Real-time filtering
5. **Mobile**: Optimized for 4G+ connections

---

## 🆘 Troubleshooting

### Application Won't Start
```bash
# Clear cache and restart
rm -r node_modules
npm install
npm run dev
```

### Port 5173 Already in Use
```bash
npm run dev -- --port 3000
```

### Styles Not Loading
- Clear browser cache (Ctrl+F5)
- Hard refresh (Ctrl+Shift+R)

### Filter/Search Not Working
- Check if you're typing in the correct input
- Try refreshing the page

---

## 📖 Feature Highlights

### 3D Card Flip Animation
- Click any certification card to flip
- Front shows basic info
- Back shows details
- Smooth 3D perspective

### Real-Time Expiry Countdown
- Days count down automatically
- Visual progress bar updates
- Color changes: Green → Orange → Red
- Works offline (static calculation)

### Advanced ATS Scoring
- Analyzes 50+ ATS factors
- Detects:
  - Resume sections (header, skills, etc.)
  - 100+ keywords
  - 15+ action verbs
  - Quantifiable metrics
- Gives specific improvement suggestions

### Admin Compliance Tracking
- View all users at a glance
- Quick search by name/email
- Expandable details for each user
- Alert system for expirations
- Summary statistics

---

## 🔐 Data Privacy

- All data is stored locally in your browser
- No data is sent to external servers
- Refreshing the page resets to demo data
- Mock users are for demonstration only

---

## 📝 Tips for Best Experience

### For Users
1. Add all your certifications to "My Certificates"
2. Keep expiry dates updated
3. Use ATS calculator to optimize your resume
4. Download certificates for backup

### For Admins
1. Regularly check expiry alerts
2. Notify users about upcoming expirations
3. Monitor compliance statistics
4. Use search to find specific users

---

## 🎓 Learning Resources

### Within the App
- Hover over elements for tooltips
- Click ? icons for help (coming soon)
- Read certification details carefully

### External Resources
- Visit certification provider websites
- Read company career pages
- Check job postings for required certs

---

## 🚀 Next Steps

1. **Try the User Dashboard**: Explore available certifications
2. **Check Your Certs**: View sample user certificates
3. **Calculate ATS Score**: Upload or paste a sample resume
4. **Switch to Admin**: View organizational metrics
5. **Experiment**: Try all features and buttons

---

## 📞 Support

For issues or questions:
1. Check the PROJECT_DOCUMENTATION.md file
2. Review the README_CERTIFICATION_TRACKER.md
3. Inspect browser console (F12) for errors
4. Check that all files are present in src/ folder

---

## ✅ Verification Checklist

- [ ] Application loads without errors
- [ ] Role selection page displays correctly
- [ ] User dashboard shows available certifications
- [ ] 3D card flip animation works
- [ ] My Certificates tab displays mock data
- [ ] ATS calculator accepts resume input
- [ ] Admin dashboard shows statistics
- [ ] Responsive design works on mobile
- [ ] All buttons are clickable
- [ ] Logout returns to role selection

---

**Enjoy using the Professional Certification Tracker! 🎉**

Built with ❤️ using React, Redux, and Vite
