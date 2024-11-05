function detectMobileDevice(agent: string): boolean {
    const mobileRegex = [
      /Android/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ]
  
    return mobileRegex.some(mobile => agent.match(mobile))
  }
  
  const isMobile = detectMobileDevice(window.navigator.userAgent)
  
  export default isMobile;