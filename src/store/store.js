import { configureStore, createSlice } from '@reduxjs/toolkit';
import { certificationData, mockUsers } from '../data/certificationsData';

const certificationSlice = createSlice({
  name: 'certifications',
  initialState: {
    domains: certificationData,
    allCertifications: certificationData.flatMap(domain => 
      domain.certifications.map(cert => ({ ...cert, domain: domain.domain, domainId: domain.id }))
    )
  },
  reducers: {}
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser: null,
    isAdmin: false,
    allUsers: mockUsers,
    userCertifications: []
  },
  reducers: {
    setUserRole: (state, action) => {
      state.isAdmin = action.payload.isAdmin;
      state.currentUser = action.payload.user;
      if (!action.payload.isAdmin) {
        // For regular users, find their certifications
        const user = mockUsers.find(u => u.id === action.payload.user?.id);
        state.userCertifications = user?.certifications || [];
      }
    },
    addUserCertification: (state, action) => {
      if (state.currentUser) {
        state.userCertifications.push(action.payload);
      }
    },
    updateUserCertification: (state, action) => {
      const index = state.userCertifications.findIndex(cert => cert.certId === action.payload.certId);
      if (index !== -1) {
        state.userCertifications[index] = action.payload;
      }
    }
  }
});

const atsSlice = createSlice({
  name: 'ats',
  initialState: {
    resumeText: '',
    atsScore: 0,
    keywords: [],
    analysis: null
  },
  reducers: {
    setResumeText: (state, action) => {
      state.resumeText = action.payload;
    },
    setATSScore: (state, action) => {
      state.atsScore = action.payload;
    },
    setKeywords: (state, action) => {
      state.keywords = action.payload;
    },
    setAnalysis: (state, action) => {
      state.analysis = action.payload;
    }
  }
});

export const { setUserRole, addUserCertification, updateUserCertification } = userSlice.actions;
export const { setResumeText, setATSScore, setKeywords, setAnalysis } = atsSlice.actions;

export const store = configureStore({
  reducer: {
    certifications: certificationSlice.reducer,
    users: userSlice.reducer,
    ats: atsSlice.reducer
  }
});

export default store;
