import { createRouter, createWebHistory } from 'vue-router'
// import { useAuthStore } from '@/stores/auth'
const routes = [
  {
    path: '/',
    name: 'FristLoginForm',
    component: () => import('@/views/auth/Login.vue')
  },
  {
    path: '/login',
    name: 'SecondLoginForm',
    component: () => import('@/views/auth/Login.vue')
  },
  {
    path: '/reset-new-password/:token',
    name: 'ResetNewPasswordForm',
    component: () => import('@/views/auth/ResetNewPassword.vue')
  },
  {
    path: '/change-password',
    name: 'ChangePasswordForm',
    component: () => import('@/views/auth/ChangePassword.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/forgot-password',
    name: 'FormFogetPassword',
    component: () => import('@/views/auth/ForgotPassword.vue')
  },

  // =============================
  {
    path: '/layout',
    component: () => import('@/views/layout/Layout.vue'),
    // To ensure that when navigating to child routes,
    // Stay within the parent route, you can set up your routes to be nested properly.
    children: [
      {
        path: '', // Set the default child route
        redirect: 'student-home'
      },
      {
        path: '/user-profile',
        name: 'My Profile',
        component: () => import('@/views/userInfo/UserProfile.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/student-home',
        name: 'Dashboard',
        component: () => import('@/views/dashboards/StudentDashboard.vue'),
        meta: { requiresAuth: true, requiredRoles: [3] }
      },
      {
        path: '/student-comments',
        name: 'My Comments',
        component: () => import('@/views/comment/Comment.vue'),
        meta: { requiresAuth: true, requiredRoles: [3] }
      },
      {
        path: '/student-attendance',
        name: 'My attendance',
        component: () => import('@/views/attendances/StudentAttendance.vue'),
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      {
        path: '/student-score/view',
        name: 'My score',
        component: () => import('@/views/scores/StudentScoreView.vue'),
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },

      {
        path: '/admin-dashboard',
        name: 'Admin Dashboard',
        component: () => import('@/views/dashboards/DirectorDashboard.vue'),
        meta: { requiresAuth: true, requiredRoles: [1] }
      },

      {
        path: '/teacher-dashboard',
        name: 'Teacher Dashboard',
        component: () => import('@/views/dashboards/TeacherDashboard.vue'),
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },

      {
        path: '/student-list',
        name: 'Student management',
        component: () => import('@/views/students/StudentList.vue'),
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      {
        path: '/class-list',
        name: 'Class management',
        component: () => import('@/views/classroom/ClassManagement.vue'),
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      {
        path: '/create-user',
        name: 'Create new user',
        component: () => import('@/views/common/CreateUser.vue'),
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      {
        path: '/student/attendance/:id/details',
        name: 'Student attendance details',
        component: () => import('@/views/attendances/StudentAttendanceDetail.vue'),
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      {
        path: '/teacher-attendance/:id/details',
        name: 'Teacher attendance detail',
        component: () => import('@/views/attendances/TeacherAttendanceDetail.vue'),
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      //
      {
        path: '/check-attendance/student',
        name: 'Check attendance',
        component: () => import('@/views/attendances/CheckAttendance.vue'),
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      {
        path: '/attendance/:classroomId/student',
        name: 'Check attendance',
        component: () => import('@/views/attendances/StudentAttendanceCheck.vue'),
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      {
        path: '/teacher-attendance-list',
        name: 'Teacher attendance list',
        component: () => import('@/views/attendances/TeacherAttendanceList.vue'),
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      {
        path: '/student/:id/details',
        name: 'Student details',
        component: () => import('@/views/students/StudentDetial.vue'),
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      {
        path: '/attendance-report/:id/by-class',
        name: 'Attendance details',
        component: () => import('@/views/attendances/AttendanceReportInClass.vue'),
        props: true,
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      {
        path: '/user/:id/edit',
        name: 'Edit user',
        component: () => import('@/views/common/CreateUser.vue'),
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      {
        path: '/feedback/:studentId/student',
        name: 'Student feedback',
        component: () => import('@/views/comment/SendComment.vue'),
        props: true,
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      {
        path: '/student/:classroomId/feedback',
        name: 'Student Feedback List',
        component: () => import('@/views/comment/StudentFeedbackList.vue'),
        props: true,
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      {
        path: '/student-score-report/:id',
        name: 'Student score report',
        component: () => import('@/views/scores/StudentScoreReport.vue'),
        props: true,
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      {
        path: '/teacher-classroom',
        name: 'Classroom management',
        component: () => import('@/views/classroom/ClassroomTeacher.vue'),
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      {
        path: '/student-score',
        name: 'Student score management',
        component: () => import('@/views/scores/StudentScore.vue'),
        meta: { requiresAuth: true, requiredRoles: [1, 2] }
      },
      {
        path: '/teacher-list',
        name: 'Teacher management',
        component: () => import('@/views/teacher/TeacherList.vue'),
        meta: { requiresAuth: true, requiredRoles: [1] }
      },
      {
        path: '/guardian-list',
        name: 'Guardian management',
        component: () => import('@/views/guardians/GuardianList.vue'),
        meta: { requiresAuth: true, requiredRoles: [1] }
      },
      {
        path: '/add-guadian',
        name: 'Create new guadian',
        component: () => import('@/views/guardians/CreateGuardian.vue'),
        meta: { requiresAuth: true, requiredRoles: [1] }
      },
      {
        path: '/guardian/:id/edit',
        name: 'Update new guadian',
        component: () => import('@/views/guardians/CreateGuardian.vue'),
        meta: { requiresAuth: true, requiredRoles: [1] }
      },
      {
        path: '/:pathMatch(.*)*', // matches any unknown path
        name: 'not-found',
        component: () => import('@/views/auth/Notfound.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_API_URL),
  routes
})

// router.beforeEach ((to, from, next) => {
//   const userRole = useAuthStore().userRole; 
//   // const userRole = localStorage.getItem('role');
//   console.log('user role',userRole);
//   if (userRole === 1) {
//     next('/admin-dashboard');
//   } else if (userRole === 2 ){
//     next('/admin-teacher');
//   }
//   else {
//     next();
//   }
// })
// https://beginnersoftwaredeveloper.com/how-do-i-protect-my-vue-router/?expand_article=1

// router.beforeEach((to, from, next) => {

//   const { isAuthenticated, role } = checkAuth();
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   const requiredRole = to.meta.requiredRole;

//   if (requiresAuth && !isAuthenticated) {
//     next('/login');
//   }
//   else if (to.name === '') {
//     next('/student-home');
//   }
//   else if (requiredRole && !requiredRole.includes(role)) {
//     next('/login');
//   }
//    else {
//     next();
//   }
// })

// function checkAuth() {
//   const token = Cookies.get('access_token');
//   const role = Cookies.get('user_role');
//   return { isAuthenticated: !!token, role: parseInt(role) };
// }

export default router
