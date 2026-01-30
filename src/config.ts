
export const appConfig = {
  // Logic: If 'auto', filename will be {User_Name}_Resume.pdf. 
  // If string, it will be that exact string.
  pdfDownloadName: 'auto', 
  
  // The path to the user's data directory (relative to public/root)
  userDataPath: '/user-data',

  ui: {
    defaultTheme: 'dark', // 'light' | 'dark'
    showBadges: true,
    showAppreciations: true,
  }
}
