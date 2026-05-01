// OTP Storage (in production, use Redis or database)
const otpStore = new Map();

/**
 * Generate a 6-digit OTP
 */
export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}


export function storeOTP(adminId, otp) {
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes
  otpStore.set(adminId, { otp, expiresAt });
  
  // Auto-delete after expiration
  setTimeout(() => {
    otpStore.delete(adminId);
  }, 5 * 60 * 1000);
}

/**
 * Verify OTP
 */
export function verifyOTP(adminId, otp) {
  const stored = otpStore.get(adminId);
  
  if (!stored) {
    return { valid: false, message: 'OTP expired or not found' };
  }
  
  if (Date.now() > stored.expiresAt) {
    otpStore.delete(adminId);
    return { valid: false, message: 'OTP has expired' };
  }
  
  if (stored.otp === otp) {
    otpStore.delete(adminId);
    return { valid: true, message: 'OTP verified' };
  }
  
  return { valid: false, message: 'Invalid OTP' };
}

/**
 * Clear OTP for admin
 */
export function clearOTP(adminId) {
  otpStore.delete(adminId);
}
